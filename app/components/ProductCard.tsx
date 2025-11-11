"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductsTableType } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import AddToCartSheet from "./AddToCartSheet";

export default function ProductCard({
  product,
}: {
  product: ProductsTableType;
}) {
  const firstVariant = product.variants[0];

  const { addItemToCart } = useCartStore();

  return (
    <Card className={cn("size-full overflow-hidden rounded-lg")}>
      <CardHeader className="border-b p-0">
        <Image
          key={product.id}
          src={product.image_url}
          height={200}
          width={450}
          alt={product.name}
          className="object-cover h-68 w-full block"
        />
      </CardHeader>
      <span className="sr-only">{product.name}</span>
      <CardContent className="space-y-1.5 p-4">
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        <CardDescription className="line-clamp-1">
          from {firstVariant ? formatPrice(firstVariant.price) : "Unavailable"}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-1">
        <div className="flex w-full items-center">
          <AddToCartSheet
            productName={product.name}
            productId={product.id}
            variants={product.variants}
          />
          {/* <Button
            aria-label="Add to cart"
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={async () => {
              try {
                await addItemToCart(product.id, 1);
                toast.success("Added to cart! 🛒");
              } catch (error) {
                toast.error("Failed to add to cart ❌");
                console.error("Add to cart error:", error);
              }
            }}
          >
            Add to cart
          </Button> */}
        </div>
      </CardFooter>
    </Card>
  );
}
