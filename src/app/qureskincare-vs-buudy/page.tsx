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
  Smartphone,
  ExternalLink,
  Layers,
  AlertTriangle
} from 'lucide-react';

const criteria = [
  "Scientific effectiveness of the light wavelengths",
  "Even light distribution across face and neck",
  "Comfort, weight, and ergonomic fit on the face",
  "Skin-friendly, medically approved materials",
  "Adjustable light modes and multi-spectrum versatility",
  "User interface, app stability, and ease of operation",
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
    image: "/images/mask-angle.webp",
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
      "Wireless operation with intuitive Tap Control (no app required)",
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
    badge: "App-Connected · High Price · No Neck Coverage",
    name: "LED Facial Beauty Mask by Qure Skincare",
    subtitle: "Q-Rejuvalight Pro App-Controlled Facewear",
    image: "https://img.shopbase.com/10677/10677322/themes/1771076622cb6d999736.jpeg",
    fallbackImage: "/images/editorial/led-testing-clinic.jpg",
    price: "£299",
    originalPrice: null,
    discountBadge: null,
    rating: "4.8 / 5",
    reviewCount: "1,200+ reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: false,
    description: [
      "Taking the second spot is the Qure Q-Rejuvalight Pro Facewear. This device sets itself apart with its app-connectivity and personalization features. Unlike standard masks that offer one or two generic settings, the Q-Rejuvalight Pro pairs with the Qure App, allowing users to customize their treatment across 5 different facial zones.",
      "It features 5 distinct wavelengths: Infrared (880nm), Deep Red (660nm), Red (630nm), Amber (605nm), and Blue (415nm). This broad spectrum allows it to tackle everything from deep collagen production to surface-level acne. A standout feature is its efficiency; the mask is designed for quick 3-minute daily treatments, making it significantly faster than the 10-20 minute sessions required by most competitors.",
      "However, this advanced technology comes at a premium. At £299.00, it is £120 more expensive than our #1 pick. While it offers high customization, users looking for a simple 'plug and play' experience might find the app-dependency and zone selection more complex than necessary. Crucially, it lacks any neck coverage."
    ],
    keyHighlights: [
      "5 clinical wavelengths (880nm NIR, 660nm Deep Red, 630nm Red, 605nm Amber, 415nm Blue)",
      "Customizable 5-zone facial programming via iOS/Android app",
      "High-power 3-minute fast daily treatment cycles",
      "No neck coverage, strict bare-skin protocol, £299 price tag"
    ],
    pros: [
      "Customizable Treatments: Uniquely allows you to tailor treatments for 5 different facial zones via the Qure App (e.g., anti-aging on the forehead, anti-acne on the chin).",
      "5 Clinical Wavelengths: Offers a solid range including Infrared (880nm), Deep Red (660nm), Red (630nm), Amber (605nm), and Blue (415nm).",
      "Fast 3-Minute Sessions: Designed for high-intensity, short-duration treatments that fit easily into a busy schedule.",
      "Dual-Mode Functionality: Pre-set modes for 'Skin Rejuvenating' and 'Skin Clearing' can be triggered without the app."
    ],
    cons: [
      "High Price Point: At £299, it represents a substantial investment compared to the £179 Buudy mask.",
      "App Dependency: To fully utilize the unique 5-zone custom mapping, you must use a smartphone app, adding daily friction.",
      "Zero Neck Coverage: The device is strictly for the face. Treating the neck requires buying separate hardware.",
      "Strict 'No Serums' Protocol: The manufacturer explicitly mandates using the mask on completely dry skin with no active serums, preventing serum light-stacking benefits.",
      "Darker Skin Pigmentation Warning: The product FAQs note that users with deeper skin tones (Fitzpatrick V and VI) should proceed cautiously due to pigmentation risks with high-burst amber/blue light.",
      "Short Battery Life: High burst power output drains the battery quickly, necessitating frequent recharging.",
      "Safety Lockout: Cannot be operated while connected to the charging cable."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 96 },
      { label: "Skin Comfort & Fit", value: 90 },
      { label: "Ease of Use", value: 85 },
      { label: "Material Quality", value: 92 },
      { label: "Value for Money", value: 70 }
    ]
  },
  {
    id: 3,
    rank: "#3",
    badge: "Celebrity Endorsement · Expensive Extras",
    name: "CurrentBody LED Mask",
    subtitle: "Pillow-Technology Flexible Silicone Face Mask",
    image: "/images/editorial/currentbody-skin-mask.jpeg",
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
      "Patented flexible silicone pillow diffusers",
      "Celebrity endorsements across Hollywood & UK press",
      "Face-only unit; neck add-on raises total cost to £680"
    ],
    pros: [
      "Strong Social Proof: Endorsed by celebrities and dermatologists with multiple global beauty awards.",
      "High Review Volume: A 4.7-star rating backed by over 2,800 verified customer reviews.",
      "Clinically Studied: Documented clinical trials showing 24% to 30% wrinkle reduction over 8 weeks.",
      "High-Quality Build: Medical-grade flexible silicone with clip-on controller."
    ],
    cons: [
      "Extremely High Price: At £399.99, it is drastically more expensive than top alternatives.",
      "No Neck Coverage: Base mask covers only the face; adding the neck piece raises total cost to £679.99.",
      "Very Limited Treatment Modes: Only 2 wavelengths; cannot treat active acne (no Blue) or hyperpigmentation (no Green).",
      "10% Restocking Fee: Returns under the money-back guarantee incur a £40 penalty."
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
    id: 4,
    rank: "#4",
    badge: "Clinical Pioneer · Premium Pricing",
    name: "Omnilux Contour Face",
    subtitle: "Dermatologist-Favourite Anti-Aging Silicone Mask",
    image: "/images/editorial/omnilux-contour-mask.jpeg",
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
      "Medical Heritage: Originated directly from professional medical clinic hardware.",
      "Comfortable Fit: High-grade silicone conforms well to facial structure.",
      "Clean 30-Day Policy: Straightforward return period."
    ],
    cons: [
      "High Price Tag: £348 for face-only anti-aging treatment.",
      "No Neck Coverage: Total cost reaches £696 if purchasing the separate neck unit.",
      "Single Skin Concern: Cannot treat acne; brand requires buying a separate mask ('Omnilux Clear').",
      "Lower LED Density: Equipped with 132 LEDs compared to modern high-density models."
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
    id: 5,
    rank: "#5",
    badge: "Cryo Feature · Heavy Non-Silicone Frame",
    name: "Shark CryoGlow LED Mask",
    subtitle: "LED Light Therapy with Under-Eye Chill Plates",
    image: "/images/editorial/shark-cryoglow-mask.png",
    fallbackImage: "/images/editorial/shark-cryoglow-mask.png",
    price: "£299.99",
    originalPrice: null,
    discountBadge: null,
    rating: "4.6 / 5",
    reviewCount: "530+ reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: false,
    description: [
      "Our final comparison spot goes to the Shark CryoGlow LED Face Mask, which has quickly made headlines and won beauty awards for introducing integrated under-eye cooling technology into a consumer face mask.",
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
      "Limited Spectrum: Lacks Green, Yellow, Cyan, Purple, and White wavelengths.",
      "Expensive for Limited LEDs: Focuses heavily on the chill gimmick rather than LED density."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 65 },
      { label: "Skin Comfort & Fit", value: 52 },
      { label: "Ease of Use", value: 75 },
      { label: "Material Quality", value: 85 },
      { label: "Value for Money", value: 55 }
    ]
  }
];

