import { client } from "@/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";
import { fetchBlogPostsFromSanity } from "@/sanity/fetchBlogPosts";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/dist/client/link";
import { Separator } from "@/components/ui/separator";

// Sanity image builder
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? ImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// ----------- Types -----------
interface BlogPost {
  _id: string;
  title: string;
  shortDescription: string;
  slug: string;
  mainImage?: any;
  content?: any;
  publishedAt?: string;
}

// ----------- Data fetching -----------
async function fetchSingleBlog(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    shortDescription,
    "slug": slug.current,
    mainImage,
    content,
    publishedAt
  }`;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// ----------- Static params -----------
export async function generateStaticParams() {
  const blogs = await fetchBlogPostsFromSanity();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// ----------- Metadata -----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSingleBlog(slug);

  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: post.title,
    description: post.shortDescription,
  };
}

// ----------- Page Component -----------
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSingleBlog(slug);

  if (!post) return notFound();

  const allPosts = await fetchBlogPostsFromSanity();
  const related = allPosts.filter((p) => p._id !== post._id).slice(0, 3);

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(1200).url()
    : null;

  return (
    <ScrollArea className="h-[calc(100vh-5rem)] w-full">
      <article className="max-w-5xl mx-auto py-12 px-6 space-y-10">
        {/* Date */}
        <p className="text-center text-muted-foreground text-sm mb-1">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "Date not available"}
        </p>

        {/* Title */}
        <h1 className="text-center text-5xl md:text-7xl font-display font-semibold leading-tight">
          {post.title}
        </h1>

        {/* Separator */}
        <Separator className="my-16 max-w-5xl mx-auto" />

        {/* Hero Image */}
        {imageUrl && (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-12">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover shadow-md"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg dark:prose-invert text-[1.15rem] sm:text-[1.25rem]  mt-8 prose-p:leading-relaxed prose-headings:font-semibold mx-auto">
          <PortableText value={post.content} />
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mt-28 border-t pt-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related
                .sort(
                  (a, b) =>
                    new Date(b.publishedAt).getTime() -
                    new Date(a.publishedAt).getTime()
                )
                .slice(0, 3)
                .map((item) => {
                  const img = item.mainImage
                    ? urlFor(item.mainImage)?.width(300).height(200).url()
                    : null;
                  return (
                    <Link
                      key={item._id}
                      href={`/blog/${item.slug}`}
                      className="group flex flex-col gap-2 hover:opacity-90 transition"
                    >
                      {img && (
                        <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden">
                          <Image
                            src={img}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </section>
        )}
      </article>
    </ScrollArea>
  );
}
