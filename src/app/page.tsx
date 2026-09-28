import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Award, Zap, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "The Global Edit - Independent Clinical Beauty & Wellness Reviews",
  description:
    "Editorial clinical testing, buying guides, and comparative reviews for luxury beauty-tech and oral-care products, led by our 2026 LED Mask and Sonic Electric Toothbrush rankings.",
};

const featureStats = [
  { value: "10+", label: "devices lab tested" },
  { value: "8 weeks", label: "hands-on review window" },
  { value: "2026", label: "definitive buyer indices" },
];

const featuredRankings = [
  {
    href: "/best-led-face-mask-uk-2026",
    badge: "#1 Ranked LED Face Mask 2026",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    title: "Buudy 7-Colour LED Therapy Mask",
    subtitle: "The definitive 2026 UK LED mask comparison ranking Buudy vs CurrentBody, Omnilux, Shark, and Dr. Dennis Gross.",
    image: "/images/editorial/led-testing-clinic.jpg",
    winnerHighlights: [
      "7 medical wavelengths (630nm Red, 415nm Blue, 525nm Green, 590nm Yellow, Cyan, Purple, NIR)",
      "Integrated neck & décolletage phototherapy included standard",
      "£179 (60% OFF / was £449) + £128 Free Gift Bundle (Torch + Hard Case + Skincare Guide)",
    ],
    ctaText: "Read LED Mask Rankings",
    ctaLink: "/best-led-face-mask-uk-2026",
  },
  {
    href: "/best-electric-toothbrush-uk-2026",
    badge: "#1 Ranked Electric Toothbrush 2026",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    title: "Miroooo Brush X2 Sonic Toothbrush",
    subtitle: "The 2026 UK electric toothbrush clinical benchmark evaluating Miroooo X2 vs Oral-B iO6, Philips 9000, and SURI.",
    image: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp",
    winnerHighlights: [
      "51g ultra-lightweight aerospace aluminium unibody (vs 140g heavy plastic)",
      "45° Bass sweep subgingival cleaning with active smart pressure halo ring",
      "£69 (50% OFF / was £139) + £35 Free Gift Package (Luxury Case + Wall Dock + Heads)",
    ],
    ctaText: "Read Toothbrush Rankings",
    ctaLink: "/best-electric-toothbrush-uk-2026",
  },
];

