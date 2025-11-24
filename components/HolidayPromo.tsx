import Image from "next/image";
import React from "react";

export function HolidayPromo() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1F3325] text-[#FAFAF8] shadow-lg">
      <div className="relative">
        <Image
          src="/holiday/holiday-banner.svg"
          alt="Trail Logic Studio holiday banner"
          width={1200}
          height={420}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3325]/85 via-[#1F3325]/55 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-3 px-6 py-10 sm:px-10 md:px-14 lg:px-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A45A]">
            Holiday Sale
          </p>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Seasonal Bundles
          </h2>
          <p className="max-w-xl text-sm text-[#E8E3D7] sm:text-base">
            Limited Time Only — curated outdoor planners, topo-inspired art, and winter-ready checklists for your next adventure.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full bg-[#2F4F3A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAFAF8] shadow-sm">
              Trail Logic Studio
            </span>
            <span className="rounded-full border border-[#C5A45A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A45A]">
              Limited Time Only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
