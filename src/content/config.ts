import { defineCollection, z } from 'astro:content';

const gameCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    short_description: z.string(),
    url: z.string(),
    size: z.string(),
    version: z.string(),
    developer: z.string(),
    description: z.string(),
  }),
});

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    herf: z.string(),
  }),
});

export const collections = {
  game: gameCollection,
  post: postCollection,
};