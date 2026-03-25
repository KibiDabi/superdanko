const { db } = require("@vercel/postgres");
const { images } = require("../../lib/products-data.ts");

async function main() {
  const client = await db.connect();

  try {
    for (const product of images) {
      for (const variant of product.variants) {
        await client.sql`
                INSERT INTO variants (product_id, size, price, shopify_variant_id) 
                VALUES (${product.id}, ${variant.size}, ${variant.price}, ${variant.shopify_variant_id || null});`;
      }
    }

  } catch (error) {
    console.error("Error seeding variants:", error);
    
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