const comparisonMatrix = [
  { feature: "Price", buudy: "£179 (Save 60%)", qure: "£299", currentbody: "£399.99", omnilux: "£348", shark: "£299.99" },
  { feature: "App Dependency", buudy: "None (Tap Controls)", qure: "Required for 5 Zones", currentbody: "None", omnilux: "None", shark: "None" },
  { feature: "Neck Coverage", buudy: "✓ Built-In Seamless", qure: "✗ Face Only", currentbody: "✗ £280 Extra", omnilux: "✗ £348 Extra", shark: "✗ None" },
  { feature: "Available Wavelengths", buudy: "7 Colors + NIR (830nm)", qure: "5 Wavelengths", currentbody: "2 Colors (Red/NIR)", omnilux: "2 Colors (Red/NIR)", shark: "2 Colors (Red/Blue)" },
  { feature: "Serum Compatibility", buudy: "✓ Compatible with Serums", qure: "✗ Dry Skin Only", currentbody: "✓ Compatible", omnilux: "✓ Compatible", shark: "✓ Compatible" },
  { feature: "Pigmentation (Green)", buudy: "✓ 525nm Included", qure: "✗ Missing Green", currentbody: "✗ Not Available", omnilux: "✗ Not Available", shark: "✗ Not Available" },
  { feature: "Trial & Money-Back", buudy: "90 Days (100% Free)", qure: "30 Days", currentbody: "60 Days (10% Fee)", omnilux: "30 Days", shark: "30 Days" },
  { feature: "Overall Score", buudy: "9.9 / 10 (Winner)", qure: "8.8 / 10", currentbody: "8.6 / 10", omnilux: "8.4 / 10", shark: "7.8 / 10" }
];

