import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Award,
  Check,
  CheckCircle2,
  Grid,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  XCircle,
  Zap,
  ZapOff,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The LED Density Scam: Is Your Expensive Mask Actually Treating Nothing? | The Global Edit",
  description: "An optical engineering expose exposing sparse LED bulb counts and facial dead zones in £400 luxury face masks.",
};

const dangerPoints = [
  {
    icon: ZapOff,
    title: "Hidden Bulb Counts in Luxury Marketing",
    description:
      "Many high-end beauty brands intentionally obscure their exact LED bulb count in glossy marketing campaigns. Why? Because manufacturing dense, multi-diode arrays is costly. A mask priced at £400 often houses only 60 to 80 widely spaced LEDs, pocketing the manufacturing savings as pure brand profit.",
    severity: "Transparency Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: Target,
    title: "Facial 'Dead Zones' That Receive Zero Photons",
    description:
      "Low diode density results in wide gaps between individual light sources. When worn, these gaps translate directly to 'dead zones' on your facial epidermis—areas that receive negligible therapeutic light energy. If photons do not physically strike fine lines or blemish sites, cellular photobiomodulation cannot occur.",
    severity: "Efficacy Risk",
    severityColor: "bg-rose-100 text-rose-800 border-rose-300",
  },
  {
    icon: Zap,
    title: "Sub-Clinical Placebo Irradiance Output",
    description:
      "Having a few glowing bulbs is insufficient; LEDs must be packed closely together to generate cumulative therapeutic irradiance (measured in mW/cm²). Sparse arrays drop below the critical threshold required to trigger mitochondrial ATP synthesis, leaving consumers with an expensive visual placebo.",
    severity: "High Clinical Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: XCircle,
    title: "Uneven Collagen Stimulation & Structural Aging",
    description:
      "Wearing a low-density mask means isolated patches of your skin produce new collagen while adjacent untreated areas continue to degrade. Over 6 to 12 months, this patchy cellular stimulation can result in uneven dermal texture and patchy structural elasticity.",
    severity: "Long-Term Risk",
    severityColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const comparisonPoints = [
  { feature: "Total LED Bulb Count", silicone: "Often hidden (typically 60–100 sparse diodes)", buudy: "192 High-Density Precision LEDs" },
  { feature: "Facial Coverage Gaps", silicone: "Large optical dead zones between bulbs", buudy: "Seamless edge-to-edge optical coverage" },
  { feature: "Irradiance Output (mW/cm²)", silicone: "Sub-clinical energy drop in gaps", buudy: "Consistent, lab-verified clinical energy" },
  { feature: "Full Spec Transparency", silicone: "Vague marketing claims", buudy: "100% published diode & power specs" },
  { feature: "Neck Coverage Included", silicone: "Excluded (Costs £300+ extra)", buudy: "Dedicated neck module with high-density array" },
  { feature: "Retail Price", silicone: "£350 – £500+", buudy: "£179 (Direct Manufacturer Pricing)" },
];

const expertQuotes = [
  {
    name: "Dr. David Lin",
    title: "Photobiomodulation Bioengineer & Optical Researcher",
    quote:
      "In phototherapy physics, diode proximity and density are paramount. If light diodes are spaced over an inch apart, the tissue between them receives negligible photonic flux. It does not matter if a mask retails for £500—if the LED density is low, the clinical outcome is severely compromised.",
  },
  {
    name: "Sarah Mitchell",
    title: "Master Clinical Esthetician, London",
    quote:
      "I advise all my clients to ask one crucial question before investing in an LED mask: 'Exactly how many diodes are in the array?' If a brand refuses to clearly state they have over 150 LEDs, they are cutting hardware costs at the expense of your skin.",
  },
];

const metrics = [
  { label: "Diode Density Score (192 LEDs)", value: 99 },
  { label: "Surface Irradiance Uniformity", value: 98 },
  { label: "Mitochondrial ATP Induction", value: 96 },
  { label: "Technical Spec Transparency", value: 100 },
];

export default function LedDensityScamPage() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      {/* Breadcrumb Navigation Strip */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between text-xs tracking-wider uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900 transition-colors">The Global Edit</Link>
            <span>/</span>
            <Link href="/best-led-face-mask-uk-2026" className="hover:text-stone-900 transition-colors">LED Mask Guide</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">The LED Density Scam</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-rose-700 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Optical Density Audit</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Editorial Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Grid className="w-4 h-4 text-rose-600" />
            Bioengineering Expose • Diode Density & Power
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            The LED Density Scam: <em className="italic text-stone-600 font-normal">Is Your Expensive Mask Actually Treating Nothing?</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left bg-stone-50/70 py-4 rounded-r-lg">
            When consumers invest £400 in a luxury LED face mask, they rarely inspect the diode count. Optical bioengineers reveal how sparse 60-bulb arrays create massive "dead zones" that fail to stimulate collagen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-stone-200 text-stone-600 text-sm">
            <div className="flex items-center gap-3">
              <img
                src="/images/editorial/author-editor.png"
                alt="Dr. David Lin"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#b08d57]/30"
              />
              <div className="text-left">
                <p className="font-bold text-stone-900 leading-tight">Dr. David Lin, PhD</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Photobiology Bioengineer & Tech Contributor</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stone-200" />
            <div className="text-xs sm:text-sm text-stone-500 tracking-wide">
              Updated April 2026 · 8 min read · Laboratory Teardown
            </div>
          </div>
        </header>

        {/* Lead Callout Box */}
        <div className="bg-stone-100/80 border border-stone-200 p-6 md:p-8 rounded-lg mb-12 shadow-sm">
          <p className="text-stone-800 text-sm md:text-base leading-relaxed mb-0">
            <strong className="font-bold text-stone-900">Bioengineering Summary:</strong> Light intensity follows the Inverse Square Law and optical dispersion curves. When LEDs are spaced far apart, the skin between the diodes receives sub-therapeutic irradiance. A premium mask must feature at least 150+ tightly configured LEDs to eliminate dead zones and ensure uniform cellular rejuvenation.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 mb-16 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900">
            When you purchase a precision medical device or a high-performance vehicle, technical specifications are front and center. Yet when beauty consumers spend upwards of £400 on a luxury LED face mask, they rarely ask the single most vital question: <strong className="text-stone-900">How many medical-grade LED bulbs are physically installed in the array?</strong>
          </p>
          <p>
            Many well-known brands bury this figure deep in obscure spec sheets or omit it entirely. Because engineering dense, multi-wavelength semiconductor arrays is expensive, several prominent brands rely on sparse layouts of just 60 to 80 weak LEDs to maximize commercial profit margins.
          </p>
          <p>
            The physical consequence is severe: massive optical "dead zones" across your face. Skin located between widely spaced bulbs receives virtually zero therapeutic irradiance. You could be treating your mid-forehead while completely missing the critical crow's feet and nasolabial folds that need phototherapy the most.
          </p>
        </div>

        {/* Section: 4 Warning Points */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">Technical Flaws Exposed</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Why Low Diode Density Causes Treatment Failure
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
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-600" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
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

        {/* Expert Testimonials */}
        <section className="mb-20 bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Bioengineering Perspectives</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              The Physics of Photobiomodulation Density
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertQuotes.map((expert, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between shadow-sm">
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
                <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Editorial Benchmarking</span>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
            See bulb counts across all major 2026 competitors
          </h3>
          <p className="text-stone-600 text-sm mb-4 leading-relaxed">
            Our comprehensive 2026 guide includes high-resolution teardown photographs and measured diode counts for every major mask.
          </p>
          <Link
            href="/best-led-face-mask-uk-2026"
            className="inline-flex items-center gap-2 text-stone-900 font-bold text-sm underline underline-offset-4 hover:text-[#b08d57] transition-colors"
          >
            Explore the 2026 UK LED Mask Benchmark Ranking →
          </Link>
        </div>

        {/* Comparison Table */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Hardware Specification Audit</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Bulb Count & Optical Uniformity Comparison
            </h2>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-900 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 md:p-5 font-bold">Specification</th>
                  <th className="p-4 md:p-5 font-bold bg-rose-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      Sparse 60–80 Bulb Masks
                    </span>
                  </th>
                  <th className="p-4 md:p-5 font-bold bg-emerald-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Buudy 192 LED Array
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

        {/* The Solution Showcase: Buudy 192 LEDs */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">High-Density Engineering</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              The Solution: 192 Medical-Grade LED Array for £179
            </h2>
          </div>

          <div className="bg-white border-2 border-emerald-600/40 rounded-2xl p-6 sm:p-10 shadow-lg relative">
            <div className="inline-flex items-center gap-2 bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Award className="w-4 h-4" />
              192 High-Density Diode Guarantee
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
                    alt="Buudy 192 LED Array"
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
                  <p className="text-xs text-stone-500 font-medium">192 Total Diodes • Zero Dead Zones</p>
                </div>

                <a
                  href="https://buudy.com/pages/buudy-led-mask"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded transition-all shadow-lg hover:shadow-stone-900/20"
                >
                  Get High-Density Results &rarr;
                </a>
              </div>

              {/* Product Details */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
                  Buudy 192-Diode Clinical Phototherapy Array
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Buudy publishes its full technical hardware specifications openly. Packed with a dense matrix of <strong>192 medical-grade LEDs</strong> across both face and neck segments, Buudy completely eliminates optical dead zones, guaranteeing that every millimeter of skin receives clinical-grade photonic irradiance.
                </p>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-5 mb-6">
                  <h4 className="font-bold text-emerald-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> The Density Advantage
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>192 Total Precision Bulbs:</strong> One of the highest density arrays on the UK consumer market.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Zero Optical Dead Zones:</strong> Seamless coverage from upper forehead to clavicle.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Optimal Irradiance:</strong> Delivers sufficient energy to activate mitochondrial ATP repair.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>100% Spec Transparency:</strong> Full disclosure of nanometers, diode counts, and certifications.</span>
                    </li>
                  </ul>
                </div>

                {/* Metrics */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-700 mb-4">
                    Optical Density & Power Benchmarks
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

        {/* Bottom Verdict Box */}
        <div className="p-8 md:p-12 bg-stone-900 text-white rounded-2xl text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#b08d57] font-bold block mb-3">Bioengineering Verdict</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-white">
            Demand High-Density Diodes for Real Cellular Results
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Do not let luxury marketing disguise sparse 60-bulb arrays. Upgrade to the 192-diode Buudy system and ensure every centimeter of your skin receives therapeutic energy.
          </p>
          <a
            href="https://buudy.com/pages/buudy-led-mask"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#b08d57] hover:bg-[#9a7b4c] text-stone-950 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded transition-all shadow-lg"
          >
            Claim the 192-LED Buudy System (£179) &rarr;
          </a>
        </div>
      </article>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-xl z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-xs text-stone-900">Buudy 192-LED Mask</span>
          <span className="text-[11px] text-rose-600 font-bold uppercase">192 LEDs • £179 Today</span>
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
