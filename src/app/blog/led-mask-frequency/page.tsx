import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  UserCheck, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Award,
  Calendar,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: "How Often Should You Use An LED Face Mask? | The Global Edit",
  description: "The ideal clinical frequency for red light therapy: separating marketing hype from the biological reality of the biphasic dose curve.",
};

const protocolSchedules = [
  {
    goal: "Anti-Aging & Collagen Remodeling",
    wavelengths: "Red (633nm) + Near-Infrared (830nm)",
    frequency: "4–5 sessions per week",
    duration: "10–15 minutes",
    timeline: "Visible fine-line reduction in 6–8 weeks",
  },
  {
    goal: "Active Acne & Blemish Eradication",
    wavelengths: "Blue (415nm) + Cyan (490nm)",
    frequency: "3–4 sessions per week",
    duration: "10 minutes",
    timeline: "Inflammation reduction in 7–14 days",
  },
  {
    goal: "Hyperpigmentation & Tone Evening",
    wavelengths: "Green (525nm) + Yellow (590nm)",
    frequency: "3 sessions per week",
    duration: "15 minutes",
    timeline: "Pigment brightening in 4–6 weeks",
  },
  {
    goal: "Long-Term Cellular Maintenance",
    wavelengths: "Multi-Spectrum Cycling (Buudy 7-Colour)",
    frequency: "2–3 sessions per week",
    duration: "10 minutes",
    timeline: "Ongoing collagen preservation",
  },
];

