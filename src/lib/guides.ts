export type GuideSource = {
  title: string;
  publisher: string;
  url: string;
  accessed: string;
};

export type GuidePoint = {
  title: string;
  body: string;
};

export type GuideSection = {
  heading: string;
  intro?: string;
  points: GuidePoint[];
};

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  published: string;
  reviewed: string;
  readingTime: string;
  advertisement?: boolean;
  visual: "checklist" | "specifications" | "claims" | "comfort" | "warranty";
  sections: GuideSection[];
  sources: GuideSource[];
};

const accessed = "29 July 2026";

const asaSource: GuideSource = {
  title: "Face facts: are cosmetic device ads making medicinal claims?",
  publisher: "Advertising Standards Authority",
  url: "https://www.asa.org.uk/news/face-facts-are-your-cosmetic-device-ads-making-medicinal-claims.html",
  accessed,
};

const mhraSource: GuideSource = {
  title: "Medical devices: how to comply with legal requirements in Great Britain",
  publisher: "Medicines and Healthcare products Regulatory Agency",
  url: "https://www.gov.uk/guidance/medical-devices-how-to-comply-with-legal-requirements-in-great-britain",
  accessed,
};

const returnsSource: GuideSource = {
  title: "Accepting returns and giving refunds",
  publisher: "GOV.UK",
  url: "https://www.gov.uk/accepting-returns-and-giving-refunds",
  accessed,
};

const cmaSource: GuideSource = {
  title: "Unfair commercial practices",
  publisher: "Competition and Markets Authority",
  url: "https://www.gov.uk/government/publications/unfair-commercial-practices-cma207/unfair-commercial-practices",
  accessed,
};

