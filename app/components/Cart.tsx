"use client";

import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { getCart } from "@/lib/cart/cart";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { useEffect } from "react";
import CartItems from "./CartItems";

export default function Cart() {
  const { cartItems, fetchCart } = useCartStore();

  // Fetch cart data when the component mounts
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const itemCount = cartItems.reduce(
    (accumulator, item) => accumulator + Number(item.quantity),
    0
  );

  const cartTotal = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity * Number(item.product_price),
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
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
        <SheetHeader className="space-y-2.5 pr-6 py-1">
          <SheetTitle>My Cart {itemCount > 0 && `(${itemCount})`}</SheetTitle>
          <SheetDescription className="sr-only" />
          <Separator />
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <CartItems items={cartItems} className="flex-1" />
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(cartTotal.toFixed(2))}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                      size: "sm",
                    })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
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
