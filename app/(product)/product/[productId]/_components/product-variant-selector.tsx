'use client';

import { Button } from "@/components/ui/button";
import { Variant } from "@/lib/types";

export default function VariantSelector({
  variants,
  selectedVariantId,
  onSelect,
}: {
  variants: Variant[];
  selectedVariantId: string | undefined;
  onSelect: (variant: Variant) => void
}) {
  

  return (
    <div className="w-full max-w-xs space-y-3">
      <p className="text-base text-muted-foreground">Select Desired Size:</p>

      <div className="grid grid-cols-3 gap-2">
        {variants.map((variant) => (
          <Button
            key={variant.id}
            variant={selectedVariantId === variant.id ? "default" : "outline"}
            onClick={() => onSelect(variant)}
            className="capitalize h-8"
          >{variant.size}</Button>
        ))}
      </div>
    </div>
  );
}
