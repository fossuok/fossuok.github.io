import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './remark-reading-time.mjs';

import swup from '@swup/astro';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(),swup(),mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: 'https://fossuok.org',
});