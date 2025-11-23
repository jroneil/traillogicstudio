import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/70 bg-surface shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      {children}
    </div>
  );
}
