// @ts-check

import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

import cloudflare from '@astrojs/cloudflare';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://omarmo.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            content: { type: 'text', value: '#' },
            properties: {
              ariaHidden: 'true',
              className: ['heading-anchor'],
              tabIndex: -1,
            },
          },
        ],
      ],
      remarkPlugins: [remarkReadingTime],
    }),
  },

  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});
