"use server";

const { db } = require("@vercel/postgres");
import { cookies } from "next/headers";

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

/* Fetch the cart items for a specific cart */

export async function getCart(): Promise<any[]> {
  const cookieStore = cookies();
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
            p.id AS product_id,
            p.name AS product_name,
            p.price AS product_price,
            p.image_url AS product_image
       FROM cart_items ci
       JOIN variants v ON ci.variant_id = v.id 
       JOIN products p ON v.product_id = p.id 
       WHERE ci.cart_id = $1;
      `,
      [cartId]
    );
    return result.rows;
  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    return [];
  }
}

export async function addToCart({
  variantId,
  quantity,
  cartId,
}: AddToCartParams) {
  const cookieStore = cookies();
  let currentCartId = cartId || cookieStore.get("cartId")?.value;

  if (!currentCartId) {
    // Create a new cart if none exists
    const newCart = await db.query(`
      INSERT INTO cart DEFAULT VALUES RETURNING id;`);

    currentCartId = newCart.rows[0]?.id;

    // Store the new cartId in cookies
    cookies().set("cartId", String(currentCartId));
  }

  try {
    // Check if the product is already in cart
    const existingItem = await db.query(
      `SELECT id FROM cart_items 
            WHERE cart_id = $1 AND variant_id = $2;`,
      [currentCartId, variantId]
    );

    if (existingItem.rows.length > 0) {
      // Update quantity if product is already in the cart
      await db.query(
        `UPDATE cart_items SET quantity = quantity + $1 WHERE id = $2;`,
        [quantity, existingItem.rows[0].id]
      );
    } else {
      // Add new product to the cart
      await db.query(
        `INSERT INTO cart_items (cart_id, variant_id, quantity) VALUES ($1, $2, $3);`,
        [currentCartId, variantId, quantity]
      );
    }

    console.log("✅ Product added to cart");
  } catch (error) {
    console.error("❌ Error adding to cart:", error);
  }
}

export async function removeFromCart({ cartItemId }: RemoveFromCartParams) {
  try {
    await db.query(`DELETE FROM cart_items WHERE id = $1;`, [cartItemId]);
    console.log("✅ Product removed from cart");
  } catch (error) {
    console.error("❌ Error removing from cart:", error);
  }
}

export async function clearCart(): Promise<void> {
  const cookieStore = cookies();
  const cartId = cookieStore.get("cartId")?.value;

  if (!cartId) return;

  try {
    await db.query(`DELETE FROM cart_items WHERE cart_id = $1;`, [cartId]);
    console.log("✅ Cart cleared");
  } catch (error) {
    console.error("❌ Error clearing cart:", error);
  }
}

export async function updateCart({ cartItemId, quantity }: UpdateCartParams) {
  try {
    if (quantity > 0) {
      await db.query(
        `
                UPDATE cart_items SET quantity = $1 WHERE id = $2;`,
        [quantity, cartItemId]
      );
      console.log("✅ Cart updated");
    } else {
      // Remove the item if quantity is 0
      await removeFromCart({ cartItemId });
    }
  } catch (error) {
    console.error("❌ Error updating cart:", error);
  }
}
