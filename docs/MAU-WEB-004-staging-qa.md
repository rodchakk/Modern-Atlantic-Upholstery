# MAU-WEB-004 — Staging & Visual QA

## Objective

Create a safe staging review path for MAU V2, strengthen automated static QA, and prepare the site for an actual temporary Cloudflare deployment without touching production.

## Production guardrails

This mission does not change:

- `maupholsteryclt.com` production routing
- Wix DNS
- Bluehost
- WordPress production
- `info@maupholsteryclt.com`
- Google Business
- Search Console

## Automated staging safety

A normal build without `PUBLIC_SITE_ENV=production` now produces:

- `noindex, nofollow` on every primary page
- `robots.txt` with `User-agent: *` / `Disallow: /`
- canonical URLs pointing to the future production domain so staging never becomes a second canonical site

Production builds explicitly using `PUBLIC_SITE_ENV=production` instead publish the approved crawler policy:

- general crawling allowed
- `OAI-SearchBot` allowed
- `GPTBot` disallowed
- production sitemap declared

## CI QA

Pull-request CI now validates:

1. npm dependency resolution
2. Astro type/content checks
3. static staging build
4. required generated artifacts
5. all primary routes have the expected production canonical
6. all primary routes are `noindex, nofollow` in staging
7. exactly one H1 per primary route
8. no known foundation placeholder copy remains
9. rendered images have non-empty alt text
10. root-relative internal links resolve to generated build artifacts
11. staging `robots.txt` blocks crawling

CI also uploads the generated `dist/` folder and `package-lock.json` as a short-lived artifact for reproducible review.

## Remaining visual QA

The actual browser-level QA requires a temporary deployment URL. Preferred target remains Cloudflare Workers Static Assets on a non-production `workers.dev` hostname.

Once Cloudflare access is connected, review at minimum:

- desktop 1440px
- laptop 1280px
- tablet portrait and landscape
- iPhone-class mobile widths
- Android-class mobile widths
- navigation wrapping/overflow
- hero crop and focal points
- typography scale and line length
- CTA visibility
- service-card rhythm
- portfolio image quality
- footer density
- keyboard focus
- reduced motion
- Lighthouse / Core Web Vitals baseline

No production domain should be attached during MAU-WEB-004.
