"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./UI/Button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-surface/95 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-primary">
          Trail Logic Studio
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-primary transition hover:text-primary-dark hover:underline hover:underline-offset-4 hover:decoration-accent"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/products" variant="primary" className="text-sm">
            View Products
          </Button>
        </nav>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-primary" />
            <span className="block h-0.5 w-6 bg-primary" />
            <span className="block h-0.5 w-6 bg-primary" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/products" className="w-full justify-center">
              Shop Products
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
