import { useEffect, useState } from 'react';

/** The three wash colours, defined in global.css next to the rest of the palette. */
const TOKENS = ['--wash-1', '--wash-2', '--wash-3'] as const;

/**
 * Background colours from the site's CSS variables, or `null` until they have been read.
 * They can only be read in the browser, so nothing is rendered on the server.
 */
export function useThemeColors(): string[] | null {
	const [colors, setColors] = useState<string[] | null>(null);

	useEffect(() => {
		const style = getComputedStyle(document.documentElement);
		setColors(TOKENS.map((token) => style.getPropertyValue(token).trim()));
	}, []);

	return colors;
}
