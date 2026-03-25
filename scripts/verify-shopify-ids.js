// Script to verify all variants have Shopify variant IDs
// Run this to check if your database is ready for checkout

require('dotenv').config();
const { db } = require('@vercel/postgres');

async function verifyShopifyVariantIds() {
  const client = await db.connect();

  try {
    console.log('🔍 Checking variants table for Shopify variant IDs...\n');

    // Get all variants
    const result = await client.sql`
      SELECT 
        v.id,
        v.product_id,
        v.size,
        v.price,
        v.shopify_variant_id,
        p.name as product_name
      FROM variants v
      JOIN products p ON v.product_id = p.id
      ORDER BY p.name, v.size;
    `;

    const variants = result.rows;
    const total = variants.length;
    const withShopifyId = variants.filter(v => v.shopify_variant_id).length;
    const withoutShopifyId = variants.filter(v => !v.shopify_variant_id);

    console.log('📊 Summary:');
    console.log(`Total variants: ${total}`);
    console.log(`✅ With Shopify ID: ${withShopifyId}`);
    console.log(`❌ Without Shopify ID: ${withoutShopifyId.length}\n`);

    if (withoutShopifyId.length > 0) {
      console.log('⚠️  Variants missing Shopify IDs:');
      withoutShopifyId.forEach(v => {
        console.log(`  - ${v.product_name} (${v.size}): variant_id=${v.id}`);
      });
      console.log('\n💡 Run the backfill script to add missing Shopify variant IDs');
    } else {
      console.log('✅ All variants have Shopify IDs! Ready for checkout.');
    }

    // Show sample of variants with IDs
    if (withShopifyId > 0) {
      console.log('\n📋 Sample variants with Shopify IDs:');
      variants
        .filter(v => v.shopify_variant_id)
        .slice(0, 3)
        .forEach(v => {
          console.log(`  - ${v.product_name} (${v.size})`);
          console.log(`    Shopify ID: ${v.shopify_variant_id}`);
        });
    }

  } catch (error) {
    console.error('❌ Error verifying Shopify variant IDs:', error);
  } finally {
    await client.end();
  }
}

// Run the verification
verifyShopifyVariantIds()
  .then(() => {
    console.log('\n✅ Verification complete');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Verification failed:', err);
    process.exit(1);
  });
