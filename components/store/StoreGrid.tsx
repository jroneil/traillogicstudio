import { ProductCard } from "./ProductCard";
import type { ProductFrontmatter } from "@/lib/products";

type StoreGridProps = {
  products: Array<{ slug: string; frontmatter: ProductFrontmatter }>;
};

export function StoreGrid({ products }: StoreGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} slug={product.slug} frontmatter={product.frontmatter} />
      ))}
    </div>
  );
}
