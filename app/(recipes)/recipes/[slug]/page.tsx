import { client } from "@/sanity/client";
import Image from "next/image";
import { PortableText } from "next-sanity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Build Sanity image URLs
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Query
const recipeBySlugQuery = `*[_type == "recipe" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  shortDescription,
  prepTime,
  cookTime,
  totalTime,
  serves,
  ingredients,
  instructions,
  notes,
  publishedAt
}`;

export default async function RecipePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const recipe = await client.fetch(recipeBySlugQuery, { slug });

  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  const recipeImage = recipe.mainImage
    ? urlFor(recipe.mainImage)?.width(800).height(600).url()
    : null;

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Layout: Left info + Right image */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* Left side */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{recipe.title}</h1>
          {recipe.shortDescription && (
            <p className="text-muted-foreground text-lg">
              {recipe.shortDescription}
            </p>
          )}

          {/* Times */}
          <div className="text-sm italic text-muted-foreground space-x-4">
            {recipe.prepTime && <span>Prep: {recipe.prepTime} min</span>}
            {recipe.cookTime && <span>Cook: {recipe.cookTime} min</span>}
            {recipe.totalTime && <span>Total: {recipe.totalTime} min</span>}
            {recipe.serves && <span>Serves: {recipe.serves}</span>}
          </div>

          {/* Accordion Sections */}
          <Accordion type="single" collapsible className="w-full mt-6">
            {/* Ingredients */}
            <AccordionItem value="ingredients">
              <AccordionTrigger className="text-xl font-semibold">
                Ingredients
              </AccordionTrigger>
              <AccordionContent>
                {recipe.ingredients && recipe.ingredients.length > 0 ? (
                  <ul className="list-disc text-[1.05rem] sm:text-[1rem] list-inside space-y-3">
                    {recipe.ingredients.map((item: any, i: number) => (
                      <li key={i}>
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <PortableText value={[item]} />
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No ingredients listed.</p>
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Instructions */}
            {recipe.instructions && recipe.instructions.length > 0 && (
              <AccordionItem value="instructions">
                <AccordionTrigger className="text-xl font-semibold">
                  Instructions
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    {recipe.instructions.map((block: any, index: number) => (
                      <li key={block._key} className="leading-relaxed text-[1.05rem] sm:text-[1rem] pl-2">
                        <PortableText value={[block]} />
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            )}

            {/* Notes */}
            {recipe.notes && (
              <AccordionItem value="notes">
                <AccordionTrigger className="text-xl font-semibold">
                  Notes
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[1.05rem] sm:text-[1rem]">{recipe.notes}</p>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>

        {/* Right side: Image */}
        {recipeImage && (
          <div className="flex-1">
            <Image
              src={recipeImage}
              alt={recipe.title}
              width={800}
              height={600}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
