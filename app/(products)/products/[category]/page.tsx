import { getCategories, getProductsByCategorySlug } from "@/lib/actions";
import { notFound } from "next/navigation";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

// Return a list of `params` to populate the [category] dynamic segment
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {

    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);


  const { category } = params;

  const products = await getProductsByCategorySlug(category);

  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
