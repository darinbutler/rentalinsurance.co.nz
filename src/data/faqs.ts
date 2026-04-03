export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 'what-is-rental-insurance',
    question: 'What is rental/tenants insurance?',
    answer:
      'Rental insurance (also called tenants insurance or contents insurance) protects your personal belongings inside a rental property. It covers items like furniture, electronics, clothing, and appliances in case of damage, theft, or loss. It typically also includes tenant liability coverage if you accidentally damage the rental property.',
    category: 'General',
  },
  {
    id: 'what-does-rental-insurance-cover',
    question: 'What does rental insurance cover?',
    answer:
      'Rental insurance typically covers: 1) Contents - your furniture, electronics, clothing, and other belongings. 2) Tenant Liability - accidental damage you cause to the rental property (up to policy limits, usually $2M). 3) Temporary Accommodation - if your rental becomes uninhabitable due to a covered incident. 4) Legal Costs - for disputes with landlords or other legal matters up to policy limits.',
    category: 'Coverage',
  },
  {
    id: 'what-is-not-covered',
    question: 'What is NOT covered by rental insurance?',
    answer:
      'Rental insurance typically does NOT cover: 1) Intentional damage or theft you cause. 2) Wear and tear or normal depreciation. 3) Damage from natural disasters (unless earthquake cover is added). 4) Items kept outside the rental property. 5) High-value items unless specifically listed and covered. 6) Damage from pests or animals. 7) Damage to the building itself (that\'s landlord\'s responsibility).',
    category: 'Coverage',
  },
  {
    id: 'nz-law-tenant-liability',
    question: 'What does NZ law say about tenant liability?',
    answer:
      'Under NZ law (Residential Tenancies Act 2019), tenants are liable for careless damage they cause, limited to the LOWEST of: 1) The actual cost of repair/replacement. 2) Four weeks rent. 3) The landlord\'s insurance excess. This is where tenant liability insurance helps - it covers these costs so you don\'t have to pay out of pocket.',
    category: 'Legal',
  },
  {
    id: 'how-much-does-rental-insurance-cost',
    question: 'How much does rental insurance cost?',
    answer:
      'Rental insurance in NZ starts from around $20/month ($240/year) depending on your contents value, location, and chosen excess. Most renters pay $20-$30 per month for basic coverage. The price varies based on: 1) Contents value (what you\'re insuring). 2) Your chosen excess (higher excess = lower premium). 3) The insurer and their pricing. 4) Any optional add-ons (earthquake, accidental damage).',
    category: 'Cost',
  },
  {
    id: 'is-rental-insurance-compulsory',
    question: 'Is rental insurance compulsory in NZ?',
    answer:
      'Rental insurance is NOT legally compulsory in New Zealand. However, your rental agreement may require it. Some landlords make rental insurance mandatory as a condition of the lease. It\'s highly recommended anyway because without it, you\'re personally liable for accidental damage to the property and your belongings aren\'t protected.',
    category: 'Legal',
  },
  {
    id: 'how-do-i-claim',
    question: 'How do I make a claim?',
    answer:
      'Making a claim is straightforward: 1) Contact your insurer\'s claims team (usually 24/7 phone line). 2) Provide your policy number and claim details. 3) Document the damage with photos/videos. 4) Provide receipts/proof of ownership if available. 5) The insurer will assess the claim and offer settlement. Most claims are settled within 5-10 working days.',
    category: 'Claims',
  },
  {
    id: 'what-is-excess',
    question: 'What is an excess?',
    answer:
      'An excess is the amount YOU pay towards a claim, and the insurer pays the rest. For example, if you have a $250 excess and claim $1,000 of damage, you pay $250 and the insurer pays $750. A higher excess means lower monthly premiums, but you pay more if you claim. A lower excess means higher premiums but less out-of-pocket if you claim.',
    category: 'Claims',
  },
  {
    id: 'student-accommodation',
    question: 'Do I need rental insurance for student accommodation?',
    answer:
      'Yes! Student accommodation is one of the most important times to have rental insurance. Student flats often have shared belongings, higher theft risk, and accidental damage is common. Many insurers offer student-specific policies with lower premiums for that age group. It\'s also often a requirement in your tenancy agreement.',
    category: 'Student',
  },
  {
    id: 'flatmate-insurance',
    question: 'How does rental insurance work with flatmates?',
    answer:
      'If you have flatmates, each person typically gets their own separate rental insurance policy covering only their personal belongings. Some insurers offer "combined" policies for flatmates where contents are listed separately. Tenant liability is usually shared equally between all tenants on the lease. Check your policy terms - some insurers limit coverage for shared items.',
    category: 'Flatmates',
  },
  {
    id: 'earthquake-cover',
    question: 'Does rental insurance include earthquake cover?',
    answer:
      'Most basic rental insurance policies do NOT include earthquake cover automatically. Earthquake is usually an optional add-on. However, the Earthquake Commission (EQC) provides up to $15,000 of earthquake cover for contents under the EQC Act (capped at $15,000 per person). Some insurers like Tower include earthquake cover in their standard policies. Always check your policy details.',
    category: 'Coverage',
  },
  {
    id: 'how-to-compare-quotes',
    question: 'How should I compare rental insurance quotes?',
    answer:
      'When comparing quotes: 1) Ensure all quotes have the same contents value and excess. 2) Check what\'s included (accidental damage, temporary accommodation, legal costs). 3) Compare the rating and reputation of insurers. 4) Look at claims process and customer service. 5) Check for any discounts (multi-policy, loyalty). Don\'t just pick the cheapest - consider the overall value and coverage.',
    category: 'General',
  },
];
