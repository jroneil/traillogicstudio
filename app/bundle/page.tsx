import Image from "next/image";
import { HeroBanner } from "@/components/HeroBanner";
import { Badge } from "@/components/UI/Badge";
import { Button } from "@/components/UI/Button";
import { PRODUCTS } from "@/config/products";

const freebies = [
  {
    title: "Holiday Trail Checklist",
    description: "Printable prep list with cold-weather reminders, gifting deadlines, and backcountry safety cues.",
    image: "/bundle/freebie-checklist.svg",
    gumroadUrl: "#",
    tag: "Freebie",
  },
  {
    title: "Campfire Cocoa Recipes",
    description: "Three cozy camp beverages and trail snacks you can batch prep for a long-weekend overnighter.",
    image: "/bundle/freebie-recipes.svg",
    gumroadUrl: "#",
    tag: "Freebie",
  },
  {
    title: "Trail Sticker Sheet",
    description: "Printable stickers to dress up your planner pages, water bottles, and holiday gear gifts.",
    image: "/bundle/freebie-sticker.svg",
    gumroadUrl: "#",
    tag: "Freebie",
  },
];

const plannerCards = PRODUCTS.filter((product) => product.status === "available").map((product) => ({
  title: product.name,
  subtitle: product.subtitle,
  description:
    product.description?.[0] ?? "Structured planning templates crafted for confident backcountry adventures.",
  image: product.image,
  gumroadUrl: product.gumroadUrl ?? "#",
  tag: product.region ?? "Planner",
  price: product.price,
}));

const testimonials = [
  {
    quote: "The planner took all the guesswork out of my first winter overnight. The checklists are gold.",
    name: "Morgan L.",
    detail: "New Hampshire weekend hiker",
  },
  {
    quote: "Love the format—it's clear, thoughtful, and makes sharing plans with partners way easier.",
    name: "Priya D.",
    detail: "Backpacking trip organizer",
  },
  {
    quote: "The freebies are such a nice touch. Perfect for gifting the bundle to my trail crew.",
    name: "Carlos E.",
    detail: "Trail Logic supporter",
  },
];

export const metadata = {
  title: "Christmas Adventure Bundle",
  description:
    "Holiday-ready bundle featuring Trail Logic planners, seasonal freebies, and Gumroad checkout buttons for fast gifting.",
};

export default function ChristmasAdventureBundlePage() {
  return (
    <div className="bg-[#F4F1EB]">
      <HeroBanner
        eyebrow="LIMITED HOLIDAY OFFER"
        title="Christmas Adventure Bundle"
        subtitle="Bundle our most-loved planners with three festive freebies—perfect for gifting trail time."
        image="/bundle/christmas-hero.svg"
        imageHeight={260}
      >
        <Button className="bg-[#C5A45A] text-[#1F3325] hover:bg-[#B9903E]" href="#bundle-purchase">
          Buy on Gumroad
        </Button>
        <Button href="#bundle-grid" variant="secondary" className="border-[#C5A45A] text-[#1F3325] hover:bg-[#E7E4D9]">
          See what&apos;s inside
        </Button>
      </HeroBanner>

      <section id="bundle-grid" className="section">
        <div className="container space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#2F4F3A]">Bundle contents</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#2F4F3A]">Every planner plus holiday freebies</h2>
            <p className="text-sm text-[#2A2A2A] md:text-base">
              Get the complete Trail Logic toolkit with instant Gumroad delivery. Download planners, print the freebies, and
              hit the trail with confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...plannerCards, ...freebies].map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#2F4F3A] bg-[#FAFAF8] shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E7E4D9]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-200 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute left-4 top-4">
                    <Badge className="bg-[#1F3325] text-[#FAFAF8]">{item.tag}</Badge>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-[#2F4F3A]">{item.title}</h3>
                      {"price" in item && item.price && (
                        <span className="text-sm font-semibold text-[#C5A45A]">{item.price}</span>
                      )}
                    </div>
                    {"subtitle" in item && item.subtitle && (
                      <p className="text-sm font-semibold text-[#2A2A2A]">{item.subtitle}</p>
                    )}
                    <p className="text-sm leading-relaxed text-[#2A2A2A]">{item.description}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <Button
                      href={(item as { gumroadUrl: string }).gumroadUrl}
                      className="bg-[#2F4F3A] text-[#FAFAF8] hover:bg-[#1F3325]"
                    >
                      Gumroad Purchase
                    </Button>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#C5A45A]">Instant PDF</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#1F3325]" id="bundle-purchase">
        <div className="container grid gap-8 lg:grid-cols-[1.3fr,1fr] lg:items-center">
          <div className="space-y-4 text-[#FAFAF8]">
            <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#C5A45A]">Holiday checkout</p>
            <h3 className="text-3xl font-semibold tracking-tight">Gift the Christmas Adventure Bundle</h3>
            <p className="text-sm leading-relaxed text-[#E7E4D9] md:text-base">
              One Gumroad link unlocks every planner, checklist, recipe card, and sticker sheet. Send it to a trail friend or
              download instantly for your own pack.
            </p>
            <ul className="grid gap-2 text-sm text-[#E7E4D9] md:text-base">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#C5A45A]" />Instant digital delivery</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#C5A45A]" />Printable and tablet-friendly layouts</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#C5A45A]" />Bonus freebies included automatically</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#C5A45A] text-[#1F3325] hover:bg-[#B9903E]" href="#">
                Buy Bundle on Gumroad
              </Button>
              <Button variant="secondary" className="border-[#C5A45A] bg-transparent text-[#FAFAF8] hover:bg-[#2F4F3A]" href="#bundle-grid">
                Preview items
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-[#FAFAF8] p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#2F4F3A]">Bundle value</p>
                <h4 className="text-2xl font-bold text-[#2F4F3A]">$48.00+</h4>
                <p className="text-sm text-[#2A2A2A]">Planners + freebies</p>
              </div>
              <Badge className="bg-[#1F3325] text-[#FAFAF8]">Holiday Deal</Badge>
            </div>
            <div className="grid gap-3 text-sm text-[#2A2A2A]">
              <div className="flex items-center justify-between rounded-lg bg-[#F4F1EB] p-3">
                <span>Overnight Backpacking Planner — White Mountains</span>
                <span className="font-semibold text-[#C5A45A]">Included</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#F4F1EB] p-3">
                <span>Holiday Trail Checklist</span>
                <span className="font-semibold text-[#C5A45A]">Included</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#F4F1EB] p-3">
                <span>Campfire Cocoa Recipes</span>
                <span className="font-semibold text-[#C5A45A]">Included</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#F4F1EB] p-3">
                <span>Trail Sticker Sheet</span>
                <span className="font-semibold text-[#C5A45A]">Included</span>
              </div>
            </div>
            <p className="text-xs text-[#2A2A2A]">
              Gumroad buttons use placeholder links for now—swap in your live Gumroad checkout URLs when ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#2F4F3A]">Testimonials</p>
            <h3 className="text-3xl font-semibold tracking-tight text-[#2F4F3A]">Trail Logic voices</h3>
            <p className="text-sm text-[#2A2A2A] md:text-base">A few words from hikers who plan with Trail Logic tools.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex h-full flex-col gap-4 rounded-2xl border border-[#2F4F3A] bg-[#FAFAF8] p-5 shadow-sm">
                <p className="text-base leading-relaxed text-[#2A2A2A]">“{testimonial.quote}”</p>
                <div className="mt-auto space-y-1 text-sm text-[#2F4F3A]">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-[#2A2A2A]">{testimonial.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
