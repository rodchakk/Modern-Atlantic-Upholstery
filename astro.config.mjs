import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maupholsteryclt.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [sitemap()],
});
