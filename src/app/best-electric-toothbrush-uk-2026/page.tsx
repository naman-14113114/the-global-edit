import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import { toothbrushProducts } from "@/data/toothbrushes";
import { SITE_NAME, SITE_URL } from "@/lib/brand";

const canonical = `${SITE_URL}/best-electric-toothbrush-uk-2026`;

export const metadata: Metadata = {
  title: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed | The Global Edit",
  description:
    "Compare the five best electric toothbrushes in the UK for 2026 by plaque clearance, battery life, motor acoustics, replacement head costs, and long-term value.",
  keywords: [
    "best electric toothbrush",
    "best electric toothbrush uk",
    "best electric toothbrush uk 2026",
    "best electric toothbrushes uk",
    "top 5 electric toothbrushes",
    "electric toothbrush reviews uk",
    "best electric toothbrush for sensitive gums",
    "miroooo brush x2",
    "miroooo x2 electric toothbrush",
    "oral b io series 6 review",
    "philips sonicare diamondclean 9000",
    "suri pro 2.0 review",
    "suri pro 2.0 electric toothbrush",
    "oral b io3 review",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best electric toothbrushes in the UK for 2026 by plaque clearance, battery life, motor acoustics, replacement head costs, and long-term value.",
    type: "article",
    url: canonical,
    siteName: SITE_NAME,
    images: [
      {
        url: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp",
        width: 1200,
        height: 630,
        alt: "Top 5 Electric Toothbrushes UK 2026 Ranked and Compared",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best electric toothbrushes in the UK for 2026 by plaque clearance, battery life, motor acoustics, replacement head costs, and long-term value.",
    images: ["/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"],
  },
};

export default function BestElectricToothbrushPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed",
        description:
          "A UK dental buyer's guide and comparison of five electric toothbrushes by plaque clearance, battery life, acoustic sound, warranty, and long-term refill head costs.",
        mainEntityOfPage: canonical,
        datePublished: "2026-09-02",
        dateModified: "2026-09-28",
        author: {
          "@type": "Person",
          name: "Dr. Olivia, BDS",
          jobTitle: "Clinical Dental Consultant & Oral Health Specialist",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#top-five`,
        name: "Top 5 Electric Toothbrushes UK 2026",
        numberOfItems: toothbrushProducts.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: toothbrushProducts.map((product) => ({
          "@type": "ListItem",
          position: product.rank,
          name: product.name,
          url: `${canonical}#rank-${product.rank}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Best Electric Toothbrush UK 2026",
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ElectricToothbrushesAdvertorial />
    </>
  );
}
