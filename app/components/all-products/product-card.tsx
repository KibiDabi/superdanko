"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Icons } from "../Icons";
import AddToCartSheet from "../AddToCartSheet";

type Variant = {
  id: string;
  size: string;
  price: number;
};

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: {
    id: string;
    name: string;
    description: string;
    image_url: string;
    variants: Variant[];
  };
}

export default function ProductPage({ product }: ProductCardProps) {
  const firstVariant = product.variants[0];

  const { addItemToCart } = useCartStore();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card>
      <Link aria-label={product.name} href={`/product/${product.id}`}>
        <CardHeader>
          <AspectRatio ratio={4 / 3}>
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                className="object-cover rounded-md"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            ) : (
              <div>Hi</div>
            )}
          </AspectRatio>
        </CardHeader>
      </Link>

      <Link href={`/products/${product.id}`} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            from {firstVariant ? formatPrice(firstVariant.price) : "Unavailable"}
          </CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-1">
        <div className="flex w-full items-center space-x-2">
          <AddToCartSheet productName={product.name} productId={product.id} variants={product.variants} />
          {/* <Button
            aria-label="Add to cart"
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={async () => {
              try {
                setIsLoading(true);
                await addItemToCart(product.id, 1);
                toast.success("Added to cart! 🛒");
                setIsLoading(false);
              } catch (error) {
                toast.error("Failed to add to cart ❌");
                console.error("Add to cart error:", error);
              }
            }}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Add to cart
          </Button> */}
        </div>
      </CardFooter>
    </Card>
  );
}
