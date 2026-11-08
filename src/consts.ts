export const SITE_TITLE = 'Omar Mo';
export const SITE_DESCRIPTION =
	'Omar Mo helps startups and small businesses use AI in practical ways: building, advising and training.';
export const SITE_URL = 'https://omarmo.com';
export const SITE_AUTHOR = 'Omar Mo';
export const TWITTER_HANDLE = '@omarmosid';

/** Primary navigation, shown in the header. Kept short and professional. */
export const MENU_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/work-with-me/', label: 'Work with me' },
	{ href: '/posts/', label: 'Posts' },
	{ href: '/about/', label: 'About' },
	{ href: '/contact/', label: 'Contact' },
] as const;

/** Footer navigation: everything in the header plus the personal pages. */
export const FOOTER_LINKS = [
	...MENU_LINKS,
	{ href: '/now/', label: 'Now' },
	{ href: '/notes/', label: 'Notes' },
	{ href: '/recipes/', label: 'Recipes' },
] as const;

export const SOCIAL_LINKS = [
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/omar1108/',
	},
	{
		label: 'GitHub',
		href: 'https://github.com/omarmosid',
	},
	{
		label: 'Twitter',
		href: 'https://x.com/omarmosid',
	},
] as const;
