import { getCaseStudy, getCaseStudySlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getCaseStudy(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.summary,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.summary,
        url: `${SITE.url}/case-studies/${slug}`,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.summary,
      },
    };
  } catch {
    return { title: "Case Study" };
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  try {
    const { frontmatter, content } = getCaseStudy(slug);
    return (
      <article className="py-24">
        <h1 className="font-serif text-4xl">{frontmatter.title}</h1>
        <div className="mt-8 prose">{content}</div>
      </article>
    );
  } catch {
    notFound();
  }
}
