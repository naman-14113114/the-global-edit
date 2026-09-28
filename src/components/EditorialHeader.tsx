'use client';

import Link from 'next/link';
import { Award, Menu, Newspaper, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EditorialHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`w-full border-b border-stone-200 bg-[#FAFAFA]/95 backdrop-blur-sm sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-stone-800 hover:text-stone-500 transition-colors md:hidden p-2 -ml-2"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

        {/* Left Side: Editorial Archive Link with Newspaper Icon */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-stone-700 hover:text-stone-950 transition-colors text-xs font-semibold uppercase tracking-widest"
            aria-label="Open The Edit article archive"
            title="The Edit Archive"
          >
            <Newspaper size={18} strokeWidth={1.6} className="text-stone-500 group-hover:text-stone-900 transition-colors" />
            <span>The Edit</span>
          </Link>
        </div>

        {/* Center: Brand Identity */}
        <Link 
          href="/" 
          className="text-xl sm:text-2xl md:text-3xl tracking-[0.16em] font-serif font-black uppercase text-stone-900 mx-auto md:mx-0 text-center whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          The <span className="font-light italic">Global</span> Edit
        </Link>
        
        {/* Right Side: Editorial Categories */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-stone-600 font-medium">
          <Link href="/category/style" className="hover:text-stone-900 transition-colors font-semibold">Style</Link>
          <Link href="/category/beauty" className="hover:text-stone-900 transition-colors font-semibold">Beauty</Link>
          <Link href="/category/wellness" className="hover:text-stone-900 transition-colors font-semibold">Wellness</Link>
        </nav>

        {/* Mobile Right Spacer */}
        <div className="w-8 md:hidden flex justify-end">
          <Link
            href="/blog"
            className="text-stone-700 hover:text-stone-900"
            aria-label="Article Archive"
          >
            <Newspaper size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center gap-5 py-8 border-t border-stone-200 bg-[#FAFAFA] absolute w-full shadow-xl">
          <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Editorial Departments</div>
          <Link href="/category/style" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-700 hover:text-stone-950 font-semibold">Style</Link>
          <Link href="/category/beauty" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-700 hover:text-stone-950 font-semibold">Beauty</Link>
          <Link href="/category/wellness" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-700 hover:text-stone-950 font-semibold">Wellness</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-700 hover:text-stone-950 font-semibold inline-flex items-center gap-2">
            <Newspaper size={16} />
            The Edit (Archive)
          </Link>

          <div className="w-48 h-px bg-stone-200 my-2"></div>
          
          <div className="flex flex-col gap-3 w-full px-8 max-w-sm">
            <Link href="/best-led-face-mask-uk-2026" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-5 py-3 text-xs uppercase tracking-widest font-bold text-center rounded-[2px]">
              <Award size={14} strokeWidth={1.8} />
              2026 LED Mask Ranking
            </Link>
            <Link href="/best-electric-toothbrush-uk-2026" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 bg-amber-800 text-white px-5 py-3 text-xs uppercase tracking-widest font-bold text-center rounded-[2px]">
              <Award size={14} strokeWidth={1.8} />
              2026 Toothbrush Ranking
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
