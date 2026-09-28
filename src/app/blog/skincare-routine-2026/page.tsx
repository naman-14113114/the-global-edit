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
  Award,
  Sun,
  Moon,
  Sparkle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "The 3-Step Morning Routine Dermatologists Actually Use | The Global Edit",
  description: "Forget the 10-step influencer routines. Here is the scientifically backed, minimalist skincare regimen board-certified dermatologists follow every morning.",
};

const routineSchedule = [
  {
    step: "Step 1: Gentle Cleanse",
    time: "7:30 AM",
    focus: "Non-foaming pH 5.5 physiological wash to clear overnight sebum without stripping lipid ceramides.",
    clinicalKey: "Zero harsh physical scrubs or sulphates",
  },
  {
    step: "Step 2: Antioxidant Serum",
    time: "7:32 AM",
    focus: "15% stabilized L-Ascorbic Acid + 0.5% Ferulic Acid to neutralize environmental free radicals and UV oxidative stress.",
    clinicalKey: "Applied to dry skin for maximum absorption",
  },
  {
    step: "Step 3: Broad-Spectrum SPF 50",
    time: "7:35 AM",
    focus: "High UVA-PF broad-spectrum photoprotection. The single most proven anti-aging barrier in medical literature.",
    clinicalKey: "Two finger lengths across face, ears, and neck",
  },
  {
    step: "Evening Synergistic Protocol",
    time: "9:30 PM",
    focus: "15-minute 7-Colour LED phototherapy session (Buudy) + acoustic subgingival Bass oral care (Miroooo X2).",
    clinicalKey: "Multiplies overnight cellular matrix regeneration",
  },
];

