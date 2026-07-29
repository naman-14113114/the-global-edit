import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import EditorialHeader from "@/components/EditorialHeader";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | UK Beauty Technology Guides`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "UK consumer guides for assessing beauty-technology claims, specifications, instructions, warranties and seller information.",
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-[#FAFAFA] text-[#1A1A1A] selection:bg-stone-200">
        <a
          href="#main-content"
          className="fixed left-3 top-3 z-[100] -translate-y-24 bg-stone-950 px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <EditorialHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
