import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/UI/Badge";
import { Button } from "@/components/UI/Button";
import { PRODUCTS } from "@/config/products";
import Image from "next/image";

const regions = Array.from(new Set(PRODUCTS.map((product) => product.region).filter(Boolean) as string[]));
const activities = Array.from(
  new Set(PRODUCTS.map((product) => product.activity).filter(Boolean) as string[]),
);

export const metadata = {
  title: "Trail Logic Studio Products",
  description: "Explore all Trail Logic Studio planners, guides, and resources.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EB]">
<section className="relative w-full bg-[#1F3325] overflow-hidden">

  {/* Apply spacing BEFORE container */}
  <div className="py-5 relative">

    {/* LEFT TEXT BLOCK */}
    <div className="container relative z-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A45A]">
        Trail Logic Studio — Backpacking Planners
      </p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF8] md:text-4xl">
        Find your next guide.
      </h1>

      <p className="mt-4 max-w-xl text-sm md:text-base text-[#E7E4D9]">
        Purpose-built planners, guides, and resources crafted for confident backcountry travel.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button className="bg-[#2F4F3A] text-white hover:bg-[#1F3325]" href="/products">
          View All Products
        </Button>
        <Button
          href="/"
          variant="secondary"
          className="border border-[#C5A45A] text-[#FAFAF8] hover:bg-[#B9903E]/30"
        >
          Back to Home
        </Button>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="absolute inset-y-0 right-0 hidden md:flex items-center justify-end pointer-events-none">
      <img
        src="/branding/TrailLogic_Section.png"
        alt="Trail Logic Banner"
        className="w-auto h-[300px] object-contain"
      />
    </div>
  </div>
</section>









      <section className="section">
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-tight text-[#2F4F3A]">Products</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#2F4F3A]">Planners & Guides</h2>
              <p className="max-w-3xl text-sm text-[#2A2A2A] md:text-base">
                Digital downloads for hikers who want structured, confidence-building planning tools. Crafted with
                field-ready checklists, templates, and notes for New England adventures.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-[#2A2A2A]">
              <Badge className="bg-[#FAFAF8]">Filters coming soon</Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-[#2A2A2A]">
            {regions.map((region) => (
              <Badge key={region} className="bg-[#FAFAF8] text-[#2F4F3A]">{region}</Badge>
            ))}
            {activities.map((activity) => (
              <Badge key={activity} className="bg-[#FAFAF8] text-[#2F4F3A]">{activity}</Badge>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}