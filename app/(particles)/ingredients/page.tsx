import { Icons } from "@/app/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardsActivityGoal } from "@/components/ui/cards/actitvity-goal";
import { CardsMetric } from "@/components/ui/cards/card-graph";
import { CardsChat } from "@/components/ui/cards/chat";
import { CardsCookieSettings } from "@/components/ui/cards/cookie-settings";
import { HeartIcon, CookieIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-4xl lg:px-12 text-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="text-md text-muted-foreground leading-6 prose uppercase">
              Welcome to the heart of SuperDanko
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-red-600">
              Ingredients
            </h1>
          </div>
        </div>
        <div className="container px-4 py-6">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {/* Peanut Card*/}
            <div className="lg:col-span-2 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="w-full relative overflow-hidden group">
                  {/* Image with Hover Effect */}
                  <div className="w-full h-full">
                    <Image
                      src="/images/Superdanko_login.jpg"
                      alt="Peanut Butter"
                      width={400}
                      height={400}
                      className="w-full rounded-md h-full object-cover aspect-4/3 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay text */}
                  <div className="absolute inset-0 flex flex-col justify-start sm:justify-end p-4 sm:p-6 bg-linear-to-t from-black/70 to-transparent">
                    <CardTitle className="text-white  font-bold">Our Secret Recipe</CardTitle>
                  
                  <CardDescription className="text-white/80 mt-2 ">
                    Crafted with care, our peanut butter is made from 100%
                    natural peanuts, roasted to perfection. No additives, no
                    preservatives—just pure, delicious goodness. It&apos;s the
                    heart of SuperDanko!
                  </CardDescription>
                  </div>
                </Card>

                <Card className="w-full">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-8">
                      <HeartIcon className="h-12 w-12 text-red-500" />
                    </div>
                    <div className=" flex justify-center">
                      <CardTitle className="mb-4">
                        Nutritional Powerhouse
                      </CardTitle>
                    </div>
                    <div className="flex justify-center">
                      <CardDescription className="max-w-lg text-center leading-relaxed">
                        Packed with protein, healthy fats, and essential
                        nutrients, our peanut butter is more than just a
                        treat—it&apos;s fuel for your day. Perfect for athletes,
                        busy professionals, and peanut butter lovers alike!
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* CardsChat below the peanut cards */}
              <div className="grid gap-4 grid-cols-1">
                <CardsChat />
              </div>
            </div>

            {/* CardsActivityGoal and CardsCookieSettings (3 columns) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <CardsCookieSettings />
                <CardsActivityGoal />
              </div>

              <CardsMetric />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
