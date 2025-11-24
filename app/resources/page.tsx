import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/UI/Button";
import { ResourceLibrary } from "@/components/ResourceLibrary";

export const metadata = {
  title: "Trail Logic Studio Resources",
};

export default function ResourcesPage() {
  return (
    <>
      <HeroBanner
        eyebrow="OUTDOOR PLANNERS, GUIDES & RESOURCES"
        title="Trail Logic Resources"
        subtitle="Free guides, tips, and planning tools."
        image="/branding/TrailLogic_Section.png"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/products" className="bg-[#2F4F3A] text-white hover:bg-[#1F3325]">
            Browse Products
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            className="border border-[#C5A45A] text-[#FAFAF8] hover:bg-[#B9903E]/30"
          >
            Contact
          </Button>
        </div>
      </HeroBanner>

      <ResourceLibrary />
    </>
  );
}
