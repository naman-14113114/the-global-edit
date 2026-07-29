export const metadata = {
  title: "At-Home LED vs Dermatology Clinics: The ROI Breakdown | The Global Edit",
  description: "Are expensive in-office LED light therapy sessions worth the premium, or has at-home clinical technology finally caught up?",
};

export default function RedLightROI() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      <div className="max-w-3xl mx-auto px-4 md:px-0 pt-16 pb-24">
        <div className="text-center mb-10 text-sm border-b border-stone-200 pb-10">
          <span className="uppercase tracking-widest text-stone-500 font-bold mb-4 block">Wellness Investment</span>
          <h1 className="text-5xl font-serif text-stone-900 leading-tight mb-6">
            At-Home LED vs Dermatology Clinics: The True Cost Breakdown
          </h1>
          <p className="text-stone-500 italic font-serif text-lg mb-8">
            Why paying £150 per session is no longer necessary for clinical results.
          </p>
        </div>

        <div className="w-full aspect-[16/9] bg-stone-200 mb-12">
          <img 
            src="/images/editorial/clinic-treatment.jpg" 
            alt="Clinic vs At-Home" 
            className="w-full h-full object-cover saturate-50"
          />
        </div>

        <div className="prose prose-stone prose-lg max-w-none text-stone-700">
           <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
            Historically, accessing highly calibrated, medical-grade LED light therapy required booking an appointment at a luxury dermatology clinic. Sessions typically cost between £80 to £200 for a mere 20-minute exposure under a massive, unyielding light dome.
           </p>

           <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">The Consistency Paradigm</h2>
           <p className="mb-6">
            The problem with clinical visits isn't the technology—the clinic panels are incredibly powerful. The issue is biological necessity. Light therapy is fundamentally cumulative. To stimulate ATP production within the mitochondria, consistent, daily or every-other-day exposure is vastly superior to one massive dose of light once a month.
           </p>
           <p className="mb-6">
            Paying £150 a week is financially unsustainable for 99% of people.
           </p>

           <h2 className="text-3xl font-serif text-stone-900 mt-12 mb-6">The Shift To At-Home Tech</h2>
           <p className="mb-6">
             In 2026, the technology formerly restricted to medical panels has been miniaturized into facial masks. However, not all masks are created equal. You must ensure the mask you purchase has a high diode count (over 300 LEDs is optimal) to mimic the irradiance of a clinical panel.
           </p>

           <div className="my-12 p-8 bg-stone-100 border-l-4 border-stone-900">
             <h4 className="font-serif text-xl mb-3 text-stone-900">Stop Overpaying For Clinics</h4>
             <p className="text-stone-700 text-sm mb-4">You can buy a permanent, true clinical-grade mask for the equivalent cost of one and a half clinic visits.</p>
             <p className="text-sm font-bold">
               <a href="/best-led-face-mask-uk-2026" className="hover:text-stone-500 underline underline-offset-4">Discover the LED mask that clinics don't want you to know about →</a>
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
