import {
  getCart,
  addToCart,
  removeFromCart,
  updateCart,
} from "@/lib/cart/cart";
import { create } from "zustand";

interface CartState {
  cartItems: any[];
  fetchCart: () => Promise<void>;
  addItemToCart: (variantId: string, quantity: number) => Promise<void>;
  removeItemFromCart: (cartItemId: string) => Promise<void>;
  updateItemFromCart: (cartItemId: string, quantity: number) => Promise<void>;
  setCartItems: (items: any[]) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],

  fetchCart: async () => {
    const response = await getCart();
    set({ cartItems: response });
  },

  addItemToCart: async (variantId, quantity) => {
    try {
      await addToCart({ variantId, quantity, cartId: undefined });
      const updatedCart = await getCart();
      set({ cartItems: updatedCart });
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  },

  removeItemFromCart: async (cartItemId) => {
    try {
      await removeFromCart({ cartItemId });

      set((state) => ({
        cartItems: state.cartItems.filter(
          (item) => item.product_id !== cartItemId
        ),
      }));
    } catch (err) {
      console.error("Error removing item to cart", err);
    }
  },

  updateItemFromCart: async (cartItemId, quantity) => {
    try {
      await updateCart({ cartItemId, quantity });

      set((state) => ({
        cartItems:
          quantity > 0
            ? state.cartItems.map((item) =>
                item.product_id === cartItemId ? { ...item, quantity } : item
              )
            : state.cartItems.filter((item) => item.product_id !== cartItemId),
      }));
    } catch (err) {
      console.error("Error updating item to cart", err);
    }
  },

  setCartItems: (items) => set({ cartItems: items }),
}));
