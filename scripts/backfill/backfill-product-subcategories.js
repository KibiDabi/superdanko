// Requires POSTGRES_URL env var
const { db } = require('@vercel/postgres');
const { images } = require('../../lib/products-data.ts');

async function main() {
  const client = await db.connect();

  try {
    for (const product of images) {
      // Get the subcategory_id using subcategory_slug
      const subcategoryResult = await client.sql`
      SELECT id FROM subcategories WHERE slug = ${product.subcategory_slug} LIMIT 1`;

        const subcategoryId = subcategoryResult.rows?.[0]?.id || null;

        // Update product's subcategory_id (product already exists in table)
        await client.sql`
        UPDATE products
        SET
        image_url = ${product.image_url}, 
        subcategory_id = ${subcategoryId}
        WHERE id = ${product.id};
      `;
    }

    console.log('Backfilled product subcategories successfully');

    } catch (error) {
      console.error('Error backfilling product subcategories:', error);

    } finally {
      await client.end();
    }
  }

main().catch((err) => {
  console.error('Unexpected error in backfill script:', err);
});