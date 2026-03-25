"use client";

import {
  getCartAction,
  addToCartAction,
  removeFromCartAction,
  updateCartAction,
  createCheckoutAction,
  clearCartAction,
  CartActionResult,
} from "@/lib/cart/cart-actions";
import { CartItemSchema } from "@/lib/types";
import { create } from "zustand";

interface CartState {
  cartItems: CartItemSchema[];
  isLoading: boolean;
  error: string | null;

  fetchCart: () => Promise<void>;
  addItemToCart: (variantId: string, quantity: number) => Promise<void>;
  removeItemFromCart: (cartItemId: string) => Promise<void>;
  updateItemFromCart: (cartItemId: string, quantity: number) => Promise<void>;
  createCheckoutFromCart: () => Promise<
    | { success: true; checkoutUrl: string }
    | { success: false; error: string }
  >;
  setCartItems: (items: CartItemSchema[]) => void;
  clearError: () => void;
  /** Call after user returns from Shopify checkout to clear local cart and sync UI. */
  clearCartAfterCheckout: () => Promise<void>;
}

function handleCartActionResult(
  set: (
    partial: Partial<CartState> | ((state: CartState) => Partial<CartState>),
  ) => void,
  result: CartActionResult,
) {
  if (result.success) {
    set({
      cartItems: result.cart,
      isLoading: false,
      error: null,
    });
  } else {
    set({
      isLoading: false,
      error: result.error,
      // keep existing cartItems; don’t overwrite if we have no updated cart
    });
  }
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  isLoading: false,
  error: null,

  fetchCart: async () => {
    try {
      set({ isLoading: true, error: null });
      const result = await getCartAction();

      if (result.success) {
        set({ cartItems: result.cart, isLoading: false });
      } else {
        set({ isLoading: false, error: result.error });
      }
      
    } catch (error) {
      console.error("Error fetching cart", error);
      set({ isLoading: false, error: "Failed to fetch cart" });
    }
  },

  addItemToCart: async (variantId, quantity) => {
    try {
      set({ isLoading: true, error: null });
      const result = await addToCartAction(variantId, quantity);

      handleCartActionResult(set, result);

    } catch (error) {
      console.error("Error adding item to cart", error);
      set({ isLoading: false, error: "Failed to add item to cart" });
    }
  },

  removeItemFromCart: async (cartItemId) => {
    try {
      set({ isLoading: true, error: null });
      const result = await removeFromCartAction(cartItemId);
      handleCartActionResult(set, result);
    } catch (error) {
      console.error("Error removing item from cart", error);
      set({ isLoading: false, error: "Failed to remove item from cart" });
    }
  },

  updateItemFromCart: async (cartItemId, quantity) => {
    try {
      set({ isLoading: true, error: null });
      const result = await updateCartAction(cartItemId, quantity);
      handleCartActionResult(set, result);
    } catch (error) {
      console.error("Error updating item in cart", error);
      set({ isLoading: false, error: "Failed to update item in cart" });
    }
  },

  createCheckoutFromCart: async () => {
    try {
      return await createCheckoutAction();
    } catch (error) {
      console.error("Error creating checkout", error);
      return { success: false, error: "Failed to create checkout" };
    }
  },

  setCartItems: (items) => set({ cartItems: items }),

  clearError: () => set({ error: null }),

  clearCartAfterCheckout: async () => {
    try {
      const result = await clearCartAction();
      if (result.success) {
        set({ cartItems: [], error: null });
      }
    } catch (error) {
      console.error("Error clearing cart after checkout", error);
    }
  },
}));
