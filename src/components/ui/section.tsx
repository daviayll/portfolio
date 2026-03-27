import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  dark?: boolean;
};

export function Section({
  dark = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-24 md:py-32",
        dark ? "bg-bg-dark text-text-light" : "bg-bg text-text",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
