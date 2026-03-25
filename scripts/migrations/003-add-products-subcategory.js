const { db } = require("@vercel/postgres");

async function main() {
  const client = await db.connect();

  try {
    // Alter existing products table: Add subcategory_id if it doesn't exist

    await client.sql`
    DO $$ BEGIN
        IF NOT EXISTS (
          SELECT 1
          FROM information_schema.columns
          WHERE table_name = 'products'
            AND column_name = 'subcategory_id'
        ) THEN
          ALTER TABLE products
          ADD COLUMN subcategory_id UUID
          REFERENCES subcategories(id)
          ON DELETE SET NULL;
        END IF;
      END $$;`;

    console.log(
      "Migration 003-add-products-subcategory completed successfully."
    );

  } catch (err) {
    console.error(
      "Error during migration 003-add-products-subcategory:",
      err
    );

  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error("Error running migration 003-add-products-subcategory:", err);
  process.exit(1);
});