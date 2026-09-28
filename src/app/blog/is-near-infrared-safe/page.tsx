export const metadata = {
  title: "Is Near-Infrared (NIR) Light Safe For Daily Use? | The Global Edit",
  description: "Understanding the difference between visible red light and invisible near-infrared, and how it safely restructures your skin matrix.",
};

export default function NIRSafetyBlog() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      <div className="max-w-3xl mx-auto px-4 md:px-0 pt-16 pb-24">
        <div className="text-center mb-10 text-sm border-b border-stone-200 pb-10">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4 block">Clinical Tech Explanation</span>
          <h1 className="text-5xl font-serif text-stone-900 leading-tight mb-6">
            Is Near-Infrared (NIR) Light Actually Safe For Daily Facial Use?
          </h1>
          <p className="text-stone-500 italic font-serif text-lg mb-8">
            It is invisible to the human eye, but it is doing 80% of the heavy lifting.
          </p>
        </div>

        <div className="w-full aspect-[16/9] bg-stone-200 mb-12">
          <img 
            src="/images/editorial/nir-safety.jpg" 
            alt="Safety of NIR" 
            className="w-full h-full object-cover saturate-50 object-top"
          />
        </div>

        <div className="prose prose-stone prose-lg max-w-none text-stone-700">
           <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
             When you put on a premium LED mask, you see a brilliant, glowing red light. What you don't see is the Near-Infrared (NIR) energy—a wavelength typically around 830nm to 850nm—that is completely invisible to the human eye. 
           </p>

           <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">The Power of Invisibility</h2>
           <p className="mb-6">
             Because humans cannot see NIR light, many cheap knockoff LED masks simply leave it out to save money, assuming the customer won't notice. This is a tragedy, because NIR is the true engine of anti-aging therapy.
           </p>
           <p className="mb-6">
             While visible red light (633nm) is excellent for surface-level inflammation and evening out skin tone, NIR penetrates significantly deeper. It bypasses the epidermis entirely, reaching the deep dermis and even underlying muscle tissue to stimulate fibroblast restructuring. 
           </p>

           <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">Is It Safe?</h2>
           <p className="mb-6">
             Unlike Ultraviolet (UV) light—which damages DNA and causes cancer—NIR is entirely non-ionizing. It is not only safe for daily 10 to 20-minute sessions, but it is currently used in elite athletic rehabilitation facilities to accelerate wound healing and tissue recovery.
           </p>

           <div className="my-12 p-8 bg-stone-100 border-l-4 border-stone-900">
             <h4 className="font-serif text-xl mb-3 text-stone-900">Identifying Fraudulent Masks</h4>
             <p className="text-stone-700 text-sm mb-4">You cannot trust a mask based on its visual glow. You must look for clinical specifications guaranteeing 830nm output from verified diode suppliers.</p>
             <p className="text-sm font-bold">
               <a href="/best-led-face-mask-uk-2026" className="hover:text-stone-500 underline underline-offset-4">See our rigorous clinical testing of the top 2026 masks →</a>
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
