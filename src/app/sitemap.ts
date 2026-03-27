import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/lib/mdx";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudySlugs = getCaseStudySlugs();

  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${SITE.url}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...caseStudyRoutes,
  ];
}
