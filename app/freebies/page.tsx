import Link from "next/link";
import { HeroBanner } from "@/components/HeroBanner";
import { getAllFreebies } from "@/lib/freebies";

export default function FreebiesPage() {
  const freebies = getAllFreebies();

  return (
    <div className="flex flex-col gap-8">
      <HeroBanner
        eyebrow="FREE GUIDES"
        title="Trail Logic Freebies"
        subtitle="Download simple, practical outdoor planning tools."
        image="/branding/TrailLogic_Section.png"
        imageHeight={150}
      />

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A45A]">
              Trail Logic Studio
            </p>
            <h2 className="text-2xl font-bold text-[#1F3325]">Freebies</h2>
            <p className="text-sm text-[#1F3325]/80">
              Quick-hit guides you can download or read online. Simple, field-ready, and beginner friendly.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freebies.map((freebie) => (
            <article
              key={freebie.slug}
              className="flex h-full flex-col justify-between rounded-xl border border-[#C5A45A]/40 bg-[#FAFAF8] shadow-sm"
            >
              <div className="space-y-2 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C5A45A]">
                  Freebie
                </p>
                <h3 className="text-lg font-bold text-[#1F3325]">{freebie.title}</h3>
                <p className="text-sm leading-relaxed text-[#1F3325]/80 line-clamp-4">
                  {freebie.description}
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-[#C5A45A]/30 bg-white p-5">
                <Link
                  href={`/freebies/${freebie.slug}.pdf`}
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-[#1F3325] px-4 py-2 text-sm font-semibold text-[#FAFAF8] shadow hover:bg-[#16271c]"
                >
                  Download PDF
                </Link>
                <Link
                  href={`/freebies/${freebie.slug}`}
                  className="text-sm font-semibold text-[#1F3325] underline decoration-[#C5A45A] decoration-2 underline-offset-4 hover:text-[#16271c]"
                >
                  Read Online
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
