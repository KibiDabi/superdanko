import { client } from "../sanity/client";

interface BlogPost {
  _id: string;
  title: string;
  shortDescription: string;
  slug: string;
  mainImage?: any;
  publishedAt: string;
}

export async function fetchBlogPostsFromSanity(): Promise<BlogPost[]> {
  const query = `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc){ _id, title, shortDescription, "slug": slug.current, mainImage, publishedAt }`;

  try {
    const blogPosts = await client.fetch<BlogPost[]>(query);
    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts from Sanity:", error);
    return [];
  }
}
