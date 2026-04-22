import Link from 'next/link';

export const metadata = {
  title: "The Global Edit - Premium Curated Essentials",
  description: "Your daily source for expertly vetted beauty, wellness, and lifestyle essentials. Elevate your everyday standards.",
};

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center border-b border-stone-200 pb-20">
        <div>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-4 block">Latest Issue</span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-6">
            The Future of <br className="hidden md:block"/> At-Home Clinical Beauty.
          </h1>
          <p className="text-stone-500 text-lg mb-8 max-w-md">
            Out-perform the clinic with our definitive test of the year&apos;s best medical-grade LED masks.
          </p>
          <Link 
            href="/best-led-face-mask-uk-2026"
            className="inline-block bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors"
          >
            Read The Full Review
          </Link>
        </div>
        <div className="aspect-[4/5] bg-stone-200 relative overflow-hidden">
          <img 
            src="https://zcfpobpbuxmeztaflhcn.supabase.co/storage/v1/object/sign/Buudy%20LED%20mask%20Images/O5-w.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNmYyYzVlYi00ZTNjLTQxNTgtOGZlNS1iNTE1MWNmMmRjZDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCdXVkeSBMRUQgbWFzayBJbWFnZXMvTzUtdy53ZWJwIiwiaWF0IjoxNzczODUxMTI3LCJleHAiOjE4MDUzODcxMjd9.wQ6SMMkJs4EIcPMHo1MgzELvKTMP84amZyn4hZWGFSQ" 
            alt="Clinical Beauty Focus" 
            className="w-full h-full object-cover grayscale-[30%]"
          />
        </div>
      </section>

      {/* Recent Articles Grid — Row 1 */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center border-b border-stone-900 pb-4 mb-12">
          <h2 className="text-2xl font-serif text-stone-900">Recent Discoveries</h2>
          <Link href="/blog" className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900">View All</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <Link href="/blog/skincare-routine-2026" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://img.thesitebase.net/10677/10677322/themes/176872504642f0322d65.jpeg" 
                 alt="Skincare" 
                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Wellness</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              The 3-Step Morning Routine Dermatologists Actually Use
            </h3>
          </Link>
          
          <Link href="/blog/why-silicone-masks-are-failing" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://img.thesitebase.net/10677/10677322/themes/1769107230af732ce69a.jpeg" 
                 alt="Silicone mask" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-red-700 font-bold mb-2 block">Beauty Tech Exposé</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              Why Flexible Silicone LED Masks Are Failing Patients
            </h3>
          </Link>

          <Link href="/best-led-face-mask-uk-2026" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://zcfpobpbuxmeztaflhcn.supabase.co/storage/v1/object/sign/Buudy%20LED%20mask%20Images/64-w.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNmYyYzVlYi00ZTNjLTQxNTgtOGZlNS1iNTE1MWNmMmRjZDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCdXVkeSBMRUQgbWFzayBJbWFnZXMvNjQtdy53ZWJwIiwiaWF0IjoxNzczODUwOTkyLCJleHAiOjE4MDUzODY5OTJ9._nn9QCgv4t0HmHLjnaPTYMFdFK3K5CRguPxEOUS6Z40" 
                 alt="Buudy Mask Review" 
                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mb-2 block">Editorial Review</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
               Every Premium LED Mask Tested & Ranked
            </h3>
          </Link>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <Link href="/blog/neck-neglect-skincare" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://lawngreen-kingfisher-468763.hostingersite.com/wp-content/uploads/2026/02/57-w-1.webp"  
                 alt="Neck care" 
                 className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Anti-Aging Secrets</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin
            </h3>
          </Link>

          <Link href="/blog/acne-blue-light-myth" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://img.shopbase.com/10677/10677322/themes/17710782713159684b8b.jpeg" 
                 alt="Acne treatment" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-blue-700 font-bold mb-2 block">Dermatology Science</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              Why Red Light Therapy Often Fails To Cure Clinical Acne
            </h3>
          </Link>

          <Link href="/blog/clinic-vs-at-home-roi" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://img.thesitebase.net/10677/10677322/themes/1769107230af732ce69a.jpeg" 
                 alt="Clinic vs Home" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Wellness Investment</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              At-Home LED vs Dermatology Clinics: The True Cost Breakdown
            </h3>
          </Link>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/is-near-infrared-safe" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://img.thesitebase.net/10677/10677322/themes/176872504642f0322d65.jpeg" 
                 alt="NIR Safety" 
                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Clinical Tech</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              Is Near-Infrared (NIR) Light Safe For Daily Facial Use?
            </h3>
          </Link>

          <Link href="/blog/led-mask-frequency" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://img.thesitebase.net/10677/10677322/themes/1770302958c850cb975e.png" 
                 alt="LED frequency" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-2 block">Optimization Guide</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              How Often Should You Really Be Using Your LED Face Mask?
            </h3>
          </Link>

          <Link href="/blog/amazon-led-mask-risks" className="group block">
            <div className="aspect-square bg-stone-200 mb-4 overflow-hidden relative">
               <img 
                 src="https://img.thesitebase.net/10677/10677322/themes/1768726655a4cf8cd691.png" 
                 alt="Amazon warning" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-50"
               />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-red-700 font-bold mb-2 block">Consumer Warning</span>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
              Why Buying An LED Mask On Amazon Could Damage Your Skin
            </h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
