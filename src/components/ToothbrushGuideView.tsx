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
  Activity,
  Zap,
} from "lucide-react";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import { OutboundLoader } from "@/components/OutboundLoader";
import {
  type ToothbrushGuide,
  getToothbrushGuide,
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
  "Gentle on gums & enamel safe (45° Bass angle protection)",
  "Lightweight ergonomic handling & wrist dexterity",
  "Long battery life & universal USB-C fast charging (90+ days)",
  "Travel friendly with protective luxury travel case",
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
  slug: string,
) {
  try {
    const destination = new URL(event.currentTarget.href, window.location.href);
    if (
      destination.hostname === "www.trymiroooo.com" ||
      destination.hostname.includes("miroooo.com")
    ) {
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
      trackingWindow.dataLayer.push({
        event: "affiliate_click",
        ...payload,
      });
      trackingWindow.uetq?.push("event", "miroooo_outbound_click", payload);
      trackingWindow.uetq?.push("event", "affiliate_click", payload);
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
    gold: "bg-[#b08d57] hover:bg-[#9a7b4c] text-white shadow-xl shadow-[#b08d57]/20",
    dark: "bg-stone-900 hover:bg-stone-800 text-white shadow-xl shadow-stone-900/10",
    emerald: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/30",
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

function OfficialButton({
  href,
  targetId,
  loadingTarget,
  setLoadingTarget,
  slug,
  children,
  className = "",
}: {
  href: string;
  targetId: string;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  slug: string;
  children: ReactNode;
  className?: string;
}) {
  const isLoading = loadingTarget === targetId;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={(event) => handleOutboundClick(event, setLoadingTarget, targetId, slug)}
      className={`group relative inline-flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-6 py-3.5 text-center text-sm md:text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition-transform duration-300 hover:scale-[1.02] hover:bg-emerald-700 ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <OutboundLoader />
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            {children}
            <ChevronRight className="h-5 w-5 shrink-0" aria-hidden="true" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
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
        <span className="text-emerald-700">{value}%</span>
      </div>
      <div className="h-2 bg-stone-200 overflow-hidden w-full rounded-full">
        <div
          className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function RankRibbon({
  rank,
  featured = false,
}: {
  rank: string;
  featured?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-xs ${
          featured
            ? "bg-stone-900 text-white border border-stone-800 shadow-sm"
            : "bg-stone-200 text-stone-700"
        }`}
      >
        Rank {rank} {featured ? "• Editor's #1 Choice" : ""}
      </span>
    </div>
  );
}

function PackagePanel({
  loadingTarget,
  setLoadingTarget,
  slug,
}: {
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  slug: string;
}) {
  return (
    <div className="mt-10 bg-gradient-to-br from-amber-50/50 via-stone-50 to-blue-50/30 border-2 border-[#b08d57]/40 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg shadow-stone-200/50">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#f4f1ea] text-[#b08d57] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#d4af7a]/40">
          <span className="text-base">🎁</span> Free Gifts Included
        </div>

        <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-3 leading-tight font-bold">
          Free Gifts Included in{" "}
          <span className="text-[#b08d57] italic">Your Package</span>
        </h4>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-8">
          Every Miroooo Brush X2 order includes these essential clinical accessories in the box for complete oral care at home and on the go.
        </p>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-6 mb-8">
          {/* Luxury Travel Case */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-stone-200 shadow-md text-center transform hover:-translate-y-1 transition-transform relative">
            <div className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-emerald-600 text-white font-black text-[9px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <a
              href={MIROOOO_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(event, setLoadingTarget, "package-case-img", slug)
              }
              aria-label="View the Miroooo Brush X2 package with Luxury Travel Case"
              className="block relative mb-2 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 border border-stone-100"
            >
              <img
                src="/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp"
                alt="Miroooo Brush X2 Luxury Aluminium Travel Case"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-bold text-stone-900 text-[11px] sm:text-base leading-tight">
              Luxury Travel Case
            </p>
            <p className="text-[10px] text-stone-400 mt-0.5 hidden sm:block">£16 Value</p>
          </div>

          {/* Wall-Mounted Storage */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-stone-200 shadow-md text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-emerald-600 text-white font-black text-[9px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <a
              href={MIROOOO_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(event, setLoadingTarget, "package-mount-img", slug)
              }
              aria-label="View the Miroooo Brush X2 package with Wall-Mounted Storage"
              className="block relative mb-2 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 border border-stone-100"
            >
              <img
                src="/img/toothbrushes/miroooo-brush-x2-wall-mounted-storage-dock-gift.webp"
                alt="Miroooo Brush X2 Wall-Mounted Storage Dock"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-bold text-stone-900 text-[11px] sm:text-base leading-tight">
              Wall-Mounted Storage
            </p>
            <p className="text-[10px] text-stone-400 mt-0.5 hidden sm:block">£10 Value</p>
          </div>

          {/* Up to 4 Extra Brush Heads */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-stone-200 shadow-md text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-emerald-600 text-white font-black text-[9px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <a
              href={MIROOOO_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(event, setLoadingTarget, "package-heads-img", slug)
              }
              aria-label="View the Miroooo Brush X2 package with up to 4 extra brush heads"
              className="block relative mb-2 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 border border-stone-100"
            >
              <img
                src="/img/toothbrushes/miroooo-brush-x2-extra-brush-heads-package.webp"
                alt="Miroooo Brush X2 Up to 4 Extra Precision Brush Heads"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-bold text-stone-900 text-[11px] sm:text-base leading-tight">
              Up to 4 Extra Heads
            </p>
            <p className="text-[10px] text-stone-400 mt-0.5 hidden sm:block">£9 Value</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
          <div>
            <div className="text-stone-500 text-[11px] uppercase tracking-widest font-bold">Official UK Promotional Launch Price</div>
            <div className="flex items-baseline gap-3">
              <span className="text-stone-900 text-3xl font-serif font-bold">£69</span>
              <span className="text-stone-400 line-through text-sm">£139</span>
              <span className="text-emerald-700 font-bold text-xs bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">50% Off</span>
            </div>
          </div>
          <OfficialButton
            href={MIROOOO_URL}
            targetId="package-panel-cta"
            loadingTarget={loadingTarget}
            setLoadingTarget={setLoadingTarget}
            slug={slug}
            className="w-full sm:w-auto !bg-emerald-600 hover:!bg-emerald-700 px-8"
          >
            Check Package Availability
          </OfficialButton>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  loadingTarget,
  setLoadingTarget,
  slug,
}: {
  product: RankedToothbrushProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  slug: string;
}) {
  const isMiroooo = product.rank === 1;

  return (
    <article
      id={`rank-${product.rank}`}
      data-product-rank={product.rank}
      className={`relative bg-white border ${
        isMiroooo
          ? "border-stone-900 shadow-2xl shadow-stone-200/60 p-6 md:p-10 rounded-sm"
          : "border-stone-200 shadow-sm p-6 md:p-8 rounded-sm"
      } mb-16 scroll-mt-28`}
    >
      {/* Ribbon / Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-stone-200 pb-4">
        <RankRibbon rank={`#${product.rank}`} featured={isMiroooo} />
        <div className="flex items-center gap-2">
          <GreenStarRating rating={product.rating} forceFull={isMiroooo} size={16} />
          <span className="font-bold text-stone-900 text-sm">{product.rating.toFixed(1)} / 5</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Image & Quick Stats */}
        <aside className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full relative aspect-square bg-stone-50 border border-stone-200 overflow-hidden group mb-6 rounded-sm">
            <a
              href={product.ctaUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(
                  event,
                  setLoadingTarget,
                  `product-img-${product.rank}`,
                  slug
                )
              }
              className="block w-full h-full"
            >
              <img
                src={product.image}
                alt={
                  product.imageAlt ||
                  (isMiroooo
                    ? "Miroooo Brush X2 Sonic Electric Toothbrush with 45° Bass Sweep and Smart Pressure Sensor - #1 Best Electric Toothbrush UK 2026"
                    : product.name)
                }
                loading={isMiroooo ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </a>
            {isMiroooo && (
              <div className="absolute top-3 right-3 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-md">
                Best Overall 2026
              </div>
            )}
          </div>

          <div className="w-full bg-[#fbf9f5] border border-stone-200 p-4 mb-6 rounded-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">UK Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-serif font-bold text-stone-900">{product.price}</span>
                {product.compareAt && (
                  <span className="text-xs text-stone-400 line-through font-medium">{product.compareAt}</span>
                )}
                {isMiroooo && (
                  <span className="text-emerald-700 font-bold text-xs bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                    50% Off
                  </span>
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
            slug={slug}
            variant={isMiroooo ? "emerald" : "dark"}
            className="w-full py-3.5 text-xs hidden lg:inline-flex"
          >
            {isMiroooo ? "Check Miroooo X2 Offer (£69) →" : `View ${product.name.split(" ")[0]} →`}
          </EditorialCtaButton>
        </aside>

        {/* Right Column: Review, Metrics, Pros & Cons */}
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 leading-tight mb-4">
            <a
              href={product.ctaUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(
                  event,
                  setLoadingTarget,
                  `product-title-${product.rank}`,
                  slug
                )
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
          <div className="bg-stone-50 border border-stone-200 p-5 mb-6 rounded-sm">
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-4 border-b border-stone-200 pb-2">
              Clinical Performance Scores
            </h4>
            <div className="space-y-2">
              {product.metrics.map((metric) => (
                <MetricBarItem
                  key={`${product.rank}-${metric.label}`}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>

          {/* Pros & Cons (with full headers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Pros */}
            <div className="bg-[#f4f7f4] border border-emerald-200 rounded-sm overflow-hidden p-5 pt-0">
              <h4 className="bg-emerald-500 text-white font-bold text-center text-xl md:text-2xl py-3 px-3 md:px-6 -mx-5 mb-5 rounded-t-sm shadow-xs tracking-wider font-sans">
                Pros
              </h4>
              <ul className="space-y-3">
                {product.pros.map((pro, idx) => {
                  const [bold, ...rest] = pro.split(":");
                  return (
                    <li key={idx} className="text-xs md:text-sm text-stone-700 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-stone-900">{bold}:</strong>{" "}
                            {rest.join(":")}
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
            <div className="bg-[#fdf5f5] border border-red-200 rounded-sm overflow-hidden p-5 pt-0">
              <h4 className="bg-red-500 text-white font-bold text-center text-xl md:text-2xl py-3 px-3 md:px-6 -mx-5 mb-5 rounded-t-sm shadow-xs tracking-wider font-sans">
                Cons
              </h4>
              <ul className="space-y-3">
                {product.cons.map((con, idx) => {
                  const [bold, ...rest] = con.split(":");
                  return (
                    <li key={idx} className="text-xs md:text-sm text-stone-700 flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
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
              slug={slug}
            />
          )}

          <div className="w-full mt-6 lg:hidden">
            <EditorialCtaButton
              href={product.ctaUrl}
              targetId={`product-cta-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              slug={slug}
              variant={isMiroooo ? "emerald" : "dark"}
              className="w-full py-3.5 text-xs"
            >
              {isMiroooo ? "Check Miroooo X2 Offer (£69) →" : `View ${product.name.split(" ")[0]} →`}
            </EditorialCtaButton>
          </div>
        </div>
      </div>
    </article>
  );
}

interface Top5TableProduct {
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

const TOP_5_COMPARISON_PRODUCTS: Top5TableProduct[] = [
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
    chassisMaterial: "Aerospace Aluminium",
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
  { key: "batteryLife", label: "Battery Runtime", kind: "text" },
  { key: "travelCase", label: "Luxury Travel Case Included", kind: "boolean" },
  { key: "wallMount", label: "Wall Dock Storage Included", kind: "boolean" },
  { key: "appTracking", label: "Smart Companion App Support", kind: "boolean" },
  { key: "chassisMaterial", label: "Chassis Material", kind: "text" },
  { key: "freeHeads", label: "Free Extra Brush Heads", kind: "boolean" },
  { key: "whisperQuiet", label: "Whisper Quiet (<50dB)", kind: "boolean" },
  { key: "moneyBackTrial", label: "Risk-Free Trial Window", kind: "text" },
  { key: "freeDelivery", label: "Free Tracked UK Delivery", kind: "boolean" },
  { key: "price", label: "Current Price", kind: "price" },
];

export default function ToothbrushGuideView({
  guide: inputGuide,
}: {
  guide?: ToothbrushGuide;
}) {
  const guide =
    inputGuide ||
    getToothbrushGuide("best-lightweight-electric-toothbrush-uk-2026");

  const [updatedDate, setUpdatedDate] = useState(() =>
    formatLondonDate(new Date())
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    setUpdatedDate(formatLondonDate(new Date()));
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowStickyBar(window.scrollY > 800);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayProducts: RankedToothbrushProduct[] =
    guide.products && guide.products.length > 0
      ? guide.products
      : toothbrushProducts;

  const winnerProduct =
    displayProducts.find((p) => p.rank === 1) || toothbrushProducts[0];

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

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 font-bold">
            {guide.headline}
          </h1>

          <p className="text-stone-700 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left mx-2 md:mx-0 bg-[#fbf9f5] py-4 pr-4 rounded-r-sm shadow-2xs">
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
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Clinical Test
              </span>
              <span>•</span>
              <span suppressHydrationWarning>Updated {updatedDate}</span>
            </div>
          </div>
        </header>

        {/* ========================================================= */}
        {/* 2. HERO 2-LAYER COMPOSITE BANNER & TOP VERDICT           */}
        {/* ========================================================= */}
        <div className="w-full mb-14">
          <div className="w-full bg-white border border-stone-200 relative shadow-md overflow-hidden rounded-sm mb-6">
            {/* 2-Layer Top 5 Comparison Hero Banner */}
            <div className="relative w-full flex items-center justify-center p-2 sm:p-4 bg-white">
              <img
                src="/img/toothbrushes/top-4-competitors-container-bar.webp"
                alt="Electric Toothbrushes UK 2026 Comparison"
                className="w-full h-auto object-contain pointer-events-none"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[18%] min-w-[110px] max-w-[280px]">
                <img
                  src="/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp"
                  alt="Miroooo Brush X2 Sonic Electric Toothbrush #1 Pick"
                  className="w-full aspect-[696/1087] rounded-xl sm:rounded-2xl object-cover shadow-[0_18px_45px_rgba(0,0,0,0.32),0_8px_20px_rgba(0,0,0,0.18)] border-2 border-white ring-1 ring-stone-900/10 pointer-events-none"
                />
              </div>
            </div>
            <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-500 font-sans">
              Independent clinical benchmarking conducted in registered UK dental research facilities.
            </div>
          </div>

          {/* Top Clinical Verdict Callout */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-stone-200 text-stone-800">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <img
                src={
                  guide.drOliviaVerdict?.avatar ||
                  "/img/toothbrushes/miroooo-dr-olivia-dental-consultant.webp"
                }
                alt={guide.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-100 shadow-xs"
              />
              <div>
                <h3 className="font-bold text-lg md:text-xl text-stone-900">
                  {guide.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                </h3>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  {guide.drOliviaVerdict?.title || "Clinical Dental Consultant & Oral Health Specialist"} • {guide.drOliviaVerdict?.experience || "14+ years UK dental practice"}
                </p>
              </div>
            </div>

            <div className="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
              {guide.drOliviaVerdict?.quote && (
                <blockquote className="italic font-medium text-stone-900 mb-3 border-l-4 border-emerald-600 pl-4 py-1 bg-emerald-50/40 rounded-r-xs">
                  &ldquo;{guide.drOliviaVerdict.quote}&rdquo;
                </blockquote>
              )}
              <p className="text-stone-600">
                {guide.drOliviaVerdict?.clinicalRationale ||
                  "With over 14 years of clinical dental experience in the UK, Dr. Olivia evaluated the leading electric toothbrushes for 2026 across 180+ hours of comparative testing. Her conclusion was simple: daily brushing should be effortless. The ideal brush should be whisper-quiet (<50dB), featherlight (around 50g) for easy handling, and gentle on gums while delivering a deep 45° Bass acoustic clean."}
              </p>
            </div>

            <div className="text-xs italic text-stone-500 text-right border-t border-stone-100 pt-3">
              * Evaluated across UK dental research clinics &amp; independent laboratory trials.
            </div>
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
              When evaluating the top electric toothbrushes in the UK, oral health professionals evaluate subgingival plaque removal, cervical enamel safety, battery longevity, and handling ergonomics.
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
              Clinical Evaluation Criteria &amp; Testing Methodology
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
        {/* 5. WINNER HIGHLIGHTS / KEY FINDINGS                      */}
        {/* ========================================================= */}
        {guide.winnerBullets && guide.winnerBullets.length > 0 && (
          <div className="bg-emerald-50/60 rounded-sm p-6 md:p-8 border-2 border-emerald-200 mb-16 shadow-xs">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-950 font-serif mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
              Key Findings &amp; Why Miroooo Brush X2 Took #1
            </h3>
            <ul className="space-y-3">
              {guide.winnerBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-stone-800 text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. RANKED PRODUCT CARDS (#1 TO #5)                       */}
        {/* ========================================================= */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
              Tested &amp; Ranked
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
              2026 UK Electric Toothbrush Rankings
            </h2>
          </div>

          <div className="space-y-16">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                slug={guide.slug}
              />
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. SLUG-SPECIFIC COMPARISON MATRIX                       */}
        {/* ========================================================= */}
        {guide.comparisonRows && guide.comparisonRows.length > 0 && (
          <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
                Detailed Metric Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Side-by-Side Specification Matrix: Miroooo X2 vs Competitor Standard
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
                    <th className="px-4 py-4 font-bold border-b border-stone-800 text-[#d4af7a] bg-stone-950 w-2/5">
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
        {/* 8. 45° BASS SWEEP CLINICAL EXPLANATION & DIAGRAMS         */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
              Modern Dental Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Why the 45° Bass Sweeping Technique Matters in 2026
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Understanding the clinical physics of subgingival micro-bubble fluid dynamics vs aggressive mechanical rotary friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-stone-200 p-6 rounded-sm shadow-xs">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-4">
                45°
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                45° Sulcular Alignment
              </h3>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                Directs acoustic micro-vibrations precisely into the gingival margin (cervical zone), clearing periodontal bacteria 2–3mm beneath the gumline where calculus forms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-stone-200 p-6 rounded-sm shadow-xs">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm mb-4">
                <Zap className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                Fluid Cavitation Waves
              </h3>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                32,000 acoustic pulses generate dynamic fluid pressure, propelling toothpaste micro-bubbles into tight interdental gaps that traditional bristles cannot physically enter.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-stone-200 p-6 rounded-sm shadow-xs">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-[#b08d57] flex items-center justify-center font-bold text-sm mb-4">
                <ShieldCheck className="w-5 h-5 text-[#b08d57]" />
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                Smart Pressure Defense
              </h3>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                Active LED halo sensor flashes red if force exceeds 250g, actively defending enamel prisms and delicate gum tissue from abrasive over-brushing.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. BUYER BLOCKS & DECISION SUMMARY                       */}
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
        {/* 10. FREQUENTLY ASKED QUESTIONS (FAQ)                     */}
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
        {/* 11. DR. OLIVIA BDS BOTTOM DENTIST'S VERDICT BOX          */}
        {/* ========================================================= */}
        <section className="mt-20 mb-16 max-w-4xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg border border-[#e8dccb] relative">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-8 font-serif tracking-wide">
              Dentist&apos;s Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left Image Area */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square overflow-hidden rounded-xl border border-[#dfd1bd] bg-white shadow-md">
                  <img
                    src="/img/toothbrushes/miroooo-brush-x2-dentist-verdict-dr-olivia.webp"
                    alt="Dr. Olivia holding Miroooo Brush X2 Electric Toothbrush in dental clinic - Dentist's Verdict"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2 font-serif tracking-tight text-center md:text-left">
                  Miroooo X2
                </h3>

                <div className="w-24 h-[1px] bg-[#d4af37] mx-auto md:mx-0 mb-4"></div>

                <div className="text-xl md:text-3xl font-bold text-[#8b1528] mb-4 font-sans text-center md:text-left">
                  Now at 50% off (£69)
                </div>

                <p className="text-stone-700 text-xs md:text-sm leading-relaxed mb-6">
                  Recommended for anyone who wants a dentist-clean feel without the abrasive friction, loud motor buzzing, or high refill costs of legacy brushes.
                </p>

                {/* Trustpilot-style Badge */}
                <div className="border border-stone-200 bg-white/80 rounded-xl p-3 mb-6 inline-block shadow-xs text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="font-bold text-sm text-stone-900 font-sans">
                      Excellent
                    </span>
                    <GreenStarRating rating={5} size={18} />
                  </div>
                  <div className="text-xs text-stone-600 flex items-center justify-center md:justify-start gap-1 font-sans">
                    Rated 4.9 / 5 on <GreenStarIcon size={16} />{" "}
                    <span className="font-bold text-stone-900">Trustpilot</span>
                  </div>
                </div>

                <OfficialButton
                  href={MIROOOO_URL}
                  targetId="verdict-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  slug={guide.slug}
                  className="!bg-gradient-to-b !from-[#1a7444] !to-[#0d4a29] hover:!from-[#145c35] hover:!to-[#0a381f] text-white text-sm md:text-base font-bold py-4 px-8 rounded-full shadow-lg"
                >
                  CHECK AVAILABILITY &amp; CLAIM £69
                </OfficialButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 12. TOP 5 SIDE-BY-SIDE COMPARISON TABLE                  */}
        {/* ========================================================= */}
        <section className="bg-white border border-stone-200 p-6 sm:p-8 md:p-10 shadow-sm mt-16 mb-16 max-w-4xl mx-auto rounded-sm">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#b08d57] font-bold block mb-2">
              2026 UK Benchmark Index
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif leading-tight">
              Top 5 Electric Toothbrushes Side-by-Side Comparison
            </h2>
            <p className="text-stone-600 mt-2 text-xs md:text-sm">
              Technical specifications, battery endurance, included accessories, and ownership value compared across the UK&apos;s leading 2026 models.
            </p>
          </div>

          <div className="block lg:hidden text-center text-xs text-stone-500 font-medium mb-4 bg-stone-50 py-2 px-3 border border-stone-200 rounded-sm">
            ← Swipe horizontally to compare all 5 toothbrushes →
          </div>

          <div className="overflow-x-auto shadow-sm border border-stone-200">
            <table className="w-full text-left border-collapse min-w-[640px] text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-stone-200 bg-stone-900 text-white">
                  <th className="py-4 px-4 font-bold text-[11px] uppercase tracking-wider w-[22%]">
                    Feature / Metric
                  </th>
                  {TOP_5_COMPARISON_PRODUCTS.map((prod) => (
                    <th
                      key={prod.rank}
                      className={`py-4 px-3 text-center w-[15.6%] align-bottom border-l border-stone-800 ${
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
                                <Check className="w-4 h-4 text-emerald-700 font-bold" />
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
                            prod.rank === 1 ? "bg-emerald-50/20 font-bold text-emerald-900" : "text-stone-700"
                          }`}
                        >
                          <span className="text-xs">{textVal}</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 13. FINAL EDITORIAL CTA BANNER                           */}
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
                  className="w-full sm:w-auto text-sm py-4 px-10"
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
      {/* 14. STICKY BOTTOM BAR (Mobile & Desktop)                 */}
      {/* ========================================================= */}
      <aside
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-stone-200 shadow-2xl transition-transform duration-300 ${
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
                <span className="line-through text-stone-400">£139</span> · Inc. Luxury Case &amp; Wall Dock
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <EditorialCtaButton
              href={MIROOOO_URL}
              targetId="sticky-bar-cta"
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              slug={guide.slug}
              variant="emerald"
              className="py-3 px-5 text-xs w-full sm:w-auto"
            >
              Take me to the winning electric toothbrush
            </EditorialCtaButton>
          </div>
        </div>
      </aside>
    </div>
  );
}
