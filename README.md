# omarmo.com

Personal website for Omar Mo, built with Astro.

## Stack

- Astro 7
- EmDash CMS
- Tailwind CSS v4
- Cloudflare Workers, D1, and R2
- `@fontsource/rubik`
- `phosphor-astro` for small UI icons

## Content

Content is managed in EmDash at `/_emdash/admin`. The initial content model and migrated entries are seeded from `.emdash/seed.json`.

Routes are in `src/pages/`. Shared UI is in `src/components/`; page shells are in `src/layouts/`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site |
| `npm run preview` | Build and preview locally |
| `npm run deploy` | Build and deploy with Wrangler |
| `npm run cf-typegen` | Generate Cloudflare types |

## Theming

Theme tokens live in `src/styles/global.css`. Update the semantic CSS variables there to change colors across the site.
