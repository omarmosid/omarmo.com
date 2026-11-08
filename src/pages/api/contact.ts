import type { APIRoute } from 'astro';
import { CONTACT_PAGE, type ContactStatus } from '../../lib/contact/config';
import { sendContactEmail } from '../../lib/contact/send';
import { getTurnstileKeys, verifyTurnstile } from '../../lib/contact/turnstile';
import { parseContactForm } from '../../lib/contact/validate';
import { getWorkerEnv } from '../../lib/env';

export const prerender = false;

function statusUrl(status: ContactStatus): string {
	return `${CONTACT_PAGE}?${status}=1`;
}

/**
 * Contact form handler: parse → honeypot → Turnstile → send → redirect.
 * Native form POST, so every outcome is a redirect back to the contact page.
 */
export const POST: APIRoute = async ({ request, redirect }) => {
	// 303 so the browser follows with a GET and a refresh won't resubmit the form.
	const redirectWith = (status: ContactStatus) => redirect(statusUrl(status), 303);

	const parsed = parseContactForm(await request.formData());
	if (!parsed.ok) {
		console.warn(`[contact] Rejected submission: ${parsed.reason}`);
		return redirectWith('error');
	}

	// Pretend success so bots don't learn they were caught.
	if (parsed.isSpam) return redirectWith('sent');

	const env = await getWorkerEnv();
	const { secretKey } = getTurnstileKeys(env);

	if (!secretKey) {
		console.warn('[contact] TURNSTILE_SECRET_KEY not set, skipping verification');
	} else if (!(await verifyTurnstile(parsed.turnstileToken, secretKey, request.headers.get('CF-Connecting-IP')))) {
		console.warn('[contact] Turnstile verification failed');
		return redirectWith('error');
	}

	try {
		await sendContactEmail(parsed.data, env);
	} catch (error) {
		// Email Sending errors carry a `code`, e.g. E_SENDER_NOT_VERIFIED or E_RATE_LIMIT_EXCEEDED.
		const code = error instanceof Error && 'code' in error ? error.code : undefined;
		console.error('[contact] Failed to send email', code, error);
		return redirectWith('error');
	}

	return redirectWith('sent');
};
