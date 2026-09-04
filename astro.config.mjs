// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://robinsonjf.github.io',
  base: process.env.GITHUB_ACTIONS ? '/projeto001' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});