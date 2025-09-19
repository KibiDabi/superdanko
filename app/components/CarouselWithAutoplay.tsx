"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Product } from "@/lib/types";

export default function CarouselWithAutoplay({
  products,
}: {
  products: Product[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full  max-w-xs md:max-w-7xl"
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <div className="flex flex-col items-center text-center w-full h-full">
                  <Image
                    src={product.image_url}
                    alt={product.description}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-full h-full"
                  />
                  {/* <span className="text-3xl font-semibold">
                        {index + 1}
                      </span> */}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
      <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
    </Carousel>
  );
}
