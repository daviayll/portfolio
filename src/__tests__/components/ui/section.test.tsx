import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Section } from "@/components/ui/section";

describe("Section", () => {
  it("renders children inside a section element", () => {
    render(<Section>Content</Section>);
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Content").closest("section")).toBeInTheDocument();
  });

  it("uses light bg by default", () => {
    render(<Section data-testid="section">Content</Section>);
    expect(screen.getByTestId("section")).toHaveClass("bg-bg");
  });

  it("uses dark bg when dark prop is set", () => {
    render(
      <Section data-testid="section" dark>
        Content
      </Section>
    );
    expect(screen.getByTestId("section")).toHaveClass("bg-bg-dark");
  });

  it("passes additional className", () => {
    render(
      <Section data-testid="section" className="extra">
        Content
      </Section>
    );
    expect(screen.getByTestId("section")).toHaveClass("extra");
  });
});
