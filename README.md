# omarmo.com

Personal website for Omar Mo, built with Astro.

## Stack

- Astro 7
- Tailwind CSS v4
- MDX content collections
- Cloudflare adapter / Wrangler deploys
- `@fontsource/rubik`
- `phosphor-astro` for small UI icons

## Content

Content lives under `src/content/`:

- `post/` - blog posts
- `note/` - short notes
- `project/` - project writeups
- `recipe/` - recipes

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
