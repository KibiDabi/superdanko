"use client";

/**
 * Post-checkout success page. Clear local cart when user lands here after Shopify checkout.
 * In Shopify Admin: Settings → Checkout → Order status page → set "Additional scripts" or
 * redirect "Thank you" URL to: https://YOUR_DOMAIN/checkout/success
 */
import { useCartStore } from "@/store/cartStore";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  const clearCartAfterCheckout = useCartStore((s) => s.clearCartAfterCheckout);

  useEffect(() => {
    clearCartAfterCheckout();
  }, [clearCartAfterCheckout]);

  return (
    <div className="container flex flex-col items-center justify-center gap-6 py-16 text-center">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Thank you for your order
      </h1>
      <p className="max-w-md text-muted-foreground">
        Your payment was successful. We&apos;ve cleared your cart. You&apos;ll
        receive an order confirmation by email from Shopify.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="default">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">Continue shopping</Link>
        </Button>
      </div>
    </div>
  );
}
