import type { Metadata } from "next";
import { StoreGrid } from "@/components/store/StoreGrid";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Store | Trail Logic Studio",
  description: "Outdoor planners, safety guides, and ultralight resources from Trail Logic Studio.",
  openGraph: {
    title: "Trail Logic Studio Store",
    description: "Browse planners, checklists, and safety resources for the trail.",
    url: "/store",
  },
};

export default function StorePage() {
  const products = getAllProducts();

  return (
    <section className="section">
      <div className="container space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2F4F3A]">Trail Logic Studio</p>
          <h1 className="text-4xl font-bold text-[#2F4F3A]">Trail-ready planners and kits</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Build a confident system for your next trip with checklists, safety frameworks, and ready-to-print
            planning pages.
          </p>
        </div>

        <StoreGrid products={products} />
      </div>
    </section>
  );
}
