/** Services listed on the "Work with me" page. Copy lives here so the page stays layout-only. */
export interface Service {
	title: string;
	description: string;
}

export const SERVICES: readonly Service[] = [
	{
		title: 'Build',
		description: 'AI features, agents and automations that hold up in daily use, not just in a demo.',
	},
	{
		title: 'Advise',
		description:
			"We look at how your business runs and work out where AI would save real time or money, and where it wouldn't.",
	},
	{
		title: 'Teach',
		description: "Getting your team comfortable with AI tools, so they keep using them after I've gone.",
	},
];
