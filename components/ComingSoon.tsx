import { ProductCard } from "./ProductCard";
import type { Product } from "@/config/products";

export function ComingSoon({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section className="section bg-surface">
      <div className="container space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">On the horizon</p>
          <h2 className="text-3xl font-semibold tracking-tight text-primary">Coming Soon</h2>
          <p className="max-w-2xl text-text/80">
            New regions, activities, and seasons are in development. Tell us what you want to see next.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
