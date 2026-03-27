import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layout/header";

vi.mock("next/link", () => ({
  default: ({
    href,
    className,
    children,
  }: {
    href: string;
    className?: string;
    children: React.ReactNode;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  it("renders the site name", () => {
    render(<Header />);
    expect(screen.getByText("Toni")).toBeInTheDocument();
  });

  it("renders the CTA link", () => {
    render(<Header />);
    expect(screen.getByText("Let's talk")).toBeInTheDocument();
  });

  it("site name links to home", () => {
    render(<Header />);
    const homeLink = screen.getAllByRole("link")[0];
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("CTA links to contact anchor", () => {
    render(<Header />);
    const ctaLink = screen.getByText("Let's talk").closest("a");
    expect(ctaLink).toHaveAttribute("href", "/#contact");
  });

  it("renders as a header element", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
