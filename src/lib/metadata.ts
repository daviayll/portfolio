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
        jobTitle: "Operations Automation Specialist",
        description: SITE.description,
        knowsAbout: [
          "Business Process Automation",
          "Operations Automation",
          "Workflow Automation",
          "AI Integration",
          "Business Systems Integration",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: SITE.title,
        url: SITE.url,
        description: SITE.description,
        serviceType: "Operations Automation Consulting",
        areaServed: "Worldwide",
      },
    ],
  };
}
