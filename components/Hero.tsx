import { Button } from "./UI/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const heroBackground =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80";

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative h-[320px] w-full overflow-hidden bg-primary md:h-[350px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/50 to-transparent" aria-hidden />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-surface">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Trail Logic Studio</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-lg text-surface/90 md:text-xl">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
