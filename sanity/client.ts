import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "sj1c13vx",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});