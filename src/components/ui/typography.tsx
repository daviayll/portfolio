import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef, type ElementType } from "react";

/* ─── Heading ─── */

type HeadingLevel = "display" | "h1" | "h2" | "h3";

const headingStyles: Record<HeadingLevel, string> = {
  display:
    "font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight",
  h1: "font-serif text-[3rem] leading-[1.15] tracking-tight",
  h2: "font-serif text-[2.25rem] leading-[1.2]",
  h3: "font-serif text-[1.5rem] leading-[1.3]",
};

const headingTags: Record<HeadingLevel, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  level?: HeadingLevel;
  as?: ElementType;
};

export function Heading({
  level = "h2",
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = as ?? headingTags[level];
  return (
    <Tag className={cn(headingStyles[level], className)} {...props}>
      {children}
    </Tag>
  );
}

/* ─── Text ─── */

type TextVariant = "body" | "muted" | "light";

const textStyles: Record<TextVariant, string> = {
  body: "font-sans text-lg leading-relaxed text-text",
  muted: "font-sans text-lg leading-relaxed text-text-muted",
  light: "font-sans text-lg leading-relaxed text-text-light",
};

type TextProps = ComponentPropsWithoutRef<"p"> & {
  variant?: TextVariant;
  as?: ElementType;
};

export function Text({
  variant = "body",
  as: Tag = "p",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag className={cn(textStyles[variant], className)} {...props}>
      {children}
    </Tag>
  );
}

/* ─── Label ─── */

type LabelProps = ComponentPropsWithoutRef<"span"> & {
  as?: ElementType;
};

export function Label({
  as: Tag = "span",
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <Tag
      className={cn(
        "font-mono text-sm tracking-wide uppercase text-text-muted",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
