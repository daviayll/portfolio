import { describe, it, expect } from "vitest";
import { getCaseStudySlugs, getCaseStudy, getAllCaseStudies } from "@/lib/mdx";

describe("getCaseStudySlugs", () => {
  it("returns an array", () => {
    const slugs = getCaseStudySlugs();
    expect(Array.isArray(slugs)).toBe(true);
  });

  it("returns empty array when no MDX files exist", () => {
    // The case-studies directory exists but is empty in this project
    const slugs = getCaseStudySlugs();
    expect(slugs).toHaveLength(0);
  });
});

describe("getCaseStudy", () => {
  it("throws when slug does not exist", () => {
    expect(() => getCaseStudy("non-existent-slug")).toThrow();
  });
});

describe("getAllCaseStudies", () => {
  it("returns an array", () => {
    const studies = getAllCaseStudies();
    expect(Array.isArray(studies)).toBe(true);
  });

  it("returns empty array when no MDX files exist", () => {
    const studies = getAllCaseStudies();
    expect(studies).toHaveLength(0);
  });
});
