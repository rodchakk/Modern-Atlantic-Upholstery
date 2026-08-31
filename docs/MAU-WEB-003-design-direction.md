# MAU-WEB-003 — Information Architecture, Content & Visual System

## Status

Implemented on branch `mau-web-003-content-visual-system` for staging review only.

Production remains untouched.

## Design direction

Modern Atlantic V2 is positioned as a **craft-led local upholstery shop**, not a generic home-services template.

The visual language uses:

- deep charcoal / Atlantic ink for workshop authority,
- warm paper and cream surfaces rather than sterile white,
- copper accents that reference leather, thread, and material warmth without becoming decorative branding,
- editorial serif display typography paired with a restrained system sans-serif,
- large real project photography,
- asymmetry and layered imagery on the home hero,
- minimal client-side JavaScript (still zero hydrated framework components).

The site should feel premium but practical: a working craft business, not a luxury-fashion brand and not an automotive-only shop.

## Core information architecture

Existing indexed routes are retained:

- `/`
- `/services/`
- `/about-us/`
- `/contact/`

New service-entry routes:

- `/automotive-upholstery/`
- `/marine-upholstery/`
- `/furniture-upholstery/`
- `/commercial-upholstery/`
- `/portfolio/`

## Search / entity strategy

The homepage keeps the broad local intent that currently drives almost all organic traffic:

- upholstery shop
- upholstery near me
- upholstery shops near me
- upholstery Charlotte NC
- upholstery shops Charlotte NC

The service pages create focused entry surfaces for automotive, marine/boat, furniture/reupholstery, and commercial intent without turning the site into a collection of thin keyword pages.

Matthews remains the truthful physical location. Charlotte is framed as a served market rather than a false business address.

## Conversion strategy

Every major route now drives toward one of three real actions:

1. Request a quote / contact page
2. Call the shop
3. Review project work

`/contact/` now teaches visitors what information to send and keeps real call/email actions operational. The actual structured upload form remains intentionally deferred to a dedicated integration mission so staging does not ship a fake form.

## Content guardrails

The V2 copy deliberately avoids unverified claims about:

- warranties,
- turnaround time,
- pricing,
- financing,
- pickup/delivery,
- specific material brands,
- exact opening hours,
- exact competition title/year,
- exact number of years in business.

The existing public biography remains source material, but competition details and the precise experience claim should be re-confirmed with Victor before production launch.

## Review / trust baseline

The visual proof strip uses the audited Google Business baseline captured during MAU-WEB-001:

- 5.0 Google rating
- 59 reviews

This value should be refreshed immediately before production cutover.

## Asset policy

The visual system currently uses the previously preserved local repository project images under `public/legacy-repo/` so V2 does not hotlink WordPress production.

Before final launch, Minerva should curate the original-resolution WordPress media archive and replace any legacy-repo image that is lower quality, outdated, duplicated, or not approved by the client.

## AI/search discoverability

The base layout now provides a stable entity graph with:

- WebSite
- LocalBusiness
- verified NAP
- Matthews + Charlotte areaServed
- Google aggregate-rating baseline
- OfferCatalog for the four core service families

`robots.txt` explicitly allows `OAI-SearchBot` while blocking `GPTBot`, preserving search visibility while keeping training crawler policy independent.

No `llms.txt` or speculative GEO markup is introduced.
