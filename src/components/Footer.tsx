import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const editorialLinks = [
  { href: "/guides", label: "All guides" },
  { href: "/about", label: "About" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/corrections", label: "Corrections" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.35fr_0.8fr_0.8fr] md:px-8 md:py-16">
        <div>
          <h2 className="font-serif text-2xl font-bold tracking-[-0.03em]">
            The Global Edit
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-surface/70">
            Original practical-living guides for the home, travel and clothing
            care. No product sales, affiliate links, paid rankings or lead capture.
          </p>
        </div>

        <nav aria-label="Editorial links">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/65">
            Publication
          </h3>
          <ul className="mt-4 space-y-3">
            {editorialLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal links">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/65">
            Legal
          </h3>
          <ul className="mt-4 space-y-3">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-surface/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-surface/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Independent, non-commercial editorial information.</p>
        </div>
      </div>
    </footer>
  );
}
