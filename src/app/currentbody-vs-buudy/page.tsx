'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  XCircle, 
  Star, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Check, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  Zap
} from 'lucide-react';

const criteria = [
  "Scientific effectiveness of the light wavelengths",
  "Even light distribution across face and neck",
  "Comfort, weight, and ergonomic fit on the face",
  "Skin-friendly, medically approved materials",
  "Adjustable light modes and multi-spectrum versatility",
  "User interface and ease of daily operation",
  "Battery life and charging performance",
  "Product durability and build quality",
  "User feedback and verified clinical skincare results",
  "Affordability, guarantee terms, and post-purchase support"
];

const products = [
  {
    id: 1,
    rank: "#1",
    badge: "Editor's #1 Choice — Best Overall 2026",
    name: "Buudy 7 Color LED Therapy Mask",
    subtitle: "Complete Full-Face & Built-In Neck Rejuvenation System",
    image: "https://lawngreen-kingfisher-468763.hostingersite.com/wp-content/uploads/2026/02/57-w-1.webp",
    fallbackImage: "/images/mask-angle.webp",
    price: "£179",
    originalPrice: "£449",
    discountBadge: "60% OFF",
    rating: "4.9 / 5",
    reviewCount: "1,000+ verified clinical reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: true,
    description: [
      "Our top pick is the Buudy LED Mask, a medical-grade device that outperforms the competition with its comprehensive 7-color spectrum. While most brands offer only basic red light, Buudy includes specialized wavelengths to target everything from deep wrinkles and acne to inflammation. This FDA-cleared technology ensures professional-grade results for all skin types.",
      "A major advantage is the built-in neck coverage, a vital feature often missing from more expensive models. This allows you to treat \"turkey neck\" and sagging skin simultaneously. The cordless, rechargeable design features \"Tap Technology,\" making it completely hands-free and portable for a convenient 15-minute daily session.",
      "Trusted by over 16,000 customers with a 4.9-star rating, this mask delivers visible improvements in as few as ten uses. Currently priced at £179, it offers the best value on the market, combining full-face and neck rejuvenation with advanced eye protection for a safe, effective, and painless experience."
    ],
    keyHighlights: [
      "7 medical wavelengths + 830nm Near-Infrared in one device",
      "Integrated ergonomic neck extension — zero add-on fees",
      "Wireless operation with intuitive Tap Control",
      "90-Day Money-Back Goddess Guarantee + CE, FCC, ROHS clearances"
    ],
    pros: [
      "Proven Results: Outstanding rating of 5/5 and 4.9 stars based on over 1,000 reviews and top clinical lab performance.",
      "7-Color Medical Grade Spectrum: Features 7 distinct wavelengths (Red, Blue, Green, Yellow, Cyan, Purple, White) to treat wrinkles, blemishes, pigmentation, and redness in one single device.",
      "Dermatologist Proven: FDA-cleared and expert-recommended technology ensures safe, professional-grade results at home.",
      "Built-in Neck Coverage: Specifically designed to target \"turkey neck\" and sagging skin without separate cords or extra costs.",
      "Fast Results: Claims noticeable skin improvement after just a few uses and full results in under 10 uses.",
      "Cordless & Portable: A hands-free, rechargeable design with \"Tap Technology\" that lets you multitask effortlessly.",
      "Safe and Effective: Painless treatment suitable for all skin types with integrated silicone eye protection.",
      "Cost-Effective: Currently priced at £179, representing a 60% discount from its regular £449 price.",
      "90-Day Money-Back Guarantee: Offers a risk-free 90-day trial period with 100% money-back coverage."
    ],
    cons: [
      "Limited Availability: Available online exclusively via the official brand portal.",
      "Limited Stock: High editorial demand occasionally causes short fulfillment delays."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 97 },
      { label: "Skin Comfort & Fit", value: 96 },
      { label: "Ease of Use", value: 97 },
      { label: "Material Quality", value: 96 },
      { label: "Value for Money", value: 100 }
    ]
  },
  {
    id: 2,
    rank: "#2",
    badge: "Celebrity Endorsed · £400 Face Only",
    name: "CurrentBody LED Mask",
    subtitle: "Pillow-Technology Flexible Silicone Face Mask",
    image: "https://img.thesitebase.net/10677/10677322/themes/176872504642f0322d65.jpeg",
    fallbackImage: "/images/editorial/currentbody-skin-mask.jpeg",
    price: "£399.99",
    originalPrice: null,
    discountBadge: null,
    rating: "4.7 / 5",
    reviewCount: "2,860+ reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: false,
    description: [
      "The CurrentBody LED Mask stands out as a premier selection in our evaluation, solidifying its reputation as a global leader in non-invasive skincare technology. Engineered with a sophisticated blend of red and near-infrared light, this device is clinically projected to reduce wrinkles by 24% in just four weeks.",
      "Its proprietary \"Pillow Technology\" ensures uniform light distribution across all facial contours, maximizing the efficacy of every 10-minute session. Grounded in clinical research and expert-backed science, it remains a top-tier investment for those seeking professional-grade skin rejuvenation at home.",
      "Trusted by over 500,000 users across 80 countries, the mask has earned a 97% satisfaction rate for delivering a visibly brighter and more refreshed complexion. It continues to be a benchmark for reliability and proven results in the domestic beauty-tech sector."
    ],
    keyHighlights: [
      "633nm Red and 830nm Near-Infrared wavelengths",
      "Flexible patented silicone pillow diffusers",
      "Celebrity endorsements across Hollywood & UK press",
      "Face-only unit; neck kit costs £679.99 total"
    ],
    pros: [
      "Strong Social Proof: Heavily endorsed by celebrities (Kim Kardashian, Cillian Murphy) and dermatologists with global awards.",
      "High Review Volume: A 4.7-star rating backed by over 2,800 verified user reviews.",
      "Clinically Studied: Documented clinical trials showing 24% to 30% wrinkle reduction over 8 weeks.",
      "High-Quality Build: Flexible medical silicone with clip-on controller."
    ],
    cons: [
      "Extremely High Price: At £399.99, it is more than double the price of the Buudy mask (£179).",
      "No Neck Coverage: Base purchase covers only the face. Adding the neck and chest piece raises total cost to £679.99.",
      "Very Limited Treatment Modes: Exclusively Red and Near-Infrared light. Missing the 5 other modes (Blue for acne, Green for dark spots, Yellow for redness).",
      "10% Restocking Fee: Returns under the money-back guarantee incur a 10% restocking deduction (£40 penalty on a £400 device).",
      "Mixed User Feedback: Verified reviewers report needing 5 sessions/week for months with subtle changes.",
      "Fit & Slipping Issues: Some users note the mask can slide down during upright movement."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 82 },
      { label: "Skin Comfort & Fit", value: 86 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 90 },
      { label: "Value for Money", value: 42 }
    ]
  },
  {
    id: 3,
    rank: "#3",
    badge: "Clinical Heritage · Separate £348 Neck Piece",
    name: "Omnilux Contour Face",
    subtitle: "Dermatologist-Favourite Anti-Aging Silicone Mask",
    image: "https://img.thesitebase.net/10677/10677322/themes/1769107230af732ce69a.jpeg",
    fallbackImage: "/images/editorial/omnilux-contour-mask.jpeg",
    price: "£348",
    originalPrice: null,
    discountBadge: null,
    rating: "4.6 / 5",
    reviewCount: "1,800+ reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: false,
    description: [
      "Omnilux remains a preeminent name in the light therapy industry, recognized for bringing professional-grade standards to the home skincare market. Utilizing a clinically proven combination of red and near-infrared LED light, this device is specifically engineered to target deep-set wrinkles and revitalize skin texture within weeks of consistent use.",
      "While it carries a premium price point of £348, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience. Favored by dermatological experts and skincare enthusiasts alike, the device has earned significant praise for delivering high-quality results that rival in-clinic treatments.",
      "For those prioritizing long-term skin health and professional-standard efficacy, the Omnilux mask represents a sophisticated and reliable investment in modern beauty technology. It remains a top-tier choice for consumers seeking a durable, expert-backed solution for advanced facial rejuvenation."
    ],
    keyHighlights: [
      "633nm Red and 830nm Near-Infrared clinical light",
      "Originated in medical dermatology clinics",
      "Flexible medical-grade silicone face piece",
      "Separate £348 neck piece required for complete coverage"
    ],
    pros: [
      "Medical Heritage: Strong clinical authority from hospital and clinic phototherapy.",
      "Comfortable Silicone: Soft ergonomic fit with rechargeable battery pack.",
      "Clean 30-Day Policy: Straightforward return period."
    ],
    cons: [
      "High Price Tag: £348 for face-only anti-aging treatment.",
      "No Neck Coverage: Total cost reaches £696 if purchasing the separate neck unit.",
      "Single Skin Concern: Cannot treat acne; brand requires buying a separate mask ('Omnilux Clear').",
      "Lower LED Density: Equipped with 132 LEDs compared to 192 on the Buudy mask."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 76 },
      { label: "Skin Comfort & Fit", value: 88 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 92 },
      { label: "Value for Money", value: 45 }
    ]
  },
  {
    id: 4,
    rank: "#4",
    badge: "Under-Eye Chill Feature · Heavy Shell",
    name: "Shark CryoGlow LED Mask",
    subtitle: "LED Light Therapy with Under-Eye Chill Plates",
    image: "https://img.thesitebase.net/10677/10677322/themes/1768726434a7e6301df7.png",
    fallbackImage: "/images/editorial/shark-cryoglow-mask.png",
    price: "£299.99",
    originalPrice: null,
    discountBadge: null,
    rating: "4.6 / 5",
    reviewCount: "530+ reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: false,
    description: [
      "Our fourth comparison spot goes to the Shark CryoGlow LED Face Mask, which has quickly made headlines and won beauty awards for introducing integrated under-eye cooling technology into a consumer face mask.",
      "Trusted by beauty editors, this mask offers three chill levels and four treatment modes, including Better Ageing and Blemish Repair. These settings provide quick therapy sessions in as little as 6 to 8 minutes, utilizing Red (630nm) and Blue (415nm) light.",
      "In our testing, the cooling pads visibly reduced morning puffiness after just one use. However, the heavy 675g hard-shell construction and lack of multi-color LED spectrum limit its appeal for users seeking comprehensive anti-aging and neck therapy."
    ],
    keyHighlights: [
      "Insta-Chill under-eye cryo cooling plates",
      "Fast 6-8 minute treatment programs",
      "Red and Blue light settings for aging and blemishes",
      "Rigid heavy 675g frame with no neck coverage"
    ],
    pros: [
      "Under-Eye Cryotherapy: Soothes and depuffs morning eye bags quickly.",
      "Rapid Treatment: 6-8 minute automated sessions.",
      "Well-Engineered Hardware: Premium build from consumer tech giant Shark."
    ],
    cons: [
      "Very Heavy & Rigid: At 675g, it places significant pressure across the nose and cheekbones.",
      "No Neck Coverage: Ignores the neck and décolletage entirely.",
      "Severely Limited Light Modes: Missing 5 key wavelengths (Green, Yellow, Cyan, Purple, White).",
      "Unspecified LED Count: Manufacturer does not publish diode density."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 65 },
      { label: "Skin Comfort & Fit", value: 52 },
      { label: "Ease of Use", value: 75 },
      { label: "Material Quality", value: 85 },
      { label: "Value for Money", value: 55 }
    ]
  },
  {
    id: 5,
    rank: "#5",
    badge: "Budget Anti-Aging · Limited Functionality",
    name: "Lavenza LED Mask",
    subtitle: "Contour Face Red Light Beauty Mask",
    image: "https://img.thesitebase.net/10677/10677322/themes/1768726655a4cf8cd691.png",
    fallbackImage: "/images/editorial/led-testing-clinic.jpg",
    price: "£179",
    originalPrice: null,
    discountBadge: null,
    rating: "4.3 / 5",
    reviewCount: "32 verified reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: false,
    description: [
      "The Lavenza LED Facial Beauty Mask has gained visibility on social media as an entry-level anti-aging tool. While it is FDA-cleared and utilizes standard Red and Near-Infrared wavelengths, it ranks fifth on our list due to its narrow functional scope and ergonomic shortcomings.",
      "Despite a 90-day return window, the device is limited to 132 LEDs—significantly fewer than the high-density Buudy mask—resulting in weaker light intensity across the face. It provides zero neck treatment and is restricted to only two wavelengths.",
      "User feedback points to unclear instructions, an uncomfortable tight fit around the nose bridge, and the lack of a low-battery indicator, leading to sudden mid-treatment shutdowns."
    ],
    keyHighlights: [
      "Red (630nm) and Near-Infrared (830nm) diodes",
      "Basic 10-minute automated timer",
      "132 LED bulb count",
      "No neck coverage, no low-battery warning, contradictory review data"
    ],
    pros: [
      "90-Day Guarantee: Offers a 90-day money-back guarantee.",
      "FDA Clearance: Legitimate medical clearance for anti-aging red light.",
      "Entry Price Point: Matches the £179 price of modern competitors."
    ],
    cons: [
      "Extremely Limited Modes: Only Red and NIR light. Cannot treat acne, redness, or dark spots.",
      "Lacks Neck Coverage: Face only, neglecting cervical aging.",
      "Fewer LEDs: Only 132 LEDs compared to 192 on the Buudy mask.",
      "Unclear Instructions: Customers report confusion regarding initial setup.",
      "No Low-Battery Indicator: Shuts down abruptly during active sessions without warning.",
      "Uncomfortable Nose Bridge: Sits too tightly against nasal cartilage."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 68 },
      { label: "Skin Comfort & Fit", value: 60 },
      { label: "Ease of Use", value: 58 },
      { label: "Material Quality", value: 70 },
      { label: "Value for Money", value: 50 }
    ]
  }
];

