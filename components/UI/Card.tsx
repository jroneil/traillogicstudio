import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      {children}
    </div>
  );
}
