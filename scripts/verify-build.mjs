import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const expected = [
  'index.html',
  'services/index.html',
  'automotive-upholstery/index.html',
  'marine-upholstery/index.html',
  'furniture-upholstery/index.html',
  'commercial-upholstery/index.html',
  'portfolio/index.html',
  'about-us/index.html',
  'contact/index.html',
  '404.html',
  'robots.txt',
];

const missing = expected.filter((path) => !existsSync(join('dist', path)));

if (missing.length > 0) {
  console.error(`Missing build artifacts:\n- ${missing.join('\n- ')}`);
  process.exit(1);
}

const sitemapFiles = readdirSync('dist').filter(
  (name) => name.startsWith('sitemap') && name.endsWith('.xml'),
);

if (sitemapFiles.length === 0) {
  console.error('No sitemap XML was generated.');
  process.exit(1);
}

console.log(
  `Build verification passed: ${expected.length} required artifacts + ${sitemapFiles.length} sitemap file(s).`,
);
