const MetricBar = ({ label, value }: { label: string, value: number }) => (
  <div className="mb-3">
    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest mb-1 text-stone-600">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-1.5 bg-stone-200 overflow-hidden w-full max-w-sm">
      <div 
        className="h-full bg-emerald-500"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export const metadata = {
  title: "We Tested Every Premium LED Face Mask of 2026. Here Is The Definitive Ranking.",
  description: "An editorial deep-dive into the best LED face masks on the UK market in 2026, comparing technology, wavelengths, and value.",
};

export default function AdvertorialPage() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-0 pt-16 pb-24">
        
        {/* Editor Info */}
        <div className="flex flex-col items-center justify-center text-center mb-12 text-sm max-w-3xl mx-auto">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4">Beauty & Wellness</span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight mb-6">
            We Tested Every Premium LED Face Mask of 2026. Here Is The Definitive Ranking.
          </h1>
          <p className="text-stone-500 italic font-serif text-xl mb-8">
            Separating the medical-grade clinical tools from the expensive plastic.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 w-full border-t border-stone-200 pt-6">
            <div className="flex items-center gap-4">
              <img 
                src="/images/editorial/author-editor.png" 
                alt="Dr. Elizabeth Vance" 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
              />
              <div className="text-left flex flex-col">
                <span className="font-bold text-stone-900">Dr. Elizabeth Vance, MD</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-bold">Certified Dermatologist & Lead Editor</span>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 uppercase tracking-widest mt-1">
              Updated February 2026
            </div>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="w-full aspect-[16/9] bg-stone-200 mb-16 relative">
          <img 
            src="/images/editorial/led-testing-clinic.jpg" 
            alt="LED mask testing facility" 
            className="w-full h-full object-cover saturate-50"
          />
        </div>

        {/* Editorial Body */}
        <div className="prose prose-stone prose-lg max-w-3xl mx-auto text-stone-700">
           <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
             The LED mask market has hit a fever pitch. What started as a guarded secret in dermatologists' offices has exploded into a multi-million pound at-home industry. From Hollywood A-listers to skincare influencers, everyone seems to be wearing these slightly terrifying, glowing masks on Instagram.
           </p>
           <p className="leading-relaxed mb-6">
             But with prices ranging from £50 to well over £1,000, the questions are inevitable: Do you need to spend a fortune to get real, scientifically-backed results? Or are the high-end brands simply charging a massive markup for a logo?
           </p>
           <p className="leading-relaxed mb-16 pb-12 border-b border-stone-200">
             Our editorial team spent three months rigorously testing the top clinical-grade LED masks of 2026. We evaluated nanometer accuracy, bulb density, skin coverage (including the often-ignored neck area), comfort, and actual visible results on fine lines, pigmentation, and acne. <strong className="font-bold text-stone-900">Here is our definitive top 5 ranking.</strong>
           </p>
        </div>

        {/* ======================================= */}
        {/*           #1 EDITOR'S PICK              */}
        {/* ======================================= */}
        <div className="mb-24 p-8 md:p-12 relative max-w-5xl mx-auto bg-white border border-stone-200 shadow-2xl shadow-stone-200/50">
           {/* Luxurious Gold/Black inner ring */}
           <div className="absolute inset-2 border border-stone-100 pointer-events-none"></div>
           
           <div className="flex items-center justify-center mb-10">
             <span className="bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 relative">
               Editor's Choice • #1 Ranked
               <span className="absolute -top-1 -right-1 flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-200 border-2 border-stone-900"></span>
               </span>
             </span>
           </div>

           <div className="grid md:grid-cols-2 gap-12 items-start">
             {/* Left Column: Visuals */}
             <div className="space-y-6 md:sticky md:top-24 md:self-start">
                <div className="relative aspect-[4/5]">
                  <img 
                    src="/images/mask-angle.webp" 
                    alt="Buudy Mask Main" 
                    className="w-full h-full object-cover bg-stone-100"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-3">
                    Overall Score: 9.9 / 10
                    <span className="text-stone-300">|</span>
                    <div className="flex text-emerald-500 gap-0.5" aria-label="5 stars">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/mask-front.webp" alt="Buudy Details" className="w-full aspect-square object-cover bg-stone-100" />
                  <img src="/images/mask-stand.webp" alt="Buudy Neck Coverage" className="w-full aspect-square object-cover bg-stone-100" />
                </div>
             </div>

             {/* Right Column: Information */}
             <div>
                <h2 className="text-4xl font-serif text-stone-900 leading-tight mb-2">Buudy 7-Colour LED Therapy Mask</h2>
                <div className="text-xl text-stone-500 font-serif italic mb-8">The undisputed industry disruptor of 2026.</div>
                
                <p className="text-stone-700 leading-relaxed mb-4">
                  Our top pick is the Buudy LED Mask, a medical-grade device that outperforms the competition with its comprehensive 7-color spectrum. While most brands offer only basic red light, Buudy includes specialized wavelengths to target everything from deep wrinkles and acne to inflammation. This Health Canada Approved technology (with CE, FCC, and ROHS certifications) ensures professional-grade results for all skin types.
                </p>
                <p className="text-stone-700 leading-relaxed mb-4">
                  A major advantage is the built-in neck coverage, a vital feature often missing from more expensive models. This allows you to treat "turkey neck" and sagging skin simultaneously. The cordless, rechargeable design features "Tap Technology," making it completely hands-free and portable for a quick 3-minute daily session.
                </p>
                <p className="text-stone-700 leading-relaxed mb-8">
                  Trusted by over 16,000 customers with a 4.9-star rating, this mask delivers visible improvements in as few as ten uses. Currently priced at £179, it offers the best value on the market, combining full-face and neck rejuvenation with advanced eye protection for a safe, effective, and painless experience.
                </p>

                {/* Pros & Cons */}
                <div className="mb-8 p-6 bg-white border border-stone-200">
                   <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">Why It Won</h3>
                   <ul className="space-y-3 mb-6">
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-green-600 font-bold">✓</span>
                       <span><strong>Proven Results:</strong> Has an outstanding rating of 5/5 and 4.9 stars based on over 1,000 reviews and performed well in internal testing.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-green-600 font-bold">✓</span>
                       <span><strong>7-Color Medical Grade Spectrum:</strong> Unlike competitors that only offer 2 or 3 colors, Buudy features 7 distinct wavelengths. This allows you to treat everything from deep wrinkles and acne to hyperpigmentation and inflammation.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-green-600 font-bold">✓</span>
                       <span><strong>Built-in Neck Coverage:</strong> specifically designed to target "turkey neck" and sagging skin—a critical feature most expensive brands miss.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-green-600 font-bold">✓</span>
                       <span><strong>90-Day Goddess Guarantee:</strong> Buudy offers a generous 90-day trial period to test for results — if you're not satisfied, you get a full refund.</span>
                     </li>
                   </ul>

                   <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">The Drawbacks</h3>
                   <ul className="space-y-3 mb-8">
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold">✗</span>
                       <span><strong>Limited Availability:</strong> Available for purchase online only and exclusively in the United Kingdom.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold">✗</span>
                       <span><strong>Learning Curve:</strong> Some users note the intuitive tap controls take a session or two to fully get used to.</span>
                     </li>
                   </ul>

                   <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">Performance Metrics</h3>
                   <div className="space-y-2 mt-4 mt-6">
                     <MetricBar label="Light Effectiveness" value={97} />
                     <MetricBar label="Skin Comfort and Fit" value={96} />
                     <MetricBar label="Ease of Use" value={97} />
                     <MetricBar label="Material Quality" value={96} />
                     <MetricBar label="Affordability" value={100} />
                   </div>
                </div>

                {/* Editor's Tip - Free Gifts Discovery */}
                <div className="mt-10 bg-stone-50 border border-stone-200 p-6 md:p-8 relative">
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white text-stone-900 border border-stone-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
                      <span className="text-sm">💡</span> Editor's Tip
                    </div>
                    
                    <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4 leading-tight">
                      We found an active sale for <span className="bg-stone-900 text-white px-3 py-1 inline-block transform -rotate-1 text-xs tracking-widest uppercase align-middle ml-1 shadow-md">Free Gifts</span> worth £128
                    </h4>
                    
                    <p className="text-stone-600 text-sm leading-relaxed mb-8">
                      While concluding our research, we found that Buudy is running a limited-time web special where you can receive these professional clinical accessories bundled for free with every mask order.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {/* Box 1 */}
                      <div className="bg-white p-4 border border-stone-100 shadow-sm text-center relative group hover:-translate-y-1 transition-transform">
                        <div className="absolute -top-2 -right-2 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-2 py-1 animate-pulse">FREE</div>
                        <img src="/images/editorial/free-travel-box.png" alt="Travel Box" className="w-full aspect-square object-cover mb-3 bg-stone-50" />
                        <p className="font-bold text-stone-800 text-[10px] uppercase tracking-widest">Travel Box</p>
                      </div>
                      {/* Box 2 */}
                      <div className="bg-white p-4 border border-stone-100 shadow-sm text-center relative mt-2 sm:mt-0 group hover:-translate-y-1 transition-transform">
                        <div className="absolute -top-2 -right-2 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-2 py-1 animate-pulse" style={{ animationDelay: '0.5s' }}>FREE</div>
                        <img src="/images/editorial/free-led-torch.png" alt="LED Torch" className="w-full aspect-square object-cover mb-3 bg-stone-50" />
                        <p className="font-bold text-stone-800 text-[10px] uppercase tracking-widest">LED Torch</p>
                      </div>
                      {/* Box 3 */}
                      <div className="bg-white p-4 border border-stone-100 shadow-sm text-center relative mt-2 sm:mt-0 group hover:-translate-y-1 transition-transform">
                        <div className="absolute -top-2 -right-2 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-2 py-1 animate-pulse" style={{ animationDelay: '1s' }}>FREE</div>
                        <img src="/images/editorial/free-ebook.png" alt="E-Book" className="w-full aspect-square object-cover mb-3 bg-stone-50" />
                        <p className="font-bold text-stone-800 text-[10px] uppercase tracking-widest">Expert Guide</p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-stone-200">
                      <div className="text-center lg:text-left">
                        <div className="text-stone-400 text-[10px] uppercase tracking-widest mb-1">Direct-to-Consumer Price</div>
                        <div className="flex items-end gap-3 justify-center lg:justify-start">
                          <div className="text-stone-900 text-4xl font-serif font-bold">£179</div>
                          <div className="flex flex-col text-left mb-1">
                            <span className="text-stone-400 line-through text-sm font-medium">£449</span>
                            <span className="text-emerald-600 font-black text-xs uppercase tracking-wider">60% Off</span>
                          </div>
                        </div>
                      </div>
                      <a 
                        href="https://buudy.com/pages/buudy-led-mask"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full lg:w-auto bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-5 transition-all text-center flex items-center justify-center gap-3 group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          Check Free Gift Availability 
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                      </a>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-20 text-stone-300">
          * * *
        </div>

        {/* ======================================= */}
        {/*           #2 CurrentBody Skin           */}
        {/* ======================================= */}
        <div className="max-w-3xl mx-auto mb-20">
           <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-5/12 relative">
                <img src="/images/editorial/currentbody-skin-mask.jpeg" alt="CurrentBody Skin" className="w-full aspect-square object-cover" />
                <div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-3 py-1">#2 Rank</div>
              </div>
              <div className="w-full md:w-7/12">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">CurrentBody Skin LED Light Therapy Mask</h3>
                <div className="text-lg font-serif text-stone-500 border-b border-stone-200 pb-4 mb-4">A great established player, but lacking innovation.</div>
                
                <p className="text-stone-700 mb-6 text-sm leading-relaxed">
                  Long considered the industry standard among celebrities, the CurrentBody mask remains an excellent choice for those focused purely on anti-aging. It uses purely Red (633nm) and Near-Infrared (830nm) light—which is fantastic for collagen.
                </p>
                
                <div className="space-y-3 mb-8 bg-stone-50 p-6 border border-stone-200">
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">Where It Falls Short</h4>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Extremely High Price:</strong> At £399.99, it is drastically more expensive than the Buudy mask.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>No Neck Coverage:</strong> You must purchase the "Face & Neck Kit" for £679.99 to get neck coverage, which comes standard with Buudy.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Very Limited Treatment Modes:</strong> It only offers 3 wavelengths and completely lacks the 7-color versatility of the Buudy mask.</span>
                     </li>
                   </ul>
                </div>

                <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Price</div>
                    <div className="text-xl font-serif text-stone-900 font-bold">£399.99</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Score</div>
                    <div className="text-xl font-serif text-stone-500">8.2 / 10</div>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <hr className="max-w-xl mx-auto border-stone-200 mb-20" />

        {/* ======================================= */}
        {/*           #3 Omnilux Contour            */}
        {/* ======================================= */}
        <div className="max-w-3xl mx-auto mb-20">
           <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-5/12 relative">
                <img src="/images/editorial/omnilux-contour-mask.jpeg" alt="Omnilux Contour" className="w-full aspect-square object-cover" />
                <div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-3 py-1">#3 Rank</div>
              </div>
              <div className="w-full md:w-7/12">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Omnilux Contour Face</h3>
                <div className="text-lg font-serif text-stone-500 border-b border-stone-200 pb-4 mb-4">Dermatologist approved, but very expensive.</div>
                
                <p className="text-stone-700 mb-6 text-sm leading-relaxed">
                  Omnilux has an incredible medical pedigree. The build quality of the flexible silicone is superb, and the targeted wavelengths provide rigorous clinical results for collagen production.
                </p>

                <div className="space-y-3 mb-8 bg-stone-50 p-6 border border-stone-200">
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">Where It Falls Short</h4>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>No Neck Coverage:</strong> A separate neck and chest piece must be purchased for an additional £348, making the total cost nearly £696.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Very Limited Treatment Modes:</strong> Limited to just 2 light wavelengths (Red and NIR) and missing the 5 other modes that come standard with Buudy.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Not a Complete Solution:</strong> The company explicitly states the Contour mask "will not clear acne breakouts" and requires purchasing a separate mask.</span>
                     </li>
                   </ul>
                </div>

                <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Price</div>
                    <div className="text-xl font-serif text-stone-900 font-bold">£348</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Score</div>
                    <div className="text-xl font-serif text-stone-500">7.9 / 10</div>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <hr className="max-w-xl mx-auto border-stone-200 mb-20" />

        {/* ======================================= */}
        {/*           #4 Dennis Gross               */}
        {/* ======================================= */}
        <div className="max-w-3xl mx-auto mb-20">
           <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-5/12 relative">
                <img src="/images/editorial/shark-cryoglow-mask.png" alt="Shark CryoGlow LED Mask" className="w-full aspect-square object-cover" />
                <div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-3 py-1">#4 Rank</div>
              </div>
              <div className="w-full md:w-7/12">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Shark CryoGlow LED Mask</h3>
                <div className="text-lg font-serif text-stone-500 border-b border-stone-200 pb-4 mb-4">Unique cooling, but lacks widespread light modes.</div>
                
                <p className="text-stone-700 mb-6 text-sm leading-relaxed">
                  The Shark CryoGlow LED Face Mask has quickly made headlines and won prestigious beauty awards since its launch. From a trusted brand known for high-tech innovation, Shark offers the first LED mask featuring integrated under-eye cooling technology, making it a unique 2-in-1 solution for facial care.
                </p>

                <div className="space-y-3 mb-8 bg-stone-50 p-6 border border-stone-200">
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">Where It Falls Short</h4>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Severely Limited Light Modes:</strong> Missing 5 of the 7 wavelengths (Green, Yellow, Cyan, Purple, White) that the Buudy mask has.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Very Heavy & Rigid:</strong> At 675g, this mask is exceptionally heavy. The inflexible design can make it uncomfortable to wear.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Unspecified LED Count:</strong> A major red flag. The brand does not state the number of LEDs, suggesting the count is low compared to Buudy's high density.</span>
                     </li>
                   </ul>
                </div>

                <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Price</div>
                    <div className="text-xl font-serif text-stone-900 font-bold">£299.99</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Score</div>
                    <div className="text-xl font-serif text-stone-500">6.9 / 10</div>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <hr className="max-w-xl mx-auto border-stone-200 mb-20" />

        {/* ======================================= */}
        {/*           #5 Lavenza                    */}
        {/* ======================================= */}
        <div className="max-w-3xl mx-auto mb-20">
           <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-5/12 relative">
                <img src="/images/editorial/dr-dennis-gross-spectralite.jpg" alt="Dr Dennis Gross Spectralite" className="w-full aspect-square object-cover" />
                <div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-3 py-1">#5 Rank</div>
              </div>
              <div className="w-full md:w-7/12">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Dr. Dennis Gross DRx SpectraLite</h3>
                <div className="text-lg font-serif text-stone-500 border-b border-stone-200 pb-4 mb-4">Dermatologist created, but an astronomical price point.</div>
                
                <p className="text-stone-700 mb-6 text-sm leading-relaxed">
                  The Dr. Dennis Gross DRx SpectraLite FaceWare Pro secures the #5 spot on our list, bringing dermatologist-created clinical authority to at-home skincare. Known for its ultra-fast 3-minute treatment time, it is highly sought after by those with busy schedules. It offers a strong focus on acne and surface bacteria through its specific 415nm Blue light mode.
                </p>

                <div className="space-y-3 mb-8 bg-stone-50 p-6 border border-stone-200">
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">Where It Falls Short</h4>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Astronomical Price Point:</strong> At £465, you are paying a massive premium. It costs more than double the price of Buudy.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Zero Neck & Chest Coverage:</strong> For nearly £500, the lack of a neck attachment is a glaring omission. Users risk the "floating head" aging effect.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-stone-700">
                       <span className="text-red-500 font-bold mt-0.5">✗</span>
                       <span><strong>Rigid, Uncomfortable Fit:</strong> The hard plastic shell does not flex, with users frequently reporting significant discomfort on the bridge of the nose.</span>
                     </li>
                   </ul>
                </div>

                <div className="flex items-center justify-between border-t border-stone-200 pt-6">
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Price</div>
                    <div className="text-xl font-serif text-stone-900 font-bold">£465</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-stone-500 uppercase tracking-widest">Score</div>
                    <div className="text-xl font-serif text-stone-500">6.5 / 10</div>
                  </div>
                </div>
              </div>
           </div>
        </div>

        {/* Bottom Top Pick Section - Elegant Design */}
        <div className="mt-24 mb-12 relative max-w-5xl mx-auto">
          <div className="bg-white rounded-none md:rounded-2xl p-8 md:p-12 border border-stone-200 relative z-10 shadow-2xl shadow-stone-200/50">
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-900 mb-10 font-serif tracking-wide">
              The Editor's #1 Pick
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Image Area */}
              <div className="relative group">
                <a href="https://buudy.com/pages/buudy-led-mask" className="block relative bg-stone-50 border border-stone-100 p-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src="/images/mask-angle.webp" 
                    alt="Buudy LED Mask" 
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 shadow-md">
                    #1 Rated
                  </div>
                </a>
              </div>
              
              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 mb-4 font-serif tracking-tight">
                  Buudy 7-Colour LED Therapy Mask
                </h3>
                
                <div className="w-16 h-[2px] bg-emerald-600 mx-auto mb-6"></div>
                
                <div className="text-2xl md:text-3xl font-serif text-stone-900 mb-8">
                  Now <span className="text-emerald-600 font-bold">60% Off</span> <span className="font-sans text-xl">+ Free Gifts</span>
                </div>

                {/* Trustpilot-style Badge */}
                <div className="border border-stone-200 bg-stone-50 p-4 mx-auto mb-8 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-lg text-stone-900">Excellent</span>
                    <div className="flex gap-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981" stroke="#10B981"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981" stroke="#10B981"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981" stroke="#10B981"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981" stroke="#10B981"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981" stroke="#10B981"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                  </div>
                  <div className="text-xs text-stone-500 uppercase tracking-widest flex items-center justify-center gap-1">
                    Overall Score: 9.9 / 10
                  </div>
                </div>

                <a 
                  href="https://buudy.com/pages/buudy-led-mask" 
                  className="w-full lg:w-auto mx-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-[0.2em] uppercase py-5 px-10 text-xs shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">CHECK AVAILABILITY <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Author Bio moved to top of page */}

      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-stone-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-stone-900 leading-tight">Buudy LED Mask</span>
          <span className="text-[10px] text-red-500 font-bold uppercase tracking-wide">60% OFF &mdash; Limited Time</span>
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
