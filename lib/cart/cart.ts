"use server";

const { db } = require("@vercel/postgres");
import { cookies } from "next/headers";
import { createShopifyCheckout } from "../shopify/checkout";
import { CartItemSchema } from "../types";

interface CartParams {
  cartId?: string;
}

interface AddToCartParams extends CartParams {
  variantId: string;
  quantity: number;
}

interface RemoveFromCartParams {
  cartItemId: string;
}

interface UpdateCartParams {
  cartItemId: string;
  quantity: number;
}

export interface DBCartItem {
  cart_item_id: string;
  quantity: number;
  variant_id: number;
  variant_size: string;
  variant_price: number;
  shopify_variant_id: string | null;
  product_id: string;
  product_name: string;
  product_price: number;
  product_image: string | null;
}

export type CheckoutResult =
  | { success: true; checkoutUrl: string }
  | { success: false; error: string };

export type CartServiceResult =
  | { success: true }
  | { success: false; error: string };

/* Fetch the cart items for a specific cart */

export async function getCart(): Promise<CartItemSchema[]> {
  const cookieStore = await cookies();
  let cartId = cookieStore.get("cartId")?.value;

  if (!cartId) return [];

  try {
    const result = await db.query(
      `SELECT 
            ci.id AS cart_item_id,
            ci.quantity,
            v.id AS variant_id,
            v.size AS variant_size,
            v.price AS variant_price,
            v.shopify_variant_id,
            p.id AS product_id,
            p.name AS product_name,
            p.price AS product_price,
            p.image_url AS product_image
       FROM cart_items ci
       JOIN variants v ON ci.variant_id = v.id 
       JOIN products p ON v.product_id = p.id 
       WHERE ci.cart_id = $1;
      `,
      [cartId],
    );
    return result.rows as CartItemSchema[];
  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    return [];
  }
}

export async function addToCart({
  variantId,
  quantity,
  cartId,
}: AddToCartParams): Promise<CartServiceResult> {
  // 1) VALIDATE INPUTS FIRST
  if (!variantId) {
    console.error("addToCart called without variantId");
    return { success: false, error: "Missing product variant" };
  }

  if (!Number.isFinite(quantity) || quantity <= 0) {
    console.error("addToCart called with invalid quantity:", quantity);
    return { success: false, error: "Invalid quantity" };
  }

  const cookieStore = await cookies();
  let currentCartId = cartId || cookieStore.get("cartId")?.value;

  if (!currentCartId) {
    // Create a new cart if none exists
    try {
      const newCart = await db.query(`
      INSERT INTO cart DEFAULT VALUES RETURNING id;`);

      currentCartId = newCart.rows[0]?.id;

      // Store the new cartId in cookies
      cookieStore.set("cartId", String(currentCartId), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    } catch (error) {
      console.error("❌ Error creating new cart:", error);
      return { success: false, error: "Could not create cart" };
    }
  }
  try {
    // Check if the product is already in cart
    const existingItem = await db.query(
      `SELECT id FROM cart_items 
            WHERE cart_id = $1 AND variant_id = $2;`,
      [currentCartId, variantId],
    );

    if (existingItem.rows.length > 0) {
      // Update quantity if product is already in the cart
      await db.query(
        `UPDATE cart_items SET quantity = quantity + $1 WHERE id = $2;`,
        [quantity, existingItem.rows[0].id],
      );
    } else {
      // Add new product to the cart
      await db.query(
        `INSERT INTO cart_items (cart_id, variant_id, quantity) VALUES ($1, $2, $3);`,
        [currentCartId, variantId, quantity],
      );
    }

    return { success: true };
  } catch (error) {
    console.error("❌ Error adding to cart:", error);
    return { success: false, error: "Failed to add item to cart" };
  }
}

export async function removeFromCart({
  cartItemId,
}: RemoveFromCartParams): Promise<CartServiceResult> {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId")?.value;

  if (!cartId) {
    console.warn("removeFromCart called but no cartId cookie found");
    return { success: false, error: "Cart not found" };
  }

  try {
    await db.query(`DELETE FROM cart_items WHERE id = $1 AND cart_id = $2;`, [
      cartItemId,
      cartId,
    ]);
    return { success: true };
  } catch (error) {
    console.error("❌ Error removing from cart:", error);
    return { success: false, error: "Failed to remove item from cart" };
  }
}

export async function clearCart(): Promise<void> {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId")?.value;

  if (!cartId) return;

  try {
    await db.query(`DELETE FROM cart_items WHERE cart_id = $1;`, [cartId]);

    // Optionally clear the cookie
    cookieStore.set("cartId", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

  } catch (error) {
    console.error("❌ Error clearing cart:", error);
  }
}

export async function updateCart({
  cartItemId,
  quantity,
}: UpdateCartParams): Promise<CartServiceResult> {
  if (!cartItemId) {
    console.error("updateCart called without cartItemId");
    return { success: false, error: "Missing cart item" };
  }

  if (!Number.isFinite(quantity) || quantity < 0) {
    console.error("updateCart called with invalid quantity:", quantity);
    return { success: false, error: "Invalid quantity" };
  }

  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId")?.value;
  if (!cartId) {
    console.warn("updateCart called but no cartId cookie found");
    return { success: false, error: "Cart not found" };
  }

  try {
    if (quantity > 0) {
      await db.query(
        `
                UPDATE cart_items SET quantity = $1 WHERE id = $2 AND cart_id = $3;`,
        [quantity, cartItemId, cartId],
      );
      return { success: true };
    } else {
      // Remove the item if quantity is 0
      await removeFromCart({ cartItemId });
      return { success: true };
    }
  } catch (error) {
    console.error("❌ Error updating cart:", error);
    return { success: false, error: "Failed to update cart" };
  }
}

/**
 * Creates a Shopify checkout from the current cart and returns the checkout URL
 * @returns Shopify checkout URL or null if failed
 */
export async function createCheckout(): Promise<CheckoutResult> {
  try {
    const cartItems = await getCart();

    // Prevent empty cart checkout
    if (cartItems.length === 0) {
      return {
        success: false,
        error: "Cart is empty",
      };
    }

    // Validate that all items have Shopify variant IDs
    const itemsWithoutShopifyId = cartItems.filter(
      (item) => !item.shopify_variant_id,
    );

    if (itemsWithoutShopifyId.length > 0) {
      console.error(
        "Some items don't have Shopify variant IDs:",
        itemsWithoutShopifyId,
      );
      return {
        success: false,
        error: "Some items in your cart are not available for checkout",
      };
    }

    // Format line items for Shopify: mapping from local type to API type
    const lineItems = cartItems.map((item) => ({
      variantId: item.shopify_variant_id!,
      quantity: Number(item.quantity),
    }));

    // Create checkout using Shopify Storefront API
    const checkoutUrl = await createShopifyCheckout(lineItems);

    if (!checkoutUrl) {
      return {
        success: false,
        error: "Shopify returned an empty checkout URL.",
      };
    }

    return {
      success: true,
      checkoutUrl,
    };
  } catch (error) {
    console.error("❌ Error creating checkout:", error);

    if (error instanceof Error) {
      if (error.message.includes("Missing env")) {
        return {
          success: false,
          error: "Checkout is not configured yet. Please contact support.",
        };
      }

      if (error.message.includes("Shopify Storefront API error")) {
        return {
          success: false,
          error: "Shopify checkout is temporarily unavailable. Please try again in a moment.",
        };
      }

      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
