// Script to generate social cards for posts and save them in public/social-cards

// get all posts

// cycle through posts and generate social card for each

// take screenshot by going to /social-cards/slug and saving it to public/social-cards/slug.png

import { readdir, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOCIAL_CARDS_BASE_URL =
  process.env.SOCIAL_CARDS_BASE_URL ?? 'http://localhost:4321';

async function getPostSlugs(): Promise<string[]> {
  const postsDir = join(__dirname, '..', 'content', 'post');
  const entries = await readdir(postsDir, { withFileTypes: true });
  return entries.filter(entry => entry.isDirectory()).map(entry => entry.name);
}

async function ensureOutputDir(): Promise<string> {
  const outputDir = join(__dirname, '..', '..', 'public', 'social-cards');
  await mkdir(outputDir, { recursive: true });
  return outputDir;
}

async function generateSocialCards(): Promise<void> {
  const slugs = await getPostSlugs();
  if (slugs.length === 0) {
    console.log('No posts found in src/content/post. Nothing to do.');
    return;
  }

  const outputDir = await ensureOutputDir();
  console.log(`Using base URL: ${SOCIAL_CARDS_BASE_URL}`);
  console.log(`Saving social cards to: ${outputDir}`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    for (const slug of slugs) {
      const url = `${SOCIAL_CARDS_BASE_URL}/social-card/${slug}`;
      const filePath = join(outputDir, `${slug}.png`);

      console.log(`\nGenerating social card for: ${slug}`);
      console.log(`→ URL:  ${url}`);
      console.log(`→ File: ${filePath}`);

      await page.setViewport({ width: 1200, height: 630 });
      await page.goto(url, { waitUntil: 'networkidle0' });
      await page.screenshot({ path: filePath, fullPage: true });

      console.log('✅ Done');
    }
  } finally {
    await browser.close();
  }
}

generateSocialCards().catch(error => {
  console.error('Error generating social cards:', error);
  process.exit(1);
});