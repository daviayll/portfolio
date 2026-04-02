import { describe, it, expect } from "vitest";
import { siteMetadata, jsonLd } from "@/lib/metadata";

describe("siteMetadata", () => {
  it("has title config with template", () => {
    expect(siteMetadata.title).toBeDefined();
    const title = siteMetadata.title as { default: string; template: string };
    expect(title.default).toBeTruthy();
    expect(title.template).toContain("%s");
  });

  it("has a description", () => {
    expect(typeof siteMetadata.description).toBe("string");
  });

  it("has a metadataBase URL", () => {
    expect(siteMetadata.metadataBase).toBeInstanceOf(URL);
  });

  it("has openGraph config", () => {
    const og = siteMetadata.openGraph as Record<string, unknown>;
    expect(og).toBeDefined();
    expect(og.type).toBe("website");
    expect(og.locale).toBe("en_US");
  });

  it("has twitter card config", () => {
    const tw = siteMetadata.twitter as Record<string, unknown>;
    expect(tw).toBeDefined();
    expect(tw.card).toBe("summary_large_image");
  });

  it("allows indexing", () => {
    const robots = siteMetadata.robots as { index: boolean; follow: boolean };
    expect(robots.index).toBe(true);
    expect(robots.follow).toBe(true);
  });
});

describe("jsonLd", () => {
  it("returns valid JSON-LD with @context", () => {
    const ld = jsonLd();
    expect(ld["@context"]).toBe("https://schema.org");
  });

  it("includes a Person entry", () => {
    const ld = jsonLd();
    const graph = ld["@graph"] as Array<Record<string, unknown>>;
    const person = graph.find((item) => item["@type"] === "Person");
    expect(person).toBeDefined();
    expect(person!.jobTitle).toBe("Operations Automation Specialist");
  });

  it("includes a ProfessionalService entry", () => {
    const ld = jsonLd();
    const graph = ld["@graph"] as Array<Record<string, unknown>>;
    const service = graph.find(
      (item) => item["@type"] === "ProfessionalService"
    );
    expect(service).toBeDefined();
    expect(service!.serviceType).toBe("Operations Automation Consulting");
  });
});
