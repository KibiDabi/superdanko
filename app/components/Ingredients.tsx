"use client";

import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Icons } from "./Icons";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatedIngredientCard } from "./AnimatedIngredientCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // controls sync
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

export default function Ingredients() {
  const items = [
    {
      icon: <Icons.peanut />,
      title: "Peanuts",
      desc: "The Mighty Protector! Peanuts are the backbone of our superhero squad, packed with protein, healthy fats, and antioxidants. Think of them as the Captain America of our team—reliable, strong, and always there when you need them.",
      wrapperClass: "sm:col-span-2", // <- important: on motion.div (grid child)
      cardClass: "", // optional: pass down styles to AnimatedIngredientCard if needed
    },
    {
      icon: <Icons.pumpkin />,
      title: "Pumpkin Seeds",
      desc: "Pumpkin seeds are like Iron Man—small but mighty, with a high-tech arsenal of nutrients to keep you in top shape.",
      wrapperClass: "",
      cardClass: "",
    },
    {
      icon: <Icons.plant />,
      title: "Hemp Seeds",
      desc: "They're the Thor of our team—bringing the thunder of essential nutrients to keep your body and mind in peak condition.",
      wrapperClass: "",
      cardClass: "",
    },
    {
      icon: <Icons.sesame />,
      title: "Sesame Seeds",
      desc: "They're the Black Widow of our squad—stealthy, powerful, and always looking out for your long-term health.",
      wrapperClass: "",
      cardClass: "",
    },
    {
      icon: <Icons.flax />,
      title: "Flax Seeds",
      desc: "The Digestive Hero! They're like Spider-Man—flexible, quick, and always swinging in to save the day when your body needs a little extra help.",
      wrapperClass: "sm:col-span-2",
      cardClass: "",
    },
    {
      icon: <Icons.mountain />,
      title: "Himalayan Salt",
      desc: "Think of it as the Hulk—strong, essential, and always ready to keep you balanced and powerful.",
      wrapperClass: "",
      cardClass: "",
    },
    {
      icon: <Icons.honey />,
      title: "Honey",
      desc: "The Natural Energizer! Honey is like the Flash—fast, sweet, and always there to give you a boost when you need it most.",
      wrapperClass: "sm:col-span-2",
      cardClass: "",
    },
    {
      icon: <Icons.oil />,
      title: "Sunflower Oil",
      desc: "The Heart Protector! It's the Wonder Woman of our team—graceful, powerful, and always fighting for your well-being.",
      wrapperClass: "sm:col-span-2",
      cardClass: "",
    },
  ];

  return (
    <section className="relative pb-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_20%_200px,#343435,transparent)]"></div>
      </div>

      <motion.div
        className="max-w-7xl pt-12 mx-auto px-4 sm:px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          className="font-heading  text-4xl sm:text-5xl  font-semibold mb-10"
          variants={fadeUpVariants}
        >
          The Superhero Lineup: Meet the Ingredients
        </motion.p>
        <motion.p
          className="mt-4 max-w-3xl space-y-7 mb-10 text-muted-foreground"
          variants={fadeUpVariants}
        >
          Just like a superhero needs their trusty sidekicks, your body needs
          the right fuel to stay strong, energized, and ready to take on the
          world. That&apos;s why we&apos;ve carefully selected 8 supercharged
          ingredients that are the foundation of our delicious, nutrient-packed
          peanut butters. These ingredients aren&apos;t just tasty—they&apos;re
          your secret weapons for a healthier, more vibrant life.
        </motion.p>

        <motion.div variants={fadeUpVariants}>
          <Button asChild>
            <Link href="/ingredients">
              Learn more{" "}
              <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />{" "}
              <span className="sr-only">Learn more</span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto max-w-7xl mt-20 flex-1 items-start gap-4 px-4  md:px-8 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-4 xl:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              // IMPORTANT: wrapperClass must be on THIS element (grid direct child)
              className={`${item.wrapperClass ?? ""}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true, amount: 0.2 }}
              // optional: enable layout animations for smooth reflow
              layout
            >
              <AnimatedIngredientCard className={item.cardClass}>
                <CardHeader className="pb-3">
                  <div className="space-y-4">
                    {item.icon}
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed max-w-lg">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </AnimatedIngredientCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
