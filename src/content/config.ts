import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    area: z.string(),
    status: z.string(),
    description: z.string(),
    modal: z.object({
      problem: z.string(),
      approach: z.string(),
      results: z.string(),
      limitations: z.string(),
    }),
    links: z.array(z.object({ label: z.string() })).optional(),
  }),
});

export const collections = { projects };
