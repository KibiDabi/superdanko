const { db } = require("@vercel/postgres");
const { categoryConfig } = require("../lib/categories-data.ts");

async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Drop the "categories" table if it exists
    await client.sql`DROP TABLE IF EXISTS categories`;

    // Create the "categories" table if it doesn't exists
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS categories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) NOT NULL UNIQUE,
          description TEXT
        );
    `;

    console.log('✅ Created "categories" table');

    const categories = categoryConfig.categories;

    // Insert data into the "categories" table
    await Promise.all(
      categories.map(
        (category) => client.sql`
            INSERT INTO categories (name, slug, description)
            VALUES (${category.name}, ${category.slug}, ${category.description})
            ON CONFLICT (slug) DO NOTHING;`
      )
    );

    const allCategories = await client.sql`SELECT * FROM categories`;

    console.log(`✅ Seeded ${allCategories.rows.length} categories`);

    return {
      createTable,
      categories: allCategories.rows,
    };
  } catch (error) {
    console.error("❌ Error seeding categories:", error);
  }
}

module.exports = { seedCategories };

// Only run main if executed directly, not when imported
if (require.main === module) {
  const { db } = require("@vercel/postgres");
}

async function main() {
  const client = await db.connect();

  const result = await seedCategories(client);

  await client.end();

  return result;
}

main().catch((err) => {
  console.error("An error occured while attempting to seed the database!", err);
});
