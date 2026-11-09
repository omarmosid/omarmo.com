import { useSyncExternalStore } from 'react';

let cachedSupport: boolean | undefined;

/** Checks once whether the browser can create a WebGL context. */
function detectWebGL(): boolean {
	cachedSupport ??= (() => {
		try {
			const canvas = document.createElement('canvas');
			return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'));
		} catch {
			return false;
		}
	})();
	return cachedSupport;
}

/**
 * `true` when WebGL is available. The shader library throws if it isn't, so the background
 * checks first and simply renders nothing. Assumed `false` during server rendering.
 */
export function useWebGL(): boolean {
	return useSyncExternalStore(
		() => () => {},
		detectWebGL,
		() => false,
	);
}
