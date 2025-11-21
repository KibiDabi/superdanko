import { getNavLinks } from "@/lib/navLinks";
import { NavigationItem } from "@/lib/types";

export async function getNavigationRoutes(): Promise<NavigationItem> {
  const navLinks = await getNavLinks();

  return {
    name: "Super Danko",
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
          description: "Your ultimate source of superpowered nutrition",
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
          title: "Contact",
          href: "/contact",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "FAQs",
          href: "/faq",
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
          title: "Peanut Butter Farm",
          href: "/peanutfarm",
        },
        {
          title: "Recipes",
          href: "/recipes",
        },
        {
          title: "Where to buy",
          href: "/stores",
        },
        {
          title: "Feedback",
          href: "/feedback",
        },
      ],
    },
    {
      title: "Who are we",
      items: [
        {
          title: "Our story",
          href: "/ourstory",
        },
        {
          title: "Super Foods",
          href: "superfoods",
        },
        {
          title: "Snacking",
          href: "snacks",
        },
      ],
    },
  ],
};
}
