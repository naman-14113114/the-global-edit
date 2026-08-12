"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/guides", label: "All guides" },
  { href: "/category/home", label: "Home" },
  { href: "/category/travel", label: "Travel" },
  { href: "/category/clothing-care", label: "Clothing care" },
  { href: "/about", label: "About" },
];

export default function EditorialHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="whitespace-nowrap font-serif text-xl font-bold tracking-[-0.035em] text-ink sm:text-2xl"
          aria-label="The Global Edit home"
        >
          The Global Edit
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/guides"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="text-xs font-bold uppercase tracking-[0.12em] text-muted hover:text-rust aria-[current=page]:text-rust"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
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
          className="absolute left-0 top-full flex w-full flex-col border-b border-line bg-surface px-4 py-3 shadow-[0_14px_24px_oklch(0.24_0.025_58_/_0.08)] lg:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className="border-b border-line px-2 py-4 text-sm font-bold uppercase tracking-[0.12em] text-ink last:border-b-0 aria-[current=page]:text-rust"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
