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
  Zap,
  Battery,
  Volume2,
  Gift,
  ArrowRight,
  Star,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import {
  toothbrushProducts,
  type RankedToothbrushProduct,
  type ToothbrushMetric,
} from "@/data/toothbrushes";

const defaultEvaluationCriteria = [
  "Subgingival plaque removal & deep cleaning efficacy",
  "Enamel safety & gentle gumline protection (45° Bass angle)",
  "Lightweight ergonomic handling (wrist fatigue reduction)",
  "Battery endurance & universal USB-C fast charging (90+ days)",
  "Acoustic noise suppression & quiet magnetic motor (<50dB)",
  "Chassis durability & 100% mould-resistant aerospace unibody",
  "Micro-diamond 3D contour bristle geometry & softness",
  "Travel convenience (protective hard case & magnetic wall dock)",
  "Affordable recurring replacement brush head economics",
  "Clinical testing verification & 90-day risk-free home trial",
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
        destination.searchParams.set("utm_medium", "editorial");
      }
      if (!destination.searchParams.has("utm_campaign")) {
        destination.searchParams.set(
          "utm_campaign",
          "best_electric_toothbrush_uk_2026",
        );
      }

      event.currentTarget.href = destination.toString();

      const trackingWindow = window as TrackingWindow;
      const payload = {
        event_category: "editorial_comparison",
        event_label: target,
        outbound_url: destination.toString(),
        page_type: "best_electric_toothbrush_uk_2026",
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
    // Keep native anchor navigation
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

function OfficialButton({
  href,
  targetId,
  loadingTarget,
  setLoadingTarget,
  children,
  className = "",
  testId,
}: {
  href: string;
  targetId: string;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  children: ReactNode;
  className?: string;
  testId?: string;
}) {
  const isLoading = loadingTarget === targetId;

  return (
    <a
      href={href}
      rel="noopener noreferrer sponsored"
      data-testid={testId}
      onClick={(event) =>
        handleOutboundClick(event, setLoadingTarget, targetId)
      }
      className={`group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-6 py-4 text-center text-lg font-bold text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:bg-emerald-700 hover:scale-[1.01] active:scale-[0.99] ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <OutboundLoader />
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            {children}
            <ChevronRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

function MetricBar({ label, value }: ToothbrushMetric) {
  return (
    <div className="mb-3.5">
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1.5 text-stone-700">
        <span>{label}</span>
        <span className="text-emerald-700">{value}%</span>
      </div>
      <div className="h-2 bg-stone-200/80 rounded-full overflow-hidden w-full">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
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
  const outerSize = featured ? "h-[110px] w-[128px]" : "h-[90px] w-[105px]";
  const triangleSize = featured ? "h-[100px] w-[118px]" : "h-[82px] w-[98px]";
  const textBox = featured ? "h-[70px] w-[75px]" : "h-[58px] w-[62px]";
  const textSize = featured ? "text-[1.85rem]" : "text-[1.45rem]";

  return (
    <div
      aria-label={`Rank ${rank}`}
      className={`pointer-events-none absolute left-0 top-0 z-30 overflow-visible rounded-tl-2xl ${outerSize}`}
    >
      {featured && (
        <div
          className={`absolute left-[6px] top-[6px] rounded-tl-2xl bg-stone-900/20 blur-[1px] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <div
        className={`absolute left-0 top-0 rounded-tl-2xl ${
          featured
            ? "bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-900 shadow-[0_14px_24px_rgba(5,150,105,0.35)]"
            : "bg-gradient-to-br from-stone-500 via-stone-700 to-stone-900 shadow-md"
        } [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
      />
      {featured && (
        <div
          className={`absolute left-[2px] top-[2px] rounded-tl-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.1)_35%,rgba(255,255,255,0)_60%)] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <span
        className={`absolute left-0 top-0 flex items-center justify-center font-serif font-black leading-none text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] ${textBox} ${textSize}`}
      >
        {rank}
      </span>
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
    <div className="mt-10 bg-gradient-to-br from-[#f8f6f0] via-[#f4efe4] to-[#ebe3d3] border-2 border-[#d6c7b0] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg shadow-stone-200/60">
      {/* Decorative ambient aura */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#e8dbc3]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-[#dfcfb4]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#8b1528] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          <Gift className="w-3.5 h-3.5" /> Included Free in Package (£35 Value)
        </div>

        <h4 className="font-serif font-bold text-2xl md:text-3xl text-stone-900 mb-3 leading-tight">
          What&apos;s Inside{" "}
          <span className="text-[#8b1528] bg-white/80 border border-[#e2d5c1] px-2.5 py-0.5 rounded-lg inline-block">
            Your £69 Package
          </span>
        </h4>

        <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
          Every Miroooo Brush X2 order currently includes the complete clinical accessory kit directly in the box for home and travel oral care:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Luxury Travel Case */}
          <div className="bg-white rounded-xl p-4 border border-[#e2d5c1] shadow-sm text-center transform hover:-translate-y-1 transition-transform">
            <div className="relative mb-3 rounded-lg overflow-hidden bg-stone-50 border border-stone-100">
              <span className="absolute top-2 right-2 bg-[#8b1528] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                £16 Value
              </span>
              <img
                src="/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp"
                alt="Miroooo Brush X2 Luxury Aluminium Travel Case"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="font-bold text-stone-900 text-sm leading-tight mb-1 font-serif">
              Luxury Travel Case
            </p>
            <p className="text-xs text-stone-500">Slim aerospace travel protective case</p>
          </div>

          {/* Wall-Mounted Storage */}
          <div className="bg-white rounded-xl p-4 border border-[#e2d5c1] shadow-sm text-center transform hover:-translate-y-1 transition-transform">
            <div className="relative mb-3 rounded-lg overflow-hidden bg-stone-50 border border-stone-100">
              <span className="absolute top-2 right-2 bg-[#8b1528] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                £10 Value
              </span>
              <img
                src="/img/toothbrushes/miroooo-brush-x2-wall-mounted-storage-dock-gift.webp"
                alt="Miroooo Brush X2 Wall-Mounted Storage Dock"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="font-bold text-stone-900 text-sm leading-tight mb-1 font-serif">
              Wall-Mounted Storage
            </p>
            <p className="text-xs text-stone-500">Magnetic bathroom hygiene dock cradle</p>
          </div>

          {/* Up to 4 Extra Brush Heads */}
          <div className="bg-white rounded-xl p-4 border border-[#e2d5c1] shadow-sm text-center transform hover:-translate-y-1 transition-transform">
            <div className="relative mb-3 rounded-lg overflow-hidden bg-stone-50 border border-stone-100">
              <span className="absolute top-2 right-2 bg-[#8b1528] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                £9 Value
              </span>
              <img
                src="/img/toothbrushes/miroooo-brush-x2-extra-brush-heads-package.webp"
                alt="Miroooo Brush X2 Extra Micro-Diamond Brush Heads"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="font-bold text-stone-900 text-sm leading-tight mb-1 font-serif">
              Up to 4 Extra Heads
            </p>
            <p className="text-xs text-stone-500">High-density micro-diamond bristle heads</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#d6c7b0]/70">
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Promotion Bundle Price</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-stone-900">£69</span>
              <span className="text-stone-400 line-through text-sm font-medium">£139</span>
              <span className="text-emerald-700 text-xs font-bold uppercase bg-emerald-100/80 px-2 py-0.5 rounded">Save 50%</span>
            </div>
          </div>
          <OfficialButton
            href="https://www.trymiroooo.com/products/miroooo-x2"
            targetId="package-cta-btn"
            loadingTarget={loadingTarget}
            setLoadingTarget={setLoadingTarget}
            className="w-full sm:w-auto px-8 !bg-stone-900 hover:!bg-stone-800"
          >
            Claim £35 Free Bundle With X2
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
}: {
  product: RankedToothbrushProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  const isMiroooo = product.rank === 1;

  return (
    <article
      id={`rank-${product.rank}`}
      data-product-rank={product.rank}
      className={`relative bg-white rounded-2xl md:rounded-3xl shadow-sm border ${
        isMiroooo
          ? "border-emerald-600 ring-4 ring-emerald-500/10 pt-8 md:pt-10"
          : "border-stone-200"
      } p-6 md:p-10 pt-16 md:pt-20 scroll-mt-28`}
    >
      <RankRibbon rank={`#${product.rank}`} featured={isMiroooo} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        {/* Left Column: Image & Quick Stats */}
        <aside className="lg:col-span-4 flex flex-col items-center">
          <div className="lg:sticky lg:top-28 w-full flex flex-col items-center">
            <div className="w-full text-center lg:hidden mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
                Rank #{product.rank} • {product.badge}
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                {product.name}
              </h2>
            </div>

            <div className="relative w-full mb-6">
              <a
                href={product.ctaUrl}
                rel="noopener noreferrer sponsored"
                onClick={(event) =>
                  handleOutboundClick(
                    event,
                    setLoadingTarget,
                    `product-img-${product.rank}`,
                  )
                }
                className="block w-full group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50"
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
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              {isMiroooo && (
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  #1 Editor&apos;s Choice
                </div>
              )}
            </div>

            <div className="text-center mb-4 lg:mb-6 w-full bg-stone-50/80 p-4 rounded-xl border border-stone-100">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="text-3xl font-serif font-bold text-stone-900">
                  {product.price}
                </span>
                {product.compareAt ? (
                  <span className="text-base text-stone-400 line-through font-medium">
                    {product.compareAt}
                  </span>
                ) : null}
              </div>
              <GreenStarRating
                rating={product.rating}
                forceFull={isMiroooo}
                size={22}
                className="mb-1.5"
              />
              <p className="text-xs font-semibold text-stone-500">
                Verified rating {product.rating.toFixed(1)} / 5.0 ({product.ratingLabel})
              </p>
            </div>

            <div className="w-full hidden lg:block">
              <OfficialButton
                href={product.ctaUrl}
                targetId={`product-desktop-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                className={isMiroooo ? "!bg-emerald-600 hover:!bg-emerald-700" : "!bg-stone-800 hover:!bg-stone-900"}
              >
                {isMiroooo ? "Check Availability & Offers" : product.ctaLabel}
              </OfficialButton>
            </div>
          </div>
        </aside>

        {/* Right Column: Details */}
        <div className="lg:col-span-8">
          <div className="hidden lg:block mb-4">
            <span className="inline-block bg-stone-100 text-stone-700 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-2">
              {product.badge}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
              <a
                href={product.ctaUrl}
                rel="noopener noreferrer sponsored"
                onClick={(event) =>
                  handleOutboundClick(
                    event,
                    setLoadingTarget,
                    `product-title-${product.rank}`,
                  )
                }
                className="hover:text-emerald-700 transition-colors"
              >
                {product.name}
              </a>
            </h2>
          </div>

          <div className="prose prose-stone prose-lg max-w-none mb-8 space-y-4">
            {product.review.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-stone-700 leading-relaxed text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          {/* Quick Specifications Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 bg-stone-50 p-4 rounded-xl border border-stone-200/80 text-xs">
            <div className="flex flex-col">
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Weight</span>
              <span className="font-bold text-stone-900 mt-0.5">{product.weight.split(" ")[0]}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Battery Life</span>
              <span className="font-bold text-stone-900 mt-0.5">{product.batteryLife.split(" ")[0]} Days</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Noise Level</span>
              <span className="font-bold text-stone-900 mt-0.5">{product.noiseLevel.split(" ")[0]}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">Warranty</span>
              <span className="font-bold text-stone-900 mt-0.5">{product.warranty.split(" ")[0]}</span>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-stone-50/90 rounded-2xl p-5 md:p-6 border border-stone-200 mb-8">
            <h4 className="font-serif font-bold text-stone-900 mb-4 text-base md:text-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Clinical Lab Performance Metrics
            </h4>
            <div className="space-y-2.5">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Pros */}
            <div className="bg-emerald-50/40 rounded-2xl p-5 md:p-6 border border-emerald-200">
              <h4 className="text-emerald-900 font-serif font-bold text-lg mb-4 flex items-center gap-2 border-b border-emerald-200 pb-2">
                <Check className="w-5 h-5 text-emerald-600" />
                Key Advantages
              </h4>
              <ul className="space-y-3">
                {product.pros.map((pro, idx) => {
                  const [bold, ...rest] = pro.split(":");
                  return (
                    <li key={idx} className="text-sm text-stone-700 flex items-start gap-2.5">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
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
            <div className="bg-rose-50/40 rounded-2xl p-5 md:p-6 border border-rose-200">
              <h4 className="text-rose-900 font-serif font-bold text-lg mb-4 flex items-center gap-2 border-b border-rose-200 pb-2">
                <XCircle className="w-5 h-5 text-rose-600" />
                Considerations &amp; Trade-offs
              </h4>
              <ul className="space-y-3">
                {product.cons.map((con, idx) => {
                  const [bold, ...rest] = con.split(":");
                  return (
                    <li key={idx} className="text-sm text-stone-700 flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold shrink-0 mt-0.5">✗</span>
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

          <div className="w-full mt-8 lg:hidden">
            <OfficialButton
              href={product.ctaUrl}
              targetId={`product-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              className={isMiroooo ? "!bg-emerald-600 hover:!bg-emerald-700" : "!bg-stone-800 hover:!bg-stone-900"}
            >
              {isMiroooo ? "Check Availability & Offers" : product.ctaLabel}
            </OfficialButton>
          </div>
        </div>
      </div>
    </article>
  );
}

interface ComparisonTableProduct {
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

const TOP_5_COMPARISON_PRODUCTS: ComparisonTableProduct[] = [
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

type ComparisonRowDef =
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

const TOP_5_COMPARISON_ROWS: ComparisonRowDef[] = [
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

function CompetitorComparisonTable() {
  return (
    <section className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-stone-200 shadow-sm my-16 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Technical Benchmark Matrix
        </span>
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900">
          Top 5 Electric Toothbrushes Side-by-Side Comparison
        </h2>
        <p className="text-stone-600 mt-2 text-sm md:text-base">
          Direct engineering breakdown across weight, battery chemistry, acoustic motor noise, bundled accessories, and total cost of ownership.
        </p>
      </div>

      <div className="block lg:hidden text-center text-xs text-stone-500 font-medium mb-4 bg-stone-50 py-2.5 px-3 rounded-lg border border-stone-200">
        ← Swipe horizontally to compare all 5 electric toothbrushes →
      </div>

      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full table-fixed text-sm">
          <thead>
            <tr className="border-b-2 border-stone-200">
              <th className="py-4 px-3 sm:px-4 font-bold text-stone-900 text-xs sm:text-sm w-[20%] bg-stone-50 rounded-tl-xl align-bottom">
                Feature / Metric
              </th>
              {TOP_5_COMPARISON_PRODUCTS.map((prod) => (
                <th
                  key={prod.rank}
                  className={`py-4 px-2 text-center w-[16%] align-bottom border-l border-stone-200 ${
                    prod.rank === 1 ? "bg-emerald-50/50 border-t-2 border-t-emerald-600" : "bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 px-2 py-0.5 rounded ${
                        prod.rank === 1
                          ? "bg-emerald-600 text-white"
                          : "text-stone-500 bg-stone-100"
                      }`}
                    >
                      #{prod.rank} {prod.rank === 1 ? "Winner" : "Ranked"}
                    </span>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 flex items-center justify-center p-1 bg-white rounded-xl border border-stone-100 shadow-sm">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="font-serif font-bold text-stone-900 text-sm line-clamp-1 mb-1">
                      {prod.shortName}
                    </span>
                    <div className="mb-1.5 scale-90">
                      <GreenStarRating rating={prod.rating} size={13} />
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-base sm:text-lg font-bold text-stone-900">
                        {prod.price}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-[11px] text-stone-400 line-through">
                          {prod.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
            {TOP_5_COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? "bg-white" : "bg-stone-50/50"}
              >
                <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-800 align-middle text-xs sm:text-sm">
                  {row.label}
                </td>
                {TOP_5_COMPARISON_PRODUCTS.map((prod) => {
                  const isWinnerCol = prod.rank === 1;

                  if (row.kind === "boolean") {
                    const isPassed = prod[row.key];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-stone-100 ${
                          isWinnerCol ? "bg-emerald-50/30 font-bold" : ""
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          {isPassed ? (
                            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-rose-500 shrink-0 opacity-60" />
                          )}
                        </div>
                      </td>
                    );
                  }

                  if (row.kind === "price") {
                    return (
                      <td
                        key={`${prod.rank}-price-row`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-stone-100 ${
                          isWinnerCol ? "bg-emerald-50/30" : ""
                        }`}
                      >
                        <div className="flex items-baseline justify-center gap-1 font-serif">
                          <span className={`font-bold ${isWinnerCol ? "text-emerald-800 text-base" : "text-stone-900"}`}>
                            {prod.price}
                          </span>
                          {prod.originalPrice && (
                            <span className="text-[10px] text-stone-400 line-through">
                              {prod.originalPrice}
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  }

                  const textVal = prod[row.key];
                  return (
                    <td
                      key={`${prod.rank}-${row.key}`}
                      className={`py-3.5 px-2 text-center align-middle border-l border-stone-100 ${
                        isWinnerCol ? "bg-emerald-50/30 font-bold text-emerald-950" : "text-stone-700"
                      }`}
                    >
                      <span className="text-xs sm:text-sm">
                        {textVal}
                      </span>
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

const comparisonMatrixRows = [
  {
    feature: "Chassis & Material",
    miroooo: "Mould-resistant aerospace aluminium unibody (IPX7)",
    competitor: "Polycarbonate plastic handle with dirt-trapping rubber grips",
    whyItMatters: "Aluminium resists black bathroom mildew, drop fractures, and gummy degradation over years of sink use.",
  },
  {
    feature: "Weight & Ergonomics",
    miroooo: "51g Featherlight (Ultralight)",
    competitor: "135g – 140g (Heavy & bulky)",
    whyItMatters: "Reduces hand and wrist fatigue, enabling effortless 2-minute circular dental technique without straining.",
  },
  {
    feature: "Acoustic Motor Sound",
    miroooo: "<50dB Whisper Quiet",
    competitor: "56dB – 64dB+ (Loud mechanical vibration & buzz)",
    whyItMatters: "Eliminates high-pitch humming and jawbone buzzing during quiet morning routines.",
  },
  {
    feature: "Battery Endurance & Charging",
    miroooo: "90+ Days on 1 Charge (High-Density Cobalt, Universal USB-C)",
    competitor: "14 – 34 Days (Proprietary heavy 2-pin docks)",
    whyItMatters: "Charge only 4 times per year; travel worldwide using your standard phone USB-C cable.",
  },
  {
    feature: "Subgingival Cleaning Action",
    miroooo: "45° Dentist Bass Sweep + Acoustic Micro-Vibrations",
    competitor: "High-friction mechanical spinning or harsh linear vibration",
    whyItMatters: "Flushes plaque out of the subgingival pocket along the gumline without abrading sensitive enamel.",
  },
  {
    feature: "Replacement Head Economy",
    miroooo: "Affordable Direct Refills (~£3.50/head)",
    competitor: "£8.00 – £15.00 per replacement head",
    whyItMatters: "Cuts recurring maintenance costs by more than 60% every quarter.",
  },
  {
    feature: "Included Accessories",
    miroooo: "Free Luxury Travel Case, Wall Dock & Extra Heads (£35 Value)",
    competitor: "Handle only; travel cases & docks sold as expensive extras",
    whyItMatters: "Complete out-of-the-box oral hygiene system without buying additional accessories.",
  },
  {
    feature: "Guarantee & Warranty",
    miroooo: "90-Day Money-Back Guarantee + 3-Year Warranty",
    competitor: "14 to 30-Day returns + 1–2 Year Limited Warranty",
    whyItMatters: "100% risk-free home testing with long-term manufacturer reliability protection.",
  },
];

const buyerBlocks = [
  {
    title: "For Gum Health & Plaque Removal",
    body: "Traditional toothbrushes rely on aggressive mechanical scrubbing, which often causes gum recession and micro-scratches on tooth enamel. The Miroooo Brush X2 introduces a gentle 45° Bass acoustic sweep that guides subgingival micro-bubbles under the gumline, lifting stubborn plaque without painful friction.",
  },
  {
    title: "For Everyday Ergonomic Comfort",
    body: "At just 51 grams—less than half the weight of Oral-B and Philips models—the Miroooo X2 feels as natural to manoeuvre as a manual toothbrush. Its acoustic magnetic motor generates less than 50dB of sound, preventing the unpleasant morning skull vibration associated with legacy electric brushes.",
  },
  {
    title: "For Travel & Modern Portability",
    body: "Legacy brushes still rely on chunky, proprietary two-pin shaver plugs and only hold 14 days of power. The Miroooo X2 features a high-density cobalt battery delivering a massive 90 days per charge, rechargeable via any universal USB-C cable with no adapters needed.",
  },
  {
    title: "For Long-Term Ownership Value",
    body: "Many brands sell electric handles at a modest price only to charge £10+ per replacement head. Miroooo offers high-density micro-diamond refill heads at a fraction of the cost, saving UK households over £60 every single year in essential upkeep.",
  },
];

const faqs = [
  {
    question: "Why did the Miroooo Brush X2 rank #1 overall in the 2026 UK comparison?",
    answer:
      "The Miroooo Brush X2 scored highest in clinical plaque clearance, gum safety, and everyday ergonomics. At 51g, it is the lightest electric toothbrush tested, features a 90-day cobalt battery with universal USB-C charging, operates under 50dB whisper-quiet sound, and includes a £35 luxury travel case and wall dock bundle in the box at £69.",
  },
  {
    question: "What is the 45° Bass brushing technique, and why is it recommended?",
    answer:
      "The Bass technique is the gold standard recommended by the British Dental Association. Angling bristle micro-vibrations at 45 degrees towards the gum margin cleans 2–3mm beneath the gumline where periodontal bacteria and calculus form, preventing gingivitis without eroding enamel.",
  },
  {
    question: "How does the Miroooo X2 battery last 90 days compared to Oral-B's 14 days?",
    answer:
      "Miroooo utilizes a next-generation high-density cobalt battery cell paired with an ultra-efficient acoustic levitation motor. A single 2.5-hour USB-C charge provides 180 two-minute brushing cycles—enough for 3 full months of twice-daily use.",
  },
  {
    question: "Is the Miroooo Brush X2 safe for sensitive teeth and receding gums?",
    answer:
      "Yes. The Miroooo Brush X2 includes a built-in Smart Pressure Sensor Halo Ring that lights up with red visual alerts if excessive force is applied. It also offers dedicated Sensitive, Standard, and Deep Cleansing modes to accommodate tender gums.",
  },
  {
    question: "What is included in the free £35 gift bundle?",
    answer:
      "Currently, every Miroooo Brush X2 promotional order includes a complimentary Luxury Aerospace Travel Case (£16 value), a Wall-Mounted Magnetic Bathroom Dock (£10 value), and Up to 4 Extra Micro-Diamond Replacement Heads (£9 value) bundled directly in the box.",
  },
  {
    question: "What is the 90-day money-back guarantee policy?",
    answer:
      "Miroooo provides a 100% risk-free 90-day home trial. If you are not completely satisfied with your cleaner teeth and gum health within 3 months, you can return the brush for a full refund.",
  },
];

export default function ToothbrushRankingClient() {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatLondonDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  useEffect(() => {
    setUpdatedDate(formatLondonDate(new Date()));
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-stone-800 pb-24 md:pb-0 selection:bg-emerald-100">
      {/* Top Editorial Subheader / Banner */}
      <div className="bg-stone-900 border-b border-stone-800 py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-widest text-stone-300 font-semibold">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">●</span>
            <span>Independent UK Dental Audit</span>
          </div>
          <div className="flex items-center gap-2">
            <MarketFlag market="uk" />
            <span>United Kingdom · 2026 Edition</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-stone-400">
            <span>Clinical Review · 180+ Hours Lab Testing</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Hero */}
      <header className="bg-white border-b border-stone-200 pt-10 pb-12 px-4 md:pt-14 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#8b1528] text-xs uppercase tracking-[0.2em] font-bold mb-4">
            <Award className="w-4 h-4" /> Oral Health &amp; Wellness · 2026 Clinical Ranking
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-stone-900 leading-[1.12] mb-6">
            We Tested the Leading Electric Toothbrushes of 2026.{" "}
            <span className="italic font-light text-stone-600 block mt-2">
              Here Is the Definitive UK Ranking.
            </span>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Separating £200+ plastic marketing hype from genuine dental engineering, 45° Bass plaque clearance, and whisper-quiet motors.
          </p>

          {/* Author / Clinical Consultant Row */}
          <div className="flex flex-col items-center justify-center gap-4 border-t border-stone-200 pt-6 max-w-xl mx-auto">
            <div className="flex items-center gap-4">
              <Image
                src="/img/toothbrushes/miroooo-dr-olivia-dental-consultant.webp"
                alt="Dr. Olivia, BDS - Clinical Dental Consultant"
                width={56}
                height={56}
                priority
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-600 shadow-sm"
              />
              <div className="text-left flex flex-col">
                <span className="font-bold text-stone-900 text-base">
                  Dr. Olivia, BDS
                </span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-bold">
                  Clinical Dental Consultant &amp; Oral Health Specialist (14+ Yrs UK Practice)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-stone-400 font-medium tracking-wide">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Medically Reviewed
              </span>
              <span>•</span>
              <span suppressHydrationWarning>Updated {updatedDate}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* 2-Layer Hero Comparison Banner */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 flex items-center justify-center">
          <img
            src="/img/toothbrushes/top-4-competitors-container-bar.webp"
            alt="UK Electric Toothbrushes Benchmarking"
            className="w-full h-auto object-contain pointer-events-none rounded-xl"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[20%] min-w-[110px] max-w-[240px]">
            <img
              src="/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp"
              alt="Miroooo Brush X2 #1 Ranked Toothbrush"
              className="w-full aspect-[696/1087] rounded-xl object-cover shadow-2xl border-2 border-white ring-2 ring-emerald-500/30 pointer-events-none"
            />
          </div>
        </div>

        {/* Lead Editorial Intro Narrative */}
        <div className="prose prose-stone prose-lg max-w-3xl mx-auto text-stone-700 mb-16">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
            For decades, the UK electric toothbrush market was controlled by two legacy conglomerates that charged upwards of £200 for bulky plastic handles, noisy mechanical gearboxes, and batteries that degraded in two weeks. Worse yet, their replacement brush heads became a recurring financial trap costing £10 to £15 per refill.
          </p>
          <p className="leading-relaxed mb-6">
            In 2026, clinical dental standards have transformed. Modern dentistry emphasizes the <strong>45° Bass sweeping technique</strong>, featherlight aluminium chassis that prevent hand strain, acoustic motors running <strong>below 50dB</strong> to eliminate ear buzzing, and <strong>high-density cobalt batteries</strong> that require charging only four times a year via universal USB-C.
          </p>
          <p className="leading-relaxed pb-8 border-b border-stone-200">
            Our clinical team spent three months conducting <strong>180+ hours of comparative testing</strong> across the five best-selling models in Britain. We evaluated subgingival plaque removal, bristle softness, acoustic noise, battery longevity, and genuine two-year ownership costs. <strong className="text-stone-900">Below is our authoritative top 5 ranking.</strong>
          </p>
        </div>

        {/* Dr. Olivia Verdict Banner */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image
              src="/img/toothbrushes/miroooo-dr-olivia-dental-consultant.webp"
              alt="Dr. Olivia Clinical Verdict"
              width={88}
              height={88}
              className="w-20 h-20 md:w-22 md:h-22 rounded-full object-cover shrink-0 border-2 border-emerald-600"
            />
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="font-serif font-bold text-xl md:text-2xl text-stone-900">
                  Dr. Olivia&apos;s Clinical Summary
                </h3>
              </div>
              <p className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-3">
                Lead Dental Consultant Verdict
              </p>
              <blockquote className="italic font-serif text-stone-800 text-base md:text-lg mb-4 border-l-4 border-emerald-600 pl-4 text-left">
                &ldquo;Daily brushing should be effortless. The ideal brush must be whisper-quiet rather than loudly vibrating against your teeth, featherlight around 50g for dexterity, and gentle on gums while sweeping subgingival plaque. You do not need to spend £200+ on heavy plastic handles to achieve a dental-hygienist clean.&rdquo;
              </blockquote>
              <p className="text-sm text-stone-600 leading-relaxed">
                Over 180 hours of clinical evaluation confirmed that the <strong>Miroooo Brush X2</strong> outperforms every legacy rival in plaque clearance, gumline comfort, and everyday usability—all at £69.
              </p>
            </div>
          </div>
        </div>

        {/* Evaluation Criteria Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-stone-200 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Testing Methodology
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-2">
              Clinical Evaluation Criteria
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Every toothbrush was scored against 10 objective engineering and oral health metrics:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {defaultEvaluationCriteria.map((criterion, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-stone-50/70 p-3 rounded-xl border border-stone-100">
                <ShieldCheck className="text-emerald-600 shrink-0 mt-0.5 h-5 w-5" />
                <span className="font-semibold text-stone-800 text-sm leading-snug">
                  {criterion}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-600 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs md:text-sm leading-relaxed">
            Testing was conducted with <strong>UK dental practitioners</strong>, standardized plaque-disclosing assays, decibel acoustic measurement in sound-isolated chambers, and 90-day battery discharge cycles.
          </p>
        </div>

        {/* Winner Highlights Callout */}
        <div className="bg-emerald-50/70 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-emerald-300 mb-16 shadow-sm">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-emerald-950 mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-700 shrink-0" />
            Key Findings: Why Miroooo Brush X2 Won #1
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-stone-800 text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Lightest Brush Tested (51g):</strong> Aerospace aluminium unibody is 60% lighter than Oral-B and Philips, eliminating wrist fatigue completely.</span>
            </li>
            <li className="flex items-start gap-3 text-stone-800 text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Unmatched 90-Day Battery:</strong> High-density cobalt battery with universal USB-C charging needs only 4 charges per year with zero proprietary docks.</span>
            </li>
            <li className="flex items-start gap-3 text-stone-800 text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Whisper-Quiet Acoustics (&lt;50dB):</strong> Smooth magnetic motor eliminates the loud motor whine and skull vibration found in 64dB competitor handles.</span>
            </li>
            <li className="flex items-start gap-3 text-stone-800 text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Free £35 Gift Bundle:</strong> Luxury Travel Case, Wall Dock, and extra brush heads included free in the £69 promotional box.</span>
            </li>
          </ul>
        </div>

        {/* Ranked Products List */}
        <div className="space-y-16">
          {toothbrushProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ))}
        </div>

        {/* 5-Product Side-by-Side Comparison Table */}
        <CompetitorComparisonTable />

        {/* Side-by-Side Specification Matrix */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm my-16">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Clinical Comparison
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900">
              Miroooo X2 vs. Traditional Competitors
            </h2>
            <p className="text-stone-600 mt-2 text-sm md:text-base">
              How the #1 ranked Miroooo Brush X2 compares against legacy plastic electric brushes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px] text-sm">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 px-4 font-bold text-stone-900 text-base w-1/4">
                    Feature / Benchmark
                  </th>
                  <th className="py-4 px-4 font-bold text-emerald-900 bg-emerald-50/80 text-base w-2/5 rounded-t-xl border-t-2 border-l-2 border-r-2 border-emerald-300">
                    Miroooo Brush X2 (£69)
                  </th>
                  <th className="py-4 px-4 font-bold text-stone-700 text-base w-1/3">
                    Legacy Standard (£85–£150)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonMatrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-stone-900 align-top">
                      <div>{row.feature}</div>
                      <div className="text-xs font-normal text-stone-500 mt-1">
                        {row.whyItMatters}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-bold text-stone-900 bg-emerald-50/40 border-l-2 border-r-2 border-emerald-200 align-top">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 mr-1.5">
                        <Check className="w-4 h-4 shrink-0" />
                      </span>
                      {row.miroooo}
                    </td>
                    <td className="py-4 px-4 text-stone-600 align-top">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Buying Advice & Decision Blocks */}
        <section className="my-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 text-center mb-8">
            Expert Buying Advice &amp; Decision Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buyerBlocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm"
              >
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                  {block.title}
                </h3>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dentist's Verdict Section (Bottom Feature Box) */}
        <div className="mt-20 md:mt-24 mb-16 max-w-4xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-3xl p-6 md:p-12 shadow-xl border border-[#e8dccb] relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-center text-[#8b1528] mb-8 md:mb-10 tracking-wide">
              Dentist&apos;s Final Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Image Area */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-full max-w-[320px] aspect-square overflow-hidden rounded-2xl border border-[#dfd1bd] bg-white shadow-lg">
                  <Image
                    src="/img/toothbrushes/miroooo-brush-x2-dentist-verdict-dr-olivia.webp"
                    alt="Dr. Olivia holding Miroooo Brush X2 in UK clinic"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#8b1528] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    #1 Rated UK 2026
                  </div>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-2">
                  Miroooo Brush X2
                </h3>

                <div className="w-24 h-[2px] bg-[#d4af37] mx-auto mb-4" />

                <div className="text-2xl md:text-3xl font-serif font-bold text-[#8b1528] mb-6">
                  Now 50% Off <span className="text-stone-700 text-lg font-sans font-normal">+ £35 Free Bundle</span>
                </div>

                {/* Trustpilot-style Badge */}
                <div className="border border-stone-200 bg-white/90 rounded-2xl p-4 mx-auto mb-6 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <span className="font-bold text-base text-stone-900">
                      Excellent
                    </span>
                    <GreenStarRating rating={5} size={20} />
                  </div>
                  <div className="text-xs text-stone-600 flex items-center justify-center gap-1">
                    Rated 4.9 / 5 on <GreenStarIcon size={16} />{" "}
                    <span className="font-bold text-stone-900">Trustpilot</span>
                  </div>
                </div>

                <OfficialButton
                  href="https://www.trymiroooo.com/products/miroooo-x2"
                  targetId="bottom-verdict-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  className="w-full !bg-gradient-to-b !from-[#1a7444] !to-[#0d4a29] hover:!from-[#145c35] hover:!to-[#0a381f] text-white text-base md:text-lg font-bold py-4 px-8 rounded-full shadow-lg"
                >
                  CHECK AVAILABILITY &amp; CLAIM BUNDLE
                </OfficialButton>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider font-bold mt-3">
                  90-Day Money-Back Guarantee · Free UK Delivery · 3-Year Warranty
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm my-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900">
              Expert Answers to Common Dental Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-stone-200 bg-stone-50/60 p-5 open:bg-white open:ring-2 open:ring-emerald-500/20 transition-all duration-200"
              >
                <summary className="flex cursor-pointer items-center justify-between font-serif font-bold text-stone-900 text-base md:text-lg list-none">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-3" />
                </summary>
                <div className="mt-4 pt-3 border-t border-stone-200 text-stone-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final Bottom Callout Box */}
        <div className="text-center py-10 my-12 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
          <span className="text-[#8b1528] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
            The Global Edit #1 Electric Toothbrush
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Upgrade to the Miroooo Brush X2 Today
          </h2>
          <p className="text-stone-600 font-serif text-lg max-w-xl mx-auto mb-8">
            Join over 24,000 UK customers enjoying 45° Bass acoustic cleaning, featherlight 51g comfort, and 90-day battery endurance.
          </p>
          <div className="max-w-md mx-auto">
            <OfficialButton
              href="https://www.trymiroooo.com/products/miroooo-x2"
              targetId="bottom-cta"
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              className="w-full !bg-emerald-600 hover:!bg-emerald-700 text-lg"
            >
              Get Miroooo X2 for £69 + Free Bundle →
            </OfficialButton>
          </div>
        </div>
      </main>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur border-t border-stone-200 shadow-2xl z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-stone-900 leading-tight font-serif">
            #1 Miroooo Brush X2
          </span>
          <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wide">
            £69 (50% Off) + Free £35 Gift Bundle
          </span>
        </div>
        <a
          href="https://www.trymiroooo.com/products/miroooo-x2"
          rel="noopener noreferrer sponsored"
          onClick={(event) =>
            handleOutboundClick(event, setLoadingTarget, "mobile-sticky-cta")
          }
          className="bg-emerald-600 text-white px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 whitespace-nowrap relative overflow-hidden group"
          aria-busy={loadingTarget === "mobile-sticky-cta"}
        >
          {loadingTarget === "mobile-sticky-cta" ? (
            <OutboundLoader />
          ) : (
            <>
              <span className="relative z-10 flex items-center gap-1">
                Shop £69 Deal <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}
