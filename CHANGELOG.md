# Changelog

All notable changes to the Protection Technologies, LLC site are documented here.

---

## [Unreleased] — 2026-03-16

### SEO & discovery

- **Root layout metadata**
  - `metadataBase` set from `siteConfig.baseUrl` for canonical URLs and Open Graph.
  - Default title: `Protection Technologies | Integrated Security Technology Systems` with template for subpages.
  - `description`, `keywords` (security, CCTV, access control, etc.), `openGraph` (type, locale, url, siteName, title, description, **images** with company logo), `twitter` (card, title, description, **images**).
  - `icons`, `manifest`, `robots: { index: true, follow: true }`.
- **Robots.txt** (`app/robots.js`)
  - Allow `/`, disallow `/api/`, `/login`, `/signup`, `/provider/`, `/_next/`.
  - `sitemap` and `host` use `siteConfig.baseUrl`. Kept in sync via `NEXT_PUBLIC_SITE_URL` in production.
- **Sitemap** (`app/sitemap.js`)
  - All main routes (home, about, services, it-services, projects, all-news, career, partnerships, contact-us, terms-condition, privacy) plus every press article (`/news/[slug]`).
  - `changeFrequency` and `priority` set per page type.
- **Per-page metadata**
  - **About** — title “About Us”, description (company, founder, services).
  - **Services** — title “Services”, description (security systems, sectors).
  - **Contact Us** — title “Contact Us”, description (locations, contact).
  - **Privacy** — title “Privacy Policy”, description.
  - **Terms** — `app/terms-condition/layout.jsx`: title “Terms & Conditions”, description.
  - **All News** — title “Press & Insights”, description.
  - **News [slug]** — `generateMetadata` from `data/pressArticles.js` so each article has unique title, description, and Open Graph.

### Config & content

- **`config/site.js`**
  - `name`: “Protection Technologies, LLC”, `shortName`: “Protection Technologies”.
  - `baseUrl` from `NEXT_PUBLIC_SITE_URL` or fallback `https://protectiontechnologies.com`.
  - `description` updated for security/CCTV/access control/since 1985.
  - Template leftovers removed: “Listings”, `navMenuItems`, HeroUI links; `navItems` aligned with real routes; `links` only LinkedIn.
  - `ogImage` (company logo for social shares), `creator` (Clear It Path, clearitpath.com).
- **`config/company.js`** (new)
  - Single source of truth for company: legalName, founder, founded, since, services, sectors, partners (manufacturers + venue partnerships), location, accolades. Used for schema and copy.
- **`data/pressArticles.js`** (new)
  - Slug, title, description for every press article. Used by `generateMetadata` for `/news/[slug]` and by sitemap.

### Structured data & AEO

- **Organization / ProfessionalService schema** (`components/seo/OrganizationSchema.jsx`)
  - JSON-LD in root layout `<head>`: Organization (name, url, description, foundingDate, founder, sameAs, areaServed) and ProfessionalService (name, description, url, image, areaServed, knowsAbout, slogan).
- **Article and copy fixes for AEO**
  - Bylines: “BY Tech” → “Protection Technologies LLC” or “Industry News” where appropriate.
  - Tags: “Real Estate” → “Video Surveillance” or “Access Control”.
  - Image alts: generic “Article” → descriptive (e.g. “24/7 remote video surveillance for commercial security”).
  - Article4 title typo: “Technology:How” → “Technology: How”.
  - Press section heading: “Latest from Protection Technologies, LLC”.
  - About company section: entity-rich copy (security systems integration, founder, since 1985, alarm/access control/CCTV); company image alt updated.
  - Partnerships: “Altana Falcons” → “Atlanta Falcons”; intro block added (“Security & Technology Partnerships” + short paragraph naming PT LLC and venue partners).

### Legal & policy pages

- **Terms & Conditions**
  - “Real estate platform” → “Protection Technologies, LLC”; “Property Listings” section → “Third-Party Content and Services”; Governing Law → State of New Jersey; contact block → placeholders “[Your company legal email]”, etc.
