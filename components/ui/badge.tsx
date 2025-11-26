import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide";
  const styles =
    variant === "outline"
      ? "border border-[#C5A45A] text-[#2F4F3A] bg-white"
      : "bg-[#F4F0E6] text-[#2F4F3A]";

  return <span className={cn(base, styles, className)}>{children}</span>;
}
