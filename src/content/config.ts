import { z, defineCollection } from "astro:content";

const legalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    pubDate: z.date(),
    title: z.string(),
    lead: z.string(),
  }),
});

const apirefCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const guidesCollection = defineCollection({
  type: "content",
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
