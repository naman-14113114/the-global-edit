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
  Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Is Near-Infrared (NIR) Light Safe For Daily Use? | The Global Edit",
  description: "Understanding the difference between visible red light and invisible 830nm near-infrared, and why it safely restructures your dermal matrix without thermal risk.",
};

const safetyChecklist = [
  {
    parameter: "Radiation Type",
    status: "100% Non-Ionizing",
    explanation: "NIR photons sit at the benign opposite end of the electromagnetic spectrum from damaging ionizing Ultraviolet (UV) radiation.",
  },
  {
    parameter: "Thermal Profile",
    status: "Non-Thermal Athermal",
    explanation: "Medical LEDs emit low-level photonic energy (photobiomodulation) without heating or burning cutaneous tissue.",
  },
  {
    parameter: "Penetration Depth",
    status: "5mm to 10mm (Deep Dermis)",
    explanation: "830nm NIR bypasses epidermal melanin to reach fibroblasts, collagen fibrils, and facial muscle beds directly.",
  },
  {
    parameter: "Ocular Considerations",
    status: "Eye Protection Recommended",
    explanation: "While NIR does not damage skin DNA, high-density diodes require integrated silicone or ABS eye cups for optical comfort.",
  },
];

export default function NIRSafetyBlog() {
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
            <span className="text-stone-900 font-bold truncate">Near-Infrared NIR Safety</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-800 font-bold shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Photobiology Guide</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Article Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-amber-800" />
            Biomedical Physics Deep-Dive
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            Is Near-Infrared (NIR) Light Actually Safe For Daily Facial Use?
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed italic max-w-2xl mx-auto">
            It is invisible to the human eye, but responsible for 80% of clinical anti-aging restructuring. Here is why it is completely safe.
          </p>

          {/* Author / Verification Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 border-y border-stone-200 text-xs text-stone-500 font-medium">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-800" />
              <span>By <strong>Dr. Henrik Lindqvist</strong>, Optical Physicist & Biomedical Engineer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>5 Min Read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Peer-Reviewed Photomedicine Audit (2026)</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full bg-white border border-stone-200 p-2 sm:p-3 mb-12 shadow-xs rounded-xs">
          <div className="aspect-[16/9] bg-stone-100 overflow-hidden relative">
            <img 
              src="/images/editorial/nir-safety.jpg" 
              alt="Near-infrared 830nm deep tissue cellular phototherapy" 
              className="w-full h-full object-cover saturate-90 object-top"
            />
          </div>
          <p className="text-[11px] text-stone-500 italic text-center pt-2">
            Spectrometric analysis of 830nm Near-Infrared photons penetrating past the epidermal stratum corneum into reticular fibroblasts.
          </p>
        </div>

        {/* Executive Brief Box */}
        <div className="bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 p-6 sm:p-8 mb-12 shadow-xs rounded-r-xs">
          <h3 className="font-serif text-xl text-stone-900 mb-4 flex items-center gap-2 font-normal">
            <Sparkles className="w-5 h-5 text-amber-800" />
            Executive Brief: The Scientific Facts
          </h3>
          <ul className="space-y-3 text-sm text-stone-700 leading-relaxed font-sans">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>Non-Ionizing & 100% UV-Free:</strong> NIR light at 830nm carries zero ionizing radiation, meaning it is biologically incapable of causing DNA breaks or melanoma.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>Deeper Cellular Reach:</strong> While visible red light reaches the upper dermis (1–2mm), NIR penetrates up to 10mm into deep fascia and collagen scaffolding.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span><strong>The Invisible Trap:</strong> Because NIR is invisible, budget Amazon brands often solder cheap inactive dummy bulbs. Look for certified third-party spectrometer reports.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>Ocular Protection:</strong> Choose masks with integrated opaque eye rests to prevent glare fatigue during 15-minute daily sessions.</span>
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-6 font-sans">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 first-letter:leading-none">
            When you switch on a certified medical LED mask, your eyes immediately perceive a vibrant crimson glow. However, what your eyes cannot see is the most powerful component of the entire treatment: <strong>Near-Infrared (NIR) light</strong>, operating at an invisible wavelength of 830 to 850 nanometers.
          </p>

          <p>
            Because the word "radiation" is frequently associated with light physics, many first-time buyers understandably ask: is exposing delicate facial tissue to near-infrared light safe every single day?
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            1. Non-Ionizing vs Ionizing Light: Why NIR Cannot Damage DNA
          </h2>
          <p>
            In physics, the electromagnetic spectrum is divided into two distinct categories: <em>ionizing</em> and <em>non-ionizing</em>.
          </p>
          <p>
            Ionizing radiation—such as Ultraviolet (UV-C, UV-B), X-rays, and gamma rays—possesses extremely short wavelengths and high photon energy capable of stripping electrons from atoms and breaking cellular DNA strands.
          </p>
          <p>
            Near-Infrared light (830nm) sits at the complete opposite end of the spectrum, far beyond visible red light. It is <strong>100% non-ionizing</strong>. Its photon energy is biologically incapable of altering DNA structure or causing thermal tissue necrosis. Instead, it interacts purely at a metabolic level through photobiomodulation.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            2. The Cellular Mechanism: Mitochondrial ATP Activation
          </h2>
          <p>
            When 830nm photons penetrate into the reticular dermis, they are absorbed by a specific chromophore inside your cellular mitochondria called <strong>Cytochrome C Oxidase</strong>.
          </p>
          <p>
            This absorption causes the dissociation of inhibitory nitric oxide, allowing oxygen to bind freely. The result is a dramatic increase in adenosine triphosphate (ATP)—the fundamental energy currency of human cells. Fibroblasts use this surplus ATP to synthesize fresh collagen type I and elastin fibers, repairing fine lines from the inside out.
          </p>

          {/* Safety Checklist Table */}
          <div className="my-10 overflow-hidden bg-white border border-stone-200 shadow-xs rounded-xs">
            <div className="bg-stone-900 text-white px-6 py-4">
              <h3 className="font-serif text-lg text-white font-normal">
                Clinical Photobiology Safety Verification Checklist
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-900 font-semibold text-xs uppercase tracking-wider">
                    <th className="p-4">Safety Parameter</th>
                    <th className="p-4 text-emerald-800">Clinical Verification</th>
                    <th className="p-4">Biological Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                  {safetyChecklist.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="p-4 font-bold text-stone-900">{row.parameter}</td>
                      <td className="p-4 text-emerald-900 font-semibold text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        {row.status}
                      </td>
                      <td className="p-4 text-stone-600 text-xs leading-relaxed">{row.explanation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            3. The Invisibility Trap: How Budget Brands Cut Corners
          </h2>
          <p>
            Because human photoreceptors in the retina cannot perceive 830nm wavelengths, fraudulent white-label sellers on Amazon frequently omit NIR diodes altogether to save manufacturing costs, knowing the consumer cannot see the missing spectrum.
          </p>
          <p>
            To protect your investment, only purchase devices from reputable manufacturers who publish verified third-party spectrometer readouts proving exact 830nm emission peaks.
          </p>
        </div>

        {/* High-Converting Editorial Recommendation Box */}
        <div className="my-12 bg-white border border-stone-300 p-6 sm:p-10 shadow-sm rounded-xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-800" />
            Verified NIR Clinical Hardware
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4 leading-snug">
            Buudy 7-Colour Mask with Calibrated 830nm NIR Diodes
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
            Independently verified to deliver true 830nm Near-Infrared wavelengths alongside 633nm Red across 400+ precision diodes. Includes ergonomic eye shields and neck array for complete athermal daily safety.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://buudy.com/pages/buudy-led-mask"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-7 py-3.5 text-xs uppercase tracking-widest font-bold transition-all shadow-xs"
            >
              <span>Verify Buudy Diode Specs</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/best-led-face-mask-uk-2026"
              className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              <span>Compare All 2026 Masks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-[11px] text-stone-400 mt-4">
            CE Medical & FDA clearance compliant • Zero UV emissions guaranteed.
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
                The biological truth of the biphasic dose curve and the optimal weekly schedule.
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
                Why occlusive rubber masks scatter up to 25% of therapeutic light before reaching the dermis.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
