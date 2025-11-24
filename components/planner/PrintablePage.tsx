import { ReactNode } from "react";

export interface PrintablePageProps {
  title?: string;
  subtitle?: string;
  footerNote?: string;
  children: ReactNode;
}

export function PrintablePage({ title, subtitle, footerNote, children }: PrintablePageProps) {
  return (
    <div className="mx-auto max-w-5xl bg-slate-50 p-6 print:max-w-none print:bg-white print:p-0">
      <div className="space-y-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 print:rounded-none print:shadow-none print:ring-0">
        {(title || subtitle) && (
          <header className="border-b border-slate-200 pb-4 print:border-slate-300">
            {title && <h1 className="text-2xl font-bold text-slate-900 print:text-black">{title}</h1>}
            {subtitle && <p className="text-sm text-slate-600 print:text-slate-800">{subtitle}</p>}
          </header>
        )}

        <div className="space-y-6 text-slate-900 print:text-black">{children}</div>

        {footerNote && (
          <footer className="border-t border-slate-200 pt-4 text-xs text-slate-600 print:border-slate-300 print:text-slate-800">
            {footerNote}
          </footer>
        )}
      </div>
    </div>
  );
}
