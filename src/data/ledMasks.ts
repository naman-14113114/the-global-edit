export type LedMaskMetric = {
  label: string;
  value: number;
};

export type FreeGiftItem = {
  name: string;
  normalPrice: string;
  image: string;
  animationDelay?: string;
};

export type LedMaskProduct = {
  id: number;
  rank: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: string;
  link: string;
  isWinner: boolean;
  siliconWarning?: boolean;
  description: string[];
  pros: string[];
  cons: string[];
  metrics: LedMaskMetric[];
};

export const EXPERT_PROFILE = {
  name: "Dr. Megan Vincze",
  title: "Certified Dermatologist & Beauty Technology Expert",
  image: "/img/dr-megan-vincze.png",
  yearsExperience: "10+",
  masksReviewed: 18,
  testingHours: "200+",
} as const;

export const evaluationCriteria = [
  "Scientific effectiveness of the light wavelengths",
  "Even light distribution",
  "Comfort and fit on the face",
  "Skin-friendly, medically approved materials",
  "Adjustable light modes and intensity levels",
  "User interface and ease of operation",
  "Battery life and charging performance",
  "Product durability and build quality",
  "User feedback and real skincare results",
  "Affordability and post-purchase customer support",
];

export const freeGiftBundle: {
  totalValue: string;
  items: FreeGiftItem[];
} = {
  totalValue: "£128",
  items: [
    {
      name: "Premium Travel Box",
      normalPrice: "£39",
      image: "/img/93-w.webp",
      animationDelay: "0s",
    },
    {
      name: "Buudy LED Torch",
      normalPrice: "£70",
      image: "/img/35-w.webp",
      animationDelay: "0.2s",
    },
    {
      name: "Expert Skincare Guide",
      normalPrice: "£19",
      image: "/img/94-w.webp",
      animationDelay: "0.4s",
    },
  ],
};

