import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Award, Zap, CheckCircle2, Microscope, Activity, Compass } from 'lucide-react';

export const metadata = {
  title: "The Global Edit - Independent Clinical Beauty & Wellness Reviews",
  description:
    "Editorial clinical testing, buying guides, and comparative reviews for luxury beauty-tech and oral-care products, led by our 2026 LED Mask and Sonic Electric Toothbrush rankings.",
};

const featureStats = [
  { value: "10+", label: "devices lab tested" },
  { value: "8 weeks", label: "hands-on review window" },
  { value: "100%", label: "retail-purchased units" },
  { value: "2026", label: "definitive buyer indices" },
];

const categories = [
  {
    title: "Beauty Tech",
    tag: "Dermatological Hardware",
    description: "Multi-spectrum LED phototherapy, optical irradiance audits, and clinical anti-aging masks.",
    href: "/category/beauty",
    badge: "Clinical Reviews",
  },
  {
    title: "Oral Wellness",
    tag: "Acoustic Engineering",
    description: "Sonic motor frequencies, subgingival plaque removal, and 51g ultra-lightweight ergonomics.",
    href: "/category/wellness",
    badge: "Dental Audits",
  },
  {
    title: "Style & Living",
    tag: "Design & Materials",
    description: "Aerospace aluminium craftsmanship, hygiene-sealed unibody construction, and travel durability.",
    href: "/category/style",
    badge: "Ergonomics",
  },
];

const featuredRankings = [
  {
    href: "/best-led-face-mask-uk-2026",
    badge: "#1 Ranked LED Face Mask 2026",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    scoreBadge: "9.9 / 10 Lab Score",
    title: "Buudy 7-Colour LED Therapy Mask",
    subtitle: "The definitive 2026 UK LED mask comparison ranking Buudy against CurrentBody, Omnilux Contour, Shark CryoGlow, and Dr. Dennis Gross.",
    image: "/images/editorial/led-testing-clinic.jpg",
    winnerHighlights: [
      "7 medical wavelengths (630nm Red, 415nm Blue, 525nm Green, 590nm Yellow, Cyan, Purple, 830nm NIR)",
      "Integrated neck & décolletage phototherapy included standard (zero £300 neck add-on)",
      "Fixed ergonomic contour with 0mm diode proximity vs loose silicone flattening",
    ],
    ctaText: "Read 2026 LED Mask Benchmark",
    ctaLink: "/best-led-face-mask-uk-2026",
  },
  {
    href: "/best-electric-toothbrush-uk-2026",
    badge: "#1 Ranked Electric Toothbrush 2026",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    scoreBadge: "9.9 / 10 Dental Lab Score",
    title: "Miroooo Brush X2 Sonic Toothbrush",
    subtitle: "The 2026 UK electric toothbrush clinical benchmark evaluating Miroooo X2 vs Oral-B iO6, Philips Sonicare 9000, and SURI.",
    image: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp",
    winnerHighlights: [
      "51g ultra-lightweight aerospace aluminium unibody (vs 140g heavy porous plastic)",
      "45° Bass sweep subgingival cleaning with active smart pressure halo ring",
      "90-day cobalt cell single USB-C charge with zero bulky travel chargers",
    ],
    ctaText: "Read 2026 Toothbrush Benchmark",
    ctaLink: "/best-electric-toothbrush-uk-2026",
  },
];

