import { fetchProductById } from "@/lib/actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCarousel from "./_components/product-carousel";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import VariantSelector from "./_components/product-variant-selector";
import VariantSelectorWrapper from "./_components/product-variant-selector-wrapper";
import AddToCartForm from "./_components/add-to-cart-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductDetailsWrapper from "./_components/product-details-wrapper";
import { MainFooter } from "@/app/components/MainFooter";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const productId = decodeURIComponent(params.productId);
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
  params: { productId: string };
}) {
  const productId = decodeURIComponent(params.productId);
  const product = await fetchProductById(productId);

  console.log("Product fetched:", product);

  if (!product) {
    return notFound();
  }

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
          <ProductDetailsWrapper productId={productId} variants={product.variants} />
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
    <div className="mt-20">
        <MainFooter />
      </div>
    </div>
  );
}
