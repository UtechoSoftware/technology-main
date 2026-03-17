# Final SEO & Performance Round

## Video optimizations (page load)

### 1. Hero (above-the-fold)
- **preload="metadata"** — Browser loads only duration/dimensions at first, then streams the rest when playing. Reduces initial bandwidth and contention with other resources.
- **aria-hidden** — Decorative video hidden from screen readers.

### 2. LazyVideo component (`components/ui/LazyVideo.jsx`)
- Videos **load only when in (or near) the viewport** via Intersection Observer.
- Used for:
  - **PageSection** — Inner pages (About, Services, Contact, etc.) no longer load full banner video on initial request. Video loads when the section scrolls into view.
  - **Nav header logo** — Logo video loads when the header is visible (rootMargin 50px), so it doesn’t compete with hero on first paint.
  - **IT Services** — Midjourney CDN video loads only when that section is in view.
- **Result:** Fewer simultaneous video requests, better LCP and TTI.

### 3. Home page code splitting
- **Below-the-fold sections** are loaded with `next/dynamic(..., { ssr: true })`: FeatureDesign, OfferSection, Brands, TeamExpertSection, ServicesSection, WhyChooseUsSection, GetInTouchSection, NewsSection, ContactSection.
- Hero and SpecialService stay in the main bundle (above the fold).
- **Result:** Smaller initial JS bundle, faster parse/execute and Time to Interactive.

---

## Next.js config

- **compress: true** — Enables gzip/Brotli for responses.
- **poweredByHeader: false** — Already set; keeps security best practice.
- **experimental.optimizePackageImports** — Tree-shakes `@heroui/react`, `lucide-react`, and `react-icons` so only used components are bundled (smaller client JS).

---

## SEO

- **Metadata** added for: About Us, Services, Contact Us (title + description). Privacy, Terms, All News, and layout already had metadata; news slugs use `generateMetadata`.
- **metadataBase** in root layout already provides canonical URLs for OG and Twitter.
- Sitemap, robots, and Organization/ProfessionalService schema were already in place.

---

## What to do next (optional)

1. **Hero video file** — Compress `public/assets/images/pageVideo.mp4` (e.g. with HandBrake or ffmpeg) to a smaller resolution/bitrate for faster first load while keeping quality acceptable.
2. **Poster image** — Add a `poster` image for the hero video so a frame shows before playback starts (helps LCP if the video is slow to load).
3. **Lighthouse** — Run in Chrome DevTools and fix any remaining suggestions (e.g. image sizing, unused CSS).
4. **CDN** — Serve static assets (and ideally the hero video) from a CDN in production.

---

## Files touched

| File | Change |
|------|--------|
| `components/ui/LazyVideo.jsx` | New: viewport-based lazy video loading |
| `components/home/hero.jsx` | preload="metadata", aria-hidden |
| `components/common/pageSection.jsx` | Use LazyVideo for banner video |
| `components/navHeader.jsx` | Logo video → LazyVideo |
| `components/itServices/integratedServices.jsx` | CDN video → LazyVideo |
| `app/page.jsx` | Dynamic imports for below-fold sections |
| `app/about/page.jsx` | metadata (title, description) |
| `app/services/page.jsx` | metadata (title, description) |
| `app/contact-us/page.jsx` | metadata (title, description) |
| `next.config.js` | compress, optimizePackageImports |
