import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

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

vi.mock("motion/react", () => ({
  motion: {
    div: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <div className={className}>{children}</div>,
  },
  useReducedMotion: () => true,
}));

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Your e-commerce is growing/i)
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/I help e-commerce businesses replace the chaos/i)
    ).toBeInTheDocument();
  });

  it("renders the label", () => {
    render(<Hero />);
    expect(screen.getByText(/E-commerce automation/i)).toBeInTheDocument();
  });

  it("renders the CTA link", () => {
    render(<Hero />);
    const cta = screen.getByRole("link");
    expect(cta).toHaveAttribute("href", "/#process");
    expect(cta.textContent).toContain("See how it works");
  });
});
