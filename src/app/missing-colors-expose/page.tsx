import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowDown,
  Award,
  Check,
  CheckCircle2,
  FlaskConical,
  Palette,
  Sparkles,
  Star,
  Stethoscope,
  XCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The 2-Color Trap: Why Your Expensive LED Mask Is Missing Critical Wavelengths | The Global Edit",
  description: "Exposing why £400 LED face masks only offer 2 light colors, leaving acne, rosacea, and hyperpigmentation untreated unless you buy second devices.",
};

const dangerPoints = [
  {
    icon: Palette,
    title: "The 2-Color Commercial Limitation Trap",
    description:
      "Multi-hundred-pound brands like Omnilux and CurrentBody force you into an artificial choice: purchase their 'Anti-Aging' mask (Red light) OR their 'Acne/Blemish' mask (Blue light). Restricting wavelength output to 2 narrow bands is a calculated commercial strategy designed to force multiple expensive hardware purchases for dynamic skin concerns.",
    severity: "High Financial Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: FlaskConical,
    title: "Zero In-Session Defense Against Active Breakouts",
    description:
      "If you buy a £400 Red/NIR mask for collagen synthesis, but suffer a sudden hormonal acne breakout, your device cannot destroy Cutibacterium acnes bacteria. Without the targeted 415nm Blue wavelength, phototherapy cannot reduce active pustules or normalize sebum output.",
    severity: "Critical Clinical Risk",
    severityColor: "bg-rose-100 text-rose-800 border-rose-300",
  },
  {
    icon: ArrowDown,
    title: "No Targeted Relief for Redness & Rosacea",
    description:
      "Millions of UK adults suffer from facial flushing, broken capillaries, and rosacea flare-ups. Red light alone cannot calm superficial vascular congestion effectively. 590nm Yellow light is clinically proven to flush lymphatic toxins and soothe erythema, but legacy brands omit it to cut diode manufacturing costs.",
    severity: "Medium Risk",
    severityColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: XCircle,
    title: "Inability to Target Stubborn Melanin & Dark Spots",
    description:
      "Sun damage, age spots, and post-inflammatory hyperpigmentation respond most effectively to 525nm Green light phototherapy, which disperses concentrated melanin clusters in the basal layer. Standard 2-color masks lack green diodes completely, leaving hyperpigmentation unaddressed.",
    severity: "Medium Risk",
    severityColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const comparisonPoints = [
  { feature: "Therapeutic Wavelengths", silicone: "2 (Typically 633nm Red + 830nm NIR only)", buudy: "7 (Red, Blue, Green, Yellow, Cyan, Purple, White)" },
  { feature: "Active Acne Treatment (415nm)", silicone: "Requires separate £350 'Blemish' mask", buudy: "Included standard in unified controller" },
  { feature: "Redness & Rosacea Calming (590nm)", silicone: "Not supported (Sub-optimal)", buudy: "Dedicated clinical Yellow Light spectrum" },
  { feature: "Dark Spot & Melanin Fading (525nm)", silicone: "Not supported", buudy: "Dedicated Green Light pigment mode" },
  { feature: "Total Cost For Full Spectrum", silicone: "£700+ (Buying Anti-Aging + Acne devices)", buudy: "£179 (All 7 wavelengths in 1 device)" },
  { feature: "Neck Coverage Included", silicone: "No (Separate £300+ add-on)", buudy: "Yes (Built-in neck panel included)" },
];

const expertQuotes = [
  {
    name: "Dr. Sarah Jenkins",
    title: "Clinical Aesthetician & Phototherapist, London",
    quote:
      "Human skin is not a static organ. You may need collagen stimulation on Monday, but acne bacteria suppression on Thursday if stress causes a flare-up. Locking a client into a £400 device that only emits two wavelengths is an outdated, restrictive approach to skincare.",
  },
  {
    name: "Dr. Michael Thorne",
    title: "Laser & Light Therapy Specialist, Edinburgh",
    quote:
      "The multi-spectrum LED chips used in modern medical equipment can easily emit 7 therapeutic wavelengths. The reason legacy brands restrict their consumer masks to 2 colors is strictly commercial: they want to sell you a second blemish mask for £350.",
  },
];

const wavelengths = [
  { color: "Red Light (630nm)", function: "Stimulates deep collagen synthesis, plumps fine lines, and accelerates cellular repair.", bg: "bg-rose-50 border-rose-200 text-rose-900" },
  { color: "Blue Light (415nm)", function: "Destroys acne-causing P. acnes bacteria in pores and balances sebum.", bg: "bg-blue-50 border-blue-200 text-blue-900" },
  { color: "Green Light (525nm)", function: "Breaks down hyperpigmentation clusters, fades dark spots, and evens skin tone.", bg: "bg-emerald-50 border-emerald-200 text-emerald-900" },
  { color: "Yellow Light (590nm)", function: "Improves lymphatic drainage, flushes toxins, and calms persistent facial redness/rosacea.", bg: "bg-amber-50 border-amber-200 text-amber-900" },
  { color: "Cyan Light (490nm)", function: "Soothes swollen, irritated skin and reduces micro-capillary inflammation.", bg: "bg-cyan-50 border-cyan-200 text-cyan-900" },
  { color: "Purple Light (390nm)", function: "Combines red and blue wavelengths to treat active acne while repairing post-acne scars.", bg: "bg-purple-50 border-purple-200 text-purple-900" },
  { color: "White Light (510nm)", function: "Deep penetrating full-spectrum energy that boosts overall skin metabolism.", bg: "bg-stone-100 border-stone-300 text-stone-900" },
];

const metrics = [
  { label: "Spectrum Versatility Score", value: 100 },
  { label: "Acne & Bacteria Neutralization", value: 97 },
  { label: "Collagen Induction Efficiency", value: 98 },
  { label: "Hyperpigmentation Fading Power", value: 95 },
];

export default function MissingColorsExposePage() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      {/* Top Navigation Strip */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between text-xs tracking-wider uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900 transition-colors">The Global Edit</Link>
            <span>/</span>
            <Link href="/best-led-face-mask-uk-2026" className="hover:text-stone-900 transition-colors">LED Mask Guide</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">The 2-Color Trap</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-700 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Wavelength Spectrum Report</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Editorial Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Palette className="w-4 h-4 text-amber-600" />
            Optical Spectrum Investigation • 2 Colors vs 7 Colors
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            The 2-Color Trap: <em className="italic text-stone-600 font-normal">Why Your £400 LED Mask Only Does 30% of the Job</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left bg-stone-50/70 py-4 rounded-r-lg">
            Legacy beauty brands charge upwards of £400 for masks that only emit Red and Near-Infrared light. Why are they omitting Blue, Green, and Yellow wavelengths? To force you into purchasing multiple devices.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-stone-200 text-stone-600 text-sm">
            <div className="flex items-center gap-3">
              <img
                src="/images/editorial/author-editor.png"
                alt="Dr. Sarah Jenkins"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#b08d57]/30"
              />
              <div className="text-left">
                <p className="font-bold text-stone-900 leading-tight">Dr. Sarah Jenkins</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Clinical Aesthetician & Phototherapy Contributor</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stone-200" />
            <div className="text-xs sm:text-sm text-stone-500 tracking-wide">
              Updated April 2026 · 7 min read · Hardware Breakdown
            </div>
          </div>
        </header>

        {/* Lead Callout Box */}
        <div className="bg-stone-100/80 border border-stone-200 p-6 md:p-8 rounded-lg mb-12 shadow-sm">
          <p className="text-stone-800 text-sm md:text-base leading-relaxed mb-0">
            <strong className="font-bold text-stone-900">Key Takeaway:</strong> Skin concerns change weekly—ranging from fine lines to hormonal breakouts, redness, and sun damage. A 2-color Red/NIR mask cannot treat acne bacteria (requires 415nm Blue) or break down dark spot melanin (requires 525nm Green). Multi-spectrum 7-color masks deliver complete dermatological flexibility without duplicate purchases.
          </p>
        </div>

        {/* Intro Body */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 mb-16 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900">
            The biggest household names in LED phototherapy—brands commanding between £350 and £500 per unit—are intentionally curtailing your skin's therapeutic potential. If you inspect the hardware specifications of their best-selling masks, you will notice a stark limitation: <strong className="text-stone-900">they only offer 2 light wavelengths.</strong>
          </p>
          <p>
            Why does this matter? Because facial skin is a dynamic biological ecosystem. While 630nm Red light is exceptional for fibroblast stimulation and collagen synthesis, it possesses zero antimicrobial properties against <em>Cutibacterium acnes</em>. If you wake up with active blemishes or hormonal pustules, your £400 'Anti-Aging' mask is virtually ineffective.
          </p>
          <p>
            Legacy brands capitalize on this limitation by selling a separate 'Blemish & Clarifying' mask (with blue light) for another £350. By artificially restricting their hardware, they trap customers in a cycle of paying over £700 for basic wavelength coverage.
          </p>
        </div>

        {/* Section: 4 Warning Points */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">The Hidden Consequences</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              4 Ways a 2-Color Limitation Compromises Your Skin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dangerPoints.map((point, idx) => {
              const IconComp = point.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${point.severityColor}`}>
                        {point.severity}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: The Full 7-Wavelength Breakdown */}
        <section className="mb-20 bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Clinical Photobiology</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3">
              The Complete 7-Wavelength Therapeutic Spectrum
            </h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Each distinct nanometer wavelength penetrates to a specific cellular depth to trigger targeted biological mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wavelengths.map((w, idx) => (
              <div key={idx} className={`p-5 rounded-xl border ${w.bg}`}>
                <h4 className="font-bold text-sm mb-1.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {w.color}
                </h4>
                <p className="text-xs leading-relaxed opacity-90">{w.function}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Testimonials */}
        <section className="mb-20 bg-white border border-stone-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Expert Opinions</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              What Clinical Phototherapists Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertQuotes.map((expert, idx) => (
              <div key={idx} className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed italic mb-6">
                    "{expert.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-stone-900 text-white font-serif font-bold flex items-center justify-center text-xs shrink-0">
                    {expert.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold text-xs text-stone-900">{expert.name}</p>
                    <p className="text-[11px] text-stone-500 leading-tight">{expert.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Cross-Link */}
        <div className="mb-20 p-8 bg-[#fbf9f4] border-l-4 border-[#b08d57] border border-stone-200 rounded-r-lg">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Editorial Guide</span>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
            See how the top 5 UK masks compare on spectrum versatility
          </h3>
          <p className="text-stone-600 text-sm mb-4 leading-relaxed">
            Read our lab ranking of CurrentBody, Omnilux, Dr. Dennis Gross, Shark, and Buudy to discover which devices provide full wavelength coverage.
          </p>
          <Link
            href="/best-led-face-mask-uk-2026"
            className="inline-flex items-center gap-2 text-stone-900 font-bold text-sm underline underline-offset-4 hover:text-[#b08d57] transition-colors"
          >
            Read the 2026 UK LED Mask Definitive Ranking →
          </Link>
        </div>

        {/* Comparison Table */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Spectrum Comparison</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Paying More for Fewer Therapeutic Modes
            </h2>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-900 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 md:p-5 font-bold">Feature / Capability</th>
                  <th className="p-4 md:p-5 font-bold bg-rose-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      Standard 2-Color Masks
                    </span>
                  </th>
                  <th className="p-4 md:p-5 font-bold bg-emerald-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Buudy 7-Color Mask
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-stone-50/60"}>
                    <td className="p-4 md:p-5 font-semibold text-stone-900">{row.feature}</td>
                    <td className="p-4 md:p-5 bg-rose-50/30 border-l border-stone-100 text-stone-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.silicone}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-5 bg-emerald-50/40 border-l border-stone-100 font-medium text-emerald-950">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.buudy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Solution Showcase */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">Complete 7-in-1 Clinical Arsenal</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              The Solution: All 7 Medical-Grade Wavelengths for £179
            </h2>
          </div>

          <div className="bg-white border-2 border-emerald-600/40 rounded-2xl p-6 sm:p-10 shadow-lg relative">
            <div className="inline-flex items-center gap-2 bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Award className="w-4 h-4" />
              Full-Spectrum Phototherapy System
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Product Visual */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <a
                  href="https://buudy.com/pages/buudy-led-mask"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full overflow-hidden rounded-xl border border-stone-200 group mb-6 shadow-md"
                >
                  <img
                    src="/images/mask-leds.webp"
                    alt="Buudy 7 Color LED Therapy Mask Wavelength Array"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 bg-stone-50"
                  />
                </a>

                <div className="text-center w-full mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl font-extrabold text-stone-900">£179</span>
                    <span className="text-lg text-stone-400 line-through">£449</span>
                    <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2 py-0.5 rounded uppercase">Save 60%</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 font-medium">Over 16,000 Verified 5-Star Reviews</p>
                </div>

                <a
                  href="https://buudy.com/pages/buudy-led-mask"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded transition-all shadow-lg hover:shadow-stone-900/20"
                >
                  Unlock All 7 Colors Now &rarr;
                </a>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
                  Buudy 7-Color LED Therapy Mask
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Buudy refuses to limit your skin treatment options. By integrating 7 clinical nanometer wavelengths into a single precision-engineered device, Buudy adapts dynamically to wrinkles, active acne, redness, hyperpigmentation, and cellular rejuvenation without requiring a second £350 purchase.
                </p>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-5 mb-6">
                  <h4 className="font-bold text-emerald-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> The Full-Spectrum Advantage
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Red (630nm):</strong> Clinical collagen stimulation & deep wrinkle smoothing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Blue (415nm):</strong> Rapidly destroys P. acnes bacteria and calms breakouts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Green (525nm):</strong> Fades stubborn sun spots & balances uneven melanin.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Yellow (590nm):</strong> Flushes toxins and relieves persistent rosacea flushing.</span>
                    </li>
                  </ul>
                </div>

                {/* Metrics */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-700 mb-4">
                    Clinical Performance Benchmarks
                  </h4>
                  <div className="space-y-3">
                    {metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                          <span>{m.label}</span>
                          <span>{m.value}%</span>
                        </div>
                        <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${m.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Verdict */}
        <div className="p-8 md:p-12 bg-stone-900 text-white rounded-2xl text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#b08d57] font-bold block mb-3">Editorial Conclusion</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-white">
            Choose Full-Spectrum Versatility Over Arbitrary Limitations
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Do not pay £400 for a mask that only treats one skin symptom. Upgrade to the 7-color Buudy LED mask and enjoy clinic-level phototherapy for every skin need.
          </p>
          <a
            href="https://buudy.com/pages/buudy-led-mask"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#b08d57] hover:bg-[#9a7b4c] text-stone-950 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded transition-all shadow-lg"
          >
            Claim 60% Off at Buudy Official Store &rarr;
          </a>
        </div>
      </article>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-xl z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-xs text-stone-900">Buudy 7-Color LED Mask</span>
          <span className="text-[11px] text-rose-600 font-bold uppercase">7 Colors • £179 Today</span>
        </div>
        <a
          href="https://buudy.com/pages/buudy-led-mask"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-900 text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap"
        >
          Shop Now &rarr;
        </a>
      </div>
    </div>
  );
}
