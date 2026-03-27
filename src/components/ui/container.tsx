import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  wide?: boolean;
};

export function Container({
  wide = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        wide ? "max-w-5xl" : "max-w-3xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