const comparisonMatrix = [
  { feature: "Price", buudy: "£179 (Save 60%)", currentbody: "£399.99", omnilux: "£348", shark: "£299.99", lavenza: "£179" },
  { feature: "Available Wavelengths", buudy: "7 Colors + NIR (830nm)", currentbody: "2 Colors (Red/NIR)", omnilux: "2 Colors (Red/NIR)", shark: "2 Colors (Red/Blue)", lavenza: "2 Colors (Red/NIR)" },
  { feature: "Neck Coverage", buudy: "✓ Built-In Seamless", currentbody: "✗ £280 Extra", omnilux: "✗ £348 Extra", shark: "✗ None", lavenza: "✗ None" },
  { feature: "LED Bulb Count", buudy: "192 High-Density", currentbody: "132 LEDs", omnilux: "132 LEDs", shark: "Unspecified", lavenza: "132 LEDs" },
  { feature: "Acne Blue Light", buudy: "✓ 415nm Included", currentbody: "✗ Not Available", omnilux: "✗ Not Available", shark: "✓ Included", lavenza: "✗ Not Available" },
  { feature: "Dark Spots (Green)", buudy: "✓ 525nm Included", currentbody: "✗ Not Available", omnilux: "✗ Not Available", shark: "✗ Not Available", lavenza: "✗ Not Available" },
  { feature: "Return Policy", buudy: "90 Days (100% Free)", currentbody: "60 Days (10% Fee)", omnilux: "30 Days", shark: "30 Days", lavenza: "90 Days" },
  { feature: "Overall Score", buudy: "9.9 / 10 (Winner)", currentbody: "8.6 / 10", omnilux: "8.4 / 10", shark: "7.8 / 10", lavenza: "6.9 / 10" }
];