export const ledMaskProducts: LedMaskProduct[] = [
  {
    id: 1,
    rank: "#1",
    name: "Buudy 7 Colour LED Mask",
    image: "/img/57-w.webp",
    price: "£179",
    originalPrice: "£449",
    rating: "4.9 / 5",
    link: "https://buudy.com/pages/buudy-led-mask",
    isWinner: true,
    description: [
      "Our top pick is the Buudy 7 Colour LED Mask, a medical-grade device that outperforms the competition with a 7-colour spectrum plus 830nm near-infrared. While most brands focus only on basic red light, Buudy uses targeted wavelengths to support everything from deep wrinkles and acne to inflammation, uneven tone, and overall skin recovery. This Health Canada Approved technology (with CE, FCC, and ROHS certifications) ensures professional-grade results for all skin types.",
      'A major advantage is the built-in neck coverage, a vital feature often missing from more expensive models. This allows you to treat "turkey neck" and sagging skin simultaneously. The cordless, rechargeable design features "Tap Technology" and Buudy AI guided sessions, making it simple to choose the right routine for your skin goals.',
      "Trusted by over 16,000 customers with a 4.9-star rating, this mask delivers visible improvements in as few as ten uses. Currently priced at £179, it offers the best value on the market, combining full-face and neck rejuvenation, advanced eye protection, and a 90-day money-back guarantee for a safer, lower-risk trial.",
    ],
    pros: [
      "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 4,000 reviews and performed well in internal testing.",
      "7 Colour Medical Grade Spectrum: Unlike competitors with just 2–3 colours, Buudy offers 7 LED colours (Red, Blue, Green, Cyan, Yellow, Purple & White) plus 830nm near-infrared.",
      "Dermatologist Proven: Health Canada Approved with CE, FCC, and ROHS certifications.",
      'Built-in Neck Coverage: Specifically designed to target "turkey neck" and sagging skin, a critical feature most expensive brands miss.',
      "Fast Results: Claims noticeable skin improvement after just a few uses and full results in under 10 uses.",
      'Cordless, Portable & Guided: A hands-free, rechargeable design with "Tap Technology" and Buudy AI guided sessions that help match each routine to your skin concern.',
      "Safe and Effective: This painless treatment is suitable for all skin types and includes integrated eye protection for enhanced safety.",
      "Cost-effective: Currently priced at £179, which is a 60% discount from its regular price of £449.",
      "90-Day Money-Back Guarantee: Buudy offers a generous 90-day trial period to test for results. If you're not satisfied, you get a full refund.",
    ],
    cons: [
      "Limited Availability: Available for purchase online only and exclusively in the United Kingdom.",
      "Limited Stock: There is a risk of the product being sold out due to limited stock.",
      "Learning Curve: Some users note the intuitive tap controls take a session or two to fully get used to, though most find it second nature after the first few uses.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 97 },
      { label: "Skin Comfort and Fit", value: 96 },
      { label: "Ease of Use", value: 97 },
      { label: "Material Quality", value: 96 },
      { label: "Affordability", value: 100 },
    ],
  },
  {
    id: 2,
    rank: "#2",
    name: "CurrentBody LED Mask",
    image: "/img/Untitled design.png",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "https://amzn.to/4beNXsm",
    isWinner: false,
    siliconWarning: true,
    description: [
      "The CurrentBody LED Mask stands out as a premier selection in our evaluation, solidifying its reputation as a global leader in non-invasive skincare technology. Engineered with a sophisticated blend of red and near-infrared light, this device is clinically projected to reduce wrinkles by 24% in just four weeks.",
      'Its proprietary "Pillow Technology" ensures uniform light distribution across all facial contours, maximizing the efficacy of every 10-minute session. Grounded in clinical research and expert-backed science, it remains a top-tier investment for those seeking professional-grade skin rejuvenation at home.',
      "Trusted by over 500,000 users across 80 countries, the mask has earned a 97% satisfaction rate for delivering a visibly brighter and more refreshed complexion. It continues to be a benchmark for reliability and proven results in the domestic beauty-tech sector.",
    ],
    pros: [
      "Strong Social Proof: The mask is heavily endorsed by celebrities (like Kim Kardashian and Cillian Murphy) and multiple dermatologists, and has won several beauty awards.",
      "High Review Volume: It has a 4.7-star rating based on a very large number of reviews (2,860).",
      'Clinically Studied: The company provides specific clinical data on its effectiveness for anti-aging (e.g., "reducing wrinkles by 30%... in 8 weeks").',
      "High-Quality Build: Features include flexible silicone for a good fit, a portable clip-on controller, and optional eye inserts for convenience.",
    ],
    cons: [
      "Extremely High Price: At £399.99, it is drastically more expensive than the Buudy mask (which is £179).",
      'No Neck Coverage: The standard £400 mask is for the face only. You must purchase the "Face & Neck Kit" for £679.99 to get neck coverage, which comes standard with the Buudy mask.',
      "Very Limited Treatment Modes: This is an anti-aging-only device. It only offers 3 red/near-infrared wavelengths and completely lacks the 7-color versatility of the Buudy mask. It cannot be used to target acne (Blue light), dark spots (Green light), or redness (Yellow light).",
      "Not a Complete Solution: Because it only targets one concern (aging), it is not a comprehensive solution for total skin health like a multi-color mask.",
      "Costly Money-Back Guarantee: The 60-day money-back guarantee is not 100% free. Customers are charged a 10% restocking fee to return it, which would be £40 on a £400 mask.",
      'Mixed User Results: Despite the high rating, some verified reviewers report issues, stating they "Not noticed any difference yet" even after using it 5 times a week for a couple of months.',
      'Fit Issues: Some users note that the fit isn\'t perfect and that the mask can "feel it slide down," even with the new straps.',
      "Silicone Mask Dangers: Recent studies have highlighted potential safety and hygiene concerns with flexible silicone LED masks. <a href='/silicone-led-mask-dangers' class='text-red-600 hover:text-red-800 underline font-bold'>Read Full Report</a>",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 82 },
      { label: "Skin Comfort and Fit", value: 86 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 90 },
      { label: "Affordability", value: 42 },
    ],
  },
  {
    id: 3,
    rank: "#3",
    name: "Omnilux LED Mask",
    image:
      "https://img.thesitebase.net/10677/10677322/themes/1769107230af732ce69a.jpeg",
    price: "£348",
    rating: "4.6 / 5",
    link: "https://amzn.to/4s0Zcf7",
    isWinner: false,
    siliconWarning: true,
    description: [
      "Omnilux remains a preeminent name in the light therapy industry, recognized for bringing professional-grade standards to the home skincare market. Utilizing a clinically proven combination of red and near-infrared LED light, this device is specifically engineered to target deep-set wrinkles and revitalize skin texture within weeks of consistent use.",
      "While it carries a premium price point of £348, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience. Favored by dermatological experts and skincare enthusiasts alike, the device has earned significant praise for delivering high-quality results that rival in-clinic treatments.",
      "For those prioritizing long-term skin health and professional-standard efficacy, the Omnilux mask represents a sophisticated and reliable investment in modern beauty technology. It remains a top-tier choice for consumers seeking a durable, expert-backed solution for advanced facial rejuvenation.",
    ],
    pros: [
      'Strong Clinical Backing: The device is FDA-cleared and dermatologist-recommended, with clinical studies showing high user satisfaction (e.g., "95% reported brighter & plumper skin").',
      "Good Guarantee: Offers a 30-day, no-hassle, money-back guarantee, which is more straightforward than some competitors.",
      "High-Quality Brand: Omnilux is a well-known, trusted brand that originated in the professional medical device market.",
      "Portable Design: The mask is flexible, portable, and comes with a rechargeable controller and carry bag.",
    ],
    cons: [
      "Extremely High Price: At £348, it is significantly more expensive than the Buudy mask (£179).",
      "No Neck Coverage: The £348 price is for the face mask only. A separate neck and chest piece must be purchased for an additional £348, making the total cost for full coverage nearly £696.",
      "Very Limited Treatment Modes: This mask is an anti-aging device only. It is limited to just 2 light wavelengths (Red and NIR) and is missing the 5 other modes (like Blue, Green, and Yellow) that come standard with the Buudy mask.",
      'Not a Complete Solution: The company explicitly states the Contour mask "will not clear acne breakouts" and that customers must buy a different $395 mask ("Omnilux Clear") for that purpose. The Buudy mask handles both concerns in one device.',
      "Fewer LEDs: It is equipped with only 132 LEDs, which is significantly fewer than the Buudy mask's 192 high-density LEDs, offering less complete light coverage.",
      'Mixed User Results: Despite the high rating, some verified reviewers report issues, stating they "Not noticed any difference yet" even after using it 5 times a week for a couple of months.',
      "Silicone Mask Dangers: Recent studies have highlighted potential safety and hygiene concerns with flexible silicone LED masks. <a href='/silicone-led-mask-dangers' class='text-red-600 hover:text-red-800 underline font-bold'>Read Full Report</a>",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 76 },
      { label: "Skin Comfort and Fit", value: 88 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 92 },
      { label: "Affordability", value: 45 },
    ],
  },
  {
    id: 4,
    rank: "#4",
    name: "Shark CryoGlow LED Mask",
    image:
      "https://img.thesitebase.net/10677/10677322/themes/1768726434a7e6301df7.png",
    price: "£299.99",
    rating: "4.6 / 5",
    link: "https://amzn.to/4b4C8WS",
    isWinner: false,
    description: [
      "The Shark CryoGlow LED Face Mask has quickly made headlines and won prestigious beauty awards since its launch. From a trusted brand known for high-tech innovation, Shark offers the first LED mask featuring integrated under-eye cooling technology, making it a unique 2-in-1 solution for facial care.",
      'Endorsed by leading beauty editors at Oprah Daily and Women\'s Health, this mask offers three "chill" levels and four distinct treatment modes, including Better Ageing and Blemish Repair. These advanced settings ensure a quick and efficient therapy session in as little as 6 to 8 minutes, utilizing proven wavelengths like Red (630nm) and Blue (415nm) light.',
      "In our experience, a single daily session is all that is required to see noticeable improvements in skin clarity and tone. The independent clinical studies and dermatologist-backed technology specifically excel at brightening the under-eye area, with users reporting that the cooling pads visibly reduce puffiness and refresh the complexion after just one use.",
    ],
    pros: [
      'Unique Cooling Technology: Its main selling point is the "Insta-Chill" cryo-therapy for the under-eyes, a feature not found in standard LED masks, which helps to soothe and depuff.',
      "Developed with Dermatologists: The product is backed by dermatologists, which adds to its credibility.",
      "Strong Brand & Reviews: Shark is a well-known, trusted brand, and the mask has a high 4.6-star rating from over 500 reviews.",
      "Fast Treatment Times: With pre-programmed sessions as short as 6-8 minutes, it offers a very quick daily treatment.",
    ],
    cons: [
      "Extremely High Price: At £299.99, it is more than double the price of the Buudy mask (£179) for what is arguably less technology.",
      "No Neck Coverage: The device is for the face only and offers no treatment for the neck, a key area of concern for aging that is included with the Buudy mask.",
      "Severely Limited Light Modes: The mask is heavily focused on its cooling gimmick and offers very few light options. It is missing 5 of the 7 wavelengths (Green, Yellow, Cyan, Purple, White) that the Buudy mask has for targeting dark spots, skin balancing, and reducing swelling.",
      "Unspecified LED Count: A major red flag. The page does not state the number of LEDs, suggesting the count is low. A lower LED count (compared to Buudy's 192 high-density LEDs) means less power and less even skin coverage.",
      "Very Heavy & Rigid: At 675g, this mask is exceptionally heavy. This, combined with a rigid (non-silicone) design, can make it uncomfortable to wear and may not fit all face shapes well.",
      "Not a Complete Solution: It's a 2-in-1 device that compromises on the LED therapy. A customer wanting to treat hyperpigmentation (Green light) or balance skin texture (Yellow light) would get no benefit from this mask.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 65 },
      { label: "Skin Comfort and Fit", value: 52 },
      { label: "Ease of Use", value: 75 },
      { label: "Material Quality", value: 85 },
      { label: "Affordability", value: 55 },
    ],
  },
  {
    id: 5,
    rank: "#5",
    name: "Dr. Dennis Gross DRx SpectraLite",
    image: "/img/Dr Dennis Gross.png",
    price: "£455",
    rating: "4.1 / 5",
    link: "https://amzn.to/4cvWiJR",
    isWinner: false,
    description: [
      "The Dr. Dennis Gross DRx SpectraLite FaceWare Pro secures the #5 spot on our list, bringing dermatologist-created clinical authority to at-home skincare. Known for its ultra-fast 3-minute treatment time, it is highly sought after by those with busy schedules. It offers a strong focus on acne and surface bacteria through its specific 415nm Blue light mode.",
      "However, the staggering £455 price point makes it an incredibly expensive investment, especially given its limitations. With a rigid, unyielding hard plastic shell, many users report significant discomfort on the bridge of the nose and uneven light coverage across different bone structures.",
      "Crucially, at this premium price, it entirely lacks neck and chest coverage. While it does provide convenience, the 162 LEDs offer a lower density of light compared to modern high-output models, and it completely misses out on 5 vital therapeutic color spectrums needed for comprehensive facial health, making it a pricey option compared to more feature-rich alternatives.",
    ],
    pros: [
      "Fastest Treatment Time: Completes a full session in just 3 minutes, ideal for those in a rush.",
      "Dermatologist Created: Designed by Dr. Dennis Gross, adding a layer of clinical authority.",
      "Strong Acne Focus: The specific 415nm Blue light mode is highly effective for surface bacteria.",
      "Cordless Usability: Internal battery allows for wire-free usage during the short treatment window.",
    ],
    cons: [
      "Astronomical Price Point: At £455, you are paying a massive premium for the brand name. It costs more than double the price of top-tier, multi-functional alternatives.",
      'Zero Neck & Chest Coverage: For nearly £500, the lack of a neck attachment is a glaring omission. Users risk the "floating head" aging effect, whereas better-value masks include neck and décolletage treatment as a standard feature.',
      "Lower LED Density: Containing only 162 LEDs, it has a lower light density than modern high-output models, resulting in larger gaps between light points on the skin.",
      "Rigid, Uncomfortable Fit: The hard plastic shell does not flex. Users with varying bone structures frequently report significant discomfort on the bridge of the nose and uneven light coverage, a stark contrast to the comfort of soft, molding silicone.",
      "Severely Limited Color Spectrum: It offers only 3 modes (Red, Blue, and Combo). It completely misses out on Green (pigmentation), Yellow (redness), Cyan, Purple, and White light therapies that come standard with Buudy.",
      "Short Battery Life: The internal battery is kept small to reduce the mask's weight, meaning it requires much more frequent charging than devices utilizing external power banks.",
      "Fragile Build: Rigid plastic masks are inherently prone to cracking or breaking if accidentally dropped, unlike durable, travel-friendly silicone options.",
      "No Eye Protection: The open-eye design allows light to bleed into your vision, which can be bothersome for light-sensitive users compared to masks with integrated eye inserts.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 75 },
      { label: "Skin Comfort and Fit", value: 45 },
      { label: "Ease of Use", value: 85 },
      { label: "Material Quality", value: 75 },
      { label: "Affordability", value: 35 },
    ],
  },
];
