import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void): () => void {
	const media = window.matchMedia(QUERY);
	media.addEventListener('change', onChange);
	return () => media.removeEventListener('change', onChange);
}

/** `true` when the visitor has asked their system to reduce motion. Assumed `false` during server rendering. */
export function useReducedMotion(): boolean {
	return useSyncExternalStore(
		subscribe,
		() => window.matchMedia(QUERY).matches,
		() => false,
	);
}
