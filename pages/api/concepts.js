import jwt from 'jsonwebtoken';

// Sample business concept data - In production, this would come from a database
const concepts = {
  categories: {
    fintech: [
      {
        id: 1,
        category: 'fintech',
        title: 'Automated Personal Budget Optimizer',
        description: 'AI-powered platform that automatically categorizes expenses, negotiates bills, and optimizes spending patterns to maximize savings while maintaining lifestyle preferences.',
        marketSize: '$45B',
        stage: 'MVP Ready',
        riskLevel: 'Medium',
        timeToMarket: '8-12 months',
        investmentRequired: '$150K-$300K',
        targetAudience: 'Young professionals, millennials with disposable income',
        keyFeatures: ['Automated bill negotiation', 'Smart categorization', 'Goal-based savings', 'Investment recommendations'],
        competitiveAdvantage: 'First-to-market with AI bill negotiation, partnerships with major service providers',
        revenueModel: 'Subscription ($9.99/month) + percentage of savings achieved',
        marketValidation: 'Survey of 2,000 users showed 78% would pay for automated financial management',
        technicalRequirements: ['Machine learning infrastructure', 'Banking API integrations', 'Security compliance'],
        regulatoryConsiderations: 'Financial services regulations, data privacy compliance',
        exitStrategy: 'Acquisition by major fintech company or traditional bank',
        projectedRevenue: {
          year1: '$250K',
          year2: '$2.1M',
          year3: '$8.5M'
        }
      },
      {
        id: 2,
        category: 'fintech',
        title: 'Cross-Border Freelancer Payment Platform',
        description: 'Streamlined payment solution specifically designed for freelancers working with international clients, featuring instant currency conversion, tax optimization, and integrated invoicing.',
        marketSize: '$32B',
        stage: 'Prototype Complete',
        riskLevel: 'High',
        timeToMarket: '12-18 months',
        investmentRequired: '$300K-$500K',
        targetAudience: 'International freelancers, remote workers, digital nomads',
        keyFeatures: ['Instant currency conversion', 'Multi-country tax optimization', 'Integrated invoicing', 'Compliance automation'],
        competitiveAdvantage: 'Specialized focus on freelancer pain points, built-in tax optimization across 50+ countries',
        revenueModel: 'Transaction fees (2.5%) + premium features subscription',
        marketValidation: 'Partnerships with 3 major freelancer platforms, 500+ beta users',
        technicalRequirements: ['Multi-currency payment processing', 'Tax calculation engines', 'Compliance monitoring'],
        regulatoryConsiderations: 'International money transmission licenses, tax reporting compliance',
        exitStrategy: 'Strategic acquisition by PayPal, Stripe, or major freelancer platform',
        projectedRevenue: {
          year1: '$180K',
          year2: '$1.8M',
          year3: '$6.2M'
        }
      }
    ],
    lifeEnhancement: [
      {
        id: 3,
        category: 'life-enhancement',
        title: 'Personalized Wellness Hub Platform',
        description: 'Comprehensive health and wellness platform that integrates wearable data, nutrition tracking, mental health resources, and personalized coaching to create individualized wellness plans.',
        marketSize: '$28B',
        stage: 'Market Research Complete',
        riskLevel: 'Medium',
        timeToMarket: '10-14 months',
        investmentRequired: '$200K-$400K',
        targetAudience: 'Health-conscious adults 25-45, corporate wellness programs',
        keyFeatures: ['Wearable integration', 'AI-powered coaching', 'Nutrition optimization', 'Mental health tracking'],
        competitiveAdvantage: 'Holistic approach combining physical and mental health, corporate partnership focus',
        revenueModel: 'B2C subscription ($19.99/month) + B2B corporate licenses ($50/employee/year)',
        marketValidation: 'Pilot with 2 Fortune 500 companies showed 23% improvement in employee wellness scores',
        technicalRequirements: ['Wearable device APIs', 'Machine learning for personalization', 'HIPAA compliance'],
        regulatoryConsiderations: 'Healthcare data privacy, medical device regulations for certain features',
        exitStrategy: 'Acquisition by major health insurer or wellness company',
        projectedRevenue: {
          year1: '$320K',
          year2: '$2.8M',
          year3: '$9.1M'
        }
      },
      {
        id: 4,
        category: 'life-enhancement',
        title: 'Smart Task Management Ecosystem',
        description: 'AI-driven productivity platform that learns user patterns, automatically prioritizes tasks, schedules optimal work blocks, and integrates with all major productivity tools to eliminate decision fatigue.',
        marketSize: '$19B',
        stage: 'Alpha Testing',
        riskLevel: 'Low',
        timeToMarket: '6-9 months',
        investmentRequired: '$100K-$250K',
        targetAudience: 'Knowledge workers, entrepreneurs, busy professionals',
        keyFeatures: ['Automatic task prioritization', 'Calendar optimization', 'Energy level tracking', 'Cross-platform integration'],
        competitiveAdvantage: 'Focus on decision fatigue reduction, advanced AI learning algorithms',
        revenueModel: 'Freemium model with premium features at $12/month, team plans at $8/user/month',
        marketValidation: 'Beta testing with 1,000 users showed 34% productivity improvement',
        technicalRequirements: ['AI/ML infrastructure', 'Multiple API integrations', 'Real-time sync capabilities'],
        regulatoryConsiderations: 'Data privacy compliance, workplace monitoring regulations',
        exitStrategy: 'Strategic acquisition by Microsoft, Google, or Atlassian',
        projectedRevenue: {
          year1: '$150K',
          year2: '$1.2M',
          year3: '$4.8M'
        }
      }
    ],
    novelTech: [
      {
        id: 5,
        category: 'novel-tech',
        title: 'Personalized Nutrition Analytics Platform',
        description: 'Advanced platform using genetic testing, microbiome analysis, and continuous glucose monitoring to provide hyper-personalized nutrition recommendations and meal planning.',
        marketSize: '$67B',
        stage: 'Technology Development',
        riskLevel: 'High',
        timeToMarket: '18-24 months',
        investmentRequired: '$500K-$1M',
        targetAudience: 'Health optimization enthusiasts, individuals with metabolic conditions, athletes',
        keyFeatures: ['Genetic analysis integration', 'Microbiome tracking', 'CGM data analysis', 'Personalized meal planning'],
        competitiveAdvantage: 'Most comprehensive personalization approach, medical-grade accuracy',
        revenueModel: 'Initial genetic test ($299) + monthly subscription ($49) + premium coaching ($199/month)',
        marketValidation: 'Partnerships with 2 major labs, 200+ pilot users, 87% reported significant health improvements',
        technicalRequirements: ['Genetic analysis partnerships', 'Microbiome testing capabilities', 'CGM device integrations'],
        regulatoryConsiderations: 'FDA oversight for health claims, genetic privacy regulations, medical device compliance',
        exitStrategy: 'Acquisition by major health/nutrition company or IPO potential',
        projectedRevenue: {
          year1: '$280K',
          year2: '$3.2M',
          year3: '$12.8M'
        }
      },
      {
        id: 6,
        category: 'novel-tech',
        title: 'AR-Enhanced Professional Training',
        description: 'Augmented reality platform for professional skill training across industries, providing immersive, hands-on learning experiences with real-time performance analytics and certification tracking.',
        marketSize: '$43B',
        stage: 'Prototype Development',
        riskLevel: 'Medium',
        timeToMarket: '15-20 months',
        investmentRequired: '$400K-$700K',
        targetAudience: 'Corporate training departments, trade schools, professional certification bodies',
        keyFeatures: ['Industry-specific AR modules', 'Performance analytics', 'Certification integration', 'Multi-user collaboration'],
        competitiveAdvantage: 'Focus on practical skills vs entertainment, industry partnership approach',
        revenueModel: 'B2B licensing ($10K-$50K per module) + per-learner fees ($25/month)',
        marketValidation: 'Pilots with 3 major manufacturers, 40% faster skill acquisition vs traditional training',
        technicalRequirements: ['AR development platform', 'Computer vision capabilities', 'Cloud-based analytics'],
        regulatoryConsiderations: 'Industry-specific training standards, safety certification requirements',
        exitStrategy: 'Strategic acquisition by major training company or technology platform',
        projectedRevenue: {
          year1: '$200K',
          year2: '$2.5M',
          year3: '$8.9M'
        }
      }
    ]
  }
};

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Get and verify JWT token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access token required' });
  }

  const token = authHeader.substring(7);
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Check if user subscription is active (in a real app, check database)
    if (!decoded.userId) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Flatten all concepts into a single array
    const allConcepts = [
      ...concepts.categories.fintech,
      ...concepts.categories.lifeEnhancement,
      ...concepts.categories.novelTech
    ];

    res.status(200).json(allConcepts);
    
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
