"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const RESOURCE_ITEMS = [
  {
    slug: "route-planning-basics",
    title: "Route planning basics",
    description: "Step-by-step prompts to map mileage, pacing, elevation, and bailout options before you finalize your itinerary.",
    category: "Guides",
    href: "#route-planning-basics",
  },
  {
    slug: "white-mountains-hut-planning",
    title: "White Mountains hut planning",
    description: "Booking timelines, packing advice, and route tips tailored for AMC and RMC hut overnights in New Hampshire.",
    category: "Trip Notes",
    href: "#white-mountains-hut-planning",
  },
  {
    slug: "layering-for-shoulder-season",
    title: "Layering for shoulder season",
    description: "Dial in breathable, adjustable systems for variable temps, cold summits, and wet forecasts across New England.",
    category: "Gear",
    href: "#layering-for-shoulder-season",
  },
  {
    slug: "navigation-refreshers",
    title: "Navigation refreshers",
    description: "Quick map and compass drills to practice at home plus on-trail habits that keep you oriented in mixed conditions.",
    category: "Skills",
    href: "#navigation-refreshers",
  },
  {
    slug: "meal-planning-for-overnights",
    title: "Meal planning for overnights",
    description: "Printable caloric targets, packable menu ideas, and prep workflows to keep group energy steady on multi-day trips.",
    category: "Planning Tools",
    href: "#meal-planning-for-overnights",
  },
  {
    slug: "winter-prep-checklist",
    title: "Winter prep checklist",
    description: "Systematic gear checks, traction decisions, and safety reminders to transition from fall hikes into snow season.",
    category: "Checklists",
    href: "#winter-prep-checklist",
  },
];

export function ResourceLibrary() {
  const filters = useMemo(
    () => ["All", ...new Set(RESOURCE_ITEMS.map((item) => item.category))],
    [],
  );
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const visibleResources =
    activeFilter === "All"
      ? RESOURCE_ITEMS
      : RESOURCE_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="section bg-white">
      <div className="container space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary">Resource Library</p>
            <h2 className="text-3xl font-bold text-primary">Plan with confidence</h2>
            <p className="max-w-2xl text-text">
              Ready-to-use guides, checklists, and planning tools built for New England hikes. Save your favorites and share
              them with your partners.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`text-sm rounded-md px-3 py-1 border border-[#2F4F3A] bg-[#FAFAF8] text-[#2F4F3A] transition hover:bg-[#F4F1EB] ${
                  activeFilter === filter ? "bg-[#2F4F3A] text-white hover:bg-[#2F4F3A]" : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleResources.map((resource) => (
            <Link
              key={resource.slug}
              href={resource.href}
              className="group block rounded-xl border border-[#C5A45A] bg-[#FAFAF8] p-6 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <article id={resource.slug} className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2F4F3A]">
                    {resource.category}
                  </p>
                  <span className="text-[11px] font-medium text-text">Printable &amp; sharable</span>
                </div>
                <h3 className="text-lg font-semibold text-primary">{resource.title}</h3>
                <p className="text-sm leading-relaxed text-text">{resource.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2F4F3A]">
                  <span>Open resource</span>
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
