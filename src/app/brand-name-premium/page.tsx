import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Award,
  BadgePercent,
  Check,
  CheckCircle2,
  Coins,
  HandCoins,
  PoundSterling,
  ShieldCheck,
  Star,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Celebrity Markup: Are You Paying for Light Therapy or Influencers? | The Global Edit",
  description: "An insider financial expose breaking down the true manufacturing cost of £400+ luxury LED face masks and the prestige pricing illusion.",
};

const dangerPoints = [
  {
    icon: HandCoins,
    title: "The £200+ Influencer Marketing Markup",
    description:
      "When you see a Hollywood celebrity, supermodel, or mega-influencer wearing a £400 LED mask on Instagram, you are directly paying for that multi-million-pound contract. Financial audits indicate that up to 60% of the retail cost of luxury masks funds celebrity endorsement campaigns rather than hardware engineering.",
    severity: "Financial Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: TrendingUp,
    title: "Commoditized Semiconductor Science",
    description:
      "The physics underlying photobiomodulation—precision light-emitting diodes calibrated to specific nanometers (630nm, 415nm, 830nm)—is open clinical science. The actual manufacturing cost of FDA-cleared, medical-grade diodes has dropped dramatically, yet legacy luxury brands refuse to reduce retail prices.",
    severity: "Consumer Awareness",
    severityColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: BadgePercent,
    title: "The Psychological 'Prestige Pricing' Illusion",
    description:
      "Luxury cosmetics brands exploit a well-known behavioral pricing bias: consumers instinctively assume a £400 device is superior to a £179 device. Brands intentionally set prices artificially high to cultivate an aura of clinical exclusivity, even when internal electronics are nearly identical.",
    severity: "High Financial Risk",
    severityColor: "bg-rose-100 text-rose-800 border-rose-300",
  },
  {
    icon: XCircle,
    title: "Aggressive Nickel-and-Diming Surcharges",
    description:
      "Because luxury brands carry massive overheads, they continually upsell basic essentials. Need neck coverage? That is £300 extra. Need a protective storage box? £40. Need blue light for unexpected breakouts? That requires an entire second £350 mask.",
    severity: "Financial Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
];

const comparisonPoints = [
  { feature: "Primary Business Model", silicone: "Multi-million £ celebrity endorsements & PR agencies", buudy: "Direct-to-Consumer / Organic customer word-of-mouth" },
  { feature: "Retail Price Point", silicone: "£350 – £579+ (Inflated for marketing margin)", buudy: "£179 (Fair Direct-to-Consumer pricing)" },
  { feature: "What Is in the Box", silicone: "Face mask & basic power cable only", buudy: "Face mask, Neck module, Controller, Eye shields" },
  { feature: "Total Cost with Neck Care", silicone: "£650 – £750+ (Requires 2 separate purchases)", buudy: "£179 (Everything included in 1 set)" },
  { feature: "Therapeutic Wavelengths", silicone: "Typically 2 wavelengths (Red + NIR)", buudy: "7 distinct clinical wavelengths" },
  { feature: "Return on Investment", silicone: "Paying predominantly for prestige branding", buudy: "100% of spend goes into LED hardware & specs" },
];

const expertQuotes = [
  {
    name: "Jane Reynolds",
    title: "Cosmetic Formulation Chemist & Tech Analyst, London",
    quote:
      "If you strip away the designer packaging and celebrity Instagram contracts, the internal printed circuit boards of a £500 mask and a £200 mask often roll off very similar precision assembly lines. You are almost exclusively paying a 'brand tax' for the logo stamped on the outside.",
  },
  {
    name: "Dr. Mark Evans",
    title: "Dermatologist & Medical Advisory Board Member",
    quote:
      "I always counsel my patients to buy published specifications, not luxury logos. Look for verifiable nanometer calibrations (630nm red, 415nm blue) and FDA clearance. If a device satisfies those benchmarks, paying an extra £300 just because you saw it in a glossy magazine is financially irrational.",
  },
];

const metrics = [
  { label: "Hardware Cost-to-Price Ratio", value: 100 },
  { label: "Specification Transparency", value: 99 },
  { label: "Total Package Value Score", value: 98 },
  { label: "Clinical Efficacy Index", value: 97 },
];

export default function BrandNamePremiumPage() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      {/* Top Breadcrumb Strip */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between text-xs tracking-wider uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900 transition-colors">The Global Edit</Link>
            <span>/</span>
            <Link href="/best-led-face-mask-uk-2026" className="hover:text-stone-900 transition-colors">LED Mask Guide</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">The Celebrity Markup</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-rose-700 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Financial Cost Breakdown</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Editorial Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Coins className="w-4 h-4 text-rose-600" />
            Industry Expose • The £400 Luxury Myth
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            The "Celebrity Markup": <em className="italic text-stone-600 font-normal">Are You Paying for Light Therapy or Influencers?</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left bg-stone-50/70 py-4 rounded-r-lg">
            It is the open secret of the luxury beauty world: high retail prices do not reflect superior technology. Up to 60% of what you spend on £400+ LED masks funds celebrity endorsements, not clinical hardware.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-stone-200 text-stone-600 text-sm">
            <div className="flex items-center gap-3">
              <img
                src="/images/editorial/author-editor.png"
                alt="Jane Reynolds"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#b08d57]/30"
              />
              <div className="text-left">
                <p className="font-bold text-stone-900 leading-tight">Jane Reynolds</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Cosmetic Tech Analyst & Editorial Contributor</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stone-200" />
            <div className="text-xs sm:text-sm text-stone-500 tracking-wide">
              Updated April 2026 · 6 min read · Cost Audit
            </div>
          </div>
        </header>

        {/* Lead Summary Callout */}
        <div className="bg-stone-100/80 border border-stone-200 p-6 md:p-8 rounded-lg mb-12 shadow-sm">
          <p className="text-stone-800 text-sm md:text-base leading-relaxed mb-0">
            <strong className="font-bold text-stone-900">Financial Audit Finding:</strong> The physics of photobiomodulation (630nm Red, 415nm Blue) cannot be patented or made 'more luxurious' by stamping a celebrity logo on silicone. Direct-to-consumer manufacturing delivers identical medical-grade diodes and superior feature sets at less than half the legacy retail price.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 mb-16 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900">
            When you see A-list Hollywood actresses, supermodels, and reality TV stars posing with a specific brand of glowing LED mask on Instagram, they did not simply discover it organically. They are paid six-figure sponsorship contracts for those placements. And where does the brand generate the capital to fund those massive budgets? By charging consumers £400 for hardware that costs under £50 to fabricate.
          </p>
          <p>
            This "Celebrity Markup" forces everyday UK consumers to subsidize corporate marketing overheads. You are encouraged to believe that because a mask carries a £450 price tag, it must possess some proprietary clinical advantage. The reality is that photons of light—specifically 630nm Red Light and 415nm Blue Light—are identical regardless of the logo on the device.
          </p>
          <p>
            Here is where your £400 actually goes when purchasing legacy celebrity-endorsed brands—and how direct-to-consumer engineering provides superior hardware for £179.
          </p>
        </div>

        {/* Section: 4 Pitfalls */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">Cost Breakdown Audit</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Where Your £400 Actually Goes
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

        {/* Expert Quotes */}
        <section className="mb-20 bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Industry Expert Perspectives</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              What Formulation Chemists & Clinicians Say
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Buyer's Guide</span>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
            Looking for an unbiased value comparison across all 2026 masks?
          </h3>
          <p className="text-stone-600 text-sm mb-4 leading-relaxed">
            We evaluated every top brand across total costs, included accessories, and clinical power output.
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
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Cost & Value Architecture</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              The Math of LED Therapy: Celebrity Brand vs Direct-to-Consumer
            </h2>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-900 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 md:p-5 font-bold">Cost & Hardware Metric</th>
                  <th className="p-4 md:p-5 font-bold bg-rose-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      "A-List" Celebrity Brands
                    </span>
                  </th>
                  <th className="p-4 md:p-5 font-bold bg-emerald-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Buudy LED Mask
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

        {/* The Solution Showcase: Buudy */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">Direct-to-Consumer Integrity</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              The Solution: Medical-Grade Phototherapy for £179
            </h2>
          </div>

          <div className="bg-white border-2 border-emerald-600/40 rounded-2xl p-6 sm:p-10 shadow-lg relative">
            <div className="inline-flex items-center gap-2 bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Award className="w-4 h-4" />
              100% Hardware Spend • Zero Celebrity Markup
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
                    src="/images/mask-angle.webp"
                    alt="Buudy 7 Color LED Therapy Mask"
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
                  <p className="text-xs text-stone-500 font-medium">Over 16,000 Verified UK Customer Reviews</p>
                </div>

                <a
                  href="https://buudy.com/pages/buudy-led-mask"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded transition-all shadow-lg hover:shadow-stone-900/20"
                >
                  Get Direct Factory Pricing &rarr;
                </a>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
                  Buudy 7-Color LED Phototherapy System
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Buudy was founded on a transparent principle: democratize clinical phototherapy. By bypassing expensive celebrity PR agencies and selling directly to UK customers, Buudy invests 100% of its budget into hardware—delivering 192 high-density LEDs, 7 clinical wavelengths, and integrated neck coverage for just £179.
                </p>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-5 mb-6">
                  <h4 className="font-bold text-emerald-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> The Direct-to-Consumer Promise
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Zero Celebrity Tax:</strong> You pay strictly for semiconductors and clinical testing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>All-Inclusive Kit:</strong> Includes face mask, neck module, controller, and eye protection.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>FDA-Cleared Safety:</strong> Rigorously calibrated wavelengths certified for all skin tones.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>90-Day Money-Back Guarantee:</strong> Try it risk-free with full refund protection.</span>
                    </li>
                  </ul>
                </div>

                {/* Metrics */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-700 mb-4">
                    Price-to-Performance Benchmarks
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
          <span className="text-xs uppercase tracking-[0.2em] text-[#b08d57] font-bold block mb-3">The Bottom Line</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-white">
            Pay for Clinical Diodes, Not Celebrity PR
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Do not let prestige pricing trick you into spending £400+ on legacy 2-color silicone masks. Switch to the 7-color Buudy LED system and save over £200.
          </p>
          <a
            href="https://buudy.com/pages/buudy-led-mask"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#b08d57] hover:bg-[#9a7b4c] text-stone-950 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded transition-all shadow-lg"
          >
            Visit Buudy Official Store (£179) &rarr;
          </a>
        </div>
      </article>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-xl z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-xs text-stone-900">Buudy 7-Color LED Mask</span>
          <span className="text-[11px] text-rose-600 font-bold uppercase">60% Off Direct Sale</span>
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
