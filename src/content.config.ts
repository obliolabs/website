import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    abstract: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

export const collections = { research };
