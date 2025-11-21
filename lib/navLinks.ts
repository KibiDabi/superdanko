import { fetchRecipesFromSanity } from "@/sanity/fetchRecipes";
import { fetchBlogPostsFromSanity } from "@/sanity/fetchBlogPosts";
import { navLinksConfig } from "./types";

export async function getNavLinks(): Promise<navLinksConfig> {

  const [recipes, blogPosts] = await Promise.all([
    fetchRecipesFromSanity(),
    fetchBlogPostsFromSanity()
  ]);

  return {
    categories: [
      {
        name: "Recipes",
        description: "The best recipes in the world.",
        subcategories: [
        {
          name: "All",
          description: "See all recipes",
          image: "/path-to-image",
          slug: "recipes",
        },
        ...recipes.map((recipe: any) => ({
          name: recipe.title,
          description: recipe.shortDescription,
          image: "/path-to-image",
          slug: `recipes/${recipe.slug}`,
        })),
      ],
    },
    // BLOG SECTION
    {
      name: "Blog",
      description: "Insights, tips, and stories from the world of SuperDanko",
      subcategories: [
        {
          name: "All Posts",
          description: "Stay updated with our latest news",
          image: "/path",
          slug: "blog",
        },
        ...blogPosts.map((post: any) => ({
          name: post.title,
          description: post.shortDescription,
          image: "/path",
          slug: `blog/${post.slug}`,
        })),
      ],
    },
    {
      name: "About us",
      description: "We are the peoples choice.",
      subcategories: [
        {
          name: "Our Mission",
          description: "We're here to fuel your superpowers",
          image: "/path",
          slug: "about/mission",
        },
        {
          name: "The SuperDanko Team",
          description: "Meet the heroes behind the jars",
          image: "/path",
          slug: "about",
        },
        {
          name: "Our Ingredients",
          description: "Discover the superfoods that make our butters",
          image: "/path",
          slug: "ingredients",
        },
      ],
    },
  ],
};
}
