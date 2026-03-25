const { db } = require('@vercel/postgres');
const { images } = require('../../lib/products-data.ts');

async function main() {
  const client = await db.connect(); 

try {

    // Insert data into the "products" table
    const insertedProducts = [];

    for (const product of images) {

        await client.sql`
        INSERT INTO products (id, name, description, image_url, subcategory_id)
        VALUES (${product.id}, ${product.name}, ${product.description}, ${product.image_url}, ${subcategoryId})
        ON CONFLICT (id) DO NOTHING;`;
        
        insertedProducts.push(product.id);
}
    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
  } finally {
    await client.end();
  }

}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});