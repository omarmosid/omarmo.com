import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft projects based on the environment */
export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
	return await getCollection("project", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** get featured projects */
export async function getFeaturedProjects(): Promise<CollectionEntry<"project">[]> {
	const allProjects = await getAllProjects();
	return allProjects.filter((project) => project.data.featured);
}

/** returns all tags created from projects (inc duplicate tags)
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 *  */
export function getAllTags(projects: CollectionEntry<"project">[]) {
	return projects.flatMap((project) => [...project.data.tags]);
}

/** returns all unique tags created from projects
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 *  */
export function getUniqueTags(projects: CollectionEntry<"project">[]) {
	return [...new Set(getAllTags(projects))];
}

/** returns all technologies used in projects (inc duplicates)
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 *  */
export function getAllTechnologies(projects: CollectionEntry<"project">[]) {
	return projects.flatMap((project) => [...project.data.technologies]);
}

/** returns all unique technologies used in projects
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 *  */
export function getUniqueTechnologies(projects: CollectionEntry<"project">[]) {
	return [...new Set(getAllTechnologies(projects))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft projects, pass it the result of getAllProjects above to do so.
 *  */
export function getUniqueTagsWithCount(projects: CollectionEntry<"project">[]): [string, number][] {
	return [
		...getAllTags(projects).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
