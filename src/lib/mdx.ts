import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "src/content/case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  slug: string;
  order: number;
  summary: string;
};

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCaseStudy(slug: string) {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontmatter: data as CaseStudyFrontmatter,
    content,
  };
}

export function getAllCaseStudies() {
  return getCaseStudySlugs()
    .map((slug) => getCaseStudy(slug))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}
