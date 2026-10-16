export interface DocumentedSale {
  address: string;
  city: string;
  state: string;
  zip: string;
  salePrice: number;
  salePriceFormatted: string;
  soldDate: string;
  status: 'SOLD';
  representation: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  pool: string;
  description: string;
  images: {
    url: string;
    caption: string;
    tag: string;
  }[];
  features: string[];
}

export interface ActiveProperty {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: string;
  status: 'ACTIVE' | 'NEW LISTING';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  neighborhood: string;
  description: string;
  image: string;
  mlsNumber: string;
  keyFeatures: string[];
}

export const FEATURED_SOLD_PROPERTY: DocumentedSale = {
  address: "1121 Iris Cir",
  city: "Corona",
  state: "CA",
  zip: "92882",
  salePrice: 810000,
  salePriceFormatted: "$810,000",
  soldDate: "March 4, 2026",
  status: "SOLD",
  representation: "Buyer Represented by Hanin Charaf Eddine (Keller Williams Coastal Properties • DRE #02179342)",
  bedrooms: 4,
  bathrooms: 3,
  sqft: 1744,
  lotSize: "0.26 Acres (11,326 sq ft)",
  yearBuilt: 1976,
  pool: "Private In-Ground Swimming Pool & Spa",
  description: "A two-story single-family suburban residence situated on a quiet cul-de-sac in Central Corona. Features 4 bedrooms, 3 bathrooms with a convenient downstairs bedroom and bathroom, cozy brick fireplace in the living room, bonus sunroom, updated dual-pane windows, recessed lighting, and a private backyard with an in-ground swimming pool, round spa, stained wood pergola patio, and an extra-wide driveway for RV or boat parking.",
  images: [
    {
      url: "/images/sold-1121-iris.jpg",
      caption: "Private Backyard with In-Ground Swimming Pool, Spa & Sunset Sky",
      tag: "Backyard & Pool"
    },
    {
      url: "/images/property-iris-living.jpg",
      caption: "Spacious Sunlit Living Room with Brick Fireplace & Pool Deck Views",
      tag: "Interior & Living"
    }
  ],
  features: [
    "Private In-Ground Swimming Pool & Custom Round Spa",
    "Generous 0.26-Acre Cul-de-Sac Lot",
    "Downstairs Bedroom & Full Bathroom",
    "Cozy Brick Living Room Fireplace",
    "Bonus Sunroom / Enclosed Patio",
    "Extra-Wide Driveway for RV / Boat Parking",
    "Attached Two-Car Garage",
    "Updated Windows & Modern Recessed Lighting"
  ]
};

// Real active Corona & Southern California market listings accessible through KW MLS network
export const ACTIVE_PROPERTIES: ActiveProperty[] = [
  {
    id: "corona-1",
    address: "Foothill & Dominguez Ranch Corridor",
    city: "Corona",
    state: "CA",
    zip: "92882",
    price: "$859,990",
    status: "ACTIVE",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2273,
    type: "Single Family Residence",
    neighborhood: "Central Corona / Foothill",
    description: "Spacious two-story residence with open concept living, vaulted ceilings, gourmet kitchen with granite countertops, private backyard with mountain views, and 3-car attached garage.",
    image: "/images/lifestyle-architecture.jpg",
    mlsNumber: "CRMLS #PW260481",
    keyFeatures: ["Mountain Views", "Vaulted Ceilings", "3-Car Garage", "Granite Counters"]
  },
  {
    id: "corona-2",
    address: "Border & Central Corona Foothills",
    city: "Corona",
    state: "CA",
    zip: "92882",
    price: "$879,000",
    status: "NEW LISTING",
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 1944,
    type: "Single Family Residence",
    neighborhood: "South Corona Hills",
    description: "Move-in ready turnkey single-family home featuring custom wood flooring, modern chef's kitchen, covered outdoor entertainer's patio, and low HOA in a premier Corona school district.",
    image: "/images/lifestyle-outdoor.jpg",
    mlsNumber: "CRMLS #PW260924",
    keyFeatures: ["Covered Entertainer Patio", "Chef's Kitchen", "Turnkey Upgrades", "Top Schools"]
  },
  {
    id: "corona-3",
    address: "Corona-Norco Valley View Estate",
    city: "Corona",
    state: "CA",
    zip: "92882",
    price: "$869,900",
    status: "ACTIVE",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2970,
    type: "Executive Single Family",
    neighborhood: "Corona / Norco Hills",
    description: "Grand executive home featuring 4 oversized bedrooms, formal dining and living spaces, panoramic valley vistas, primary master suite with private retreat balcony, and drought-tolerant landscaping.",
    image: "/images/lifestyle-interior.jpg",
    mlsNumber: "CRMLS #PW261150",
    keyFeatures: ["Panoramic Vistas", "Master Retreat Balcony", "Formal Dining", "Nearly 3,000 Sq Ft"]
  }
];

