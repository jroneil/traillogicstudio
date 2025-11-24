import Link from "next/link";
import { HeroBanner } from "@/components/HeroBanner";

export const metadata = {
  title: "About Trail Logic Studio",
};

const cardClass = "bg-[#FAFAF8] border border-[#C5A45A] p-6 md:p-10 rounded-xl shadow-sm";

const headingClass = "text-3xl font-semibold text-[#2F4F3A]";

const bodyClass = "text-[#2A2A2A] leading-relaxed";

export default function AboutPage() {
  return (
    <main className="bg-[#F4F1EB] text-[#2A2A2A]">
      <HeroBanner
        eyebrow="ABOUT"
        title="About Trail Logic Studio"
        subtitle="Backpacking Guides Built for Real People"
        showImage={false}
      />

      <section className="mx-auto max-w-5xl space-y-8 px-4 py-12 md:py-16">
        <div className={`${cardClass} space-y-4`}>
          <h2 className={headingClass}>About Trail Logic Studio</h2>
          <p className={bodyClass}>
            Trail Logic Studio creates practical, printable planners for people who love the outdoors. We started on the
            rocky, weather-shifting trails of the White Mountains and expanded to cover the adventures we love most.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className={`${cardClass} space-y-3`}>
            <h2 className={headingClass}>Why we build planners</h2>
            <p className={bodyClass}>
              Great trips start with clear plans. Our templates make it easy to align your route, gear, meals, and safety
              contingencies so you can focus on the experience instead of the logistics.
            </p>
          </div>
          <div className={`${cardClass} space-y-3`}>
            <h2 className={headingClass}>Where we explore</h2>
            <p className={bodyClass}>
              We design each edition for a specific place and activity. The White Mountains edition blends elevation-aware
              pacing, bailout planning, and hut/parking notes that only locals keep in their back pocket.
            </p>
          </div>
        </div>

        <div className={`${cardClass} space-y-3`}>
          <h2 className={headingClass}>Brand Story</h2>
          <p className={bodyClass}>
            Adirondacks, Vermont, Maine, canoe camping, winter travel, bikepacking—we have a long roadmap. Tell us what
            you want to see next, and we&apos;ll prioritize the routes and activities that help the community most.
          </p>
        </div>

        <div className={`${cardClass} flex flex-col gap-4 md:flex-row md:items-center md:justify-between`}>
          <div className="space-y-2">
            <h2 className={headingClass}>Ready to plan your next trip?</h2>
            <p className={bodyClass}>
              Explore our planners and tell us what you want to see next, and we&apos;ll prioritize the routes and activities
              that help the community most.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-lg bg-[#2F4F3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1F3325]"
              href="/products"
            >
              View Planners
            </Link>
            <Link
              className="rounded-lg border border-[#2F4F3A] px-6 py-3 text-sm font-semibold text-[#2F4F3A] transition hover:bg-[#F4F1EB]"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
