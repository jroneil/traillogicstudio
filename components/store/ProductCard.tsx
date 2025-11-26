import Image from "next/image";
import { Badge } from "./Badge";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import type { ProductFrontmatter } from "@/lib/products";

export type ProductCardProps = {
  slug: string;
  frontmatter: ProductFrontmatter;
};

export function ProductCard({ slug, frontmatter }: ProductCardProps) {
  const primaryTag = frontmatter.tags?.[0];

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-[#F7F4ED]">
        {frontmatter.cover ? (
          <Image
            src={frontmatter.cover}
            alt={frontmatter.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : null}
        {frontmatter.icon ? (
          <div className="absolute left-4 top-4 rounded-full bg-white/90 p-2 shadow-sm">
            <Image src={frontmatter.icon} alt="" width={32} height={32} />
          </div>
        ) : null}
        {primaryTag ? (
          <div className="absolute right-4 top-4">
            <Badge>{primaryTag}</Badge>
          </div>
        ) : null}
      </div>

      <CardContent className="flex flex-1 flex-col gap-3">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-[#2F4F3A]">{frontmatter.title}</h3>
          <p className="text-sm text-gray-700">{frontmatter.description ?? frontmatter.subtitle}</p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-2 text-xs text-gray-600">
            {frontmatter.tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <LinkButton href={`/store/${slug}`} size="sm" variant="outline">
            View Product
          </LinkButton>
        </div>
      </CardContent>
    </Card>
  );
}
