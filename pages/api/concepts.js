// Sample concepts data - in production, this would come from a database
const concepts = [
  {
    id: 1,
    title: "AI-Powered Micro-Investment Platform",
    category: "fintech",
    description: "Machine learning algorithms that invest spare change from daily transactions into personalized portfolios targeting 78M Americans with limited investment options.",
    marketSize: 45,
    timeline: "12-18mo",
    investmentLevel: "50k-200k",
    difficulty: 4,
    tags: ["High Growth", "Proven Demand", "Recurring Revenue"],
    packageTiers: ["Architect", "Enterprise"],
    targetCustomer: "Millennials and Gen Z with limited investment knowledge but regular spending patterns, particularly those earning $30-75K annually who want to start investing but feel overwhelmed by traditional options.",
    revenueModel: "Management fees (0.25% of assets under management) plus premium analytics and financial planning subscriptions ($9.99/month). Additional revenue from partner bank accounts and credit card referrals.",
    keyDifferentiator: "Behavioral psychology integration to maximize saving rates through micro-commitments and gamification, combined with tax-loss harvesting even on small portfolios.",
    implementationNotes: [
      "Requires SEC registration and FINRA compliance before launch",
      "Partner with established custodial bank for asset management",
      "Develop mobile-first app with bank account integration APIs",
      "Build machine learning models for portfolio optimization",
      "Create educational content for financial literacy"
    ]
  },
  {
    id: 2,
    title: "AI Personal Assistant for Home Management",
    category: "life-enhancement",
    description: "Voice-activated system managing household tasks, maintenance, and scheduling for dual-income households seeking time optimization.",
    marketSize: 85,
    timeline: "15-18mo",
    investmentLevel: "50k-200k",
    difficulty: 3,
    tags: ["IoT Integration", "Subscription Model", "Local Partnerships"],
    packageTiers: ["Foundation", "Architect", "Enterprise"],
    targetCustomer: "Dual-income households earning $75K+ with limited time for household management, particularly families with children or professionals working 50+ hours per week.",
    revenueModel: "Hardware sales ($199-299 per unit) plus monthly service subscriptions ($39/month) covering maintenance scheduling, vendor coordination, and household optimization.",
    keyDifferentiator: "Integration with local service providers and predictive maintenance algorithms that learn household patterns to prevent issues before they occur.",
    implementationNotes: [
      "Partner with IoT device manufacturers for hardware integration",
      "Build local service provider network in target markets",
      "Develop natural language processing for household commands",
      "Create predictive maintenance algorithms",
      "Establish data privacy and security protocols"
    ]
  },
  {
    id: 3,
    title: "Personalized Nutrition via Genetic Testing",
    category: "novel-tech",
    description: "Real-time dietary recommendations based on genetic markers and biomarkers for health-conscious consumers willing to pay premium for personalization.",
    marketSize: 180,
    timeline: "24-36mo",
    investmentLevel: "200k+",
    difficulty: 5,
    tags: ["Breakthrough Tech", "Premium Pricing", "Clinical Validation"],
    packageTiers: ["Enterprise"],
    targetCustomer: "Health-conscious consumers aged 25-55 with disposable income ($100K+ household) who have tried multiple diets without success and are willing to pay premium for personalized solutions.",
    revenueModel: "Genetic testing kits ($299 one-time) plus ongoing personalized nutrition plans ($49/month) with optional premium coaching ($149/month).",
    keyDifferentiator: "Continuous biomarker monitoring through wearable integration with adaptive recommendations that evolve based on real-time health data and genetic predispositions.",
    implementationNotes: [
      "Partner with established genetic testing laboratories",
      "Conduct clinical trials to validate dietary recommendations",
      "Obtain FDA clearance for health claims and biomarker tracking",
      "Build HIPAA-compliant data infrastructure",
      "Develop mobile app with wearable device integrations"
    ]
  },
  {
    id: 4,
    title: "Cross-Border Freelancer Payment Network",
    category: "fintech",
    description: "Blockchain-based instant payments with automatic tax compliance targeting the $400B global freelancer economy payment friction.",
    marketSize: 400,
    timeline: "18-24mo",
    investmentLevel: "200k+",
    difficulty: 5,
    tags: ["Blockchain", "Global Market", "Regulatory Complex"],
    packageTiers: ["Architect", "Enterprise"],
    targetCustomer: "International freelancers earning $50K+ annually and remote work platforms managing cross-border payments, particularly those frustrated with high fees and slow transfer times.",
    revenueModel: "Transaction fees (1.5% per transfer) plus premium business accounts ($29/month) offering enhanced features like automated invoicing and tax document generation.",
    keyDifferentiator: "Automated tax documentation for multiple jurisdictions combined with instant settlement using stablecoin technology, reducing both fees and compliance burden.",
    implementationNotes: [
      "Obtain money transmission licenses in target countries",
      "Partner with established cryptocurrency exchanges",
      "Build compliance system for international tax regulations",
      "Develop blockchain integration with traditional banking",
      "Create automated tax document generation system"
    ]
  },
  {
    id: 5,
    title: "Senior Care Coordination Platform",
    category: "life-enhancement",
    description: "Family dashboard coordinating medical appointments, caregivers, and daily check-ins for 54M seniors needing support coordination.",
    marketSize: 460,
    timeline: "12-18mo",
    investmentLevel: "50k-200k",
    difficulty: 3,
    tags: ["HIPAA Compliant", "Emergency Response", "Family Focused"],
    packageTiers: ["Foundation", "Architect", "Enterprise"],
    targetCustomer: "Adult children (ages 45-65) of aging parents who live separately but need coordination support, particularly families where children live in different cities than parents.",
    revenueModel: "Family subscriptions ($149/month) plus caregiver marketplace fees (15% commission) and optional premium services like 24/7 monitoring ($299/month).",
    keyDifferentiator: "Emergency response integration with family notification systems and predictive health monitoring that alerts families to changes in daily patterns.",
    implementationNotes: [
      "Ensure HIPAA compliance for medical data handling",
      "Partner with local caregiving services and medical providers",
      "Develop emergency response protocols and notification systems",
      "Build caregiver background check and verification system",
      "Create family communication and coordination tools"
    ]
  },
  {
    id: 6,
    title: "SMB Cash Flow Prediction SaaS",
    category: "fintech",
    description: "AI-driven cash flow forecasting integrated with accounting systems for 32.5M US small businesses struggling with cash flow management.",
    marketSize: 65,
    timeline: "9-12mo",
    investmentLevel: "under-50k",
    difficulty: 2,
    tags: ["SaaS Model", "Quick to Market", "SMB Focus"],
    packageTiers: ["Foundation", "Architect", "Enterprise"],
    targetCustomer: "Small businesses with $1M-$10M annual revenue that experience seasonal variations or irregular payment cycles, particularly service-based businesses.",
    revenueModel: "Tiered SaaS subscriptions ($99-$499/month) based on business size and features, plus optional cash flow consulting services ($200/hour).",
    keyDifferentiator: "Industry-specific forecasting models with 85%+ accuracy that integrate with existing accounting software and provide actionable recommendations for cash flow optimization.",
    implementationNotes: [
      "Integrate with popular accounting software (QuickBooks, Xero, etc.)",
      "Build AI models trained on industry-specific cash flow patterns",
      "Develop data security protocols for financial information",
      "Create dashboard and alert systems for cash flow warnings",
      "Build customer success team for onboarding and support"
    ]
  }
];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // In production, you would verify the JWT token here
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify token (simplified for demo)
    res.status(200).json(concepts);
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
