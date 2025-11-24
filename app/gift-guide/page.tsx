import Link from "next/link";
import { getGiftGuideArticles } from "@/lib/gift-guide";

export const metadata = {
  title: "Trail Logic Holiday Gift Guide",
  description:
    "Trail-tested ideas for backpackers, paddlers, and hikers—sorted by budget and adventure style.",
};

export default function GiftGuideIndexPage() {
  const guides = getGiftGuideArticles();

  return (
    <section className="section bg-gray-50">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Holiday 2024</p>
          <h1 className="text-4xl font-bold text-primary">Trail Logic Holiday Gift Guide</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            A curated set of trail-friendly gifts for backpackers, cold-weather hikers, and canoe campers.
            Explore ideas by budget, season, and experience level.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/gift-guide/${guide.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Guide</p>
                <h2 className="text-2xl font-semibold text-primary-dark group-hover:text-primary">{guide.title}</h2>
                <p className="text-sm text-gray-600">{guide.summary || "Ideas, picks, and packing tips."}</p>
              </div>
              <div className="mt-6 flex items-center text-sm font-semibold text-primary group-hover:text-primary-dark">
                Read the guide <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
