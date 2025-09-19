const { db } = require("@vercel/postgres");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Drop dependent tables first
    await client.sql`DROP TABLE IF EXISTS cart CASCADE`;
    await client.sql`DROP TABLE IF EXISTS orders CASCADE`;
    await client.sql`DROP TABLE IF EXISTS order_items CASCADE`;

    await client.sql`DROP TABLE IF EXISTS users`;

    await client.sql`CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW());`;

    console.log("✅ `users` table created successfully!");
  } catch (error) {
    console.error("❌ Error creating `users` table:", error);
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
}

main().catch((err) => {
  console.error(
    "An error occured while attempting to seed the users table",
    err
  );
});
