import { describe, it, expect } from "vitest";
import { SITE } from "@/lib/constants";

describe("SITE constants", () => {
  it("has a name", () => {
    expect(typeof SITE.name).toBe("string");
    expect(SITE.name.length).toBeGreaterThan(0);
  });

  it("has a title", () => {
    expect(typeof SITE.title).toBe("string");
    expect(SITE.title).toContain(SITE.name);
  });

  it("has a description", () => {
    expect(typeof SITE.description).toBe("string");
    expect(SITE.description.length).toBeGreaterThan(10);
  });

  it("has a valid URL", () => {
    expect(() => new URL(SITE.url)).not.toThrow();
    expect(SITE.url).toMatch(/^https?:\/\//);
  });
});
