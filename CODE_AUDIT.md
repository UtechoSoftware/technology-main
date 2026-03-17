# Code Audit: Technology / Protection Technologies Site

## Local dev environment

- **Run:** `npm install` then `npm run dev`
- **URL:** http://localhost:3000 (Next.js 15 with Turbopack)
- **Env:** Copy `sample.env` to `.env` and set `NEXT_PUBLIC_API_BASE_URL` (currently points to localhost:8000 or the Vercel backend)

---

## 1. Is it a template?

**Yes.** The project is built on the **HeroUI Next.js app template**:

- **README.md** says: *"This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2)"* and links to `heroui-inc/next-app-template`.
- **package.json** still has `"name": "real-estate"` (template or an earlier repurpose).
- **config/site.js** still has HeroUI template defaults:
  - `navItems`: Home, About, Contact, **Listings** (real-estate leftover)
  - `navMenuItems`: Profile, Dashboard, Projects, Team, Calendar, Settings, Help & Feedback, Logout
  - `links`: github (heroui-inc/heroui), twitter (hero_ui), heroui.com, Discord, Patreon

So: **base = HeroUI Next.js template**, then customized for a “Technology / Protection Technologies” security/IT site. Some template and real-estate leftovers were never fully replaced.

---

## 2. What’s template vs custom?

| Area | Template / Leftover | Custom / Repurposed |
|------|----------------------|---------------------|
| **Stack** | Next.js, HeroUI, Tailwind, Framer Motion, next-themes | Same stack, no swap |
| **App shell** | `app/layout.jsx`, `app/providers.jsx`, `MainLayout`, HeroUI + Redux + theme | Custom `NavHeader` + `Footer` replace default nav |
| **Navigation** | `config/site.js` nav still template-style | **navHeader.jsx**: real menu (Home, About, Services, IT Services, Projects, Press, Career, Partnerships, Contact Us) |
| **Home page** | General “sections” pattern | Custom sections: Hero, SpecialService, FeatureDesign, OfferSection, Brands, TeamExpertSection, ServicesSection, WhyChooseUsSection, GetInTouchSection, NewsSection, ContactSection |
| **Branding** | — | Custom theme (`styles/theme.css`), “Protection Technologies” copy, video hero, logo video, Kumbh Sans |
| **Content** | — | Custom: IT Services, Partnerships (e.g. NJ Devils, NY Jets, Falcons, Nets, Dolphins), career, contact, about, news |
| **Data / API** | Redux store with `propertyFilters`, `auth`; `data/properties.js` (real estate listings); cookie `estate_loop_token`; sample.env `esate-loop-backend` | API base URL and some endpoints pointed at your backend; site content is tech/security, not real estate |
| **Pages** | Some generic template routes | Custom pages: `/about`, `/services`, `/it-services`, `/projects`, `/partnerships`, `/career`, `/contact-us`, `/all-news`, etc. |

**Summary:** The **UI and content** are heavily customized for “Protection Technologies” and tech/security. The **scaffold, config, and data layer** still show template and real-estate origins (name, site config, properties data, auth/cookie names, backend URL comment).

---

## 3. AI vs human (indicators)

Inference only; not provable.

**Likely human (or human-edited):**

- **Domain-specific content:** “Protection Technologies, LLC,” “Since 1985,” “integrated solution systems,” specific service names (Multi Family, Data Center, College Housing Solutions, etc.), sports partnerships (NJ Devils, NY Jets, etc.), LinkedIn URL.
- **Brand and UX choices:** Custom lock icon and “Support Ticket” in nav, video logo and hero, custom theme variables (`brand-secondary`, `brand-secondaryDark`), typography (Kumbh Sans).
- **Small inconsistencies:** e.g. “Altana Falcons” in `partnerships/index.jsx` (likely typo for “Atlanta”) — common human typo.
- **Footer:** Real company blurb, one real social link, mixed service links (some real-estate-ish names kept).

**Likely AI-assisted or template-like:**

- **Boilerplate structure:** Layout, providers, Redux setup, HeroUI usage — matches common Next + HeroUI patterns and template.
- **Generic copy:** Hero subtext (“A new property involves careful planning…”) is **real-estate wording** still on a tech hero — suggests copy was generated or pasted for a different product and not fully updated.
- **Repetitive patterns:** Many similar components (e.g. article1–article9, service cards, partnership tabs) with consistent structure — could be generated or template-derived.
- **Heavy commenting:** Some files have tidy comments (“Custom Lock SVG Component,” “Desktop Menu,” “Full Screen Mobile Menu Overlay”) in a consistent style — can be human or AI.
- **Legal/terms:** Terms page with “real estate platform,” “123 Real Estate Avenue” — generic/placeholder text, often from templates or generators.

**Mixed:**

- **config/site.js:** Custom `name`/`description` for Protection Technologies, but rest is template (nav items, links) — looks like partial find-and-replace.
- **Redux/data:** Real-estate slice names and `properties.js` with “Luxury Oceanfront Villa”-style data suggest the app (or template) started as real estate; then branding and routes were changed without a full data/config cleanup.

---

## 4. Recommended cleanups (optional)

1. **config/site.js**  
   - Remove or replace `navItems` / `navMenuItems` / `links` so they match the real nav and your brand (or delete if unused).

2. **Branding / copy**  
   - Replace hero subtext (“A new property…”) with tech/security messaging.  
   - Fix “Altana” → “Atlanta” in partnerships.

3. **Identity**  
   - In `package.json`, change `"name"` from `"real-estate"` to something like `"protection-technologies"` or `"technology-site"`.

4. **Data / API**  
   - Rename or remove `propertyFilterSlice` and `data/properties.js` if not used.  
   - Align cookie name and API env vars with your product (e.g. drop `estate_loop` if this is no longer “Estate Loop”).

5. **Terms / legal**  
   - Replace “real estate platform” and placeholder address in `app/terms-condition/page.jsx` with your real terms and company details.

---

## 5. One-line summary

**Template:** HeroUI Next.js app template, originally or previously used for real estate.  
**Custom:** Navigation, pages, branding, and most content are customized for “Protection Technologies” / tech and security.  
**Leftovers:** Package name, site config, Redux/data naming, some copy and terms still reference real estate or the template.  
**AI vs human:** Domain content and brand choices look human (or human-edited); structure and generic copy look template-like or AI-assisted; a few clear copy-paste misses (hero text, terms) suggest mixed or incomplete edits.
