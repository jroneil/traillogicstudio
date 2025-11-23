export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string[];
  features: string[];
  image: string;
  gallery: string[];
  tags: string[];
  region?: string;
  activity?: string;
  price?: string;
  etsyUrl?: string;
  gumroadUrl?: string;
  status: "available" | "coming-soon";
}

export const PRODUCTS: Product[] = [
  {
    slug: "white-mountains-overnight-planner",
    name: "Overnight Backpacking Planner",
    subtitle: "White Mountain NH Edition",
    description: [
      "45-page printable hiking planner.",
      "Perfect for first overnight hikers in the White Mountains.",
    ],
    features: [
      "Step-by-step trip structure",
      "Pre-trip checklist",
      "Gear packing list",
      "2-day meal plans",
      "Safety & bailout planning",
    ],
    image: "/products/white-mountains/wm-1.jpg",
    gallery: [
      "/products/white-mountains/wm-1.jpg",
      "/products/white-mountains/wm-2.jpg",
      "/products/white-mountains/wm-3.jpg",
    ],
    tags: ["backpacking", "white-mountains"],
    region: "White Mountains",
    activity: "Backpacking",
    price: "$14.99",
    etsyUrl: "#",
    status: "available",
  },
  {
    slug: "adirondacks-overnight-planner",
    name: "Overnight Backpacking Planner",
    subtitle: "Adirondacks Edition",
    description: ["Coming soon…"],
    features: [],
    image: "/branding/trail_logic_logo_badge.png",
    gallery: [],
    tags: ["backpacking", "adirondacks"],
    status: "coming-soon",
  },
];
