export const metadata = {
  title: "Why Red Light Therapy Fails For Acne (And What Actually Works) | The Global Edit",
  description: "Red light stimulates collagen, but it cannot kill acne-causing bacteria. For blemishes, you need specific nanometers of Blue and Cyan light.",
};

export default function BlueLightAcne() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      <div className="max-w-3xl mx-auto px-4 md:px-0 pt-16 pb-24">
        <div className="text-center mb-10 text-sm border-b border-stone-200 pb-10">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4 block">Dermatology Science</span>
          <h1 className="text-5xl font-serif text-stone-900 leading-tight mb-6">
            Why Red Light Therapy Often Fails To Cure Clinical Acne
          </h1>
          <p className="text-stone-500 italic font-serif text-lg mb-8">
            Stop trying to treat bacterial issues with anti-aging solutions.
          </p>
        </div>

        <div className="w-full aspect-[16/9] bg-stone-200 mb-12">
          <img 
            src="/images/editorial/acne-skincare.jpg" 
            alt="Skin treatment" 
            className="w-full h-full object-cover saturate-50"
          />
        </div>

        <div className="prose prose-stone prose-lg max-w-none text-stone-700">
           <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
             There is a dangerous misconception currently trending on social media: that any LED mask will magically cure severe acne. People are purchasing £400 masks, using them diligently every night, and waking up frustrated when their breakouts remain inflamed.
           </p>

           <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">The Wavelength Problem</h2>
           <p className="mb-6">
             The vast majority of premium LED masks (including the famous Omnilux and CurrentBody models) only emit Red light (633nm) and Near-Infrared light (830nm). These wavelengths are incredibly effective at stimulating cellular ATP production, reducing inflammation, and boosting collagen. They are unparalleled for anti-aging.
           </p>
           <p className="mb-6">
             However, red light does absolutely nothing to neutralize *Cutibacterium acnes*, the bacteria responsible for acne vulgaris.
           </p>

           <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">The Blue Light Solution (415nm)</h2>
           <p className="mb-6">
             To treat active acne, clinical literature dictates the use of Blue light (often paired with Cyan for soothing). Blue light at 415nm penetrates the pores and produces powerful oxygen radicals that destroy the acne membrane without damaging the surrounding tissue. 
           </p>

           <div className="my-12 p-8 bg-stone-100 border-l-4 border-stone-900">
             <h4 className="font-serif text-xl mb-3 text-stone-900">How To Get Both</h4>
             <p className="text-stone-700 text-sm mb-4">You shouldn't have to buy two separate £300 masks to treat aging and acne. A new generation of clinical masks offers 7 distinct wavelengths (including pure Blue and Cyan) in a single device.</p>
             <p className="text-sm font-bold">
               <a href="/best-led-face-mask-uk-2026" className="hover:text-stone-500 underline underline-offset-4">Discover the 7-colour mask dominating 2026 →</a>
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
