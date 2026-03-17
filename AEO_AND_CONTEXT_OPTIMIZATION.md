# AEO & Context Optimization Summary

This document summarizes changes made so the site has **consistent entity context** and is **ready for Answer Engine Optimization (AEO)**—so search and AI systems can clearly understand who Protection Technologies, LLC is, what they do, and how they operate.

---

## 1. Company Understanding (from news and site)

**Protection Technologies, LLC** is a **security systems integration company** that provides:

- **Alarm, access control, and CCTV** for multifamily, commercial, industrial, government, and critical infrastructure
- **24/7 remote video surveillance**, mobile CCTV trailers, intrusion sensors, smart locks
- **Low-voltage infrastructure**: Wi-Fi, intercoms, garage gates, fire systems

**Founder/leader:** Mike Singer (President since 1999).  
**Roots:** Locksmithing since 1985 (All Secure Locksmiths Inc., later acquired by PT LLC).  
**Geography:** East Coast leader, expanding nationwide.  
**Partners:** Iloq (Global Platinum Dealer), Assa Abloy, PDK, Speco, DW, Latch, Butterfly, Amazon; **venue partnerships** with NJ Devils, NY Jets, Atlanta Falcons, Brooklyn Nets, Miami Dolphins.  
**Culture:** Zero debt, referral-driven growth, women in all key leadership roles, diverse workforce.

---

## 2. Changes Made for Context & AEO

### Single source of truth
- **`config/company.js`** — Central company facts (name, founder, founded, since, services, sectors, partners, location, accolades). Use for schema, copy, and future FAQ/voice.
- **`data/pressArticles.js`** — Slug, title, and description for every press article. Used for per-article metadata and sitemap.

### Article and press
- **Bylines:** "BY Tech" → "Protection Technologies LLC" or "Industry News" as appropriate.
- **Tags:** "Real Estate" → "Video Surveillance" or "Access Control" so vertical is clearly security.
- **Image alts:** Generic "Article" → descriptive (e.g. "24/7 remote video surveillance for commercial security", "Latch Marks USA smart locks installation").
- **Article4 title:** "Technology:How" → "Technology: How".
- **Press section heading:** "New Blog" / "Latest Press and Insights" → "Press & Insights" / "Latest from Protection Technologies, LLC".

### Per-article and list SEO/AEO
- **`app/news/[slug]/page.jsx`** — `generateMetadata` uses `getArticleBySlug(slug)` so each article has a unique **title** and **description** (and Open Graph) for search and AI.
- **`app/all-news/page.jsx`** — Metadata added: title "Press & Insights", description that names Protection Technologies, LLC and security/press.
- **Sitemap** — All press article URLs added (`/news/{slug}`) so crawlers and AEO systems can discover every article.

### Partnerships
- **"Altana Falcons"** → **"Atlanta Falcons"** (tab id and label).
- **Intro block** added: "Security & Technology Partnerships" + one paragraph stating that Protection Technologies, LLC partners with NJ Devils, NY Jets, Atlanta Falcons, Brooklyn Nets, Miami Dolphins for **integrated security technology, access control, and surveillance** at their facilities and events. This gives clear context for AEO and users.

### About and entity clarity
- **Company section (About):** Copy tightened to name **Protection Technologies, LLC** as a security systems integration company, **founded by Mike Singer in 1999** with **roots in locksmithing since 1985**, and to list alarm, access control, and CCTV explicitly.
- **Company image alt:** "Company Section" → "Protection Technologies LLC security systems integration and team".

### Structured data (schema)
- **`components/seo/OrganizationSchema.jsx`** — JSON-LD with:
  - **Organization:** name, url, description, foundingDate, founder, sameAs (LinkedIn), areaServed.
  - **ProfessionalService:** name, description, url, image, areaServed, knowsAbout (services), slogan, parentOrganization.
- Included in **`app/layout.jsx`** so every page exposes the same entity to search and answer engines.

---

## 3. How This Helps AEO

- **Entity clarity:** One company config and one Organization/ProfessionalService schema so the site consistently describes who and what Protection Technologies, LLC is.
- **Article-level answers:** Each press article has its own title and description, so AI/search can match queries to specific pieces (e.g. "Mike Singer security", "Protection Technologies 24/7 surveillance").
- **No wrong vertical:** Removed "Real Estate" and generic "BY Tech"; bylines and tags align with security and systems integration.
- **Partnerships as proof:** Partnerships page and schema make it clear that PT LLC works with major venues and brands (NFL, NHL, NBA, etc.) for security and technology—useful for credibility and entity signals.
- **Sitemap:** All key pages and every press article are in the sitemap for discovery and indexing.

---

## 4. Optional Next Steps for AEO

- **FAQ schema:** Add a dedicated FAQ block (e.g. on About or Contact) with questions like "What is Protection Technologies, LLC?", "Who founded Protection Technologies?", "What services does Protection Technologies offer?", "Where does Protection Technologies operate?" and output **FAQPage** JSON-LD.
- **Article schema:** For each press article, add **Article** or **NewsArticle** JSON-LD (headline, datePublished, author, publisher) in the article layout or in `blogSection` when rendering by slug.
- **LocalBusiness details:** When you have a real address and phone, add them to `config/company.js` and to OrganizationSchema (e.g. **address**, **telephone**, **openingHours**).
- **Voice/search phrasing:** Keep using natural question-style headings and short, direct answers in key sections (About, Services, Partnerships) so answers can be extracted for voice and featured snippets.

---

## 5. File Reference

| File | Purpose |
|------|--------|
| `config/company.js` | Company facts for schema and copy |
| `data/pressArticles.js` | Article metadata for metadata + sitemap |
| `components/seo/OrganizationSchema.jsx` | Organization + ProfessionalService JSON-LD |
| `app/layout.jsx` | Includes OrganizationSchema in `<head>` |
| `app/news/[slug]/page.jsx` | generateMetadata per article |
| `app/all-news/page.jsx` | Metadata for press listing |
| `app/sitemap.js` | Static pages + all press article URLs |
| `components/partnerships/index.jsx` | Atlanta fix + partnership intro |
| `components/about/companySection.jsx` | Entity-rich about copy + image alt |
| `components/home/newsSection.jsx` | Press heading and subtext |
| Article components (`article1.jsx`–`article7.jsx`) | Bylines, tags, image alts, Article4 typo |
