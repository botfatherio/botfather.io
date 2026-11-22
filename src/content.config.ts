import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
  }),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    pubDate: z.date(),
    title: z.string(),
    lead: z.string(),
  }),
});

const apirefCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/apiref" }),
  schema: z.object({
    title: z.string(),
  }),
});

const guidesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  legal: legalCollection,
  posts: postsCollection,
  apiref: apirefCollection,
  guides: guidesCollection,
};
