import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

vi.mock("next/link", () => ({
  default: ({
    href,
    className,
    children,
    ...props
  }: {
    href: string;
    className?: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ),
}));

describe("Button", () => {
  describe("internal link", () => {
    it("renders children", () => {
      render(<Button href="/about">About</Button>);
      expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("uses next/link for internal hrefs", () => {
      render(<Button href="/about">About</Button>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/about");
    });

    it("does not set target or rel for internal links", () => {
      render(<Button href="/about">About</Button>);
      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("target");
      expect(link).not.toHaveAttribute("rel");
    });

    it("shows arrow when arrow prop is set", () => {
      render(<Button href="/about" arrow>About</Button>);
      expect(screen.getByText("About")).toBeInTheDocument();
      // Arrow is rendered as ↓ (darr entity)
      const link = screen.getByRole("link");
      expect(link.textContent).toContain("↓");
    });
  });

  describe("external link", () => {
    it("opens in new tab for http hrefs", () => {
      render(<Button href="https://example.com">External</Button>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renders as plain <a> for external links", () => {
      render(<Button href="https://example.com">External</Button>);
      const link = screen.getByRole("link");
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "https://example.com");
    });
  });

  describe("mailto link", () => {
    it("does not open in new tab for mailto", () => {
      render(<Button href="mailto:hello@example.com">Email</Button>);
      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("target");
      expect(link).not.toHaveAttribute("rel");
    });

    it("renders with correct href", () => {
      render(<Button href="mailto:hello@example.com">Email</Button>);
      expect(screen.getByRole("link")).toHaveAttribute(
        "href",
        "mailto:hello@example.com"
      );
    });
  });

  it("passes additional className", () => {
    render(<Button href="/about" className="extra-class">About</Button>);
    expect(screen.getByRole("link")).toHaveClass("extra-class");
  });
});
