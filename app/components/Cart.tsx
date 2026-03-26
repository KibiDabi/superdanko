"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "./Icons";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useRef, useState } from "react";
import CartItems from "./CartItems";
import { toast } from "sonner";

export default function Cart() {
  const { cartItems, fetchCart, createCheckoutFromCart, error, clearError } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Fetch cart data when the component mounts
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Toast when store error is set (e.g. add/remove/update from elsewhere)
  const prevErrorRef = useRef<string | null>(null);
  useEffect(() => {
    if (error && error !== prevErrorRef.current) {
      toast.error(error);
      prevErrorRef.current = error;
    }
    if (!error) prevErrorRef.current = null;
  }, [error]);

  const itemCount = cartItems.reduce(
    (accumulator, item) => accumulator + Number(item.quantity),
    0
  );

  const cartTotal = cartItems.reduce(
    (accumulator, item) =>
      accumulator + Number(item.quantity) * Number(item.variant_price),
    0
  );

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    setIsCheckingOut(true);
    try {
      const result = await createCheckoutFromCart();

      if (result.success && result.checkoutUrl) {
        sessionStorage.setItem("sd_checkout_started", "1"); // We save this Flag to indicate checkout started, used for post-checkout cart clearing
        // Redirect to Shopify checkout
        window.location.href = result.checkoutUrl;
      } else {
        toast.error(
          !result.success && result.error
            ? result.error
            : "Checkout could not be created. Please try again.",
        );
        setIsCheckingOut(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("An error occurred during checkout");
      setIsCheckingOut(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button id="cart-button" aria-label="Open cart" variant="outline" size="icon" className="relative">
          {itemCount > 0 && (
            <Badge
              variant="outline"
              className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
            >
              {itemCount}
            </Badge>
          )}
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6 pt-4 pb-2">
          <SheetTitle className="w-full flex justify-center items-center text-center text-lg font-bold tracking-tight pt-2 pb-1">My Cart {itemCount > 0 && `(${itemCount})`}</SheetTitle>
          <SheetDescription className="sr-only" />
          <Separator className="my-2 bg-gray-300 dark:bg-gray-800" />
        </SheetHeader>
        {error && (
          <div
            role="alert"
            className="mx-2 sm:mx-4 flex items-start gap-2 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          >
            <span className="flex-1">{error}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-7 shrink-0 text-destructive hover:bg-destructive/20 hover:text-destructive"
              aria-label="Dismiss error"
              onClick={() => {
                clearError();
                prevErrorRef.current = null;
              }}
            >
              <Icons.close className="size-4" />
            </Button>
          </div>
        )}
        {itemCount > 0 ? (
          <>
            <CartItems items={cartItems} className="flex-1 px-2 sm:px-4" />
            <div className="space-y-4 px-2 sm:px-4 pt-2 pb-4">
              <Separator className="my-2 bg-border/80 h-[1.5px]" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between px-1">
                  <span className="font-semibold">Shipping</span>
                  <span className="font-medium text-muted-foreground">Calculated at checkout</span>
                </div>
                <div className="flex justify-between px-1">
                  <span className="font-semibold">Taxes</span>
                  <span className="font-medium text-muted-foreground">Calculated at checkout</span>
                </div>
                <div className="flex justify-between px-1">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-bold text-muted-foreground">{formatPrice(cartTotal.toFixed(2))}</span>
                </div>
              </div>
              <SheetFooter className="pt-2">
                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full font-semibold"
                  size="sm"
                >
                  {isCheckingOut ? (
                    <>
                      <Icons.spinner className="mr-2 size-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Continue to Checkout"
                  )}
                </Button>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex space-y-2 h-full flex-col items-center justify-center">
            <Icons.cart
              className="mb-5 text-muted-foreground size-20"
              aria-hidden="true"
            />
            <div className="text-xl text-muted-foreground font-semibold">
              Your cart is empty
            </div>
            <div className="text-muted-foreground text-sm font-normal">
              Add any Peanut Butter you like
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
