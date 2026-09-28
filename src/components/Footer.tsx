import Link from 'next/link';
import { ShieldCheck, Newspaper, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-stone-800">
          
          {/* Brand & Editorial Mission */}
          <div className="md:col-span-5 space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-serif tracking-[0.16em] uppercase text-stone-100 font-bold block hover:opacity-90 transition-opacity"
            >
              The <span className="font-light italic text-stone-300">Global</span> Edit
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md font-sans">
              An independent clinical intelligence desk and luxury journal evaluating modern dermatological technology, acoustic oral care engineering, and evidence-based living.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck size={16} className="text-amber-400 shrink-0" />
              <span>100% Unsponsored Lab Testing &amp; Verified Consumer Trials</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs uppercase tracking-widest">
            
            {/* Editorial Departments */}
            <div>
              <h3 className="font-bold mb-4 text-[11px] tracking-widest text-stone-100">
                Departments
              </h3>
              <ul className="space-y-3 font-normal text-stone-400">
                <li>
                  <Link href="/category/beauty" className="hover:text-white transition-colors">Beauty Tech</Link>
                </li>
                <li>
                  <Link href="/category/wellness" className="hover:text-white transition-colors">Wellness</Link>
                </li>
                <li>
                  <Link href="/category/style" className="hover:text-white transition-colors">Style &amp; Living</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Newspaper size={12} />
                    <span>The Edit Archive</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2026 Buying Indices */}
            <div>
              <h3 className="font-bold mb-4 text-[11px] tracking-widest text-stone-100">
                2026 Benchmarks
              </h3>
              <ul className="space-y-3 font-normal text-stone-400">
                <li>
                  <Link href="/best-led-face-mask-uk-2026" className="hover:text-white transition-colors">
                    Best LED Mask UK
                  </Link>
                </li>
                <li>
                  <Link href="/best-electric-toothbrush-uk-2026" className="hover:text-white transition-colors">
                    Best Toothbrush UK
                  </Link>
                </li>
                <li>
                  <Link href="/best-lightweight-electric-toothbrush-uk-2026" className="hover:text-white transition-colors">
                    51g Sonic Benchmark
                  </Link>
                </li>
                <li>
                  <Link href="/best-battery-life-electric-toothbrush-uk-2026" className="hover:text-white transition-colors">
                    90-Day Battery Index
                  </Link>
                </li>
              </ul>
            </div>

            {/* Investigations */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-bold mb-4 text-[11px] tracking-widest text-stone-100">
                Exposes &amp; Audits
              </h3>
              <ul className="space-y-3 font-normal text-stone-400">
                <li>
                  <Link href="/silicone-led-mask-dangers" className="hover:text-white transition-colors">
                    Silicone Mask Dangers
                  </Link>
                </li>
                <li>
                  <Link href="/missing-colors-expose" className="hover:text-white transition-colors">
                    The 2-Colour Trap
                  </Link>
                </li>
                <li>
                  <Link href="/floating-head-warning" className="hover:text-white transition-colors">
                    Neck Neglect Epidemic
                  </Link>
                </li>
                <li>
                  <Link href="/miroooo-vs-oral-b-io6" className="hover:text-white transition-colors">
                    Miroooo vs Oral-B iO6
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar & Transparency Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-stone-400">
          <div>
            <p className="mb-2">
              © {new Date().getFullYear()} The Global Edit. All rights reserved. Registered UK Editorial Journal.
            </p>
            <p className="text-[11px] text-stone-400 max-w-4xl leading-relaxed">
              <strong className="text-stone-300 font-semibold">Editorial Transparency &amp; Disclosure:</strong> The Global Edit operates with complete editorial autonomy. We independently purchase all clinical test units at retail value and never accept payment for placement, ranking adjustments, or brand endorsement. When you purchase through our links, we may earn an affiliate commission which directly funds our independent laboratory testing protocols and clinical advisory board.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
