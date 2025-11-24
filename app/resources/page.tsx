import { Hero } from "@/components/Hero";
import { ResourceLibrary } from "@/components/ResourceLibrary";

export const metadata = {
  title: "Trail Logic Studio Resources",
};

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title="Trail Logic Resources"
        subtitle="Free guides, tips, and planning tools."
        primaryCta={{ label: "Browse Products", href: "/products" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <ResourceLibrary />
    </>
  );
}
