import { sql } from "@vercel/postgres";
import {
  CategoryTableType,
  CategoryWithSubcategories,
  Product,
  ProductsTableType,
  SubcategoryTableType,
  SubcategoryWithProducts,
  VariantTableType,
} from "./types";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProducts() {
  noStore();
  try {
    const data = await sql<ProductsTableType>`
        SELECT * FROM products;`;

    const products = data.rows;
    return products;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all products.");
  }
}

export async function fetchProductIds(productId: string) {
  // noStore(); // Optional: only use this if you're preventing caching in route handlers

  try {
    const data = await sql<{ id: string }>`
      SELECT id FROM products;
    `;
    const productIds = data.rows.map((row) => row.id);
    return productIds;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch product IDs.");
  }
}

export async function fetchProductById(id: string) {
  const result = await sql`
    SELECT 
      p.id AS product_id, 
      p.name, 
      p.description, 
      p.image_url,
      json_agg(json_build_object(
        'id', v.id,
        'size', v.size,
        'price', v.price
      )) AS variants
    FROM products p
    LEFT JOIN variants v ON v.product_id = p.id
    WHERE p.id = ${id}
    GROUP BY p.id;
  `;

  const row = result.rows[0];

  const product = {
    id: row.product_id,
    name: row.name,
    description: row.description,
    image_url: row.image_url,
    variants: row.variants, // this is already a parsed JS array
  };

  return product;
}


export async function getCategories(): Promise<CategoryTableType[]> {
  try {
    const data = await sql<CategoryTableType>`
  SELECT id, name, slug, description
  FROM categories 
  ORDER BY id ASC`;

    const categories = data.rows;
    return categories;
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    throw new Error("Unable to load categories");
  }
}

export async function getProductsByCategorySlug(categorySlug: string) {
  try {
    const data = await sql`
    SELECT p.* 
    FROM products p 
    JOIN subcategories sc ON p.subcategory_id = sc.id 
    JOIN categories c ON sc.category_id = c.id 
    WHERE c.slug = ${categorySlug}`;

    const productsByCatSlug = data.rows;
    return productsByCatSlug;
  } catch (err) {
    console.error("Failed to get products by category_slug", err);
  }
}

export async function getSubcategories(): Promise<SubcategoryTableType[]> {
  try {
    const data = await sql<SubcategoryTableType>`
    SELECT id, name, slug, description, image_url, category_id 
    FROM subcategories 
    ORDER BY name ASC;`;

    const subcategories = data.rows;
    return subcategories;
  } catch (err) {
    console.error("Failed to fetch subcategories", err);
    throw new Error("Unable to load subcategories");
  }
}

export async function getVariantsByProductId(
  productId: string
): Promise<VariantTableType[]> {
  try {
    const data = await sql<VariantTableType>`
    SELECT id, product_id, size, price 
    FROM variants 
    WHERE product_id = ${productId}`;

    const variants = data.rows;
    return variants;
  } catch (err) {
    console.error(`Failed to fetch variants for product ${productId}:`, err);
    throw new Error("Unable to load variants.");
  }
}

export async function getProductsBySubcategorySlug(
  slug: string
): Promise<ProductsTableType[]> {
  try {
    const data = await sql<ProductsTableType>`
    SELECT p.id, p.name, p.description, p.image_url, p.subcategory_id 
    FROM products p 
    INNER JOIN subcategories s ON p.subcategory_id = s.id 
    WHERE s.slug = ${slug} 
    ORDER BY p.name ASC;`;

    const productsBySubSlug = data.rows;
    return productsBySubSlug;
  } catch (err) {
    console.error(
      `Failed zo fetch products for subcategory slug ${slug}:`,
      err
    );
    throw new Error("Unable to load products by subcategory slug.");
  }
}

export async function getSubcategoriesWithProducts(): Promise<
  SubcategoryWithProducts[]
