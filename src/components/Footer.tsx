import Link from "next/link";
import {
  EDITORIAL_EMAIL,
  IDENTITY_IS_CONFIGURED,
  OPERATOR_NAME,
  SITE_NAME,
} from "@/lib/site";

const editorialLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/corrections", label: "Corrections" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-stone-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.3fr_0.8fr_0.8fr] md:px-8 md:py-16">
        <div>
          <h2 className="font-serif text-2xl uppercase tracking-[0.14em] text-stone-100">
            The <span className="font-light italic">Global</span> Edit
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-stone-400">
            A UK consumer publication explaining how to assess beauty-technology
            claims, specifications, instructions and seller terms. We do not
            perform laboratory or clinical testing.
          </p>
          {IDENTITY_IS_CONFIGURED ? (
            <p className="mt-5 text-sm text-stone-400">
              Published by {OPERATOR_NAME}.{" "}
              <a
                href={`mailto:${EDITORIAL_EMAIL}`}
                className="underline decoration-stone-600 underline-offset-4 hover:text-white"
              >
                {EDITORIAL_EMAIL}
              </a>
            </p>
          ) : (
            <p className="mt-5 max-w-xl border-l-2 border-amber-500 pl-4 text-xs leading-5 text-amber-200">
              Publisher identity and a domain-based contact email must be
              configured before this site is advertised publicly.
            </p>
          )}
        </div>

        <nav aria-label="Editorial links">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
            Publication
          </h3>
          <ul className="mt-4 space-y-3">
            {editorialLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-stone-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal links">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
            Legal
          </h3>
          <ul className="mt-4 space-y-3">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-stone-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-stone-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>General consumer information, not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
