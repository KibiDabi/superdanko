require('dotenv').config();
const { db }  = require('@vercel/postgres');
const { images } = require('../../lib/products-data.ts');


async function main() {
  const client = await db.connect();


    try { 

        for(const product of images) {
            for(const variant of product.variants) {
                if (!variant.shopify_variant_id) continue;

                await client.sql`
                UPDATE variants
                SET shopify_variant_id = ${variant.shopify_variant_id}
                WHERE product_id = ${product.id} AND size = ${variant.size};
                `;
            }
        }

        console.log("Backfilled Shopify variant IDs successfully.");


    } catch (error) {
        console.error("Error backfilling Shopify variant IDs:", error);
    }finally {
        await client.end();
    }

}

main().catch((err) => {
  console.error("Unexpected error while backfilling Shopify variant IDs:", err);
});