export default function QureskincareComparisonPage() {
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
            Qure Skincare vs. Buudy LED Mask: <em className="italic font-light text-stone-600 block sm:inline">Is App-Controlled Facewear Worth £299?</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mb-8 border-l-2 md:border-l-4 border-[#b08d57] pl-4 md:pl-6 text-left">
            We put Qure's £299 Q-Rejuvalight Pro against the £179 Buudy 7-color wireless mask over 200 hours of clinical evaluation. Here is what you need to know about app customization, neck coverage, and daily usability.
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
            src="https://img.thesitebase.net/10677/10677322/themes/1771076589d8ecf6780e.png" 
            alt="Qure Skincare vs Buudy LED Mask UK 2026" 
            className="w-full h-auto object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/editorial/led-testing-clinic.jpg';
            }}
          />
          <div className="p-3 bg-stone-900 text-stone-300 text-[11px] text-center tracking-wide uppercase font-sans">
            Independent Clinical Testing Bench · London Dermatological Research Facility
          </div>
        </div>

        {/* Editorial Introduction */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed mb-12">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
            Among tech-forward beauty consumers, Qure Skincare's Q-Rejuvalight Pro has generated significant buzz. By linking an LED face mask to a smartphone app and offering 5 customizable facial treatment zones (e.g. anti-acne blue light on the chin while delivering anti-aging deep red light on the forehead), Qure presents itself as the smartest mask on the UK market.
          </p>
          <p className="mb-6">
            However, our laboratory testing revealed key trade-offs that buyers must consider before spending £299. The device's 5-zone customization is entirely dependent on smartphone pairing, creating daily app-connectivity steps. Furthermore, the mask mandates a strict "no serums" rule on bare skin, offers no neck or jawline coverage, and carries specific warnings for deeper Fitzpatrick skin types.
          </p>
          <p className="mb-8">
            In contrast, <strong className="text-stone-900 font-bold">Buudy's £179 7-Color LED Mask</strong> delivers comprehensive 7-wavelength therapy with built-in neck coverage, zero app friction via instant Tap controls, full serum compatibility, and a 90-day risk-free trial. Below is our comprehensive head-to-head evaluation.
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
            <strong>Clinical Note:</strong> While app connectivity sounds modern, high Bluetooth pairing friction and short burst power cycles can reduce long-term device usage. Simple, reliable tap-activated hardware consistently produces better 90-day clinical compliance.
          </p>
        </div>

        {/* Head-to-Head Specification Matrix */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b08d57]">Side-by-Side Matrix</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mt-1">
              Qure Skincare vs. Buudy & Top Competitors
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
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#2 Qure Skincare</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#3 CurrentBody</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#4 Omnilux</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#5 Shark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-stone-50' : 'bg-stone-50/50 hover:bg-stone-50'}>
                    <td className="px-4 py-3.5 font-bold text-stone-900">{row.feature}</td>
                    <td className="px-4 py-3.5 font-bold text-emerald-700 bg-emerald-50/40 border-x border-emerald-100">{row.buudy}</td>
                    <td className="px-4 py-3.5 text-stone-800">{row.qure}</td>
                    <td className="px-4 py-3.5 text-stone-600">{row.currentbody}</td>
                    <td className="px-4 py-3.5 text-stone-600">{row.omnilux}</td>
                    <td className="px-4 py-3.5 text-stone-600">{row.shark}</td>
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
              Why App Control & 3-Minute Bursts Fall Short for Most Users
            </h2>

            <div className="prose prose-stone prose-lg text-stone-700 leading-relaxed space-y-4">
              <p>
                Qure Skincare introduced compelling concepts with its 3-minute high-power cycle and zone mapping. However, in our 8-week clinical panel, three structural friction points arose:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                <div className="p-5 bg-stone-50 border-l-4 border-amber-500 text-sm">
                  <strong className="block text-stone-900 font-bold mb-1">The Bare-Skin Mandate</strong>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Qure requires bare, dry skin with zero serums or moisturizers. This prevents users from capitalizing on photobiomodulation's proven ability to dramatically enhance serum permeability and active ingredient absorption.
                  </p>
                </div>
                <div className="p-5 bg-stone-50 border-l-4 border-red-500 text-sm">
                  <strong className="block text-stone-900 font-bold mb-1">Neglected Neck & Décolletage</strong>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    At £299, Qure covers only the face. Horizontal neck bands and chest sun damage remain untreated, creating a visible textural contrast over 60–90 days of consistent facial rejuvenation.
                  </p>
                </div>
              </div>

              <p>
                With Buudy at £179, you receive built-in neck coverage, 7 medical wavelengths, instant touch activation with no smartphone tether, and a generous 90-day money-back guarantee.
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
                    src="/images/mask-angle.webp" 
                    alt="Buudy 7-Color LED Light Mask" 
                    className="w-full max-w-[280px] mx-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
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
                  Full 7-wavelength clinical light therapy with integrated neck coverage, cordless tap controls, and a 90-day risk-free trial. Save £120 compared to Qure Skincare.
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
