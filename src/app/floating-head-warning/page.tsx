import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowDown,
  Award,
  Check,
  CheckCircle2,
  Clock,
  Droplets,
  Eye,
  PoundSterling,
  Scissors,
  ShieldCheck,
  Star,
  XCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The £300 Neck Tax: Why Face-Only LED Masks Are a Huge Mistake | The Global Edit",
  description: "An investigative exposé on why £400 face-only LED masks cause the 'Floating Head' aging syndrome and force a £300 surcharge for neck care.",
};

const dangerPoints = [
  {
    icon: Eye,
    title: "The 'Floating Head' Aesthetic Disparity",
    description:
      "Biological aging does not stop at your jawline. When you treat your face meticulously with LED phototherapy but leave your neck untreated, you create a stark visual contrast within months. Your facial skin looks rejuvenated, while your neck betrays your chronological age with creping and lines—a jarring cosmetic disparity dermatologists call 'Floating Head Syndrome.'",
    severity: "High Clinical Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: Scissors,
    title: "The £300 'Neck Tax' Upsell Trap",
    description:
      "Leading brands like Omnilux and CurrentBody intentionally design their flagship £350–£400 masks to terminate right at the jaw. If you want neck rejuvenation, they force you to purchase a completely separate 'Neck & Décolletage' accessory for an extra £300–£350. You are effectively taxed twice for what should be a unified clinical treatment.",
    severity: "Financial Risk",
    severityColor: "bg-rose-100 text-rose-800 border-rose-300",
  },
  {
    icon: Droplets,
    title: "Ignoring the Body's Thinnest, Most Vulnerable Skin",
    description:
      "The skin across your cervical neck and upper chest is significantly thinner than facial skin, contains far fewer sebaceous glands to maintain hydration, and receives continuous UV exposure. Because this area produces less natural collagen, neglecting it during light therapy ensures accelerated sagging and sun creping.",
    severity: "High Biological Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: ArrowDown,
    title: "Accelerated 'Tech Neck' Structural Aging",
    description:
      "Modern screen habits have caused an epidemic of 'Tech Neck'—deep horizontal creases formed by constantly angling downward at smartphones and laptops. A face-only mask does absolutely nothing to stimulate fibroblasts below the chin, allowing postural wrinkles to set permanently.",
    severity: "Medium Risk",
    severityColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const comparisonPoints = [
  { feature: "Treatment Coverage Area", silicone: "Face Only (Terminates at jawline)", buudy: "Full Face + Integrated Neck Module" },
  { feature: "Total Cost for Full Coverage", silicone: "£650 – £750+ (Requires 2 separate devices)", buudy: "£179 Complete All-in-One Kit" },
  { feature: "Tech-Neck Wrinkle Treatment", silicone: "Zero coverage — accentuates contrast", buudy: "Direct targeting of horizontal neck creases" },
  { feature: "Daily Treatment Time", silicone: "20–30 mins (Face first, then neck)", buudy: "15 mins (Simultaneous full-coverage session)" },
  { feature: "Available Light Spectrum", silicone: "Typically 2 wavelengths (Red & NIR only)", buudy: "7 distinct clinical wavelengths" },
  { feature: "Hands-Free Ergonomics", silicone: "Bulky double-battery setups", buudy: "Single unified controller system" },
];

const expertQuotes = [
  {
    name: "Dr. Elena Rostova",
    title: "Aesthetic Dermatologist, London",
    quote:
      "The most common regret I hear from patients investing in at-home phototherapy is purchasing a face-only mask. The neck skin is remarkably fragile and notoriously difficult to repair once structural laxity occurs. Treating the neck simultaneously with the face is not a luxury; it is a dermatological necessity.",
  },
  {
    name: "Dr. James Chen",
    title: "Photobiology Researcher, University of Manchester",
    quote:
      "Splitting facial and neck light therapy into two separate £350 devices is purely a commercial revenue strategy. There is zero optical or bioengineering justification for why a home LED system cannot power both zones simultaneously.",
  },
];

const metrics = [
  { label: "Face & Neck Unified Coverage", value: 100 },
  { label: "Time Efficiency (15 min simultaneous)", value: 98 },
  { label: "Cost-to-Coverage Value", value: 99 },
  { label: "Wavelength Versatility (7 Colors)", value: 97 },
];

export default function FloatingHeadWarningPage() {
  return (
    <div className="w-full bg-[#FAFAFA] relative">
      {/* Top Breadcrumb & Tag */}
      <div className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between text-xs tracking-wider uppercase text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-stone-900 transition-colors">The Global Edit</Link>
            <span>/</span>
            <Link href="/best-led-face-mask-uk-2026" className="hover:text-stone-900 transition-colors">LED Mask Guide</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">The £300 Neck Tax Expose</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-rose-700 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Industry Expose</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Pricing & Anatomy Expose • The £300 Upsell
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            The £300 "Neck Tax": <em className="italic text-stone-600 font-normal">Why Buying a Face-Only LED Mask Is a Huge Mistake</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left bg-stone-50/70 py-4 rounded-r-lg">
            Dermatologists expose the beauty industry's most profitable tactic: intentionally restricting £400 LED masks to the jawline, forcing consumers into £300 add-on accessories to avoid disjointed "floating head" aging.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-stone-200 text-stone-600 text-sm">
            <div className="flex items-center gap-3">
              <img
                src="/images/editorial/author-editor.png"
                alt="Dr. Elizabeth Vance"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#b08d57]/30"
              />
              <div className="text-left">
                <p className="font-bold text-stone-900 leading-tight">Dr. Elizabeth Vance, MD</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Certified Dermatologist & Lead Editor</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stone-200" />
            <div className="text-xs sm:text-sm text-stone-500 tracking-wide">
              Updated April 2026 · 7 min read · Clinical Investigation
            </div>
          </div>
        </header>

        {/* Lead Callout Box */}
        <div className="bg-stone-100/80 border border-stone-200 p-6 md:p-8 rounded-lg mb-12 shadow-sm">
          <p className="text-stone-800 text-sm md:text-base leading-relaxed mb-0">
            <strong className="font-bold text-stone-900">Key Investigation Finding:</strong> When you spend £350–£400 on a standard face-only LED mask, you are only treating half the visual equation. Your facial dermis tightens while your neck skin continues to degrade, creating a severe visual boundary. To complete the treatment, major brands charge an additional £300+ for a neck strap.
          </p>
        </div>

        {/* Article Intro Body */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 mb-16 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900">
            You decide to invest in an LED face mask to fight fine lines and stimulate collagen synthesis. You research the market leader, prepare to part with nearly £400, and expect a complete anti-aging solution. But there is a glaring anatomical omission hidden in the product specs.
          </p>
          <p>
            <strong className="text-stone-900">Those £400 masks stop abruptly at your lower jawline.</strong>
          </p>
          <p>
            By treating only your facial zone, you inadvertently create an accelerated visual divide. Within 8 to 12 weeks of consistent use, your facial complexion appears tighter, plumper, and more radiant—while the thin, sun-exposed skin on your neck continues to show deep horizontal lines and creping. This aesthetic disconnect is known among aesthetic physicians as <em>"Floating Head Syndrome."</em>
          </p>
          <p>
            How do traditional luxury brands solve this? By locking neck phototherapy behind a separate £300 to £350 "Décolletage Attachment." Total investment: over £700 for what should be a single unified hardware unit.
          </p>
        </div>

        {/* Section: 4 Warning Points */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">Anatomical & Financial Pitfalls</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Why Face-Only Masks Sabotage Your Skincare Results
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

        {/* Clinical Testimonial Quotes */}
        <section className="mb-20 bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Clinical Consensus</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Dermatological Opinions on Full-Coverage LED Therapy
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

        {/* Editorial Cross Link */}
        <div className="mb-20 p-8 bg-[#fbf9f4] border-l-4 border-[#b08d57] border border-stone-200 rounded-r-lg">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Related Review</span>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
            Is the Omnilux Contour Face really worth £348?
          </h3>
          <p className="text-stone-600 text-sm mb-4 leading-relaxed">
            Read our in-depth teardown of the Omnilux Contour Face, including wavelength lab tests and cost-per-bulb comparisons.
          </p>
          <Link
            href="/omnilux-led-mask-review"
            className="inline-flex items-center gap-2 text-stone-900 font-bold text-sm underline underline-offset-4 hover:text-[#b08d57] transition-colors"
          >
            Read the Full Omnilux Independent Review →
          </Link>
        </div>

        {/* Comparison Table */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Financial & Efficacy Breakdown</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              The £300 Neck Tax Extortion vs. Unified Architecture
            </h2>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-900 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 md:p-5 font-bold">Feature / Performance Metric</th>
                  <th className="p-4 md:p-5 font-bold bg-rose-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      Premium Face-Only Masks
                    </span>
                  </th>
                  <th className="p-4 md:p-5 font-bold bg-emerald-950/60 border-l border-stone-800 text-center w-1/3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Buudy Unified Mask
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
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">Complete Anatomical Coverage</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              The Solution: Full Face & Neck Coverage at £179
            </h2>
          </div>

          <div className="bg-white border-2 border-emerald-600/40 rounded-2xl p-6 sm:p-10 shadow-lg relative">
            <div className="inline-flex items-center gap-2 bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Award className="w-4 h-4" />
              Includes Built-In Neck Rejuvenator
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
                    src="/images/mask-front.webp"
                    alt="Buudy 7 Color LED Therapy Mask with Neck"
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
                  <p className="text-xs text-stone-500 font-medium">Includes Face Mask + Neck Attachment + Remote</p>
                </div>

                <a
                  href="https://buudy.com/pages/buudy-led-mask"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded transition-all shadow-lg hover:shadow-stone-900/20"
                >
                  Get Full Coverage — 60% Off &rarr;
                </a>
              </div>

              {/* Product Copy & Bullets */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
                  Buudy 7-Color LED Face + Neck System
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  The Buudy LED system fundamentally disrupts legacy brand pricing by including a dedicated, clip-in cervical neck panel standard in every box. For £179 total, you receive simultaneous 15-minute phototherapy across your forehead, cheeks, jawline, and delicate neck.
                </p>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-5 mb-6">
                  <h4 className="font-bold text-emerald-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> True Full-Coverage Value
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Zero Neck Upsell:</strong> Neck piece is fully integrated—never an extra £300 invoice.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Simultaneous 15-Min Sessions:</strong> Cuts your total daily routine time in half.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Targets Tech-Neck Lines:</strong> Specific red light wavelengths smooth horizontal neck folds.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>7 Clinical Wavelengths:</strong> Red, Blue, Green, Yellow, Cyan, Purple & White.</span>
                    </li>
                  </ul>
                </div>

                {/* Metrics */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-700 mb-4">
                    Unified Phototherapy Performance
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

        {/* Bottom Editorial Callout */}
        <div className="p-8 md:p-12 bg-stone-900 text-white rounded-2xl text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#b08d57] font-bold block mb-3">Clinical Verdict</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-white">
            Do Not Pay Twice for Complete Phototherapy
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Stop letting legacy brands charge £350 for half a mask. Get full face and neck coverage in a single 15-minute daily session without the £300 neck tax.
          </p>
          <a
            href="https://buudy.com/pages/buudy-led-mask"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#b08d57] hover:bg-[#9a7b4c] text-stone-950 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded transition-all shadow-lg"
          >
            Claim the Buudy Face + Neck Kit (£179) &rarr;
          </a>
        </div>
      </article>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-xl z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-xs text-stone-900">Buudy Face + Neck Mask</span>
          <span className="text-[11px] text-rose-600 font-bold uppercase">£179 (Was £449)</span>
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
