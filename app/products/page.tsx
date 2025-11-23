import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/UI/Badge";
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
    <div className="section">
      <div className="container space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Products</p>
            <h1 className="text-3xl font-bold text-text">Planners & Guides</h1>
            <p className="max-w-2xl text-slate-700">
              Digital downloads for hikers who want structured, confidence-building planning tools.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-700">
            <Badge variant="outline">Filters coming soon</Badge>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-slate-600">
          {regions.map((region) => (
            <Badge key={region}>{region}</Badge>
          ))}
          {activities.map((activity) => (
            <Badge key={activity}>{activity}</Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
