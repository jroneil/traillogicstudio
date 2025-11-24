import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/UI/Button";
import { PRODUCTS } from "@/config/products";

export const metadata = {
  title: "Trail Logic Studio Pricing",
  description: "See Trail Logic Studio product pricing and Gumroad purchase links.",
};

function buildGumroadLink(slug: string) {
  return `https://gumroad.com/l/${slug}-placeholder`;
}

export default function PricingPage() {
  return (
    <div className="bg-[#F4F1EB]">
      <HeroBanner
        eyebrow="Trail Logic Studio"
        title="Pricing for planners, guides, and field tools"
        subtitle="Explore every Trail Logic Studio product with simple pricing and a Gumroad link placeholder for each checkout."
        image="/branding/TrailLogic_Section.png"
        imageHeight={220}
      >
        <Button
          href="/products"
          className="bg-[#2F4F3A] text-white hover:bg-[#1F3325]"
        >
          View product details
        </Button>
        <Button
          href="/contact"
          variant="secondary"
          className="border border-[#C5A45A] text-[#1F3325] hover:bg-[#B9903E]/30"
        >
          Ask a pricing question
        </Button>
      </HeroBanner>

      <section className="section">
        <div className="container space-y-10">
          <div className="space-y-3 text-[#1F3325]">
            <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#C5A45A]">
              Transparent pricing
            </p>
            <h2 className="text-3xl font-bold">Every Trail Logic product in one place</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[#1F3325]/80">
              Each listing below includes a short description and a placeholder Gumroad checkout link. Use it to preview how your
              customers will purchase while we finalize live Gumroad pages.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((product) => {
              const gumroadLink = product.gumroadUrl ?? buildGumroadLink(product.slug);
              const description = product.description.length > 0
                ? product.description.join(" ")
                : "Details coming soon.";

              return (
                <article
                  key={product.slug}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-[#C5A45A]/40 bg-[#FAFAF8] shadow-sm"
                >
                  <div className="space-y-3 p-6">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C5A45A]">
                      <span>Trail Logic Product</span>
                      <span className="text-[#1F3325]">{product.status === "available" ? product.price ?? "Pricing TBD" : "Coming soon"}</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#1F3325]">{product.name}</h3>
                      {product.subtitle && (
                        <p className="text-sm font-medium text-[#1F3325]/80">{product.subtitle}</p>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-[#1F3325]/80">{description}</p>
                    <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F4F3A]">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white px-3 py-1 text-[#1F3325] shadow-sm"
                        >
                          {tag.replace(/-/g, " ")}
                        </span>
                      ))}
                      {product.region && (
                        <span className="rounded-full bg-white px-3 py-1 text-[#1F3325] shadow-sm">{product.region}</span>
                      )}
                      {product.activity && (
                        <span className="rounded-full bg-white px-3 py-1 text-[#1F3325] shadow-sm">{product.activity}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-[#C5A45A]/30 bg-white p-6">
                    <div className="text-xs leading-relaxed text-[#1F3325]/80">
                      Placeholder Gumroad link for checkout
                    </div>
                    <Button
                      href={gumroadLink}
                      className="bg-[#1F3325] text-[#FAFAF8] hover:bg-[#16271c]"
                    >
                      Open Gumroad placeholder
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
