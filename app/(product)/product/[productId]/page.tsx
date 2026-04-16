import { fetchProductById } from "@/lib/actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCarousel from "./_components/product-carousel";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductDetailsWrapper from "./_components/product-details-wrapper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId: rawProductId } = await params;
  const productId = decodeURIComponent(rawProductId);
  const product = await fetchProductById(productId);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId: rawProductId } = await params;
  const productId = decodeURIComponent(rawProductId);
  const product = await fetchProductById(productId);

  if (!product) {
    return notFound();
  }

  const sizeOrder: Record<string, number> = {
    small: 0,
    s: 0,
    medium: 1,
    m: 1,
    large: 2,
    l: 2,
  };

  const sortedVariants = [...product.variants].sort((a, b) => {
    const aOrder = sizeOrder[a.size.toLowerCase()] ?? Number.POSITIVE_INFINITY;
    const bOrder = sizeOrder[b.size.toLowerCase()] ?? Number.POSITIVE_INFINITY;

    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }

    if (a.price !== b.price) {
      return a.price - b.price;
    }

    return a.size.localeCompare(b.size);
  });

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="container mx-auto flex-1">
    <section className="grid items-center gap-20 pt-6 lg:py-6  pb-15 md:pb-40 sm:pb-32">
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <ProductCarousel
          className="w-full md:w-1/2"
          images={[
            {
              image_url: product.image_url,
              name: product.name,
              id: product.id,
            },
            {
              image_url: product.image_url,
              name: product.name,
              id: product.id,
            },
            {
              image_url: product.image_url,
              name: product.name,
              id: product.id,
            },
          ]}
          options={{ loop: true }}
        />
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product.name}</h2>
          </div>
          <ProductDetailsWrapper productId={productId} variants={sortedVariants} />
          <Separator className="mt-5" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="description"
          >
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger className="text-base">
                Description
              </AccordionTrigger>
              <AccordionContent>
                {product.description ??
                  "Description is not available for this specific product."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      
    </section>
    </main>
    </div>
  );
}