const testingProtocols = [
  {
    icon: Microscope,
    title: "Spectrophotometer Optical Audits",
    description: "We measure exact peak nanometer wavelengths (415nm–830nm) and uniform irradiance under laboratory spectrophotometers, disproving unsubstantiated marketing claims.",
  },
  {
    icon: Activity,
    title: "Subgingival Acoustic Metrics",
    description: "Evaluating 38,000 VPM acoustic fluid dynamics, micro-bubble plaque cavitation, and sub-50dB whisper-quiet operation without aggressive gumline abrasion.",
  },
  {
    icon: ShieldCheck,
    title: "8-Week Longevity & Hygiene Trials",
    description: "Accelerated wear testing assessing IPX7 hermetic seals, unibody black mould vulnerability, and real-world battery retention over full biological renewal cycles.",
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
    href: "/currentbody-vs-buudy",
    image: "/images/editorial/currentbody-skin-mask.jpeg",
    tag: "Competitor Comparison",
    tagClass: "text-amber-700",
    title: "CurrentBody vs Buudy 7-Colour LED Mask",
    excerpt: "Comparing 2 wavelengths vs 7 clinical spectra, £400 cost vs £179, and built-in neck coverage.",
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
    href: "/miroooo-vs-philips-sonicare",
    image: "/img/toothbrushes/philips-sonicare-comparison.webp",
    tag: "Oral Care Battle",
    tagClass: "text-emerald-700",
    title: "Miroooo X2 vs Philips Sonicare DiamondClean 9000",
    excerpt: "Comparing 90-day USB-C battery life, mould-resistant aluminium, and subgingival plaque removal.",
  },
  {
    href: "/floating-head-warning",
    image: "/images/editorial/neck-skincare.jpg",
    tag: "Anti-Aging Secrets",
    tagClass: "text-stone-600",
    title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
    excerpt: "The £300 neck tax: why failing to treat the neck causes severe mismatch aging.",
  },
  {
    href: "/theraface-vs-other-masks",
    image: "/images/editorial/dr-dennis-gross-spectralite.jpg",
    tag: "Competitor Comparison",
    tagClass: "text-amber-700",
    title: "TheraFace Mask (£579) vs Top 2026 LED Masks",
    excerpt: "Evaluating whether Therabody's £579 vibrating mask justifies a £400 premium over Buudy.",
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
    href: "/missing-colors-expose",
    image: "/images/editorial/acne-skincare.jpg",
    tag: "Wavelength Science",
    tagClass: "text-amber-700",
    title: "Why 2-Color Masks Are Obsolete: The 7-Spectrum Revolution",
    excerpt: "Red light stimulates collagen, but it cannot kill acne-causing bacteria without clinical multi-wave spectra.",
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 border border-stone-300 bg-stone-50 px-3.5 py-1.5 text-[10px] uppercase tracking-widest text-stone-700 font-bold mb-6">
              <Sparkles size={13} strokeWidth={1.8} className="text-amber-700" />
              Independent Clinical Intelligence &middot; 2026 Benchmark
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-stone-950 leading-[1.04] mb-6">
              The clinical device reviews we would send a friend first.
            </h1>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Independent laboratory benchmarks, multi-wavelength spectrophotometer audits, and 8-week clinical trials for shoppers comparing leading LED light therapy, sonic acoustic care, and at-home wellness innovations.
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-stone-100 pt-10 max-w-2xl mx-auto">
              {featureStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Category Navigation */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 border-b border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
              Editorial Index
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-stone-950">
              Browse by Department
            </h2>
          </div>
          <Link href="/blog" className="text-xs uppercase tracking-widest text-stone-800 font-bold hover:underline inline-flex items-center gap-1">
            View Complete Archive &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group block bg-white border border-stone-200 p-6 sm:p-8 hover:border-stone-400 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                  {cat.tag}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-stone-100 text-stone-700 rounded-sm">
                  {cat.badge}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                {cat.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-6 font-sans">
                {cat.description}
              </p>
              <span className="text-xs uppercase tracking-widest font-bold text-stone-900 inline-flex items-center gap-1 group-hover:underline">
                Explore Department &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured 2 Major Product Winner Spotlights */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block mb-2">
            Clinical Benchmarks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-950">
            2026 Definitive Buying Indices
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mt-3">
            Our research desk&apos;s gold-standard winners across medical phototherapy and acoustic dental hygiene.
          </p>
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
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{item.scoreBadge}</span>
                </div>

                <div className="aspect-[16/10] bg-stone-100 overflow-hidden rounded-sm mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6 font-sans">
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

      {/* Subtle Clinic & Laboratory Evaluation Showcase */}
      <section className="bg-white border-y border-stone-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block mb-2">
              Evaluation Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-950 mb-4">
              Inside Our Clinical Testing Protocols
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              Every device ranked by The Global Edit undergoes stringent hands-on assessment. We reject manufacturer-supplied lab claims and evaluate physical hardware in independent UK clinic environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testingProtocols.map((protocol) => {
              const Icon = protocol.icon;
              return (
                <div key={protocol.title} className="bg-stone-50 border border-stone-200 p-6 md:p-8 rounded-sm">
                  <div className="w-10 h-10 bg-white border border-stone-300 rounded-sm flex items-center justify-center text-stone-900 mb-5 shadow-xs">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-serif text-lg text-stone-950 mb-2.5">
                    {protocol.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Methodology Banner */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-start gap-4">
            <ShieldCheck size={28} className="text-amber-400 shrink-0 mx-auto md:mx-0" />
            <div>
              <h4 className="font-serif text-lg text-white mb-1.5">100% Unsponsored Testing</h4>
              <p className="text-xs text-stone-400 leading-relaxed">We purchase all retail units independently off shelves. Zero sponsored brand rankings, paid placements, or gifted editorial bias.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Zap size={28} className="text-amber-400 shrink-0 mx-auto md:mx-0" />
            <div>
              <h4 className="font-serif text-lg text-white mb-1.5">Clinical Board Verification</h4>
              <p className="text-xs text-stone-400 leading-relaxed">Consultant dermatologists &amp; dental surgeons review wavelength spectra, irradiance, and subgingival plaque index removal.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Award size={28} className="text-amber-400 shrink-0 mx-auto md:mx-0" />
            <div>
              <h4 className="font-serif text-lg text-white mb-1.5">Authentic Consumer Value</h4>
              <p className="text-xs text-stone-400 leading-relaxed">Auditing replacement costs, real-world battery longevity, unibody hygiene, and genuine 30-day money-back trial guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Editorial Battles & Guides */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-6 mb-10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block mb-1">
              Investigation Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
              Head-to-Head Battles &amp; Exposes
            </h2>
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
