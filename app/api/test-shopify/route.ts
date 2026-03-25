import { shopifyFetch } from "@/lib/shopify/shopify";

export async function GET() {
  const isEnabled =
    process.env.NODE_ENV !== "production" ||
    process.env.ENABLE_TEST_SHOPIFY_API === "true";

  if (!isEnabled) {
    return new Response("Not Found", { status: 404 });
  }

  const query = `
    { 
    shop {
      name
    }
} `;

  const data = await shopifyFetch(query);
  
  return Response.json(data);
}
