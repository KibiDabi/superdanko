const { db } = require("@vercel/postgres");

async function seedOrders(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`DROP TABLE IF EXISTS orders`;

    await client.sql`
        CREATE TABLE IF NOT EXISTS orders(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        cart_id UUID NOT NULL REFERENCES cart(id) ON DELETE SET NULL,
        user_id UUID REFERENCES users(id) ON DELETE SET NULL,
        total_price NUMERIC(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;

    console.log("✅ `orders` table created successfully!");
  } catch (error) {
    console.error("❌ Error creating `orders` table:", error);
  }
}

async function main() {
  const client = await db.connect();

  await seedOrders(client);
}

main().catch((err) => {
  console.error(
    "An error occured while attempting to seed the orders table",
    err
  );
});
