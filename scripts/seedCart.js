const { db } = require("@vercel/postgres");

async function seedCart(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`DROP TABLE IF EXISTS cart`;

    await client.sql`
        CREATE TABLE IF NOT EXISTS cart (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;

    console.log('Created "cart" table');
  } catch (error) {
    console.error("Error seeding carts:", error);
  }
}

async function main() {
  const client = await db.connect();

  await seedCart(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occured while attempting to seed the cart table!",
    err
  );
});