export default function LEDFrequencyBlogArticle() {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-stone-900 font-sans">
      {/* Top Breadcrumbs */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-20 z-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between text-xs tracking-wider uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-stone-900 transition-colors">The Global Edit</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <Link href="/blog" className="hover:text-stone-900 transition-colors">The Edit</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <Link href="/category/beauty" className="hover:text-stone-900 transition-colors">Beauty Tech</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-bold truncate">LED Mask Protocol Guide</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-emerald-800 font-bold shrink-0">
            <Activity className="w-3.5 h-3.5" />
            <span>Clinical Protocol</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Article Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Calendar className="w-4 h-4 text-emerald-700" />
            Photobiomodulation Dosage Protocol
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            How Often Should You Really Be Using Your LED Face Mask?
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed italic max-w-2xl mx-auto">
            More is not better when it comes to photobiomodulation. The biological science of optimal weekly dosing.
          </p>

          {/* Author / Verification Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 border-y border-stone-200 text-xs text-stone-500 font-medium">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-800" />
              <span>By <strong>Dr. Sarah Mitchell</strong>, Clinical Photobiology Consultant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>4 Min Read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Fact-Checked Clinical Protocol (2026)</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full bg-white border border-stone-200 p-2 sm:p-3 mb-12 shadow-xs rounded-xs">
          <div className="aspect-[16/9] bg-stone-100 overflow-hidden relative">
            <img 
              src="/images/editorial/led-light-therapy.jpg" 
              alt="Optimal LED face mask light therapy session routine" 
              className="w-full h-full object-cover saturate-90"
            />
          </div>
          <p className="text-[11px] text-stone-500 italic text-center pt-2">
            10 to 15-minute phototherapy session delivers peak mitochondrial Cytochrome C Oxidase activation.
          </p>
        </div>

        {/* Executive Brief Box */}
        <div className="bg-white border-l-4 border-emerald-800 border-y border-r border-stone-200 p-6 sm:p-8 mb-12 shadow-xs rounded-r-xs">
          <h3 className="font-serif text-xl text-stone-900 mb-4 flex items-center gap-2 font-normal">
            <Sparkles className="w-5 h-5 text-emerald-800" />
            Executive Brief: The Dosing Rules
          </h3>
          <ul className="space-y-3 text-sm text-stone-700 leading-relaxed font-sans">
            <li className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span><strong>The Biphasic Bell Curve:</strong> Light therapy follows the Arndt-Schulz Law. Exceeding 20 minutes in a single session causes cellular photo-inhibition and wastes time.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>The Golden Window:</strong> 10 to 15 minutes per session, 3 to 5 times per week, represents the absolute clinical sweet spot for pro-collagen synthesis.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span><strong>The Pre-Session Cleanse Rule:</strong> Always wear your LED mask on bare, clean, dry skin. Thick creams, mineral sunscreens, and occlusives reflect therapeutic photons away.</span>
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-6 font-sans">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 first-letter:leading-none">
            Once consumers purchase a clinical-grade LED face mask, their natural inclination is often to wear it for an hour while watching television, assuming that triple the time will produce triple the anti-aging results. In photomedicine, however, this assumption is completely biologically false.
          </p>

          <p>
            Light therapy is governed by a fundamental pharmacological principle known as the <strong>Arndt-Schulz Law</strong>, also referred to as the <em>biphasic dose-response curve</em>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            1. The Biphasic Bell Curve Explained
          </h2>
          <p>
            When low-level photons strike mitochondrial chromophores, cellular ATP production climbs. In a high-density mask (such as one with 300+ LEDs delivering 30–50 mW/cm²), this cellular energy production peaks between <strong>10 and 15 minutes</strong> of exposure.
          </p>
          <p>
            If you continue past 20 to 30 minutes, the mitochondria become saturated with transient reactive oxygen species (ROS). Instead of stimulating further healing, the cell enters a protective refractory state, and therapeutic benefit regresses back to zero. You have spent 45 minutes wearing a mask for no additional gain.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            2. The Clinical Treatment Schedule Matrix
          </h2>
          <p>
            Depending on your individual dermatological objectives, here are the evidence-based frequency protocols recommended by clinical practitioners:
          </p>

          {/* Schedule Table */}
          <div className="my-10 overflow-hidden bg-white border border-stone-200 shadow-xs rounded-xs">
            <div className="bg-stone-900 text-white px-6 py-4">
              <h3 className="font-serif text-lg text-white font-normal">
                Clinical Phototherapy Dosage Protocol by Skin Goal
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-900 font-semibold text-xs uppercase tracking-wider">
                    <th className="p-4">Dermatological Objective</th>
                    <th className="p-4">Recommended Spectra</th>
                    <th className="p-4">Weekly Cadence</th>
                    <th className="p-4">Session Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                  {protocolSchedules.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="p-4 font-bold text-stone-900">{row.goal}</td>
                      <td className="p-4 text-stone-600 text-xs">{row.wavelengths}</td>
                      <td className="p-4 text-emerald-900 font-semibold text-xs">{row.frequency}</td>
                      <td className="p-4 text-stone-900 font-medium text-xs">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            3. Pre-Session and Post-Session Skincare Protocol
          </h2>
          <p>
            To maximize light penetration, always follow the proper product sequence:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700">
            <li><strong>Before Treatment:</strong> Double-cleanse to remove sebum, foundation, and mineral SPF. Pat the skin completely dry. Do not apply thick moisturizers or oils prior to light exposure.</li>
            <li><strong>During Treatment:</strong> Relax for 10 to 15 minutes with eyes closed behind the protective eye rests.</li>
            <li><strong>After Treatment:</strong> Your skin is in an active, receptive state. Immediately apply your antioxidant serums (Vitamin C, Niacinamide) or hyaluronic hydrators followed by a barrier cream.</li>
          </ul>
        </div>

        {/* High-Converting Editorial Recommendation Box */}
        <div className="my-12 bg-white border border-stone-300 p-6 sm:p-10 shadow-sm rounded-xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-800" />
            Clinical Protocol Hardware Choice
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4 leading-snug">
            Buudy 7-Colour LED Mask with Auto-Dosing Timers
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
            Pre-programmed with automated 10 and 15-minute clinical timers to ensure you never exceed the biphasic dose curve. Delivers 7 distinct clinical spectra with simultaneous neck treatment standard.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://buudy.com/pages/buudy-led-mask"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-7 py-3.5 text-xs uppercase tracking-widest font-bold transition-all shadow-xs"
            >
              <span>Explore Buudy LED Mask</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/best-led-face-mask-uk-2026"
              className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              <span>Read 2026 Mask Rankings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-[11px] text-stone-400 mt-4">
            Pre-calibrated 10-min timers • 30-day trial • 2-year clinical warranty.
          </p>
        </div>

        {/* Related Articles Footer */}
        <section className="mt-16 pt-10 border-t border-stone-200">
          <h3 className="font-serif text-xl text-stone-900 mb-6">
            Related Investigations from The Edit
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link 
              href="/blog/acne-blue-light-myth"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-blue-800 block mb-1">Dermatology Science</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                Why Red Light Therapy Fails For Acne (And What Actually Works) &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                How 415nm Blue photons trigger singlet oxygen to neutralize Cutibacterium acnes bacteria.
              </p>
            </Link>
            <Link 
              href="/blog/skincare-routine-2026"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-stone-800 block mb-1">Dermatology Protocol</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                The 3-Step Morning Routine Dermatologists Actually Use &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                The evidence-based morning skincare regimen and evening phototherapy synergy.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
