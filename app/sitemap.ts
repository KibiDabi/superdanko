import type { MetadataRoute } from "next";

const siteUrl = "https://superdanko.com";

const staticRoutes = [
  "",
  "/about",
  "/about/mission",
  "/blog",
  "/ingredients",
  "/products",
  "/recipes",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
