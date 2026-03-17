/** Base URL for canonical, Open Graph, sitemap. Set in production via NEXT_PUBLIC_SITE_URL. */
const baseUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
  process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://protectiontechnologies.com";

export const siteConfig = {
  name: "Protection Technologies, LLC",
  shortName: "Protection Technologies",
  description:
    "Protection Technologies, LLC offers advanced security solutions for government, commercial, and critical sites—CCTV trailers, intrusion sensors, access control, and 24/7 surveillance. Integrated security technology systems since 1985.",
  baseUrl,
  /** Main nav (used by layout metadata; actual menu is in navHeader.jsx) */
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "IT Services", href: "/it-services" },
    { label: "Projects", href: "/projects" },
    { label: "Press", href: "/all-news" },
    { label: "Career", href: "/career" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  /** Footer / external links only — template navMenuItems removed */
  links: {
    linkedin: "https://www.linkedin.com/company/protection-technologies-llc/",
  },
  /** Social share image (absolute URL). Prefer 1200×630 PNG/JPEG for best results; logo.svg used as fallback. */
  ogImage: `${baseUrl}/assets/svg/logo.svg`,
  /** Optional: override with e.g. /og-image.png for better social previews */
  creator: {
    name: "Clear It Path",
    url: "https://clearitpath.com",
  },
};
