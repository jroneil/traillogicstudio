Perfect — here is a **clean, self-contained, copy-paste-ready spec** written *exactly* in the format Codex understands.
This avoids all the back-and-forth and gives you a **single authoritative blueprint** to generate your full Trail Logic Studio website using Next.js 16 + Tailwind 4.

---

# ✅ **Trail Logic Studio — Full Website Specification (Codex-Ready)**

*(Copy/paste this entire spec directly into Codex or your AI IDE.)*

---

# 🏔 **PROJECT NAME**

**Trail Logic Studio — Multi-Product Outdoor Planning Website**

---

# 🎯 **PRIMARY GOAL**

Create a **fast, clean, multi-product marketing and storefront site** for Trail Logic Studio using:

* **Next.js 16 (App Router)**
* **TypeScript**
* **Tailwind CSS v4**
* **Static generation**
* **No backend**
* **Config-driven product system**

The website must support **multiple digital products**, each with its own page, gallery, and purchase links.

---

# 🧱 **TECH STACK REQUIREMENTS**

1. **Next.js 16**

   * App Router (`app/` directory)
   * Static export capable (`output: export`)
   * SEO-friendly layout

2. **Tailwind CSS 4**

   * Custom theme colors
   * Responsive utility classes

3. **TypeScript throughout**

4. **No server, no database**

   * All products come from a `products.ts` config file.

5. **Deployable to Vercel**
   (static or hybrid)

---

# 📁 **PROJECT STRUCTURE**

Codex must generate this folder tree:

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                         (Home)
│   ├── products/
│   │   ├── page.tsx                     (All products)
│   │   └── [slug]/
│   │       └── page.tsx                 (Product detail)
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── resources/
│   │   └── page.tsx                     (Optional blog/resources)
│   └── not-found.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   ├── Hero.tsx
│   ├── FeatureGrid.tsx
│   ├── ComingSoon.tsx
│   └── UI/ (buttons, badges, cards)
│
├── config/
│   └── products.ts                      (Main product registry)
│
├── public/
│   └── products/                        (Product images)
│
├── styles/
│   └── globals.css
│
└── tailwind.config.ts
```

---

# 🎨 **DESIGN SYSTEM (TAILWIND 4)**

Codex must configure Tailwind with these colors:

```ts
theme: {
  extend: {
    colors: {
      primary: "#2D5A4A",       // Trail Logic green
      "primary-dark": "#23463A",
      accent: "#F6AD55",        // muted orange
      background: "#F7FAFC",
      text: "#1F2933",
      border: "#E2E8F0",
    }
  }
}
```

Typography:

* Headings: bold sans-serif
* Body: clean sans-serif

Spacing:

* Modern, airy layout
* Consistent 16–24px vertical rhythm

---

# 🛒 **PRODUCT SYSTEM**

Codex must create this file:

`config/products.ts`

```ts
export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string[];
  features: string[];
  image: string;          // primary thumbnail
  gallery: string[];      // optional preview pages
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
    image: "/products/wm-cover.png",
    gallery: [
      "/products/wm-1.png",
      "/products/wm-2.png",
      "/products/wm-3.png",
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
    image: "/products/adk-coming.png",
    gallery: [],
    tags: ["backpacking", "adirondacks"],
    status: "coming-soon",
  }
];
```

This system must allow **infinite new products** (VT, Maine, Adirondacks, Canoeing, Bikepacking, Winter).

---

# 🧩 **PAGE REQUIREMENTS**

## 1. **Home Page (`/`)**

Sections Codex must build:

### **Hero**

* Big headline: “Trail Logic Studio”
* Subheadline: “Outdoor Planners, Guides & Resources”
* CTA buttons:

  * View Products → `/products`
  * Buy Planner → first product’s `etsyUrl`

### **Featured Product**

* Pull from PRODUCTS[0]

### **Collections**

Cards for Regions + Activities (auto-generated from product data)

### **Why Trail Logic Studio?**

3-card grid:

* Plan
* Pack
* Hike Confidently

### **Coming Soon**

Show products with `status: "coming-soon"`

---

## 2. **Product Listing Page (`/products`)**

Codex must:

* Render a grid of all products
* Show “Coming Soon” tags
* Disabled links for coming-soon items
* Filters (region, activity, tag) optional placeholder components

---

## 3. **Dynamic Product Detail Page (`/products/[slug]`)**

Codex must:

* Use `generateStaticParams()`
* Show hero header with title + subtitle
* Purchase buttons:

  * Buy on Etsy (primary)
  * Buy on Gumroad (secondary)
* Features list
* Description paragraphs
* Image gallery
* “Perfect For” subsection
* If `coming-soon`, show “Coming Soon” overlay section

---

## 4. **About Page (`/about`)**

A simple brand story page:

* Trail Logic Studio mission
* Why planners exist
* Focus on White Mountains / New England
* What’s coming next

---

## 5. **Contact Page (`/contact`)**

Contact form (no backend):

* Name
* Email
* Message
* Submit → shows “Email us at [info@TrailLogicStudio.com](mailto:info@TrailLogicStudio.com)”

---

## 6. **Resources Page (`/resources`)**

Optional for now:

* Placeholder grid
* “Articles and guides coming soon”

---

## 7. **404 Page**

Trail-themed:

“Trail not found.”
“Return to basecamp.”

---

# 🧱 **COMPONENT REQUIREMENTS**

Codex must implement:

### `Header.tsx`

* Navbar + mobile menu

### `Footer.tsx`

* Full-width footer
* © year Trail Logic Studio · TrailLogicStudio.com

### `ProductCard.tsx`

* Card with image, name, subtitle, coming-soon badge

### `ProductGallery.tsx`

* Flex/slider of product images

### `Hero.tsx`

* Reusable hero section w/ banner background

### `FeatureGrid.tsx`

* 3-card grid for “Plan / Pack / Hike Confidently”

---

# ⚙️ **FUNCTIONAL REQUIREMENTS**

Codex must ensure:

* Lighthouse score > 90 mobile/desktop
* Fully responsive
* No console errors
* Clean, modern layout
* Easily expandable product list
* Static site output

---

# 🚀 **END OF SPEC**


