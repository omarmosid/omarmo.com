import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
	title: z.string(),
});

const post = defineCollection({
	loader: glob({ base: './src/content/post', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
		}),
});

const note = defineCollection({
	loader: glob({ base: './src/content/note', pattern: '**/*.{md,mdx}' }),
	schema: baseSchema.extend({
		description: z.string().optional(),
		publishDate: z.coerce.date(),
	}),
});

const project = defineCollection({
	loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			technologies: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			githubUrl: z.string().url().optional(),
			liveUrl: z.string().url().optional(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			featured: z.boolean().default(false),
		}),
});

const recipe = defineCollection({
	loader: glob({ base: './src/content/recipe', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			prepTime: z.string().optional(),
			cookTime: z.string().optional(),
			servings: z.number().optional(),
			ingredients: z.array(z.string()).default([]),
			cuisine: z.string().optional(),
		}),
});

export const collections = { post, note, project, recipe };
