import { HandHelping, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Team from "@/app/components/Team";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Hero45Props {
  badge?: string;
  heading: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
}

export default function AboutUs() {
  const badge = "superdanko.com";
  const heading = "Welcome to SuperDanko - Your Ultimate Shopping Destination";
  const imageSrc = "/images/superdanko_aboutus.jpg";
  const imageAlt = "SuperDanko Team";
  const features = [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Customer-Centric Approach",
      description:
        "We prioritize your satisfaction with personalized support and a seamless shopping experience.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Community Driven",
      description:
        "Join a vibrant community of shoppers and enjoy exclusive deals and events.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Fast & Reliable Delivery",
      description:
        "Get your orders delivered swiftly and securely, right to your doorstep.",
    },
  ];
  return (
    <section className="py-32 mx-auto">
      <div className="container mx-auto overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="text-4xl tracking-tight font-display font-semibold lg:text-5xl">{heading}</h1>
        </div>
        <div className="relative mx-auto max-w-(--breakpoint-lg)">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 bg-size-[12px_12px] opacity-40 mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 bg-size-[12px_12px] opacity-40 mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-(--breakpoint-lg) flex-col md:flex-row">
          {features.map((feature, index) => (
            <>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-linear-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background p-4"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
      <Team />
    </section>
  );
}
