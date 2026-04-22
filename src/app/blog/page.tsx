import Link from 'next/link';

export const metadata = {
  title: "The Edit — All Articles | The Global Edit",
  description: "Browse every editorial piece from The Global Edit: clinical beauty, LED therapy science, skincare routines, and product exposés.",
};

const articles = [
  {
    slug: "/best-led-face-mask-uk-2026",
    category: "Editorial Review",
    categoryColor: "text-amber-700",
    title: "We Tested Every Premium LED Face Mask of 2026. Here Is The Definitive Ranking.",
    image: "https://lawngreen-kingfisher-468763.hostingersite.com/wp-content/uploads/2026/02/39-w.webp",
  },
  {
    slug: "/blog/why-silicone-masks-are-failing",
    category: "Beauty Tech Exposé",
    categoryColor: "text-red-700",
    title: "Why Flexible Silicone LED Masks Are Failing Patients",
    image: "https://img.thesitebase.net/10677/10677322/themes/1769107230af732ce69a.jpeg",
  },
  {
    slug: "/blog/neck-neglect-skincare",
    category: "Anti-Aging Secrets",
    categoryColor: "text-stone-500",
    title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "/blog/acne-blue-light-myth",
    category: "Dermatology Science",
    categoryColor: "text-blue-700",
    title: "Why Red Light Therapy Often Fails To Cure Clinical Acne",
    image: "https://images.unsplash.com/photo-1615397323602-23c285bfba44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "/blog/clinic-vs-at-home-roi",
    category: "Wellness Investment",
    categoryColor: "text-stone-500",
    title: "At-Home LED vs Dermatology Clinics: The True Cost Breakdown",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "/blog/is-near-infrared-safe",
    category: "Clinical Tech",
    categoryColor: "text-stone-500",
    title: "Is Near-Infrared (NIR) Light Actually Safe For Daily Facial Use?",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "/blog/led-mask-frequency",
    category: "Optimization Guide",
    categoryColor: "text-stone-500",
    title: "How Often Should You Really Be Using Your LED Face Mask?",
    image: "https://img.thesitebase.net/10677/10677322/themes/1770302958c850cb975e.png",
  },
  {
    slug: "/blog/amazon-led-mask-risks",
    category: "Consumer Warning",
    categoryColor: "text-red-700",
    title: "Why Buying An LED Mask On Amazon Could Damage Your Skin",
    image: "https://img.thesitebase.net/10677/10677322/themes/1768726655a4cf8cd691.png",
  },
  {
    slug: "/blog/skincare-routine-2026",
    category: "Wellness",
    categoryColor: "text-stone-500",
    title: "The 3-Step Morning Routine Dermatologists Actually Use",
    image: "https://img.thesitebase.net/10677/10677322/themes/176872504642f0322d65.jpeg",
  },
];

export default function BlogIndex() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-24">
        <div className="text-center mb-16 border-b border-stone-200 pb-10">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4 block text-xs">Archive</span>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight mb-4">The Edit</h1>
          <p className="text-stone-500 italic font-serif text-lg max-w-lg mx-auto">
            Every investigation, exposé, and editorial guide from our research desk.
          </p>
        </div>

        {/* Featured Article (first one, large) */}
        <Link href={articles[0].slug} className="group block mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] bg-stone-200 overflow-hidden">
              <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <span className={`text-[10px] uppercase tracking-widest ${articles[0].categoryColor} font-bold mb-3 block`}>{articles[0].category}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight mb-4">
                {articles[0].title}
              </h2>
              <span className="text-xs uppercase tracking-widest text-stone-400">Read Full Article →</span>
            </div>
          </div>
        </Link>

        <hr className="border-stone-200 mb-16" />

        {/* Remaining articles grid */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {articles.slice(1).map((a) => (
            <Link key={a.slug} href={a.slug} className="group block">
              <div className="aspect-[4/3] bg-stone-200 mb-4 overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 saturate-[.6]" />
              </div>
              <span className={`text-[10px] uppercase tracking-widest ${a.categoryColor} font-bold mb-2 block`}>{a.category}</span>
              <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-snug">
                {a.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
