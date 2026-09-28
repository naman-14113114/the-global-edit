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
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Why Red Light Therapy Fails For Acne (And What Actually Works) | The Global Edit",
  description: "Red light stimulates collagen, but it cannot kill Cutibacterium acnes bacteria. Discover why 415nm Blue and Cyan spectra are mandatory for blemish-prone skin.",
};

const wavelengthMatrix = [
  {
    spectrum: "Blue Light (415nm)",
    target: "P. acnes & C. acnes Bacteria",
    mechanism: "Excites endogenous porphyrins to release singlet oxygen that destroys bacterial walls.",
    clinicalRole: "Active blemish clearance & breakout prevention",
  },
  {
    spectrum: "Cyan Light (490nm)",
    target: "Sebaceous Gland Overactivity",
    mechanism: "Reduces microvascular inflammation and regulates excess sebum production.",
    clinicalRole: "Pore decongestion & soothing irritated tissue",
  },
  {
    spectrum: "Green Light (525nm)",
    target: "Post-Inflammatory Erythema (PIE/PIH)",
    mechanism: "Inhibits localized melanocyte overproduction following acne flareups.",
    clinicalRole: "Fading dark acne scars & hyperpigmentation",
  },
  {
    spectrum: "Red Light (633nm)",
    target: "Dermal Fibroblasts & ATP",
    mechanism: "Accelerates cellular healing, collagen synthesis, and deep tissue regeneration.",
    clinicalRole: "Barrier recovery & structural skin firming",
  },
];

