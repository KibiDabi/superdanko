const { db } = require("@vercel/postgres");
const { categoryConfig } = require("../lib/categories-data.ts");
const { seedCategories } = require("./seedCategories.js");

async function seedSubcategories(client, categories) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Drop the "categories" table if it exists
    await client.sql`DROP TABLE IF EXISTS subcategories`;

    // Create the "categories" table if it doesn't exists
    await client.sql`
        CREATE TABLE IF NOT EXISTS subcategories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) NOT NULL UNIQUE,
          description TEXT,
          image_url VARCHAR(255),
          category_id UUID REFERENCES categories(id) ON DELETE CASCADE
        );
    `;

    console.log('Created "subcategories" table');

    // Insert data into the "subcategories" table

    const insertedSubcategories = [];

    for (const category of categoryConfig.categories) {
      const dbCategory = categories.find((c) => c.slug === category.slug);

      if (!dbCategory) continue;

      for (const sub of category.subcategories) {
        insertedSubcategories.push(client.sql`
            INSERT INTO subcategories (name, slug, description, image_url, category_id) 
            VALUES (${sub.name}, ${sub.slug}, ${sub.description}, ${sub.image}, ${dbCategory.id}) 
            ON CONFLICT (slug) DO NOTHING;`);
      }
    }

    await Promise.all(insertedSubcategories);

    const allSubcategories = await client.sql`SELECT * FROM subcategories`;

    console.log(`✅ Seeded ${allSubcategories.rows.length} subcategories`);

    return {
      subcategories: allSubcategories.rows,
    };
  } catch (error) {
    console.error("❌ Error seeding subcategories:", error);
  }
}

async function main() {
  const client = await db.connect();

  const { categories } = await seedCategories(client);

  await seedSubcategories(client, categories);

  await client.end();
}

main().catch((err) => {
  console.error("An error occured while seeding subcategories!", err);
});
