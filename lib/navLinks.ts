import { navLinksConfig } from "./types";

export const navLinks: navLinksConfig = {
  categories: [
    {
      name: "Recipes",
      description: "The best recipes in the world.",
      subcategories: [
        {
          name: "Superhero Breakfast Boost",
          description: "A power-packed breakfast",
          image: "/path-to-image",
          slug: "breakfast",
        },
        {
          name: "Post-Workout Power Snack",
          description: "Protein-rich snack that rebuilds muscles",
          image: "/path-to-image",
          slug: "protein",
        },
        {
          name: "Energy-Boosting Smoothie",
          description: "Blend your way to greatness",
          image: "/path-to-image",
          slug: "smoothie",
        },
        {
          name: "Midnight Hero Treat",
          description: "Satisfy your cravings with a guilt-free treat",
          image: "/path-to-image",
          slug: "treat",
        },
      ],
    },
    {
      name: "Shop",
      description: "Craziest web shop on the planet",
      subcategories: [
        {
          name: "SuperDanko Starter Pack",
          description: "Begin your hero journey",
          image: "/path",
          slug: "starter",
        },
        {
          name: "Limited Edition Jars",
          description: "Collect rare, exclusive flavors",
          image: "/path",
          slug: "jars",
        },
        {
          name: "SuperDanko Merch",
          description: "Wear your hero pride",
          image: "/path",
          slug: "merch",
        },
        {
          name: "Gift Boxes for Heroes",
          description: "Spread the love with gift sets",
          image: "/path",
          slug: "giftbox",
        },
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
          slug: "mission",
        },
        {
          name: "The SuperDanko Team",
          description: "Meet the heroes behind the jars",
          image: "/path",
          slug: "team",
        },
        {
          name: "Our Ingredients",
          description: "Discover the superfoods that make our butters",
          image: "/path",
          slug: "ingredients",
        },
        {
          name: "Join the League",
          description: "Become part of the SuperDanko community",
          image: "/path",
          slug: "community",
        },
      ],
    },
  ],
};
