import Link from 'next/link';

export const metadata = {
  title: "The Edit - All Articles | The Global Edit",
  description:
    "Browse every editorial piece from The Global Edit: clinical beauty, LED phototherapy rankings, acoustic oral care engineering, and product exposes.",
};

const featuredRankings = [
  {
    slug: "/best-led-face-mask-uk-2026",
    category: "Beauty Tech Ranking",
    categoryColor: "text-amber-700",
    title: "We Tested Every Premium LED Face Mask of 2026. Here Is The Definitive Ranking.",
    excerpt: "Comparing Buudy, CurrentBody, Omnilux, Shark, and Dr. Dennis Gross side by side across 7 clinical wavelengths, irradiance, and neck coverage.",
    image: "/images/editorial/led-testing-clinic.jpg",
  },
  {
    slug: "/best-electric-toothbrush-uk-2026",
    category: "Oral Care Ranking",
    categoryColor: "text-emerald-700",
    title: "The Top 5 Electric Toothbrushes in the UK (2026 Clinical Audit)",
    excerpt: "Our dental testing lab evaluates Miroooo Brush X2, Oral-B iO6, Philips Sonicare 9000, and SURI across 51g ergonomics, 90-day battery life, and 45° Bass sweep subgingival plaque removal.",
    image: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp",
  },
];

const articles = [
  {
    slug: "/miroooo-vs-oral-b-io6",
    category: "Head-to-Head Battle",
    categoryColor: "text-emerald-700",
    title: "Miroooo Brush X2 vs Oral-B iO6: The 2026 Clinical Comparison",
    image: "/img/toothbrushes/oral-b-io6-comparison.webp",
  },
  {
    slug: "/theraface-vs-other-masks",
    category: "Competitor Comparison",
    categoryColor: "text-amber-700",
    title: "TheraFace Mask vs The Best LED Masks of 2026",
    image: "/images/editorial/dr-dennis-gross-spectralite.jpg",
  },
  {
    slug: "/miroooo-vs-philips-sonicare",
    category: "Head-to-Head Battle",
    categoryColor: "text-emerald-700",
    title: "Miroooo X2 vs Philips Sonicare DiamondClean 9000",
    image: "/img/toothbrushes/philips-sonicare-comparison.webp",
  },
  {
    slug: "/currentbody-vs-buudy",
    category: "Competitor Comparison",
    categoryColor: "text-amber-700",
    title: "CurrentBody vs Buudy 7-Colour LED Mask: Which is Worth It?",
    image: "/images/editorial/currentbody-skin-mask.jpeg",
  },
  {
    slug: "/silicone-led-mask-dangers",
    category: "Clinical Expose",
    categoryColor: "text-red-700",
    title: "The Hidden Hazards of Flexible Silicone LED Face Masks",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
  },
  {
    slug: "/best-lightweight-electric-toothbrush-uk-2026",
    category: "Feature Benchmark",
    categoryColor: "text-emerald-700",
    title: "Best Ultra-Lightweight 51g Electric Toothbrush (UK 2026)",
    image: "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp",
  },
  {
    slug: "/floating-head-warning",
    category: "Anti-Aging Warning",
    categoryColor: "text-amber-700",
    title: "The Floating Head Phenomenon: Why Skincare Cannot Stop at the Chin",
    image: "/images/editorial/neck-skincare.jpg",
  },
  {
    slug: "/miroooo-vs-suri",
    category: "Head-to-Head Battle",
    categoryColor: "text-emerald-700",
    title: "Miroooo Brush X2 vs SURI Sustainable Sonic 2.0",
    image: "/img/toothbrushes/suri-sonic-comparison.webp",
  },
  {
    slug: "/deluxeskin-vs-buudy",
    category: "Competitor Comparison",
    categoryColor: "text-amber-700",
    title: "DeluxeSkin vs Buudy 7-Colour LED Mask: Real Clinical Testing",
    image: "/images/mask-angle.webp",
  },
  {
    slug: "/best-battery-life-electric-toothbrush-uk-2026",
    category: "Feature Benchmark",
    categoryColor: "text-emerald-700",
    title: "Best 90-Day Battery Life Electric Toothbrush (UK 2026)",
    image: "/img/toothbrushes/entry-electric-toothbrush.webp",
  },
  {
    slug: "/missing-colors-expose",
    category: "Wavelength Science",
    categoryColor: "text-amber-700",
    title: "Why 2-Color Masks Are Obsolete: The 7-Spectrum Revolution",
    image: "/images/editorial/acne-skincare.jpg",
  },
  {
    slug: "/best-quiet-electric-toothbrush-uk-2026",
    category: "Acoustic Benchmark",
    categoryColor: "text-emerald-700",
    title: "Best Whisper-Quiet <50dB Electric Toothbrush (UK 2026)",
    image: "/img/toothbrushes/miroooo-x-electric-toothbrush.webp",
  },
  {
    slug: "/qureskincare-vs-buudy",
    category: "Competitor Comparison",
    categoryColor: "text-amber-700",
    title: "Qure Skincare vs Buudy 7-Colour LED Mask: Side-by-Side Review",
    image: "/images/editorial/shark-cryoglow-mask.png",
  },
  {
    slug: "/most-durable-electric-toothbrush-uk-2026",
    category: "Durability Guide",
    categoryColor: "text-emerald-700",
    title: "Most Durable Aerospace Aluminium Electric Toothbrush",
    image: "/img/toothbrushes/miroooo-x2-ranked-product-box-case-brush.webp",
  },
  {
    slug: "/led-density-scam",
    category: "Consumer Warning",
    categoryColor: "text-red-700",
    title: "The LED Density Scam: Why Diode Count & Irradiance Matter",
    image: "/images/editorial/amazon-led-risk-mask.png",
  },
  {
    slug: "/best-electric-toothbrush-for-sensitive-teeth-uk-2026",
    category: "Dental Health",
    categoryColor: "text-emerald-700",
    title: "Best Electric Toothbrush for Sensitive Teeth & Receding Gums",
    image: "/img/toothbrushes/miroooo-x2-electric-toothbrush.webp",
  },
  {
    slug: "/brand-name-premium",
    category: "Financial Audit",
    categoryColor: "text-amber-700",
    title: "The Brand Name Premium: Why Celebrity Masks Cost £400+ Extra",
    image: "/images/editorial/clinic-treatment.jpg",
  },
  {
    slug: "/best-travel-electric-toothbrush-uk-2026",
    category: "Travel Guide",
    categoryColor: "text-emerald-700",
    title: "Best Travel Electric Toothbrush with Luxury Hard Case (UK 2026)",
    image: "/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp",
  },
  {
    slug: "/omnilux-led-mask-review",
    category: "Product Review",
    categoryColor: "text-amber-700",
    title: "Omnilux Contour Face Review: Why We Recommend The 7-Colour Alternative",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
  },
  {
    slug: "/miroooo-brush-x-uk-review-2026",
    category: "Clinical Review",
    categoryColor: "text-emerald-700",
    title: "Miroooo Brush X2 Official UK Review & 30-Day Clinical Trial",
    image: "/img/toothbrushes/miroooo-brush-x2-dentist-verdict-dr-olivia.webp",
  },
  {
    slug: "/blog/is-near-infrared-safe",
    category: "Clinical Tech",
    categoryColor: "text-stone-500",
    title: "Is Near-Infrared (NIR) Light Actually Safe For Daily Facial Use?",
    image: "/images/editorial/nir-safety.jpg",
  },
  {
    slug: "/blog/clinic-vs-at-home-roi",
    category: "Wellness Investment",
    categoryColor: "text-stone-500",
    title: "At-Home LED vs Dermatology Clinics: The True Cost Breakdown",
    image: "/images/editorial/clinic-treatment.jpg",
  },
];

