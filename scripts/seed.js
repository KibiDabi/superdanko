const { db } = require("@vercel/postgres");
const { images } = require("../lib/products-data.ts");

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Alter existing products table: Add subcategory_id if it doesn't exist
    await client.sql`
      DO $$ BEGIN
        IF NOT EXISTS (
          SELECT 1
          FROM information_schema.columns
          WHERE table_name = 'products' AND column_name = 'subcategory_id'
        ) THEN
          ALTER TABLE products ADD COLUMN subcategory_id UUID REFERENCES subcategories(id) ON DELETE SET NULL;
        END IF;
      END $$;
    `;

    // Create variants table if it doesn't exist
    await client.sql`
      CREATE TABLE IF NOT EXISTS variants (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID REFERENCES products(id) ON DELETE CASCADE,
        size VARCHAR(50) NOT NULL,
        price NUMERIC(10, 2) NOT NULL
      );
    `;

    // Truncate variants table (safe way to remove all old variants)
    await client.sql`TRUNCATE TABLE variants RESTART IDENTITY CASCADE;`;

    // // Drop the "products" table if it exists
    // await client.sql`DROP TABLE IF EXISTS variants`;
    // await client.sql`DROP TABLE IF EXISTS products`;

    // // Create the "products" and "variants" tables if it doesn't exists
    // const createProductsTable = await client.sql`
    //     CREATE TABLE IF NOT EXISTS products (
    //         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //         name VARCHAR(255) NOT NULL,
    //         description VARCHAR(255) NOT NULL,
    //         image_url VARCHAR(255) NOT NULL,
    //         subcategory_id UUID REFERENCES subcategories(id) ON DELETE SET NULL

    //     );`;

    // const createVariantsTable = await client.sql`
    //     CREATE TABLE IF NOT EXISTS variants(
    //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //     product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    //     size VARCHAR(50) NOT NULL,
    //     price NUMERIC(10, 2) NOT NULL);`;

    // console.log('Created "products" and "variants" tables');

    // Insert data into the "products" table
    const insertedProducts = [];

    for (const product of images) {
      // Get the subcategory_id using subcategory_slug
      const subcategoryResult = await client.sql`
      SELECT id FROM subcategories WHERE slug = ${product.subcategory_slug} LIMIT 1`;

      const subcategoryId = subcategoryResult.rows?.[0]?.id || null;

      // Update product's subcategory_id (product already exists in table)
      await client.sql`
        UPDATE products
        SET image_url = ${product.image_url}, subcategory_id = ${subcategoryId}
        WHERE id = ${product.id};
      `;

      // // Insert product with subcategory_id
      // await client.sql`
      // INSERT INTO products (id, name, description, image_url, subcategory_id)
      // VALUES (${product.id}, ${product.name}, ${product.description}, ${product.image_url}, ${subcategoryId})
      // ON CONFLICT (id) DO NOTHING;`;

      // Insert each variant
      await Promise.all(
        product.variants.map(
          (variant) =>
            client.sql`
        INSERT INTO variants (product_id, size, price) 
        VALUES (${product.id}, ${variant.size}, ${variant.price})`
        )
      );

      insertedProducts.push(product.id);
    }

    console.log(`Seeded ${insertedProducts.length} products with variants`);

    return {
      
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error("An error occured while attempting to seed the database!", err);
});