- **Privacy Policy**
  - Cookies section: removed contradictory “we do not use cookies” vs “our site uses cookies”; single clear “Cookies and Tracking Technologies” paragraph.

### Credits (Clear It Path)

- **Footer (only on Privacy Policy page)**
  - When `pathname === '/privacy'`, footer shows a very small, low-contrast line: “clearitpath.com” linking to https://clearitpath.com (tiny font, low opacity). Removed from main footer bar and from Terms page so credit appears only in the footer when viewing Privacy.

### Links & navigation

- Footer “Press” and newsSection “See All Articles”: `/news` → `/all-news`.
- Footer: added “Terms & Conditions” link next to “Privacy Policy”.
- External links: `rel="noopener noreferrer"` on LinkedIn and Clear It Path; LinkedIn given `aria-label="Protection Technologies LLC on LinkedIn"`.

### Performance & video

- **Hero video**
  - `preload="metadata"` so the browser doesn’t load the full file upfront; streams when playing. `aria-hidden` for accessibility.
- **LazyVideo** (`components/ui/LazyVideo.jsx`)
  - Uses Intersection Observer; `<source src={...}>` only when the element is in (or near) the viewport.
  - **PageSection** banner videos (About, Services, Contact, Press, etc.): load only when section is in view.
  - **Nav header** logo video: loads when header is visible (small rootMargin).
  - **IT Services** Midjourney video: loads when that section is in view.
- **Home page**
  - Below-the-fold sections loaded with `next/dynamic(..., { ssr: true })`: FeatureDesign, OfferSection, Brands, TeamExpertSection, ServicesSection, WhyChooseUsSection, GetInTouchSection, NewsSection, ContactSection. Hero and SpecialService remain in the main bundle.

### Next.js & build

- **next.config.js**
  - `images.remotePatterns`: `cdn.midjourney.com` for future Next `Image` use.
  - `poweredByHeader: false`.
  - `compress: true`.
  - `experimental.optimizePackageImports`: `@heroui/react`, `lucide-react`, `react-icons` for smaller client bundles.
- **manifest**
  - `public/manifest.json`: name, short_name, description, start_url, display, theme_color, background_color, icons (logo). Referenced from root layout.

### Documentation added

- `CODE_AUDIT.md` — Template vs custom, AI vs human indicators.
- `SEO_AND_LEFTOVERS_AUDIT.md` — Leftovers, SEO gaps, recommended cleanups.
- `AEO_AND_CONTEXT_OPTIMIZATION.md` — Company summary, AEO changes, optional next steps.
- `LIGHTHOUSE_AND_CREDITS.md` — Credits placement, social shares, routes, Lighthouse-oriented changes.
- `FINAL_SEO_AND_PERFORMANCE.md` — Video and performance optimizations, SEO metadata, optional next steps.
- **`CHANGELOG.md`** — This file.

### Environment

- **sample.env**
  - Comment for `NEXT_PUBLIC_SITE_URL` (canonical URL for SEO; no trailing slash).

---

## Summary checklist (robots, metadata, etc.)

| Item | Status |
|------|--------|
| **robots.txt** | `app/robots.js`: Allow `/`, disallow `/api/`, `/login`, `/signup`, `/provider/`, `/_next/`; `sitemap` and `host` from `siteConfig.baseUrl`. |
| **Sitemap** | `app/sitemap.js`: All main pages + all press article URLs; `lastModified`, `changeFrequency`, `priority`. |
| **Root metadata** | `metadataBase`, title template, description, keywords, openGraph (with images), twitter (with images), icons, manifest, robots index/follow. |
| **Per-page metadata** | Layout + About, Services, Contact Us, Privacy, Terms (layout), All News, News [slug] (generateMetadata). |
| **Structured data** | Organization + ProfessionalService JSON-LD in layout. |
| **Canonical / SEO** | Handled via `metadataBase`; set `NEXT_PUBLIC_SITE_URL` in production. |
