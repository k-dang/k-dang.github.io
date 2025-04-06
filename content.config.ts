import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/work" }),
  schema: z.object({
    title: z.string(),
    employer: z.string(),
    employmentPeriod: z.string(),
    location: z.string().optional(),
  }),
});

export const collections = { work };
