import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const base = "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium";
  const styles =
    variant === "outline"
      ? "border border-[#C5A45A] text-[#2F4F3A] bg-transparent"
      : "border border-[#C5A45A] bg-[#FAFAF8] text-[#2F4F3A]";

  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}