const articles = [
  {
    href: "/miroooo-vs-oral-b-io6",
    image: "/img/toothbrushes/oral-b-io6-comparison.webp",
    tag: "Oral Care Battle",
    tagClass: "text-emerald-700",
    title: "Miroooo X2 vs Oral-B iO6: 51g Aluminium vs 140g Plastic",
    excerpt: "Why British consumers are ditching 140g vibrating plastic for ultra-light acoustic engineering.",
  },
  {
    href: "/theraface-vs-other-masks",
    image: "/images/editorial/dr-dennis-gross-spectralite.jpg",
    tag: "Competitor Battle",
    tagClass: "text-amber-700",
    title: "TheraFace Mask (£579) vs Top 2026 LED Masks",
    excerpt: "Evaluating whether Therabody's £579 vibrating mask justifies a £400 premium over Buudy.",
  },
  {
    href: "/miroooo-vs-philips-sonicare",
    image: "/img/toothbrushes/philips-sonicare-comparison.webp",
    tag: "Oral Care Battle",
    tagClass: "text-emerald-700",
    title: "Miroooo X2 vs Philips Sonicare DiamondClean 9000",
    excerpt: "Comparing 90-day USB-C battery life, mould-resistant aluminium, and subgingival plaque removal.",
  },
  {
    href: "/silicone-led-mask-dangers",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
    tag: "Beauty Tech Expose",
    tagClass: "text-red-700",
    title: "Why Flexible Silicone LED Masks Keep Failing Real Skin",
    excerpt: "Comfort looks good on social, but coverage, diode distance, and neck treatment decide the result.",
  },
  {
    href: "/best-lightweight-electric-toothbrush-uk-2026",
    image: "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp",
    tag: "Ergonomics Benchmark",
    tagClass: "text-emerald-700",
    title: "Best Ultra-Lightweight 51g Electric Toothbrush (UK 2026)",
    excerpt: "Clinical testing of lightweight handles for wrist fatigue, arthritis, and dexterity comfort.",
  },
  {
    href: "/floating-head-warning",
    image: "/images/editorial/neck-skincare.jpg",
    tag: "Anti-Aging Secrets",
    tagClass: "text-stone-500",
    title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
    excerpt: "The £300 neck tax: why failing to treat the neck causes severe mismatch aging.",
  },
  {
    href: "/miroooo-vs-suri",
    image: "/img/toothbrushes/suri-sonic-comparison.webp",
    tag: "Oral Care Battle",
    tagClass: "text-emerald-700",
    title: "Miroooo Brush X2 vs SURI Sustainable Sonic 2.0",
    excerpt: "51g unibody vs 85g modular handle: durability, battery life, and brush head precision tested.",
  },
  {
    href: "/currentbody-vs-buudy",
    image: "/images/editorial/currentbody-skin-mask.jpeg",
    tag: "Competitor Comparison",
    tagClass: "text-amber-700",
    title: "CurrentBody vs Buudy 7-Colour LED Mask",
    excerpt: "Comparing 2 wavelengths vs 7 clinical spectra, £400 cost vs £179, and built-in neck coverage.",
  },
  {
    href: "/best-battery-life-electric-toothbrush-uk-2026",
    image: "/img/toothbrushes/entry-electric-toothbrush.webp",
    tag: "Battery Benchmark",
    tagClass: "text-emerald-700",
    title: "Best 90-Day Battery Life Electric Toothbrush (UK 2026)",
    excerpt: "Cobalt cell engineering delivering 90 days per single charge with universal USB-C fast charging.",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-stone-300 bg-stone-50 px-3.5 py-2 text-[10px] uppercase tracking-widest text-stone-700 font-bold mb-6">
              <Sparkles size={14} strokeWidth={1.7} className="text-amber-700" />
              Independent Clinical Beauty & Oral Care Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-950 leading-[1.04] mb-6">
              The clinical device reviews we would send a friend first.
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Independent laboratory benchmarks and hands-on clinical trials for shoppers comparing the UK's leading LED face masks, sonic electric toothbrushes, and at-home wellness technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/best-led-face-mask-uk-2026"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-7 py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-700 transition-colors shadow-sm"
              >
                <Award size={15} strokeWidth={1.8} />
                2026 LED Mask Rankings
              </Link>
              <Link
                href="/best-electric-toothbrush-uk-2026"
                className="inline-flex items-center justify-center gap-2 bg-amber-800 text-white px-7 py-4 text-xs uppercase tracking-widest font-bold hover:bg-amber-900 transition-colors shadow-sm"
              >
                <Award size={15} strokeWidth={1.8} />
                2026 Toothbrush Rankings
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 bg-white px-6 py-4 text-xs uppercase tracking-widest font-bold text-stone-900 hover:border-stone-900 transition-colors"
              >
                Browse All Guides
                <ArrowRight size={15} strokeWidth={1.8} />
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 border-t border-stone-100 pt-8 max-w-xl mx-auto">
              {featureStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured 2 Major Product Winner Spotlights */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block mb-2">Clinical Benchmarks</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-950">
            2026 Definitive Buying Indices
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredRankings.map((item) => (
            <div key={item.title} className="bg-white border border-stone-200 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-stone-400 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                    <Award size={13} />
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">9.9 / 10 Score</span>
                </div>

                <div className="aspect-[16/10] bg-stone-100 overflow-hidden rounded-sm mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {item.subtitle}
                </p>

                <div className="space-y-2.5 mb-8 border-t border-stone-100 pt-6">
                  {item.winnerHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={item.ctaLink}
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-700 text-white py-4 text-xs uppercase tracking-widest font-bold transition-colors"
              >
                {item.ctaText}
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Methodology Banner */}
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-start gap-4">
            <ShieldCheck size={28} className="text-amber-400 shrink-0 mx-auto md:mx-0" />
            <div>
              <h4 className="font-serif text-lg text-white mb-1">100% Independent Lab Trials</h4>
              <p className="text-xs text-stone-400 leading-relaxed">We purchase all retail units independently. Zero sponsored brand rankings or pay-for-placement bias.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Zap size={28} className="text-amber-400 shrink-0 mx-auto md:mx-0" />
            <div>
              <h4 className="font-serif text-lg text-white mb-1">Clinical Verification</h4>
              <p className="text-xs text-stone-400 leading-relaxed">Consultant dermatologists & dental surgeons review wavelength spectra, irradiance, and plaque index removal.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Award size={28} className="text-amber-400 shrink-0 mx-auto md:mx-0" />
            <div>
              <h4 className="font-serif text-lg text-white mb-1">Authentic Consumer Value</h4>
              <p className="text-xs text-stone-400 leading-relaxed">Auditing warranty policies, replacement costs, gift bundles, and real money-back guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Editorial Battles & Guides */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-6 mb-10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block mb-1">Investigation Desk</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">Head-to-Head Battles & Exposes</h2>
          </div>
          <Link href="/blog" className="text-xs uppercase tracking-widest text-stone-900 font-bold hover:underline inline-flex items-center gap-1">
            Browse All 25+ Articles &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <Link key={item.href} href={item.href} className="group block bg-white border border-stone-200 p-5 hover:border-stone-400 transition-all shadow-sm">
              <div className="aspect-[16/10] bg-stone-100 overflow-hidden mb-4 rounded-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className={`text-[10px] uppercase tracking-widest ${item.tagClass} font-bold mb-2 block`}>{item.tag}</span>
              <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">{item.excerpt}</p>
              <span className="text-[11px] uppercase tracking-widest text-stone-900 font-bold group-hover:underline inline-flex items-center gap-1">
                Read Article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
