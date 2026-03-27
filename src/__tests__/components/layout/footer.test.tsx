import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/footer";

describe("Footer", () => {
  it("renders a footer element", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("shows copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders the email address", () => {
    render(<Footer />);
    expect(screen.getByText("hello@toni.dev")).toBeInTheDocument();
  });

  it("email is a mailto link", () => {
    render(<Footer />);
    const emailLink = screen.getByRole("link");
    expect(emailLink).toHaveAttribute("href", "mailto:hello@toni.dev");
  });
});
