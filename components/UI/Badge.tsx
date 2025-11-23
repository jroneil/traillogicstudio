import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";
  const styles =
    variant === "outline"
      ? "border border-border text-primary"
      : "bg-primary/10 text-primary";

  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}
