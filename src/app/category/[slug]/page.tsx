import Link from 'next/link';

const categories = {
  beauty: {
    title: "The Beauty Edit",
    subtitle: "Every investigation, ranking, and expose from our clinical beauty research desk.",
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
        slug: "/blog/why-silicone-masks-are-failing",
        category: "Beauty Tech Expose",
        categoryColor: "text-red-700",
        title: "Why Flexible Silicone LED Masks Are Failing Patients",
        image: "/images/editorial/omnilux-contour-mask.jpeg",
        excerpt: "Flexible silicone masks dominate Instagram, but clinical engineers are quietly alarmed by their structural flaws.",
      },
      {
        slug: "/blog/acne-blue-light-myth",
        category: "Dermatology Science",
        categoryColor: "text-blue-700",
        title: "Why Red Light Therapy Often Fails To Cure Clinical Acne",
        image: "/images/editorial/acne-skincare.jpg",
        excerpt: "Red light stimulates collagen, but it cannot kill acne-causing bacteria. You need a completely different wavelength.",
      },
      {
        slug: "/blog/amazon-led-mask-risks",
        category: "Consumer Warning",
        categoryColor: "text-red-700",
        title: "Why Buying An LED Mask On Amazon Could Damage Your Skin",
        image: "/images/editorial/amazon-led-risk-mask.png",
        excerpt: "Unverified sellers, falsified nanometer specs, and recalled electrical designs. What to avoid before you buy.",
      },
    ],
  },
  wellness: {
    title: "The Wellness Edit",
    subtitle: "Science-backed guides for smarter investment into your long-term health.",
    articles: [
      {
        slug: "/blog/skincare-routine-2026",
        category: "Wellness",
        categoryColor: "text-stone-500",
        title: "The 3-Step Morning Routine Dermatologists Actually Use",
        image: "/images/editorial/skincare-routine.jpg",
        excerpt: "Forget the 10-step influencer routines. Here is the minimalist, scientifically-backed protocol professionals follow.",
      },
      {
        slug: "/blog/neck-neglect-skincare",
        category: "Anti-Aging Secrets",
        categoryColor: "text-stone-500",
        title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
        image: "/images/editorial/neck-skincare.jpg",
        excerpt: "Failing to treat your neck will age you 10 years faster than any wrinkle on your face.",
      },
      {
        slug: "/blog/clinic-vs-at-home-roi",
        category: "Wellness Investment",
        categoryColor: "text-stone-500",
        title: "At-Home LED vs Dermatology Clinics: The True Cost Breakdown",
        image: "/images/editorial/clinic-treatment.jpg",
        excerpt: "Are GBP 150 in-office sessions worth it, or has at-home clinical technology finally made them obsolete?",
      },
      {
        slug: "/blog/is-near-infrared-safe",
        category: "Clinical Tech",
        categoryColor: "text-stone-500",
        title: "Is Near-Infrared (NIR) Light Safe For Daily Facial Use?",
        image: "/images/editorial/nir-safety.jpg",
        excerpt: "It is invisible to the human eye but doing most of the anti-aging work. Here is the clinical safety data.",
      },
    ],
  },
  style: {
    title: "The Style Edit",
    subtitle: "Elevating the standards of what modern high-living truly looks like.",
    articles: [
      {
        slug: "/blog/led-mask-frequency",
        category: "Optimization Guide",
        categoryColor: "text-stone-500",
        title: "How Often Should You Really Be Using Your LED Face Mask?",
        image: "/images/editorial/led-light-therapy.jpg",
        excerpt: "More is not always better. The biphasic dose response curve explains the science of optimal frequency.",
      },
      {
        slug: "/best-led-face-mask-uk-2026",
        category: "Editorial Review",
        categoryColor: "text-amber-700",
        title: "The LED Mask Ranked #1 by Our Editors in 2026",
        image: "/images/mask-angle.webp",
        excerpt: "High-performance skincare is the new luxury. Our definitive editor's choice for the modern woman.",
      },
      {
        slug: "/blog/neck-neglect-skincare",
        category: "Beauty Investment",
        categoryColor: "text-stone-500",
        title: "The Single Biggest Mistake Well-Dressed Women Make With Their Skincare",
        image: "/images/editorial/neck-skincare.jpg",
        excerpt: "An immaculate wardrobe and polished face mean nothing if the neck tells a different story.",
      },
      {
        slug: "/blog/clinic-vs-at-home-roi",
        category: "Smart Spending",
        categoryColor: "text-stone-500",
        title: "The Modern Case For Owning Your Own Skincare Technology",
        image: "/images/editorial/clinic-treatment.jpg",
        excerpt: "Just as the home gym replaced the expensive membership, at-home clinical devices are replacing the dermatology clinic.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return [{ slug: 'beauty' }, { slug: 'wellness' }, { slug: 'style' }];
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = categories[slug as keyof typeof categories];

  if (!data) {
    return (
      <div className="w-full bg-[#FAFAFA] min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-stone-900 mb-4">Category Not Found</h1>
          <Link href="/" className="inline-block bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const [featured, ...rest] = data.articles;

  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12 border-b border-stone-200 mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-4 block">Archive</span>
        <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight mb-5">{data.title}</h1>
        <p className="text-stone-500 italic font-serif text-lg max-w-lg mx-auto">{data.subtitle}</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <Link href={featured.slug} className="group block mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] bg-stone-200 overflow-hidden rounded-sm">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <span className={`text-[10px] uppercase tracking-widest ${featured.categoryColor} font-bold mb-3 block`}>{featured.category}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight mb-5">
                {featured.title}
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="text-xs uppercase tracking-widest text-stone-400 border-b border-stone-300 pb-0.5">Read Full Article &rarr;</span>
            </div>
          </div>
        </Link>

        <hr className="border-stone-200 mb-16" />

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {rest.map((a) => (
            <Link key={a.slug + a.title} href={a.slug} className="group block">
              <div className="aspect-[4/3] bg-stone-200 mb-4 overflow-hidden rounded-sm">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 saturate-[.75]" />
              </div>
              <span className={`text-[10px] uppercase tracking-widest ${a.categoryColor} font-bold mb-2 block`}>{a.category}</span>
              <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3">{a.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
