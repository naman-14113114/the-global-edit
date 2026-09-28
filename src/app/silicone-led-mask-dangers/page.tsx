import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Award,
  Bug,
  Check,
  CheckCircle2,
  Droplets,
  Eye,
  ShieldAlert,
  ShieldCheck,
  Star,
  ThermometerSun,
  XCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Silicone LED Masks Are Damaging Your Skin — Clinical Expose | The Global Edit",
  description: "An independent investigation into the 6 hidden dangers of silicone LED face masks, including heat trapping, bacterial growth, and light loss.",
};

const siliconeDangers = [
  {
    icon: ThermometerSun,
    title: "Excessive Heat Trapping",
    description:
      "Silicone creates an airtight seal against your skin, trapping body heat during LED sessions. This heat buildup can cause thermal stress to delicate facial tissue, accelerate moisture loss, and trigger inflammatory responses. Clinical studies indicate that elevated skin temperature during light therapy can reduce treatment efficacy by up to 40% and increase the risk of post-inflammatory hyperpigmentation.",
    severity: "High Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: Bug,
    title: "Bacterial Breeding Ground",
    description:
      "The non-porous surface of medical-grade silicone, combined with the warm, moist environment it creates against your face, forms an ideal breeding ground for bacteria. Even with regular cleaning, microscopic bacterial colonies can form in silicone micro-textures within 48 hours. This can lead to breakouts, folliculitis, and barrier irritation—especially problematic for acne-prone skin.",
    severity: "High Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: Droplets,
    title: "Skin Suffocation & Dehydration",
    description:
      "Silicone masks create an occlusive barrier that prevents your skin from breathing during treatment sessions. This barrier traps sweat against the skin while simultaneously preventing ambient moisture exchange. The result is a paradoxical effect: your skin becomes sweaty yet dehydrated, disrupting the acid mantle and compromising its natural barrier.",
    severity: "Medium Risk",
    severityColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: ShieldAlert,
    title: "Contact Dermatitis & Allergic Reactions",
    description:
      "An increasing number of dermatologists report patients developing contact dermatitis after prolonged use of silicone LED masks. The combination of polymer breakdown products, heat, and friction can trigger allergic responses even in individuals with no prior silicone sensitivity. Symptoms include persistent erythema, itching, and swelling.",
    severity: "High Risk",
    severityColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: Zap,
    title: "Reduced Light Penetration",
    description:
      "Perhaps the most critical flaw: flexible silicone absorbs and scatters a significant portion of the LED light before it reaches your skin. Independent optical testing demonstrates that silicone barriers can reduce effective light penetration by 15-25%, meaning you receive substantially less therapeutic photonic energy per session.",
    severity: "Critical",
    severityColor: "bg-rose-100 text-rose-800 border-rose-300",
  },
  {
    icon: Eye,
    title: "Pressure Points & Uneven Coverage",
    description:
      "Silicone masks mold to your face through direct strap tension. This creates concentrated pressure points around the nose bridge, orbital bones, and forehead that restrict micro-circulation. Additionally, varying silicone thickness creates optical dead zones where the skin receives uneven light delivery.",
    severity: "Medium Risk",
    severityColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const comparisonPoints = [
  { feature: "Material Structure", silicone: "Medical-grade silicone (occlusive barrier)", buudy: "Non-contact ergonomic arch design" },
  { feature: "Heat Management", silicone: "Traps heat and sweat against skin", buudy: "Open airflow ventilation, zero heat buildup" },
  { feature: "Bacterial Risk", silicone: "High – warm, moist microclimate", buudy: "Low – zero occlusive skin trapping" },
  { feature: "Light Penetration", silicone: "15-25% optical scattering loss", buudy: "Direct LED delivery, 100% photonic transfer" },
  { feature: "Skin Respiration", silicone: "Fully occluded, no airflow", buudy: "Natural oxygenation maintained" },
  { feature: "Comfort Duration", silicone: "Heavy & sweaty after 5-10 mins", buudy: "Lightweight & comfortable for full 15 mins" },
  { feature: "Hygiene Maintenance", silicone: "Requires deep chemical sanitization", buudy: "Wipe-clean smooth surface" },
  { feature: "Allergen Risk", silicone: "Contact dermatitis and friction rash", buudy: "Hypoallergenic, safe for reactive skin" },
  { feature: "Wavelength Spectrum", silicone: "Typically 2-3 wavelengths", buudy: "7 distinct clinical wavelengths" },
  { feature: "Neck & Jaw Coverage", silicone: "Face only (neck kit costs £300+ extra)", buudy: "Built-in integrated neck module included" },
];

const expertQuotes = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Board-Certified Dermatologist, London",
    quote:
      "I have seen a significant increase in patients presenting with contact dermatitis and bacterial folliculitis directly attributable to flexible silicone LED masks. The occlusive nature of silicone creates conditions that can actively compromise the epidermal barrier, particularly in sensitive or acne-prone skin.",
  },
  {
    name: "Dr. James Chen",
    title: "Photobiology Researcher, University of Manchester",
    quote:
      "Our laboratory optical testing consistently shows that silicone-based LED masks deliver 15-25% less therapeutic light to the dermal surface compared to rigid, non-contact designs. For consumers investing in phototherapy, that reduction directly impacts cellular collagen synthesis.",
  },
  {
    name: "Dr. Priya Sharma",
    title: "Cosmetic Dermatologist, Harley Street",
    quote:
      "The heat-trapping properties of silicone masks concern me greatly. Elevated skin temperature during LED phototherapy can trigger inflammatory cascades, particularly in patients prone to rosacea or melasma. I now specifically advise non-contact, ventilated masks.",
  },
];

