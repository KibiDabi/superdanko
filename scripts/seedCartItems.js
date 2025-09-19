const { db } = require("@vercel/postgres");

async function seedOrderItems(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`DROP TABLE IF EXISTS cart_items`;

    await client.sql`CREATE TABLE IF NOT EXISTS cart_items(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        cart_id UUID NOT NULL REFERENCES cart(id) ON DELETE CASCADE,
        variant_id UUID NOT NULL REFERENCES variants(id) ON DELETE CASCADE,
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;

    console.log("✅ `cart_items` table created successfully!");
  } catch (error) {
    console.error("❌ Error creating `cart_items` table:", error);
  }
}

async function main() {
  const client = await db.connect();

  await seedOrderItems(client);
}

main().catch((err) => {
  console.error(
    "An error occured while attempting to seed the cart_items table",
    err
  );
});
