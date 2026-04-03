import { shopifyFetch } from "./shopify";

interface CartLineItem {
  variantId: string;
  quantity: number;
}

interface CartCreatePayload {
  cartCreate: {
    cart?: {
      id: string;
      checkoutUrl: string;
      totalQuantity: number;
      cost: {
        subtotalAmount: { amount: string; currencyCode: string };
        totalAmount: { amount: string; currencyCode: string };
      };
    };
    userErrors: Array<{
      message: string;
      field: string[] | null;
      code?: string;
    }>;
    warnings?: Array<{
      code: string;
      message: string;
    }>;
  };
}

interface CartLinesAddPayload {
  cartLinesAdd: {
    cart?: {
      id: string;
      checkoutUrl: string;
    };
    userErrors: Array<{
      message: string;
      field: string[] | null;
    }>;
  };
}

/**
 * Creates a Shopify cart/checkout using the Storefront API
 * @param lineItems - Array of items with Shopify variant IDs and quantities
 * @returns Checkout URL to redirect the user to
 */
export async function createShopifyCheckout(
lineItems: CartLineItem[], cartId: string,
): Promise<string> {

  const mutation = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          totalQuantity
          cost {
          subtotalAmount {
          amount
          currencyCode
          } 
          totalAmount {
          amount
          currencyCode
          }
        }
        }
        userErrors {
          message
          field
          code
        }
          warnings {
          code 
          message
          }
      }
    }
  `;

  const variables = {
    input: {
      lines: lineItems.map((item) => ({
        merchandiseId: item.variantId,
        quantity: item.quantity,
      })),
      attributes: [
        {
          key: 'cart_id',
          value: cartId,
        }
      ]
    },
  };

  try {
    const response = await shopifyFetch<CartCreatePayload>(mutation, variables);

    // Extract data from response (Shopify wraps it in a 'data' property)
    const cartData = response.data?.cartCreate;

    if (!cartData) {
      console.error("Unexpected Shopify response shape:", {
        response,
        lineItems,
      });
      throw new Error("Failed to create cart");
    }

    if (cartData.userErrors?.length) {
      console.error("Shopify Cart Errors:", cartData.userErrors, { lineItems });
      throw new Error(
        cartData.userErrors[0]?.message || "Failed to create cart",
      );
    }

    const checkoutUrl = cartData.cart?.checkoutUrl;

    if (!checkoutUrl) {
      console.error("Full Shopify response:", { response, lineItems });
      throw new Error("No checkout URL returned from Shopify");
    }
    return checkoutUrl;
  } catch (error) {
    console.error("Error creating Shopify checkout:", { error, lineItems });
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to create checkout with Shopify");
  }
}

/**
 * Adds items to an existing Shopify cart
 * @param cartId - The Shopify cart ID
 * @param lineItems - Array of items to add
 */
export async function addLineItemsToCart(
  cartId: string,
  lineItems: CartLineItem[],
): Promise<string | null> {
  const mutation = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          message
          field
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines: lineItems.map((item) => ({
      merchandiseId: item.variantId,
      quantity: item.quantity,
    })),
  };

  try {
    const response = await shopifyFetch<CartLinesAddPayload>(
      mutation,
      variables,
    );

    // Extract data from response
    const cartData = response.data?.cartLinesAdd;

    if (!cartData) {
      console.error("Unexpected Shopify cartLinesAdd response:", response);
      return null;
    }

    if (cartData?.userErrors?.length) {
      console.error("Shopify Add Line Items Errors:", cartData.userErrors);
      return null;
    }

    return cartData?.cart?.checkoutUrl || null;
  } catch (error) {
    console.error("Error adding line items to cart:", error);
    return null;
  }
}