export default function BlogIndex() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-24">
        <div className="text-center mb-16 border-b border-stone-200 pb-10">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4 block text-xs">Archive</span>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight mb-4">The Edit</h1>
          <p className="text-stone-500 italic font-serif text-lg max-w-xl mx-auto">
            Every investigation, clinical trial, comparative review, and buyer guide across beauty tech and modern oral care.
          </p>
        </div>

        {/* Featured 2 Major Product Rankings */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredRankings.map((item) => (
            <Link key={item.slug} href={item.slug} className="group block bg-white border border-stone-200 hover:border-stone-400 p-6 transition-all shadow-sm">
              <div className="aspect-[16/10] bg-stone-100 overflow-hidden mb-6">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className={`text-[11px] uppercase tracking-widest ${item.categoryColor} font-bold mb-2 block`}>{item.category}</span>
              <h2 className="text-2xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3">
                {item.title}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">{item.excerpt}</p>
              <span className="text-xs uppercase tracking-widest font-bold text-stone-900 inline-flex items-center gap-1 group-hover:underline">
                Read Full Ranking &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Editorial Articles Grid */}
        <h2 className="text-2xl font-serif text-stone-900 border-b border-stone-200 pb-4 mb-8">
          Comparative Battles, Exposes & Guides
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <Link key={item.slug} href={item.slug} className="group block bg-white border border-stone-200 hover:border-stone-400 p-5 transition-all">
              <div className="aspect-[16/10] bg-stone-100 overflow-hidden mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className={`text-[10px] uppercase tracking-widest ${item.categoryColor} font-bold mb-2 block`}>{item.category}</span>
              <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3 line-clamp-2">
                {item.title}
              </h3>
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold group-hover:text-stone-900">
                Read Article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
