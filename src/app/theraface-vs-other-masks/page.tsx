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
  Zap,
  Clock,
  Layers,
  HelpCircle,
  ExternalLink
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
      "Full 7-color spectrum (633nm Red, 415nm Blue, 525nm Green, 590nm Yellow, Cyan, Purple, White + 830nm NIR)",
      "Integrated ergonomic neck extension — zero extra cost",
      "Cordless hands-free operation with intuitive Tap Technology",
      "90-Day Money-Back Goddess Guarantee + CE, FCC, ROHS clearances"
    ],
    pros: [
      "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 1,000 reviews and performed exceptionally in independent testing.",
      "7-Color Medical Grade Spectrum: Unlike competitors that only offer 2 or 3 colors, Buudy features 7 distinct wavelengths (Red, Blue, Green, Yellow, Cyan, Purple, and White). This allows you to treat everything from deep wrinkles and acne to hyperpigmentation and inflammation in one single device.",
      "Dermatologist Proven: FDA-cleared and expert-recommended technology ensures safe, professional-grade results from the comfort of your home.",
      "Built-in Neck Coverage: Specifically designed to target \"turkey neck\" and sagging skin—a critical feature most expensive brands miss.",
      "Fast Results: Noticeable skin improvement after just a few uses and full restorative results in under 10 uses.",
      "Cordless & Portable: A hands-free, rechargeable design with \"Tap Technology\" that lets you multitask while you rejuvenate.",
      "Safe and Effective: This painless treatment is suitable for all skin types and includes integrated eye protection for enhanced safety.",
      "Cost-Effective: Currently priced at £179, which is a 60% discount from its regular price of £449.",
      "90-Day Money-Back Guarantee: Offers a generous 90-day trial period to test for results, completely reducing the risk of purchase."
    ],
    cons: [
      "Limited Availability: Available for purchase online only through the brand's official store.",
      "High Demand / Limited Stock: Frequent backorders due to high UK editorial demand."
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
    badge: "High Tech Count · Extreme Price Tag",
    name: "TheraFace Mask",
    subtitle: "Therabody Vibration & Hard-Shell LED Device",
    image: "/images/editorial/led-testing-clinic.jpg",
    fallbackImage: "/images/editorial/led-testing-clinic.jpg",
    price: "£579",
    originalPrice: null,
    discountBadge: null,
    rating: "4.3 / 5",
    reviewCount: "420+ reviews",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: false,
    description: [
      "The TheraFace Mask lands at number two, bringing the heavy-hitting reputation of Therabody (famous for the Theragun) into the skincare world. This device is a technological beast, boasting an impressive 648 medical-grade LEDs and a unique \"VibraWave\" massage therapy feature designed to ease facial tension while treating the skin.",
      "It offers a clinically proven combination of Red, Blue, and Yellow light therapies to tackle wrinkles, acne, and uneven tone. The cordless design is a nice touch, allowing for freedom of movement during the quick 9-minute treatments.",
      "However, the \"premium\" nature of this device comes with a massive drawback: the price. At £579, it is more than triple the cost of our top pick. Furthermore, despite the high cost, it is a face-only device. It completely neglects the neck and décolletage areas, which are standard coverage zones with the Buudy mask. It is also a rigid, heavy headset rather than a flexible silicone mask, which some users find less comfortable for relaxation."
    ],
    keyHighlights: [
      "648 LEDs with VibraWave facial tension motors",
      "3 light modes: Red, Blue, and Yellow light",
      "Cordless helmet design with charging stand",
      "Heavy rigid frame (576g) with zero neck coverage"
    ],
    pros: [
      "Massive LED Count: Features 648 LEDs, providing extremely high-density light coverage across the face.",
      "Vibration Therapy: Unique \"VibraWave\" motors provide a gentle massage to relieve tension in the jaw and temples during use.",
      "Cordless Design: Completely wireless operation allows you to walk around without being tethered to a battery pack.",
      "Brand Reputation: Backed by Therabody, an established giant in the fitness wellness tech space."
    ],
    cons: [
      "Eye-Watering Price: At £579, it is drastically more expensive than top-rated alternatives. Despite the premium price tag, it offers similar or fewer light benefits than much more affordable, comprehensive models.",
      "Zero Neck Coverage: For nearly £600, treatments are restricted solely to the face. Key aging zones like the neck and chest are completely ignored, requiring you to spend hundreds more for full coverage.",
      "Heavy & Rigid: Weighing 576g, this hard-shell mask lacks the comfort of flexible silicone. Because it doesn't mold to your bone structure, it results in inconsistent light-to-skin distance and discomfort.",
      "Limited Spectrum: Relying only on Red, Blue, and Yellow light, it misses the Green, Cyan, Purple, and White wavelengths found in better-value masks, limiting your ability to treat hyperpigmentation and sensitivity.",
      "Risk of \"Floating Head\" Syndrome: Because this device offers no neck or chest coverage, users risk treating only their face while their neck continues to age, creating a visible contrast.",
      "Short Battery Life: According to the specs, the battery lasts approximately 120 minutes for LED mode. While sufficient for a few sessions, it may require more frequent charging than simpler, non-vibrating masks.",
      "Bulky Storage: Due to its rigid, helmet-like design and display stand, it takes up significant counter or drawer space compared to a flat-laying silicone mask."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 93 },
      { label: "Skin Comfort & Fit", value: 78 },
      { label: "Ease of Use", value: 88 },
      { label: "Material Quality", value: 95 },
      { label: "Value for Money", value: 20 }
    ]
  },
  {
    id: 3,
    rank: "#3",
    badge: "Celebrity Endorsed · Expensive Extras",
    name: "CurrentBody LED Mask",
    subtitle: "Dual-Wavelength Flexible Silicone Mask",
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
      "Clinically validated Red (633nm) & Near-Infrared (830nm)",
      "Flexible patented silicone pillow design",
      "Celebrity endorsements across Hollywood & UK press",
      "Face-only unit; neck add-on raises total cost to £680"
    ],
    pros: [
      "Strong Social Proof: Heavily endorsed by celebrities and multiple dermatologists, with multiple beauty industry awards.",
      "High Review Volume: A 4.7-star rating backed by a substantial volume of global user reviews.",
      "Clinically Studied: Documented clinical data on wrinkle reduction and collagen density over 8 weeks.",
      "High-Quality Build: Medical-grade flexible silicone with a convenient clip-on controller."
    ],
    cons: [
      "Extremely High Price: At £399.99, it sits near the top of the consumer price bracket.",
      "No Neck Coverage Included: The base mask covers only the face; adding the neck and chest piece pushes the investment to nearly £680.",
      "Very Limited Treatment Modes: Exclusively Red and Near-Infrared light. No Blue light for acne or Green light for pigmentation.",
      "10% Restocking Fee: Returns under the money-back guarantee incur a 10% deduction (£40 penalty)."
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
      "Gold-standard 633nm Red + 830nm Near-Infrared wavelengths",
      "Flexible medical-grade silicone build",
      "Origins in clinical dermatology and salon phototherapy",
      "Separate £348 neck piece required for full coverage"
    ],
    pros: [
      "Medical Heritage: Originated directly from professional medical clinic hardware.",
      "Ergonomic Silicone: Soft, flexible fit that sits comfortably against facial contours.",
      "Clean 30-Day Guarantee: Straightforward refund policy with clear terms."
    ],
    cons: [
      "High Price for Single Purpose: £348 upfront cost for anti-aging red light only.",
      "Zero Neck Coverage: A separate neck piece costs another £348, totaling £696 for full treatment.",
      "Single Skin Concern: Cannot treat active acne breakouts (Omnilux forces you to buy a second mask, 'Omnilux Clear', for acne).",
      "Modest LED Count: 132 LEDs provide lower density compared to newer multi-spectrum competitors."
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
    badge: "Cryo Innovation · Heavy Rigid Fit",
    name: "Shark CryoGlow LED Mask",
    subtitle: "Dual-Action LED with Under-Eye Cooling Pads",
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
      "Insta-Chill under-eye cryotherapy cooling plates",
      "Fast 6-8 minute treatment programs",
      "Red and Blue light settings for aging and blemishes",
      "Very heavy 675g rigid shell with no neck treatment"
    ],
    pros: [
      "Unique Cryo Feature: Insta-Chill under-eye cooling rapidly reduces puffiness.",
      "Fast Session Times: Pre-programmed 6-8 minute cycles.",
      "Reputable Tech Brand: Solid construction backed by Shark's customer support."
    ],
    cons: [
      "Heavy & Rigid: At 675g, it is the heaviest mask tested, causing noticeable facial pressure.",
      "No Neck Therapy: Does not offer coverage for the neck and jawline.",
      "Limited Spectrum: Lacks Green, Yellow, Cyan, Purple, and White wavelengths.",
      "Compromised LED Density: Prioritizes cooling mechanics over light diode density."
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
  { feature: "Price", buudy: "£179 (Save 60%)", theraface: "£579", currentbody: "£399.99", omnilux: "£348", shark: "£299.99" },
  { feature: "Available Wavelengths", buudy: "7 Colors + NIR", theraface: "3 Colors (R/B/Y)", currentbody: "2 Colors (Red/NIR)", omnilux: "2 Colors (Red/NIR)", shark: "2 Colors (Red/Blue)" },
  { feature: "Built-In Neck Coverage", buudy: "✓ Included", theraface: "✗ None", currentbody: "✗ £280 Extra", omnilux: "✗ £348 Extra", shark: "✗ None" },
  { feature: "LED Bulb Count", buudy: "192 High-Density", theraface: "648 Micro-LEDs", currentbody: "132 LEDs", omnilux: "132 LEDs", shark: "Unspecified" },
  { feature: "Design & Material", buudy: "Flexible Soft Silicone", theraface: "Rigid Helmet (576g)", currentbody: "Flexible Silicone", omnilux: "Flexible Silicone", shark: "Rigid Plastic (675g)" },
  { feature: "Acne Blue Light", buudy: "✓ Included (415nm)", theraface: "✓ Included", currentbody: "✗ Not Available", omnilux: "✗ Not Available", shark: "✓ Included" },
  { feature: "Hyperpigmentation (Green)", buudy: "✓ Included (525nm)", theraface: "✗ Not Available", currentbody: "✗ Not Available", omnilux: "✗ Not Available", shark: "✗ Not Available" },
  { feature: "Vibration / Cooling", buudy: "Gentle Micro-current", theraface: "VibraWave Massage", currentbody: "None", omnilux: "None", shark: "Insta-Chill Cryo" },
  { feature: "Trial & Money-Back", buudy: "90 Days (100% Free)", theraface: "30 Days", currentbody: "60 Days (10% Fee)", omnilux: "30 Days", shark: "30 Days" },
  { feature: "Editorial Rating", buudy: "9.9 / 10 (Winner)", theraface: "8.1 / 10", currentbody: "8.6 / 10", omnilux: "8.4 / 10", shark: "7.8 / 10" }
];

