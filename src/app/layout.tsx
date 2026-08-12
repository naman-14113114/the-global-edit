import type { Metadata } from "next";
import { Albert_Sans, Literata } from "next/font/google";
import "./globals.css";
import EditorialHeader from "@/components/EditorialHeader";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Global Edit | Practical Guides for Everyday Living",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Original, non-commercial guides for organising your home, packing for travel and caring for clothing.",
  applicationName: SITE_NAME,
  category: "Lifestyle",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "The Global Edit | Practical Guides for Everyday Living",
    description:
      "Original, non-commercial guides for organising your home, packing for travel and caring for clothing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${albert.variable} ${literata.variable}`}>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[100] -translate-y-24 bg-ink px-4 py-3 text-sm font-bold text-surface focus:translate-y-0"
        >
          Skip to content
        </a>
        <EditorialHeader />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
