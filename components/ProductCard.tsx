import Image from "next/image";
import Link from "next/link";
import { Badge } from "./UI/Badge";
import type { Product } from "@/config/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.status === "coming-soon";
  const badgeClassName = product.region?.includes("Adirondacks") ? "max-w-[140px] truncate" : "";
  const imageClassName = isComingSoon ? "object-contain p-4" : "object-cover";

  const cardContent = (
    <div className="flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-[#FAFAF8]">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={imageClassName}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        )}
        {isComingSoon && (
          <div className="absolute left-3 top-3">
            <Badge>Coming Soon</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-[#2F4F3A]">{product.name}</h3>
          {product.price && !isComingSoon && (
            <span className="text-sm font-semibold text-[#C5A45A]">{product.price}</span>
          )}
        </div>
        <p className="text-sm text-[#2A2A2A]">{product.subtitle}</p>
        <div className="mt-auto flex flex-wrap gap-2 text-xs text-[#2A2A2A]">
          {product.region && (
            <Badge variant="outline" className={badgeClassName}>
              {product.region}
            </Badge>
          )}
          {product.activity && (
            <Badge variant="outline" className={badgeClassName}>
              {product.activity}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );

  if (isComingSoon) {
    return (
      <div className="overflow-hidden rounded-xl border border-[#2F4F3A] bg-[#FAFAF8] shadow-card">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block overflow-hidden rounded-xl border border-[#2F4F3A] bg-[#FAFAF8] shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#C5A45A] hover:shadow-lg"
    >
      {cardContent}
    </Link>
  );
}
