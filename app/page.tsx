import { ComingSoon } from "@/components/ComingSoon";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
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
      <Hero
        title="Trail Logic Studio"
        subtitle="Backpacking Planners, Guides & Outdoor Resources"
        primaryCta={{ label: "View Products", href: "/products" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
      />

      <section className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Featured Planner</p>
            <h2 className="text-3xl font-semibold tracking-tight text-primary">White Mountains Overnight Planner</h2>
            <p className="text-text/80">
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

      <section className="section bg-background">
        <div className="container space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Collections</p>
              <h2 className="text-3xl font-semibold tracking-tight text-primary">Regions & Activities</h2>
            </div>
            <p className="max-w-xl text-text/80">
              Browse by region or activity. More editions are on the way for Vermont, Maine, Adirondacks, and beyond.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region) => (
              <div
                key={region}
                className="flex items-center justify-between rounded-xl border border-accent/70 bg-surface p-4"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Region</p>
                  <p className="text-base font-semibold tracking-tight text-primary">{region}</p>
                </div>
                <Badge variant="outline">Planner</Badge>
              </div>
            ))}
            {activities.map((activity) => (
              <div
                key={activity}
                className="flex items-center justify-between rounded-xl border border-accent/70 bg-surface p-4"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Activity</p>
                  <p className="text-base font-semibold tracking-tight text-primary">{activity}</p>
                </div>
                <Badge variant="outline">Guide</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Trail Logic Favorites</p>
              <h2 className="text-3xl font-semibold tracking-tight text-primary">Featured Products</h2>
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
