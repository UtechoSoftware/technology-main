import { company } from "@/config/company";
import { siteConfig } from "@/config/site";

/**
 * JSON-LD Organization + LocalBusiness schema for search and AEO.
 * Renders in layout so every page has consistent entity context.
 */
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.baseUrl}/#organization`,
        name: company.legalName,
        url: siteConfig.baseUrl,
        description: company.description,
        foundingDate: company.founded,
        founder: {
          "@type": "Person",
          name: company.founder,
        },
        sameAs: siteConfig.links.linkedin ? [siteConfig.links.linkedin] : [],
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            addressCountry: "US",
            addressRegion: company.location.stateShort,
          },
          geoRadius: "2000 km",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.baseUrl}/#localbusiness`,
        name: company.legalName,
        description: company.description,
        url: siteConfig.baseUrl,
        image: `${siteConfig.baseUrl}/assets/svg/logo.svg`,
        priceRange: "$$",
        areaServed: company.location.serviceArea,
        knowsAbout: company.services,
        slogan: "Integrated Security Technology Systems",
        parentOrganization: { "@id": `${siteConfig.baseUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
