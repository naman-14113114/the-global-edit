import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata = {
  title: "The Global Edit - Independent Beauty Reviews",
  description:
    "Editorial testing and buying guides for beauty, wellness, and lifestyle products, led by our 2026 LED mask rankings.",
};

const featureStats = [
  { value: "5", label: "premium masks compared" },
  { value: "8 weeks", label: "hands-on review window" },
  { value: "2026", label: "updated buyer index" },
];

const articles = [
  {
    href: "/best-led-face-mask-uk-2026",
    image: "/images/editorial/led-testing-clinic.jpg",
    tag: "Review Index",
    tagClass: "text-amber-700",
    title: "Every Premium LED Mask Tested and Ranked",
    excerpt: "Our 2026 ranking compares Buudy, Omnilux, CurrentBody, Shark, and Dr. Dennis Gross side by side.",
  },
  {
    href: "/blog/why-silicone-masks-are-failing",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
    tag: "Beauty Tech Expose",
    tagClass: "text-red-700",
    title: "Why Flexible Silicone LED Masks Keep Failing Real Skin",
    excerpt: "Comfort looks good on social, but coverage, diode distance, and neck treatment decide the result.",
  },
  {
    href: "/blog/neck-neglect-skincare",
    image: "/images/editorial/neck-skincare.jpg",
    tag: "Anti-Aging Secrets",
    tagClass: "text-stone-500",
    title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
    excerpt: "The neck is one of the first places skincare neglect starts to show.",
  },
  {
    href: "/blog/acne-blue-light-myth",
    image: "/images/editorial/acne-skincare.jpg",
    tag: "Dermatology Science",
    tagClass: "text-blue-700",
    title: "Why Red Light Therapy Often Fails to Cure Clinical Acne",
    excerpt: "Acne needs a different wavelength strategy than collagen-focused anti-aging.",
  },
  {
    href: "/blog/clinic-vs-at-home-roi",
    image: "/images/editorial/clinic-treatment.jpg",
    tag: "Wellness Investment",
    tagClass: "text-stone-500",
    title: "At-Home LED vs Dermatology Clinics: The True Cost Breakdown",
    excerpt: "When consistency matters more than one expensive appointment, the economics change fast.",
  },
  {
    href: "/blog/amazon-led-mask-risks",
    image: "/images/editorial/amazon-led-risk-mask.png",
    tag: "Consumer Warning",
    tagClass: "text-red-700",
    title: "Why Buying an LED Mask on Amazon Could Damage Your Skin",
    excerpt: "Unverified wavelength claims, weak LEDs, and missing safety data are not small details.",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-stone-300 bg-white px-3 py-2 text-[10px] uppercase tracking-widest text-stone-600 font-bold mb-5">
              <Sparkles size={14} strokeWidth={1.7} />
              Independent Beauty Tech Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-950 leading-[1.04] mb-6">
              The LED mask edit we would send a friend first.
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
              Independent beauty-tech reviews for shoppers comparing the most searched LED masks, clinical devices, and at-home skincare tools before they buy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <Link
                href="/best-led-face-mask-uk-2026"
                className="inline-flex items-center justify-center gap-2 bg-stone-950 text-white px-6 py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-700 transition-colors"
              >
                Read the ranking
                <ArrowRight size={16} strokeWidth={1.8} />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 bg-white px-6 py-4 text-xs uppercase tracking-widest font-bold text-stone-900 hover:border-stone-900 transition-colors"
              >
                Browse the edit
                <ArrowRight size={15} strokeWidth={1.8} />
              </Link>
            </div>

            <div className="grid grid-cols-3 border-y border-stone-200 divide-x divide-stone-200">
              {featureStats.map((item) => (
                <div key={item.label} className="py-4 pr-3 pl-3 first:pl-0 last:pr-0">
                  <div className="text-xl md:text-2xl font-serif text-stone-950 leading-none mb-2">{item.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] md:min-h-[620px]">
            <div className="absolute inset-0 bg-stone-200 overflow-hidden rounded-sm">
              <img
                src="/images/editorial/led-testing-clinic.jpg"
                alt="Clinical skincare treatment room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
            </div>

            <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 bg-white/95 backdrop-blur px-5 py-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2">Latest index</div>
              <div className="text-2xl font-serif text-stone-950 leading-tight">Premium LED masks, compared by category.</div>
            </div>

            <div className="hidden md:grid absolute -left-8 top-10 w-44 gap-3">
              <img src="/images/editorial/currentbody-skin-mask.jpeg" alt="CurrentBody LED mask" className="aspect-square object-cover rounded-sm shadow-xl bg-white" />
              <img src="/images/editorial/omnilux-contour-mask.jpeg" alt="Omnilux Contour LED mask" className="aspect-square object-cover rounded-sm shadow-xl bg-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start border-b border-stone-900 pb-7 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-3 block">The verdict</span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-950 leading-tight">For shoppers who want the comparison before the checkout page.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-stone-600 leading-relaxed">
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 shrink-0 text-emerald-600" size={18} strokeWidth={1.8} />
              <p>Each guide keeps product imagery tied to the product being discussed, so comparisons feel clear and trustworthy.</p>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 shrink-0 text-emerald-600" size={18} strokeWidth={1.8} />
              <p>Our LED mask ranking still names a winner, but it earns that position through coverage, wavelengths, comfort, and value.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Recent discoveries</span>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-950">Start with the latest reviews.</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-stone-950 font-bold">
            View all
            <ArrowRight size={15} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article, index) => (
            <Link
              key={article.href}
              href={article.href}
              className={index === 0 ? "group block md:col-span-2" : "group block"}
            >
              <div className={index === 0 ? "aspect-[16/10] bg-stone-200 mb-4 overflow-hidden rounded-sm" : "aspect-square bg-stone-200 mb-4 overflow-hidden rounded-sm"}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className={`text-[10px] uppercase tracking-widest ${article.tagClass} font-bold mb-2 block`}>{article.tag}</span>
              <h3 className={index === 0 ? "text-2xl md:text-4xl font-serif text-stone-950 group-hover:text-stone-600 transition-colors leading-tight mb-3" : "text-xl font-serif text-stone-950 group-hover:text-stone-600 transition-colors leading-tight mb-2"}>
                {article.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-2xl">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