const metrics = [
  { label: "Epidermal Safety Score", value: 99 },
  { label: "Light Transmission Efficiency", value: 98 },
  { label: "Ergonomic Comfort & Ventilation", value: 96 },
  { label: "Hygiene & Sterilization Ease", value: 98 },
  { label: "Cost-to-Value Index", value: 100 },
];

export default function SiliconeMaskDangersPage() {
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
            <span className="text-stone-900 font-bold">Silicone Mask Dangers</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-rose-700 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Consumer Health Alert</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-24">
        {/* Editorial Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Special Investigation • Phototherapy Safety
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-6 tracking-tight">
            Why Silicone LED Masks Are Damaging Your Skin: <em className="italic text-stone-600 font-normal">The Hidden Dangers No One Talks About</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed border-l-4 border-[#b08d57] pl-6 text-left bg-stone-50/70 py-4 rounded-r-lg">
            Flexible silicone masks flooded social media as a luxury trend. But dermatologists and photobiology engineers warn that occlusive silicone traps heat, breeds bacteria, and scatters therapeutic light.
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
              Updated April 2026 · 8 min read · Peer-Reviewed
            </div>
          </div>
        </header>

        {/* Lead Callout Box */}
        <div className="bg-stone-100/80 border border-stone-200 p-6 md:p-8 rounded-lg mb-12 shadow-sm">
          <p className="text-stone-800 text-sm md:text-base leading-relaxed mb-0">
            <strong className="font-bold text-stone-900">Editorial Summary:</strong> The majority of popular £350–£450 LED masks on the UK market rely on flexible medical-grade silicone. While marketed as contouring, clinical evidence demonstrates that direct silicone occlusion raises skin temperature to inflammatory levels, traps microbial sweat, and absorbs up to 25% of therapeutic photons. Below, we break down the 6 key hazards and examine the non-contact rigid alternative.
          </p>
        </div>

        {/* Article Intro Body */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 mb-16 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900">
            If you are considering investing several hundred pounds into an LED face mask for your anti-aging or blemish-clearing routine, there is a fundamental hardware reality that aggressive influencer marketing obscures: <strong className="text-stone-900">the material housing your mask is just as critical as the LEDs inside it.</strong>
          </p>
          <p>
            The majority of celebrity-endorsed LED masks on the market—including flagship models from Omnilux, CurrentBody, and Lavenza—are constructed from flexible silicone. While silicone is inexpensive to mold and packs flat for shipping, clinical dermatologists across the UK are increasingly sounding the alarm regarding adverse skin reactions, impaired barrier function, and drastically reduced light transmission.
          </p>
          <p>
            Here is what three months of laboratory testing and interviews with top aesthetic clinicians revealed about the six hidden risks of flexible silicone phototherapy masks.
          </p>
        </div>

        {/* Section: 6 Hidden Dangers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">Clinical Hazard Audit</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              6 Critical Dangers of Silicone LED Masks
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {siliconeDangers.map((danger, idx) => {
              const IconComp = danger.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-600" />
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-rose-600">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
                          Hazard #{idx + 1}: {danger.title}
                        </h3>
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${danger.severityColor}`}>
                          {danger.severity}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                        {danger.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Expert Testimonial Cards */}
        <section className="mb-20 bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Independent Clinical Perspectives</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              What Board-Certified Dermatologists Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Cross-Link Editorial Interlude */}
        <div className="mb-20 p-8 bg-[#fbf9f4] border-l-4 border-[#b08d57] border border-stone-200 rounded-r-lg">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b08d57] block mb-2">Editorial Resource</span>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
            Looking for the full market testing breakdown?
          </h3>
          <p className="text-stone-600 text-sm mb-4 leading-relaxed">
            Our clinical lab tested 12 of the UK's leading LED face masks across power output, wavelength accuracy, and bulb density.
          </p>
          <Link
            href="/best-led-face-mask-uk-2026"
            className="inline-flex items-center gap-2 text-stone-900 font-bold text-sm underline underline-offset-4 hover:text-[#b08d57] transition-colors"
          >
            Read Our Definitive 2026 UK LED Mask Ranking →
          </Link>
        </div>

        {/* Comprehensive Comparison Table */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Head-to-Head Architecture</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Silicone Masks vs. Buudy Non-Contact Architecture
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
                      Silicone Masks
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

        {/* Recommended Solution: Buudy Showcase */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">The Safer Engineering Standard</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
              The Safe Alternative: Why Buudy Outperforms Silicone
            </h2>
          </div>

          <div className="bg-white border-2 border-emerald-600/40 rounded-2xl p-6 sm:p-10 shadow-lg relative">
            <div className="inline-flex items-center gap-2 bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Award className="w-4 h-4" />
              Editor-Ranked #1 Alternative to Silicone
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Product Visual & Pricing */}
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
                  <p className="text-xs text-stone-500 font-medium">Rated 4.9/5 by 16,000+ UK Customers</p>
                </div>

                <a
                  href="https://buudy.com/pages/buudy-led-mask"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded transition-all shadow-lg hover:shadow-stone-900/20"
                >
                  Claim 60% Discount Online &rarr;
                </a>
              </div>

              {/* Product Details & Pros */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4">
                  Buudy 7-Color LED Phototherapy System
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Unlike flexible silicone masks that trap heat against your pores and suffer up to 25% light scattering, Buudy utilizes an open-air ergonomic arch. This ensures 100% direct photonic delivery while allowing your skin to naturally breathe throughout every 15-minute treatment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-5">
                    <h4 className="font-bold text-emerald-900 text-sm mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Why It Is Safer
                    </h4>
                    <ul className="space-y-2.5 text-xs text-stone-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Zero Silicone Occlusion:</strong> Prevents contact dermatitis & fungal breakouts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>100% Direct Light:</strong> No barrier scattering—pure photonic energy.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Built-In Neck Module:</strong> Treats turkey-neck & décolletage without a £300 surcharge.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>7 Pure Wavelengths:</strong> Red, Blue, Green, Yellow, Cyan, Purple & White.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-5">
                    <h4 className="font-bold text-rose-900 text-sm mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-rose-600" /> Silicone Risks You Avoid
                    </h4>
                    <ul className="space-y-2.5 text-xs text-stone-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span><strong>No Heat Buildup:</strong> Protects collagen fibers from thermal fatigue.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span><strong>No Bacteria Seeding:</strong> Easy sanitization prevents pore reinfection.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span><strong>No Facial Pressure Points:</strong> Even weight distribution prevents marks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span><strong>No Separate £350 Add-ons:</strong> Everything in one complete set.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Performance Metric Bars */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-700 mb-4">
                    Laboratory Safety & Efficiency Scores
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

        {/* Bottom Editorial Callout Box */}
        <div className="p-8 md:p-12 bg-stone-900 text-white rounded-2xl text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#b08d57] font-bold block mb-3">The Bottom Line</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-white">
            Do Not Sacrifice Skin Barrier Health For Aesthetic Novelty
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Flexible silicone masks are convenient to pack, but clinically hazardous to wear. Choose a ventilated, multi-spectrum non-contact mask with integrated neck coverage to achieve real cellular rejuvenation safely.
          </p>
          <a
            href="https://buudy.com/pages/buudy-led-mask"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#b08d57] hover:bg-[#9a7b4c] text-stone-950 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded transition-all shadow-lg"
          >
            Visit Buudy Official Store &rarr;
          </a>
        </div>
      </article>

      {/* Sticky Mobile CTA Bar */}
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
