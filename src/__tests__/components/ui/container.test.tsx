import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "@/components/ui/container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies narrow max-width by default", () => {
    render(<Container data-testid="container">Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("max-w-3xl");
  });

  it("applies wide max-width when wide prop is set", () => {
    render(
      <Container data-testid="container" wide>
        Content
      </Container>
    );
    expect(screen.getByTestId("container")).toHaveClass("max-w-5xl");
  });

  it("passes additional className", () => {
    render(
      <Container data-testid="container" className="extra">
        Content
      </Container>
    );
    expect(screen.getByTestId("container")).toHaveClass("extra");
  });
});
