# MAU-WEB-002 — Legacy Site Inventory

Snapshot date: **2026-08-30**

Production site: `https://maupholsteryclt.com/`

This is a read-only preservation inventory. No WordPress admin access, DNS change, Bluehost change, email change, or production mutation was performed.

## 1. Production information architecture

Google currently indexes these four production pages:

| URL | Current public role | V2 decision |
| --- | --- | --- |
| `/` | Home + broad service summary + Victor + contact | **KEEP** route; rewrite and strengthen |
| `/services/` | Portfolio/gallery despite the slug | **KEEP** route; convert to service hub |
| `/about-us/` | Victor biography | **KEEP** route; rewrite from verified facts |
| `/contact/` | Basic Name / Email / Message form | **KEEP** route; replace later with quote workflow |

Current public navigation labels:

- Home
- About Us
- Portfolio (`/services/`)
- Contact Us

### KEEP

- Existing canonical domain: `https://maupholsteryclt.com/`
- Existing indexed paths above
- Modern Atlantic Upholstery business name
- Matthews service-center address
- Phone and `info@` email continuity
- Victor as a visible expert/owner identity
- Real project photography
- Automotive, marine, commercial, and furniture/residential service families

### REWRITE

- Home hero/copy
- `/services/` semantics (current route is really a gallery)
- Service descriptions
- Calls to action
- Contact flow
- Portfolio presentation and project context
- Footer/copyright treatment
- SEO titles/descriptions

### VERIFY WITH CLIENT BEFORE FINAL COPY

- Exact number of years Victor wants stated publicly ("nearly 20 years" is current wording)
- Exact description/name/year of the European interior-design competition
- Current public site says Victor's craftsmanship helped **two cars** win first place; confirm wording/evidence
- Exact Charlotte-area service boundary / cities served
- Complete current service catalog and any excluded work
- Whether boat covers are still offered as a service
- Which project photographs may be reused commercially in V2
- Current opening hours
- Preferred quote/contact method (call, text, email)
- Any warranties, material brands, turnaround claims, financing, pickup/delivery, or pricing statements

### DISCARD / LEGACY

- WordPress runtime dependency
- PHP/MySQL dependency
- WordPress plugin endpoints
- WordPress feed route unless a future content strategy requires it
- Generic/duplicative marketing language
- Existing prototype Bootstrap source on this repository branch
- Broken/technical WordPress crawl URLs

## 2. Current home content

Current heading/copy themes captured publicly:

- "Handcrafted Elegance in Every Stitch"
- "Crafted for You"
- "Style & Comfort, Redefined"
- Service groups:
  - Marine Upholstery
  - Automotive Upholstery
  - Commercial Upholstery
  - Residential Upholstery
- "Meet Victor Terzi"

Current service descriptions are short and generic. They should be replaced with verified, project-specific language rather than simply copied.

Current home Victor summary says he has nearly 20 years in upholstery, started in auto design, had work earn first place in a European competition, later expanded into furniture upholstery, and enjoys reviving worn pieces.

## 3. Current About Us content

Public `/about-us/` says:

- Owner/expert: **Victor Terzi**
- Nearly 20 years in upholstery
- Began as an auto upholsterer
- His craftsmanship helped two cars win first place in a European interior-design competition
- Expanded into furniture upholstery
- Motivation is restoring worn/aging pieces

**Decision:** preserve as source material, but re-confirm competition details and final biography before launch.

## 4. Business identity / NAP

Current production and Google Business information:

- **Name:** Modern Atlantic Upholstery
- **Address:** 616 Arrow Drive Unit C, Matthews, NC 28104
- **Phone:** (704) 247-7382
- **Email:** info@maupholsteryclt.com
- **Google Business primary category:** Upholstery shop

Current public social links:

- Facebook: `https://www.facebook.com/people/Modern-Atlantic-Upholstery/100077399907154/`
- Instagram: `https://www.instagram.com/maupholsteryclt`

Google Maps destination used by the legacy site resolves to the existing Modern Atlantic Upholstery listing at the Arrow Drive location.

## 5. Current contact experience

