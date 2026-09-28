import type { Metadata } from "next";
import LedMaskRankingClient from "@/components/LedMaskRankingClient";
import { SITE_NAME, SITE_URL } from "@/lib/brand";

const canonical = `${SITE_URL}/best-led-face-mask-uk-2026`;

export const metadata: Metadata = {
  title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared | The Global Edit",
  description:
    "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face and neck coverage, red light therapy, wrinkles, acne and overall value.",
  keywords: [
    "best led face mask",
    "best light led face mask",
    "best led face mask therapy",
    "best led face mask uk",
    "best led light therapy mask",
    "best led mask for wrinkles",
    "best red light face mask",
    "best at home led face mask",
    "led light face mask therapy",
    "buudy 7 colour led mask",
    "currentbody led mask review",
    "omnilux contour led mask review",
    "shark cryoglow led mask review",
    "dr dennis gross spectralite review",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
    description:
      "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face and neck coverage, red light therapy, wrinkles, acne and overall value.",
    type: "article",
    url: canonical,
    siteName: SITE_NAME,
    images: [
      {
        url: "/img/TOP 5 LED Mask uk.png",
        width: 1536,
        height: 461,
        alt: "Top 5 LED Face Masks UK 2026 Ranked and Compared",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
    description:
      "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face and neck coverage, red light therapy, wrinkles, acne and overall value.",
    images: ["/img/TOP 5 LED Mask uk.png"],
  },
};

export default function BestLedFaceMaskPage() {
  const ledMaskJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/img/TOP%205%20LED%20Mask%20uk.png`,
        },
        description:
          "The Global Edit publishes UK beauty technology comparisons, buyer guides, and specification reviews.",
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-GB",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#author-dr-megan-vincze`,
        name: "Dr. Megan Vincze",
        jobTitle: "Certified Dermatologist & Beauty Technology Expert",
        worksFor: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: [
          "best led face mask",
          "best light led face mask",
          "best led face mask therapy",
          "best led face mask uk",
          "best led light therapy mask",
          "best led mask for wrinkles",
          "best red light face mask",
          "best at home led face mask",
          "led light face mask therapy",
        ],
        inLanguage: "en-GB",
      },
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        mainEntityOfPage: {
          "@id": `${canonical}#webpage`,
        },
        headline: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
        description:
          "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face and neck coverage, red light therapy, wrinkles, acne and overall value.",
        image: `${SITE_URL}/img/TOP%205%20LED%20Mask%20uk.png`,
        author: {
          "@id": `${SITE_URL}/#author-dr-megan-vincze`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        keywords: [
          "best led face mask",
          "best light led face mask",
          "best led face mask therapy",
          "best led face mask uk",
          "best led light therapy mask",
          "best led mask for wrinkles",
          "best red light face mask",
          "best at home led face mask",
          "led light face mask therapy",
        ],
      },
      {
        "@type": "Product",
        "@id": `${canonical}#product-buudy`,
        name: "Buudy 7 Colour LED Mask (Face & Neck)",
        image: `${SITE_URL}/img/57-w.webp`,
        description:
          "7-colour medical-grade LED face and neck therapy mask featuring 830nm near-infrared, cordless rechargeable tap technology, and Buudy AI guided sessions.",
        brand: {
          "@type": "Brand",
          name: "Buudy",
        },
        offers: {
          "@type": "Offer",
          price: "179.00",
          priceCurrency: "GBP",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://buudy.com/pages/buudy-led-mask",
          seller: {
            "@type": "Organization",
            name: "Buudy",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "4000",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Dr. Megan Vincze",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4.9",
            bestRating: "5",
          },
          reviewBody:
            "Buudy 7 Colour LED Mask is our top pick in the UK for 2026. It combines 7 visible light wavelengths plus 830nm near-infrared with built-in neck coverage, offering superior at-home light therapy results at £179.",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#itemlist`,
        name: "Top 5 LED Face Masks UK 2026",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: 5,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Buudy 7 Colour LED Mask",
            url: `${canonical}#product-1`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "CurrentBody LED Mask",
            url: `${canonical}#product-2`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Omnilux LED Mask",
            url: `${canonical}#product-3`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Shark CryoGlow LED Mask",
            url: `${canonical}#product-4`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Dr. Dennis Gross DRx SpectraLite",
            url: `${canonical}#product-5`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best LED face mask in the UK in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Buudy 7 Colour LED Mask ranks #1 in the UK for 2026. It features 7 therapeutic wavelengths plus 830nm near-infrared, built-in neck coverage, cordless tap controls, and a 90-day money-back guarantee at £179.",
            },
          },
          {
            "@type": "Question",
            name: "Does LED light face mask therapy really work for wrinkles and acne?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, clinical research confirms that specific LED wavelengths stimulate collagen synthesis (Red and Near-Infrared light) to reduce wrinkles and eliminate P. acnes bacteria (Blue light) to clear active breakouts.",
            },
          },
          {
            "@type": "Question",
            name: "What makes the Buudy 7 Colour LED Mask different from single-colour masks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While single-colour masks only emit red light, the Buudy 7 Colour LED Mask offers Red, Blue, Green, Cyan, Yellow, Purple, and White light plus 830nm Near-Infrared to target pigmentation, redness, acne, and deep wrinkles in one device.",
            },
          },
          {
            "@type": "Question",
            name: "Why is neck coverage important for LED face mask therapy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The delicate neck and décolletage area ages faster than facial skin. Masks lacking neck coverage leave a noticeable age gap, whereas Buudy includes full face and neck coverage standard.",
            },
          },
          {
            "@type": "Question",
            name: "How often should you use an at-home LED light therapy face mask?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For optimal results, use an at-home LED face mask for 10 to 15 minutes, 3 to 5 times per week. Most users notice visible skin improvements within 4 to 8 weeks.",
            },
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
          __html: JSON.stringify(ledMaskJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LedMaskRankingClient />
    </>
  );
}
