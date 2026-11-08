/** Where contact form submissions are delivered. Fixed server-side so visitors can't redirect it. */
export const CONTACT_RECIPIENT = 'omar.mo.sid@gmail.com';

/** Sender address. Must be on a domain onboarded for Cloudflare Email Sending. */
export const CONTACT_SENDER = { email: 'noreply@omarmo.com', name: 'omarmo.com' };

/** Form field names, shared by the form markup and the server-side parser. */
export const CONTACT_FIELDS = {
	name: 'name',
	email: 'email',
	company: 'company',
	message: 'message',
	honeypot: 'website',
	turnstile: 'cf-turnstile-response',
} as const;

/** Max lengths, used for both the HTML `maxlength` attributes and server validation. */
export const CONTACT_LIMITS = {
	name: 200,
	email: 320,
	company: 200,
	message: 5000,
} as const;

/** Query-string statuses the contact page understands after a submission. */
export type ContactStatus = 'sent' | 'error';

export const CONTACT_PAGE = '/contact/';
