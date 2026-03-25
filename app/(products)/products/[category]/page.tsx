import { getCategories, getProductsByCategorySlug } from "@/lib/actions";
import { notFound } from "next/navigation";
import ProductCard from "@/app/components/all-products/product-card";

// Return a list of `params` to populate the [category] dynamic segment
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const products = await getProductsByCategorySlug(category);

  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen p-8">
      <h1 className="mb-8 text-4xl font-bold capitalize">
        {category.replace(/-/g, " ")} Products
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
