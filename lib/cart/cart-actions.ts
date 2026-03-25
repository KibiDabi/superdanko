"use server";

import {
  getCart,
  addToCart,
  removeFromCart,
  updateCart,
  createCheckout,
  clearCart,
} from "./cart";
import { CartItemSchema } from "../types";
import type { CartServiceResult, CheckoutResult } from "./cart";

type CartActionSuccess = {
  success: true;
  cart: CartItemSchema[];
};

type CartActionFailure = {
  success: false;
  error: string;
  cart?: CartItemSchema[];
};

export type CartActionResult = CartActionSuccess | CartActionFailure;

export async function getCartAction(): Promise<CartActionResult> {
  try {
    const cart = await getCart();
    return { success: true, cart };
  } catch (error) {
    console.error("❌ getCartAction error:", error);
    return { success: false, error: "Failed to fetch cart" };
  }
}

export async function addToCartAction(
  variantId: string,
  quantity: number,
): Promise<CartActionResult> {
  const result: CartServiceResult = await addToCart({
    variantId,
    quantity,
    cartId: undefined,
  });

  if (!result.success) {
    return { success: false, error: result.error };
  }

  const cart = await getCart();
  return { success: true, cart };
}

export async function removeFromCartAction(
  cartItemId: string,
): Promise<CartActionResult> {
  const result: CartServiceResult = await removeFromCart({ cartItemId });

  if (!result.success) {
    return { success: false, error: result.error }
  }

  const cart = await getCart();
  return { success: true, cart };
}

export async function updateCartAction(
  cartItemId: string,
  quantity: number,
): Promise<CartActionResult> {
  const result: CartServiceResult = await updateCart({ cartItemId, quantity });

  if (!result.success) {
    return { success: false, error: result.error }
  }

  const cart = await getCart();
  return { success: true, cart };
}

export async function createCheckoutAction(): Promise<CheckoutResult> {
  return createCheckout();
}

/**
 * Clears the current session's cart (e.g. after successful Shopify checkout).
 * Call this from your checkout success page so the user sees an empty cart when they return.
 */
export async function clearCartAction(): Promise<{ success: boolean }> {
  try {
    await clearCart();
    return { success: true };
  } catch (error) {
    console.error("❌ clearCartAction error:", error);
    return { success: false };
  }
}
