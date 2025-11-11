import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sanity image builder
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// GROQ query for all recipes
const allRecipesQuery = `*[_type == "recipe" && defined(slug.current)]{
  _id,
  title,
  slug,
  mainImage
} | order(_createdAt desc)`;

export default async function RecipesPage() {
  const recipes = await client.fetch(allRecipesQuery);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">Our Recipes</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe: any) => {
          const imageUrl = recipe.mainImage
            ? urlFor(recipe.mainImage)?.width(400).height(600).url()
            : null;

          return (
            <Link key={recipe._id} href={`/recipes/${recipe.slug.current}`}>
              <Card className="group overflow-hidden transition-all hover:shadow-lg rounded-2xl">
                {imageUrl && (
                  <div className="relative w-full aspect-[5/4]">
                    <Image
                      src={imageUrl}
                      alt={recipe.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader className="text-center p-4">
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {recipe.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
