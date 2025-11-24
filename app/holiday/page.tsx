import Image from "next/image";
import { HolidayPromo } from "@/components/HolidayPromo";
import { HeroBanner } from "@/components/HeroBanner";

export default function HolidayPage() {
  return (
    <main className="space-y-12 pb-16">
      <HeroBanner
        eyebrow="HOLIDAY DROP"
        title="Seasonal Bundles & Trail Gifts"
        subtitle="Limited-time winter graphics, topo-inspired planners, and outdoor-ready checklists for the colder months."
        image="/holiday/holiday-banner.svg"
        imageHeight={200}
      />

      <div className="container mx-auto px-4">
        <HolidayPromo />
      </div>

      <section className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#C5A45A]/40 bg-[#1F3325] p-6 text-[#FAFAF8] shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#2F4F3A]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A45A]">Limited Time</p>
              <p className="text-xl font-semibold">Holiday Sale Badge</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#E8E3D7]">
            Layer the badge on product cards, landing pages, or social graphics. Designed with clean lines, topo texture, and bold contrast.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/holiday/holiday-sale-badge.svg"
              alt="Holiday sale badge"
              width={220}
              height={220}
              className="h-auto w-48"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#C5A45A]/40 bg-[#1F3325] p-6 text-[#FAFAF8] shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#2F4F3A]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A45A]">Backdrop</p>
              <p className="text-xl font-semibold">Snowy Topo Panel</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#E8E3D7]">
            Use this horizontal topo art as a section background or hero accent. Pure vector paths keep it crisp on every screen.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/holiday/holiday-snow-topo.svg"
              alt="Snowy topo background"
              width={1200}
              height={360}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="rounded-2xl border border-[#C5A45A]/40 bg-[#1F3325] p-6 text-[#FAFAF8] shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#2F4F3A]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A45A]">Giftable</p>
              <p className="text-xl font-semibold">Topo Gift Tag</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#E8E3D7]">
            Printable tag artwork for holiday deliveries and trail-ready care packages. Combine with your favorite checklist or route card.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/holiday/holiday-gift-tag.svg"
              alt="Topo gift tag"
              width={360}
              height={220}
              className="h-auto w-full max-w-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
