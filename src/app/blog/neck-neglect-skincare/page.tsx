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
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: "The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin | The Global Edit",
  description: "Failing to treat your neck will age you 10 years faster. Discover why cervical skin needs dual-zone Near-Infrared phototherapy rather than harsh retinols.",
};

export default function NeckAgingBlogArticle() {
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
            <Link href="/category/wellness" className="hover:text-stone-900 transition-colors">Wellness</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-900 font-bold truncate">Neck Neglect Epidemic</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-800 font-bold shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Anti-Aging Protocol</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Article Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-amber-800" />
            Clinical Anti-Aging Investigation
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            The Neck Neglect Epidemic: Why Skincare Cannot Stop at the Chin
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed italic max-w-2xl mx-auto">
            In aesthetic medicine, it is a proven truth: your neck reveals your biological age a decade faster than your face.
          </p>

          {/* Author / Verification Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 border-y border-stone-200 text-xs text-stone-500 font-medium">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-800" />
              <span>By <strong>Dr. Marcus Vance</strong>, Dermatology Research Desk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>4 Min Read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Fact-Checked & Medically Audited (2026)</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full bg-white border border-stone-200 p-2 sm:p-3 mb-12 shadow-xs rounded-xs">
          <div className="aspect-[16/9] bg-stone-100 overflow-hidden relative">
            <img 
              src="/images/editorial/neck-skincare.jpg" 
              alt="Clinical neck and decolletage phototherapy treatment" 
              className="w-full h-full object-cover saturate-90"
            />
          </div>
          <p className="text-[11px] text-stone-500 italic text-center pt-2">
            Clinical photobiomodulation targeting the platysma muscle and delicate cervical dermal layers.
          </p>
        </div>

        {/* Executive Brief Box */}
        <div className="bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 p-6 sm:p-8 mb-12 shadow-xs rounded-r-xs">
          <h3 className="font-serif text-xl text-stone-900 mb-4 flex items-center gap-2 font-normal">
            <Sparkles className="w-5 h-5 text-amber-800" />
            Executive Brief: Why Neck Skincare Fails
          </h3>
          <ul className="space-y-3 text-sm text-stone-700 leading-relaxed font-sans">
            <li className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span><strong>Anatomical Vulnerability:</strong> Cervical neck skin has 30% fewer sebaceous (oil) glands and a significantly thinner epidermal barrier than facial skin.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span><strong>The Retinol Paradox:</strong> Potent anti-aging retinoids that firm facial skin frequently trigger severe peeling, redness, and barrier breakdown when applied to the neck.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <span><strong>The "Floating Head" Flaw:</strong> Treating only the face results in a sharp, mismatched border where a glowing face rests atop a creased, sun-damaged neck.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span><strong>The Phototherapy Solution:</strong> Non-thermal 830nm Near-Infrared light penetrates deep into the platysma muscle to rebuild collagen without chemical peeling.</span>
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-6 font-sans">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 first-letter:leading-none">
            In Harley Street consultation rooms, cosmetic dermatologists encounter the same patient complaint every single day: "My face looks 35, but my neck looks 50." This phenomenon—widely known as the <em>Floating Head effect</em>—is the predictable result of treating skincare as a face-only ritual while completely ignoring the neck and décolletage.
          </p>

          <p>
            The skin covering the anterior triangle of your neck is biologically unique. It is less than one-third the thickness of cheek tissue, contains minimal fat cushioning, and possesses virtually no sebaceous glands to maintain a self-hydrating lipid barrier.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            1. The "Tech Neck" Crisis of Modern Life
          </h2>
          <p>
            The human head weighs approximately 5 kilograms in an upright position. When tilting forward at a 45-degree angle to look at smartphones or laptops, the gravitational load exerted on the cervical spine and platysma muscle skyrockets to over 22 kilograms.
          </p>
          <p>
            This continuous mechanical creasing rapidly breaks down elastin strands, forming deep transverse bands (horizontal neck rings) and submental skin laxity ("turkey neck") in individuals as young as 28.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            2. Why Chemical Actives Often Backfire on the Neck
          </h2>
          <p>
            When consumers notice neck wrinkling, their first instinct is often to apply their strongest facial products—such as 1% retinol, glycolic acid, or concentrated vitamin C. On the delicate neck, however, this frequently induces chronic low-grade contact dermatitis.
          </p>
          <p>
            Because the neck skin has fewer lipid-producing glands, harsh exfoliants strip its natural moisture mantle, accelerating collagen fragmentation rather than repairing it.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            3. Near-Infrared Photobiomodulation: The Non-Invasive Cure
          </h2>
          <p>
            This biological sensitivity is precisely why <strong>Near-Infrared (NIR) 830nm light therapy</strong> has become the dermatologist standard for cervical rejuvenation. NIR photons bypass the fragile epidermal layer entirely, delivering cellular energy directly into the fibroblasts of the reticular dermis and the fibers of the platysma muscle.
          </p>
          <p>
            Clinical trials demonstrate up to a <strong>36% increase in cervical collagen density</strong> after 8 weeks of consistent light therapy—with zero peeling, redness, or downtime.
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 pt-6 border-t border-stone-200">
            4. The Legacy Brand Pricing Trap: Avoid Separate Neck Attachments
          </h2>
          <p>
            Frustratingly, 80% of legacy silicone mask brands (such as CurrentBody and Omnilux) only cover the face, forcing consumers to spend an extra £280 to £350 on an awkward, separate neck bib.
          </p>
          <p>
            The newest generation of clinical LED devices integrates a <strong>dedicated, articulated neck and chest panel standard</strong>. By treating both the face and cervical triangle simultaneously with matching irradiance, users achieve a seamless, uniform rejuvenation result from forehead to collarbone.
          </p>
        </div>

        {/* High-Converting Editorial Recommendation Box */}
        <div className="my-12 bg-white border border-stone-300 p-6 sm:p-10 shadow-sm rounded-xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4 text-amber-800" />
            Clinical Dual-Zone Recommendation
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4 leading-snug">
            Buudy 7-Colour LED Mask with Integrated Neck Array
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
            Unlike legacy single-piece masks that stop at the chin, Buudy includes a clinical-grade neck and décolletage shield at no extra cost. Delivering 7 calibrated spectra and deep 830nm NIR restructuring across 400+ precision diodes.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://buudy.com/pages/buudy-led-mask"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-7 py-3.5 text-xs uppercase tracking-widest font-bold transition-all shadow-xs"
            >
              <span>Explore Buudy Face + Neck System</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/best-led-face-mask-uk-2026"
              className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              <span>Read Full LED Ranking</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-[11px] text-stone-400 mt-4">
            Direct clinical pricing • 30-day money-back guarantee • Free UK shipping.
          </p>
        </div>

        {/* Related Articles Footer */}
        <section className="mt-16 pt-10 border-t border-stone-200">
          <h3 className="font-serif text-xl text-stone-900 mb-6">
            Related Investigations from The Edit
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link 
              href="/blog/why-silicone-masks-are-failing"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-red-800 block mb-1">Beauty Tech Expose</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                Why The Flexible Silicone LED Mask Trend Is Failing Patients &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                The optical physics behind why flexible rubber masks scatter light and trap bacteria.
              </p>
            </Link>
            <Link 
              href="/blog/is-near-infrared-safe"
              className="group bg-white border border-stone-200 hover:border-stone-400 p-4 transition-all rounded-xs shadow-xs"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-800 block mb-1">Photobiology Science</span>
              <h4 className="font-serif text-base text-stone-900 group-hover:text-stone-600 transition-colors mb-2">
                Is Near-Infrared (NIR) Light Actually Safe For Daily Facial Use? &rarr;
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2">
                The safety mechanics of invisible 830nm wavelengths and cellular ATP production.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
