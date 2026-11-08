import type { WorkerEnv } from '../env';
import { CONTACT_RECIPIENT, CONTACT_SENDER } from './config';
import type { ContactSubmission } from './validate';

function formatBody({ name, email, company, message }: ContactSubmission): string {
	const details = [`Name: ${name}`, `Email: ${email}`];
	if (company) details.push(`Company: ${company}`);
	return [...details, '', message].join('\n');
}

/**
 * Email a contact submission to the site owner via Cloudflare Email Sending.
 * Reply-To is the visitor, so replying from the inbox goes straight to them.
 *
 * Without an `EMAIL` binding (Node dev adapter) the message is logged instead.
 * Throws if the binding rejects the message; callers should handle that.
 */
export async function sendContactEmail(submission: ContactSubmission, env: WorkerEnv | null): Promise<void> {
	const subject = `New enquiry from ${submission.name}`;
	const text = formatBody(submission);

	if (!env?.EMAIL) {
		console.info(`[contact] No EMAIL binding, logging instead.\nSubject: ${subject}\n${text}`);
		return;
	}

	await env.EMAIL.send({
		to: CONTACT_RECIPIENT,
		from: CONTACT_SENDER,
		replyTo: submission.email,
		subject,
		text,
	});
}
