const { db } = require("@vercel/postgres");

async function main() {
  const client = await db.connect();

  try {
    // await client.sql`DROP TABLE IF EXISTS products`;

    await client.sql`
    CREATE TABLE IF NOT EXISTS products (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            image_url VARCHAR(255) NOT NULL,
            subcategory_id UUID REFERENCES subcategories(id) ON DELETE SET NULL

        );`;
  } catch (err) {
    console.error("Error during migration:", err);

  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error("Error running migration:", err);
  process.exit(1);
});
