"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductDetailsWrapper from "../(product)/product/[productId]/_components/product-details-wrapper";
import { Variant } from "@/lib/types";
import { useState } from "react";

interface AddToCartSheetProps {
  productName: string;
  productId: string;
  variants: Variant[];
}

export default function AddToCartSheet({
  productName,
  productId,
  variants,
}: AddToCartSheetProps) {

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          aria-label="Open Add to Cart"
          size="sm"
          className="h-8 w-full rounded-sm"
        >
          Add to cart
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <div className="max-w-xs mx-auto w-full space-y-6">
          <div className="text-center space-y-1">
            <SheetHeader>
              <SheetTitle> Select variant for {productName} </SheetTitle>
            </SheetHeader>
          </div>
          <ProductDetailsWrapper productId={productId} variants={variants} onAddToCartSuccess={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
