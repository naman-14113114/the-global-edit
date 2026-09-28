import Link from 'next/link';

const categories = {
  beauty: {
    title: "The Beauty Edit",
    subtitle: "Every clinical investigation, ranking, and expose from our beauty-tech research desk.",
    articles: [
      {
        slug: "/best-led-face-mask-uk-2026",
        category: "Editorial Review",
        categoryColor: "text-amber-700",
        title: "We Tested Every Premium LED Face Mask of 2026. Here Is The Definitive Ranking.",
        image: "/images/editorial/led-testing-clinic.jpg",
        excerpt: "Three months. Five masks. One winner. Our editors reveal which LED mask actually delivers clinical-grade results.",
      },
      {
        slug: "/theraface-vs-other-masks",
        category: "Competitor Comparison",
        categoryColor: "text-amber-700",
        title: "TheraFace Mask (£579) vs The Best LED Masks of 2026",
        image: "/images/editorial/dr-dennis-gross-spectralite.jpg",
        excerpt: "Evaluating whether Therabody's £579 vibrating mask justifies a £400 premium over Buudy.",
      },
      {
        slug: "/silicone-led-mask-dangers",
        category: "Beauty Tech Expose",
        categoryColor: "text-red-700",
        title: "Why Flexible Silicone LED Masks Are Failing Patients",
        image: "/images/editorial/omnilux-contour-mask.jpeg",
        excerpt: "Flexible silicone masks dominate Instagram, but clinical engineers are quietly alarmed by their structural flaws.",
      },
      {
        slug: "/currentbody-vs-buudy",
        category: "Competitor Comparison",
        categoryColor: "text-amber-700",
        title: "CurrentBody vs Buudy 7-Colour LED Mask: Which is Worth It?",
        image: "/images/editorial/currentbody-skin-mask.jpeg",
        excerpt: "Comparing 2 wavelengths vs 7 clinical spectra, £400 cost vs £179, and built-in neck coverage.",
      },
      {
        slug: "/missing-colors-expose",
        category: "Wavelength Science",
        categoryColor: "text-amber-700",
        title: "Why 2-Color Masks Are Obsolete: The 7-Spectrum Revolution",
        image: "/images/editorial/acne-skincare.jpg",
        excerpt: "Red light stimulates collagen, but it cannot kill acne-causing bacteria. You need a 7-wavelength spectrum.",
      },
      {
        slug: "/deluxeskin-vs-buudy",
        category: "Competitor Comparison",
        categoryColor: "text-amber-700",
        title: "DeluxeSkin vs Buudy 7-Colour LED Mask: Real Clinical Testing",
        image: "/images/mask-angle.webp",
        excerpt: "Comparing dual-piece corded masks with all-in-one wireless 7-color light therapy.",
      },
    ],
  },
  wellness: {
    title: "The Wellness Edit",
    subtitle: "Science-backed clinical guides for smarter investment into your dental and dermatological health.",
    articles: [
      {
        slug: "/best-electric-toothbrush-uk-2026",
        category: "Oral Care Ranking",
        categoryColor: "text-emerald-700",
        title: "The Top 5 Electric Toothbrushes in the UK (2026 Clinical Audit)",
        image: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp",
        excerpt: "Our dental testing lab evaluates Miroooo Brush X2, Oral-B iO6, Philips Sonicare 9000, and SURI across 51g ergonomics and plaque removal.",
      },
      {
        slug: "/best-electric-toothbrush-for-sensitive-teeth-uk-2026",
        category: "Dental Health",
        categoryColor: "text-emerald-700",
        title: "Best Electric Toothbrush for Sensitive Teeth & Receding Gums",
        image: "/img/toothbrushes/miroooo-x2-electric-toothbrush.webp",
        excerpt: "Gentle 45° Bass sweep micro-bubbles and active smart pressure halo ring protection for receding gums.",
      },
      {
        slug: "/floating-head-warning",
        category: "Anti-Aging Secrets",
        categoryColor: "text-amber-700",
        title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
        image: "/images/editorial/neck-skincare.jpg",
        excerpt: "Failing to treat your neck will age you 10 years faster than any wrinkle on your face.",
      },
      {
        slug: "/best-battery-life-electric-toothbrush-uk-2026",
        category: "Battery Benchmark",
        categoryColor: "text-emerald-700",
        title: "Best 90-Day Battery Life Electric Toothbrush (UK 2026)",
        image: "/img/toothbrushes/entry-electric-toothbrush.webp",
        excerpt: "Cobalt cell engineering delivering 90 days per single charge with universal USB-C fast charging.",
      },
      {
        slug: "/blog/clinic-vs-at-home-roi",
        category: "Wellness Investment",
        categoryColor: "text-stone-500",
        title: "At-Home LED vs Dermatology Clinics: The True Cost Breakdown",
        image: "/images/editorial/clinic-treatment.jpg",
        excerpt: "Are £150 in-office sessions worth it, or has at-home clinical technology finally made them obsolete?",
      },
      {
        slug: "/best-quiet-electric-toothbrush-uk-2026",
        category: "Acoustic Benchmark",
        categoryColor: "text-emerald-700",
        title: "Best Whisper-Quiet <50dB Electric Toothbrush (UK 2026)",
        image: "/img/toothbrushes/miroooo-x-electric-toothbrush.webp",
        excerpt: "Sub-50dB acoustic motor sound tested against 65dB+ mechanical rotary/oscillating noise.",
      },
    ],
  },
  style: {
    title: "The Style Edit",
    subtitle: "Elevating the standards of what modern luxury self-care and ergonomic design truly look like.",
    articles: [
      {
        slug: "/miroooo-vs-oral-b-io6",
        category: "Oral Care Battle",
        categoryColor: "text-emerald-700",
        title: "Miroooo X2 vs Oral-B iO6: 51g Aluminium vs 140g Plastic",
        image: "/img/toothbrushes/oral-b-io6-comparison.webp",
        excerpt: "Why British consumers are ditching 140g vibrating plastic for sleek aerospace aluminium unibody design.",
      },
      {
        slug: "/best-lightweight-electric-toothbrush-uk-2026",
        category: "Ergonomics Benchmark",
        categoryColor: "text-emerald-700",
        title: "Best Ultra-Lightweight 51g Electric Toothbrush (UK 2026)",
        image: "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp",
        excerpt: "Clinical testing of lightweight handles for wrist fatigue, arthritis, and dexterity comfort.",
      },
      {
        slug: "/best-travel-electric-toothbrush-uk-2026",
        category: "Travel Guide",
        categoryColor: "text-emerald-700",
        title: "Best Travel Electric Toothbrush with Luxury Hard Case (UK 2026)",
        image: "/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp",
        excerpt: "51g featherlight unibody, included luxury hard case, and 90-day battery with zero travel chargers needed.",
      },
      {
        slug: "/miroooo-vs-suri",
        category: "Oral Care Battle",
        categoryColor: "text-emerald-700",
        title: "Miroooo Brush X2 vs SURI Sustainable Sonic 2.0",
        image: "/img/toothbrushes/suri-sonic-comparison.webp",
        excerpt: "51g unibody vs 85g modular handle: durability, battery life, and brush head precision tested.",
      },
      {
        slug: "/most-durable-electric-toothbrush-uk-2026",
        category: "Durability Guide",
        categoryColor: "text-emerald-700",
        title: "Most Durable Aerospace Aluminium Electric Toothbrush",
        image: "/img/toothbrushes/miroooo-x2-ranked-product-box-case-brush.webp",
        excerpt: "100% CNC aerospace aluminium unibody, IPX7 immersion waterproofing, and non-porous black mould resistance.",
      },
      {
        slug: "/brand-name-premium",
        category: "Financial Audit",
        categoryColor: "text-amber-700",
        title: "The Brand Name Premium: Why Celebrity Masks Cost £400+ Extra",
        image: "/images/editorial/clinic-treatment.jpg",
        excerpt: "Deconstructing the marketing markups behind luxury legacy devices vs direct-to-consumer clinical grade tools.",
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

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as keyof typeof categories];

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-serif text-stone-900 mb-4">Category Not Found</h1>
        <p className="text-stone-500 mb-8">The requested editorial category does not exist.</p>
        <Link href="/" className="inline-block bg-stone-900 text-white px-6 py-3 text-xs uppercase tracking-widest">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-24">
        <div className="text-center mb-16 border-b border-stone-200 pb-10">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4 block text-xs">Category</span>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight mb-4">{category.title}</h1>
          <p className="text-stone-500 italic font-serif text-lg max-w-xl mx-auto">
            {category.subtitle}
          </p>
        </div>

        {/* Featured Article */}
        <Link href={category.articles[0].slug} className="group block mb-16 bg-white border border-stone-200 p-6 md:p-8 hover:border-stone-400 transition-all shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] bg-stone-100 overflow-hidden rounded-sm">
              <img src={category.articles[0].image} alt={category.articles[0].title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <span className={`text-[11px] uppercase tracking-widest ${category.articles[0].categoryColor} font-bold mb-3 block`}>{category.articles[0].category}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight mb-4">
                {category.articles[0].title}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {category.articles[0].excerpt}
              </p>
              <span className="text-xs uppercase tracking-widest font-bold text-stone-900 inline-flex items-center gap-1 group-hover:underline">Read Full Article &rarr;</span>
            </div>
          </div>
        </Link>

        {/* Secondary Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.articles.slice(1).map((article) => (
            <Link key={article.slug} href={article.slug} className="group block bg-white border border-stone-200 p-5 hover:border-stone-400 transition-all shadow-sm">
              <div className="aspect-[16/10] bg-stone-100 overflow-hidden mb-4 rounded-sm">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className={`text-[10px] uppercase tracking-widest ${article.categoryColor} font-bold mb-2 block`}>{article.category}</span>
              <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3">
                {article.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <span className="text-[11px] uppercase tracking-widest text-stone-900 font-bold group-hover:underline">Read Article &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
