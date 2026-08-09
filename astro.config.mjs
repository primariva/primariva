import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://altamarea.it',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy') && !page.includes('/cookie-policy'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
