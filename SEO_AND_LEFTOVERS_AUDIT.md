# SEO & Template Leftovers Audit

Reference: **American Sons Locksmith** (aslgp.com) and locksmith/security SEO best practices — clear service areas, prominent phone, Commercial/Residential structure, Local Business schema, location keywords in meta.

---

## 1. What’s Left Over (Template / Wrong Vertical)

### 1.1 Config & identity
| Location | Issue |
|----------|--------|
| **config/site.js** | `navItems`: "Listings" → `/listings` (real estate). |
| **config/site.js** | `navMenuItems`: Profile, Dashboard, Team, Calendar, Settings, Help & Feedback, Logout — template app links, not used in your nav. |
| **config/site.js** | `links`: HeroUI (github heroui-inc, twitter hero_ui, heroui.com, Discord, Patreon). |
| **package.json** | `"name": "real-estate"`. |
| **layout.jsx** | Metadata uses `siteConfig.name` = "Technology" (generic). Better: "Protection Technologies, LLC" or full brand. |

### 1.2 Copy (real estate / wrong vertical)
| Location | Wrong / placeholder text |
|----------|---------------------------|
| **components/home/hero.jsx** | "A new property involves careful planning, design, and seamless execution. our managed services stand out by offering a unique blend of National reach and local expertise" — **property** = real estate; not security/tech. |
| **app/terms-condition/page.jsx** | "Welcome to our **real estate platform**." |
| **app/terms-condition/page.jsx** | Entire section "**Property Listings**" (third-party listings, agents, sale/rent). |
| **app/terms-condition/page.jsx** | Contact: **legal@realestate.com**, **+1 (555) 123-4567**, **123 Real Estate Avenue, Suite 100, New York, NY 10001**. |
| **app/terms-condition/page.jsx** | Governing law: "[Your Country/State]" placeholder. |
| **components/news/article1.jsx, article2.jsx** | Category "Real Estate" in article metadata (per earlier grep). |

### 1.3 Links & routes
| Location | Issue |
|----------|--------|
| **components/footer/index.jsx** | "Press" → **/news** but actual route is **/all-news** (broken or wrong). |
| **components/home/newsSection.jsx** | One link uses **/news** (should be **/all-news** for consistency). |
| **config/site.js** | "Contact" → **/contact**; your real contact page is **/contact-us**. |

### 1.4 Data / API (still real-estate naming)
| Location | Issue |
|----------|--------|
| **data/properties.js** | Comment "Properties data for the **real estate application**"; full listing data (villas, lofts, etc.). |
| **redux/store.js** | `propertyFiltersReducer`, `propertyFilterSlice`. |
| **components/api/axiosInstance.js** | Cookie **estate_loop_token**. |
| **sample.env** | **esate-loop-backend** (typo + real-estate backend). |

### 1.5 Footer content
- **itSolutions** labels: "Multi Family", "Houses/Estates", "College Housing Solutions" — real-estate/property type; rest (Data Center, Office Buildings) fit security/tech. Mixed vertical.

---

## 2. SEO Gaps (vs American Sons–style / local security SEO)

### 2.1 Meta & document head
| Issue | Detail |
|-------|--------|
| **Single global title** | Only `app/layout.jsx` exports `metadata`. Every page gets the same `<title>` (e.g. "Technology" or "Technology - Technology"). No per-page titles (About, Services, Contact, etc.). |
| **No Open Graph** | No `openGraph: { title, description, url, siteName, images }`. Social shares get generic or wrong previews. |
| **No Twitter Card** | No `twitter: { card, title, description }`. |
| **No keywords** | No `keywords` in metadata (less critical but still used by some engines). |
| **Generic description** | One description for whole site; no page-specific descriptions. |
| **Favicon** | Layout references `/favicon.ico`; not present in `public/` (Next may 404 or use default). |

