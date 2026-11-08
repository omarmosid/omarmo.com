/**
 * Bindings and variables this site reads from the Worker environment.
 * Everything is optional because none of it exists under the Node dev adapter.
 */
export interface WorkerEnv {
	EMAIL?: SendEmail;
	TURNSTILE_SITE_KEY?: string;
	TURNSTILE_SECRET_KEY?: string;
}

/**
 * Resolve the Cloudflare Worker env, or `null` when not running on workerd
 * (e.g. plain `astro dev` with the Node adapter).
 *
 * The specifier is held in a variable so Vite doesn't try to resolve the
 * workerd-only module when bundling for Node.
 */
export async function getWorkerEnv(): Promise<WorkerEnv | null> {
	const specifier = 'cloudflare:workers';
	try {
		const mod: { env: WorkerEnv } = await import(/* @vite-ignore */ specifier);
		return mod.env;
	} catch {
		return null;
	}
}
