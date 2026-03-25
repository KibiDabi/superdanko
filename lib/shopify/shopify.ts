type ShopifyGraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string } & Record<string, any>>;
};

export async function shopifyFetch<T = unknown>(
  query: string,
  variables: Record<string, any> = {},
  options?: {
    signal?: AbortSignal;
    timeoutMs?: number;
    buyerIp?: string | null;
  },
): Promise<ShopifyGraphQLResponse<T>> {
  const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  const API_VERSION = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2024-10";

  if (!SHOPIFY_DOMAIN) {
    throw new Error("Missing env SHOPIFY_STORE_DOMAIN");
  }

  if (!SHOPIFY_STOREFRONT_TOKEN) {
    throw new Error("Missing env SHOPIFY_STOREFRONT_ACCESS_TOKEN");
  }

  const endpoint = `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN!,
      Accept: "application/json",
    };

    if (options?.buyerIp) {
      headers["Shopify-Storefront-Buyer-IP"] = options.buyerIp;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("Shopify HTTP error:", response.status, text);
      throw new Error(
        `Shopify Storefront API error: ${response.status} ${response.statusText}`,
      );
    }

    // TypeScript assumes unknown, but we know the API shape
    const json = (await response.json()) as ShopifyGraphQLResponse<T>;

    if (json.errors?.length) {
      const message = json.errors.map((e) => e.message).join('; ');
      console.error("Shopify GraphQL errors:", json.errors);
      throw new Error(`Shopify GraphQL error(s): ${message}`);
    }

    return json;
  } catch (error) {
    console.error("Shopify Fetch Error:", error);
    throw error;
  } finally {
    // Any cleanup logic if needed
  }
}
