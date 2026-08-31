# Modern Atlantic Upholstery — SEO Baseline

Baseline captured before V2 implementation.

## Google Search Console — trailing 12 months

- Total web-search clicks: **~1.15K**
- Total impressions: **~24.5K**
- Average CTR: **4.7%**
- Average position: **10.9**

### Top visible queries

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| modern atlantic upholstery | 106 | 415 |
| upholstery shops near me | 70 | 2,070 |
| upholstery charlotte nc | 17 | 394 |
| reupholstery near me | 17 | 289 |
| furniture upholstery near me | 16 | 282 |
| upholstery near me | 13 | 426 |
| furniture reupholstery near me | 11 | 182 |
| upholstery shops charlotte nc | 9 | 371 |
| upholstery | 8 | 526 |
| boat upholstery near me | 8 | 184 |

## Search Console — visible page performance

| Page | Clicks | Impressions |
| --- | ---: | ---: |
| `https://www.maupholsteryclt.com/` | 1,029 | 15,754 |
| `https://maupholsteryclt.com/` | 115 | 10,971 |
| `/services/` | 13 | 945 |
| `/contact/` | 3 | 794 |
| `/about-us/` | 1 | 530 |

Historical performance attributes much of the traffic to the `www` homepage, while current indexing shows HTTPS non-www as canonical/served. V2 must retain the non-www production target and later preserve appropriate HTTP/www redirects at cutover.

## Current indexation

Google reports:

- 4 indexed URLs
- 3 redirect URLs
- 2 not-found URLs
- 4 crawled/currently-not-indexed technical URLs

Indexed:
- `/`
- `/services/`
- `/about-us/`
- `/contact/`

## Google Business baseline — Mar to Aug 2026

- 999 Business Profile interactions
- 7,036 Business Profile views
- 419 searches showed the profile

Visible discovery breakdown:
- Google Search mobile: 3,865 (55%)
- Google Search desktop: 2,067 (29%)
- Google Maps mobile: 837 (12%)
- Google Maps desktop: 267 (4%)

Mobile discovery is therefore the dominant channel.

Profile baseline:
- 5.0 rating
- 59 Google reviews
- Primary category: Upholstery shop
- Address: 616 Arrow Dr Unit C, Matthews, NC 28104
- Phone: +1 704-247-7382
- Website: `https://maupholsteryclt.com`

## V2 SEO constraints

1. Preserve the existing domain.
2. Preserve `/`, `/services/`, `/about-us/`, and `/contact/`.
3. Protect homepage equity; it currently receives nearly all visible organic clicks.
4. Add substantive service landing pages, not keyword-stuffed thin pages:
   - `/automotive-upholstery/`
   - `/marine-upholstery/`
   - `/furniture-upholstery/`
   - `/commercial-upholstery/`
5. Keep NAP consistent with Google Business.
6. Treat Charlotte as an important search market, but verify exact real-world service area before making broad geographic claims.
7. Use semantic HTML and structured data based only on verified business facts.
8. Keep Search Console and the existing Google Business Profile; never recreate the GBP during migration.
9. Preview/staging builds should remain `noindex`.