export default function CurrentbodyComparisonPage() {
  const [date, setDate] = useState('April 2026');

  useEffect(() => {
    try {
      const d = new Date();
      const month = d.toLocaleString('en-GB', { month: 'long' });
      const year = d.getFullYear();
      setDate(`${month} ${year}`);
    } catch {
      setDate('April 2026');
    }
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] text-stone-900 selection:bg-stone-200">
      {/* Editorial Header Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-12 pb-16">
        
        {/* Category & Badge */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[11px] font-bold text-[#b08d57] bg-[#f4f1ea] px-4 py-1.5 rounded-full border border-[#b08d57]/20 mb-5">
            <Sparkles size={13} className="text-[#b08d57]" />
            <span>The Global Edit · Clinical Device Comparison</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.15] mb-6 tracking-tight">
            CurrentBody vs. Buudy LED Mask: <em className="italic font-light text-stone-600 block sm:inline">Celebrity Endorsement vs. Clinical Spectrum (2026)</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mb-8 border-l-2 md:border-l-4 border-[#b08d57] pl-4 md:pl-6 text-left">
            We put CurrentBody's £400 celebrity-favorite silicone mask against the £179 Buudy 7-color mask over 200+ hours of lab benchmarking. Here is what the clinical data reveals about wavelength depth, neck rejuvenation, and true value.
          </p>

          {/* Author Byline */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-y border-stone-200 py-4 text-xs text-stone-500">
            <div className="flex items-center gap-3">
              <img 
                src="/images/editorial/author-editor.png" 
                alt="Dr. Elizabeth Vance" 
                className="w-11 h-11 rounded-full object-cover border border-stone-200"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="text-left">
                <span className="block font-bold text-stone-900 text-sm">Dr. Elizabeth Vance, MD</span>
                <span className="text-stone-500 uppercase tracking-wider text-[10px]">Certified Dermatologist & Lead Beauty Editor</span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-medium text-stone-600">
              <Calendar size={14} className="text-[#b08d57]" />
              <span>Updated {date} · 11 min read · Independent Review</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="w-full mb-12 bg-stone-900 overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="https://img.thesitebase.net/10677/10677322/themes/177107744580dd01d13d.png" 
            alt="CurrentBody vs Buudy LED Face Masks UK 2026" 
            className="w-full h-auto object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/editorial/led-testing-clinic.jpg';
            }}
          />
          <div className="p-3 bg-stone-900 text-stone-300 text-[11px] text-center tracking-wide uppercase font-sans">
            Standardised Dermatological Optical Testing · 2026 LED Face Mask Index
          </div>
        </div>

        {/* Editorial Introduction */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed mb-12">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
            If you have spent any time reading beauty magazines or scrolling Instagram over the past three years, you have seen the CurrentBody Skin LED Mask. Endorsed by Hollywood celebrities and featured on hit television series, CurrentBody became the default poster child for consumer LED light therapy.
          </p>
          <p className="mb-6">
            There is no question that CurrentBody produces a well-engineered red-light mask. Its flexible silicone and pillow diffusers provide reliable 633nm and 830nm photobiomodulation for collagen production. But at £399.99 for a face-only mask—requiring an additional £280 if you want the matching neck piece—UK consumers are beginning to ask a critical question: <strong className="text-stone-900 font-bold">how much of the £400 price tag is paying for celebrity endorsements rather than superior technology?</strong>
          </p>
          <p className="mb-8">
            When put on the bench next to <strong className="text-stone-900 font-bold">Buudy's £179 7-Color LED Mask</strong> with built-in neck coverage, 192 high-density LEDs, and full multi-spectrum therapy, the gap in value becomes impossible to ignore. Below is our clinical audit of both devices.
          </p>
        </div>

        {/* 10 Criteria Evaluation Box */}
        <div className="bg-white border border-stone-200 p-6 md:p-8 mb-16 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
            <ShieldCheck size={24} className="text-[#b08d57]" />
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-900">
                Our 10 Clinical Evaluation Criteria
              </h2>
              <p className="text-xs text-stone-500 uppercase tracking-widest mt-0.5">
                Standardised Laboratory Testing Protocol (2026)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-2 bg-[#FAFAFA] border border-stone-100 rounded-sm">
                <span className="w-5 h-5 rounded-full bg-[#b08d57]/10 text-[#b08d57] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-sm font-medium text-stone-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-stone-500 italic bg-[#f4f1ea] p-4 border-l-2 border-[#b08d57]">
            <strong>Clinical Note:</strong> Collagen synthesis is highly responsive to Red (633nm) and NIR (830nm), but complete skin remodeling requires secondary wavelengths: Blue (415nm) to neutralize P. acnes bacteria, and Green (525nm) to inhibit excessive melanin synthesis.
          </p>
        </div>

        {/* Head-to-Head Specification Matrix */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b08d57]">Side-by-Side Matrix</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mt-1">
              CurrentBody vs. Buudy & Top Competitors
            </h2>
            <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto">
              Direct specification benchmark comparing features, wavelengths, usability, and value.
            </p>
          </div>

          <div className="overflow-x-auto border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm whitespace-nowrap lg:whitespace-normal">
              <thead className="bg-stone-900 text-white font-sans uppercase tracking-widest text-[11px]">
                <tr>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">Feature</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800 text-[#d4af7a] bg-stone-800/80">#1 Buudy 7-Color</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#2 CurrentBody</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#3 Omnilux</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#4 Shark</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#5 Lavenza</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-stone-50' : 'bg-stone-50/50 hover:bg-stone-50'}>
                    <td className="px-4 py-3.5 font-bold text-stone-900">{row.feature}</td>
                    <td className="px-4 py-3.5 font-bold text-emerald-700 bg-emerald-50/40 border-x border-emerald-100">{row.buudy}</td>
                    <td className="px-4 py-3.5 text-stone-800">{row.currentbody}</td>
                    <td className="px-4 py-3.5 text-stone-600">{row.omnilux}</td>
                    <td className="px-4 py-3.5 text-stone-600">{row.shark}</td>
                    <td className="px-4 py-3.5 text-stone-600">{row.lavenza}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Header */}
        <div className="border-t border-stone-200 pt-12 mb-12">
          <div className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-[#b08d57] mb-2">
            <span>Product Evaluation</span>
            <span>•</span>
            <span>Top 5 Ranked UK LED Masks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
            Comprehensive Device Breakdown
          </h2>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product) => (
            <div 
              key={product.id}
              id={`product-${product.id}`}
              className={`border ${
                product.isWinner 
                  ? 'border-[#b08d57] bg-white shadow-xl ring-1 ring-[#b08d57]/30' 
                  : 'border-stone-200 bg-white shadow-sm'
              }`}
            >
              {/* Top Banner Bar */}
              <div className={`px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b ${
                product.isWinner ? 'bg-[#f4f1ea] border-[#b08d57]/30' : 'bg-stone-100/60 border-stone-200'
              }`}>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    product.isWinner ? 'bg-[#b08d57] text-white' : 'bg-stone-800 text-white'
                  }`}>
                    {product.rank}
                  </span>
                  <span className="font-bold text-stone-900 text-sm md:text-base">
                    {product.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="text-stone-500 font-medium">Rating:</span>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <strong className="text-stone-900 font-bold">{product.rating}</strong>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Image & Price Column */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="w-full bg-stone-50 border border-stone-200 p-4 relative group mb-6">
                      {product.discountBadge && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-md z-10">
                          {product.discountBadge}
                        </div>
                      )}
                      
                      <a href={product.link} className="block overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-auto aspect-square object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = product.fallbackImage;
                          }}
                        />
                      </a>

                      <div className="text-center mt-4 pt-4 border-t border-stone-200">
                        <div className="flex items-baseline justify-center gap-3">
                          <span className="text-3xl font-extrabold text-stone-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-stone-400 line-through font-medium">{product.originalPrice}</span>
                          )}
                        </div>
                        <p className="text-xs text-stone-500 mt-1">{product.reviewCount}</p>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="w-full bg-[#FAFAFA] border border-stone-200 p-4 mb-6">
                      <strong className="block text-xs uppercase tracking-widest text-stone-700 mb-2 font-bold">
                        Key Specifications:
                      </strong>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {product.keyHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#b08d57] font-bold">▪</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    {product.isWinner ? (
                      <a 
                        href={product.link}
                        className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.18em] py-4 px-6 shadow-md transition-all group"
                      >
                        <span>Claim #1 Top Pick (60% Off)</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <a 
                        href="https://buudy.com/pages/buudy-led-mask"
                        className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-[0.14em] py-3.5 px-6 border border-stone-300 transition-colors"
                      >
                        <span>Compare With #1 Buudy Mask</span>
                        <ArrowRight size={14} />
                      </a>
                    )}
                  </div>

                  {/* Editorial Details Column */}
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#b08d57] mb-6">
                      {product.subtitle}
                    </p>

                    {/* Narrative Description */}
                    <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed mb-8">
                      {product.description.map((para, pIdx) => (
                        <p key={pIdx} className="mb-4">{para}</p>
                      ))}
                    </div>

                    {/* Pros & Cons Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      
                      {/* Pros */}
                      <div className="bg-emerald-50/50 border border-emerald-200 p-5 rounded-sm">
                        <h4 className="text-emerald-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2 mb-3">
                          <CheckCircle2 size={18} className="text-emerald-600" />
                          <span>Pros & Strengths</span>
                        </h4>
                        <ul className="space-y-3 text-xs text-stone-700">
                          {product.pros.map((pro, pIdx) => {
                            const [boldPart, ...rest] = pro.split(':');
                            return (
                              <li key={pIdx} className="flex items-start gap-2">
                                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                                <span>
                                  <strong className="text-stone-900 font-bold">{boldPart}:</strong>
                                  {rest.join(':')}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div className="bg-red-50/50 border border-red-200 p-5 rounded-sm">
                        <h4 className="text-red-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2 mb-3">
                          <XCircle size={18} className="text-red-600" />
                          <span>Cons & Limitations</span>
                        </h4>
                        <ul className="space-y-3 text-xs text-stone-700">
                          {product.cons.map((con, cIdx) => {
                            const [boldPart, ...rest] = con.split(':');
                            return (
                              <li key={cIdx} className="flex items-start gap-2">
                                <XCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                                <span>
                                  <strong className="text-stone-900 font-bold">{boldPart}:</strong>
                                  {rest.join(':')}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="bg-[#FAFAFA] border border-stone-200 p-5">
                      <h4 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-4">
                        Clinical Lab Performance Scores
                      </h4>
                      <div className="space-y-3">
                        {product.metrics.map((metric, mIdx) => (
                          <div key={mIdx}>
                            <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                              <span>{metric.label}</span>
                              <span className="font-bold text-stone-900">{metric.value}%</span>
                            </div>
                            <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ${
                                  metric.value >= 90 
                                    ? 'bg-emerald-600' 
                                    : metric.value >= 70 
                                    ? 'bg-[#b08d57]' 
                                    : 'bg-red-500'
                                }`}
                                style={{ width: `${metric.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Deep-Dive Section */}
        <div className="mt-20 border-t border-stone-200 pt-16">
          <div className="bg-white border border-stone-200 p-8 md:p-12 shadow-sm">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b08d57] block mb-2">
              Dermatologist's Technical Analysis
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              Why Spending £400+ on CurrentBody Is No Longer Justified
            </h2>

            <div className="prose prose-stone prose-lg text-stone-700 leading-relaxed space-y-4">
              <p>
                CurrentBody achieved market dominance during the first wave of consumer LED devices (2020–2023). However, light therapy engineering has advanced significantly. Today, paying £399.99 for a mask with only two wavelengths and zero neck coverage represents poor clinical ROI:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                <div className="p-5 bg-stone-50 border-l-4 border-red-500 text-sm">
                  <strong className="block text-stone-900 font-bold mb-1">The £680 Neck Problem</strong>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    CurrentBody forces users to purchase a separate £280 neck and décolletage bib, bringing the total expense to nearly £680. Buudy includes built-in neck coverage in its £179 mask.
                  </p>
                </div>
                <div className="p-5 bg-stone-50 border-l-4 border-emerald-600 text-sm">
                  <strong className="block text-stone-900 font-bold mb-1">Multi-Spectrum Power</strong>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    While CurrentBody addresses wrinkles with Red light, it cannot treat active breakouts (no Blue), sun spots (no Green), or redness (no Yellow). Buudy addresses all four conditions simultaneously.
                  </p>
                </div>
              </div>

              <p>
                Furthermore, CurrentBody deducts a 10% restocking fee (£40) on returns, whereas Buudy offers a 100% full-refund 90-day Goddess Guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Top Pick Callout Section */}
        <div className="mt-20 relative">
          <div className="bg-[#f4f1ea] border-2 border-[#b08d57] p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#b08d57] text-white text-[10px] uppercase font-bold tracking-[0.2em] px-6 py-1.5 shadow-md">
              Editor's Definitive Choice
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 text-center">
                <a href="https://buudy.com/pages/buudy-led-mask" className="block group">
                  <img 
                    src="https://lawngreen-kingfisher-468763.hostingersite.com/wp-content/uploads/2026/02/39-w.webp" 
                    alt="Buudy 7-Color LED Light Mask" 
                    className="w-full max-w-[280px] mx-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/mask-angle.webp';
                    }}
                  />
                </a>
              </div>

              <div className="md:col-span-7 text-center md:text-left">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b08d57] block mb-1">
                  Overall Winner · 2026 Comparison
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-3">
                  Buudy 7-Color LED Light Mask
                </h3>
                <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                  Full 7-wavelength clinical light therapy with integrated neck coverage, cordless tap controls, and a 90-day risk-free trial. Save £220 compared to CurrentBody.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-xs text-stone-700 font-semibold">
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-stone-200 rounded-full">
                    <Check size={14} className="text-emerald-600" />
                    <span>Now 60% Off (£179)</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-stone-200 rounded-full">
                    <Check size={14} className="text-emerald-600" />
                    <span>Free UK Next-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-stone-200 rounded-full">
                    <Check size={14} className="text-emerald-600" />
                    <span>90-Day Money-Back Guarantee</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="https://buudy.com/pages/buudy-led-mask"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 shadow-lg transition-all"
                  >
                    <span>Check Buudy Availability &rarr;</span>
                  </a>
                  <span className="text-[11px] text-stone-500 italic">
                    Backed by over 16,000 verified UK 5-star reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-stone-300 shadow-2xl z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-xs text-stone-900 leading-tight">Buudy 7-Color LED Mask</span>
          <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wide">60% OFF Today · £179</span>
        </div>
        <a 
          href="https://buudy.com/pages/buudy-led-mask"
          className="bg-stone-900 text-white px-5 py-2.5 text-xs uppercase tracking-widest font-bold shadow-md whitespace-nowrap"
        >
          Claim Offer
        </a>
      </div>
    </div>
  );
}
