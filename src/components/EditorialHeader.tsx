"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/guides/led-face-mask-buying-guide-uk", label: "Buyer guide" },
  { href: "/guides", label: "All guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function EditorialHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#fafafa]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="whitespace-nowrap text-center font-serif text-xl font-black uppercase tracking-[0.14em] text-stone-950 sm:text-2xl"
          aria-label="The Global Edit home"
        >
          The <span className="font-light italic">Global</span> Edit
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="text-xs font-bold uppercase tracking-[0.14em] text-stone-600 transition-colors hover:text-teal-800 aria-[current=page]:text-teal-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center text-stone-900 md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X size={24} strokeWidth={1.7} aria-hidden="true" />
          ) : (
            <Menu size={24} strokeWidth={1.7} aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 top-full flex w-full flex-col border-b border-stone-200 bg-white px-4 py-4 shadow-lg md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className="border-b border-stone-100 px-2 py-4 text-sm font-bold uppercase tracking-[0.14em] text-stone-700 last:border-b-0 aria-[current=page]:text-teal-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
