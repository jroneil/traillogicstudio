import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const base = "inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold tracking-tight";
  const styles =
    variant === "outline"
      ? "border border-accent bg-surface text-primary"
      : "border border-accent bg-accent/20 text-primary";

  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}
