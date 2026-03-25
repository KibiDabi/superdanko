const { db } = require('@vercel/postgres');

async function main() {
  const client = await db.connect();    

  try {

    // await client.sql`DROP TABLE IF EXISTS variants`;

    await client.sql`
    CREATE TABLE IF NOT EXISTS variants (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID REFERENCES products(id) ON DELETE CASCADE,
        size VARCHAR(50) NOT NULL,
        price NUMERIC(10, 2) NOT NULL
      );`;

    console.log('Migration 004-create-variants-table completed successfully.');

  } catch (err) {
    console.error('Error during migration 004-create-variants-table:', err);
    
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error('Error running migration 004-create-variants-table:', err);
  process.exit(1);
});