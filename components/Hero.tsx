import { Button } from "./UI/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10">
      <div className="container relative flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Outdoor Planners, Guides & Resources
          </p>
          <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-slate-700 md:text-xl">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10" />
            <div>
              <p className="text-sm font-semibold text-primary">Trip Planning Made Simple</p>
              <p className="text-sm text-slate-600">
                Structured planners so you can focus on the hike.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-background p-4 text-sm text-slate-700">
            Templates, checklists, meal plans, and safety notes tailored for
            New England adventures.
          </div>
        </div>
      </div>
    </section>
  );
}
