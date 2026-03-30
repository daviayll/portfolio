import type { Metadata } from "next";
import { SITE } from "./constants";

export const siteMetadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Antoni Davia",
        url: SITE.url,
        jobTitle: "E-Commerce Automation Specialist",
        description: SITE.description,
        knowsAbout: [
          "E-Commerce Automation",
          "AI for Online Retail",
          "Business Process Automation",
          "Inventory Management Systems",
          "Order Workflow Optimization",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: SITE.title,
        url: SITE.url,
        description: SITE.description,
        serviceType: "E-Commerce Automation Consulting",
        areaServed: "Worldwide",
      },
    ],
  };
}
