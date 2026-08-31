# MAU-WEB-002 — Implementation Report

## Status

Implementation complete on branch `mau-web-002-v2-foundation` and validated by GitHub Actions.

Production is untouched.

## Repository choice

The user already had a standalone repository:

`rodchakk/Modern-Atlantic-Upholstery`

Rather than create a duplicate repository, V2 is founded on a dedicated branch of that existing client repository. The old static prototype remains in Git history.

## Stack

- Astro `7.2.9`
- TypeScript `6.0.2`
- `@astrojs/check` `0.9.10`
- `@astrojs/sitemap` `3.7.3`
- Wrangler `4.127.1`
- Node target `22.20.0`

TypeScript 7 was initially selected because it is the current stable TypeScript release, but CI correctly rejected it: `@astrojs/check@0.9.10` currently declares peer support for TypeScript 5 or 6. The branch therefore pins TypeScript `6.0.2` rather than bypassing peer-dependency safety with `--force` or `--legacy-peer-deps`.

No React, Tailwind, CMS, database, PHP, or WordPress runtime is introduced.

## Architecture

Static-first Astro:
- shared NAP/site config
- shared layout/head/LocalBusiness JSON-LD
- semantic header/footer
- route foundations
- plain CSS foundation
- sitemap generation
- static robots/headers
- Cloudflare Workers Static Assets configuration
- CI build verification

## Route list

- `/`
- `/services/`
- `/automotive-upholstery/`
- `/marine-upholstery/`
- `/furniture-upholstery/`
- `/commercial-upholstery/`
- `/portfolio/`
- `/about-us/`
- `/contact/`
- `/404/` build artifact via `404.astro`

## Content preservation

See `docs/legacy-site-inventory.md`.

The V2 branch preserves:
- production route inventory,
- current public copy facts,
- NAP,
- social URLs,
- current contact fields,
- public WordPress project-image URLs,
- WordPress crawl residue decisions,
- old repository image blobs under `public/legacy-repo/`.

## SEO foundation

- Production `site` configured as `https://maupholsteryclt.com`
- Trailing-slash routes
- canonical tags
- descriptions
- Open Graph basics
- LocalBusiness JSON-LD from verified NAP only
- generated sitemap
- `robots.txt`
- staging defaults to `noindex, nofollow` unless `PUBLIC_SITE_ENV=production`
- indexed legacy routes preserved

## Cloudflare readiness

Static Workers deployment is prepared through `wrangler.jsonc`.

No Cloudflare account, paid resource, production hostname, DNS, Wix, Bluehost, WordPress, Search Console, Google Business, or mailbox configuration was changed.

## Validation

Local package installation cannot be executed from the ChatGPT container because outbound package/network resolution is unavailable, so the repository CI is the executable validation source.

GitHub Actions validation executes:

1. `npm install --no-audit --no-fund`
2. `npm run check`
3. `npm run build`
4. `npm run verify:build`

### CI history

- Run 1 failed during dependency resolution because TypeScript `7.0.2` was outside the peer range supported by `@astrojs/check@0.9.10` (`^5.0.0 || ^6.0.0`).
- The dependency was corrected to TypeScript `6.0.2` without disabling npm peer-dependency checks.
- Corrected CI run `33348920797` passed all validation steps: dependency install, Astro check, production build, and required build-artifact verification.

## Reproducibility note

A committed `package-lock.json` is not included in MAU-WEB-002 because the local execution environment could not run npm and the CI runner is intentionally read-only. Direct dependencies are exact-version pinned. A lockfile should be generated and committed from a normal npm-capable environment before production deployment or as part of the next implementation mission.

## Known follow-ups / blockers

Before final content launch:
- re-confirm Victor biography/competition wording,
- verify exact service area,
- verify full current services,
- curate approved project photographs,
- verify opening hours,
- define quote workflow fields,
- export the original Victor photo and original-resolution WordPress media before Bluehost decommission.

Repository visibility is currently public because the pre-existing client repository is public. No secrets are stored in the V2 foundation. If Minerva wants the source private, repository visibility should be changed separately; this is not required for the static production architecture.

## Production guardrails honored

No changes were made to:
- Wix
- DNS
- Bluehost
- WordPress production
- `info@maupholsteryclt.com`
- Google Business
- Search Console
- production redirects
- `maupholsteryclt.com`
