import { getSubsWithProductsGroupedByCategory } from "@/lib/actions";
import { ProductsHeader } from "./_components/ProductsHeader";
import ProductPage from "@/app/components/all-products/product-card";
import { Separator } from "@/components/ui/separator";
import { MainFooter } from "@/app/components/MainFooter";

export default async function Page() {
  const groupedByCat = await getSubsWithProductsGroupedByCategory();

  return (
    <>
      <ProductsHeader />
      <div className="w-full px-6 py-6 pb-15 sm:pb-32 md:pb-40">
        <div className="grid gap-4">
          {groupedByCat.map((categoryGroup, index) => {
            const allProducts = categoryGroup.subcategories.flatMap(
              (sub) => sub.products
            );

            const isLast = index === groupedByCat.length - 1;

            return (
              <section key={categoryGroup.category}>
                <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]">
                  {categoryGroup.category} Products
                </h1>

                <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10 mt-6">
                  {allProducts.map((product) => (
                    <ProductPage key={product.id} product={product} />
                  ))}
                </div>

                {!isLast && <Separator className="my-10" />}
              </section>
            );
          })}
        </div>
      </div>
      <div className="mt-20">
      <MainFooter />
      </div>
    </>
  );
}

// If we want two products per column use this:
// grid grid-cols-1 md:grid-cols-2 gap-6 mt-6  max-w-screen-md
// instead of this classes here:
// <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10 mt-6">
