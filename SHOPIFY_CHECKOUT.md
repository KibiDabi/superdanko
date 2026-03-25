# Shopify Checkout Integration

This document explains the Shopify checkout implementation in your Next.js application.

## Overview

The implementation uses Shopify's Storefront API to create checkout sessions directly from your local cart, redirecting users to Shopify's hosted checkout page for payment processing.

## Architecture

### Files Modified/Created

1. **`lib/shopify/checkout.ts`** (NEW)
   - Contains Shopify Storefront API checkout functions
   - `createShopifyCheckout()` - Creates a new checkout session
   - `addLineItemsToCheckout()` - Adds items to existing checkout (optional)

2. **`lib/cart/cart.ts`** (MODIFIED)
   - Added `createCheckout()` server action
   - Updated `getCart()` to fetch `shopify_variant_id` from database
   - Validates cart items have Shopify variant IDs before checkout

3. **`app/components/Cart.tsx`** (MODIFIED)
   - Changed checkout button from navigation to Shopify redirect
   - Added loading state during checkout creation
   - Displays error toasts if checkout fails

4. **`lib/types.ts`** (MODIFIED)
   - Added `shopify_variant_id` to `VariantTableType`
   - Added `shopify_variant_id` to `CartItemSchema`

## How It Works

### 1. User adds items to cart
- Items are stored in your local database with variant IDs
- Each variant has a `shopify_variant_id` (GID format: `gid://shopify/ProductVariant/...`)

### 2. User clicks "Continue to Checkout"
- Button triggers `handleCheckout()` function
- Shows loading spinner and disables button

### 3. Server creates Shopify checkout
- `createCheckout()` server action fetches cart items
- Validates all items have Shopify variant IDs
- Calls `createShopifyCheckout()` with line items
- GraphQL mutation creates checkout on Shopify

### 4. User redirects to Shopify
- On success, user is redirected to `checkoutUrl`
- Shopify handles payment, shipping, tax calculation
- After completion, user returns to your site (configure return URL in Shopify settings)

## Configuration

### Environment Variables
Ensure these are set in your `.env.local`:

```env
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
```

### Database Schema
Your `variants` table must include:

```sql
ALTER TABLE variants 
ADD COLUMN shopify_variant_id TEXT;
```

This column stores the Shopify Global ID (GID) for each variant.

## Shopify Variant ID Format

Shopify variant IDs use the GID format:
```
gid://shopify/ProductVariant/47549744578819
```

### How to Get Shopify Variant IDs

1. **Via Shopify Admin GraphQL**:
```graphql
query {
  products(first: 10) {
    edges {
      node {
        id
        title
        variants(first: 10) {
          edges {
            node {
              id
              title
              price
            }
          }
        }
      }
    }
  }
}
```

2. **Via Storefront API**:
```graphql
query {
  products(first: 10) {
    edges {
      node {
        id
        title
        variants(first: 10) {
          edges {
            node {
              id
              title
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }
  }
}
```

## Testing

### Test the Integration

1. **Add products to cart**:
   - Ensure products have valid `shopify_variant_id` in database
   
2. **Click checkout button**:
   - Should show loading state
   - Should redirect to Shopify checkout page

3. **Error Scenarios**:
   - Empty cart → Shows "Cart is empty" error
   - Missing Shopify IDs → Shows "items not available" error
   - API failure → Shows "Failed to create checkout" error

### Example Test Query

```javascript
// Test creating a checkout manually
const testCheckout = async () => {
  const result = await createCheckout();
  console.log(result);
  // Should return: { success: true, checkoutUrl: "https://..." }
};
```

## Shopify Storefront API Details

### Checkout Create Mutation

```graphql
mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      webUrl
    }
    checkoutUserErrors {
      message
      field
    }
  }
}
```

### Input Format

```javascript
{
  input: {
    lineItems: [
      {
        variantId: "gid://shopify/ProductVariant/47549744578819",
        quantity: 2
      }
    ]
  }
}
```

## Post-Checkout Flow

### Clear local cart (recommended)

When the user finishes paying on Shopify, redirect them to your **checkout success page** so the app can clear their local cart:

1. **Success page**: `app/checkout/success/page.tsx`  
   - On load it calls `clearCartAfterCheckout()` (server clears DB + cookie, store clears UI).
   - User sees a thank-you message and links to home / products.

2. **Redirect in Shopify**  
   In **Shopify Admin** → **Settings** → **Checkout**:
   - Under **Order status page** (or **Additional scripts** / redirect URL, depending on your Shopify version), set the “Thank you” or post-payment redirect URL to:
   - `https://YOUR_DOMAIN/checkout/success`  
   (replace `YOUR_DOMAIN` with your real site, e.g. `www.superdanko.com`.)

3. **Optional**: Listen for webhooks (e.g. `orders/paid`) if you need to clear the cart even when the user never hits the success page (e.g. closed the tab). That requires storing a mapping from Shopify checkout/order to your `cartId` when creating the checkout.

## Error Handling

The implementation handles several error cases:

1. **Empty Cart**: Returns error before API call
2. **Missing Shopify IDs**: Validates all items have IDs
3. **Shopify API Errors**: Catches and logs GraphQL errors
4. **Network Errors**: Try-catch blocks prevent crashes

All errors are displayed to users via toast notifications.

## Future Enhancements

Consider implementing:

1. **Cart Synchronization**:
   - Clear local cart after successful Shopify order
   - Listen to Shopify webhooks for order status

2. **Abandoned Cart Recovery**:
   - Save checkout ID for later retrieval
   - Send reminder emails via Shopify

3. **Custom Checkout Attributes**:
   - Add customer notes
   - Apply discount codes
   - Set shipping preferences

4. **Multi-Currency Support**:
   - Use Shopify's `presentmentCurrencyCode`
   - Display prices in user's currency

## Troubleshooting

### Common Issues

**"Failed to create checkout"**
- Check Shopify credentials in `.env.local`
- Verify Storefront API token has checkout permissions
- Check variant IDs are valid GIDs

**"Items not available for checkout"**
- Run database migration to add `shopify_variant_id` column
- Populate variant IDs using backfill script
- Verify IDs match Shopify products

**Redirect not working**
- Check browser console for errors
- Verify `window.location.href` receives valid URL
- Test URL manually in browser

### Debug Mode

Add logging to debug:

```typescript
// In lib/shopify/checkout.ts
console.log("Creating checkout with items:", lineItems);
console.log("Shopify response:", response);
```

## API Rate Limits

Shopify Storefront API limits:
- **Standard**: 2 requests/second
- **Burst**: Up to 60 points in 60 seconds

The checkout creation uses 1 point, well within limits for typical usage.

## Security Notes

- Never expose Admin API tokens in client code
- Storefront API token can be public (limited permissions)
- Validate cart items server-side before checkout
- Shopify handles all payment processing (PCI compliant)

## Support

For issues with:
- **Shopify API**: Check [Shopify Storefront API docs](https://shopify.dev/docs/api/storefront)
- **Local implementation**: Review code in `lib/shopify/checkout.ts`
- **Cart integration**: Check `lib/cart/cart.ts` server actions
