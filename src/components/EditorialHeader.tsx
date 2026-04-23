'use client';

import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
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
        
        {/* Mobile Hamburger Toggle (Left on mobile) */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-stone-800 hover:text-stone-500 transition-colors md:hidden"
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>

        {/* Desktop Hamburger (Just visual spacing/search alternative in this design) */}
        <button className="text-stone-800 hover:text-stone-500 transition-colors hidden md:block">
          <Search size={22} strokeWidth={1.5} />
        </button>

        <Link href="/" className="text-3xl tracking-widest font-serif font-black uppercase text-stone-900 mx-auto md:mx-0 text-center">
          The <span className="font-light italic">Global</span> Edit
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-stone-600 font-medium">
          <Link href="/category/style" className="hover:text-stone-900 transition-colors">Style</Link>
          <Link href="/category/beauty" className="hover:text-stone-900 transition-colors">Beauty</Link>
          <Link href="/category/wellness" className="hover:text-stone-900 transition-colors">Wellness</Link>
        </div>

        {/* Empty div for flex balance on mobile to center logo */}
        <div className="w-6 md:hidden"></div>
      </div>

      {/* Conditionally rendered Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center gap-6 py-6 border-t border-stone-100 bg-white absolute w-full shadow-lg">
          <Link href="/category/style" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-600 font-medium">Style</Link>
          <Link href="/category/beauty" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-600 font-medium">Beauty</Link>
          <Link href="/category/wellness" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest text-stone-600 font-medium">Wellness</Link>
        </div>
      )}
    </header>
  );
}
