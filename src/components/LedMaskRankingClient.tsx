"use client";

import React, { useState, useRef, useEffect, type MouseEvent } from "react";
import {
  CheckCircle2,
  XCircle,
  Award,
  ChevronRight,
  ShieldCheck,
  Check,
  Play,
} from "lucide-react";
import { motion } from "motion/react";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import {
  ledMaskProducts,
  evaluationCriteria,
  freeGiftBundle,
  EXPERT_PROFILE,
  type LedMaskProduct,
} from "@/data/ledMasks";

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
      destination.hostname.includes("buudy.com") ||
      destination.hostname.includes("buudy.co.uk")
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
        destination.searchParams.set("utm_medium", "editorial");
      }
      if (!destination.searchParams.has("utm_campaign")) {
        destination.searchParams.set(
          "utm_campaign",
          "best_led_face_mask_uk_2026",
        );
      }

      event.currentTarget.href = destination.toString();

      const trackingWindow = window as TrackingWindow;
      const payload = {
        event_category: "editorial_comparison",
        event_label: target,
        outbound_url: destination.toString(),
        page_type: "best_led_face_mask_uk_2026",
      };

      trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
      trackingWindow.dataLayer.push({
        event: "buudy_outbound_click",
        ecommerce: null,
        ...payload,
      });
      trackingWindow.dataLayer.push({
        event: "affiliate_click",
        ...payload,
      });
      trackingWindow.uetq?.push("event", "buudy_outbound_click", payload);
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

function preventPlaceholderNavigation(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (href === "#") {
    event.preventDefault();
  }
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1 text-stone-700">
        <span>{label}</span>
        <span className="text-[#b08d57] font-semibold">{value}%</span>
      </div>
      <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-stone-900 rounded-full"
        />
      </div>
    </div>
  );
}

