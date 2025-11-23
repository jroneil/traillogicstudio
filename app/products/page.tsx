import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/UI/Badge";
import { Button } from "@/components/UI/Button";
import { PRODUCTS } from "@/config/products";

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
      <section
        className="relative h-[260px] w-full overflow-hidden bg-[#1F3325] bg-center bg-[length:1200px_auto] md:bg-cover"
        style={{ backgroundImage: "url(/branding/TrailLogic_Section_1500x600.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F14]/90 via-[#0F1F14]/75 to-[#0F1F14]/40" />
        <div className="container relative flex h-full flex-col items-start justify-center gap-4 text-[#FAFAF8]">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A45A]">
              Trail Logic Studio — Backpacking Planners
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Find your next guide.</h1>
            <p className="max-w-2xl text-sm md:text-base">
              Purpose-built planners, guides, and resources crafted for confident backcountry travel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/products" className="bg-[#2F4F3A] text-white hover:bg-[#1F3325]">
              View All Products
            </Button>
            <Button
              href="/"
              variant="secondary"
              className="border border-[#C5A45A] bg-[#C5A45A] text-[#1F3325] hover:border-[#C5A45A] hover:bg-[#B9903E]"
            >
              Back to Home
            </Button>
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
