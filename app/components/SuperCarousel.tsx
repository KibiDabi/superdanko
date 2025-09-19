import * as React from "react";
import { fetchProducts } from "@/lib/actions";
import CarouselWithAutoplay from "./CarouselWithAutoplay";

export default async function SuperCarousel() {
  const products = await fetchProducts();

  return (
    <section className="w-full py-4">
      <div className=" mx-auto lg:max-w-6xl px-3">
        <CarouselWithAutoplay products={products} />
      </div>
    </section>
  );
}
