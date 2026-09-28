'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  SlidersHorizontal,
  Flame,
  Award
} from 'lucide-react';

interface ArticleItem {
  slug: string;
  category: string;
  categoryGroup: 'beauty' | 'oral-care' | 'exposes' | 'guides';
  categoryColor: string;
  badgeBg: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const allArticles: ArticleItem[] = [
  // --- FEATURED RANKINGS ---
  {
    slug: "/best-led-face-mask-uk-2026",
    category: "Beauty Tech Ranking",
    categoryGroup: "beauty",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "We Tested Every Premium LED Face Mask of 2026. Here Is The Definitive Ranking.",
    excerpt: "Comparing Buudy, CurrentBody, Omnilux, Shark, and Dr. Dennis Gross side by side across 7 clinical wavelengths, irradiance output, and neck coverage.",
    image: "/images/editorial/led-testing-clinic.jpg",
    readTime: "8 min read",
    date: "Autumn 2026",
    featured: true,
  },
  {
    slug: "/best-electric-toothbrush-uk-2026",
    category: "Oral Care Ranking",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "The Top 5 Electric Toothbrushes in the UK (2026 Clinical Audit)",
    excerpt: "Our dental testing lab evaluates Miroooo Brush X2, Oral-B iO6, Philips Sonicare 9000, and SURI across 51g ergonomics, 90-day battery life, and plaque removal.",
    image: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp",
    readTime: "7 min read",
    date: "Autumn 2026",
    featured: true,
  },

  // --- BLOG ESSAYS & CLINICAL GUIDES ---
  {
    slug: "/blog/why-silicone-masks-are-failing",
    category: "Beauty Tech Expose",
    categoryGroup: "exposes",
    categoryColor: "text-red-800",
    badgeBg: "bg-red-50 border-red-200",
    title: "Why The Flexible Silicone LED Mask Trend Is Failing Patients",
    excerpt: "Flexible silicone masks took over Instagram, but clinical engineers warn of light scattering, heat-trapping, and poor structural diode proximity.",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/blog/neck-neglect-skincare",
    category: "Anti-Aging Clinical Secret",
    categoryGroup: "guides",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
    excerpt: "The thin cervical dermis on your neck ages 10 years faster than facial tissue. Here is how dual-zone Near-Infrared phototherapy reverses Tech Neck.",
    image: "/images/editorial/neck-skincare.jpg",
    readTime: "4 min read",
    date: "Updated 2026",
  },
  {
    slug: "/blog/acne-blue-light-myth",
    category: "Dermatology Science",
    categoryGroup: "guides",
    categoryColor: "text-blue-800",
    badgeBg: "bg-blue-50 border-blue-200",
    title: "Why Red Light Therapy Fails For Acne (And What Actually Works)",
    excerpt: "Red light stimulates collagen but cannot neutralize Cutibacterium acnes. Discover why 415nm Blue and Cyan spectra are essential for active blemishes.",
    image: "/images/editorial/acne-skincare.jpg",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/blog/clinic-vs-at-home-roi",
    category: "Wellness Investment",
    categoryGroup: "guides",
    categoryColor: "text-stone-800",
    badgeBg: "bg-stone-100 border-stone-200",
    title: "At-Home LED vs Dermatology Clinics: The True Cost Breakdown & ROI",
    excerpt: "Are £150 in-office sessions still justified, or has at-home clinical phototherapy with 300+ diodes made recurring clinic visits obsolete?",
    image: "/images/editorial/clinic-treatment.jpg",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/blog/is-near-infrared-safe",
    category: "Photobiology Science",
    categoryGroup: "guides",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "Is Near-Infrared (NIR) Light Actually Safe For Daily Facial Use?",
    excerpt: "Understanding the safety profile of invisible 830nm wavelengths, mitochondrial cytochrome C oxidase activation, and deep tissue cellular regeneration.",
    image: "/images/editorial/nir-safety.jpg",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/blog/led-mask-frequency",
    category: "Clinical Protocol",
    categoryGroup: "guides",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "How Often Should You Really Be Using Your LED Face Mask?",
    excerpt: "The biological truth of the biphasic dose-response curve: why wearing your mask for 60 minutes halts progress, and the exact 10-15 minute routine.",
    image: "/images/editorial/led-light-therapy.jpg",
    readTime: "4 min read",
    date: "Updated 2026",
  },
  {
    slug: "/blog/amazon-led-mask-risks",
    category: "Consumer Safety Alert",
    categoryGroup: "exposes",
    categoryColor: "text-red-800",
    badgeBg: "bg-red-50 border-red-200",
    title: "Why Buying An LED Mask On Amazon Could Damage Your Skin",
    excerpt: "Uncalibrated RGB Christmas-light diodes, uncertified battery units, and falsified irradiance specs: our lab tests unmask budget marketplace devices.",
    image: "/images/editorial/amazon-led-risk-mask.png",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/blog/skincare-routine-2026",
    category: "Dermatology Protocol",
    categoryGroup: "guides",
    categoryColor: "text-stone-800",
    badgeBg: "bg-stone-100 border-stone-200",
    title: "The 3-Step Morning Routine Dermatologists Actually Use (2026 Edition)",
    excerpt: "Ditch the 10-step influencer routines. Dermatologists reveal the scientifically proven morning trifecta and how evening LED light multiplies results.",
    image: "/images/editorial/skincare-routine.jpg",
    readTime: "5 min read",
    date: "Updated 2026",
  },

  // --- HEAD-TO-HEAD BATTLES & EXPOSES ---
  {
    slug: "/silicone-led-mask-dangers",
    category: "Clinical Expose",
    categoryGroup: "exposes",
    categoryColor: "text-red-800",
    badgeBg: "bg-red-50 border-red-200",
    title: "The Hidden Hazards of Flexible Silicone LED Face Masks",
    excerpt: "An independent investigation into heat trapping, bacterial growth, and optical scattering in popular silicone masks.",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/floating-head-warning",
    category: "Anti-Aging Warning",
    categoryGroup: "guides",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "The Floating Head Phenomenon: Why Skincare Cannot Stop at the Chin",
    excerpt: "Why treating only the face creates a 10-year aging mismatch with your neck and decolletage.",
    image: "/images/editorial/neck-skincare.jpg",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/currentbody-vs-buudy",
    category: "Head-to-Head Battle",
    categoryGroup: "beauty",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "CurrentBody vs Buudy 7-Colour LED Mask: Which is Worth It?",
    excerpt: "Comparing 2 wavelengths vs 7 clinical spectra, £399 price tags vs £179 direct pricing, and built-in neck therapy.",
    image: "/images/editorial/currentbody-skin-mask.jpeg",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/theraface-vs-other-masks",
    category: "Head-to-Head Battle",
    categoryGroup: "beauty",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "TheraFace Mask (£579) vs The Best LED Masks of 2026",
    excerpt: "Evaluating whether Therabody's £579 vibrating mask justifies a £400 price premium over multi-spectrum rivals.",
    image: "/images/editorial/dr-dennis-gross-spectralite.jpg",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/deluxeskin-vs-buudy",
    category: "Head-to-Head Battle",
    categoryGroup: "beauty",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "DeluxeSkin vs Buudy 7-Colour LED Mask: Real Clinical Testing",
    excerpt: "Comparing dual-piece corded controllers with all-in-one wireless 7-spectrum phototherapy.",
    image: "/images/mask-angle.webp",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/qureskincare-vs-buudy",
    category: "Head-to-Head Battle",
    categoryGroup: "beauty",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "Qure Skincare vs Buudy 7-Colour LED Mask: Side-by-Side Review",
    excerpt: "App-locked zone controls versus comprehensive whole-face and neck simultaneous phototherapy.",
    image: "/images/editorial/shark-cryoglow-mask.png",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/omnilux-led-mask-review",
    category: "Product Review",
    categoryGroup: "beauty",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "Omnilux Contour Face Review: Why We Recommend The 7-Colour Alternative",
    excerpt: "A deep clinical teardown of Omnilux's flagship 2-wavelength silicone mask and its 2026 competitors.",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
    readTime: "7 min read",
    date: "Updated 2026",
  },
  {
    slug: "/missing-colors-expose",
    category: "Wavelength Science",
    categoryGroup: "beauty",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "Why 2-Color Masks Are Obsolete: The 7-Spectrum Revolution",
    excerpt: "Why modern clinical dermatologists recommend all 7 spectra including Green, Yellow, and Cyan for comprehensive skin repair.",
    image: "/images/editorial/acne-skincare.jpg",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/led-density-scam",
    category: "Consumer Warning",
    categoryGroup: "exposes",
    categoryColor: "text-red-800",
    badgeBg: "bg-red-50 border-red-200",
    title: "The LED Density Scam: Why Diode Count & Irradiance Matter",
    excerpt: "How brands hide low diode counts behind clever marketing, and what irradiance thresholds you need for real cellular ATP stimulation.",
    image: "/images/editorial/amazon-led-risk-mask.png",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/brand-name-premium",
    category: "Financial Audit",
    categoryGroup: "exposes",
    categoryColor: "text-amber-800",
    badgeBg: "bg-amber-50 border-amber-200",
    title: "The Brand Name Premium: Why Celebrity Masks Cost £400+ Extra",
    excerpt: "Deconstructing luxury influencer markups vs precision direct-to-consumer photomedicine manufacturing.",
    image: "/images/editorial/clinic-treatment.jpg",
    readTime: "6 min read",
    date: "Updated 2026",
  },

  // --- ORAL CARE INVESTIGATIONS & COMPARISONS ---
  {
    slug: "/miroooo-brush-x-uk-review-2026",
    category: "Clinical Review",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Miroooo Brush X2 Official UK Review & 30-Day Clinical Trial",
    excerpt: "Our clinical dental testing panel evaluates the 51g unibody aluminium acoustic brush across plaque index and gingival health.",
    image: "/img/toothbrushes/miroooo-brush-x2-dentist-verdict-dr-olivia.webp",
    readTime: "7 min read",
    date: "Updated 2026",
  },
  {
    slug: "/miroooo-vs-oral-b-io6",
    category: "Head-to-Head Battle",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Miroooo Brush X2 vs Oral-B iO6: The 2026 Clinical Comparison",
    excerpt: "51g CNC aerospace aluminium vs 140g vibrating plastic: battery life, noise levels, and subgingival plaque clearance tested.",
    image: "/img/toothbrushes/oral-b-io6-comparison.webp",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/miroooo-vs-oral-b-io3",
    category: "Head-to-Head Battle",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Miroooo Brush X2 vs Oral-B iO3: Premium Performance Tested",
    excerpt: "Comparing entry-level legacy oscillating brushes against modern acoustic high-frequency aluminium precision.",
    image: "/img/toothbrushes/oral-b-io3-comparison.webp",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/miroooo-vs-philips-sonicare",
    category: "Head-to-Head Battle",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Miroooo X2 vs Philips Sonicare DiamondClean 9000",
    excerpt: "Can a £69 direct-to-consumer titanium sonic toothbrush outclean a £250 legacy market leader?",
    image: "/img/toothbrushes/philips-sonicare-comparison.webp",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/miroooo-vs-suri",
    category: "Head-to-Head Battle",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Miroooo Brush X2 vs SURI Sustainable Sonic 2.0",
    excerpt: "51g seamless unibody vs 85g modular plant-based handle: motor torque, IPX7 seal, and long-term durability tested.",
    image: "/img/toothbrushes/suri-sonic-comparison.webp",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/best-lightweight-electric-toothbrush-uk-2026",
    category: "Ergonomics Benchmark",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Best Ultra-Lightweight 51g Electric Toothbrush (UK 2026)",
    excerpt: "Clinical testing of handle weight on wrist fatigue, arthritis comfort, and brushing maneuverability.",
    image: "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/best-battery-life-electric-toothbrush-uk-2026",
    category: "Engineering Benchmark",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Best 90-Day Battery Life Electric Toothbrush (UK 2026)",
    excerpt: "Cobalt cell battery engineering delivering 90 days of continuous brushing on a single USB-C charge.",
    image: "/img/toothbrushes/entry-electric-toothbrush.webp",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/best-quiet-electric-toothbrush-uk-2026",
    category: "Acoustic Benchmark",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Best Whisper-Quiet <50dB Electric Toothbrush (UK 2026)",
    excerpt: "Decibel meter acoustic lab testing comparing sub-50dB magnetic levitation motors with noisy mechanical gears.",
    image: "/img/toothbrushes/miroooo-x-electric-toothbrush.webp",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/most-durable-electric-toothbrush-uk-2026",
    category: "Durability Guide",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Most Durable Aerospace Aluminium Electric Toothbrush",
    excerpt: "Why non-porous aluminium handles eliminate black mould and mechanical failure in wet bathroom environments.",
    image: "/img/toothbrushes/miroooo-x2-ranked-product-box-case-brush.webp",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/best-electric-toothbrush-for-sensitive-teeth-uk-2026",
    category: "Dental Health",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Best Electric Toothbrush for Sensitive Teeth & Receding Gums",
    excerpt: "Gentle 45° Bass sweep micro-bubbles and active smart pressure halo ring protection for sensitive gingival tissue.",
    image: "/img/toothbrushes/miroooo-x2-electric-toothbrush.webp",
    readTime: "6 min read",
    date: "Updated 2026",
  },
  {
    slug: "/best-travel-electric-toothbrush-uk-2026",
    category: "Travel Guide",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Best Travel Electric Toothbrush with Luxury Hard Case (UK 2026)",
    excerpt: "51g featherlight body, included magnetic travel case, and 90-day battery that eliminates bulky chargers.",
    image: "/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp",
    readTime: "5 min read",
    date: "Updated 2026",
  },
  {
    slug: "/why-switch-from-legacy-electric-toothbrushes-uk",
    category: "Dental Consumer Guide",
    categoryGroup: "oral-care",
    categoryColor: "text-emerald-800",
    badgeBg: "bg-emerald-50 border-emerald-200",
    title: "Why British Consumers Are Ditching 140g Legacy Electric Toothbrushes",
    excerpt: "The 7 clinical reasons smart UK households are replacing bulky plastic handles with acoustic aerospace aluminium.",
    image: "/img/toothbrushes/miroooo-brush-x2-extra-brush-heads-package.webp",
    readTime: "6 min read",
    date: "Updated 2026",
  },
];

const categoryFilters = [
  { id: 'all', label: 'All Articles' },
  { id: 'beauty', label: 'Beauty Tech & LED' },
  { id: 'oral-care', label: 'Oral Care & Sonic' },
  { id: 'exposes', label: 'Exposes & Warnings' },
  { id: 'guides', label: 'Clinical Guides' },
] as const;

export default function BlogIndex() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'beauty' | 'oral-care' | 'exposes' | 'guides'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesFilter = activeFilter === 'all' || article.categoryGroup === activeFilter;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const featured = allArticles.filter(a => a.featured);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-stone-900 font-sans">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between text-xs tracking-wider uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900 transition-colors">The Global Edit</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-bold">The Edit • Complete Archive</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-800 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>28 Clinical Investigations & Guides</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-24">
        {/* Editorial Masthead */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 text-stone-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-800" />
            Clinical Editorial Archive
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 tracking-tight leading-tight mb-4">
            The Edit
          </h1>
          <p className="text-stone-600 font-serif text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto italic">
            Every clinical investigation, laboratory teardown, comparative review, and evidence-based guide across modern beauty tech and acoustic oral care.
          </p>
        </header>

        {/* Featured Flagship Rankings Block */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-8">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-800" />
              <h2 className="text-xl sm:text-2xl font-serif text-stone-900 font-normal">
                Flagship Clinical Audits & Rankings
              </h2>
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold hidden sm:inline">
              Updated Autumn 2026
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((item) => (
              <Link 
                key={item.slug} 
                href={item.slug} 
                className="group block bg-white border border-stone-200 hover:border-stone-400 p-6 md:p-8 transition-all duration-300 shadow-xs hover:shadow-md rounded-xs"
              >
                <div className="aspect-[16/10] bg-stone-100 overflow-hidden mb-6 rounded-xs relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-xs border ${item.badgeBg} ${item.categoryColor} bg-white/95 backdrop-blur-xs shadow-xs`}>
                      <Award className="w-3.5 h-3.5" />
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-stone-500 mb-3 font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {item.readTime}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {item.excerpt}
                </p>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-bold text-stone-900 inline-flex items-center gap-1.5 group-hover:text-amber-800 transition-colors">
                    Read Complete Ranking <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    Clinical Lab Verified
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <section className="mb-12">
          <div className="bg-white border border-stone-200 p-4 sm:p-6 shadow-xs rounded-xs">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold mr-2 hidden sm:inline flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
                </span>
                {categoryFilters.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs cursor-pointer ${
                      activeFilter === tab.id
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[240px] sm:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAFAFA] border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors rounded-xs"
                />
              </div>
            </div>

            {/* Results Counter */}
            <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Showing <strong>{filteredArticles.length}</strong> editorial investigations</span>
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className="text-amber-800 hover:underline font-semibold"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white border border-stone-200 p-8 rounded-xs">
              <BookOpen className="w-8 h-8 text-stone-400 mx-auto mb-3" />
              <h3 className="text-xl font-serif text-stone-900 mb-2">No matching investigations found</h3>
              <p className="text-sm text-stone-500 mb-4">Try adjusting your search query or switching category filters.</p>
              <button
                onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                className="inline-block bg-stone-900 text-white px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-stone-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="group flex flex-col justify-between bg-white border border-stone-200 hover:border-stone-400 p-5 transition-all duration-200 shadow-xs hover:shadow-sm rounded-xs"
                >
                  <div>
                    <div className="aspect-[16/10] bg-stone-100 overflow-hidden mb-4 rounded-xs relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-xs border ${item.badgeBg} ${item.categoryColor} bg-white/95 backdrop-blur-xs`}>
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-2 font-medium">
                      <span>{item.readTime}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-900 font-semibold group-hover:text-amber-800 transition-colors">
                    <span className="uppercase tracking-wider text-[11px]">Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Editorial Quality Guarantee Banner */}
        <section className="mt-20 bg-white border border-stone-200 p-8 md:p-12 text-center rounded-xs shadow-xs">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <CheckCircle2 className="w-4 h-4 text-amber-800" />
              The Global Edit Editorial Standard
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4">
              Independent Clinical Teardowns & Uncompromising Truth
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
              We purchase our own devices, calibrate optical spectrometer sensors in private testing facilities, and consult practicing NHS and Harley Street dermatologists and dental surgeons. We accept no paid placements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-stone-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-700" /> 100% Independent Lab Testing</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-700" /> Clinically Calibrated Metrics</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-700" /> Zero Sponsored Ranking Spots</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
