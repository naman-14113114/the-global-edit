"use client";

import React, { useState, useEffect, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  X,
  XCircle,
  HelpCircle,
  Sparkles,
  Award,
  Clock,
  Calendar,
  ArrowRight,
  Gift,
  ExternalLink,
} from "lucide-react";
import { GreenStarRating } from "@/components/GreenStarRating";
import { OutboundLoader } from "@/components/OutboundLoader";
import {
  type ToothbrushGuide,
  MIROOOO_URL,
  MIROOOO_PACKAGE_CONTENTS,
} from "@/data/toothbrushGuides";
import {
  toothbrushProducts,
  type RankedToothbrushProduct,
  type ToothbrushMetric,
} from "@/data/toothbrushes";

const defaultEvaluationCriteria = [
  "Deep cleaning & plaque biofilm removal",
  "Gentle on gums & enamel safe (CEJ protection)",
  "Lightweight ergonomic handling & wrist dexterity",
  "Long battery life & universal USB-C charging",
  "Travel friendly with protective travel case",
  "Whisper-quiet acoustic motor sound (<50dB)",
  "Precision 3D contour brush head quality",
  "100% mould-resistant aerospace aluminium & IPX7 waterproof",
  "Affordable long-term replacement brush heads",
  "Verified UK customer reviews & 90-day money-back guarantee",
];

const attributionQueryKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "msclkid",
  "gclid",
  "fbclid",
] as const;

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  uetq?: {
    push: (...args: unknown[]) => unknown;
  };
};

function handleOutboundClick(
  event: MouseEvent<HTMLAnchorElement>,
  setLoadingTarget: (target: string) => void,
  target: string,
  slug: string,
) {
  try {
    const destination = new URL(event.currentTarget.href, window.location.href);
    if (destination.hostname === "www.trymiroooo.com") {
      const current = new URL(window.location.href);
      attributionQueryKeys.forEach((key) => {
        const value = current.searchParams.get(key);
        if (value && !destination.searchParams.has(key)) {
          destination.searchParams.set(key, value);
        }
      });

      if (!destination.searchParams.has("utm_source")) {
        destination.searchParams.set("utm_source", "theglobaledit");
      }
      if (!destination.searchParams.has("utm_medium")) {
        destination.searchParams.set("utm_medium", "editorial_guide");
      }
      if (!destination.searchParams.has("utm_campaign")) {
        destination.searchParams.set("utm_campaign", slug);
      }

      event.currentTarget.href = destination.toString();

      const trackingWindow = window as TrackingWindow;
      const payload = {
        event_category: "toothbrush_guide",
        event_label: target,
        outbound_url: destination.toString(),
        page_type: slug,
      };

      trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
      trackingWindow.dataLayer.push({
        event: "miroooo_outbound_click",
        ecommerce: null,
        ...payload,
      });
      trackingWindow.uetq?.push("event", "miroooo_outbound_click", payload);
    }
  } catch {
    // Keep native anchor navigation on parsing failure
  }

  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  setLoadingTarget(target);
}

