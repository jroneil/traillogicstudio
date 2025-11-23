import Link from "next/link";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-primary">Trail Logic Studio</p>
          <p className="text-sm text-slate-600">
            Outdoor planners, guides, and resources.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-text">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Trail Logic Studio · TrailLogicStudio.com
        </p>
      </div>
    </footer>
  );
}
