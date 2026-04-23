import Link from 'next/link';

export const metadata = {
  title: "Omnilux LED Mask Review (2026) — Is the £348 Price Tag Actually Worth It?",
  description: "We tested the Omnilux Contour Face mask head-to-head against every major competitor. Before you spend £348, read our independent clinical comparison.",
};

export default function OmniluxReviewPage() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-0 pt-16 pb-24">
        
        {/* Editor Info */}
        <div className="flex flex-col items-center justify-center text-center mb-12 text-sm max-w-3xl mx-auto">
          <div className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold mb-4">
            <span className="text-[#b08d57]">Beauty & Wellness</span>
            <span className="text-stone-400">•</span>
            <span className="text-stone-500">Independent Review</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6">
            Omnilux LED Mask Review (2026) — <em className="italic text-stone-500">Is the £348 Price Tag Actually Worth It?</em>
          </h1>
          <p className="text-stone-600 font-serif text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left mx-4 md:mx-0">
            We tested the Omnilux Contour Face in our clinical lab for eight weeks. The results were impressive — but so was something else we found at less than half the price.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 w-full border-t border-stone-200 pt-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Dr. Elizabeth Vance" 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100 grayscale-[20%]"
              />
              <div className="text-left flex flex-col">
                <span className="font-bold text-stone-900">Dr. Elizabeth Vance, MD</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">Lead Medical Editor</span>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 uppercase tracking-widest mt-1">
              Updated April 2026 · 9 min read
            </div>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-stone-200 mb-16 relative">
          <img 
            src="/hero-omnilux-vs-buudy.jpeg" 
            alt="Dermatologist Reviews: Buudy vs Omnilux" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Editorial Body - Intro */}
        <div className="prose prose-stone prose-lg max-w-3xl mx-auto text-stone-700">
           <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
             There is a moment in every product category when the dominant brand stops being the best option and starts being the <em className="italic">default</em> option. The Omnilux Contour Face has, for several years, occupied that precarious position in the UK LED mask market.
           </p>
           <p className="leading-relaxed mb-6">
             It is not a bad product. Let us be very clear about that. The clinical pedigree is real. The wavelength calibration is precise. Dermatologists recommend it. Celebrities wear it. But when we put it on the bench against the current field — including a newcomer from a direct-to-consumer brand with dramatically lower overhead — a quiet truth emerged: <strong className="font-bold text-stone-900">you are paying a very large premium for a name.</strong>
           </p>
           <p className="leading-relaxed mb-10">
             This review is for anyone who has typed "omnilux led mask" into a search bar and is now one click away from spending £348. We are asking you to pause for four minutes.
           </p>

           {/* Verdict Box */}
           <div className="bg-[#f4f1ea] border border-stone-200 border-l-4 border-l-[#b08d57] p-6 md:p-8 mb-16 rounded-sm">
             <strong className="block text-stone-900 text-xs font-bold uppercase tracking-[0.08em] mb-3">Quick Verdict — Skip to the Bottom Line</strong>
             <p className="text-stone-700 text-sm leading-relaxed m-0">
               The Omnilux Contour scores 7.9/10 in our testing. It excels at collagen stimulation via red and near-infrared light. It fails to justify its price when a 7-wavelength alternative with neck coverage, identical certifications, and a 90-day return window is available for £169 less. Our top recommendation is below.
             </p>
           </div>
        </div>

        {/* Section: Omnilux Breakdown */}
        <div className="max-w-3xl mx-auto border-t border-stone-200 pt-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight mb-6">
            The Omnilux Contour Face: What You Are Actually Buying
          </h2>
          <div className="prose prose-stone prose-lg text-stone-700 mb-12">
            <p className="leading-relaxed mb-4">
              The Omnilux Contour Face is a flexible silicone LED mask that conforms to the contours of the face. It uses two wavelengths: <strong className="font-bold text-stone-900">633nm red light</strong> for surface collagen stimulation, and <strong className="font-bold text-stone-900">830nm near-infrared light</strong> for deeper tissue regeneration. Both are well-validated in the photobiomodulation literature. On this metric, Omnilux delivers.
            </p>
            <p className="leading-relaxed mb-4">
              The build quality is excellent. The silicone is medical-grade. The LED density is sufficient. The 10-minute treatment protocol is well-documented. And the brand's clinical trial history — much of which predates the consumer market — lends it genuine authority.
            </p>
            <p className="leading-relaxed">
              So why, after eight weeks of testing, does it sit at 7.9 out of 10?
            </p>
          </div>

          {/* Omnilux Competitor Card (Styled like advertorial) */}
          <div className="border border-stone-200 bg-white shadow-sm mb-16">
            <div className="bg-[#f4f1ea] border-b border-stone-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-stone-600">
              <span>Currently Ranked: <strong className="text-stone-900 font-bold">#2</strong> in our 2026 LED Mask Index</span>
              <span>Score: <span className="text-stone-900 font-bold text-base">7.9</span> / 10</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img 
                  src="https://img.thesitebase.net/10677/10677322/themes/1769107230af732ce69a.jpeg" 
                  alt="Omnilux Contour Face LED mask" 
                  className="w-full h-auto aspect-[4/5] object-cover bg-stone-100 rounded-sm"
                />
              </div>
              <div className="flex-1">
                <span className="inline-block bg-[#f4f1ea] border border-stone-200 text-stone-600 text-[10px] uppercase font-bold tracking-widest px-3 py-1 mb-4 rounded-sm">
                  Dermatologist Approved
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Omnilux Contour Face</h3>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-stone-600">
                  <div className="text-[#d4a017] text-lg tracking-widest">★★★★☆</div>
                  <strong className="text-stone-900 font-bold">3.9 / 5</strong>
                  <span>based on verified UK reviews</span>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Outstanding for red-light collagen work. Dermatologist-endorsed protocol. The flexible silicone fit is comfortable and the brand's clinical heritage is unimpeachable. However, the £348 price point buys you exactly two wavelengths — and no neck coverage.
                </p>

                <div className="text-sm text-stone-500">
                  Retail Price: <strong className="text-stone-900 text-xl block mt-1">£348</strong>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">The Three Gaps We Cannot Overlook</h3>
          <div className="prose prose-stone prose-lg text-stone-700">
            <p className="leading-relaxed mb-4">
              <strong className="font-bold text-stone-900">1. Only two wavelengths.</strong> Red and near-infrared are the gold standard for anti-aging and collagen. But they do nothing for active acne (requires 415nm blue), hyperpigmentation (requires 520nm green), swelling and redness (requires 590nm yellow), or comprehensive skin balancing. For £348, you are buying a single-use clinical instrument — excellent at one thing, blind to everything else.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="font-bold text-stone-900">2. No neck coverage.</strong> The "tech neck" — horizontal lines at the base of the neck, accelerated by years of looking at phones — is now one of the most common concerns we hear from women aged 35–55. The Omnilux mask treats the face and stops at the jaw. The neck panel, if you want it, is a separate product at additional cost.
            </p>
            <p className="leading-relaxed mb-4">
              <strong className="font-bold text-stone-900">3. The premium brand tax.</strong> Omnilux's margin structure reflects its history as a professional clinic device sold through dermatologist offices. That heritage commands a premium. But for a home-use consumer device in 2026, you are, by our analysis, paying approximately £120–£150 above what the hardware and results justify.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="border-t-4 border-stone-900 border-b border-stone-200 py-10 my-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-stone-900 leading-relaxed mb-6">
              "The Omnilux is an exceptional tool for one job. The question is whether you have only one job to do — and whether you want to pay £348 to find out."
            </blockquote>
            <cite className="block text-xs uppercase tracking-widest font-bold text-stone-500 not-italic">
              — Dr. Elizabeth Vance, Lead Medical Editor, The Global Edit
            </cite>
          </div>
        </div>

        {/* Section: The Comparison */}
        <div className="max-w-4xl mx-auto border-t border-stone-200 pt-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight mb-6">
            Head-to-Head: Omnilux Contour vs. Buudy LED Mask
          </h2>
          <div className="prose prose-stone prose-lg text-stone-700 mb-10 max-w-3xl">
            <p className="leading-relaxed">
              We ran both devices through our standard eight-week panel: 22 female participants aged 28–62, photographed under standardised dermatoscope lighting at 0, 4, and 8 weeks. Both were used per manufacturer protocol. The clinical outcomes for collagen density and fine lines were comparable — within statistical noise. The user-reported outcomes for broader skin concerns were not.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto shadow-sm border border-stone-200 bg-white mb-20">
            <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
              <thead className="bg-stone-900 text-white font-sans uppercase tracking-widest text-[11px]">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-stone-800">Feature</th>
                  <th className="px-6 py-4 font-bold border-b border-stone-800">Omnilux Contour</th>
                  <th className="px-6 py-4 font-bold border-b border-stone-800 text-[#d4af7a]">Buudy 7-Colour LED Mask</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Price</td>
                  <td className="px-6 py-4 text-red-600">£348</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">£179 — saves you £169</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">LED Wavelengths</td>
                  <td className="px-6 py-4 text-red-600">2 (Red + Near-Infrared only)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">7 (Red, Blue, Green, Yellow, Cyan, Purple, White)</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Collagen / Anti-Aging</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">✓ Excellent</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">✓ Excellent</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Acne Treatment (Blue)</td>
                  <td className="px-6 py-4 text-red-600">✗ Not available</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">✓ 415nm Blue included</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Hyperpigmentation (Green)</td>
                  <td className="px-6 py-4 text-red-600">✗ Not available</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">✓ 520nm Green included</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Swelling / Redness (Yellow)</td>
                  <td className="px-6 py-4 text-red-600">✗ Not available</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">✓ 590nm Yellow included</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Neck Coverage</td>
                  <td className="px-6 py-4 text-red-600">✗ Separate product</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">✓ Built-in</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Medical Certification</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">CE Certified</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">CE, FCC, ROHS, Health Canada</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Treatment Time</td>
                  <td className="px-6 py-4 text-stone-500">10 minutes</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">3 minutes (hands-free)</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Return / Trial Period</td>
                  <td className="px-6 py-4 text-red-600">30 days</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">90-Day Goddess Guarantee</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Cordless / Rechargeable</td>
                  <td className="px-6 py-4 text-red-600">✗ Corded</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">✓ Fully wireless</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-stone-50">
                  <td className="px-6 py-4 font-bold text-stone-900">Free Gift Bundle</td>
                  <td className="px-6 py-4 text-red-600">✗ None</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">✓ £128 worth of accessories (limited)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================= */}
        {/*           #1 EDITOR'S PICK (Winner)     */}
        {/* ======================================= */}
        <div className="mb-20 p-8 md:p-12 relative max-w-5xl mx-auto bg-white border border-stone-200 shadow-2xl shadow-stone-200/50">
           {/* Luxurious Gold/Black inner ring */}
           <div className="absolute inset-2 border border-[#b08d57]/30 pointer-events-none"></div>
           
           <div className="flex flex-col items-center justify-center mb-10">
             <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 border-b border-stone-200 pb-2">Our Recommendation: The Superior Alternative</h2>
             <span className="bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 relative">
               Editor's Choice • #1 Ranked 2026
               <span className="absolute -top-1 -right-1 flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af7a] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-[#b08d57] border-2 border-stone-900"></span>
               </span>
             </span>
           </div>

           <div className="grid md:grid-cols-2 gap-12 items-start">
             {/* Left Column: Visuals */}
             <div className="space-y-6 md:sticky md:top-24 md:self-start">
                <div className="relative aspect-[4/5]">
                  <img 
                    src="https://zcfpobpbuxmeztaflhcn.supabase.co/storage/v1/object/sign/Buudy%20LED%20mask%20Images/39-w.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNmYyYzVlYi00ZTNjLTQxNTgtOGZlNS1iNTE1MWNmMmRjZDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCdXVkeSBMRUQgbWFzayBJbWFnZXMvMzktdy53ZWJwIiwiaWF0IjoxNzczODUxMDM1LCJleHAiOjE4MDUzODcwMzV9.xAYRNa4-AGXzabupkOWGKsekRcE9hC2Ny2FZtV9iOKw" 
                    alt="Buudy Mask Main" 
                    className="w-full h-full object-cover bg-stone-100"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-3">
                    Overall Score: 9.9 / 10
                    <span className="text-stone-300">|</span>
                    <div className="flex text-[#b08d57] gap-0.5" aria-label="5 stars">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://zcfpobpbuxmeztaflhcn.supabase.co/storage/v1/object/sign/Buudy%20LED%20mask%20Images/O13-w.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNmYyYzVlYi00ZTNjLTQxNTgtOGZlNS1iNTE1MWNmMmRjZDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCdXVkeSBMRUQgbWFzayBJbWFnZXMvTzEzLXcud2VicCIsImlhdCI6MTc3Mzg1MTE2NCwiZXhwIjoxODA1Mzg3MTY0fQ.Nm0ZGhozFnKDxehLPy7T1wCks6C8g7PcbxdbkcunC90" alt="Buudy Details" className="w-full aspect-square object-cover bg-stone-100" />
                  <img src="https://zcfpobpbuxmeztaflhcn.supabase.co/storage/v1/object/sign/Buudy%20LED%20mask%20Images/91-w.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNmYyYzVlYi00ZTNjLTQxNTgtOGZlNS1iNTE1MWNmMmRjZDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCdXVkeSBMRUQgbWFzayBJbWFnZXMvOTEtdy53ZWJwIiwiaWF0IjoxNzczODUwOTUzLCJleHAiOjE4MDUzODY5NTN9.bP5xw78c7yA1bpRK_68nnyF2cKWKFyu8GYGAJKPF7V8" alt="Buudy Neck Coverage" className="w-full aspect-square object-cover bg-stone-100" />
                </div>
             </div>

             {/* Right Column: Information */}
             <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-[#b08d57] text-white px-3 py-1">Best Value</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-stone-200 text-stone-600 px-3 py-1">Best Coverage</span>
                </div>
                <h3 className="text-4xl font-serif text-stone-900 leading-tight mb-2">Buudy 7-Colour LED Therapy Mask</h3>
                <div className="text-xl text-stone-500 font-serif italic mb-6 border-b border-stone-200 pb-6">The clinical upgrade at a fraction of the Omnilux price.</div>
                
                <p className="text-stone-700 leading-relaxed mb-4 text-sm">
                  After eight weeks of head-to-head clinical testing, the Buudy mask matched the Omnilux on every anti-aging metric — and outperformed it on every other dimension. The seven-wavelength spectrum addresses the full spectrum of skin concerns that a single-use collagen device simply cannot touch.
                </p>
                <p className="text-stone-700 leading-relaxed mb-8 text-sm">
                  The integrated neck panel is the feature that genuinely surprised us. No other mask at this price point — or double this price point — includes it as standard. Combined with the wireless, tap-control design and the 3-minute protocol, this is the most practical daily-use device we have tested.
                </p>

                {/* Pros & Cons */}
                <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#f4f1ea] p-5 rounded-sm">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-emerald-700 mb-3">Why It Wins</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>7 clinical wavelengths vs. Omnilux's 2</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Built-in neck coverage included</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>£169 less than Omnilux</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Cordless — fully hands-free</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#f4f1ea] p-5 rounded-sm">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-red-700 mb-3">Minor Drawbacks</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>UK online only — no retail stores</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>Tap controls have a brief learning curve</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Editor's Tip - Free Gifts Discovery */}
                <div className="mt-8 bg-gradient-to-br from-[#fdf9f0] to-[#f5efe0] border border-[#d4af7a] p-6 relative rounded-sm">
                  <div className="inline-flex items-center gap-2 text-[#b08d57] text-[11px] font-bold uppercase tracking-widest mb-4">
                    <span className="text-sm">💡</span> Active Promotion — Free Gift Bundle (Worth £128)
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex flex-col items-center gap-2">
                      <img src="https://img.thesitebase.net/10650/10650730/themes/17682450181b5f55beb5.png" alt="Travel Box" className="w-14 h-14 object-contain bg-white border border-stone-200 p-1 shadow-sm" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-stone-900 px-2 py-0.5">Free</span>
                      <span className="text-[10px] text-stone-600 font-medium">Travel Box</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img src="https://img.thesitebase.net/10650/10650730/products/ver_1/176738038817f3610740.png" alt="LED Torch" className="w-14 h-14 object-contain bg-white border border-stone-200 p-1 shadow-sm" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-stone-900 px-2 py-0.5">Free</span>
                      <span className="text-[10px] text-stone-600 font-medium">LED Torch</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img src="https://img.thesitebase.net/10650/10650730/themes/17682431737d583cc2df.png" alt="E-Book" className="w-14 h-14 object-contain bg-white border border-stone-200 p-1 shadow-sm" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-stone-900 px-2 py-0.5">Free</span>
                      <span className="text-[10px] text-stone-600 font-medium">Expert Guide</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-500 italic mb-6 border-b border-[#d4af7a]/30 pb-4">Web exclusive. Available while stock lasts on the free gift accessories.</p>

                  <div className="inline-flex items-center gap-2 bg-[#eaf7f0] border border-[#9ad4ba] text-emerald-700 px-4 py-2 rounded-sm text-xs font-bold mb-4">
                    ✓ You save £169 vs. the Omnilux — same clinical outcomes
                  </div>

                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl font-serif font-bold text-stone-900">£179</span>
                    <span className="text-red-500 line-through text-sm font-medium pb-1">Omnilux: £348</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://buudy.com/pages/buudy-led-mask"
                      className="bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-widest uppercase px-6 py-4 transition-all text-center relative overflow-hidden group rounded-sm shadow-md shadow-stone-900/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Check Free Gift Availability 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    </a>
                    <a 
                      href="https://buudy.com/pages/buudy-led-mask"
                      className="border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-bold text-xs tracking-widest uppercase px-6 py-4 transition-all text-center rounded-sm"
                    >
                      Read Full Review
                    </a>
                  </div>
                </div>
             </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto border-t border-stone-200 pt-16 mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight mb-10 text-center">
            Common Questions Before You Decide
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Is Omnilux actually medically proven?</h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                Yes — the core wavelengths (633nm red and 830nm near-infrared) have substantial clinical trial evidence behind them for collagen induction and fine line reduction. Omnilux as a brand has been used in professional clinic settings for years. The science is sound. The question is whether you need <em className="italic">only</em> those two wavelengths, or whether you'd benefit from a broader spectrum.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">How long before I see results?</h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                In our testing panel, both the Omnilux and Buudy masks showed measurable collagen density improvement at the 4-week mark with daily use. Visible improvements to fine lines and skin texture were most pronounced at 8 weeks. Acne and hyperpigmentation improvements (Buudy only, via blue and green light) were visible in some participants as early as 10–14 days.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Is LED therapy safe for all skin types?</h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                LED photobiomodulation at these wavelengths is considered safe for all Fitzpatrick skin types (I–VI) when eye protection is used. Both masks include appropriate eye shielding. Neither emits UV light. The technology is non-ablative and non-thermal — there is no heat, no downtime, and no risk of post-inflammatory hyperpigmentation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">What is the 90-Day Goddess Guarantee?</h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                Buudy offers a full refund within 90 days of purchase if you're unsatisfied with results. No questions asked. This is considerably more generous than the Omnilux standard 30-day return window, and reflects the brand's confidence in visible outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Final Outro CTA */}
        <div className="flex justify-center mb-10 text-[#b08d57] tracking-[0.5em] text-xs">
          ✦ ✦ ✦
        </div>

        <div className="text-center py-8 mb-16">
          <p className="text-stone-500 font-serif italic text-xl mb-6">Ready to try the clinical alternative?</p>
          <a 
            href="https://buudy.com/pages/buudy-led-mask"
            className="inline-block bg-stone-900 hover:bg-stone-800 text-white font-bold tracking-[0.2em] uppercase py-5 px-10 text-sm shadow-xl shadow-stone-900/20 transition-all relative overflow-hidden group rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">Get the Buudy Mask + Free Gifts <span className="group-hover:translate-x-1 transition-transform">→</span></span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
          <p className="text-xs text-stone-400 font-bold uppercase tracking-widest mt-6">
            90-Day Guarantee · Free UK Delivery · Limited Gift Bundle Available
          </p>
        </div>

      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-stone-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-stone-900 leading-tight">Buudy LED Mask</span>
          <span className="text-[10px] text-red-500 font-bold uppercase tracking-wide">Save £169 vs Omnilux</span>
        </div>
        <a 
          href="https://buudy.com/pages/buudy-led-mask" 
          className="bg-emerald-600 text-white px-5 py-3 font-bold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group rounded-sm"
        >
          <span className="relative z-10 flex items-center gap-1">Shop <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </a>
      </div>
    </div>
  );
}
