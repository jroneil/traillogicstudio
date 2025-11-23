import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-primary bg-primary">
      <div className="container flex flex-col gap-4 py-8 text-surface md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/branding/trail_logic_logo_badge.png"
            alt="Trail Logic Studio logo"
            width={20}
            height={20}
            className="rounded"
          />
          <div>
            <p className="text-lg font-semibold tracking-tight">Trail Logic Studio</p>
            <p className="text-sm text-surface/80">Outdoor planners, guides, and resources.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-surface">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent hover:underline hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-surface/80">
          © {new Date().getFullYear()} Trail Logic Studio · TrailLogicStudio.com
        </p>
      </div>
    </footer>
  );
}
