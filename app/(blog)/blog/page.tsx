import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchBlogPostsFromSanity } from "@/sanity/fetchBlogPosts";
import Link from "next/link";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Sanity image builder
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? ImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function BlogPage() {
  const blogs = await fetchBlogPostsFromSanity();

  return (
    <div className="w-full py-10 sm:py-12 lg:py-18">
      <div className="p-6 md:px-9 lg:px-12 mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-18">
          <h4 className="text-4xl md:text-5xl tracking-tight max-w-xl font-display font-semibold">
            Latest articles
          </h4>
          <Button className="gap-4 font-semibold">
            View all articles <MoveRight className="w-4 h-4" />
          </Button>
        </div>

        {/* BLOG GRID */}
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-12">
            {blogs.map((blog: any) => {
              const imageUrl = blog.mainImage
                ? urlFor(blog.mainImage)?.width(400).height(400).url()
                : null;

              return (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog._id}
                  className="flex flex-col gap-2 hover:opacity-75 transition cursor-pointer"
                >
                  {imageUrl ? (
                    <div className="rounded-md aspect-video mb-4 relative w-full">
                      <Image
                        src={imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform rounded-md"
                      />
                    </div>
                  ) : (
                    <div className="bg-muted-foreground w-full h-full flex items-center justify-center">
                      <span>No Image Available</span>
                    </div>
                  )}

                  <h3 className="text-xl tracking-tight">{blog.title}</h3>
                  <p className="text-muted-foreground text-base line-clamp-2">
                    {blog.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-muted-foreground">No blog posts available.</p>
        )}
      </div>
    </div>
  );
}
