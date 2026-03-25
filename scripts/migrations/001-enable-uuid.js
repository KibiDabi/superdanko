const { db } = require("@vercel/postgres");

async function main() {
  const client = await db.connect();

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    console.log('UUID extension enabled successfully.');
  } finally {
    await client.end();
  }

}

main().catch((err) => {
  console.error("Error enabling UUID extension:", err);
  process.exit(1);
}   );