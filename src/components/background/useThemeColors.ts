import { useEffect, useState } from 'react';

/** The three wash colours, defined per theme in global.css next to the rest of the palette. */
const TOKENS = ['--wash-1', '--wash-2', '--wash-3'] as const;

function readColors(): string[] {
	const style = getComputedStyle(document.documentElement);
	return TOKENS.map((token) => style.getPropertyValue(token).trim());
}

/**
 * Background colours from the site's CSS variables, or `null` until they have been read.
 * They can only be read in the browser, so nothing is rendered on the server.
 * Updates live when the light/dark toggle flips the root `dark` class.
 */
export function useThemeColors(): string[] | null {
	const [colors, setColors] = useState<string[] | null>(null);

	useEffect(() => {
		const update = () => setColors(readColors());
		update();

		const observer = new MutationObserver(update);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
		return () => observer.disconnect();
	}, []);

	return colors;
}
