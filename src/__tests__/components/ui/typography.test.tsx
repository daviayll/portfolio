import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Heading, Text, Label } from "@/components/ui/typography";

describe("Heading", () => {
  it("renders children", () => {
    render(<Heading>Hello World</Heading>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("defaults to h2 tag", () => {
    render(<Heading>Default heading</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders display level as h1", () => {
    render(<Heading level="display">Display heading</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders h1 level as h1", () => {
    render(<Heading level="h1">H1 heading</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders h3 level as h3", () => {
    render(<Heading level="h3">H3 heading</Heading>);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("accepts a custom as prop", () => {
    render(<Heading as="div">Custom tag</Heading>);
    const el = screen.getByText("Custom tag");
    expect(el.tagName).toBe("DIV");
  });

  it("passes className through", () => {
    render(<Heading className="extra-class">Styled</Heading>);
    expect(screen.getByText("Styled")).toHaveClass("extra-class");
  });
});

describe("Text", () => {
  it("renders children in a p tag by default", () => {
    render(<Text>Body text</Text>);
    const el = screen.getByText("Body text");
    expect(el.tagName).toBe("P");
  });

  it("renders muted variant", () => {
    render(<Text variant="muted">Muted text</Text>);
    const el = screen.getByText("Muted text");
    expect(el).toHaveClass("text-text-muted");
  });

  it("renders light variant", () => {
    render(<Text variant="light">Light text</Text>);
    const el = screen.getByText("Light text");
    expect(el).toHaveClass("text-text-light");
  });

  it("accepts a custom as prop", () => {
    render(<Text as="span">Span text</Text>);
    const el = screen.getByText("Span text");
    expect(el.tagName).toBe("SPAN");
  });
});

describe("Label", () => {
  it("renders children in a span by default", () => {
    render(<Label>Label text</Label>);
    const el = screen.getByText("Label text");
    expect(el.tagName).toBe("SPAN");
  });

  it("applies mono and uppercase classes", () => {
    render(<Label>Label</Label>);
    const el = screen.getByText("Label");
    expect(el).toHaveClass("font-mono");
    expect(el).toHaveClass("uppercase");
  });

  it("accepts a custom as prop", () => {
    render(<Label as="p">Custom Label</Label>);
    const el = screen.getByText("Custom Label");
    expect(el.tagName).toBe("P");
  });
});
