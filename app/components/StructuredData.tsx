export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ReelBama",
    "description": "Alabama's premier fishing community offering fishing reports, tournament results, lake maps, and expert tips for bass fishing in Alabama waters.",
    "url": "https://reelbama.com",
    "logo": "/assets/logos/reelbama.png",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "State",
      "name": "Alabama"
    },
    "serviceType": [
      "Fishing Community",
      "Fishing Reports",
      "Tournament Information",
      "Fishing Guides",
      "Lake Maps"
    ],
    "sameAs": [
      "https://facebook.com/reelbama",
      "https://twitter.com/reelbama",
      "https://instagram.com/reelbama"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@reelbama.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "AL",
      "addressCountry": "US"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
