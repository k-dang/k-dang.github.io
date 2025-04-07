import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/work" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    employer: z.string(),
    employmentPeriod: z.string(),
    location: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    url: z.string().optional(),
    githubUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work, projects };
