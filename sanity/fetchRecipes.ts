import { client } from "../sanity/client";

interface Recipe {
  title: string;
  shortDescription: string;
  slug: string;
}

export async function fetchRecipesFromSanity(): Promise<Recipe[]> {
  const query = `*[_type == "recipe"] | order(publishedAt desc){ title, shortDescription, "slug": slug.current}`;

  try {
    const recipes = await client.fetch<Recipe[]>(query);
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes from Sanity:", error);
    return [];
  }
}
