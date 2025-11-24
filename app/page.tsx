import { ComingSoon } from "@/components/ComingSoon";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/UI/Button";
import { Badge } from "@/components/UI/Badge";
import { PRODUCTS } from "@/config/products";

export default function HomePage() {
  const availableProducts = PRODUCTS.filter((product) => product.status === "available");
  const comingSoon = PRODUCTS.filter((product) => product.status === "coming-soon");
  const featured = availableProducts[0];

  const regions = Array.from(
    new Set(PRODUCTS.map((product) => product.region).filter(Boolean) as string[]),
  );
  const activities = Array.from(
    new Set(PRODUCTS.map((product) => product.activity).filter(Boolean) as string[]),
  );

  return (
    <>
      <HeroBanner
        eyebrow="OUTDOOR PLANNERS, GUIDES & RESOURCES"
        title="Trail Logic Studio"
        subtitle="Outdoor Planners, Guides & Resources"
        image="/branding/TrailLogic_Section.png"
      >
        <Button href="/products" className="bg-[#2F4F3A] text-white hover:bg-[#1F3325]">
          View Products
        </Button>
        {featured?.etsyUrl && (
          <Button
            href={featured.etsyUrl}
            variant="secondary"
            className="border border-[#C5A45A] bg-[#C5A45A] text-[#1F3325] hover:border-[#C5A45A] hover:bg-[#B9903E]"
          >
            Buy Planner
          </Button>
        )}
      </HeroBanner>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary">Featured Planner</p>
            <h2 className="text-3xl font-bold text-text">White Mountains Overnight Planner</h2>
            <p className="text-slate-700">
              A 45-page printable planner crafted for first-time overnight hikers in New Hampshire&apos;s White Mountains.
              Plan your route, dial in your gear, and hike with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/products">Explore All Products</Button>
              {featured?.etsyUrl && (
                <Button href={featured.etsyUrl} variant="secondary">
                  Buy on Etsy
                </Button>
              )}
            </div>
          </div>
          {featured && <ProductCard product={featured} />}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Collections</p>
              <h2 className="text-3xl font-bold text-text">Regions & Activities</h2>
            </div>
            <p className="max-w-xl text-slate-700">
              Browse by region or activity. More editions are on the way for Vermont, Maine, Adirondacks, and beyond.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region) => (
              <div
                key={region}
                className="flex items-center justify-between rounded-xl border border-border bg-background p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-primary">Region</p>
                  <p className="text-base font-semibold text-text">{region}</p>
                </div>
                <Badge variant="outline">Planner</Badge>
              </div>
            ))}
            {activities.map((activity) => (
              <div
                key={activity}
                className="flex items-center justify-between rounded-xl border border-border bg-background p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-primary">Activity</p>
                  <p className="text-base font-semibold text-text">{activity}</p>
                </div>
                <Badge variant="outline">Guide</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Trail Logic Favorites</p>
              <h2 className="text-3xl font-bold text-text">Featured Products</h2>
            </div>
            <Button href="/products" variant="secondary">
              View All
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid />
      <ComingSoon products={comingSoon} />
    </>
  );
}
