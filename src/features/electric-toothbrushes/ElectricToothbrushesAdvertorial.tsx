"use client";

import Image from "next/image";
import { motion } from "motion/react";
import React, {
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";

import {
  toothbrushProducts,
  type RankedToothbrushProduct as RankedProduct,
  type ToothbrushMetric as Metric,
} from "@/data/toothbrushes";

import { type ToothbrushGuide } from "@/data/toothbrushGuides";

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
        destination.searchParams.set("utm_medium", "comparison");
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
        event_category: "comparison",
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
    // Keep the original native anchor navigation if attribution cannot be added.
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
      className={`group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-6 py-4 text-center text-lg md:text-xl font-bold text-white shadow-xl shadow-emerald-600/30 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <OutboundLoader />
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            {children}
            <ChevronRight className="h-6 w-6 shrink-0" aria-hidden="true" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

function EvaluationCriteria({ criteria }: { criteria?: string[] }) {
  const list =
    criteria && criteria.length > 0 ? criteria : defaultEvaluationCriteria;

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-stone-200 mb-10 md:mb-16 w-full font-sans">
      <h2 className="text-[1.35rem] md:text-3xl font-bold text-stone-900 mb-5 md:mb-8 text-center font-serif leading-tight">
        Clinical Evaluation Criteria &amp; Testing Methodology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
        {list.map((criterion, idx) => (
          <div key={idx} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="text-emerald-600 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
            <span className="font-semibold text-stone-700 text-[15px] md:text-base leading-snug">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-stone-600 bg-stone-50 p-3 md:p-4 rounded-xl border border-stone-200/60 text-[14px] md:text-base leading-snug md:leading-relaxed">
        Over the past three months, we thoroughly evaluated{" "}
        <strong>leading UK electric toothbrushes</strong> across{" "}
        <strong>180+ hours of comparative testing</strong>. Based on{" "}
        <strong>hands-on laboratory measurements</strong>, insights from{" "}
        <strong>registered UK dental professionals</strong>, and{" "}
        <strong>thousands of verified consumer reviews</strong>, these models
        stand out in terms of{" "}
        <strong>
          plaque clearance, gum safety, battery runtime, and long-term value
        </strong>
        .
      </p>
    </div>
  );
}

function MetricBar({ label, value }: Metric) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm font-semibold mb-1 text-stone-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-emerald-600 rounded-full"
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
  const outerSize = featured ? "h-[118px] w-[138px]" : "h-[96px] w-[112px]";
  const triangleSize = featured ? "h-[108px] w-[128px]" : "h-[88px] w-[108px]";
  const textBox = featured ? "h-[78px] w-[82px]" : "h-[64px] w-[68px]";
  const textSize = featured ? "text-[2rem]" : "text-[1.55rem]";

  return (
    <div
      aria-label={`Rank ${rank}`}
      className={`pointer-events-none absolute left-0 top-0 z-30 overflow-visible rounded-tl-3xl ${outerSize}`}
    >
      {featured && (
        <div
          className={`absolute left-[7px] top-[7px] rounded-tl-3xl bg-emerald-950/30 blur-[1px] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <div
        className={`absolute left-0 top-0 rounded-tl-3xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800 [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize} ${
          featured
            ? "shadow-[0_18px_28px_rgba(5,150,105,0.32),inset_0_2px_0_rgba(255,255,255,0.35),inset_-10px_-10px_16px_rgba(4,120,87,0.28)]"
            : "shadow-[0_10px_18px_rgba(5,150,105,0.2),inset_0_1px_0_rgba(255,255,255,0.24)]"
        }`}
      />
      {featured && (
        <div
          className={`absolute left-[2px] top-[2px] rounded-tl-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.16)_32%,rgba(255,255,255,0)_58%)] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <span
        className={`absolute left-0 top-0 flex items-center justify-center font-serif font-black leading-none text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.32)] ${textBox} ${textSize}`}
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
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50"
    >
      {/* Animated background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200 font-sans">
          <span className="text-lg">🎁</span> Free Gifts Included
        </div>

        <h4 className="font-extrabold text-2xl md:text-3xl text-stone-900 mb-4 leading-tight font-serif">
          Free Gifts Included in{" "}
          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
            Your Package
          </span>
        </h4>

        <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-8 font-sans">
          Every Miroooo Brush X2 order includes these essential accessories in
          the box for complete oral care at home and on the go.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8 font-sans">
          {/* Luxury Travel Case */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <a
              href="https://www.trymiroooo.com/products/miroooo-x2"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo Brush X2 package with Luxury Travel Case"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 border border-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <img
                src="/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp"
                alt="Miroooo Brush X2 Luxury Aluminium Travel Case"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-stone-900 text-[10px] sm:text-lg leading-tight">
              Luxury Travel Case
            </p>
          </div>

          {/* Wall-Mounted Storage */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <a
              href="https://www.trymiroooo.com/products/miroooo-x2"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo Brush X2 package with Wall-Mounted Storage"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 border border-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <img
                src="/img/toothbrushes/miroooo-brush-x2-wall-mounted-storage-dock-gift.webp"
                alt="Miroooo Brush X2 Wall-Mounted Storage"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-stone-900 text-[10px] sm:text-lg leading-tight">
              Wall-Mounted Storage
            </p>
          </div>

          {/* Up to 4 Extra Brush Heads */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <a
              href="https://www.trymiroooo.com/products/miroooo-x2"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo Brush X2 package with up to 4 extra brush heads"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 border border-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <img
                src="/img/toothbrushes/miroooo-brush-x2-extra-brush-heads-package.webp"
                alt="Miroooo Brush X2 Up to 4 Extra Brush Heads"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-stone-900 text-[10px] sm:text-lg leading-tight">
              Up to 4 Extra Brush Heads
            </p>
          </div>
        </div>

        <OfficialButton
          href="https://www.trymiroooo.com/products/miroooo-x2"
          targetId="miroooo-package-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="miroooo-cta-package"
          className="w-full !bg-blue-600 hover:!bg-blue-700 !shadow-blue-600/30 !border-2 !border-blue-500"
        >
          Check Availability
        </OfficialButton>
      </div>
    </motion.div>
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
      data-testid="electric-toothbrush-card"
      data-product-rank={product.rank}
      className={`relative bg-white rounded-3xl shadow-sm border ${
        isMiroooo
          ? "border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10"
          : "border-stone-200"
      } p-6 md:p-10 pt-20 md:pt-24 scroll-mt-28`}
    >
      <RankRibbon rank={`#${product.rank}`} featured={isMiroooo} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
        {/* Left Column: Image & Quick Stats */}
        <aside className="lg:col-span-4 flex flex-col items-center">
          <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
            <h2
              className={`text-2xl font-bold text-stone-900 mb-6 text-center lg:hidden font-serif ${
                isMiroooo ? "mt-3" : ""
              }`}
            >
              {product.name}
            </h2>

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
                className="block w-full group"
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
                  className="w-full aspect-square object-cover rounded-2xl shadow-md border border-stone-100 group-hover:shadow-xl transition-shadow duration-300"
                />
              </a>
            </div>

            <div className="text-center mb-2 lg:mb-6 w-full font-sans">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl font-extrabold text-stone-900">
                  {product.price}
                </span>
                {product.compareAt ? (
                  <span className="text-lg text-stone-400 line-through font-medium">
                    {product.compareAt}
                  </span>
                ) : null}
              </div>
              <GreenStarRating
                rating={product.rating}
                forceFull={isMiroooo}
                size={24}
                className="mb-2"
              />
              <p className="text-sm font-medium text-stone-500">
                Overall rating {product.rating.toFixed(1)} / 5
              </p>
            </div>

            <div className="w-full hidden lg:block font-sans">
              <OfficialButton
                href={product.ctaUrl}
                targetId={`product-desktop-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={`toothbrush-cta-${product.rank}`}
                className="w-full"
              >
                {product.ctaLabel}
              </OfficialButton>
            </div>
          </div>
        </aside>

        {/* Right Column: Details */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 hidden lg:block font-serif">
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
              className="hover:text-emerald-600 transition-colors"
            >
              {product.name}
            </a>
          </h2>

          <div className="prose prose-stone prose-lg max-w-none mb-8 space-y-4 font-sans">
            {product.review.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-stone-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200/60 mb-8 font-sans">
            <h4 className="font-bold text-stone-900 mb-6 text-lg">
              Performance Metrics
            </h4>
            <div className="space-y-3">
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
          <div className="flex flex-col gap-6 mb-8 font-sans">
            {/* Pros */}
            <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100">
              <h4 className="bg-emerald-600 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                Pros
              </h4>
              <ul className="space-y-4">
                {product.pros.map((pro, idx) => {
                  const [bold, ...rest] = pro.split(":");
                  return (
                    <li
                      key={idx}
                      className="text-base text-stone-700 flex items-start gap-3"
                    >
                      <Check
                        size={20}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-stone-900">
                              {bold}:
                            </strong>{" "}
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
            <div className="bg-red-50/50 rounded-2xl px-3 py-5 md:p-6 border border-red-100">
              <h4 className="bg-red-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                Cons
              </h4>
              <ul className="space-y-4">
                {product.cons.map((con, idx) => {
                  const [bold, ...rest] = con.split(":");
                  return (
                    <li
                      key={idx}
                      className="text-base text-stone-700 flex items-start gap-3"
                    >
                      <XCircle
                        size={20}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-stone-900">
                              {bold}:
                            </strong>{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: rest.join(":"),
                              }}
                            />
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

          <div className="w-full mt-8 lg:hidden font-sans">
            <OfficialButton
              href={product.ctaUrl}
              targetId={`product-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={`toothbrush-cta-mobile-${product.rank}`}
              className="w-full"
            >
              {product.ctaLabel}
            </OfficialButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function ComparisonMatrix({ guide }: { guide: ToothbrushGuide }) {
  if (!guide.comparisonRows || guide.comparisonRows.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm my-16 font-sans">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Specification Breakdown
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 font-serif">
          Side-by-Side Comparison Matrix
        </h2>
        <p className="text-stone-600 mt-2 text-base md:text-lg">
          How the Miroooo Brush X2 compares against legacy models on key
          clinical &amp; daily benchmarks.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b-2 border-stone-200">
              <th className="py-4 px-4 font-bold text-stone-900 text-base md:text-lg w-1/4">
                Feature / Metric
              </th>
              <th className="py-4 px-4 font-bold text-emerald-700 bg-emerald-50/70 text-base md:text-lg w-2/5 rounded-t-xl border-t-2 border-l-2 border-r-2 border-emerald-300">
                Miroooo Brush X2 (£69)
              </th>
              <th className="py-4 px-4 font-bold text-stone-700 text-base md:text-lg w-1/3">
                Competitor Standard
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {guide.comparisonRows.map((row, idx) => (
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
  );
}

function BuyerBlocksSection({ guide }: { guide: ToothbrushGuide }) {
  if (!guide.buyerBlocks || guide.buyerBlocks.length === 0) return null;

  return (
    <section className="my-16 space-y-6 font-sans">
      <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif text-center mb-8">
        Buying Advice &amp; Decision Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guide.buyerBlocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm"
          >
            <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              {block.title}
            </h3>
            <p className="text-stone-600 text-base leading-relaxed">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqSection({
  faqs,
}: {
  faqs?: Array<{ question: string; answer: string }>;
}) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm my-16 font-sans">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 font-serif">
          Expert Answers to Common Questions
        </h2>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-5 open:bg-white open:ring-2 open:ring-emerald-500/20 transition-all duration-200"
          >
            <summary className="flex cursor-pointer items-center justify-between font-bold text-stone-900 text-base md:text-lg list-none">
              <span>{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform duration-200" />
            </summary>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-stone-600 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export interface ComparisonTableProduct {
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

export const TOP_5_COMPARISON_PRODUCTS: ComparisonTableProduct[] = [
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

export type ComparisonRowDef =
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

export const TOP_5_COMPARISON_ROWS: ComparisonRowDef[] = [
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

export function CompetitorComparisonTable() {
  return (
    <section className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-stone-200 shadow-sm mt-16 mb-12 max-w-6xl mx-auto font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 font-serif">
          Top 5 Electric Toothbrushes Side-by-Side Comparison
        </h2>
        <p className="text-stone-600 mt-2 text-sm md:text-base font-sans">
          Detailed technical specifications, battery endurance, included
          accessories, and ownership value compared across the UK&apos;s leading
          2026 models.
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="block lg:hidden text-center text-xs text-stone-500 font-medium mb-4 bg-stone-50 py-2 px-3 rounded-lg border border-stone-100 font-sans">
        ← Swipe horizontally to compare all 5 toothbrushes →
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full table-fixed font-sans">
          <thead>
            <tr className="border-b-2 border-stone-200">
              <th className="py-4 px-3 sm:px-4 font-bold text-stone-900 text-xs sm:text-sm md:text-base w-[18%] bg-stone-50/50 rounded-tl-xl align-bottom font-sans">
                Feature / Metric
              </th>
              {TOP_5_COMPARISON_PRODUCTS.map((prod) => (
                <th
                  key={prod.rank}
                  className="py-4 px-2 text-center w-[16.4%] align-bottom border-l border-stone-200 bg-white"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5 font-sans">
                      #{prod.rank} Ranked
                    </span>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2.5 flex items-center justify-center p-1 bg-stone-50 rounded-xl border border-stone-100">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-stone-900 text-sm sm:text-base md:text-lg line-clamp-1 mb-1 font-sans">
                      {prod.shortName}
                    </span>
                    <div className="mb-2 scale-90 sm:scale-100">
                      <GreenStarRating rating={prod.rating} size={14} />
                    </div>
                    <div className="flex items-baseline justify-center gap-1.5 font-sans">
                      <span className="text-base sm:text-xl md:text-2xl font-black text-stone-900">
                        {prod.price}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-xs sm:text-sm text-stone-400 line-through font-medium">
                          {prod.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-xs sm:text-sm font-sans">
            {TOP_5_COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? "bg-white" : "bg-stone-50/60"}
              >
                <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-800 align-middle text-xs sm:text-sm font-sans">
                  {row.label}
                </td>
                {TOP_5_COMPARISON_PRODUCTS.map((prod) => {
                  if (row.kind === "boolean") {
                    const isPassed = prod[row.key];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className="py-3.5 px-2 text-center align-middle border-l border-stone-100"
                      >
                        <div className="flex items-center justify-center">
                          {isPassed ? (
                            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                          )}
                        </div>
                      </td>
                    );
                  }

                  if (row.kind === "price") {
                    return (
                      <td
                        key={`${prod.rank}-price-row`}
                        className="py-3.5 px-2 text-center align-middle border-l border-stone-100"
                      >
                        <div className="flex items-baseline justify-center gap-1.5 font-sans">
                          <span className="font-extrabold text-stone-900 text-sm sm:text-base md:text-lg">
                            {prod.price}
                          </span>
                          {prod.originalPrice && (
                            <span className="text-[11px] sm:text-xs text-stone-400 line-through font-medium">
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
                      className="py-3.5 px-2 text-center align-middle border-l border-stone-100"
                    >
                      <span className="text-xs sm:text-sm font-medium text-stone-800 font-sans">
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

export type ElectricToothbrushesAdvertorialProps = {
  guide?: ToothbrushGuide;
};

export default function ElectricToothbrushesAdvertorial({
  guide,
}: ElectricToothbrushesAdvertorialProps = {}) {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatLondonDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  const displayProducts: RankedProduct[] =
    guide && guide.products && guide.products.length > 0
      ? (guide.products as RankedProduct[])
      : toothbrushProducts;

  useEffect(() => {
    setUpdatedDate(formatLondonDate(new Date()));
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-stone-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <div className="bg-emerald-600 border-b border-emerald-700 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">
              {guide ? guide.headline : "Best Electric Toothbrushes"}
            </span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3 font-sans">
              <MarketFlag market="uk" />
              <span>
                {guide?.eyebrow
                  ? `${guide.eyebrow} · UK 2026`
                  : "United Kingdom - 2026"}
              </span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
            <CheckCircle2 size={20} className="text-white shrink-0" />
            Last updated – <span suppressHydrationWarning>{updatedDate}</span>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-stone-200 pt-6 pb-12 px-4 md:pt-8 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* 2-Layer Top 5 Comparison Hero Banner or Specific Guide Hero */}
          <div className="relative w-full max-w-6xl mx-auto mb-10 md:mb-12 flex items-center justify-center">
            {/* Layer 1: Background Container Bar with 4 competitors and open center space */}
            <img
              src="/img/toothbrushes/top-4-competitors-container-bar.webp"
              alt="Electric Toothbrushes UK Comparison"
              className="w-full h-auto object-contain pointer-events-none"
            />

            {/* Layer 2: #1 Miroooo Brush X2 Card floating OVER the container space */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[18%] min-w-[110px] max-w-[280px]">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp"
                alt="Miroooo Brush X2 Electric Toothbrush"
                className="w-full aspect-[696/1087] rounded-xl sm:rounded-2xl md:rounded-3xl object-cover shadow-[0_18px_45px_rgba(0,0,0,0.32),0_8px_20px_rgba(0,0,0,0.18)] border-2 border-white ring-1 ring-stone-900/10 pointer-events-none"
              />
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-stone-100 text-stone-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <Image
                  src={
                    guide?.drOliviaVerdict?.avatar ||
                    "/img/toothbrushes/miroooo-dr-olivia-dental-consultant.webp"
                  }
                  alt={
                    guide?.drOliviaVerdict?.name
                      ? `${guide.drOliviaVerdict.name} - Clinical Dental Consultant & Oral Health Specialist`
                      : "Dr. Olivia, BDS - Clinical Dental Consultant & Oral Health Specialist"
                  }
                  width={96}
                  height={96}
                  priority
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0 border-2 border-emerald-600/30"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-stone-900 font-serif">
                    {guide?.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider font-semibold mt-1">
                    {guide?.drOliviaVerdict?.title ||
                      "Clinical Dental Consultant & Oral Health Specialist"}
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-stone-700 leading-relaxed mb-6 font-sans">
                {guide?.drOliviaVerdict?.quote ? (
                  <p className="italic font-medium text-stone-800 mb-3 border-l-4 border-emerald-600 pl-4 font-serif">
                    &ldquo;{guide.drOliviaVerdict.quote}&rdquo;
                  </p>
                ) : null}

                {guide?.drOliviaVerdict?.clinicalRationale ? (
                  <p>{guide.drOliviaVerdict.clinicalRationale}</p>
                ) : (
                  <p>
                    With <strong>over 14 years</strong> of clinical dental
                    experience in the UK,{" "}
                    <strong className="text-stone-900">Dr. Olivia</strong>{" "}
                    evaluated the leading electric toothbrushes for 2026 across{" "}
                    <strong>180+ hours of comparative testing</strong>. Her
                    conclusion was simple: daily brushing should be effortless.
                    The ideal brush should be whisper-quiet rather than loudly
                    buzzing in your ear, featherlight (around 50g) for easy
                    handling, and gentle on gums while delivering a deep sonic
                    clean. You don&apos;t need to spend £200+ on heavy, loud,
                    clunky handles to get a dentist-clean smile, whisper-quiet
                    sound, and 90+ days of battery life.
                  </p>
                )}
              </div>

              <hr className="border-stone-200 w-full mb-4" />

              <div className="text-xs md:text-sm italic text-stone-600 md:text-right font-sans">
                * Evaluated across UK dental clinics &amp; independent tests.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        {guide?.intro && guide.intro.length > 0 && (
          <div className="prose prose-lg prose-stone w-full max-w-none mb-16 space-y-6">
            {guide.intro.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <EvaluationCriteria criteria={guide?.criteria} />

        {/* Winner Highlights Card if in Guide */}
        {guide?.winnerBullets && guide.winnerBullets.length > 0 && (
          <div className="bg-emerald-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-emerald-200 mb-12 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-950 font-serif mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />
              Key Findings &amp; Why Miroooo Brush X2 Took #1
            </h3>
            <ul className="space-y-3">
              {guide.winnerBullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-stone-800 text-base md:text-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Products List */}
        <div className="space-y-16">
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

        {/* FAQ Accordion */}
        <FaqSection faqs={guide?.faqs} />

        {/* Bottom Verdict Section */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              Dentist&apos;s Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Image Area */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-square overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-white shadow-xl">
                  <Image
                    src="/img/toothbrushes/miroooo-brush-x2-dentist-verdict-dr-olivia.webp"
                    alt="Dr. Olivia holding Miroooo Brush X2 Electric Toothbrush in dental clinic - Dentist's Verdict"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-stone-900 mb-3 md:mb-4 font-serif tracking-tight">
                  Miroooo Brush X2
                </h3>

                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>

                <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
                  Now at 50% off
                </div>

                {/* Trustpilot-style Badge */}
                <div className="border border-stone-200 bg-white/70 rounded-xl p-3 md:p-4 mx-auto mb-6 md:mb-8 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-base md:text-lg text-stone-900 font-sans">
                      Excellent
                    </span>
                    <GreenStarRating rating={5} size={22} />
                  </div>
                  <div className="text-xs md:text-sm text-stone-600 flex items-center justify-center gap-1 font-sans">
                    Rated 4.9 / 5 on <GreenStarIcon size={18} />{" "}
                    <span className="font-bold text-stone-900">Trustpilot</span>
                  </div>
                </div>

                <OfficialButton
                  href="https://www.trymiroooo.com/products/miroooo-x2"
                  targetId="verdict-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  testId="toothbrush-verdict-cta"
                  className="mx-auto w-full max-w-[260px] md:w-auto md:max-w-none !bg-gradient-to-b !from-[#1a7444] !to-[#0d4a29] hover:!from-[#145c35] hover:!to-[#0a381f] text-white text-sm md:text-xl font-bold tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)]"
                >
                  CHECK AVAILABILITY
                </OfficialButton>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Product Side-by-Side Comparison Table */}
        <CompetitorComparisonTable />
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-stone-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
        <a
          href="https://www.trymiroooo.com/products/miroooo-x2"
          rel="noopener noreferrer sponsored"
          data-testid="mobile-sticky-cta"
          onClick={(event) =>
            handleOutboundClick(event, setLoadingTarget, "mobile-sticky-cta")
          }
          className="w-full text-center bg-emerald-600 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-600/30 whitespace-nowrap relative overflow-hidden group"
          aria-busy={loadingTarget === "mobile-sticky-cta"}
        >
          {loadingTarget === "mobile-sticky-cta" ? (
            <OutboundLoader />
          ) : (
            <>
              <span className="relative z-10">
                Take me to the winning electric toothbrush
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}
