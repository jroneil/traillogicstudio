import Image from "next/image";
import Link from "next/link";
import { Badge } from "./UI/Badge";
import type { Product } from "@/config/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.status === "coming-soon";

  const cardContent = (
    <div className="flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-background">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        )}
        {isComingSoon && (
          <div className="absolute left-3 top-3">
            <Badge>Coming Soon</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-text">{product.name}</h3>
          {product.price && !isComingSoon && (
            <span className="text-sm font-semibold text-primary">{product.price}</span>
          )}
        </div>
        <p className="text-sm text-slate-700">{product.subtitle}</p>
        <div className="mt-auto flex flex-wrap gap-2 text-xs text-slate-600">
          {product.region && <Badge variant="outline">{product.region}</Badge>}
          {product.activity && <Badge variant="outline">{product.activity}</Badge>}
        </div>
      </div>
    </div>
  );

  if (isComingSoon) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-card opacity-90">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block overflow-hidden rounded-xl border border-border bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg"
    >
      {cardContent}
    </Link>
  );
}
