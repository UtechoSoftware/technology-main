# Lighthouse, Social Shares & Credits

## Clear It Path credit (clearitpath.com)

The following **credits** are in place for credibility and attribution:

1. **Footer (visible)** — Copyright bar: “Website by [Clear It Path](https://clearitpath.com)” with `rel="noopener noreferrer"`.
2. **Privacy Policy** — Bottom of page, small print: “This website was created by Clear It Path (clearitpath.com).”
3. **Terms & Conditions** — Bottom of Contact section, small print: same line with link.
4. **Footer (source only)** — HTML comment in footer component: `<!-- Website created by Clear It Path — https://clearitpath.com -->` (visible in View Source only).

**Config:** `config/site.js` includes `creator: { name: "Clear It Path", url: "https://clearitpath.com" }` for reuse if needed.

---

## Social shares (company logo)

- **Open Graph:** `og:image` set to company logo URL (`siteConfig.ogImage` → `/assets/svg/logo.svg` by default), with `width: 1200`, `height: 630`, and `alt` for accessibility.
- **Twitter Card:** `summary_large_image` with the same image URL.
- **Tip:** Many platforms prefer a PNG/JPEG for `og:image`. For best results, add a **1200×630 px** image at `public/og-image.png` and in `config/site.js` set:
  - `ogImage: \`${baseUrl}/og-image.png\``
  (or use an env var and set it there.)

---

## Routes checked

All linked routes resolve to existing app routes:

- `/`, `/about`, `/services`, `/it-services`, `/projects`, `/all-news`, `/career`, `/partnerships`, `/contact-us`, `/privacy`, `/terms-condition`
- `/services/[id]` (e.g. `/services/multi-family`) and `/projects/[id]` and `/news/[slug]` are dynamic and handled.

Footer includes **Terms & Conditions** link next to Privacy.

---

## Lighthouse-oriented changes

- **Metadata:** Default and per-page titles/descriptions, `metadataBase`, Open Graph, Twitter Card, `manifest`, `robots`.
- **External links:** `target="_blank"` links use `rel="noopener noreferrer"` (footer LinkedIn, Clear It Path, privacy/terms credits). LinkedIn also has `aria-label="Protection Technologies LLC on LinkedIn"`.
- **Privacy page:** Contradictory cookies copy fixed (removed “we do not use cookies” followed by “our site uses cookies”). Single, clear cookies section. Page has its own `metadata` (title, description).
- **Terms:** `app/terms-condition/layout.jsx` exports `metadata` (title, description) for the route.
- **Manifest:** `public/manifest.json` added with name, short_name, description, start_url, display, theme_color, background_color, and icon (logo). Linked from root layout.
- **next.config.js:** `poweredByHeader: false` (security best practice). `images.remotePatterns` includes `cdn.midjourney.com` if you use Next `Image` with that host later.

---

## Optional next steps for Lighthouse

- Add **favicon.ico** and optional **apple-touch-icon** under `public/` if not already present.
- Add **1200×630 og-image.png** and point `ogImage` to it for better social previews.
- Run **Lighthouse** (Chrome DevTools) and fix any remaining performance suggestions (e.g. lazy-load below-the-fold images, reduce unused JS/CSS).
- Ensure **LCP** (hero video/image) is optimized (e.g. `priority` on hero image if you switch to an image, or preload for video if needed).
