import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    pubDate: z.date(),
    title: z.string(),
    lead: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
