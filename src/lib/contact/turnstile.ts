import type { WorkerEnv } from '../env';

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Cloudflare's official always-pass test keys, used in local dev so the full flow works
 * without real credentials. https://developers.cloudflare.com/turnstile/troubleshooting/testing/
 */
const TEST_KEYS = {
	siteKey: '1x00000000000000000000AA',
	secretKey: '1x0000000000000000000000000000000AA',
} as const;

export interface TurnstileKeys {
	siteKey?: string;
	secretKey?: string;
}

/**
 * Resolve Turnstile keys from the Worker env, falling back to test keys in dev.
 * In production, missing keys mean Turnstile is disabled (widget hidden, check skipped).
 */
export function getTurnstileKeys(env: WorkerEnv | null): TurnstileKeys {
	return {
		siteKey: env?.TURNSTILE_SITE_KEY || (import.meta.env.DEV ? TEST_KEYS.siteKey : undefined),
		secretKey: env?.TURNSTILE_SECRET_KEY || (import.meta.env.DEV ? TEST_KEYS.secretKey : undefined),
	};
}

/** Verify a Turnstile token server-side. Returns `false` on any failure, including network errors. */
export async function verifyTurnstile(token: string, secret: string, remoteIp?: string | null): Promise<boolean> {
	if (!token) return false;

	const body = new FormData();
	body.append('secret', secret);
	body.append('response', token);
	if (remoteIp) body.append('remoteip', remoteIp);

	try {
		const response = await fetch(SITEVERIFY_URL, { method: 'POST', body });
		const result: { success?: boolean } = await response.json();
		return result.success === true;
	} catch (error) {
		console.error('[contact] Turnstile verification request failed', error);
		return false;
	}
}
