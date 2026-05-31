import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    category: z.enum(["software-engineering", "health-and-fitness"]),
  }),
});

export const collections = { writing };
