import { existsSync, readFileSync } from 'node:fs';
import { join, normalize } from 'node:path';

const pages = [
  ['', 'index.html'],
  ['services/', 'services/index.html'],
  ['automotive-upholstery/', 'automotive-upholstery/index.html'],
  ['marine-upholstery/', 'marine-upholstery/index.html'],
  ['furniture-upholstery/', 'furniture-upholstery/index.html'],
  ['commercial-upholstery/', 'commercial-upholstery/index.html'],
  ['portfolio/', 'portfolio/index.html'],
  ['about-us/', 'about-us/index.html'],
  ['contact/', 'contact/index.html'],
];

const failures = [];
const expectedBase = 'https://maupholsteryclt.com/';
const forbiddenCustomerCopy = [
  /foundation route/i,
  /v2 foundation/i,
  /view service foundation/i,
  /coming in the next build/i,
  /the v2 quote form/i,
  /v2 media library/i,
  /staging foundation/i,
];

for (const [route, file] of pages) {
  const fullPath = join('dist', file);
  if (!existsSync(fullPath)) {
    failures.push(`${file}: missing build output`);
    continue;
  }

  const html = readFileSync(fullPath, 'utf8');
  const canonical = route ? `${expectedBase}${route}` : expectedBase;

  if (!html.includes(`<link rel="canonical" href="${canonical}">`)) {
    failures.push(`${file}: canonical is missing or unexpected (${canonical})`);
  }

  if (!html.includes('name="robots" content="noindex, nofollow"')) {
    failures.push(`${file}: staging build must be noindex, nofollow`);
  }

  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  if (h1Count !== 1) failures.push(`${file}: expected exactly one h1, found ${h1Count}`);

  for (const pattern of forbiddenCustomerCopy) {
    if (pattern.test(html)) {
      failures.push(`${file}: developer-facing placeholder copy is still present (${pattern})`);
    }
  }

  const imageTags = html.match(/<img\b[^>]*>/g) ?? [];
  for (const tag of imageTags) {
    if (!/\salt=("[^"]+"|'[^']+')/.test(tag)) {
      failures.push(`${file}: image missing non-empty alt text`);
    }
  }

  const internalLinks = [...html.matchAll(/href=(?:"|')\/(?!\/)([^"'#?]*)(?:[?#][^"']*)?(?:"|')/g)]
    .map((match) => match[1])
    .filter(Boolean);

  for (const href of internalLinks) {
    const target = href.endsWith('/') ? join('dist', href, 'index.html') : join('dist', href);
    if (!existsSync(normalize(target))) {
      failures.push(`${file}: broken internal link /${href}`);
    }
  }
}

const robotsPath = join('dist', 'robots.txt');
if (!existsSync(robotsPath)) {
  failures.push('robots.txt: missing');
} else {
  const robots = readFileSync(robotsPath, 'utf8');
  if (!robots.includes('User-agent: *\nDisallow: /')) {
    failures.push('robots.txt: staging must disallow general crawling');
  }
  if (!robots.includes('Sitemap: https://maupholsteryclt.com/sitemap-index.xml')) {
    failures.push('robots.txt: production sitemap reference missing');
  }
}

if (failures.length) {
  console.error(`Static QA failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`Static QA passed for ${pages.length} primary routes.`);
