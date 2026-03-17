import { siteConfig } from "@/config/site";
import { pressArticles } from "@/data/pressArticles";

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const base = siteConfig.baseUrl;
  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/it-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/all-news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/career`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/partnerships`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/terms-condition`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
  const pressUrls = pressArticles.map((article) => ({
    url: `${base}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticPages, ...pressUrls];
}
