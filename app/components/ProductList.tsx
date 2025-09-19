import {
  fetchProducts,
  getSubsWithProductsGroupedByCategory,
} from "@/lib/actions";
import ProductCard from "./ProductCard";

export default async function ProductList() {
  const groupedByCat = await getSubsWithProductsGroupedByCategory();

  console.log("Products all?:", groupedByCat);

  return (
    <>
      {groupedByCat.map((categoryGroup) => {
        const allProducts = categoryGroup.subcategories.flatMap(
          (sub) => sub.products
        );

        return (
          <>
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        );
      })}
    </>
  );
}
