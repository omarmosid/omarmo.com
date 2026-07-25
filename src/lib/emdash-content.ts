import readingTime from 'reading-time';
import type { ContentEntry, TaxonomyTerm } from 'emdash';

export interface MediaValue {
	id?: string;
	url?: string;
	src?: string;
	alt?: string;
	width?: number;
	height?: number;
}

export type PortableTextBlock = Record<string, any>;

export interface PostData {
	title: string;
	description: string;
	content: PortableTextBlock[];
	cover_image?: MediaValue;
	og_image?: string;
	publish_date: string | Date;
	updated_date?: string | Date;
}

export interface NoteData {
	title: string;
	description?: string;
	content: PortableTextBlock[];
	publish_date: string | Date;
}

export interface ProjectData {
	title: string;
	description: string;
	content: PortableTextBlock[];
	cover_image?: MediaValue;
	technologies?: string[];
	github_url?: string;
	live_url?: string;
	start_date: string | Date;
	end_date?: string | Date;
	featured?: boolean;
}

export interface RecipeData {
	title: string;
	description: string;
	content: PortableTextBlock[];
	cover_image?: MediaValue;
	publish_date: string | Date;
	updated_date?: string | Date;
	prep_time?: string;
	cook_time?: string;
	servings?: number;
	ingredients?: string[];
	cuisine?: string;
}

export type PostEntry = ContentEntry<PostData>;
export type NoteEntry = ContentEntry<NoteData>;
export type ProjectEntry = ContentEntry<ProjectData>;
export type RecipeEntry = ContentEntry<RecipeData>;
export type TagTerm = TaxonomyTerm;

export function asDate(value: string | Date | undefined): Date | undefined {
	if (!value) return undefined;
	return value instanceof Date ? value : new Date(value);
}

export function entrySlug(entry: ContentEntry<Record<string, unknown>>): string {
	return typeof entry.data.slug === 'string' ? entry.data.slug : entry.id;
}

export function mediaUrl(media: MediaValue | undefined): string | undefined {
	if (!media) return undefined;
	return media.url ?? media.src ?? (media.id ? `/_emdash/api/media/file/${media.id}` : undefined);
}

export function mediaAlt(media: MediaValue | undefined): string {
	return media?.alt ?? '';
}

export function readingTimeFromPortableText(blocks: PortableTextBlock[] | undefined): string | undefined {
	if (!blocks?.length) return undefined;
	const text = extractText(blocks).trim();
	return text ? readingTime(text).text : undefined;
}

export function setContentCache(response: Response): void {
	response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
}

function extractText(value: unknown): string {
	if (typeof value === 'string') return value;
	if (Array.isArray(value)) return value.map(extractText).join(' ');
	if (value && typeof value === 'object') {
		const record = value as Record<string, unknown>;
		if (typeof record.text === 'string') return record.text;
		return Object.values(record).map(extractText).join(' ');
	}
	return '';
}
