"use client";

import { Variant } from "@/lib/types";
import { useState } from "react";
import VariantSelectorWrapper from "./product-variant-selector-wrapper";
import AddToCartForm from "./add-to-cart-form";

interface ProductDetailsProps {
  productId: string;
  variants: Variant[];
  onAddToCartSuccess?: () => void;
}

export default function ProductDetailsWrapper({
  productId,
  variants,
  onAddToCartSuccess,
}: ProductDetailsProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    variants[0] ?? null
  );

  return (
    <>
      {" "}
      <VariantSelectorWrapper
        variants={variants}
        selectedVariantId={selectedVariant?.id}
        onSelect={setSelectedVariant}
      />
      {selectedVariant && (
        <AddToCartForm variantId={selectedVariant?.id} showBuyNow={true} onSuccess={onAddToCartSuccess} />
      )}
    </>
  );
}
