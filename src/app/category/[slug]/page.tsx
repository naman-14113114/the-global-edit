import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ChevronRight, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';

interface CategoryArticle {
  slug: string;
  category: string;
  categoryColor: string;
  badgeBg: string;
  title: string;
  image: string;
  excerpt: string;
  readTime: string;
  date: string;
}

interface CategoryData {
  title: string;
  badge: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  articles: CategoryArticle[];
}

const categoriesData: Record<string, CategoryData> = {
  beauty: {
    title: "The Beauty Edit",
    badge: "Clinical Phototherapy & Aesthetics",
    subtitle: "Every clinical investigation, spectrometer audit, and comparative teardown from our beauty-tech research desk.",
    metaTitle: "The Beauty Edit - Clinical LED Phototherapy & Tech | The Global Edit",
    metaDescription: "In-depth clinical reviews, head-to-head wavelength comparisons, and laboratory audits of premium LED face masks and skincare tech.",
    articles: [
      {
        slug: "/best-led-face-mask-uk-2026",
        category: "Definitive Ranking",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "We Tested Every Premium LED Face Mask of 2026. Here Is The Definitive Ranking.",
        image: "/images/editorial/led-testing-clinic.jpg",
        excerpt: "Three months. Five flagship masks. One clear winner. Our editors and photobiology lab reveal which LED mask actually delivers clinical-grade irradiance across 7 therapeutic spectra.",
        readTime: "8 min read",
        date: "Autumn 2026",
      },
      {
        slug: "/blog/why-silicone-masks-are-failing",
        category: "Beauty Tech Expose",
        categoryColor: "text-red-800",
        badgeBg: "bg-red-50 border-red-200",
        title: "Why The Flexible Silicone LED Mask Trend Is Failing Patients",
        image: "/images/editorial/omnilux-contour-mask.jpeg",
        excerpt: "Flexible silicone masks took over Instagram, but clinical engineers are alarmed by severe light scattering, poor diode proximity, and occlusive sweat trapping.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/blog/acne-blue-light-myth",
        category: "Dermatology Science",
        categoryColor: "text-blue-800",
        badgeBg: "bg-blue-50 border-blue-200",
        title: "Why Red Light Therapy Fails For Acne (And What Actually Works)",
        image: "/images/editorial/acne-skincare.jpg",
        excerpt: "Red light stimulates collagen, but it cannot neutralize Cutibacterium acnes bacteria. Discover why 415nm Blue and Cyan wavelengths are mandatory for blemishes.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/blog/is-near-infrared-safe",
        category: "Photobiology Guide",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "Is Near-Infrared (NIR) Light Actually Safe For Daily Facial Use?",
        image: "/images/editorial/nir-safety.jpg",
        excerpt: "Why invisible 830nm wavelengths bypass the epidermal barrier to stimulate deep mitochondrial cellular ATP regeneration without thermal damage.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/blog/led-mask-frequency",
        category: "Clinical Protocol",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "How Often Should You Really Be Using Your LED Face Mask?",
        image: "/images/editorial/led-light-therapy.jpg",
        excerpt: "Understanding the biphasic dose curve: why wearing your mask for 60 minutes halts cellular progress, and the exact 10-15 minute protocol.",
        readTime: "4 min read",
        date: "Updated 2026",
      },
      {
        slug: "/currentbody-vs-buudy",
        category: "Head-to-Head Battle",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "CurrentBody vs Buudy 7-Colour LED Mask: Which is Worth It?",
        image: "/images/editorial/currentbody-skin-mask.jpeg",
        excerpt: "Comparing 2 wavelengths vs 7 clinical spectra, £399 price tags vs £179 direct pricing, and built-in neck therapy.",
        readTime: "6 min read",
        date: "Updated 2026",
      },
      {
        slug: "/theraface-vs-other-masks",
        category: "Head-to-Head Battle",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "TheraFace Mask (£579) vs The Best LED Masks of 2026",
        image: "/images/editorial/dr-dennis-gross-spectralite.jpg",
        excerpt: "Evaluating whether Therabody's £579 vibrating mask justifies a massive £400 premium over clinical rigid multi-spectrum devices.",
        readTime: "6 min read",
        date: "Updated 2026",
      },
      {
        slug: "/missing-colors-expose",
        category: "Wavelength Science",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "Why 2-Color Masks Are Obsolete: The 7-Spectrum Revolution",
        image: "/images/editorial/acne-skincare.jpg",
        excerpt: "Red light boosts collagen, but fails on hyperpigmentation and redness. Why comprehensive skincare requires all 7 calibrated nanometer bands.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/deluxeskin-vs-buudy",
        category: "Head-to-Head Battle",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "DeluxeSkin vs Buudy 7-Colour LED Mask: Real Clinical Testing",
        image: "/images/mask-angle.webp",
        excerpt: "Comparing cumbersome dual-piece corded masks with all-in-one wireless 7-color light therapy shields.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/omnilux-led-mask-review",
        category: "Product Review",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "Omnilux Contour Face Review: Why We Recommend The 7-Colour Alternative",
        image: "/images/editorial/omnilux-contour-mask.jpeg",
        excerpt: "A deep clinical teardown of Omnilux's flagship 2-wavelength silicone mask against modern 7-spectrum rigid alternatives.",
        readTime: "7 min read",
        date: "Updated 2026",
      },
    ],
  },
  wellness: {
    title: "The Wellness Edit",
    badge: "Evidence-Based Health & Longevity",
    subtitle: "Science-backed clinical guides for smarter, high-ROI investments into your dental and dermatological longevity.",
    metaTitle: "The Wellness Edit - Health & Dermatological Longevity | The Global Edit",
    metaDescription: "Evidence-based wellness guides covering acoustic oral health, dermatological cost-benefit ROI, and anti-aging phototherapy science.",
    articles: [
      {
        slug: "/best-electric-toothbrush-uk-2026",
        category: "Definitive Ranking",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "The Top 5 Electric Toothbrushes in the UK (2026 Clinical Audit)",
        image: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp",
        excerpt: "Our dental testing lab evaluates Miroooo Brush X2, Oral-B iO6, Philips Sonicare 9000, and SURI across 51g ergonomics, 90-day battery life, and plaque removal.",
        readTime: "7 min read",
        date: "Autumn 2026",
      },
      {
        slug: "/blog/neck-neglect-skincare",
        category: "Anti-Aging Clinical Secret",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
        image: "/images/editorial/neck-skincare.jpg",
        excerpt: "Failing to treat your cervical skin will age you 10 years faster than any facial wrinkle. How Near-Infrared photons stimulate collagen in delicate neck tissue.",
        readTime: "4 min read",
        date: "Updated 2026",
      },
      {
        slug: "/blog/clinic-vs-at-home-roi",
        category: "Wellness Investment",
        categoryColor: "text-stone-800",
        badgeBg: "bg-stone-100 border-stone-200",
        title: "At-Home LED vs Dermatology Clinics: The True Cost Breakdown & ROI",
        image: "/images/editorial/clinic-treatment.jpg",
        excerpt: "Are £150 in-office sessions still justified, or has at-home clinical phototherapy with 300+ diodes made recurring clinic visits obsolete?",
        readTime: "6 min read",
        date: "Updated 2026",
      },
      {
        slug: "/best-electric-toothbrush-for-sensitive-teeth-uk-2026",
        category: "Dental Health",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "Best Electric Toothbrush for Sensitive Teeth & Receding Gums",
        image: "/img/toothbrushes/miroooo-x2-electric-toothbrush.webp",
        excerpt: "Gentle 45° Bass sweep micro-bubbles and active smart pressure halo ring protection for delicate receding gingival tissue.",
        readTime: "6 min read",
        date: "Updated 2026",
      },
      {
        slug: "/best-battery-life-electric-toothbrush-uk-2026",
        category: "Engineering Benchmark",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "Best 90-Day Battery Life Electric Toothbrush (UK 2026)",
        image: "/img/toothbrushes/entry-electric-toothbrush.webp",
        excerpt: "Cobalt cell battery engineering delivering 90 days of continuous brushing per single USB-C charge without bulky travel stands.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/best-quiet-electric-toothbrush-uk-2026",
        category: "Acoustic Benchmark",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "Best Whisper-Quiet <50dB Electric Toothbrush (UK 2026)",
        image: "/img/toothbrushes/miroooo-x-electric-toothbrush.webp",
        excerpt: "Sub-50dB magnetic acoustic levitation tested against 65dB+ jarring mechanical rotary noise from legacy market leaders.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
    ],
  },
  style: {
    title: "The Style Edit",
    badge: "Industrial Design & Daily Luxuries",
    subtitle: "Elevating the standards of what modern luxury self-care, aerospace ergonomics, and minimalist design truly represent.",
    metaTitle: "The Style Edit - Ergonomics & Daily Luxury Design | The Global Edit",
    metaDescription: "Curated design critiques and ergonomic teardowns: from aerospace aluminium sonic brushes to minimalist 3-step dermatological routines.",
    articles: [
      {
        slug: "/blog/skincare-routine-2026",
        category: "Dermatology Protocol",
        categoryColor: "text-stone-800",
        badgeBg: "bg-stone-100 border-stone-200",
        title: "The 3-Step Morning Routine Dermatologists Actually Use (2026 Edition)",
        image: "/images/editorial/skincare-routine.jpg",
        excerpt: "Minimalist, clinical, and proven. How cutting excess serums in favour of gentle cleansing, vitamin C, and SPF 50 creates timeless, healthy skin.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/miroooo-vs-oral-b-io6",
        category: "Design Teardown",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "Miroooo X2 vs Oral-B iO6: 51g Aluminium vs 140g Plastic",
        image: "/img/toothbrushes/oral-b-io6-comparison.webp",
        excerpt: "Why modern aesthetic bathrooms are replacing 140g vibrating plastic with sleek aerospace aluminium unibody acoustic instruments.",
        readTime: "6 min read",
        date: "Updated 2026",
      },
      {
        slug: "/best-lightweight-electric-toothbrush-uk-2026",
        category: "Ergonomics Benchmark",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "Best Ultra-Lightweight 51g Electric Toothbrush (UK 2026)",
        image: "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp",
        excerpt: "Clinical testing of lightweight unibody handles for wrist comfort, reduced fatigue, and effortless morning luxury.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/best-travel-electric-toothbrush-uk-2026",
        category: "Travel Luxury",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "Best Travel Electric Toothbrush with Luxury Hard Case (UK 2026)",
        image: "/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp",
        excerpt: "51g featherlight body, included magnetic hard case, and 90-day battery life that frees your dopp kit from charging docks.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/most-durable-electric-toothbrush-uk-2026",
        category: "Durability Benchmark",
        categoryColor: "text-emerald-800",
        badgeBg: "bg-emerald-50 border-emerald-200",
        title: "Most Durable Aerospace Aluminium Electric Toothbrush",
        image: "/img/toothbrushes/miroooo-x2-ranked-product-box-case-brush.webp",
        excerpt: "100% CNC aerospace aluminium unibody, IPX7 immersion waterproofing, and zero porous rubber that harbors black bathroom mould.",
        readTime: "5 min read",
        date: "Updated 2026",
      },
      {
        slug: "/brand-name-premium",
        category: "Financial Audit",
        categoryColor: "text-amber-800",
        badgeBg: "bg-amber-50 border-amber-200",
        title: "The Brand Name Premium: Why Celebrity Masks Cost £400+ Extra",
        image: "/images/editorial/clinic-treatment.jpg",
        excerpt: "Deconstructing the celebrity marketing markups behind luxury legacy devices vs direct-to-consumer clinical-grade devices.",
        readTime: "6 min read",
        date: "Updated 2026",
      },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: 'beauty' },
    { slug: 'wellness' },
    { slug: 'style' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoriesData[slug];
  if (!category) {
    return {
      title: "Category Not Found | The Global Edit",
      description: "Editorial category archive.",
    };
  }
  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoriesData[slug];

  if (!category) {
    return (
      <div className="w-full bg-[#FAFAFA] min-h-[60vh] flex items-center justify-center font-sans">
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <BookOpen className="w-10 h-10 text-stone-400 mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-stone-900 mb-3">Category Not Found</h1>
          <p className="text-stone-600 text-sm mb-6">The requested editorial category does not exist in our archive.</p>
          <Link href="/blog" className="inline-block bg-stone-900 text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-stone-700 transition-colors">
            Browse The Edit Archive
          </Link>
        </div>
      </div>
    );
  }

  const [leadArticle, ...secondaryArticles] = category.articles;

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-stone-900 font-sans">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between text-xs tracking-wider uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900 transition-colors">The Global Edit</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link href="/blog" className="hover:text-stone-900 transition-colors">The Edit</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-bold">{category.title}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-800 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Category Desk</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-24">
        {/* Editorial Masthead */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 text-stone-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            <Filter className="w-3.5 h-3.5 text-amber-800" />
            {category.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 tracking-tight leading-tight mb-4">
            {category.title}
          </h1>
          <p className="text-stone-600 font-serif text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto italic">
            {category.subtitle}
          </p>
        </header>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-16 border-b border-stone-200 pb-6 overflow-x-auto">
          <Link
            href="/category/beauty"
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs whitespace-nowrap ${
              slug === 'beauty'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            }`}
          >
            The Beauty Edit
          </Link>
          <Link
            href="/category/wellness"
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs whitespace-nowrap ${
              slug === 'wellness'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            }`}
          >
            The Wellness Edit
          </Link>
          <Link
            href="/category/style"
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs whitespace-nowrap ${
              slug === 'style'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
            }`}
          >
            The Style Edit
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs whitespace-nowrap bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
          >
            View All Archive (28)
          </Link>
        </div>

        {/* Lead Featured Story */}
        {leadArticle && (
          <section className="mb-16">
            <Link
              href={leadArticle.slug}
              className="group block bg-white border border-stone-200 hover:border-stone-400 p-6 md:p-10 transition-all duration-300 shadow-xs hover:shadow-md rounded-xs"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 lg:col-span-7 aspect-[16/10] bg-stone-100 overflow-hidden rounded-xs relative">
                  <img
                    src={leadArticle.image}
                    alt={leadArticle.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-xs border ${leadArticle.badgeBg} ${leadArticle.categoryColor} bg-white/95 backdrop-blur-xs shadow-xs`}>
                    <Award className="w-3.5 h-3.5" />
                    Featured Lead Investigation
                  </span>
                </div>
                <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-3 font-medium">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {leadArticle.readTime}</span>
                      <span>•</span>
                      <span>{leadArticle.date}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight mb-4">
                      {leadArticle.title}
                    </h2>

                    <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                      {leadArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-bold text-stone-900 inline-flex items-center gap-1.5 group-hover:text-amber-800 transition-colors">
                      Read Complete Story <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Secondary Articles Grid */}
        <section>
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-8">
            <h2 className="text-xl sm:text-2xl font-serif text-stone-900 font-normal">
              More In {category.title}
            </h2>
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              {secondaryArticles.length} Investigations
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {secondaryArticles.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group flex flex-col justify-between bg-white border border-stone-200 hover:border-stone-400 p-5 transition-all duration-200 shadow-xs hover:shadow-sm rounded-xs"
              >
                <div>
                  <div className="aspect-[16/10] bg-stone-100 overflow-hidden mb-4 rounded-xs relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-xs border ${article.badgeBg} ${article.categoryColor} bg-white/95 backdrop-blur-xs`}>
                      {article.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-2 font-medium">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-900 font-semibold group-hover:text-amber-800 transition-colors">
                  <span className="uppercase tracking-wider text-[11px]">Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Curation Footer Box */}
        <section className="mt-20 bg-white border border-stone-200 p-8 md:p-12 text-center rounded-xs shadow-xs">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <CheckCircle2 className="w-4 h-4 text-amber-800" />
              Verified Editorial Integrity
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4">
              The Global Edit Research Protocol
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
              All articles in {category.title} are independently tested, reviewed by medical or engineering specialists, and published free of sponsored brand influence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/best-led-face-mask-uk-2026"
                className="inline-block bg-stone-900 text-white px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-stone-700 transition-colors"
              >
                Top LED Face Mask of 2026
              </Link>
              <Link
                href="/best-electric-toothbrush-uk-2026"
                className="inline-block bg-amber-800 text-white px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-amber-900 transition-colors"
              >
                Top Sonic Toothbrush of 2026
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
