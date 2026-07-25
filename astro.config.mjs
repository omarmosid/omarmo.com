// @ts-check

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import emdash, { local } from 'emdash/astro';
import { sqlite } from 'emdash/db';

import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
import { d1, r2 } from '@emdash-cms/cloudflare';
import { cloudflareEmail } from '@emdash-cms/cloudflare/plugins';

const isCloudflareBuild = process.env.EMDASH_TARGET === 'cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://omarmo.com',
  output: 'server',
  integrations: [
    react(),
    sitemap(),
    emdash({
      database: isCloudflareBuild ? d1({ binding: 'DB' }) : sqlite({ url: 'file:./data.db' }),
      storage: isCloudflareBuild
        ? r2({ binding: 'MEDIA' })
        : local({
            directory: './uploads',
            baseUrl: '/_emdash/api/media/file',
          }),
      plugins: isCloudflareBuild
        ? [
            cloudflareEmail({
              binding: 'EMAIL',
              from: { email: 'noreply@omarmo.com', name: 'Omar Mo' },
            }),
          ]
        : [],
    }),
  ],
  adapter: isCloudflareBuild ? cloudflare() : node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()],
  },
});
