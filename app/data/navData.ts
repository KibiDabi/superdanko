import { getNavLinks } from "@/lib/navLinks";
import { NavigationItem } from "@/lib/types";

export async function getNavigationRoutes(): Promise<NavigationItem> {
  const navLinks = await getNavLinks();

  return {
    name: "SuperDanko",
    description: "An online web shop for peanut butters",
    url: "https://superdanko.com",
    ogImage: "https://superdanko.com",
    mainNav: [
    {
      title: "Products",
      items: [
        {
          title: "All",
          href: "/products",
          description: "Your ultimate source of super powered nutrition",
          items: [],
        },
        {
          title: "Testimonials",
          href: "/testimonials",
          description: "Real stories from our super satisfied customers",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Dive into tips, recipes, and hero stories",
          items: [],
        },
      ],
    },
    ...navLinks.categories.map((category) => ({
      title: category.name,
      items: category.subcategories.map((subcategory) => ({
        title: subcategory.name,
        href: `/${subcategory.slug}`,
        description: subcategory.description,
        items: [],
      })),
    })),
  ],
  footerNav: [
    {
      title: "Company",
      items: [
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Blog",
          href: "/blog",
        },
      ],
    },
    {
      title: "Connect",
      items: [
        {
          title: "Instagram",
          href: "https://www.instagram.com/super_danko",
        },
        {
          title: "Facebook",
          href: "https://www.facebook.com/superjunackimaslac",
        },
        {
          title: "X",
          href: "",
        },
        {
          title: "TikTok",
          href: "",
        },
      ],
    },
    {
      title: "Discover",
      items: [
        {
          title: "Recipes",
          href: "/recipes",
        },
        {
          title: "Ingredients",
          href: "/ingredients",
        },
      ],
    },
  ],
};
}
