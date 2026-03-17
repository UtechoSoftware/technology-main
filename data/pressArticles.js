/**
 * Press article metadata for SEO/AEO: per-article title and description.
 * Slug must match newsSection.jsx and blogSection.jsx routing.
 */
export const pressArticles = [
  {
    slug: "marquis-whos-who-honors-mike-singer-as-a-top-entrepreneur",
    title: "Marquis Who's Who Honors Mike Singer as a Top Entrepreneur",
    description:
      "Mike Singer, president of Protection Technologies LLC, is honored by Marquis Who's Who as a top entrepreneur. Learn about his path from teenage locksmith to security systems integration leader.",
  },
  {
    slug: "marquis-whos-who-honors-mike-singer-for-expertise-in-security-services",
    title: "Marquis Who's Who Honors Mike Singer for Expertise in Security Services",
    description:
      "Mike Singer of Protection Technologies LLC is recognized by Marquis Who's Who for expertise in security services, low-voltage integration, and leadership in the security technology industry.",
  },
  {
    slug: "how-protection-technologies-llc-delivers-security-you-can-trust",
    title: "Inside the Technology: How Protection Technologies LLC Delivers Security You Can Trust",
    description:
      "How Protection Technologies LLC delivers integrated security solutions—alarm, access control, and CCTV—for residential, commercial, industrial, and government clients. Systems integration since 1999.",
  },
  {
    slug: "leading-with-integrity-the-business-philosophy-behind-protection-technologies-llc",
    title: "Leading with Integrity: The Business Philosophy Behind Protection Technologies LLC",
    description:
      "The business philosophy behind Protection Technologies LLC: integrity, diversity, and women-led leadership. How Mike Singer built a trusted security integration company.",
  },
  {
    slug: "security-meets-vision-how-mike-singers-principles-drive-protection-technologies-llcs-cutting-edge-solutions",
    title: "Security Meets Vision: How Mike Singer's Principles Drive Protection Technologies LLC's Cutting-Edge Solutions",
    description:
      "How Mike Singer's principles drive Protection Technologies LLC's security technology and systems integration—innovation, integrity, and industry partnerships.",
  },
  {
    slug: "from-east-coast-leader-to-national-contender-how-protection-technologies-llc-is-redefining-modern-security",
    title: "From East Coast Leader to National Contender: How Protection Technologies LLC is Redefining Modern Security",
    description:
      "Protection Technologies LLC: from East Coast leader to national contender. Alarm, access control, CCTV, and security systems integration for multifamily, commercial, and government.",
  },
  {
    slug: "latch-announces-first-building-wide-installation-of-works-with-latch-marks-usa-locks",
    title: "Latch Announces First Building-Wide Installation of 'Works with Latch' Marks USA Locks",
    description:
      "Latch and Marks USA complete first building-wide installation of Latch-powered smart locks. Protection Technologies LLC covers access control and smart building technology in multifamily and commercial.",
  },
  {
    slug: "why-247-remote-video-surveillance-is-essential-for-modern-businesses",
    title: "Why 24/7 Remote Video Surveillance Is Essential for Modern Businesses",
    description:
      "Why 24/7 remote video surveillance matters for businesses. Protection Technologies LLC on monitoring, deterrence, and integrated security for commercial and multifamily properties.",
  },
  {
    slug: "smart-access-control-security-meets-convenience",
    title: "Smart Access Control: Security Meets Convenience",
    description:
      "Smart access control from Protection Technologies LLC: mobile credentials, audit trails, and integrated security for commercial and multifamily buildings.",
  },
];

export function getArticleBySlug(slug) {
  return pressArticles.find((a) => a.slug === slug) || null;
}
