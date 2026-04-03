export interface Insurer {
  id: string;
  name: string;
  slug: string;
  rating: number;
  premiumRange: string;
  description: string;
  coverageFeatures: string[];
  pros: string[];
  cons: string[];
  established: number;
  claimsProcess: string;
}

export const insurers: Insurer[] = [
  {
    id: 'aa-insurance',
    name: 'AA Insurance',
    slug: 'aa-insurance',
    rating: 4.8,
    premiumRange: 'From $22/month',
    description: 'Leading NZ insurer with #1 customer satisfaction rating (Consumer NZ)',
    coverageFeatures: [
      'Contents coverage up to $100,000+',
      'Tenant liability protection',
      'Accidental damage cover',
      'Flexible excess options',
      'Temporary accommodation',
      'Legal liability up to $2M',
    ],
    pros: [
      'Highest customer satisfaction in NZ',
      'Flexible excess options (you choose)',
      'Fast claims processing',
      'Multi-policy discounts available',
      'Online management portal',
    ],
    cons: [
      'Premium pricing on some policies',
      'Excess costs can be higher',
    ],
    established: 1987,
    claimsProcess: '24/7 claims hotline. Simple online lodgement. Average settlement 5-10 working days.',
  },
  {
    id: 'ami',
    name: 'AMI',
    slug: 'ami',
    rating: 4.6,
    premiumRange: 'From $20/month',
    description: 'New Zealand-owned insurer with competitive pricing and comprehensive cover',
    coverageFeatures: [
      'Contents coverage up to $100,000+',
      'Tenant liability protection',
      'Multi-policy discounts (up to 15%)',
      'Accidental damage add-on',
      'Temporary accommodation',
      'Legal liability up to $2M',
    ],
    pros: [
      'Most competitive pricing',
      'NZ-owned and operated',
      'Generous multi-policy discounts',
      'Simple claim process',
      'No brokers fees',
    ],
    cons: [
      'Less customisation options',
      'Fewer premium levels',
    ],
    established: 1988,
    claimsProcess: '24/7 claims support. Online lodgement available. Average settlement 7-10 working days.',
  },
  {
    id: 'state-insurance',
    name: 'State Insurance',
    slug: 'state-insurance',
    rating: 4.5,
    premiumRange: 'From $24/month',
    description: 'Comprehensive coverage with easy online management tools',
    coverageFeatures: [
      'Contents coverage up to $100,000+',
      'Accidental damage protection',
      'Tenant liability up to $2M',
      'Full replacement cover option',
      'Temporary accommodation (30 days)',
      'Emergency support services',
    ],
    pros: [
      'Easy online management',
      'Comprehensive standard cover',
      'No-questions lodgement',
      'Competitive excess levels',
      'Good mobile app',
    ],
    cons: [
      'Higher base premiums',
      'Limited excess choices',
    ],
    established: 1979,
    claimsProcess: '24/7 claims team. Quick assessment. Average settlement 5-7 working days.',
  },
  {
    id: 'tower',
    name: 'Tower',
    slug: 'tower',
    rating: 4.7,
    premiumRange: 'From $21/month',
    description: 'Home & Contents Insurer of the Year 2025/2026 with earthquake cover included',
    coverageFeatures: [
      'Contents coverage up to $100,000+',
      'Earthquake cover included (no EQC cap)',
      'Tenant liability protection',
      'Accidental damage cover',
      'Temporary accommodation',
      'Legal liability up to $2M',
    ],
    pros: [
      'Insurer of the Year 2025/2026',
      'Earthquake cover included',
      'Competitive pricing',
      'Fast claims resolution',
      'Online quote in minutes',
    ],
    cons: [
      'Earthquake add-on expensive historically',
      'Fewer customisation options',
    ],
    established: 1994,
    claimsProcess: '24/7 phone support. Online claims lodgement. Average settlement 5-7 working days.',
  },
  {
    id: 'vero',
    name: 'Vero',
    slug: 'vero',
    rating: 4.4,
    premiumRange: 'From $25/month',
    description: 'Specialist insurer with premium protection for high-value belongings',
    coverageFeatures: [
      'Contents coverage up to $200,000+',
      'High-value items specialist',
      'Accidental damage coverage',
      'Tenant liability protection',
      'Temporary accommodation (60 days)',
      'Legal liability up to $5M option',
    ],
    pros: [
      'Excellent for high-value items',
      'Specialist damage assessment',
      'Extended temporary accommodation',
      'Premium customer service',
      'Higher liability options',
    ],
    cons: [
      'Premium pricing',
      'More complex application',
      'Not suitable for basic coverage',
    ],
    established: 1905,
    claimsProcess: 'Dedicated claims team. On-site assessment for large claims. Expert appraisals available.',
  },
  {
    id: 'nzi',
    name: 'NZI',
    slug: 'nzi',
    rating: 4.3,
    premiumRange: 'From $26/month',
    description: 'Premium service with dedicated claims support and expert assistance',
    coverageFeatures: [
      'Contents coverage up to $150,000+',
      'Accidental damage cover',
      'Dedicated claims team',
      'Tenant liability protection',
      'Temporary accommodation (45 days)',
      'Legal liability up to $2M',
    ],
    pros: [
      'Dedicated claims support',
      'Expert damage assessment',
      'Premium service throughout',
      'Personal account manager option',
      'Flexible cover options',
    ],
    cons: [
      'Higher premiums',
      'More complex products',
      'Smaller network',
    ],
    established: 1872,
    claimsProcess: 'Personal claims handler assigned. Direct contact support. Average settlement 3-5 working days.',
  },
];
