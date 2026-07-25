import rss from '@astrojs/rss';
import { getEmDashCollection } from 'emdash';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { asDate, entrySlug, type PostEntry } from '../lib/emdash-content';

export const prerender = false;

export async function GET(context: { site: URL }) {
	const { entries, error } = await getEmDashCollection('posts', { status: 'published' });
	if (error) return new Response('Failed to load feed', { status: 500 });
	const posts = (entries as PostEntry[]).sort(
		(a, b) => (asDate(b.data.publish_date)?.valueOf() ?? 0) - (asDate(a.data.publish_date)?.valueOf() ?? 0),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: asDate(post.data.publish_date),
			link: `/posts/${entrySlug(post)}/`,
		})),
	});
}
