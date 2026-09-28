"use client";

import Image from "next/image";
import React, { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Sparkles,
  Award,
  Star,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import {
  toothbrushProducts,
  type RankedToothbrushProduct as RankedProduct,
  type ToothbrushMetric as Metric,
} from "@/data/toothbrushes";
import { type ToothbrushGuide, MIROOOO_URL } from "@/data/toothbrushGuides";

const defaultEvaluationCriteria = [
  "Deep cleaning & plaque removal",
  "Gentle on gums & enamel safe",
  "Lightweight ergonomic handling",
  "Long battery life & USB-C charging",
  "Travel friendly with protective travel case",
  "Whisper-quiet acoustic motor sound",
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

function formatLondonDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(date);
}

function handleOutboundClick(
  event: MouseEvent<HTMLAnchorElement>,
  setLoadingTarget: (target: string) => void,
  target: string,
) {
  try {
    const destination = new URL(event.currentTarget.href, window.location.href);
    if (destination.hostname.includes("trymiroooo.com") || destination.hostname.includes("miroooo.com")) {
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
        destination.searchParams.set("utm_medium", "editorial_comparison");
      }
      if (!destination.searchParams.has("utm_campaign")) {
        destination.searchParams.set("utm_campaign", "best_electric_toothbrush_uk_2026");
      }

      event.currentTarget.href = destination.toString();

      const trackingWindow = window as TrackingWindow;
      const payload = {
        event_category: "outbound_click",
        event_label: target,
        outbound_url: destination.toString(),
        page_type: "editorial_guide",
      };

      trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
      trackingWindow.dataLayer.push({
        event: "miroooo_outbound_click",
        ecommerce: null,
        ...payload,
      });
      trackingWindow.dataLayer.push({
        event: "affiliate_click",
        ...payload,
      });
      trackingWindow.uetq?.push("event", "miroooo_outbound_click", payload);
      trackingWindow.uetq?.push("event", "affiliate_click", payload);
    }
  } catch {
    // Retain standard navigation
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
  children,
  className = "",
  variant = "primary",
}: {
  href: string;
  targetId: string;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "gold";
}) {
  const isLoading = loadingTarget === targetId;

  let baseStyle =
    "group relative inline-flex items-center justify-center overflow-hidden font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-sm";

  if (variant === "primary") {
    baseStyle += " bg-stone-900 hover:bg-stone-800 text-white shadow-xl shadow-stone-900/10";
  } else if (variant === "gold") {
    baseStyle += " bg-[#b08d57] hover:bg-[#9a7b4c] text-white shadow-xl shadow-[#b08d57]/20";
  } else {
    baseStyle += " bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/20";
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer sponsored"
      onClick={(event) => handleOutboundClick(event, setLoadingTarget, targetId)}
      className={`${baseStyle} ${className}`}
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
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

function MetricBar({ label, value }: Metric) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1 text-stone-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-stone-200 overflow-hidden rounded-full">
        <div
          className="h-full bg-emerald-600 transition-all duration-700 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function PackagePanel({
  loadingTarget,
  setLoadingTarget,
}: {
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  return (
    <div className="mt-10 bg-gradient-to-br from-[#fdf9f0] to-[#f5efe0] border border-[#d4af7a] p-6 md:p-8 rounded-sm shadow-sm relative overflow-hidden">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 text-[#b08d57] text-[11px] font-bold uppercase tracking-widest mb-4">
          <span className="text-base">🎁</span> Limited UK Web Promotion — Included Package Bundle (Worth £35)
        </div>

        <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-3 leading-tight font-bold">
          What&apos;s Inside <span className="text-[#b08d57] italic">Your Complete Set</span>
        </h4>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
          Every Miroooo Brush X2 order currently includes the complete clinical accessory suite inside the box at zero extra charge:
        </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
          {/* Luxury Travel Case */}
          <div className="bg-white p-3 sm:p-4 border border-stone-200 shadow-sm text-center group hover:-translate-y-1 transition-transform">
            <div className="relative mb-2 aspect-square overflow-hidden bg-stone-50 border border-stone-100">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp"
                alt="Miroooo Brush X2 Luxury Aluminium Travel Case"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 right-1 bg-stone-900 text-white font-bold text-[9px] uppercase tracking-wider px-1.5 py-0.5">
                Included
              </span>
            </div>
            <p className="font-bold text-stone-900 text-[11px] sm:text-sm leading-tight mb-1">
              Luxury Travel Case
            </p>
            <p className="text-[10px] text-stone-500 hidden sm:block">Value: £16</p>
          </div>

          {/* Wall-Mounted Storage */}
          <div className="bg-white p-3 sm:p-4 border border-stone-200 shadow-sm text-center group hover:-translate-y-1 transition-transform">
            <div className="relative mb-2 aspect-square overflow-hidden bg-stone-50 border border-stone-100">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-wall-mounted-storage-dock-gift.webp"
                alt="Miroooo Brush X2 Wall-Mounted Storage Dock"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 right-1 bg-stone-900 text-white font-bold text-[9px] uppercase tracking-wider px-1.5 py-0.5">
                Included
              </span>
            </div>
            <p className="font-bold text-stone-900 text-[11px] sm:text-sm leading-tight mb-1">
              Wall Storage Dock
            </p>
            <p className="text-[10px] text-stone-500 hidden sm:block">Value: £10</p>
          </div>

          {/* Extra Brush Heads */}
          <div className="bg-white p-3 sm:p-4 border border-stone-200 shadow-sm text-center group hover:-translate-y-1 transition-transform">
            <div className="relative mb-2 aspect-square overflow-hidden bg-stone-50 border border-stone-100">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-extra-brush-heads-package.webp"
                alt="Miroooo Brush X2 Extra Precision Brush Heads"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 right-1 bg-stone-900 text-white font-bold text-[9px] uppercase tracking-wider px-1.5 py-0.5">
                Included
              </span>
            </div>
            <p className="font-bold text-stone-900 text-[11px] sm:text-sm leading-tight mb-1">
              Extra Brush Heads
            </p>
            <p className="text-[10px] text-stone-500 hidden sm:block">Value: £9</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#d4af7a]/40">
          <div>
            <div className="text-stone-500 text-[11px] uppercase tracking-widest">Promotional Price</div>
            <div className="flex items-baseline gap-3">
              <span className="text-stone-900 text-3xl font-serif font-bold">£69</span>
              <span className="text-stone-400 line-through text-sm">£139</span>
              <span className="text-emerald-700 font-bold text-xs bg-emerald-100 px-2 py-0.5 rounded-sm">50% Off</span>
            </div>
          </div>
          <EditorialCtaButton
            href={MIROOOO_URL}
            targetId="package-panel-cta"
            loadingTarget={loadingTarget}
            setLoadingTarget={setLoadingTarget}
            variant="gold"
            className="w-full sm:w-auto py-3.5 px-8 text-xs"
          >
            Check Package Availability
          </EditorialCtaButton>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  loadingTarget,
  setLoadingTarget,
}: {
  product: RankedProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  const isMiroooo = product.rank === 1;

  return (
    <article
      id={`rank-${product.rank}`}
      className={`relative bg-white border ${
        isMiroooo
          ? "border-stone-900 shadow-2xl shadow-stone-200/60 p-6 md:p-10"
          : "border-stone-200 shadow-sm p-6 md:p-8"
      } mb-16 scroll-mt-28`}
    >
      {/* Ribbon / Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-stone-200 pb-4">
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 ${
              isMiroooo
                ? "bg-stone-900 text-white"
                : "bg-stone-200 text-stone-700"
            }`}
          >
            Rank #{product.rank} {isMiroooo ? "• Editor's #1 Pick" : ""}
          </span>
          <span className="text-xs font-serif italic text-stone-500 hidden sm:inline">
            {product.badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <GreenStarRating rating={product.rating} forceFull={isMiroooo} size={16} />
          <span className="font-bold text-stone-900 text-sm">{product.rating.toFixed(1)} / 5</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Image & Quick Stats */}
        <aside className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full relative aspect-square bg-stone-50 border border-stone-100 overflow-hidden group mb-6">
            <a
              href={product.ctaUrl}
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(event, setLoadingTarget, `product-img-${product.rank}`)
              }
              className="block w-full h-full"
            >
              <img
                src={product.image}
                alt={product.imageAlt || product.name}
                loading={isMiroooo ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </a>
            {isMiroooo && (
              <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-md">
                Best Overall 2026
              </div>
            )}
          </div>

          <div className="w-full bg-stone-50 border border-stone-200 p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">UK Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-serif font-bold text-stone-900">{product.price}</span>
                {product.compareAt && (
                  <span className="text-xs text-stone-400 line-through font-medium">{product.compareAt}</span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-stone-600 border-t border-stone-200/60 pt-2">
              <span>Weight: <strong className="text-stone-900">{product.weight}</strong></span>
              <span>Battery: <strong className="text-stone-900">{product.batteryLife}</strong></span>
            </div>
          </div>

          <EditorialCtaButton
            href={product.ctaUrl}
            targetId={`product-cta-${product.rank}`}
            loadingTarget={loadingTarget}
            setLoadingTarget={setLoadingTarget}
            variant={isMiroooo ? "primary" : "secondary"}
            className="w-full py-4 text-xs"
          >
            {isMiroooo ? "Check Miroooo X2 Offer →" : `View ${product.name.split(" ")[0]} →`}
          </EditorialCtaButton>
        </aside>

        {/* Right Column: Review, Metrics, Pros & Cons */}
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 leading-tight mb-4">
            <a
              href={product.ctaUrl}
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(event, setLoadingTarget, `product-title-${product.rank}`)
              }
              className="hover:text-[#b08d57] transition-colors"
            >
              {product.name}
            </a>
          </h2>

          <div className="prose prose-stone text-stone-700 text-sm md:text-base leading-relaxed mb-6 space-y-3">
            {product.review.map((paragraph, pIdx) => (
              <p key={pIdx} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-stone-50 border border-stone-200 p-5 mb-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-4 border-b border-stone-200 pb-2">
              Clinical Performance Scores
            </h4>
            <div className="space-y-2">
              {product.metrics.map((metric) => (
                <MetricBar
                  key={`${product.rank}-${metric.label}`}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Pros */}
            <div className="bg-[#f4f7f4] border border-emerald-200 p-4 rounded-sm">
              <h4 className="text-xs uppercase tracking-widest font-bold text-emerald-800 mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> Key Strengths
              </h4>
              <ul className="space-y-2.5">
                {product.pros.map((pro, idx) => {
                  const [bold, ...rest] = pro.split(":");
                  return (
                    <li key={idx} className="text-xs text-stone-700 flex items-start gap-2">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-stone-900">{bold}:</strong> {rest.join(":")}
                          </>
                        ) : (
                          pro
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-[#fdf5f5] border border-red-200 p-4 rounded-sm">
              <h4 className="text-xs uppercase tracking-widest font-bold text-red-800 mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-600" /> Where It Falls Short
              </h4>
              <ul className="space-y-2.5">
                {product.cons.map((con, idx) => {
                  const [bold, ...rest] = con.split(":");
                  return (
                    <li key={idx} className="text-xs text-stone-700 flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-0.5">✗</span>
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-stone-900">{bold}:</strong>{" "}
                            <span dangerouslySetInnerHTML={{ __html: rest.join(":") }} />
                          </>
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: con }} />
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {isMiroooo && (
            <PackagePanel
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          )}
        </div>
      </div>
    </article>
  );
}

function ComparisonMatrix({ guide }: { guide: ToothbrushGuide }) {
  if (!guide.comparisonRows || guide.comparisonRows.length === 0) return null;

  return (
    <section className="bg-white border border-stone-200 p-6 md:p-10 shadow-sm my-16">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f4f1ea] border border-stone-200 text-[#b08d57] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Specification Breakdown
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-stone-900 font-serif leading-tight">
          Head-to-Head Specification Matrix
        </h2>
        <p className="text-stone-600 mt-2 text-sm md:text-base leading-relaxed">
          How the Miroooo Brush X2 compares directly against legacy competitors on key clinical &amp; daily usability metrics.
        </p>
      </div>

      <div className="overflow-x-auto shadow-sm border border-stone-200">
        <table className="w-full text-left border-collapse min-w-[620px] text-sm">
          <thead className="bg-stone-900 text-white font-sans uppercase tracking-widest text-[11px]">
            <tr>
              <th className="py-4 px-5 font-bold border-b border-stone-800 w-1/4">
                Feature / Metric
              </th>
              <th className="py-4 px-5 font-bold border-b border-stone-800 w-2/5 text-[#d4af7a] bg-stone-950">
                Miroooo Brush X2 (£69)
              </th>
              <th className="py-4 px-5 font-bold border-b border-stone-800 w-1/3 text-stone-300">
                Competitor Standard
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 text-stone-700">
            {guide.comparisonRows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-stone-50/50"}>
                <td className="py-4 px-5 font-bold text-stone-900 align-top">
                  <div>{row.feature}</div>
                  <div className="text-xs font-normal text-stone-500 mt-1">
                    {row.whyItMatters}
                  </div>
                </td>
                <td className="py-4 px-5 font-bold text-emerald-700 bg-emerald-50/40 border-l border-r border-emerald-100 align-top">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>{row.miroooo}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-stone-600 align-top">
                  {row.competitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function BuyerBlocksSection({ guide }: { guide: ToothbrushGuide }) {
  if (!guide.buyerBlocks || guide.buyerBlocks.length === 0) return null;

  return (
    <section className="my-16 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif text-center mb-8">
        Buying Advice &amp; Decision Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guide.buyerBlocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-white p-6 md:p-8 border border-stone-200 shadow-sm"
          >
            <h3 className="text-lg font-bold text-stone-900 mb-3 font-serif flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b08d57] inline-block" />
              {block.title}
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface Top5ProductDef {
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
  appTracking: boolean;
  chassisMaterial: string;
  freeHeads: boolean;
  whisperQuiet: boolean;
  moneyBackTrial: string;
  freeDelivery: boolean;
}

const TOP_5_COMPARISON_PRODUCTS: Top5ProductDef[] = [
  {
    rank: 1,
    name: "Miroooo X2",
    shortName: "Miroooo X2",
    image: "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp",
    price: "£69",
    originalPrice: "£139",
    rating: 4.9,
    weight: "51g",
    batteryLife: "90 Days",
    travelCase: true,
    wallMount: true,
    appTracking: true,
    chassisMaterial: "Aluminium Alloy",
    freeHeads: true,
    whisperQuiet: true,
    moneyBackTrial: "90-Day Money-Back",
    freeDelivery: true,
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
    appTracking: false,
    chassisMaterial: "Plastic & Rubber",
    freeHeads: false,
    whisperQuiet: false,
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
  },
  {
    rank: 3,
    name: "Philips Sonicare DiamondClean 9000",
    shortName: "Philips 9000",
    image: "/img/toothbrushes/philips-sonicare-comparison.png",
    price: "£149.99",
    rating: 4.1,
    weight: "~135g",
    batteryLife: "14 Days",
    travelCase: false,
    wallMount: false,
    appTracking: false,
    chassisMaterial: "Composite Plastic",
    freeHeads: false,
    whisperQuiet: false,
    moneyBackTrial: "28-Day Guarantee",
    freeDelivery: false,
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
    appTracking: false,
    chassisMaterial: "Modular Aluminium",
    freeHeads: false,
    whisperQuiet: false,
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
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
    appTracking: false,
    chassisMaterial: "Matte Plastic",
    freeHeads: false,
    whisperQuiet: false,
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
  },
];

type Top5RowDef =
  | {
      key:
        | "travelCase"
        | "wallMount"
        | "appTracking"
        | "freeHeads"
        | "whisperQuiet"
        | "freeDelivery";
      label: string;
      kind: "boolean";
    }
  | {
      key: "weight" | "batteryLife" | "chassisMaterial" | "moneyBackTrial";
      label: string;
      kind: "text";
    }
  | {
      key: "price";
      label: string;
      kind: "price";
    };

const TOP_5_COMPARISON_ROWS: Top5RowDef[] = [
  { key: "weight", label: "Ultra-Light Weight", kind: "text" },
  { key: "batteryLife", label: "Battery Life", kind: "text" },
  { key: "travelCase", label: "Luxury Travel Case", kind: "boolean" },
  { key: "wallMount", label: "Wall-Mounted Storage", kind: "boolean" },
  { key: "appTracking", label: "Dental Care App", kind: "boolean" },
  { key: "chassisMaterial", label: "Chassis Material", kind: "text" },
  { key: "freeHeads", label: "Free Extra Brush Heads", kind: "boolean" },
  { key: "whisperQuiet", label: "Whisper Quiet (<50dB)", kind: "boolean" },
  { key: "moneyBackTrial", label: "Risk-Free Trial", kind: "text" },
  { key: "freeDelivery", label: "Free Tracked Delivery", kind: "boolean" },
  { key: "price", label: "Price", kind: "price" },
];

function CompetitorComparisonTable() {
  return (
    <section className="bg-white border border-stone-200 p-6 sm:p-8 md:p-10 shadow-sm mt-16 mb-16 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-stone-900 font-serif leading-tight">
          Top 5 Electric Toothbrushes Side-by-Side Comparison
        </h2>
        <p className="text-stone-600 mt-2 text-sm md:text-base">
          Technical specifications, battery endurance, included accessories, and ownership value compared across the UK&apos;s leading 2026 models.
        </p>
      </div>

      <div className="block lg:hidden text-center text-xs text-stone-500 font-medium mb-4 bg-stone-50 py-2 px-3 border border-stone-200">
        ← Swipe horizontally to compare all 5 toothbrushes →
      </div>

      <div className="overflow-x-auto shadow-sm border border-stone-200">
        <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b-2 border-stone-200 bg-stone-900 text-white">
              <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider w-[20%]">
                Feature / Metric
              </th>
              {TOP_5_COMPARISON_PRODUCTS.map((prod) => (
                <th
                  key={prod.rank}
                  className={`py-4 px-3 text-center w-[16%] align-bottom border-l border-stone-800 ${
                    prod.rank === 1 ? "bg-stone-950 text-[#d4af7a]" : "bg-stone-900"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                      #{prod.rank} Ranked
                    </span>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-2 flex items-center justify-center p-1 bg-white rounded-sm border border-stone-200">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-xs sm:text-sm line-clamp-1 mb-1">
                      {prod.shortName}
                    </span>
                    <div className="mb-1">
                      <GreenStarRating rating={prod.rating} size={12} />
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm sm:text-base font-bold text-white">
                        {prod.price}
                      </span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {TOP_5_COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? "bg-white" : "bg-stone-50/60"}
              >
                <td className="py-3.5 px-4 font-semibold text-stone-900 align-middle">
                  {row.label}
                </td>
                {TOP_5_COMPARISON_PRODUCTS.map((prod) => {
                  if (row.kind === "boolean") {
                    const isPassed = prod[row.key];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-stone-200 ${
                          prod.rank === 1 ? "bg-emerald-50/20" : ""
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          {isPassed ? (
                            <Check className="w-4 h-4 text-emerald-600 font-bold" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </td>
                    );
                  }

                  if (row.kind === "price") {
                    return (
                      <td
                        key={`${prod.rank}-price-row`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-stone-200 ${
                          prod.rank === 1 ? "bg-emerald-50/20" : ""
                        }`}
                      >
                        <span className="font-bold text-stone-900">
                          {prod.price}
                        </span>
                      </td>
                    );
                  }

                  const textVal = prod[row.key];
                  return (
                    <td
                      key={`${prod.rank}-${row.key}`}
                      className={`py-3.5 px-2 text-center align-middle border-l border-stone-200 ${
                        prod.rank === 1 ? "bg-emerald-50/20 font-bold text-emerald-800" : "text-stone-700"
                      }`}
                    >
                      {textVal}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FaqSection({ faqs }: { faqs?: Array<{ question: string; answer: string }> }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-white border border-stone-200 p-6 md:p-10 shadow-sm my-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 text-[#b08d57] font-bold text-xs uppercase tracking-widest mb-2">
          <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
          Expert Clinical &amp; Purchase FAQs
        </h2>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group border border-stone-200 bg-stone-50 p-5 rounded-sm open:bg-white transition-colors"
          >
            <summary className="flex cursor-pointer items-center justify-between font-bold text-stone-900 text-sm md:text-base list-none">
              <span>{faq.question}</span>
              <ChevronDown className="w-4 h-4 text-stone-500 group-open:rotate-180 transition-transform duration-200" />
            </summary>
            <div className="mt-3 pt-3 border-t border-stone-200 text-stone-600 text-sm leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export type ElectricToothbrushesAdvertorialProps = {
  guide?: ToothbrushGuide;
};

export default function ElectricToothbrushesAdvertorial({
  guide,
}: ElectricToothbrushesAdvertorialProps = {}) {
  const [updatedDate, setUpdatedDate] = useState(() => formatLondonDate(new Date()));
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  const displayProducts: RankedProduct[] =
    guide && guide.products && guide.products.length > 0
      ? (guide.products as RankedProduct[])
      : toothbrushProducts;

  useEffect(() => {
    setUpdatedDate(formatLondonDate(new Date()));
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-0 pt-12 pb-24">
        
        {/* Editor Info & Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 text-sm max-w-3xl mx-auto">
          <div className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold mb-4">
            <span className="text-[#b08d57]">Dental Health &amp; Tech</span>
            <span className="text-stone-400">•</span>
            <span className="text-stone-500">{guide?.group || "Independent Clinical Guide"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6">
            {guide ? guide.headline : "Best Electric Toothbrushes UK 2026: Clinical Comparison & Review"}
          </h1>

          <p className="text-stone-600 font-serif text-lg md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-4 md:pl-6 text-left mx-2 md:mx-0">
            {guide?.subheadline ||
              "We benchmarked acoustic frequency, handle ergonomics, battery longevity, gum safety and replacement head pricing. Here is the clinical breakdown for UK buyers."}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 w-full border-t border-stone-200 pt-6">
            <div className="flex items-center gap-4">
              <img
                src={guide?.drOliviaVerdict?.avatar || "/img/toothbrushes/miroooo-dr-olivia-dental-consultant.webp"}
                alt={guide?.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
              />
              <div className="text-left flex flex-col">
                <span className="font-bold text-stone-900">{guide?.drOliviaVerdict?.name || "Dr. Olivia, BDS"}</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">
                  {guide?.drOliviaVerdict?.title || "Clinical Dental Consultant & Oral Health Specialist"}
                </span>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 uppercase tracking-widest mt-1">
              Updated {updatedDate} · 8 min read
            </div>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="w-full max-w-4xl mx-auto bg-white border border-stone-200 mb-12 shadow-sm p-3">
          <img
            src={guide?.heroImage || "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"}
            alt={guide?.heroAlt || "Electric Toothbrushes Comparison UK"}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Editorial Body Intro */}
        <div className="prose prose-stone prose-lg max-w-3xl mx-auto text-stone-700">
          {guide?.intro && guide.intro.length > 0 ? (
            guide.intro.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6"
                    : "leading-relaxed mb-6"
                }
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="leading-relaxed mb-6">
              Upgrading your daily oral hygiene routine in 2026 shouldn&apos;t require overpaying for noisy, bulky plastic handles with fragile battery runtimes.
            </p>
          )}

          {/* Quick Verdict Box */}
          {guide?.quickTake && (
            <div className="bg-[#f4f1ea] border border-stone-200 border-l-4 border-l-[#b08d57] p-6 md:p-8 my-8 rounded-sm">
              <strong className="block text-stone-900 text-xs font-bold uppercase tracking-[0.08em] mb-3">
                Quick Verdict — Skip to the Bottom Line
              </strong>
              <p className="text-stone-700 text-sm leading-relaxed m-0">
                {guide.quickTake}
              </p>
            </div>
          )}

          {/* Mid-Content CTA */}
          <div className="flex justify-center my-10">
            <EditorialCtaButton
              href={MIROOOO_URL}
              targetId="intro-cta"
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              variant="primary"
              className="px-8 py-4 text-xs"
            >
              See The #1 Rated Miroooo X2 (£69 Flagship Set) →
            </EditorialCtaButton>
          </div>
        </div>

        {/* Clinical Evaluation Criteria */}
        <div className="max-w-3xl mx-auto bg-white border border-stone-200 p-6 md:p-8 mb-12 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 text-center font-serif">
            Clinical Evaluation Criteria &amp; Testing Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {(guide?.criteria && guide.criteria.length > 0
              ? guide.criteria
              : defaultEvaluationCriteria
            ).map((criterion, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <ShieldCheck className="text-emerald-600 shrink-0 mt-0.5 h-4 w-4" />
                <span className="font-semibold text-stone-700 text-xs md:text-sm">
                  {criterion}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-600 bg-stone-50 p-3 text-xs leading-relaxed border border-stone-200">
            Over the past three months, our independent editorial team evaluated leading UK electric toothbrushes across 180+ hours of comparative testing, clinical dental assessments, and thousands of verified consumer reviews.
          </p>
        </div>

        {/* Winner Highlights Card */}
        {guide?.winnerBullets && guide.winnerBullets.length > 0 && (
          <div className="max-w-3xl mx-auto bg-[#f4f7f4] border border-emerald-300 p-6 md:p-8 mb-16 rounded-sm shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-emerald-950 font-serif mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
              Key Findings: Why Miroooo Brush X2 Took #1
            </h3>
            <ul className="space-y-3">
              {guide.winnerBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-stone-800 text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ranked Products List */}
        <div className="space-y-12">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ))}
        </div>

        {/* Comparison Matrix Table */}
        {guide && <ComparisonMatrix guide={guide} />}

        {/* Decision Blocks */}
        {guide && <BuyerBlocksSection guide={guide} />}

        {/* Dr. Olivia Dentist Verdict Section */}
        <div className="my-16 max-w-3xl mx-auto">
          <div className="bg-[#f8f4e6] border border-[#e8dccb] p-6 md:p-10 shadow-sm relative">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#8b1528] mb-8 font-serif">
              Dentist&apos;s Clinical Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative aspect-square w-full max-w-[240px] overflow-hidden border border-[#dfd1bd] bg-white shadow-md">
                  <Image
                    src="/img/toothbrushes/miroooo-brush-x2-dentist-verdict-dr-olivia.webp"
                    alt="Dr. Olivia holding Miroooo Brush X2 Electric Toothbrush"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col text-left">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                  Miroooo Brush X2
                </h3>
                <div className="text-xs uppercase tracking-widest text-[#b08d57] font-bold mb-4">
                  Clinical Gold Standard • 2026
                </div>

                <p className="italic text-stone-800 text-sm leading-relaxed mb-4 border-l-2 border-[#b08d57] pl-3">
                  &ldquo;{guide?.drOliviaVerdict?.quote || "The Miroooo Brush X2 delivers dentist-grade 45° Bass sweep plaque removal while remaining exceptionally gentle on sensitive gums."}&rdquo;
                </p>

                <p className="text-stone-600 text-xs leading-relaxed mb-6">
                  {guide?.drOliviaVerdict?.clinicalRationale || "In our dental assessments, its 51g unibody and acoustic micro-bubbles flush biofilm from tight interdental spaces without abrasive mechanical scraping."}
                </p>

                {/* Trustpilot-style Badge */}
                <div className="bg-white/80 border border-stone-200 p-3 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GreenStarRating rating={5} size={16} />
                    <span className="font-bold text-stone-900 text-xs">Rated 4.9 / 5</span>
                  </div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">4,275+ Verified UK Reviews</span>
                </div>

                <EditorialCtaButton
                  href={MIROOOO_URL}
                  targetId="dentist-verdict-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  variant="gold"
                  className="py-3.5 px-6 text-xs"
                >
                  Claim 50% Off Miroooo X2 (£69) →
                </EditorialCtaButton>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Product Side-by-Side Comparison Table */}
        <CompetitorComparisonTable />

        {/* FAQ Accordion */}
        <FaqSection faqs={guide?.faqs} />

        {/* Final Outro & Conclusion CTA */}
        <div className="flex justify-center mb-8 text-[#b08d57] tracking-[0.5em] text-xs">
          ✦ ✦ ✦
        </div>

        <div className="text-center py-8 mb-12 bg-white border border-stone-200 p-8 shadow-sm">
          <p className="text-stone-500 font-serif italic text-xl mb-4">
            Ready to upgrade to next-generation acoustic oral care?
          </p>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6">
            Get The Miroooo Brush X2 Complete Flagship Set
          </h3>
          <EditorialCtaButton
            href={MIROOOO_URL}
            targetId="bottom-outro-cta"
            loadingTarget={loadingTarget}
            setLoadingTarget={setLoadingTarget}
            variant="primary"
            className="py-5 px-10 text-xs"
          >
            Check Availability &amp; Claim Included Package Bundle →
          </EditorialCtaButton>
          <p className="text-[11px] text-stone-400 font-bold uppercase tracking-widest mt-6">
            90-Day Money-Back Guarantee · 3-Year Warranty · Free UK Tracked Delivery
          </p>
        </div>

      </div>

      {/* Sticky Bottom Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-50 md:hidden">
        <div className="p-3 px-4 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="font-bold text-sm text-stone-900 leading-tight">Miroooo Brush X2</span>
            <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wide">✓ Save 50% (£69) + Free Package</span>
          </div>
          <a
            href={MIROOOO_URL}
            rel="noopener noreferrer sponsored"
            onClick={(event) => handleOutboundClick(event, setLoadingTarget, "mobile-sticky-cta")}
            className="bg-[#b08d57] hover:bg-[#9a7b4c] text-white px-5 py-3 font-bold text-xs tracking-wider uppercase shadow-md whitespace-nowrap relative overflow-hidden group rounded-sm transition-colors"
            aria-busy={loadingTarget === "mobile-sticky-cta"}
          >
            {loadingTarget === "mobile-sticky-cta" ? (
              <OutboundLoader />
            ) : (
              <span className="relative z-10 flex items-center gap-1">
                Shop <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
