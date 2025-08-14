import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        tag: z.enum([
            '#programming',
            '#webdev',
            '#gamedev',
            '#obsidian',
            '#writing',
            '#thoughts',
            '#hardware'
        ]),
        summary: z.string().optional(),
        date: z.coerce.date()
    })
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
    schema: z.object({
        title: z.string(),
        subtext: z.string(),
        links: z.object({
            github: z.string().optional(),
            web: z.string().optional(),
            docs: z.string().optional(),
            itch: z.string().optional(),
            steam: z.string().optional(),
        }).optional()
    })
})

export const collections = { blog, projects };