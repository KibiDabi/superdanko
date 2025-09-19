"use client";

import { Variant } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import VariantSelector from "./product-variant-selector";
import { Separator } from "@/components/ui/separator";

export default function VariantSelectorWrapper({
  variants,
  selectedVariantId,
  onSelect,
}: {
  variants: Variant[];
  selectedVariantId: string | undefined,
  onSelect: (variant: Variant) => void
}) {

  const selected = variants.find((v) => v.id === selectedVariantId)

  const displayedPrice = selected?.price || variants[0]?.price;

  return (
    <div className="space-y-3">
      <p className="text-base text-muted-foreground">
        {formatPrice(displayedPrice)}
      </p>
      <Separator className="my-1.5" />
      <VariantSelector
        variants={variants}
        selectedVariantId={selectedVariantId}
        onSelect={onSelect}
      />
    </div>
  );
}
