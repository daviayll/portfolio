import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  arrow?: boolean;
};

export function Button({
  href,
  arrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-y-0.5"
        >
          &darr;
        </span>
      )}
    </>
  );

  const styles = cn(
    "group relative inline-flex items-center font-sans text-base",
    "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent",
    "after:w-full after:origin-left after:transition-transform after:duration-300",
    "hover:after:scale-x-110",
    "transition-colors duration-300 hover:text-accent",
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={styles}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} {...props}>
      {content}
    </Link>
  );
}
