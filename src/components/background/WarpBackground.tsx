import { Warp } from '@paper-design/shaders-react';
import { useReducedMotion } from './useReducedMotion';
import { useThemeColors } from './useThemeColors';
import { useWebGL } from './useWebGL';

/**
 * Warp shader settings, tuned to be a soft, slow wash of colour rather than a pattern:
 * large smooth shapes, gentle distortion, and slow movement.
 */
const WARP = {
	proportion: 0.5,
	softness: 1,
	distortion: 0.2,
	swirl: 0.6,
	swirlIterations: 8,
	shape: 'edge',
	shapeScale: 0.12,
	scale: 1.4,
} as const;

/** Animation speed. 1 is the library's default, which is much too lively for a background. */
const SPEED = 1.5;

/**
 * Cap on rendering cost: no supersampling, and a pixel budget about the size of a 1080p screen,
 * so phones and high-density displays don't pay for detail nobody can see in a blur.
 */
const MIN_PIXEL_RATIO = 1;
const MAX_PIXEL_COUNT = 1920 * 1080;

/**
 * Animated gradient wash painted in the theme's own colours, so it follows light and dark mode.
 * Fills its parent. With "reduce motion" on it renders a single still frame, and without WebGL it renders nothing.
 */
export default function WarpBackground() {
	const colors = useThemeColors();
	const reducedMotion = useReducedMotion();
	const hasWebGL = useWebGL();

	if (!hasWebGL || !colors) return null;

	return (
		<Warp
			{...WARP}
			colors={colors}
			speed={reducedMotion ? 0 : SPEED}
			minPixelRatio={MIN_PIXEL_RATIO}
			maxPixelCount={MAX_PIXEL_COUNT}
			width="100%"
			height="100%"
		/>
	);
}
