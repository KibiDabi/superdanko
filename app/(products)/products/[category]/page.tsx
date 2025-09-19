import { getCategories, getProductsByCategorySlug } from "@/lib/actions";
import { notFound } from "next/navigation";

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
  params: { category: string };
}) {
  const { category } = params;

  const products = await getProductsByCategorySlug(category);

  if (!products || products.length === 0) {
    notFound();
  }

  return <div>Hellou there</div>;
}
