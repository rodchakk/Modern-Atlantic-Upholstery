# Cloudflare Readiness

Status: **foundation ready; no Cloudflare resource has been created or attached to production.**

## Current deployment direction

As of 2026-08-30, Cloudflare recommends **Cloudflare Workers** for new Astro projects.

For a fully prerendered/static Astro site:

- Astro does not require `@astrojs/cloudflare`.
- `astro build` outputs static assets to `dist/`.
- Wrangler can deploy those static assets to Workers.
- The Worker configuration needs an `assets.directory` pointing at `./dist`.
- No Worker `main` entrypoint is required for a static-only site.

This repository therefore intentionally does **not** install the Cloudflare Astro adapter in MAU-WEB-002.

## Configuration in this branch

`wrangler.jsonc`:

- Project name: `modern-atlantic-upholstery-v2`
- Static assets directory: `./dist`
- Custom static 404 handling enabled
- Compatibility date: 2026-08-30

## Preview deployment command

After Cloudflare access is approved:

```bash
npm install
npm run check
npm run build
npx wrangler deploy
```

A preview may use the default `*.workers.dev` host.

**Do not attach `maupholsteryclt.com` during foundation/staging work.**

## Future dynamic needs

MAU-WEB-002 deliberately remains static.

If a later quote workflow needs a Cloudflare Worker endpoint, R2, Turnstile, or Resend, add those through a separate reviewed mission. Do not convert the entire site to SSR merely to support one form endpoint.

## Production cutover guardrail

Cloudflare becomes production only after:

- final V2 QA,
- email migration plan is ready,
- DNS records are fully backed up,
- existing indexed URLs/redirects are mapped,
- Search Console baseline is archived,
- Google Business website continuity is checked,
- human owner explicitly approves the cutover.

Bluehost remains active until post-cutover verification is complete.
