const categoryConfig = {
  categories: [
    {
      name: "Peanut Butters",
      slug: "peanut-butters",
      description: "Creamy and crunchy spreads made from premium peanuts",
      subcategories: [
        {
          name: "Classic Peanut Butter",
          description: "Traditional recipe with honey",
          image: "/images/classic-peanut.jpg",
          slug: "classic-peanut",
        },
        {
          name: "Crunchy Peanut Butter",
          description: "With hemp seeds for texture",
          image: "/images/crunchy-peanut.jpg",
          slug: "classic-crunchy-peanut",
        },
        {
          name: "Vegan Peanut Butter",
          description: "Plant-based with maple syrup",
          image: "/images/vegan-peanut.jpg",
          slug: "vegan-peanut",
        },
        {
          name: "Crunchy Vegan Peanut Butter",
          description: "Plant-based with whole hemp seeds",
          image: "/images/vegan-peanut-crunchy.jpg",
          slug: "vegan-crunchy-peanut",
        },
      ],
    },
    {
      name: "Hazelnut Spreads",
      slug: "hazelnut-spreads",
      description: "Rich and luxurious hazelnut creations",
      subcategories: [
        {
          name: "Classic Hazelnut",
          description: "Original recipe with honey",
          image: "/images/classic-hazelnut.jpg",
          slug: "classic-hazelnut",
        },
        {
          name: "Vegan Hazelnut",
          description: "Sweetened with date nectar",
          image: "/images/vegan-hazelnut.jpg",
          slug: "vegan-hazelnut",
        },
      ],
    },
  ],
  tags: [
    "bestseller",
    "featured",
    "popular",
    "trending",
    "exclusive",
    "new",
    "limited-edition",
  ],
};

module.exports = { categoryConfig };
