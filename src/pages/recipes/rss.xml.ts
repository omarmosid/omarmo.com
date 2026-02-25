import { getCollection } from "astro:content";
import { siteConfig } from "@/site.config";
import rss from "@astrojs/rss";

export const GET = async () => {
	const recipes = await getCollection("recipe", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});

	return rss({
		title: `${siteConfig.title} - Recipes`,
		description: "My collection of recipes",
		site: import.meta.env.SITE,
		items: recipes.map((recipe) => ({
			title: recipe.data.title,
			description: recipe.data.description,
			pubDate: recipe.data.publishDate,
			link: `recipes/${recipe.id}/`,
		})),
	});
};
