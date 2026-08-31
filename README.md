# Modern Atlantic Upholstery V2

Static-first website modernization for **Modern Atlantic Upholstery**, maintained by Minerva Technologies.

## Current mission

The active implementation branch is **MAU-WEB-003 — Information Architecture, Content & Visual System**.

MAU-WEB-002 established and validated the standalone Astro/Cloudflare foundation. MAU-WEB-003 turns that foundation into the first complete V2 staging experience while production remains unchanged.

## Stack

- Astro 7 static output
- TypeScript 6
- `@astrojs/sitemap`
- Cloudflare Workers Static Assets readiness via Wrangler
- Plain CSS visual system
- Zero hydrated framework components
- No database
- No CMS
- No PHP
- No WordPress runtime dependency

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run verify:build
```

## Routes

- `/`
- `/services/`
- `/automotive-upholstery/`
- `/marine-upholstery/`
- `/furniture-upholstery/`
- `/commercial-upholstery/`
- `/portfolio/`
- `/about-us/`
- `/contact/`

Existing indexed production routes are deliberately preserved.

## Production safety

Unless `PUBLIC_SITE_ENV=production` is supplied at build time, generated pages contain `noindex, nofollow`.

No staging work should attach the production domain or modify Wix, Bluehost, WordPress, Search Console, Google Business, DNS, or `info@maupholsteryclt.com`.

## Documentation

- `docs/legacy-site-inventory.md`
- `docs/seo-baseline.md`
- `docs/cloudflare-readiness.md`
- `docs/MAU-WEB-002-report.md`
- `docs/MAU-WEB-003-design-direction.md`

## Remaining before launch

- curate original-resolution project media,
- confirm final Victor biography and competition wording,
- confirm exact service-area language and opening hours,
- implement the structured quote/photo-upload workflow,
- complete accessibility / performance / metadata QA,
- deploy staging to an approved Cloudflare preview host,
- prepare email and DNS cutover plan,
- launch only after production approval.
