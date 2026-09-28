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
      className={`w-full border-b border-stone-200 bg-[#FAFAFA] sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-stone-800 hover:text-stone-500 transition-colors md:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>

        <Link
          href="/blog"
          className="text-stone-800 hover:text-stone-500 transition-colors hidden md:inline-flex"
          aria-label="Open The Edit article archive"
          title="The Edit"
        >
          <Newspaper size={22} strokeWidth={1.5} />
        </Link>

        <Link href="/" className="text-xl sm:text-2xl md:text-3xl tracking-[0.16em] font-serif font-black uppercase text-stone-900 mx-auto md:mx-0 text-center whitespace-nowrap">
          The <span className="font-light italic">Global</span> Edit
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-stone-600 font-medium">
          <Link href="/category/style" className="hover:text-stone-900 transition-colors">Style</Link>
          <Link href="/category/beauty" className="hover:text-stone-900 transition-colors">Beauty</Link>
          <Link href="/category/wellness" className="hover:text-stone-900 transition-colors">Wellness</Link>
          <Link
            href="/best-led-face-mask-uk-2026"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-3 hover:bg-stone-700 transition-colors"
          >
            <Award size={14} strokeWidth={1.8} />
            Top Pick
          </Link>
        </div>

        <div className="w-6 md:hidden"></div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center gap-6 py-6 border-t border-stone-100 bg-white absolute w-full shadow-lg">
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-600 font-medium">The Edit</Link>
          <Link href="/category/style" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-600 font-medium">Style</Link>
          <Link href="/category/beauty" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-600 font-medium">Beauty</Link>
          <Link href="/category/wellness" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-600 font-medium">Wellness</Link>
          <Link href="/best-led-face-mask-uk-2026" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 text-xs uppercase tracking-widest font-bold">
            <Award size={14} strokeWidth={1.8} />
            Top LED Mask
          </Link>
        </div>
      )}
    </header>
  );
}
