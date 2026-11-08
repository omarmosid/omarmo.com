import { CONTACT_FIELDS, CONTACT_LIMITS } from './config';

export interface ContactSubmission {
	name: string;
	email: string;
	company?: string;
	message: string;
}

export type ParseResult =
	| { ok: true; data: ContactSubmission; isSpam: boolean; turnstileToken: string }
	| { ok: false; reason: string };

// Deliberately loose: the browser already validates format, this just rejects obvious junk.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(form: FormData, name: string): string {
	const value = form.get(name);
	return typeof value === 'string' ? value.trim() : '';
}

/** Parse and validate a contact form submission. Mirrors the constraints in the form markup. */
export function parseContactForm(form: FormData): ParseResult {
	const name = readField(form, CONTACT_FIELDS.name);
	const email = readField(form, CONTACT_FIELDS.email);
	const company = readField(form, CONTACT_FIELDS.company);
	const message = readField(form, CONTACT_FIELDS.message);

	if (!name || !email || !message) return { ok: false, reason: 'missing required field' };
	if (!EMAIL_PATTERN.test(email)) return { ok: false, reason: 'invalid email' };
	if (
		name.length > CONTACT_LIMITS.name ||
		email.length > CONTACT_LIMITS.email ||
		company.length > CONTACT_LIMITS.company ||
		message.length > CONTACT_LIMITS.message
	) {
		return { ok: false, reason: 'field too long' };
	}

	return {
		ok: true,
		data: { name, email, company: company || undefined, message },
		isSpam: readField(form, CONTACT_FIELDS.honeypot) !== '',
		turnstileToken: readField(form, CONTACT_FIELDS.turnstile),
	};
}