> {
  try {
    const data = await sql`
      SELECT 
        s.id AS subcategory_id,
        s.name AS subcategory_name,
        s.slug AS subcategory_slug,
        s.description AS subcategory_description,
        s.image_url AS subcategory_image,
        c.name AS category_name,
        p.id AS product_id,
        p.name AS product_name,
        p.description AS product_description,
        p.image_url AS product_image,
        v.id AS variant_id,
        v.size AS variant_size,
        v.price AS variant_price
      FROM subcategories s
      INNER JOIN categories c ON s.category_id = c.id
      LEFT JOIN products p ON p.subcategory_id = s.id
      LEFT JOIN variants v ON v.product_id = p.id
      ORDER BY s.name ASC;
    `;

    // Transform into nested structure: subcategory -> products[] -> variants[]
    const grouped = new Map();

    for (const row of data.rows) {
      const subId = row.subcategory_id;
      if (!grouped.has(subId)) {
        grouped.set(subId, {
          id: subId,
          name: row.subcategory_name,
          slug: row.subcategory_slug,
          description: row.subcategory_description,
          image: row.subcategory_image,
          category: row.category_name,
          products: [],
        });
      }

      const sub = grouped.get(subId);

      if (row.product_id) {
        let product = sub.products.find(
          (p: Product) => p.id === row.product_id
        );
        if (!product) {
          product = {
            id: row.product_id,
            name: row.product_name,
            description: row.product_description,
            image_url: row.product_image,
            variants: [],
          };
          sub.products.push(product);
        }

        if (row.variant_id) {
          product.variants.push({
            id: row.variant_id,
            size: row.variant_size,
            price: row.variant_price,
          });
        }
      }
    }

    return Array.from(grouped.values());
  } catch (err) {
    console.error("Failed to fetch subcategories with products:", err);
    throw new Error("Unable to load subcategories with products.");
  }
}

export async function getSubsWithProductsGroupedByCategory(): Promise<
  CategoryWithSubcategories[]
> {
  const { rows } = await sql`
    SELECT 
      c.name AS category,
      sc.id AS subcategory_id,
      sc.name AS subcategory_name,
      sc.slug AS subcategory_slug,
      sc.description AS subcategory_description,
      sc.image_url AS subcategory_image,
      p.id AS product_id,
      p.name AS product_name,
      p.description AS product_description,
      p.image_url AS product_image,
      v.id AS variant_id,
      v.size AS variant_size,
      v.price AS variant_price
    FROM categories c
    JOIN subcategories sc ON sc.category_id = c.id
    JOIN products p ON p.subcategory_id = sc.id
    JOIN variants v ON v.product_id = p.id
    ORDER BY 
      CASE c.name
        WHEN 'Peanut Butters' THEN 1
        WHEN 'Hazelnut Spreads' THEN 2
        ELSE 99
      END,
      sc.name,
      p.name
  `;

  const categoryMap = new Map<string, CategoryWithSubcategories>();

  for (const row of rows) {
    const {
      category,
      subcategory_id,
      subcategory_name,
      subcategory_slug,
      subcategory_description,
      subcategory_image,
      product_id,
      product_name,
      product_description,
      product_image,
      variant_id,
      variant_size,
      variant_price,
    } = row;

    if (!categoryMap.has(category)) {
      categoryMap.set(category, {
        category,
        subcategories: [],
      });
    }

    const categoryEntry = categoryMap.get(category)!;

    let subcategory = categoryEntry.subcategories.find(
      (sc) => sc.id === subcategory_id
    );
    if (!subcategory) {
      subcategory = {
        id: subcategory_id,
        name: subcategory_name,
        slug: subcategory_slug,
        description: subcategory_description,
        image: subcategory_image,
        products: [],
      };
      categoryEntry.subcategories.push(subcategory);
    }

    let product = subcategory.products.find((p) => p.id === product_id);
    if (!product) {
      product = {
        id: product_id,
        name: product_name,
        description: product_description,
        image_url: product_image,
        variants: [],
      };
      subcategory.products.push(product);
    }

    product.variants.push({
      id: variant_id,
      size: variant_size,
      price: Number(variant_price),
    });
  }

  return Array.from(categoryMap.values());
}