function CTAButton({
  href,
  text,
  className = "",
  targetId,
  loadingTarget,
  setLoadingTarget,
}: {
  href: string;
  text: string;
  className?: string;
  targetId: string;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  const isLoading = loadingTarget === targetId;

  return (
    <a
      href={href === "#" ? undefined : href}
      rel="noopener noreferrer sponsored"
      aria-label={text}
      aria-busy={isLoading}
      onClick={(event) => handleOutboundClick(event, setLoadingTarget, targetId)}
      className={`relative inline-flex justify-center items-center px-8 py-4 text-base md:text-lg font-bold tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 rounded-full overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-stone-900/10 ${className}`}
    >
      {isLoading ? (
        <OutboundLoader />
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2">
            {text} <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

export default function LedMaskRankingClient() {
  const [updatedDate] = useState(() => formatLondonDate(new Date()));
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);
  const verdictVideoRef = useRef<HTMLVideoElement | null>(null);

  const playVerdictVideo = () => {
    const video = verdictVideoRef.current;
    if (!video) return;

    video.play().catch(() => {
      setIsVerdictVideoPlaying(false);
    });
  };

  const buudyWinnerUrl = "https://buudy.com/pages/buudy-led-mask";

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-stone-800 pb-24 md:pb-0 selection:bg-stone-200">
      {/* Top Header / Hero Banner */}
      <div className="bg-stone-900 border-b border-stone-800 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">Best LED Face Mask</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <MarketFlag market="uk" />
              <span>UK - 2026</span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-stone-200">
            <CheckCircle2 size={20} className="text-[#b08d57] shrink-0" />
            Last updated – <span suppressHydrationWarning>{updatedDate}</span>
          </div>
        </div>
      </div>

      {/* Header with Composite Banner & Expert Profile */}
      <header className="bg-white border-b border-stone-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/img/TOP 5 LED Mask uk.png"
            alt="Top LED masks comparison for the UK"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-stone-200 mb-10 md:mb-12"
          />

          {/* Expert Profile Box */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.06)] max-w-5xl mx-auto border border-stone-200 text-stone-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <img
                  src={EXPERT_PROFILE.image}
                  alt={EXPERT_PROFILE.name}
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0 border-2 border-stone-200"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-stone-900 font-serif">
                    {EXPERT_PROFILE.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#b08d57] uppercase tracking-wider font-semibold mt-1">
                    {EXPERT_PROFILE.title}
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-stone-700 leading-relaxed mb-6 font-sans">
                <p>
                  With {EXPERT_PROFILE.yearsExperience} years of experience in
                  skincare and beauty technology,{" "}
                  <strong className="text-stone-900">
                    {EXPERT_PROFILE.name}
                  </strong>{" "}
                  is a certified dermatologist and beauty technology expert. She
                  reviewed {EXPERT_PROFILE.masksReviewed} popular UK LED face mask
                  options over {EXPERT_PROFILE.testingHours} hours, comparing
                  wavelengths, light coverage, comfort, eye safety, neck
                  treatment, usability, reviews, price, and guarantees. Her
                  biggest finding was simple: the most expensive mask was not
                  always the best choice. The strongest options used the right
                  wavelengths, gave even face-and-neck coverage, and were easy
                  enough to use consistently at home.
                </p>
              </div>

              <hr className="border-stone-200 w-full mb-4" />

              <div className="text-xs md:text-sm italic text-stone-500 md:text-right">
                * Recommended by over 1,000 UK skincare users.
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* 4 Intro Paragraphs */}
        <div className="prose prose-lg prose-stone w-full max-w-none mb-16 space-y-6 text-stone-700">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed">
            LED face masks have exploded in the UK, but the market is confusing.
            Prices range from <strong>£100 to £600+</strong>, and many brands
            make almost identical claims about collagen, acne, redness, and
            anti-ageing results.
          </p>
          <p className="leading-relaxed">
            So we tested <strong>18 of the most popular LED masks</strong> over{" "}
            <strong>200+ hours</strong>, comparing wavelengths, light coverage,
            comfort, eye safety, neck treatment, ease of use, reviews, price,
            and guarantees.
          </p>
          <p className="leading-relaxed">
            The biggest finding was simple: a higher price did not always mean
            better results. The best masks used the right wavelengths, gave even
            face and neck coverage, and were easy enough to use consistently at
            home.
          </p>
          <p className="leading-relaxed">
            Below, we rank the LED masks that actually stood out, including the
            one we believe offers the strongest balance of results, safety,
            comfort, and value for UK buyers.
          </p>
        </div>

        {/* 10 Evaluation Criteria Box */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-stone-200 mb-10 md:mb-16 w-full">
          <h2 className="text-[1.35rem] md:text-3xl font-bold text-stone-900 mb-5 md:mb-8 text-center font-serif leading-tight">
            We evaluated LED face masks based on 10 criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
            {evaluationCriteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 md:gap-3">
                <ShieldCheck className="text-[#b08d57] shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
                <span className="font-semibold text-stone-800 text-[15px] md:text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-600 bg-stone-50 p-3 md:p-4 rounded-xl border border-stone-200 text-[14px] md:text-base leading-snug md:leading-relaxed">
            Over the past three months, we have thoroughly tested{" "}
            <strong>18 different LED face masks</strong>. Based on{" "}
            <strong>hands-on evaluations</strong>, insights from{" "}
            <strong>board-certified dermatologists</strong>, and{" "}
            <strong>thousands of consumer reviews</strong>, the following five
            models stood out as the best in terms of{" "}
            <strong>performance, comfort, safety, and affordability</strong>.
          </p>
        </div>

        {/* 5 Ranked Product Cards */}
        <div className="space-y-16">
          {ledMaskProducts.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white rounded-3xl shadow-sm border ${
                product.isWinner
                  ? "border-stone-900 ring-4 ring-stone-100 pt-10 md:pt-10"
                  : "border-stone-200"
              } p-6 md:p-10`}
            >
              {/* #1 Editor's Choice Badge */}
              {product.isWinner && (
                <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-stone-900 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
                  <Award size={16} className="text-[#d4af7a] md:w-[18px] md:h-[18px]" />
                  #1 Editor&apos;s Choice
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                {/* Left Column: Image & Quick Stats (Desktop Sticky) */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                    <h2
                      className={`text-2xl font-bold text-stone-900 mb-6 text-center lg:hidden font-serif ${
                        product.isWinner ? "mt-3" : ""
                      }`}
                    >
                      {product.rank} {product.name}
                    </h2>

                    <div className="relative w-full mb-6">
                      <a
                        href={product.link}
                        rel="noopener noreferrer sponsored"
                        onClick={(event) =>
                          handleOutboundClick(
                            event,
                            setLoadingTarget,
                            `product-img-${product.id}`,
                          )
                        }
                        className="block w-full group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full aspect-square object-cover rounded-2xl shadow-md border border-stone-100 group-hover:shadow-xl transition-shadow duration-300"
                        />
                      </a>
                    </div>

                    <div className="text-center mb-2 lg:mb-6 w-full">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl font-extrabold text-stone-900 font-serif">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-stone-400 line-through font-medium">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.isWinner ? (
                        <a
                          href={product.link}
                          rel="noopener noreferrer sponsored"
                          onClick={(event) =>
                            handleOutboundClick(
                              event,
                              setLoadingTarget,
                              "rating-link-winner",
                            )
                          }
                          aria-label="View the Buudy LED Mask and customer reviews"
                          className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
                        >
                          <GreenStarRating
                            rating={product.rating}
                            forceFull={product.isWinner}
                            size={24}
                            className="mb-2"
                          />
                          <p className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900">
                            Overall rating {product.rating}
                          </p>
                        </a>
                      ) : (
                        <>
                          <GreenStarRating
                            rating={product.rating}
                            forceFull={product.isWinner}
                            size={24}
                            className="mb-2"
                          />
                          <p className="text-sm font-medium text-stone-500">
                            Overall rating {product.rating}
                          </p>
                        </>
                      )}
                    </div>

                    <div className="w-full hidden lg:block">
                      <CTAButton
                        href={product.link}
                        text={product.isWinner ? "Official Website" : "Shop Now"}
                        targetId={`product-cta-desktop-${product.id}`}
                        loadingTarget={loadingTarget}
                        setLoadingTarget={setLoadingTarget}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Title, Narrative, Metrics, Pros & Cons */}
                <div className="lg:col-span-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 hidden lg:block font-serif">
                    <a
                      href={product.link}
                      rel="noopener noreferrer sponsored"
                      onClick={(event) =>
                        handleOutboundClick(
                          event,
                          setLoadingTarget,
                          `product-title-${product.id}`,
                        )
                      }
                      className="hover:text-[#b08d57] transition-colors"
                    >
                      {product.rank} {product.name}
                    </a>
                  </h2>

                  <div className="prose prose-stone prose-lg max-w-none mb-8">
                    {product.description.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-stone-600 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))}
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 mb-8">
                    <h4 className="font-bold text-stone-900 mb-6 text-sm uppercase tracking-wider">
                      Performance Metrics
                    </h4>
                    <div className="space-y-3">
                      {product.metrics.map((metric, idx) => (
                        <MetricBar
                          key={idx}
                          label={metric.label}
                          value={metric.value}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Pros & Cons Container */}
                  <div className="flex flex-col gap-6 mb-8">
                    {/* Pros Container with Full-Width Header */}
                    <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-200">
                      <h4 className="bg-emerald-800 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl font-serif">
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
                                className="text-emerald-700 shrink-0 mt-0.5"
                              />
                              <span>
                                <strong className="text-stone-900">
                                  {bold}:
                                </strong>
                                {rest.join(":")}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Cons Container with Full-Width Header */}
                    <div className="bg-red-50/50 rounded-2xl px-3 py-5 md:p-6 border border-red-200">
                      <h4 className="bg-red-800 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl font-serif">
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
                                className="text-red-600 shrink-0 mt-0.5"
                              />
                              <span>
                                <strong className="text-stone-900">
                                  {bold}:
                                </strong>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: rest.join(":"),
                                  }}
                                />
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Editor's Tip / Free Gifts Package Panel (Buudy #1 only) */}
                  {product.isWinner && (
                    <motion.div
                      initial={false}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="mt-10 bg-gradient-to-br from-[#fdf9f0] to-[#f5efe0] border-2 border-[#d4af7a] rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-stone-200/50"
                    >
                      {/* Ambient glows */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4af7a]/20 rounded-full blur-3xl animate-pulse" />
                      <div
                        className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#b08d57]/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />

                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white text-stone-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#d4af7a]/50">
                          <span className="text-base">💡</span> Editor&apos;s Tip
                        </div>

                        <h4 className="font-serif font-bold text-2xl md:text-3xl text-stone-900 mb-4 leading-tight">
                          Active Offer Found: {freeGiftBundle.totalValue} in{" "}
                          <span className="text-white bg-stone-900 px-2 py-0.5 rounded-md inline-block transform -rotate-1 text-xl md:text-2xl font-sans tracking-wide">
                            FREE GIFTS
                          </span>
                        </h4>

                        <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-8">
                          While doing our research, we found that Buudy is
                          currently running a limited-time sale where you can
                          get these premium accessories bundled for free with
                          every mask purchase.
                        </p>

                        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
                          {freeGiftBundle.items.map((gift, idx) => (
                            <div
                              key={idx}
                              className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-[#d4af7a]/40 shadow-md text-center transform hover:-translate-y-1 transition-transform relative"
                            >
                              <div
                                className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-stone-900 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
                                style={{ animationDelay: gift.animationDelay }}
                              >
                                FREE
                              </div>
                              <a
                                href={buudyWinnerUrl}
                                rel="noopener noreferrer sponsored"
                                onClick={(event) =>
                                  handleOutboundClick(
                                    event,
                                    setLoadingTarget,
                                    `gift-card-${idx}`,
                                  )
                                }
                                aria-label={`View the Buudy LED Mask offer with free ${gift.name}`}
                                className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 border border-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
                              >
                                <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-stone-900 font-bold line-through z-10 bg-white/95 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                                  Normally {gift.normalPrice}
                                </span>
                                <img
                                  src={gift.image}
                                  alt={gift.name}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full aspect-square object-cover"
                                />
                              </a>
                              <p className="font-bold text-stone-900 text-[10px] sm:text-base leading-tight">
                                {gift.name}
                              </p>
                            </div>
                          ))}
                        </div>

                        <a
                          href={buudyWinnerUrl}
                          rel="noopener noreferrer sponsored"
                          aria-label="Check Availability"
                          onClick={(event) =>
                            handleOutboundClick(
                              event,
                              setLoadingTarget,
                              "package-panel-check-btn",
                            )
                          }
                          className="block w-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-base sm:text-lg md:text-xl text-center py-3.5 sm:py-4 md:py-5 rounded-2xl shadow-xl shadow-stone-900/20 transition-all hover:scale-[1.02] relative overflow-hidden group border border-stone-800"
                        >
                          {loadingTarget === "package-panel-check-btn" ? (
                            <OutboundLoader />
                          ) : (
                            <>
                              <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 tracking-wider uppercase">
                                Check Availability{" "}
                                <ChevronRight size={20} className="sm:hidden" />
                                <ChevronRight
                                  size={24}
                                  className="hidden sm:block"
                                />
                              </span>
                              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                            </>
                          )}
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {/* Mobile CTA Button */}
                  <div className="w-full mt-8 lg:hidden">
                    <CTAButton
                      href={product.link}
                      text={product.isWinner ? "Official Website" : "Shop Now"}
                      targetId={`product-cta-mobile-${product.id}`}
                      loadingTarget={loadingTarget}
                      setLoadingTarget={setLoadingTarget}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dermatologist's Verdict Section at the Bottom */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-stone-900 mb-6 md:mb-10 font-serif tracking-wide">
              Dermatologist&apos;s Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Video Area */}
              <div className="relative">
                <div className="relative mx-auto max-w-[190px] min-[380px]:max-w-[210px] sm:max-w-[240px] md:max-w-[300px] overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-black shadow-xl">
                  <video
                    ref={verdictVideoRef}
                    className="block w-full"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/videos/buudy-dermatologist-verdict-poster.jpg"
                    aria-label="Dermatologist walkthrough of the Buudy 7 Colour LED Mask"
                    onPlay={() => setIsVerdictVideoPlaying(true)}
                    onPause={() => setIsVerdictVideoPlaying(false)}
                    onEnded={() => setIsVerdictVideoPlaying(false)}
                  >
                    <source
                      src="/videos/buudy-dermatologist-verdict.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    type="button"
                    aria-label="Play dermatologist walkthrough video"
                    onClick={playVerdictVideo}
                    className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-stone-900 text-white shadow-[0_14px_34px_rgba(0,0,0,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af7a]/70 ${
                      isVerdictVideoPlaying
                        ? "pointer-events-none opacity-0 scale-90"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <Play size={30} fill="currentColor" className="ml-1 text-[#d4af7a]" />
                  </button>
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-stone-900 shadow-sm">
                    2 min demo
                  </div>
                </div>
                <p className="mt-4 text-center text-xs md:text-sm font-medium text-stone-600 leading-snug max-w-[240px] md:max-w-none mx-auto">
                  See the light modes, fit, eye area, and full-face coverage in a
                  real product walkthrough.
                </p>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-stone-900 mb-3 md:mb-4 font-serif tracking-tight">
                  Buudy 7 Colour LED Mask
                </h3>

                <div className="w-28 md:w-32 h-[2px] bg-[#b08d57] mx-auto mb-5 md:mb-6" />

                <div className="text-2xl md:text-4xl font-bold text-stone-900 mb-5 md:mb-8 font-serif">
                  Now at 60% off
                </div>

                {/* Rating Badge */}
                <div className="border border-stone-200 bg-white/80 rounded-xl p-3 md:p-4 mx-auto mb-6 md:mb-8 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-base md:text-lg text-stone-900 font-serif">
                      Excellent
                    </span>
                    <GreenStarRating rating={5} size={22} />
                  </div>
                  <div className="text-xs md:text-sm text-stone-600 flex items-center justify-center gap-1 font-sans">
                    Rated 4.9 / 5 on <GreenStarIcon size={18} />{" "}
                    <span className="font-bold text-stone-900">Trustpilot</span>
                  </div>
                </div>

                <a
                  href={buudyWinnerUrl}
                  rel="noopener noreferrer sponsored"
                  aria-label="Check Availability"
                  onClick={(event) =>
                    handleOutboundClick(
                      event,
                      setLoadingTarget,
                      "bottom-verdict-check-btn",
                    )
                  }
                  className="mx-auto w-full max-w-[240px] md:w-auto md:max-w-none bg-stone-900 hover:bg-stone-800 text-white text-sm md:text-lg font-bold font-sans tracking-[0.15em] uppercase py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-xl shadow-stone-900/20 transition-all hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  {loadingTarget === "bottom-verdict-check-btn" ? (
                    <OutboundLoader />
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        CHECK AVAILABILITY <ChevronRight size={20} />
                      </span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Legal Links */}
      <footer className="mt-0 border-t border-stone-200 bg-white px-4 py-8 shadow-inner">
        <div className="mx-auto max-w-6xl text-center text-sm text-stone-500">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="/privacy"
              className="text-stone-500 hover:text-stone-900 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-stone-300">•</span>
            <a
              href="/terms"
              className="text-stone-500 hover:text-stone-900 transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-stone-300">•</span>
            <a
              href="/disclosure"
              className="text-stone-500 hover:text-stone-900 transition-colors"
            >
              Advertising Disclosure
            </a>
            <span className="text-stone-300">•</span>
            <a
              href="/contact"
              className="text-stone-500 hover:text-stone-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>

      {/* Fixed Sticky Mobile Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-stone-200 shadow-[0_-10px_20px_rgba(0,0,0,0.08)] z-50 md:hidden flex items-center justify-center">
        <a
          href={buudyWinnerUrl}
          rel="noopener noreferrer sponsored"
          aria-label="Take me to the winning LED Mask"
          onClick={(event) =>
            handleOutboundClick(
              event,
              setLoadingTarget,
              "mobile-sticky-winning-mask-cta",
            )
          }
          className="w-full text-center bg-stone-900 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-stone-900/20 tracking-wider uppercase whitespace-nowrap relative overflow-hidden group"
        >
          {loadingTarget === "mobile-sticky-winning-mask-cta" ? (
            <OutboundLoader />
          ) : (
            <>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Take me to the winning LED Mask <ChevronRight size={18} />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}
