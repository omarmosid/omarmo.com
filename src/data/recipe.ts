import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft recipes based on the environment */
export async function getAllRecipes(): Promise<CollectionEntry<"recipe">[]> {
	return await getCollection("recipe", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** returns all tags created from recipes (inc duplicate tags)
 *  Note: This function doesn't filter draft recipes, pass it the result of getAllRecipes above to do so.
 *  */
export function getAllTags(recipes: CollectionEntry<"recipe">[]) {
	return recipes.flatMap((recipe) => [...recipe.data.tags]);
}

/** returns all unique tags created from recipes
 *  Note: This function doesn't filter draft recipes, pass it the result of getAllRecipes above to do so.
 *  */
export function getUniqueTags(recipes: CollectionEntry<"recipe">[]) {
	return [...new Set(getAllTags(recipes))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft recipes, pass it the result of getAllRecipes above to do so.
 *  */
export function getUniqueTagsWithCount(recipes: CollectionEntry<"recipe">[]): [string, number][] {
	return [
		...getAllTags(recipes).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
