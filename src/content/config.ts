import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    author: z.string().default('Anonymous'),
    image: z.string().optional(),
  })
});

export const collections = {
  'blog': blogCollection,
};