export const LIFESTYLE_GALLERY = [
  {
    id: 1,
    title: "Contemporary Architectural Design",
    category: "Modern Architecture",
    description: "Expansive glass facades, natural limestone, and warm cedar accents harmonizing with the Southern California landscape.",
    image: "/images/lifestyle-architecture.jpg"
  },
  {
    id: 2,
    title: "Coastal Outdoor Living",
    category: "Outdoor Living",
    description: "Designed for effortless entertaining with shaded pergola dining, built-in fire lounge, and golden-hour sunset vistas.",
    image: "/images/lifestyle-outdoor.jpg"
  },
  {
    id: 3,
    title: "Sunlit Curated Interiors",
    category: "Interior Design",
    description: "Open-concept spaces with warm white oak flooring, subtle champagne brass details, and seamless indoor-outdoor flow.",
    image: "/images/lifestyle-interior.jpg"
  }
];

export const STATISTICS_DATA = [
  {
    label: "Documented Sales",
    value: "1",
    subtext: "Verified closed transaction in Corona, CA"
  },
  {
    label: "Documented Sale Price",
    value: "$810K",
    subtext: "1121 Iris Cir, closed March 4, 2026"
  },
  {
    label: "Average Sale Price",
    value: "$810K",
    subtext: "Single-family residential cul-de-sac"
  },
  {
    label: "Fiduciary Focus",
    value: "100%",
    subtext: "Dedicated buyer & seller advocacy"
  }
];

export const REAL_ESTATE_EXPERIENCE = [
  {
    period: "Active Licensed Practice",
    role: "Licensed Real Estate Professional",
    organization: "Keller Williams Coastal Properties",
    location: "Long Beach & Corona, CA",
    summary: "Guiding clients through residential acquisitions, buyer representation, and market analysis across Central Corona, Riverside County, and coastal Southern California. Dedicated to fiduciary advocacy, meticulous escrow management, and transparent client communication.",
    highlights: [
      "Represented buyer in the verified acquisition of 1121 Iris Cir, Corona CA for $810,000",
      "Specialized in buyer advisory, contract negotiation, and property evaluation",
      "Backed by the premier technology and transaction support of Keller Williams Coastal Properties"
    ]
  },
  {
    period: "Licensing & Credentials",
    role: "California Real Estate Licensure",
    organization: "California Department of Real Estate (DRE)",
    location: "DRE #02179342",
    summary: "Fully licensed by the State of California Department of Real Estate. Adheres to strict fiduciary standards, fair housing laws, and continuous professional ethics training.",
    highlights: [
      "Official California DRE License #02179342 in good standing",
      "Member of the National Association of REALTORS® (NAR)",
      "Member of the California Association of REALTORS® (CAR) and CRMLS"
    ]
  },
  {
    period: "Specialized Practice",
    role: "Buyer Representation & Contract Strategy",
    organization: "Residential Real Estate Practice",
    location: "Southern California",
    summary: "Expertise in navigating competitive bidding environments, crafting compelling purchase offers, negotiating seller repair credits, and coordinating home inspections.",
    highlights: [
      "In-depth comparative market analysis (CMA) before structuring offers",
      "Rigorous contract contingency oversight (inspection, appraisal, loan)",
      "Collaborative lender coordination ensuring on-time escrow closing"
    ]
  },
  {
    period: "Market Expertise",
    role: "Central Corona & Regional Market Advisory",
    organization: "Inland Empire & Coastal Network",
    location: "Corona & Long Beach, CA",
    summary: "Deep knowledge of Central Corona neighborhoods, lot configurations, cul-de-sacs, school districts, and commuting corridors along CA-91, I-15, and CA-71, paired with coastal Southern California reach.",
    highlights: [
      "Specialization in single-family residential homes and pool properties",
      "Relocation guidance for buyers transitioning between coastal and inland hubs",
      "Personalized, client-first fiduciary representation at every step"
    ]
  }
];