### 2.2 Technical SEO
| Issue | Detail |
|-------|--------|
| **No sitemap** | No `sitemap.xml` or Next.js `app/sitemap.js`. Crawlers don’t get a URL list. |
| **No robots.txt** | No `robots.txt` or `app/robots.js`. No crawl directives. |
| **No canonical** | No explicit canonical URLs (Next often uses current URL; still good to set for duplicates). |
| **No structured data** | No JSON-LD (LocalBusiness / Organization, Service, etc.). Competitors (e.g. American Sons) and SEO guidance recommend Local Business + service schema for local/search visibility. |

### 2.3 Content & UX (SEO impact)
| Issue | Detail |
|-------|--------|
| **Wrong hero copy** | "Property" and "managed services" real-estate phrasing on a security/tech hero — confuses topic and keywords. |
| **Terms/legal** | "Real estate platform", "Property Listings", fake address/email — looks unprofessional and wrong vertical to users and crawlers. |
| **Broken/wrong links** | Footer "Press" → `/news` (should be `/all-news`); `/contact` in config vs `/contact-us` — bad UX and internal linking. |

### 2.4 What strong local security/locksmith sites do (e.g. American Sons)
- Clear **service areas** (e.g. Riverdale NJ, surrounding areas).
- **Phone number** prominent (973-696-1188, toll-free).
- **Commercial vs Residential** structure; specific **service names** (access control, safes, rekeying, etc.).
- **LocalBusiness**-style info (name, location, contact, services).
- Clean **internal links** and consistent **URLs** for main sections.

---

## 3. Fixes Applied (in code)

- **Layout metadata**: Richer default title/description, Open Graph, Twitter Card, keywords; optional base URL from env.
- **config/site.js**: Remove Listings; replace template navMenuItems/links with Protection Technologies–relevant items or minimal set.
- **Hero**: Replace real-estate subtext with security/tech messaging.
- **Terms**: Replace "real estate platform", "Property Listings", placeholder contact and law with security-company wording and placeholders (company name, real address, state).
- **Footer**: Press → `/all-news`; fix newsSection link to `/all-news` where intended.
- **Sitemap & robots**: Add `app/sitemap.js` and `app/robots.js` for Next.js.

---

## 4. Recommended Next Steps (manual / env)

1. **Favicon**: Add `public/favicon.ico` (and optional apple-touch-icon).
2. **Per-page metadata**: Add `export const metadata` (or `generateMetadata`) to key routes: `/about`, `/services`, `/it-services`, `/projects`, `/partnerships`, `/career`, `/contact-us`, `/all-news`, `/terms-condition`, `/privacy` with unique titles and descriptions.
3. **Structured data**: Add JSON-LD in `layout.jsx` or a shared component: **Organization** or **LocalBusiness** with name, url, telephone, address, areaServed, description, sameAs (e.g. LinkedIn). Use production `NEXT_PUBLIC_SITE_URL` or equivalent.
4. **Real contact & legal**: Replace all placeholder contact (email, phone, address) and "[Your Country/State]" with real company details.
5. **Package name**: Change `package.json` `"name"` from `"real-estate"` to e.g. `"protection-technologies"`.
6. **Footer “IT Solution” links**: Align with actual services (rename or remove real-estate-heavy labels; fix hrefs if any point to wrong routes).
7. **Article categories**: Change "Real Estate" to "Security" or "Technology" in news/article components where applicable.

---

## 5. One-line summary

**Leftovers:** Real-estate/template config (Listings, HeroUI links, navMenuItems), hero and terms copy, placeholder contact, property/estate_loop naming, footer Press→/news and mixed service labels.  
**SEO:** Single global title/description, no OG/Twitter, no sitemap/robots, no schema; wrong copy and broken links hurt relevance and trust.  
**Direction:** Align config and copy with Protection Technologies, fix links and metadata, add sitemap/robots and per-page meta + LocalBusiness/Organization schema for local/security SEO similar to American Sons–style sites.
