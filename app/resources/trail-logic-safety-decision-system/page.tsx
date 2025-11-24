import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/UI/Button";

export const metadata = {
  title: "TrailLogic Safety Decision System | Flowchart",
  description: "Printable, minimalist go/hold decision flow for trip safety and camp checks.",
};

export default function TrailLogicSafetyFlow() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-12">
      <header className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Safety Flowchart
        </p>
        <h1 className="text-3xl font-bold text-primary">TrailLogic Safety Decision System</h1>
        <p className="text-base text-text/80">
          A clear, vertical go/hold decision tree covering pre-trip prep through end-of-day review.
          Optimized for A4 printing with a clean forest-green style.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button href="/flowcharts/traillogic-safety-decision-system.svg" download>
            Download SVG (A4)
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            className="border border-[#C5A45A] text-[#2F4F3A] hover:bg-[#F4F1EB]"
          >
            Request edits
          </Button>
        </div>
      </header>

      <section className="space-y-4 rounded-2xl border border-[#C5A45A]/60 bg-[#FAFAF8] p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-primary">How to use</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-text">
          <li>Print on A4 or keep the SVG handy on mobile; boxes hold each question, arrows mark Yes/No paths.</li>
          <li>Follow the vertical flow: Pre-Trip Check → Trailhead Start Check → On-Trail Conditions → Elevation &amp; Timing → Ridgeline Decision → Injury/Issue → Camp Safety → End-of-Day Review.</li>
          <li>No-path boxes give immediate mitigation steps so teams can pause, reroute, or exit early.</li>
        </ul>
      </section>

      <div className="overflow-hidden rounded-2xl border border-[#C5A45A]/60 bg-white shadow">
        <Link
          href="/flowcharts/traillogic-safety-decision-system.svg"
          className="block bg-[#E6F1EB] p-3 text-center text-sm font-semibold text-primary hover:bg-[#d7e7dc]"
        >
          Open high-resolution SVG
        </Link>
        <div className="relative h-[900px] w-full bg-[#F7FBF6]">
          <Image
            src="/flowcharts/traillogic-safety-decision-system.svg"
            alt="TrailLogic Safety Decision System flowchart"
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
