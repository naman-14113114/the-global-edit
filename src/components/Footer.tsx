import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white py-16 mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif tracking-widest uppercase mb-6 text-stone-200">The <span className="font-light italic">Global</span> Edit</h2>
        <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed mb-8">
          Curating the finest in beauty, wellness, and high-living. Our editorial team rigorously tests and investigates products to bring you the modern standards of luxury.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-stone-300 font-medium mb-12">
          <Link href="/blog" className="hover:text-white transition-colors">The Edit</Link>
          <Link href="/category/beauty" className="hover:text-white transition-colors">Beauty</Link>
          <Link href="/category/wellness" className="hover:text-white transition-colors">Wellness</Link>
          <Link href="/category/style" className="hover:text-white transition-colors">Style</Link>
        </div>
        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} The Global Edit. All rights reserved. 
          <br /><br />
          <span className="italic text-[10px]">Disclosure: We firmly believe in transparency. If you purchase through our links, we may earn a commission to support our editorial staff.</span>
        </p>
      </div>
    </footer>
  );
}
