# Modern Atlantic Upholstery V2

Standalone V2 foundation for **Modern Atlantic Upholstery**, maintained by Minerva Technologies.

## Mission status

This branch implements **MAU-WEB-002 — V2 Foundation & Content Preservation**.

It intentionally does **not** replace production, modify DNS, touch Bluehost, migrate email, or connect the production domain.

## Technical direction

- Astro 7 static-first site
- Strict TypeScript
- Minimal client-side JavaScript (currently zero hydrated framework components)
- `@astrojs/sitemap`
- Cloudflare Workers Static Assets readiness via Wrangler
- No database
- No CMS
- No PHP
- No WordPress runtime dependency

Cloudflare's current guidance recommends Workers for new Astro projects. A fully prerendered Astro site does not require the Cloudflare adapter; the built `dist/` directory can be served as static assets.

## Requirements

- Node.js 22.20.0 (minimum Astro support is Node 22.12.0)
- npm

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run verify:build
```

Preview locally:

```bash
npm run preview
```

Future Cloudflare preview deployment, only after a Cloudflare account/project is approved:

```bash
npx wrangler deploy
```

Do **not** attach `maupholsteryclt.com` during foundation work.

## Route foundation

- `/`
- `/services/`
- `/automotive-upholstery/`
- `/marine-upholstery/`
- `/furniture-upholstery/`
- `/commercial-upholstery/`
- `/portfolio/`
- `/about-us/`
- `/contact/`

The currently indexed production routes `/`, `/services/`, `/about-us/`, and `/contact/` are deliberately preserved.

## Staging indexing safety

Unless `PUBLIC_SITE_ENV=production` is present at build time, every generated page carries:

```html
<meta name="robots" content="noindex, nofollow">
```

This makes a future `workers.dev` preview safer from accidental indexing.

## Documentation

- `docs/legacy-site-inventory.md` — public production content and asset inventory
- `docs/seo-baseline.md` — Search Console / Google Business baseline
- `docs/cloudflare-readiness.md` — current deployment direction
- `docs/MAU-WEB-002-report.md` — implementation report and remaining validation

## Legacy repository assets

The pre-V2 repository contained an unfinished static prototype and project images. The prototype code is removed from this branch, while its image blobs are preserved under `public/legacy-repo/` for later curation. Git history also retains the original source.

These images are not assumed to be approved final V2 assets.
