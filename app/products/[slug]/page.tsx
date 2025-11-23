import { notFound } from "next/navigation";
import Image from "next/image";
import { ProductGallery } from "@/components/ProductGallery";
import { Button } from "@/components/UI/Button";
import { Badge } from "@/components/UI/Badge";
import { PRODUCTS } from "@/config/products";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | ${product.subtitle} | Trail Logic Studio`,
    description: product.description[0] ?? "Trail Logic Studio product detail",
  };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((item) => item.slug === params.slug);

  if (!product) return notFound();

  const isComingSoon = product.status === "coming-soon";

  return (
    <div className="section">
      <div className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4">
            <Badge variant="outline">{product.region ?? "Trail Logic Studio"}</Badge>
            <h1 className="text-4xl font-bold text-text">{product.name}</h1>
            <p className="text-lg text-slate-700">{product.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              {!isComingSoon && product.etsyUrl && <Button href={product.etsyUrl}>Buy on Etsy</Button>}
              {!isComingSoon && product.gumroadUrl && (
                <Button href={product.gumroadUrl} variant="secondary">
                  Buy on Gumroad
                </Button>
              )}
              {isComingSoon && <Badge>Coming Soon</Badge>}
            </div>
            <div className="grid gap-3 text-slate-700">
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {product.features.length > 0 && (
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-text">What&apos;s inside</h2>
                <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl border border-dashed border-border bg-background p-4 text-sm text-slate-700">
              Perfect for: {product.activity ?? "Outdoor adventures"}
              {product.tags.length > 0 && <span className="ml-2">• {product.tags.join(", ")}</span>}
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-80 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              )}
              {isComingSoon && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Badge className="text-white">Coming Soon</Badge>
                </div>
              )}
            </div>
            {product.gallery.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-text">Gallery</h2>
                <ProductGallery images={product.gallery} />
              </div>
            )}
            <div className="rounded-2xl border border-border bg-white p-5 text-sm text-slate-700 shadow-sm">
              <p className="font-semibold text-text">Details</p>
              <div className="mt-3 grid gap-2">
                {product.region && <span>Region: {product.region}</span>}
                {product.activity && <span>Activity: {product.activity}</span>}
                {product.price && <span>Price: {product.price}</span>}
              </div>
            </div>
          </div>
        </div>

        {isComingSoon && (
          <div className="rounded-2xl border border-dashed border-border bg-white/70 p-6 text-slate-700">
            <h2 className="text-xl font-semibold text-text">We&apos;re building this now</h2>
            <p className="mt-2">
              This edition is in production. Follow along for release updates, and let us know what trails you want covered.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
