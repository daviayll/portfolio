"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-8 py-5">
        <Link
          href="/"
          className="font-mono text-sm tracking-wide uppercase text-text"
        >
          Toni
        </Link>
        <Link
          href="/#contact"
          className="font-sans text-sm border-b border-accent pb-0.5 transition-colors hover:text-accent"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}
