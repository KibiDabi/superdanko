require("dotenv").config();
const { db } = require("@vercel/postgres");

async function main() {
  const client = await db.connect();

  try {
    // ✅ This block add shopify_variant_id column if it doesn't exist

    await client.sql`
        DO $$ BEGIN
        IF NOT EXISTS (
          SELECT 1
          FROM information_schema.columns
          WHERE table_name = 'variants'
            AND column_name = 'shopify_variant_id'
        ) THEN
          ALTER TABLE variants
          ADD COLUMN shopify_variant_id TEXT;
        END IF;
      END $$;`;

    console.log("Migration 005-add-shopify-variant-id completed successfully.");

  } catch (err) {
    console.error("Error during migration 005-add-shopify-variant-id:", err);

  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error("Error running migration 005-add-shopify-variant-id:", err);
  process.exit(1);
});