export const guides: Guide[] = [
  {
    slug: "led-face-mask-buying-guide-uk",
    title: "LED Face Mask Buying Guide UK: What to Check Before You Choose",
    shortTitle: "LED Face Mask Buying Guide UK",
    description:
      "A neutral UK checklist for comparing cosmetic LED face masks without relying on rankings, medical promises or unsupported performance scores.",
    eyebrow: "UK consumer guide",
    published: "29 July 2026",
    reviewed: "29 July 2026",
    readingTime: "8 minute read",
    advertisement: true,
    visual: "checklist",
    sections: [
      {
        heading: "Start with the purpose stated by the manufacturer",
        intro:
          "The first useful distinction is not price or LED count. It is what the manufacturer says the device is intended to do.",
        points: [
          {
            title: "Cosmetic wording",
            body: "A cosmetic device may be presented for appearance-led use. That does not automatically support claims about treating a health condition.",
          },
          {
            title: "Medicinal wording",
            body: "Claims to treat or prevent a condition can bring different legal and evidence requirements. Check the precise wording rather than relying on a badge or marketing phrase.",
          },
          {
            title: "Instructions take priority",
            body: "Read the supplied instructions, warnings, exclusions and recommended session guidance before deciding whether a device suits you.",
          },
        ],
      },
      {
        heading: "Compare practical features in context",
        intro:
          "Numbers are useful only when brands define and measure them consistently. Treat specification tables as questions to investigate, not automatic proof of quality.",
        points: [
          {
            title: "Fit and coverage",
            body: "Look at how the device is secured, where it sits around the eyes and whether the shape can be adjusted comfortably.",
          },
          {
            title: "Controls and session feedback",
            body: "Check whether controls are understandable, whether a timer is included and how the device indicates that a session has finished.",
          },
          {
            title: "Cleaning and storage",
            body: "Confirm which surfaces may be cleaned, what products should be avoided and how the device should be stored between uses.",
          },
          {
            title: "Power and accessories",
            body: "Identify what is supplied in the box, which items are essential for normal use and whether replacements are available.",
          },
        ],
      },
      {
        heading: "Do not compare headline numbers in isolation",
        points: [
          {
            title: "Wavelength labels",
            body: "A wavelength figure does not by itself establish output, coverage, consistency or a particular cosmetic outcome.",
          },
          {
            title: "LED totals",
            body: "A larger number is not automatically better. Position, distance, device geometry and the manufacturer’s measurement method also affect what the figure means.",
          },
          {
            title: "Session length",
            body: "A shorter stated session is not proof that one product is stronger. Follow the instructions for the specific device rather than transferring guidance between products.",
          },
        ],
      },
      {
        heading: "Check the seller before considering the offer",
        points: [
          {
            title: "Identity and contact details",
            body: "The seller should be clearly identifiable and provide a practical way to ask questions before and after purchase.",
          },
          {
            title: "Complete price",
            body: "Check the total payable amount, delivery costs and any conditions attached to a promotion. Ignore countdowns or savings that cannot be independently verified.",
          },
          {
            title: "Returns and warranty",
            body: "Read the returns process, exclusions, timescales, return address and warranty terms before ordering.",
          },
          {
            title: "Reviews are not clinical evidence",
            body: "Consumer feedback may describe an individual experience, but it does not prove that a device will produce the same result for another person.",
          },
        ],
      },
      {
        heading: "A simple pre-purchase checklist",
        points: [
          {
            title: "Save the product information",
            body: "Keep a copy of the product description, instructions, price and returns terms that applied when you made your decision.",
          },
          {
            title: "Ask about unclear claims",
            body: "Request the exact source for any objective performance or certification statement that materially affects your decision.",
          },
          {
            title: "Stop when the information conflicts",
            body: "If specifications, prices or company details differ between pages, resolve the inconsistency before purchasing.",
          },
        ],
      },
    ],
    sources: [asaSource, mhraSource, returnsSource, cmaSource],
  },
  {
    slug: "how-to-read-led-mask-specifications",
    title: "How to Read LED Mask Specifications Without Overinterpreting Them",
    shortTitle: "How to Read LED Mask Specifications",
    description:
      "A plain-English guide to reading wavelength, LED count, session and power specifications without turning them into unsupported performance claims.",
    eyebrow: "Specification guide",
    published: "29 July 2026",
    reviewed: "29 July 2026",
    readingTime: "6 minute read",
    visual: "specifications",
    sections: [
      {
        heading: "A specification describes a device, not a guaranteed result",
        points: [
          {
            title: "Read the definition",
            body: "Confirm what the brand has counted or measured and whether the figure refers to the whole device, a component or a single operating mode.",
          },
          {
            title: "Look for measurement conditions",
            body: "A number is easier to interpret when the distance, mode, unit and testing conditions are explained.",
          },
          {
            title: "Separate fact from interpretation",
            body: "The statement that a component is present is different from a claim that it will produce a particular outcome.",
          },
        ],
      },
      {
        heading: "Common figures that need context",
        points: [
          {
            title: "Wavelength",
            body: "Check whether the figure is a stated target, a range or a measured value. Do not assume the same label means identical delivery across products.",
          },
          {
            title: "LED count",
            body: "Ask how the emitters are arranged and whether a quoted total includes more than one component within each unit.",
          },
          {
            title: "Session time",
            body: "Use only the guidance supplied for that device. Session length is not a reliable shortcut for comparing power or effectiveness.",
          },
          {
            title: "Battery and mains operation",
            body: "Check charging time, expected operating time, cable requirements and whether the device can be used while connected to power.",
          },
        ],
      },
      {
        heading: "What a useful specification page should include",
        points: [
          {
            title: "Clear model identification",
            body: "The model name on the page, packaging and instructions should be consistent.",
          },
          {
            title: "Complete box contents",
            body: "Accessories needed for normal operation should be listed separately from optional or promotional items.",
          },
          {
            title: "Warnings and care",
            body: "Safety information, cleaning guidance and situations requiring professional advice should be easy to find before purchase.",
          },
        ],
      },
    ],
    sources: [asaSource, mhraSource],
  },
  {
    slug: "cosmetic-vs-medical-device-claims-uk",
    title: "Cosmetic and Medical-Device Claims in the UK: A Consumer Primer",
    shortTitle: "Cosmetic vs Medical-Device Claims",
    description:
      "How to recognise when beauty-device marketing moves from appearance-led wording into claims that may require stronger evidence and regulatory status.",
    eyebrow: "Claims guide",
    published: "29 July 2026",
    reviewed: "29 July 2026",
    readingTime: "7 minute read",
    visual: "claims",
    sections: [
      {
        heading: "The wording of a claim matters",
        points: [
          {
            title: "Appearance-led language",
            body: "Cosmetic descriptions generally focus on appearance or routine. They should still be accurate and supported where they make an objective promise.",
          },
          {
            title: "Treatment language",
            body: "Wording about treating, preventing or diagnosing a condition can change how a product and its advertising are regulated.",
          },
          {
            title: "Disclaimers do not repair the headline",
            body: "A small disclaimer cannot neutralise a prominent claim that gives consumers a materially different impression.",
          },
        ],
      },
      {
        heading: "Badges and technical words are not evidence",
        points: [
          {
            title: "Ask what a badge covers",
            body: "A mark may relate to electrical, manufacturing or regulatory requirements. It should not be treated as proof of every advertised benefit.",
          },
          {
            title: "Check the exact product",
            body: "Evidence about another device, component or general technology may not substantiate a claim about the model being advertised.",
          },
          {
            title: "Look for accessible documentation",
            body: "Important objective claims should be supported by information that identifies the product, method and limitation clearly.",
          },
        ],
      },
      {
        heading: "What to do when a claim concerns your health",
        points: [
          {
            title: "Do not rely on a buying guide",
            body: "General editorial information cannot determine whether a device is appropriate for an individual health concern.",
          },
          {
            title: "Use qualified advice",
            body: "Speak with an appropriately qualified healthcare professional when a condition, medicine, photosensitivity or other personal factor is involved.",
          },
        ],
      },
    ],
    sources: [asaSource, mhraSource],
  },
  {
    slug: "led-mask-fit-comfort-and-care",
    title: "LED Mask Fit, Comfort and Care: Questions to Ask Before Buying",
    shortTitle: "Fit, Comfort and Care",
    description:
      "A practical checklist covering fit, eye-area comfort, controls, cleaning, storage and manufacturer instructions.",
    eyebrow: "Practical guide",
    published: "29 July 2026",
    reviewed: "29 July 2026",
    readingTime: "5 minute read",
    visual: "comfort",
    sections: [
      {
        heading: "Fit is more than a product photograph",
        points: [
          {
            title: "Adjustment range",
            body: "Check how straps or supports adjust and whether the manufacturer describes any fit limitations.",
          },
          {
            title: "Eye area",
            body: "Read the instructions about eye protection and visual comfort. Do not assume that guidance from another device applies.",
          },
          {
            title: "Weight and pressure",
            body: "Consider where the device is supported and whether the returns policy allows you to assess practical comfort.",
          },
        ],
      },
      {
        heading: "Care information should be available before purchase",
        points: [
          {
            title: "Cleaning method",
            body: "Confirm which materials and cleaning products are permitted and whether any components must remain dry.",
          },
          {
            title: "Shared use",
            body: "Follow the manufacturer’s hygiene guidance rather than assuming a device can be shared safely.",
          },
          {
            title: "Storage",
            body: "Check temperature, moisture and charging guidance, especially if the device will be stored in a bathroom or transported.",
          },
        ],
      },
      {
        heading: "Controls should be understandable",
        points: [
          {
            title: "Mode identification",
            body: "A user should be able to identify the selected mode without relying on guesswork.",
          },
          {
            title: "Session completion",
            body: "Look for clear information about timers, indicators and how to stop a session.",
          },
          {
            title: "Instructions and support",
            body: "Confirm that instructions are available in a language you understand and that the seller offers a practical support channel.",
          },
        ],
      },
    ],
    sources: [mhraSource, returnsSource],
  },
  {
    slug: "warranties-returns-and-manufacturer-checklist",
    title: "Beauty-Tech Warranties, Returns and Seller Checks",
    shortTitle: "Warranties, Returns and Seller Checks",
    description:
      "A UK consumer checklist for reviewing seller identity, complete prices, returns, warranties and promotional language.",
    eyebrow: "Consumer checklist",
    published: "29 July 2026",
    reviewed: "29 July 2026",
    readingTime: "6 minute read",
    visual: "warranty",
    sections: [
      {
        heading: "Identify who is responsible for the sale",
        points: [
          {
            title: "Seller identity",
            body: "Look for a consistent business or trader name and a working contact method across the product page, policies and payment journey.",
          },
          {
            title: "Delivery information",
            body: "Check where the seller delivers, the expected timing and whether additional costs appear later in the journey.",
          },
          {
            title: "Support after purchase",
            body: "A support address should be usable for questions, returns and warranty requests rather than existing only as decoration.",
          },
        ],
      },
      {
        heading: "Read the return and warranty terms separately",
        points: [
          {
            title: "Returns",
            body: "Check the time limit, required condition, return method, costs and any exclusions before ordering.",
          },
          {
            title: "Warranty",
            body: "Confirm the duration, covered faults, exclusions and who handles a claim. A warranty does not replace statutory rights.",
          },
          {
            title: "Trials and guarantees",
            body: "Read the conditions behind a trial or money-back statement and save the version that applied when you purchased.",
          },
        ],
      },
      {
        heading: "Treat promotional pressure as a reason to slow down",
        points: [
          {
            title: "Countdowns",
            body: "A timer should reflect a genuine deadline. Repeating or unexplained countdowns are not a sound basis for a decision.",
          },
          {
            title: "Previous prices",
            body: "A crossed-out price should represent a meaningful comparison and should not be used to create a misleading saving impression.",
          },
          {
            title: "Free items",
            body: "Check whether the item is genuinely additional, whether conditions apply and whether the stated value is supported.",
          },
        ],
      },
    ],
    sources: [returnsSource, cmaSource],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