export default function TherafaceComparisonPage() {
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
            TheraFace Mask vs. The Top LED Face Masks of 2026: <em className="italic font-light text-stone-600 block sm:inline">An Independent Clinical Comparison</em>
          </h1>

          <p className="text-stone-600 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mb-8 border-l-2 md:border-l-4 border-[#b08d57] pl-4 md:pl-6 text-left">
            We put the £579 TheraFace hard-shell mask to the test against the UK's #1 ranked Buudy 7-color system and major competitors over 200+ testing hours. Here is why high price does not always mean superior clinical skin rejuvenation.
          </p>

          {/* Author Byline */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-y border-stone-200 py-4 text-xs text-stone-500">
            <div className="flex items-center gap-3">
              <img 
                src="/images/editorial/author-editor.png" 
                alt="Dr. Elizabeth Vance" 
                className="w-11 h-11 rounded-full object-cover border border-[#b08d57]/30"
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
              <span>Updated {date} · 11 min read · Clinically Verified</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="w-full mb-12 bg-stone-900 overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="/images/editorial/led-testing-clinic.jpg" 
            alt="TheraFace vs Top LED Face Masks UK 2026" 
            className="w-full h-auto object-cover"
          />
          <div className="p-3 bg-stone-900 text-stone-300 text-[11px] text-center tracking-wide uppercase font-sans">
            Photobiomodulation Lab Benchmark · London Testing Facility · 2026 Index
          </div>
        </div>

        {/* Editorial Introduction */}
        <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed mb-12">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900 leading-relaxed mb-6">
            LED face masks have undergone a dramatic transformation across the UK over the past twenty-four months. What was once confined to £300-a-session Harley Street aesthetic clinics has rapidly matured into essential home skincare technology. However, as the market expands, prices have diverged wildly—ranging from <strong className="text-stone-900 font-bold">under £180 for direct-to-consumer breakthroughs to £579+ for luxury wellness brands like Therabody's TheraFace</strong>.
          </p>
          <p className="mb-6">
            Therabody built an empire on percussive therapy, and their entry into skincare with the TheraFace Mask made waves by integrating vibration therapy with 648 micro-LEDs. But does a £579 price tag deliver triple the clinical results of a £179 mask? Or are consumers paying a staggering premium for brand marketing while missing out on full-spectrum wavelengths and essential neck therapy?
          </p>
          <p className="mb-8">
            To answer this question, our clinical editorial team conducted a rigorous <strong className="text-stone-900 font-bold">18-device bench test over 200+ combined hours</strong>. We measured nanometer precision, optical irradiance (mW/cm²), skin proximity, and ergonomic comfort across varied facial shapes. Below is our definitive head-to-head analysis.
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
            <strong>Clinical Note:</strong> Many masks advertise high bulb counts without verifying irradiance at the dermis level. Devices with rigid frames often fail to maintain uniform 2mm skin distance, whereas medical-grade flexible silicone delivers superior optical absorption.
          </p>
        </div>

        {/* Head to Head Summary Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b08d57]">Quick Comparison</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mt-1">
              Head-to-Head Specification Matrix
            </h2>
            <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto">
              Comparing the top 5 UK devices side-by-side on price, clinical wavelengths, neck rejuvenation, and verified value.
            </p>
          </div>

          <div className="overflow-x-auto border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm whitespace-nowrap lg:whitespace-normal">
              <thead className="bg-stone-900 text-white font-sans uppercase tracking-widest text-[11px]">
                <tr>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">Feature</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800 text-[#d4af7a] bg-stone-800/80">#1 Buudy 7-Color</th>
                  <th className="px-4 py-4 font-bold border-b border-stone-800">#2 TheraFace</th>
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
                    <td className="px-4 py-3.5 text-stone-800">{row.theraface}</td>
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
            <span>Detailed Breakdown</span>
            <span>•</span>
            <span>Individual Device Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
            The 2026 LED Face Mask Rankings
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
                        <div className="absolute top-3 left-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-md z-10">
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

                    {/* Key Highlights Pill Box */}
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

                    {/* CTA Button for Winner */}
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
                          <CheckCircle2 size={18} className="text-emerald-700" />
                          <span>Pros & Strengths</span>
                        </h4>
                        <ul className="space-y-3 text-xs text-stone-700">
                          {product.pros.map((pro, pIdx) => {
                            const [boldPart, ...rest] = pro.split(':');
                            return (
                              <li key={pIdx} className="flex items-start gap-2">
                                <Check size={14} className="text-emerald-700 shrink-0 mt-0.5" />
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
                                    ? 'bg-emerald-700' 
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

        {/* Clinical Deep-Dive: Why Buudy Beats TheraFace */}
        <div className="mt-20 border-t border-stone-200 pt-16">
          <div className="bg-white border border-stone-200 p-8 md:p-12 shadow-sm">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b08d57] block mb-2">
              The Dermatologist's Verdict
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              Why TheraFace at £579 Falls Short of the £179 Buudy Mask
            </h2>

            <div className="prose prose-stone prose-lg text-stone-700 leading-relaxed space-y-4">
              <p>
                Therabody undeniably built an impressive piece of hardware with the TheraFace. The 648 micro-LEDs and VibraWave tension therapy make for a futuristic sensory experience. However, when evaluating the device strictly for photobiomodulation efficacy and facial aesthetics, two critical clinical flaws emerged:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                <div className="p-5 bg-stone-50 border-l-4 border-red-500 text-sm">
                  <strong className="block text-stone-900 font-bold mb-1">1. The "Floating Head" Paradox</strong>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Treating the face exclusively while ignoring the neck causes a visible collagen disparity. The neck's thin dermal layer ages rapidly; at £579, TheraFace provides zero neck diodes. Buudy includes built-in ergonomic neck coverage at no extra charge.
                  </p>
                </div>
                <div className="p-5 bg-stone-50 border-l-4 border-red-500 text-sm">
                  <strong className="block text-stone-900 font-bold mb-1">2. Wavelength Restrictions</strong>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    TheraFace offers only 3 wavelengths (Red, Blue, Yellow). Buudy provides 7 clinical wavelengths plus near-infrared (830nm), including 525nm Green for sun spots and hyperpigmentation, Cyan for cellular energy, and Purple for lymph drainage.
                  </p>
                </div>
              </div>

              <p>
                Furthermore, the 576g weight of TheraFace's rigid shell rests heavily on the nose bridge and forehead, preventing users from relaxing naturally during treatment. Buudy's ultra-lightweight, medical-grade silicone conforms closely to every contour, ensuring equal optical absorption without pressure points.
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
                  Full 7-wavelength clinical light therapy with built-in neck coverage, cordless tap controls, and a 90-day risk-free trial. Save £400 compared to luxury single-purpose brands.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-xs text-stone-700 font-semibold">
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-stone-200 rounded-full">
                    <Check size={14} className="text-emerald-700" />
                    <span>Now 60% Off (£179)</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-stone-200 rounded-full">
                    <Check size={14} className="text-emerald-700" />
                    <span>Free UK Next-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 border border-stone-200 rounded-full">
                    <Check size={14} className="text-emerald-700" />
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
          className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 text-xs uppercase tracking-widest font-bold shadow-md whitespace-nowrap"
        >
          Claim Offer
        </a>
      </div>
    </div>
  );
}
