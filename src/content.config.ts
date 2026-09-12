// import { defineCollection } from 'astro:content';
// import { glob } from 'astro/loaders';
// import { z } from 'astro/zod';

// const blog = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
// 	// Type-check frontmatter using a schema
// 	schema: ({ image }) =>
// 		z.object({
// 			title: z.string(),
// 			description: z.string(),
// 			// Transform string to Date object
// 			pubDate: z.coerce.date(),
// 			updatedDate: z.coerce.date().optional(),
// 			heroImage: z.optional(image()),
// 		}),
// });

// const patientStage = z.enum(['stage-0', 'stage-1', 'stage-2', 'stage-3', 'stage-4']);

// const patient = defineCollection({
//   loader: glob({ pattern: '**/*.md', base: './src/content/patient' }),
//   schema: z.object({
//     title: z.string(),
//     heading: z.string().optional(),
//     description: z.string(),
//     stage: patientStage,
//     tags: z.array(z.string()).default([]),
//     /** Other article slugs (filename without folder or extension). */
//     related: z.array(z.string()).default([]),
//     illustration: z.string().optional(),
//     draft: z.boolean().default(false),
//   }),
// });

export const collections = {
  patient,
};