Public `/contact/` exposes:

- Name (required)
- Email (required)
- Message (required)
- Send Message

The page also repeats the service-center address, phone, and email.

### V2 direction

Do not preserve the basic form as-is. Later mission should design a structured **Request a Quote** flow with verified requirements such as project type, phone/email, project description, optional photos, and preferred contact method.

MAU-WEB-002 deliberately ships no fake/nonfunctional quote form.

## 6. Public WordPress project-image inventory

These are public legacy asset URLs observed on the current site. Preserve the references before Bluehost/WordPress is ever decommissioned.

### Home

- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/header-photo-test-3-scaled.jpg?resize=2560%2C1707&ssl=1`
  - Current alt/context: upholstered sofa / home furniture visual

### Portfolio (`/services/`)

- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/boat-beauty.webp?resize=768%2C1024&ssl=1`
  - Boat interior / marine seating
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/02/boat3.png?resize=1017%2C677&ssl=1`
  - Boat seat
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/02/Screenshot-2025-02-15-004517.png?resize=379%2C658&ssl=1`
  - Church chair
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/automotive2.webp?resize=900%2C1600&ssl=1`
  - Automotive/custom interior panel
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/ferrari-1.webp?resize=1200%2C1600&ssl=1`
  - Ferrari dashboard/interior components
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/automotive.webp?resize=900%2C1600&ssl=1`
  - Motorhome/vehicle seat
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/motorhome.webp?resize=576%2C1024&ssl=1`
  - Motorhome upholstered bench/interior
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/boat-cover.webp?resize=576%2C1024&ssl=1`
  - Boat cover
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/02/car.jpg?resize=287%2C510&ssl=1`
  - Classic vehicle door/interior
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/reesidential.webp?resize=900%2C1600&ssl=1`
  - Residential chair and ottoman
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/03/boatice.webp?resize=900%2C1600&ssl=1`
  - Custom upholstered seat/cushion set
- `https://i0.wp.com/maupholsteryclt.com/wp-content/uploads/2025/02/pianochair.png?resize=679%2C863&ssl=1`
  - Piano bench

### Owner photo

Current About page references:

- `/wp-content/uploads/2025/02/VictorTerzi.avif`

The read-only fetch did not return the binary, so the original should be exported from WordPress/Bluehost before final decommission.

## 7. Earlier repository assets preserved in Git

This repository pre-dates the current WordPress production site and already contained project images. MAU-WEB-002 copies the existing blobs into `public/legacy-repo/` so they remain easy to inspect on the V2 branch.

Preserved filenames:

- `Commercial.jpg`
- `MAU-01-03.png`
- `MAU-01-04.png`
- `MAU-01.png`
- `MAU-02.png`
- `Untitled (Website).png`
- `bout.jpg`
- `bout2.jpg`
- `longchair.jpg`
- `moto.jpg`
- `sofas.jpg`
- `table_chairs.jpg`

These files are **source candidates**, not automatically approved V2 assets.

## 8. Technical crawl residue

Search Console currently shows:

Redirect variants:
- `https://www.maupholsteryclt.com/`
- `http://maupholsteryclt.com/`
- `http://www.maupholsteryclt.com/`

Known 404 examples:
- `/wp-json/iawp/search`
- `/wp-content/themes/with-wonder/*`

Crawled but not indexed:
- WordPress emoji JavaScript
- Independent Analytics click endpoint
- WordPress interactivity module
- `/feed/`

These are technical legacy URLs and do not need to be reproduced in V2.

## 9. Metadata preservation status

Page titles observed publicly:

- Home: `Home - Modern Atlantic Upholstery`
- Services/portfolio: `PORTFOLIO - Modern Atlantic Upholstery`
- About: `ABOUT US - Modern Atlantic Upholstery`
- Contact: `Contact Us - Modern Atlantic Upholstery`

Exact legacy meta-description values were not reliably exposed by the available read-only fetch. Before final cutover, capture a WordPress export/page-source snapshot if Minerva wants a complete historical record.

V2 should not preserve weak metadata merely for parity; it should preserve route equity and replace metadata intentionally.
