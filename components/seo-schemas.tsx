"use client";

import Script from "next/script";

// LocalBusiness Schema for Solar Installation Company
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://solarinstallationvadodara.in/#organization",
    name: "SolarInstallationVadodara.in - Solar Installation Company",
    alternateName: "Solar Installation Vadodara",
    description: "Leading solar panel installation company in Vadodara, Gujarat. MNRE & GEDA approved installer offering residential, commercial & industrial solar solutions with government subsidy assistance.",
    url: "https://solarinstallationvadodara.in",
    telephone: "+91-6353583148",
    email: "info@solarinstallationvadodara.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123, Solar Energy Hub, Alkapuri",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390007",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3072",
      longitude: "73.1812"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    priceRange: "₹45,000 - ₹10,00,000",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop",
    logo: "https://solarinstallationvadodara.in/logo.png",
    sameAs: [
      "https://facebook.com/solarinstallationvadodara",
      "https://instagram.com/solarinstallationvadodara",
      "https://twitter.com/solarinstallationvadodara",
      "https://linkedin.com/company/solarinstallationvadodara"
    ],
    areaServed: {
      "@type": "City",
      name: "Vadodara",
      containedIn: {
        "@type": "State",
        name: "Gujarat"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Solar Installation",
            description: "Solar panel installation for homes with government subsidy"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Solar Installation",
            description: "Solar power solutions for businesses and offices"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Solar Installation",
            description: "Large scale solar for factories and manufacturing units"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "547",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema Component
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema Component
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema for Solar Systems
interface ProductSchemaProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export function ProductSchema({ name, description, price, image }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: image || "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    brand: {
      "@type": "Brand",
      name: "SolarInstallationVadodara"
    },
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "SolarInstallationVadodara.in"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "234"
    }
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema
interface ServiceSchemaProps {
  name: string;
  description: string;
  areaServed?: string;
}

export function ServiceSchema({ name, description, areaServed = "Vadodara" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "SolarInstallationVadodara.in",
      "@id": "https://solarinstallationvadodara.in/#organization"
    },
    areaServed: {
      "@type": "City",
      name: areaServed
    },
    serviceType: "Solar Panel Installation"
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Review Schema
export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "SolarInstallationVadodara.in",
      "@id": "https://solarinstallationvadodara.in/#organization"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "Rajesh Patel"
    },
    reviewBody: "Excellent solar installation service in Vadodara. Professional team, quality panels, and helped with government subsidy. Highly recommended!"
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SolarInstallationVadodara.in",
    url: "https://solarinstallationvadodara.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://solarinstallationvadodara.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema for Blog Posts
interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}

export function ArticleSchema({ 
  title, 
  description, 
  image, 
  datePublished, 
  dateModified,
  author,
  url 
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://solarinstallationvadodara.in"
    },
    publisher: {
      "@type": "Organization",
      name: "SolarInstallationVadodara.in",
      logo: {
        "@type": "ImageObject",
        url: "https://solarinstallationvadodara.in/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for Guide Posts
interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  image: string;
  totalTime?: string;
  steps: HowToStep[];
}

export function HowToSchema({ name, description, image, totalTime, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    image: image,
    totalTime: totalTime || "PT30M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };

  return (
    <Script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