export const SERVICES = [
  {
    id: "buyer",
    title: "Buyer Representation",
    tagline: "Dedicated advocacy from search to keys",
    description: "Navigating today's competitive Southern California market requires strategic positioning, accurate valuation insights, and relentless advocacy. Hanin provides customized home searches, in-depth neighborhood comparisons, and skilled negotiation to help you secure the right home under favorable terms.",
    features: [
      "Custom MLS search tailored to your exact lifestyle criteria",
      "In-depth comparative market analysis before writing offers",
      "Strategic contract structuring and counter-offer negotiation",
      "Comprehensive inspection, appraisal, and escrow guidance"
    ],
    ctaText: "Find Your Home",
    ctaAction: "buyer"
  },
  {
    id: "seller",
    title: "Seller Advisory & Marketing",
    tagline: "Maximizing value through presentation and strategy",
    description: "Showcasing your property with the prestige it deserves. Leveraging professional visual staging, your home will be presented with high-definition media, strategic pricing models, and targeted marketing campaigns to attract qualified, motivated buyers.",
    features: [
      "Complimentary comprehensive home valuation & equity analysis",
      "Staging & visual presentation recommendations",
      "High-definition photography and digital marketing distribution",
      "Diligent vetting of buyer financing and closing coordination"
    ],
    ctaText: "Request Property Valuation",
    ctaAction: "seller"
  },
  {
    id: "consultation",
    title: "Real Estate Consultation",
    tagline: "Clarity and confidence for your next move",
    description: "Whether you are a first-time homebuyer evaluating your readiness, considering a relocation to Corona or Long Beach, or exploring residential real estate strategies, Hanin offers honest, pressure-free consultations designed around your goals.",
    features: [
      "First-time buyer roadmap & financing readiness overview",
      "Corona & Southern California neighborhood orientation",
      "Market trend evaluations and timing assessments",
      "Referrals to reputable local lenders, inspectors, and contractors"
    ],
    ctaText: "Book a Consultation",
    ctaAction: "consultation"
  }
];

export const SERVICE_PRINCIPLES = [
  {
    number: "01",
    title: "Fiduciary Loyalty & Honest Advocacy",
    description: "Your financial interests and peace of mind always take priority. Hanin provides candid assessments—telling you what you need to know about a property, not just what closes a deal."
  },
  {
    number: "02",
    title: "Bespoke, Hands-On Guidance",
    description: "You work directly with Hanin throughout every milestone. No handoffs to junior assistants—just personal, accountable service from the first showing through the final walkthrough."
  },
  {
    number: "03",
    title: "Meticulous Contract & Market Analysis",
    description: "Leveraging structured data, verified comparable sales, and thorough review of disclosures to ensure you make well-informed, protected investment decisions."
  },
  {
    number: "04",
    title: "Respectful, Proactive Communication",
    description: "Real estate moves quickly. Hanin delivers prompt responses, proactive updates at every escrow stage, and clear answers so you are never left guessing."
  }
];

export const FAQS = [
  {
    question: "Who is Hanin Charaf Eddine and what brokerage is she affiliated with?",
    answer: "Hanin Charaf Eddine (DRE #02179342) is a licensed real estate professional affiliated with Keller Williams Coastal Properties, based in Long Beach, California. She provides dedicated buyer representation, seller advisory, and personalized real estate consulting across Central Corona and Southern California."
  },
  {
    question: "What is Hanin's documented sales record?",
    answer: "Hanin represented the buyer in the verified purchase of 1121 Iris Cir in Corona, CA 92882, which closed on March 4, 2026, for $810,000. Her documented track record reflects an average sale price of $810,000 with a focus on single-family residential pool properties."
  },
  {
    question: "What geographic areas does Hanin specialize in?",
    answer: "Hanin specializes in Central Corona and the city of Corona in Riverside County (Zip code 92882), as well as Long Beach and neighboring coastal communities in Los Angeles and Orange Counties through Keller Williams Coastal Properties."
  },
  {
    question: "How does Hanin assist first-time homebuyers?",
    answer: "Hanin walks first-time buyers step-by-step through every phase: obtaining mortgage pre-approval, identifying true property value, crafting competitive purchase offers, navigating home inspections, and reviewing escrow disclosures without stress."
  },
  {
    question: "How can I schedule a consultation with Hanin?",
    answer: "You can reach Hanin directly by phone at (657) 567-3640 or submit an inquiry through the contact form on this website. She offers flexible scheduling for phone calls, virtual meetings, or in-person property consultations."
  }
];