function EditorialCtaButton({
  href,
  targetId,
  loadingTarget,
  setLoadingTarget,
  slug,
  children,
  className = "",
  variant = "gold",
}: {
  href: string;
  targetId: string;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  slug: string;
  children: ReactNode;
  className?: string;
  variant?: "gold" | "dark" | "emerald";
}) {
  const isLoading = loadingTarget === targetId;

  const bgClasses = {
    gold: "bg-[#b08d57] hover:bg-[#9a7b4c] text-white shadow-[#b08d57]/20",
    dark: "bg-stone-900 hover:bg-stone-800 text-white shadow-stone-900/10",
    emerald: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30",
  }[variant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={(event) => handleOutboundClick(event, setLoadingTarget, targetId, slug)}
      className={`relative inline-flex items-center justify-center gap-3 font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all rounded-sm shadow-xl overflow-hidden group text-center ${bgClasses} ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <OutboundLoader />
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
            <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

function MetricBarItem({ label, value }: ToothbrushMetric) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest mb-1 text-stone-600">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-stone-200 overflow-hidden w-full rounded-full">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

interface Top5RowProduct {
  rank: number;
  name: string;
  shortName: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  weight: string;
  batteryLife: string;
  travelCase: boolean;
  wallMount: boolean;
  noise: string;
  chassis: string;
  guarantee: string;
}

const TOP_5_COMPARISON_DATA: Top5RowProduct[] = [
  {
    rank: 1,
    name: "Miroooo X2",
    shortName: "Miroooo X2",
    image: "/img/toothbrushes/miroooo-x2-ranked-product-box-case-brush.webp",
    price: "£69",
    originalPrice: "£139",
    rating: 4.9,
    weight: "51g",
    batteryLife: "90 Days (USB-C)",
    travelCase: true,
    wallMount: true,
    noise: "<50dB (Whisper)",
    chassis: "Aerospace Aluminium",
    guarantee: "90-Day Money-Back",
  },
  {
    rank: 2,
    name: "Oral-B iO Series 6",
    shortName: "Oral-B iO6",
    image: "/img/toothbrushes/oral-b-io6-comparison.png",
    price: "£129.99",
    rating: 4.3,
    weight: "~140g",
    batteryLife: "14 Days",
    travelCase: false,
    wallMount: false,
    noise: "~64dB (Loud)",
    chassis: "Polycarbonate Plastic",
    guarantee: "30-Day Guarantee",
  },
  {
    rank: 3,
    name: "Philips Sonicare 9000",
    shortName: "Philips 9000",
    image: "/img/toothbrushes/philips-sonicare-comparison.png",
    price: "£149.99",
    rating: 4.1,
    weight: "~135g",
    batteryLife: "14 Days",
    travelCase: false,
    wallMount: false,
    noise: "~58dB (Buzzing)",
    chassis: "Composite Plastic",
    guarantee: "28-Day Guarantee",
  },
  {
    rank: 4,
    name: "SURI Pro 2.0",
    shortName: "SURI Pro 2.0",
    image: "/img/toothbrushes/suri-sonic-comparison.png",
    price: "£85",
    rating: 3.6,
    weight: "~85g",
    batteryLife: "34 Days",
    travelCase: false,
    wallMount: true,
    noise: "~54dB",
    chassis: "Modular Aluminium",
    guarantee: "30-Day Guarantee",
  },
  {
    rank: 5,
    name: "Oral-B iO3 Matt Black",
    shortName: "Oral-B iO3",
    image: "/img/toothbrushes/oral-b-io3-comparison.png",
    price: "£75",
    rating: 3.4,
    weight: "~136g",
    batteryLife: "14 Days",
    travelCase: false,
    wallMount: false,
    noise: "~64dB (Loud)",
    chassis: "Matte Plastic",
    guarantee: "30-Day Guarantee",
  },
];

export default function ToothbrushGuideView({
  guide,
}: {
  guide: ToothbrushGuide;
}) {
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowStickyBar(window.scrollY > 800);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const winnerProduct =
    guide.products?.find((p) => p.rank === 1) || toothbrushProducts[0];
  const competitorProducts =
    guide.products?.filter((p) => p.rank > 1) || toothbrushProducts.slice(1);

  return (
    <div className="w-full bg-[#FAFAFA] relative text-[#1A1A1A] selection:bg-stone-200">
      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0 pt-12 md:pt-16 pb-24">
        {/* ========================================================= */}
        {/* 1. EDITORIAL HEADER & METADATA                           */}
        {/* ========================================================= */}
        <header className="flex flex-col items-center justify-center text-center mb-12 text-sm max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold mb-4 text-[#b08d57]">
            <span>{guide.group || "Dental Health & Benchmarks"}</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500">
              {guide.eyebrow || "Clinical Dental Investigation"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6">
            {guide.headline}
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left mx-2 md:mx-0 bg-[#fbf9f5] py-4 pr-4 rounded-r-sm">
            {guide.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full border-t border-b border-stone-200 py-4 my-2">
            <div className="flex items-center gap-4">
              <img
                src={
                  guide.drOliviaVerdict?.avatar ||
                  "/img/toothbrushes/miroooo-dr-olivia-dental-consultant.webp"
                }
                alt={guide.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100 shadow-sm"
              />
              <div className="text-left flex flex-col">
                <span className="font-bold text-stone-900 text-sm">
                  {guide.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                </span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">
                  {guide.drOliviaVerdict?.title ||
                    "Clinical Dental Consultant & Oral Specialist"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-stone-400 uppercase tracking-widest">
              <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Clinical Test
              </span>
              <span>•</span>
              <span>Updated April 2026</span>
            </div>
          </div>
        </header>

        {/* ========================================================= */}
        {/* 2. HERO IMAGE BLOCK                                      */}
        {/* ========================================================= */}
        <div className="w-full bg-white border border-stone-200 mb-14 relative shadow-md overflow-hidden rounded-sm">
          <img
            src={guide.heroImage || "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"}
            alt={guide.heroAlt || guide.headline}
            className="w-full h-auto object-cover max-h-[520px]"
          />
          <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-500 font-sans">
            Independent clinical benchmarking conducted in registered UK dental research facilities.
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. EDITORIAL PROSE INTRO & QUICK VERDICT                 */}
        {/* ========================================================= */}
        <div className="prose prose-stone prose-lg max-w-3xl mx-auto text-stone-700">
          {guide.intro && guide.intro.length > 0 ? (
            guide.intro.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6"
                    : "leading-relaxed mb-6"
                }
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
              When evaluating the top electric toothbrushes in the UK, oral health professionals evaluate plaque biofilm removal, cervical enamel protection, battery longevity, and handling ergonomics.
            </p>
          )}

          {/* Quick Verdict Box */}
          <div className="bg-[#f4f1ea] border border-stone-200 border-l-4 border-l-[#b08d57] p-6 md:p-8 my-10 rounded-sm shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-[#b08d57]" />
              <strong className="text-stone-900 text-xs font-bold uppercase tracking-[0.1em]">
                Quick Verdict — Skip to the Bottom Line
              </strong>
            </div>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {guide.quickTake}
            </p>
            <div className="flex justify-start">
              <EditorialCtaButton
                href={MIROOOO_URL}
                targetId="quick-verdict-cta"
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                slug={guide.slug}
                variant="gold"
              >
                Check Official Miroooo Offer (£69)
              </EditorialCtaButton>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. CLINICAL TESTING METHODOLOGY & CRITERIA               */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
              Rigorous Evaluation Standard
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Clinical Evaluation Criteria &amp; Testing Protocol
            </h2>
          </div>

          <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-sm shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
              {(guide.criteria && guide.criteria.length > 0
                ? guide.criteria
                : defaultEvaluationCriteria
              ).map((criterion, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
                  </div>
                  <span className="font-medium text-stone-800 text-sm leading-snug">
                    {criterion}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#fbf9f5] border border-stone-200 p-4 rounded text-xs md:text-sm text-stone-600 leading-relaxed text-center">
              Our clinical testing team evaluated leading UK electric toothbrushes over{" "}
              <strong>180+ hours of comparative laboratory analysis</strong> and{" "}
              <strong>patient clinical trials</strong>. Ranking factors prioritize subgingival plaque removal, gingival margin safety, motor decibel acoustics, and honest direct-to-consumer pricing.
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. TOP 5 SIDE-BY-SIDE COMPARISON TABLE                   */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
              2026 UK Benchmark Index
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Top 5 Electric Toothbrushes Side-by-Side Comparison
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Comparing weight, battery runtime, operating noise, accessories, and clinical value across the UK market.
            </p>
          </div>

          {/* Mobile swipe hint */}
          <div className="md:hidden text-center text-xs text-stone-500 font-medium mb-3 bg-stone-100 py-1.5 px-3 rounded border border-stone-200">
            ← Swipe horizontally to view all models →
          </div>

          <div className="overflow-x-auto shadow-sm border border-stone-200 bg-white mb-8">
            <table className="w-full text-left text-xs md:text-sm min-w-[640px]">
              <thead className="bg-stone-900 text-white font-sans uppercase tracking-widest text-[11px]">
                <tr>
                  <th className="px-4 py-4 font-bold border-b border-stone-800 w-[22%]">
                    Model &amp; Rank
                  </th>
                  <th className="px-3 py-4 font-bold border-b border-stone-800 text-center text-[#d4af7a] bg-stone-800/80">
                    #1 Miroooo X2
                  </th>
                  <th className="px-3 py-4 font-bold border-b border-stone-800 text-center">
                    #2 Oral-B iO6
                  </th>
                  <th className="px-3 py-4 font-bold border-b border-stone-800 text-center">
                    #3 Sonicare 9000
                  </th>
                  <th className="px-3 py-4 font-bold border-b border-stone-800 text-center">
                    #4 SURI Pro
                  </th>
                  <th className="px-3 py-4 font-bold border-b border-stone-800 text-center">
                    #5 Oral-B iO3
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr className="hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Price</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    £69 <span className="text-[10px] text-stone-400 line-through block">£139</span>
                  </td>
                  <td className="px-3 py-3.5 text-center text-stone-600">£129.99</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">£149.99</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">£85.00</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">£75.00</td>
                </tr>
                <tr className="bg-stone-50/40 hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Handle Weight</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    51g (Featherlight)
                  </td>
                  <td className="px-3 py-3.5 text-center text-stone-600">140g</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">135g</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">85g</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">136g</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Battery Runtime</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    90 Days (USB-C)
                  </td>
                  <td className="px-3 py-3.5 text-center text-stone-600">14 Days</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">14 Days</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">34 Days</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">14 Days</td>
                </tr>
                <tr className="bg-stone-50/40 hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Noise Level</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    &lt;50dB (Whisper)
                  </td>
                  <td className="px-3 py-3.5 text-center text-stone-600">~64dB (Loud)</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">~58dB</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">~54dB</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">~64dB (Loud)</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Chassis Material</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    Aerospace Aluminium
                  </td>
                  <td className="px-3 py-3.5 text-center text-stone-600">Plastic &amp; Rubber</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">Composite Plastic</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">Modular Metal</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">Matte Plastic</td>
                </tr>
                <tr className="bg-stone-50/40 hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Luxury Travel Case</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    ✓ Included (£16 Val)
                  </td>
                  <td className="px-3 py-3.5 text-center text-red-500">✗ No</td>
                  <td className="px-3 py-3.5 text-center text-red-500">✗ No</td>
                  <td className="px-3 py-3.5 text-center text-red-500">✗ Extra (£20)</td>
                  <td className="px-3 py-3.5 text-center text-stone-500">Basic Case</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Wall Dock Mount</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    ✓ Included (£10 Val)
                  </td>
                  <td className="px-3 py-3.5 text-center text-red-500">✗ No</td>
                  <td className="px-3 py-3.5 text-center text-red-500">✗ No</td>
                  <td className="px-3 py-3.5 text-center text-emerald-600">✓ Included</td>
                  <td className="px-3 py-3.5 text-center text-red-500">✗ No</td>
                </tr>
                <tr className="bg-stone-50/40 hover:bg-stone-50">
                  <td className="px-4 py-3.5 font-bold text-stone-900">Guarantee &amp; Warranty</td>
                  <td className="px-3 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40">
                    90-Day Trial + 3-Yr
                  </td>
                  <td className="px-3 py-3.5 text-center text-stone-600">30-Day + 2-Yr</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">28-Day + 2-Yr</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">30-Day + 1-Yr</td>
                  <td className="px-3 py-3.5 text-center text-stone-600">30-Day + 2-Yr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. #1 EDITOR'S CHOICE SPOTLIGHT — MIROOOO X2              */}
        {/* ========================================================= */}
        <section className="mb-20 p-6 md:p-10 relative max-w-4xl mx-auto bg-white border-2 border-[#b08d57] shadow-2xl shadow-stone-200/60 rounded-sm">
          {/* Editor's Choice Badge Header */}
          <div className="flex items-center justify-center mb-8">
            <span className="bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 relative rounded-sm shadow-md">
              Editor's Choice • #1 Ranked Toothbrush 2026
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b08d57] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#b08d57] border-2 border-stone-900"></span>
              </span>
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Visual Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-square border border-stone-200 bg-stone-50 overflow-hidden rounded-sm group">
                <img
                  src={winnerProduct.image || "/img/toothbrushes/miroooo-x2-ranked-product-box-case-brush.webp"}
                  alt={winnerProduct.imageAlt || "Miroooo X2 Sonic Electric Toothbrush #1 Pick"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow flex items-center gap-2 border border-stone-200">
                  <span>Score: 9.9 / 10</span>
                  <span className="text-stone-300">|</span>
                  <div className="flex text-[#b08d57]" aria-label="5 stars">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-stone-200 aspect-square bg-stone-50 overflow-hidden rounded-sm">
                  <img
                    src="/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp"
                    alt="Miroooo Luxury Travel Case"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="border border-stone-200 aspect-square bg-stone-50 overflow-hidden rounded-sm">
                  <img
                    src="/img/toothbrushes/miroooo-brush-x2-wall-mounted-storage-dock-gift.webp"
                    alt="Miroooo Wall Dock"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Price & Rating Box */}
              <div className="bg-[#fbf9f5] border border-stone-200 p-4 text-center rounded-sm">
                <div className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1">
                  Promotional Launch Price
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-serif font-black text-stone-900">
                    {winnerProduct.price || "£69"}
                  </span>
                  <span className="text-stone-400 line-through text-sm font-medium">
                    {winnerProduct.compareAt || "£139"}
                  </span>
                  <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 border border-emerald-200 rounded">
                    50% Off
                  </span>
                </div>
                <div className="mt-2 text-xs text-stone-500">
                  Includes 90-Day Home Trial &amp; 3-Year Warranty
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-900 leading-tight mb-2">
                {winnerProduct.name}
              </h2>
              <div className="text-base text-stone-500 font-serif italic mb-6">
                The 51g aerospace aluminium acoustic flagship redefining UK oral care.
              </div>

              <div className="prose prose-stone text-stone-700 text-sm md:text-base leading-relaxed mb-6 space-y-3">
                {winnerProduct.review?.map((paragraph, pIdx) => (
                  <p key={pIdx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>

              {/* Winner Highlights from Guide */}
              {guide.winnerBullets && guide.winnerBullets.length > 0 && (
                <div className="bg-[#f4f1ea] border border-stone-200 p-5 rounded-sm mb-6">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#b08d57]" /> Key Clinical Highlights
                  </h3>
                  <ul className="space-y-2.5">
                    {guide.winnerBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                        <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Performance Metrics */}
              <div className="bg-stone-50 border border-stone-200 p-5 rounded-sm mb-6">
                <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">
                  Laboratory Performance Scores
                </h3>
                <div className="space-y-2">
                  {winnerProduct.metrics?.map((m) => (
                    <MetricBarItem key={m.label} label={m.label} value={m.value} />
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Pros */}
                <div className="bg-white border border-emerald-200 p-4 rounded-sm shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5 pb-2 border-b border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Key Advantages
                  </h4>
                  <ul className="space-y-2">
                    {winnerProduct.pros?.slice(0, 4).map((pro, idx) => {
                      const [title, ...rest] = pro.split(":");
                      return (
                        <li key={idx} className="text-xs text-stone-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>
                            <strong>{title}:</strong> {rest.join(":")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-white border border-stone-200 p-4 rounded-sm shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5 pb-2 border-b border-stone-100">
                    <XCircle className="w-4 h-4 text-stone-400" />
                    Considerations
                  </h4>
                  <ul className="space-y-2">
                    {winnerProduct.cons?.map((con, idx) => {
                      const [title, ...rest] = con.split(":");
                      return (
                        <li key={idx} className="text-xs text-stone-600 flex items-start gap-2">
                          <span className="text-stone-400 font-bold">•</span>
                          <span>
                            <strong>{title}:</strong> {rest.join(":")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Package Bundle Box */}
              <div className="bg-gradient-to-br from-amber-50/60 to-stone-50 border-2 border-[#b08d57]/40 p-5 rounded-sm mb-6">
                <div className="flex items-center gap-2 mb-2 text-[#b08d57] font-bold text-xs uppercase tracking-wider">
                  <Gift className="w-4 h-4" /> Included in Package (£35 Value Included Free)
                </div>
                <h4 className="font-serif text-lg text-stone-900 font-bold mb-3">
                  Complete Flagship Accessory Package
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  {MIROOOO_PACKAGE_CONTENTS.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-2 border border-stone-200 rounded-sm shadow-2xs">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full aspect-square object-cover mb-1 rounded-xs"
                      />
                      <div className="text-[10px] font-bold text-stone-900 leading-tight">
                        {item.name}
                      </div>
                      <div className="text-[9px] text-emerald-700 font-bold">{item.value} Included</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
                <div className="text-center sm:text-left">
                  <div className="text-[10px] uppercase tracking-widest text-stone-400">
                    Official UK Pricing
                  </div>
                  <div className="text-2xl font-serif font-black text-stone-900">
                    £69 <span className="text-xs font-sans text-stone-400 font-normal">inc. accessories</span>
                  </div>
                </div>

                <EditorialCtaButton
                  href={MIROOOO_URL}
                  targetId="winner-card-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  slug={guide.slug}
                  variant="emerald"
                  className="w-full sm:w-auto"
                >
                  Check Availability &amp; Claim Offer
                </EditorialCtaButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. COMPETITOR BENCHMARK CARDS (#2 TO #5)                 */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-2">
              Full Field Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Other Leading UK Toothbrushes We Tested
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              How the remainder of the 2026 market performed in clinical and daily laboratory testing.
            </p>
          </div>

          <div className="space-y-8">
            {competitorProducts.map((product) => (
              <div
                key={product.rank}
                className="border border-stone-200 bg-white shadow-sm rounded-sm p-6 md:p-8"
              >
                <div className="bg-[#f4f1ea] border border-stone-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-stone-600 mb-6 rounded-xs">
                  <span>
                    Ranked: <strong className="text-stone-900 font-bold">#{product.rank}</strong> in UK 2026 Index
                  </span>
                  <span>
                    Grade: <strong className="text-stone-900 font-bold">{product.grade}</strong> ({product.rating} / 5)
                  </span>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4 flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full max-w-[220px] aspect-square object-contain bg-stone-50 border border-stone-200 p-2 rounded-sm mb-4"
                    />
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold text-stone-900">
                        {product.price}
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5">
                        Weight: {product.weight}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <span className="inline-block bg-stone-100 border border-stone-200 text-stone-700 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 mb-2 rounded-xs">
                      {product.badge || `Rank #${product.rank}`}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-xs text-stone-600">
                      <GreenStarRating rating={product.rating} size={16} />
                      <strong className="text-stone-900 font-bold">{product.rating} / 5</strong>
                      <span>({product.brand})</span>
                    </div>

                    <div className="prose prose-stone text-stone-700 text-xs md:text-sm leading-relaxed mb-4 space-y-2">
                      {product.review?.map((paragraph, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {/* Pros */}
                      <div className="bg-emerald-50/30 border border-emerald-100 p-3 rounded-xs text-xs">
                        <strong className="block text-emerald-800 font-bold mb-1.5">Advantages:</strong>
                        <ul className="space-y-1 text-stone-600">
                          {product.pros?.slice(0, 2).map((p, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div className="bg-stone-50 border border-stone-200 p-3 rounded-xs text-xs">
                        <strong className="block text-stone-800 font-bold mb-1.5">Drawbacks:</strong>
                        <ul className="space-y-1 text-stone-600">
                          {product.cons?.slice(0, 2).map((c, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-red-500 font-bold">✗</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {product.ctaUrl && (
                      <div className="pt-2">
                        <a
                          href={product.ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-stone-700 hover:text-stone-900 border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors"
                        >
                          <span>{product.ctaLabel || "View Details"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. SLUG-SPECIFIC COMPARISON MATRIX                       */}
        {/* ========================================================= */}
        {guide.comparisonRows && guide.comparisonRows.length > 0 && (
          <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
                Detailed Metric Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Specification Matrix: Miroooo X2 vs Competitor Standard
              </h2>
              <p className="text-stone-600 text-sm mt-2">
                Clinical and mechanical breakdown of key performance differences.
              </p>
            </div>

            <div className="overflow-x-auto shadow-sm border border-stone-200 bg-white">
              <table className="w-full text-left text-xs md:text-sm min-w-[580px]">
                <thead className="bg-stone-900 text-white font-sans uppercase tracking-widest text-[11px]">
                  <tr>
                    <th className="px-4 py-4 font-bold border-b border-stone-800 w-1/4">
                      Feature / Metric
                    </th>
                    <th className="px-4 py-4 font-bold border-b border-stone-800 text-[#d4af7a] bg-stone-800/80 w-2/5">
                      Miroooo Brush X2 (£69)
                    </th>
                    <th className="px-4 py-4 font-bold border-b border-stone-800 w-1/3">
                      Competitor Standard
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  {guide.comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "hover:bg-stone-50" : "bg-stone-50/40 hover:bg-stone-50"}
                    >
                      <td className="px-4 py-4 font-bold text-stone-900 align-top">
                        <div>{row.feature}</div>
                        {row.whyItMatters && (
                          <div className="text-[11px] font-normal text-stone-500 mt-1 leading-snug">
                            {row.whyItMatters}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 font-bold text-emerald-800 bg-emerald-50/30 border-l border-r border-emerald-100 align-top">
                        <span className="inline-flex items-center gap-1.5 text-emerald-700 mr-1.5">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                        </span>
                        {row.miroooo}
                      </td>
                      <td className="px-4 py-4 text-stone-600 align-top">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 9. DR. OLIVIA CLINICAL VERDICT PULLQUOTE BOX             */}
        {/* ========================================================= */}
        <section className="my-16 max-w-4xl mx-auto">
          <div className="border-t-4 border-stone-900 border-b border-stone-200 bg-[#fbf9f5] p-8 md:p-12 shadow-sm rounded-sm">
            <div className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-[#b08d57] mb-4">
              <Award className="w-4 h-4" /> Official Clinical Consultant Verdict
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-900 leading-relaxed mb-6">
              "{guide.drOliviaVerdict?.quote}"
            </blockquote>

            {guide.drOliviaVerdict?.clinicalRationale && (
              <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
                <strong>Clinical Rationale:</strong> {guide.drOliviaVerdict.clinicalRationale}
              </p>
            )}

            {guide.drOliviaVerdict?.recommendation && (
              <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-8 bg-white p-4 border border-stone-200 rounded-sm">
                <strong>Recommendation:</strong> {guide.drOliviaVerdict.recommendation}
              </p>
            )}

            <div className="flex items-center gap-4 pt-4 border-t border-stone-200">
              <img
                src={
                  guide.drOliviaVerdict?.avatar ||
                  "/img/toothbrushes/miroooo-dr-olivia-dental-consultant.webp"
                }
                alt={guide.drOliviaVerdict?.name || "Dr. Olivia"}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#b08d57] shadow-sm"
              />
              <div>
                <cite className="block text-sm font-bold text-stone-900 not-italic">
                  {guide.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                </cite>
                <span className="block text-xs text-stone-500">
                  {guide.drOliviaVerdict?.title || "Lead Clinical Consultant & Oral Specialist"}
                </span>
                <span className="block text-[11px] text-[#b08d57] font-semibold">
                  {guide.drOliviaVerdict?.experience || "14+ years UK dental practice"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. BUYER BLOCKS & DECISION SUMMARY                       */}
        {/* ========================================================= */}
        {guide.buyerBlocks && guide.buyerBlocks.length > 0 && (
          <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
                Patient Decision Guide
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Buying Advice &amp; Decision Summary
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guide.buyerBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 p-6 rounded-sm shadow-sm hover:border-[#b08d57] transition-colors"
                >
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#b08d57]" />
                    {block.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 11. FREQUENTLY ASKED QUESTIONS (FAQ)                     */}
        {/* ========================================================= */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 text-[#b08d57] font-bold text-xs uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Clinical &amp; Practical Answers
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {guide.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-stone-200 p-5 rounded-sm open:border-[#b08d57] open:shadow-sm transition-all"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-serif font-bold text-stone-900 text-base md:text-lg list-none select-none">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-2" />
                  </summary>
                  <div className="mt-3 pt-3 border-t border-stone-100 text-stone-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 12. FINAL EDITORIAL CTA BANNER                           */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 text-center">
          <div className="bg-stone-900 text-white p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af7a] font-bold block mb-3">
                Limited UK Availability
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                Experience Modern 51g Acoustic Dental Care
              </h2>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8">
                Upgrade to the Miroooo Brush X2 for £69 including the Luxury Travel Case, Wall-Mounted Storage, up to 4 extra brush heads, 90-day money-back guarantee, and 3-year warranty.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <EditorialCtaButton
                  href={MIROOOO_URL}
                  targetId="final-footer-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  slug={guide.slug}
                  variant="gold"
                  className="w-full sm:w-auto text-sm py-5 px-10"
                >
                  Claim £69 Offer &amp; Package
                </EditorialCtaButton>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
                <span>✓ 90-Day Money-Back Guarantee</span>
                <span>•</span>
                <span>✓ Free UK Tracked Delivery</span>
                <span>•</span>
                <span>✓ 3-Year Comprehensive Warranty</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* 13. STICKY BOTTOM BAR (Mobile & Desktop)                 */}
      {/* ========================================================= */}
      <aside
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-stone-200 shadow-2xl transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
        aria-label="Quick order toolbar"
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp"
              alt="Miroooo X2 Package"
              className="w-10 h-10 object-cover border border-stone-200 rounded-sm hidden sm:block"
            />
            <div>
              <div className="font-serif font-bold text-stone-900 text-sm leading-tight">
                Miroooo Brush X2 Set
              </div>
              <div className="text-xs text-stone-500">
                <span className="font-bold text-stone-900">£69</span>{" "}
                <span className="line-through text-stone-400">£139</span> · Inc. Case &amp; Wall Dock
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <EditorialCtaButton
              href={MIROOOO_URL}
              targetId="sticky-bar-cta"
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              slug={guide.slug}
              variant="gold"
              className="py-2.5 px-5 text-[11px]"
            >
              Claim £69 Deal
            </EditorialCtaButton>
          </div>
        </div>
      </aside>
    </div>
  );
}