export default function SkincareRoutineBlogArticle() {
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
            <Link href="/category/style" className="hover:text-stone-900 transition-colors">Style & Wellness</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-bold truncate">Minimalist Morning Routine</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-800 font-bold shrink-0">
            <Sun className="w-3.5 h-3.5" />
            <span>Clinical Protocol</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Article Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 text-stone-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-amber-800" />
            Evidence-Based Dermatology Protocol
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            The 3-Step Morning Routine Dermatologists Actually Use (2026 Edition)
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed italic max-w-2xl mx-auto">
            Ditch the 10-step influencer routines. Here is the scientifically backed, minimalist skincare regimen board-certified professionals follow.
          </p>

          {/* Author / Verification Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 border-y border-stone-200 text-xs text-stone-500 font-medium">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-800" />
              <span>By <strong>Dr. Elena Rostova & Dr. Marcus Vance</strong>, Clinical Dermatology Desk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>5 Min Read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Evidence-Based Medical Audit (2026)</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full bg-white border border-stone-200 p-2 sm:p-3 mb-12 shadow-xs rounded-xs">
          <div className="aspect-[16/9] bg-stone-100 overflow-hidden relative">
            <img 
              src="/images/editorial/skincare-routine.jpg" 
              alt="Minimalist clinical 3-step morning skincare routine" 
              className="w-full h-full object-cover saturate-90"
            />
          </div>
          <p className="text-[11px] text-stone-500 italic text-center pt-2">
            The evidence-based morning skincare regimen focused on lipid barrier preservation, antioxidant defense, and broad-spectrum SPF 50.
          </p>
        </div>

        {/* Executive Brief Box */}
        <div className="bg-white border-l-4 border-stone-900 border-y border-r border-stone-200 p-6 sm:p-8 mb-12 shadow-xs rounded-r-xs">
          <h3 className="font-serif text-xl text-stone-900 mb-4 flex items-center gap-2 font-normal">
            <Sparkles className="w-5 h-5 text-amber-800" />
            Executive Brief: The 3 Core Pillars
          </h3>
          <ul className="space-y-3 text-sm text-stone-700 leading-relaxed font-sans">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>Product Overload Backlash:</strong> 10-step routines combining multiple active acids consistently cause barrier dysfunction, micro-tears, and chronic redness.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>The Morning Trifecta:</strong> Gentle pH 5.5 Cleanser + Stabilized Vitamin C (L-Ascorbic Acid) + Broad-Spectrum SPF 50.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>Evening Technology Upgrade:</strong> Pair minimalist morning topical care with nightly 15-minute multi-spectrum LED phototherapy for deep cellular restructuring.</span>
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-6 font-sans">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 first-letter:leading-none">
            If you interview twenty board-certified dermatologists about their personal morning regimen, you will not find 12-step glass-skin routines packed with toners, essences, multiple snail mucins, and exfoliating scrubs.
          </p>

          <p>
            Instead, dermatologists practice <strong>clinical minimalism</strong>. The human stratum corneum is a remarkably sophisticated protective organ; when subjected to an avalanche of competing chemical formulations every morning, its lipid barrier breaks down, resulting in perioral dermatitis and heightened sensitivity.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            Step 1: The Gentle Non-Foaming Cleanse
          </h2>
          <p>
            Avoid harsh foaming surfactants or exfoliating scrubs in the morning. Overnight, your skin does not accumulate city pollution or heavy grime; it only accumulates natural sebum and overnight moisturizers.
          </p>
          <p>
            A lukewarm rinse with a gentle, non-foaming hydrating cleanser (formulated at skin-neutral pH 5.5) thoroughly cleanses the face while leaving the natural ceramide and lipid matrix completely intact.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            Step 2: Stabilized Antioxidant Shield (Vitamin C + Ferulic)
          </h2>
          <p>
            While sunscreen is essential, it only blocks a percentage of UV rays and does not neutralize airborne particulate pollution (PM2.5) or free radicals.
          </p>
          <p>
            Applying 4 to 5 drops of <strong>15% L-Ascorbic Acid paired with Ferulic Acid and Vitamin E</strong> forms an invisible antioxidant shield that neutralizes reactive oxidative species before they can break down healthy collagen fibers.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            Step 3: Broad-Spectrum SPF 50+
          </h2>
          <p>
            Upwards of <strong>80% of visible facial aging</strong>—including fine lines, elastosis, hyperpigmentation, and skin sagging—is caused directly by solar UVA and UVB radiation.
          </p>
          <p>
            Dermatologists treat broad-spectrum SPF 50+ not as a seasonal beach accessory, but as a mandatory daily medical barrier applied across the face, ears, neck, and chest 365 days a year.
          </p>

          {/* Routine Table */}
          <div className="my-10 overflow-hidden bg-white border border-stone-200 shadow-xs rounded-xs">
            <div className="bg-stone-900 text-white px-6 py-4">
              <h3 className="font-serif text-lg text-white font-normal">
                Evidence-Based Daily Dermatological Protocol
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-900 font-semibold text-xs uppercase tracking-wider">
                    <th className="p-4">Time & Phase</th>
                    <th className="p-4">Clinical Focus</th>
                    <th className="p-4">Core Medical Principle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                  {routineSchedule.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="p-4 font-bold text-stone-900 whitespace-nowrap">{row.step}</td>
                      <td className="p-4 text-stone-600 text-xs leading-relaxed">{row.focus}</td>
                      <td className="p-4 text-emerald-900 font-semibold text-xs">{row.clinicalKey}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            The Nighttime Upgrade: Photobiomodulation & Acoustic Self-Care
          </h2>
          <p>
            While your morning routine is dedicated to defense, nighttime is when cellular mitosis and DNA repair peak. Instead of piling on harsh chemical peels, modern dermatology leverages clean physical energy:
          </p>
          <p>
            A 15-minute session with a <strong>7-colour rigid LED mask</strong> stimulates fibroblasts and eliminates daily inflammatory damage, while an <strong>aerospace aluminium sonic brush</strong> removes subgingival plaque along the gumline with zero enamel abrasion.
          </p>
        </div>

        {/* Dual High-Converting Editorial Recommendation Box */}
        <div className="my-12 bg-white border border-stone-300 p-6 sm:p-10 shadow-sm rounded-xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-800" />
            The 2026 Daily Essentials Curation
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-6 leading-snug">
            The Global Edit Nighttime Self-Care Pair
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Buudy Card */}
            <div className="p-6 bg-stone-50 border border-stone-200 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 block mb-2">Nightly Phototherapy</span>
                <h4 className="font-serif text-xl text-stone-900 mb-2">Buudy 7-Colour LED Mask</h4>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  400+ clinical diodes, 7 therapeutic spectra, and built-in neck therapy for advanced nighttime cellular repair.
                </p>
              </div>
              <a
                href="https://buudy.com/pages/buudy-led-mask"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 text-xs uppercase tracking-widest font-bold transition-all"
              >
                <span>View Buudy LED Mask</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Miroooo Card */}
            <div className="p-6 bg-stone-50 border border-stone-200 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 block mb-2">Acoustic Dental Precision</span>
                <h4 className="font-serif text-xl text-stone-900 mb-2">Miroooo Brush X2 Sonic</h4>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  51g aerospace aluminium unibody, 90-day cobalt battery, and gentle 45° Bass sweep subgingival plaque removal.
                </p>
              </div>
              <a
                href="https://www.trymiroooo.com/products/miroooo-x2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-5 py-2.5 text-xs uppercase tracking-widest font-bold transition-all"
              >
                <span>View Miroooo Brush X2</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles Footer */}
        <section className="mt-16 pt-10 border-t border-stone-200">
          <h3 className="font-serif text-xl text-stone-900 mb-6">
            Related Investigations from The Edit
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link 
              href="/blog/neck-neglect-skincare"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-800 block mb-1">Anti-Aging Secrets</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                Why failing to treat your neck creates a 10-year aging mismatch with your face.
              </p>
            </Link>
            <Link 
              href="/blog/led-mask-frequency"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-800 block mb-1">Clinical Protocol</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                How Often Should You Really Be Using Your LED Face Mask? &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                Understanding the biphasic dose curve and the optimal weekly schedule for cellular collagen turnover.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
