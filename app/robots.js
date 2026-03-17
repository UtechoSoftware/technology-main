import { siteConfig } from "@/config/site";

/**
 * robots.txt — generated at build. Served at /robots.txt.
 * Keep siteConfig.baseUrl in sync with NEXT_PUBLIC_SITE_URL in production.
 * @type {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/login", "/signup", "/provider/", "/_next/"],
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    host: siteConfig.baseUrl,
  };
}
