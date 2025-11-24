import { Button } from "./UI/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/branding/TrailLogic_Hub.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F14]/95 via-[#0F1F14]/85 to-[#0F1F14]/60" />

      <div className="container relative flex flex-col gap-8 py-16 text-[#FAFAF8] md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A45A]">
            Outdoor Planners, Guides & Resources
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="text-lg text-[#E8E3D7] md:text-xl">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="secondary"
                className="border-[#C5A45A] bg-[#C5A45A]/15 text-[#FDFBF7] hover:border-[#FDFBF7] hover:bg-[#C5A45A]/30"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-sm text-[#FDFBF7] shadow-card backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#C5A45A]/25" />
            <div>
              <p className="text-sm font-semibold text-[#FDFBF7]">Trip Planning Made Simple</p>
              <p className="text-sm text-[#E8E3D7]">
                Structured planners so you can focus on the hike.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-[#0F1F14]/60 p-4 text-sm text-[#E8E3D7]">
            Templates, checklists, meal plans, and safety notes tailored for New England adventures.
          </div>
        </div>
      </div>
    </section>
  );
}
