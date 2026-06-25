import { siteConfig } from "@/lib/site-data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brand,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Little Hulton",
      addressRegion: "Greater Manchester",
      addressCountry: "GB",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    serviceType: [
      "Custom SaaS development",
      "AI workflow automation",
      "SaaS MVP development",
      "SaaS rescue and stabilisation",
      "SaaS maintenance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
