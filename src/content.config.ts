import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
// import { notionLoader } from "notion-astro-loader";

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
	title: z.string().max(60),
});

const post = defineCollection({
	loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
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
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
		}),
});

const note = defineCollection({
	loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({
		description: z.string().optional(),
		publishDate: z
			.string()
			.datetime({ offset: true }) // Ensures ISO 8601 format with offsets allowed (e.g. "2024-01-01T00:00:00Z" and "2024-01-01T00:00:00+02:00")
			.transform((val) => new Date(val)),
	}),
});

const project = defineCollection({
	loader: glob({ base: "./src/content/project", pattern: "**/*.{md,mdx}" }),
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
			startDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			endDate: z
				.string()
				.or(z.date())
				.optional()
				.transform((val) => (val ? new Date(val) : undefined)),
			featured: z.boolean().default(false),
		}),
});

// const database = defineCollection({
// 	loader: notionLoader({
// 		auth: import.meta.env.NOTION_TOKEN,
// 		database_id: import.meta.env.NOTION_DATABASE_ID,
// 		// Use Notion sorting and filtering
// 		filter: {
// 			property: "Hidden",
// 			checkbox: { equals: false },
// 		},
// 	}),
// });

export const collections = { 
	post, 
	note, 
	project,
	// database 
};
