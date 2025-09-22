#!/usr/bin/env bun

import inquirer from 'inquirer';
import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface PostAnswers {
  title: string;
  description: string;
  tags: string[];
  customTags: string[];
  fileType: 'md' | 'mdx';
  isDraft: boolean;
  customSlug: string;
}

// Helper function to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Helper function to format date
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export const COMMON_TAGS = [
  'software-engineering',
  'ai',
  'design',
  'ux',
  'reflections',
  'open-source',
  'javascript',
  'typescript',
  'react',
  'astro',
  'web-development',
  'career',
  'productivity',
  'learning'
];

async function createNewPost(): Promise<void> {
  console.log('🚀 Creating a new blog post...\n');

  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your post?',
        validate: (input: any) => {
          if (typeof input === 'string' && input.trim().length === 0) {
            return 'Please enter a title for your post.';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description:',
        validate: (input: any) => {
          if (typeof input === 'string' && input.trim().length === 0) {
            return 'Please enter a description for your post.';
          }
          return true;
        }
      },
      {
        type: 'checkbox',
        name: 'tags',
        message: 'Select tags for your post:',
        choices: COMMON_TAGS,
        validate: (input: any) => {
          if (Array.isArray(input) && input.length === 0) {
            return 'Please select at least one tag.';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'customTags',
        message: 'Any additional tags? (comma-separated):',
        filter: (input: any): string[] => {
          if (typeof input !== 'string' || !input.trim()) return [];
          return input.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag);
        }
      },
      {
        type: 'list',
        name: 'fileType',
        message: 'Choose file type:',
        choices: [
          { name: 'Markdown (.md)', value: 'md' },
          { name: 'MDX (.mdx) - for React components', value: 'mdx' }
        ],
        default: 'md'
      },
      {
        type: 'confirm',
        name: 'isDraft',
        message: 'Save as draft?',
        default: false
      },
      {
        type: 'input',
        name: 'customSlug',
        message: 'Custom URL slug (leave empty to auto-generate):',
        filter: (input: any) => typeof input === 'string' ? input.trim() : ''
      }
    ]) as PostAnswers;

    // Generate slug
    const slug = answers.customSlug || createSlug(answers.title);
    
    // Combine tags
    const allTags = [...answers.tags, ...answers.customTags];
    
    // Create post directory
    const postDir = join(__dirname, '..', 'src', 'content', 'post', slug);
    await mkdir(postDir, { recursive: true });
    
    // Generate frontmatter
    const currentDate = formatDate(new Date());
    const tagsString = JSON.stringify(allTags);
    
    let frontmatter = `---
title: ${answers.title}
description: "${answers.description}"
publishDate: ${currentDate}
updatedDate: ${currentDate}
tags: ${tagsString}`;

    if (answers.isDraft) {
      frontmatter += `\ndraft: true`;
    }
    
    frontmatter += `\n---\n\n`;
    
    // Add MDX import example if MDX is selected
    let content = '';
    if (answers.fileType === 'mdx') {
      content = `import Quote from "@/components/Quote.astro";

`;
    }
    
    content += `Write your post content here...

## Heading Example

Your content goes here.
`;

    // Create the file
    const fileName = `index.${answers.fileType}`;
    const filePath = join(postDir, fileName);
    await writeFile(filePath, frontmatter + content);
    
    console.log('\n✅ Blog post created successfully!');
    console.log(`📁 Location: src/content/post/${slug}/${fileName}`);
    console.log(`🔗 URL slug: ${slug}`);
    console.log(`📝 File type: ${answers.fileType.toUpperCase()}`);
    console.log(`🏷️  Tags: ${allTags.join(', ')}`);
    
    if (answers.isDraft) {
      console.log('📋 Status: Draft (won\'t be published)');
    }
    
    console.log('\nHappy writing! 🎉');
    
  } catch (error) {
    if (error instanceof Error) {
      if ('isTtyError' in error) {
        console.error('❌ Prompt couldn\'t be rendered in the current environment');
      } else {
        console.error('❌ Error creating post:', error.message);
      }
    } else {
      console.error('❌ Unknown error occurred');
    }
    process.exit(1);
  }
}

createNewPost();