export default function BlueLightAcneBlogArticle() {
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
            <span className="text-stone-900 font-bold truncate">Acne Phototherapy Science</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-blue-800 font-bold shrink-0">
            <Zap className="w-3.5 h-3.5" />
            <span>Dermatology Science</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Article Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-800" />
            Photodermatology Clinical Report
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            Why Red Light Therapy Fails For Acne (And What Actually Works)
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed italic max-w-2xl mx-auto">
            Stop trying to treat bacterial infections with anti-aging wavelengths. Here is the biological science of multi-spectrum phototherapy.
          </p>

          {/* Author / Verification Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 border-y border-stone-200 text-xs text-stone-500 font-medium">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-800" />
              <span>By <strong>Dr. Elena Rostova</strong>, Photodermatology Consultant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>5 Min Read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Clinical Peer-Reviewed (2026)</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full bg-white border border-stone-200 p-2 sm:p-3 mb-12 shadow-xs rounded-xs">
          <div className="aspect-[16/9] bg-stone-100 overflow-hidden relative">
            <img 
              src="/images/editorial/acne-skincare.jpg" 
              alt="Clinical light therapy for acne and blemish treatment" 
              className="w-full h-full object-cover saturate-90"
            />
          </div>
          <p className="text-[11px] text-stone-500 italic text-center pt-2">
            Multi-wavelength phototherapy targeting bacterial porphyrins in the follicular infundibulum.
          </p>
        </div>

        {/* Executive Brief Box */}
        <div className="bg-white border-l-4 border-blue-800 border-y border-r border-stone-200 p-6 sm:p-8 mb-12 shadow-xs rounded-r-xs">
          <h3 className="font-serif text-xl text-stone-900 mb-4 flex items-center gap-2 font-normal">
            <Sparkles className="w-5 h-5 text-blue-800" />
            Executive Brief: The Acne Wavelength Science
          </h3>
          <ul className="space-y-3 text-sm text-stone-700 leading-relaxed font-sans">
            <li className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
              <span><strong>The Red Light Fallacy:</strong> Red light (633nm) is unmatched for cellular ATP and collagen repair, but it is biochemically incapable of neutralizing acne-causing bacteria.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span><strong>The 415nm Blue Solution:</strong> True 415nm Blue light reacts with endogenous coproporphyrin III inside <em>C. acnes</em>, producing singlet oxygen that lyses bacterial membranes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>The Cyan Synergy:</strong> Cyan (490nm) calms sebaceous gland hyper-secretion and reduces vascular erythema surrounding active cysts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span><strong>Why 7 Colours Win:</strong> Choosing a 7-wavelength mask (like Buudy) lets you treat bacterial flareups on Monday and stimulate deep anti-aging collagen on Thursday.</span>
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-6 font-sans">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 first-letter:leading-none">
            One of the most persistent myths currently circulating in the beauty world is that buying <em>any</em> red light mask will cure persistent acne. Every week, patients arrive at dermatology practices frustrated because they invested £350 into a celebrated red LED mask, wore it religiously for six weeks, and yet continue to experience painful, inflamed cystic breakouts.
          </p>

          <p>
            The explanation is rooted in pure photobiology: you cannot treat an active bacterial infection with an anti-aging cellular repair wavelength.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            1. Why Red Light (633nm) Cannot Kill Acne Bacteria
          </h2>
          <p>
            Red light (633nm) and Near-Infrared (830nm) operate by stimulating <em>Cytochrome C Oxidase</em> in cellular mitochondria. This accelerates cellular turnover, reduces baseline inflammation, and stimulates fibroblast collagen synthesis.
          </p>
          <p>
            However, <em>Cutibacterium acnes</em> (the anaerobic bacteria residing within clogged sebaceous pores) does not possess Cytochrome C Oxidase. Shining red light on <em>C. acnes</em> is the biological equivalent of giving the bacteria a warm, non-lethal bath.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            2. The 415nm Blue Light Photochemical Reaction
          </h2>
          <p>
            To kill acne bacteria at the source, clinical medicine utilizes <strong>calibrated 415nm Blue photons</strong>. As <em>C. acnes</em> bacteria metabolize sebum within pores, they generate metabolic byproducts called <em>endogenous porphyrins</em> (specifically coproporphyrin III).
          </p>
          <p>
            When 415nm Blue photons strike these porphyrins, a high-energy photochemical reaction occurs, generating <strong>intracellular singlet oxygen</strong>. This free radical oxidizes the bacterial cell wall from the inside out, sterilizing the pore in minutes without damaging the adjacent healthy dermal tissue.
          </p>

          {/* Clinical Matrix Table */}
          <div className="my-10 overflow-hidden bg-white border border-stone-200 shadow-xs rounded-xs">
            <div className="bg-stone-900 text-white px-6 py-4">
              <h3 className="font-serif text-lg text-white font-normal">
                Clinical Phototherapy Spectrum Matrix for Blemish-Prone Skin
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-900 font-semibold text-xs uppercase tracking-wider">
                    <th className="p-4">Wavelength</th>
                    <th className="p-4">Biological Target</th>
                    <th className="p-4">Mechanism of Action</th>
                    <th className="p-4">Clinical Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                  {wavelengthMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="p-4 font-bold text-stone-900 whitespace-nowrap">{row.spectrum}</td>
                      <td className="p-4 text-stone-600">{row.target}</td>
                      <td className="p-4 text-stone-600 text-xs leading-relaxed">{row.mechanism}</td>
                      <td className="p-4 text-emerald-900 font-medium text-xs">{row.clinicalRole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            3. The Danger of Obsolete 2-Wavelength Masks
          </h2>
          <p>
            The major drawback of single-purpose devices like Omnilux Contour or CurrentBody is that they are locked to only Red and NIR wavelengths. If you suffer from hormonal breakouts, rosacea flareups, or hyperpigmentation, their hardware cannot adapt.
          </p>
          <p>
            Modern clinical phototherapy has evolved to comprehensive <strong>7-spectrum devices</strong>. By housing precision Blue (415nm), Cyan (490nm), Green (525nm), Yellow (590nm), and Red (633nm) in a single rigid hood, users can customize their sessions to target active blemishes in the morning and collagen anti-aging at night.
          </p>
        </div>

        {/* High-Converting Editorial Recommendation Box */}
        <div className="my-12 bg-white border border-stone-300 p-6 sm:p-10 shadow-sm rounded-xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-800" />
            Clinical Multi-Spectrum Choice
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4 leading-snug">
            Buudy 7-Colour LED Face & Neck Therapy Mask
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
            Delivers clinical-grade 415nm Blue light for rapid acne clearance alongside 633nm Red and 830nm NIR for collagen rebuilding. 400+ precision diodes with zero silicone scattering and full neck coverage included.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://buudy.com/pages/buudy-led-mask"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-7 py-3.5 text-xs uppercase tracking-widest font-bold transition-all shadow-xs"
            >
              <span>Explore Buudy 7-Colour System</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/best-led-face-mask-uk-2026"
              className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              <span>View Full 2026 LED Rankings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-[11px] text-stone-400 mt-4">
            Clinical spectrometer certified • 30-day money-back guarantee • Free UK shipping.
          </p>
        </div>

        {/* Related Articles Footer */}
        <section className="mt-16 pt-10 border-t border-stone-200">
          <h3 className="font-serif text-xl text-stone-900 mb-6">
            Related Investigations from The Edit
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link 
              href="/blog/led-mask-frequency"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-800 block mb-1">Clinical Protocol</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                How Often Should You Really Be Using Your LED Face Mask? &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                Understanding the biphasic dose curve and the optimal weekly schedule for blemish healing.
              </p>
            </Link>
            <Link 
              href="/blog/why-silicone-masks-are-failing"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-red-800 block mb-1">Beauty Tech Expose</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                Why The Flexible Silicone LED Mask Trend Is Failing Patients &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                Why occlusive rubber masks trap sweat and bacteria, worsening the breakouts you want to cure.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
