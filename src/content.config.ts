import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blog = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        tag: z.enum([
            '#webdev', 
            '#gamedev',
            '#obsidian', 
            '#writing', 
            '#thoughts', 
            '#hardware'
        ]),
        date: z.coerce.date()
    })
 });

export const collections = { blog };