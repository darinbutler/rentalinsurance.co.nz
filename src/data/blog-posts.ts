export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: number;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-rental-insurance-nz',
    title: 'Understanding Rental Insurance in New Zealand',
    excerpt: 'A comprehensive guide to what rental insurance is, why you need it, and how it protects renters in New Zealand.',
    content: `
      <h2>What is Rental Insurance?</h2>
      <p>Rental insurance, also known as tenants insurance or contents insurance, is a type of insurance policy designed to protect your personal belongings and cover your liability while renting a property in New Zealand. Unlike buildings insurance (which covers the structure), rental insurance covers items inside the rental property such as furniture, electronics, clothing, and appliances.</p>

      <h2>Why Rental Insurance Matters in NZ</h2>
      <p>In New Zealand, landlords are responsible for insuring the building structure, but YOU are responsible for your personal belongings. If your flat is burglarized, catches fire, or floods, your belongings are not covered by the landlord's insurance. Additionally, under the Residential Tenancies Act 2019, you can be held liable for careless damage you cause to the rental property.</p>

      <h2>The Three Key Components</h2>
      <h3>1. Contents Coverage</h3>
      <p>This is the main part of the policy. It covers all your personal belongings inside the rental property - furniture, electronics, clothing, kitchen items, and more. You choose the value you want to insure (typically between $20,000 and $100,000+ depending on your belongings).</p>

      <h3>2. Tenant Liability</h3>
      <p>This covers accidental damage YOU cause to the rental property itself. For example, if you accidentally make a large hole in the wall or damage the kitchen, your tenant liability insurance covers the repair costs (usually up to $2 million). Under NZ law, your liability is limited to the lowest of: actual repair cost, 4 weeks rent, or the landlord's insurance excess.</p>

      <h3>3. Additional Benefits</h3>
      <p>Most policies include temporary accommodation (if your rental becomes uninhabitable), legal liability cover, and sometimes accidental damage protection for your belongings.</p>

      <h2>How Much Does It Cost?</h2>
      <p>Rental insurance in NZ is affordable. Most policies start from around $20-$30 per month, with the total cost depending on your contents value and chosen excess. A higher excess means lower premiums but you pay more if you claim.</p>

      <h2>Is It Compulsory?</h2>
      <p>Rental insurance is not legally compulsory in New Zealand, but many landlords require it as part of the rental agreement. Even if it's not required, it's highly recommended because without it you're personally at risk of significant financial loss.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Rental insurance protects your belongings and your liability as a renter</li>
        <li>It's affordable, typically $20-$30 per month</li>
        <li>Always read your lease - many landlords require it</li>
        <li>Compare quotes from multiple insurers to get the best deal</li>
        <li>Don't just pick the cheapest option - consider coverage quality</li>
      </ul>
    `,
    date: '2024-03-15',
    author: 'Sarah Mitchell',
    readTime: 6,
    category: 'Insurance Guide',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  },
  {
    slug: 'what-tenants-insurance-covers',
    title: 'What Does Tenants Insurance Actually Cover?',
    excerpt: 'Detailed breakdown of what is and isn\'t covered by typical tenants insurance policies in New Zealand.',
    content: `
      <h2>What IS Covered</h2>
      <h3>Personal Belongings</h3>
      <p>The main part of your policy covers your personal belongings inside the rental property. This typically includes: furniture (beds, sofas, tables), electronics (TV, laptop, phone), clothing and accessories, kitchen items and appliances, books and media, and sporting equipment. Coverage is up to your chosen sum insured (e.g., $50,000).</p>

      <h3>Accidental Damage (if included)</h3>
      <p>If you add accidental damage cover, it protects your belongings from accidents like spilling wine on your sofa or dropping and breaking your laptop. This is optional and costs extra but is highly recommended.</p>

      <h3>Tenant Liability</h3>
      <p>This covers accidental damage YOU cause to the rental property up to the policy limit (usually $2 million). Examples include: punching a hole in the wall, accidentally breaking the shower screen, water damage from leaving a tap running, or damage from having friends over. Under NZ law, your liability is capped at the lowest of: actual cost to repair, 4 weeks rent, or the landlord's insurance excess.</p>

      <h3>Temporary Accommodation</h3>
      <p>If your rental becomes uninhabitable due to a covered event (fire, flood, burglary), the insurer covers temporary accommodation costs (usually up to 30-60 days depending on policy).</p>

      <h3>Legal Costs and Liability</h3>
      <p>Most policies include cover for legal liability up to $2 million (sometimes up to $5 million with premium insurers) if someone is injured at your property and sues you.</p>

      <h2>What is NOT Covered</h2>
      <h3>Intentional Damage or Theft by You</h3>
      <p>If you deliberately damage your belongings or the property, it's not covered. Insurance only covers accidental damage and genuine risks.</p>

      <h3>Wear and Tear</h3>
      <p>Normal depreciation and aging of items is not covered. For example, if your sofa fades due to sun exposure or your carpet gets worn, that's not an insurable event.</p>

      <h3>The Building Itself</h3>
      <p>Rental insurance only covers your belongings and your liability. The actual building structure, walls, roof, and fixed fittings are the landlord's responsibility.</p>

      <h3>Earthquake (usually)</h3>
      <p>Most standard policies don't include earthquake cover. The Earthquake Commission (EQC) covers up to $15,000 of personal property damage in earthquakes, but you might want additional coverage.</p>

      <h3>Items Outside the Property</h3>
      <p>If items are stored outside the rental or are at another address, they're typically not covered unless specifically added to the policy.</p>

      <h3>High-Value Items</h3>
      <p>Expensive jewelry, art, or collectibles may have limits on coverage (often $500-$1000 per item). You can add specific items with higher limits for an additional premium.</p>

      <h3>Natural Disasters (depends on policy)</h3>
      <p>Some natural disasters may not be covered unless you have specific add-ons. Check your policy wording carefully.</p>

      <h2>Important Things to Check</h2>
      <ul>
        <li>Read your policy documents carefully - exclusions vary between insurers</li>
        <li>Keep receipts or photos of valuable items as proof of ownership</li>
        <li>Update your sum insured if your belongings increase in value</li>
        <li>Ask about any items you're unsure about before a claim</li>
        <li>Understand your excess and what situations are covered</li>
      </ul>
    `,
    date: '2024-03-10',
    author: 'James Chen',
    readTime: 8,
    category: 'Coverage Guide',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
  },
  {
    slug: 'flatmates-guide-contents-insurance',
    title: 'A Flatmate\'s Guide to Contents Insurance',
    excerpt: 'Everything flatmates need to know about protecting their belongings and managing liability in shared rentals.',
    content: `
      <h2>Do All Flatmates Need Their Own Policy?</h2>
      <p>Yes, in most cases each flatmate should have their own separate rental insurance policy. Each person has different belongings, different values to insure, and different circumstances. While you might share a lease with your flatmates, you don't share insurance - each policy is individual and covers only that person's belongings.</p>

      <h2>Understanding Shared Liability</h2>
      <p>This is the tricky part. If one flatmate causes damage to the rental property, who pays? Under the Residential Tenancies Act, all tenants on the lease are jointly and severally liable. This means the landlord can claim against any or all of you. Some insurance policies offer "flatmate protection" that covers your liability for damage caused by flatmates, but this is optional and varies by insurer.</p>

      <h2>Protecting Your Belongings</h2>
      <h3>Get Your Own Policy</h3>
      <p>Make sure you have your own policy covering only YOUR belongings. Don't rely on flatmates' policies - they won't cover your items if something happens.</p>

      <h3>Document Everything</h3>
      <p>Take photos of your room and your belongings. Keep receipts for expensive items. This helps when you need to claim and when you move out to prove what was yours.</p>

      <h3>Use a Separate Room</h3>
      <p>Keep your valuable belongings in your own bedroom rather than common areas. Policies often have limits on coverage for items in shared spaces.</p>

      <h2>Managing Shared Spaces</h2>
      <p>Contents insurance usually covers items in your room but may have limited coverage for shared areas like the lounge or kitchen. If you have an expensive TV or equipment in a shared space, discuss with your flatmates about whose insurance covers what.</p>

      <h2>Common Flatmate Insurance Scenarios</h2>
      <h3>Scenario 1: Someone Breaks the Toilet</h3>
      <p>If Flatmate A deliberately breaks the toilet, they're liable under their tenant liability insurance. If it's an accident, it depends on the circumstances and all flatmates might be considered partially liable.</p>

      <h3>Scenario 2: Shared TV Gets Stolen</h3>
      <p>If you all contributed to buying a shared TV, each flatmate should have documented their contribution and their share is covered by their own policy. This gets complicated - best practice is to keep shared items to a minimum.</p>

      <h3>Scenario 3: Water Damage from Flatmate's Negligence</h3>
      <p>If Flatmate B leaves a tap running and damages everyone's belongings, their tenant liability should cover the damage to others' belongings. Your own contents insurance covers your items, and their liability covers the rest.</p>

      <h2>Best Practices for Flatmates</h2>
      <ul>
        <li>Each person gets their own separate rental insurance policy</li>
        <li>Keep your valuable belongings in your own room</li>
        <li>Document what you own with photos and receipts</li>
        <li>Discuss liability management with flatmates at the start</li>
        <li>Consider a shared property checklist at move-in</li>
        <li>Keep contact details of who has insurance in case of incidents</li>
        <li>Be clear about who owns what when someone moves out</li>
      </ul>

      <h2>Moving Out with Flatmates</h2>
      <p>When someone moves out, there's often dispute about damage and who caused it. Make sure you have: (1) clear photos showing condition when you moved in, (2) documentation of what damage existed, (3) individual insurance policies that cover your items, and (4) communication with other flatmates about shared damage.</p>
    `,
    date: '2024-03-05',
    author: 'Emma Wilson',
    readTime: 7,
    category: 'Flatmate Guide',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
  },
  {
    slug: 'student-accommodation-insurance',
    title: 'Insurance for Student Accommodation: What You Need to Know',
    excerpt: 'Complete guide to student rental insurance in New Zealand, including halls of residence and flatting.',
    content: `
      <h2>Do Students Need Rental Insurance?</h2>
      <p>Yes, absolutely. Most student accommodation providers (both halls of residence and private landlords) require rental insurance as a condition of the lease. Even if it's not required, it's essential because students often have valuable electronics, and shared accommodation has higher risks of theft and accidental damage.</p>

      <h2>Insurance for University Halls</h2>
      <h3>Mandatory Coverage</h3>
      <p>Most university halls of residence require you to have rental insurance. This is usually arranged by the university, and the cost is added to your accommodation bill (typically $100-$150 per year). This covers your personal belongings and your liability for damage in your room.</p>

      <h3>What's Covered in Halls</h3>
      <p>Halls insurance typically covers: your electronics (laptop, phone, camera), clothing and personal items, books and study materials, and your liability for damage in your room (accidental damage to walls, doors, furniture). It usually does NOT cover damage to communal areas or damage caused by other residents.</p>

      <h2>Insurance for Private Student Accommodation</h2>
      <p>If you're renting a flat with other students, you'll need to arrange your own rental insurance. This is where it gets important - you need your own separate policy covering your belongings and your liability for accidental damage.</p>

      <h2>Why Student Insurance is Different</h2>
      <h3>Higher Theft Risk</h3>
      <p>Student accommodation (especially halls) often has higher theft risk due to multiple residents. Many insurers charge a small premium for halls accommodation.</p>

      <h3>Accidental Damage</h3>
      <p>Student flats have higher accidental damage rates - parties, spills, and accidents are more common. Some student-specific policies include accidental damage in the basic cover.</p>

      <h3>Shared Accommodation</h3>
      <p>Understanding liability in shared student flats is critical. Each resident needs their own policy to protect themselves.</p>

      <h2>Valuable Items Students Often Own</h2>
      <ul>
        <li><strong>Laptop/Desktop Computer:</strong> Often the most expensive item. Make sure it's covered under contents (usually yes)</li>
        <li><strong>Phone & Tablet:</strong> Check if these are covered at full replacement value</li>
        <li><strong>Camera/Video Equipment:</strong> Film and media students should note these might have limits</li>
        <li><strong>Musical Instruments:</strong> These often need specific cover and may have limited coverage</li>
        <li><strong>Gaming Equipment:</strong> Consoles and gaming PCs should be specifically listed if valuable</li>
        <li><strong>Jewelry:</strong> Most policies limit individual jewelry items to $500-$1000</li>
      </ul>

      <h2>Money-Saving Tips for Students</h2>
      <h3>Check What Your Parents' Insurance Covers</h3>
      <p>Some contents insurance policies for the family home cover students living away while studying. Ask your parents if their policy extends to you.</p>

      <h3>Student-Specific Discounts</h3>
      <p>Many insurers offer discounts specifically for students with valid student ID. These can save 10-15% on premiums.</p>

      <h3>Choose an Appropriate Excess</h3>
      <p>Students can often afford higher excess ($250-$500) to get lower premiums. This works if you're careful with your belongings.</p>

      <h3>Bundle Deals</h3>
      <p>Some insurers offer student-specific packages that include home & contents or other products at a discount.</p>

      <h2>What Happens During Breaks?</h3>
      <p>If you're moving out of accommodation during semester breaks or going home, let your insurer know. Some policies have specific coverage rules for temporary absences or changes in occupancy.</p>

      <h2>Student Insurance Checklist</h2>
      <ul>
        <li>Check if your accommodation provider requires insurance (most do)</li>
        <li>Get your own separate policy if in private accommodation</li>
        <li>Document all your valuable electronics with photos and receipts</li>
        <li>Make sure your laptop and phone are covered at replacement value</li>
        <li>Ask about student discounts</li>
        <li>Get accidental damage cover if you can afford it</li>
        <li>Keep your policy details safe and accessible</li>
        <li>Update your sum insured if you buy new expensive items</li>
      </ul>
    `,
    date: '2024-02-28',
    author: 'Alex Thompson',
    readTime: 8,
    category: 'Student Guide',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
  },
  {
    slug: 'tenant-liability-nz-law',
    title: 'Tenant Liability Under NZ Law: Your Rights and Responsibilities',
    excerpt: 'Understanding what you\'re legally liable for as a tenant under the Residential Tenancies Act 2019.',
    content: `
      <h2>What is Tenant Liability?</h2>
      <p>Tenant liability is your legal responsibility for damage you cause to the rental property while you're living there. Under the Residential Tenancies Act 2019, you can be held liable for "careless damage" - damage caused by lack of reasonable care, but NOT intentional damage or normal wear and tear.</p>

      <h2>Key Changes in 2019 Legislation</h2>
      <p>The Residential Tenancies Act 2019 introduced important changes to tenant liability:</p>

      <h3>The $4-Week Rent Cap</h3>
      <p>Your liability for careless damage is now limited to the LOWEST of three amounts: (1) The actual cost to repair or replace, (2) Four weeks of rent, or (3) The landlord's insurance excess. This is a huge protection for tenants.</p>

      <p>For example: If you cause $5,000 of damage but you only pay $1,200 rent per month, your maximum liability is just $4,800 (4 weeks rent). If the landlord's insurance excess is $1,000, your liability is only $1,000.</p>

      <h3>No Liability for Intentional Damage by Others</h3>
      <p>You're not liable for damage caused by visitors or other people unless you specifically allowed them to do something dangerous or negligent.</p>

      <h3>Fair Wear and Tear is Excluded</h3>
      <p>You cannot be charged for fair wear and tear. The landlord cannot charge you for general aging of the property, fading from sun exposure, or minor marks from normal use.</p>

      <h2>What You ARE Liable For (Examples)</h2>
      <ul>
        <li><strong>Water damage:</strong> Leaving a tap running and flooding the bathroom</li>
        <li><strong>Structural damage:</strong> Punching a hole in the wall, damaging door frames</li>
        <li><strong>Appliance damage:</strong> Breaking the stove, damaging the dishwasher through misuse</li>
        <li><strong>Carpet/floor damage:</strong> Significant stains, burns, or damage from negligence</li>
        <li><strong>Window damage:</strong> Breaking windows (unless the property was substandard to begin with)</li>
        <li><strong>Electrical damage:</strong> Causing electrical issues through misuse</li>
        <li><strong>Garden damage:</strong> Significant damage to garden through negligence</li>
      </ul>

      <h2>What You are NOT Liable For (Examples)</h2>
      <ul>
        <li><strong>Wear and tear:</strong> Fading carpet, worn out tiles, minor scuffs</li>
        <li><strong>Pre-existing damage:</strong> Damage that existed when you moved in</li>
        <li><strong>Normal decorative wear:</strong> Paint chipping, wall marks from pictures</li>
        <li><strong>Maintenance items:</strong> Broken seals, damaged caulk, aging appliances</li>
        <li><strong>Structural issues:</strong> Cracks in walls from building settling</li>
        <li><strong>Damage from other tenants:</strong> (Unless you failed to prevent it)</li>
        <li><strong>Landlord negligence:</strong> Failure to maintain the property to standard</li>
      </ul>

      <h2>The $4-Week Rent Cap in Practice</h2>
      <h3>Scenario 1</h3>
      <p><strong>Rent:</strong> $2,000/week | <strong>Actual damage:</strong> $10,000 | <strong>Landlord excess:</strong> $1,000</p>
      <p><strong>Your liability:</strong> Lowest of $10,000, $8,000 (4 weeks), $1,000 = <strong>$1,000</strong></p>

      <h3>Scenario 2</h3>
      <p><strong>Rent:</strong> $350/week | <strong>Actual damage:</strong> $2,000 | <strong>Landlord excess:</strong> $500</p>
      <p><strong>Your liability:</strong> Lowest of $2,000, $1,400 (4 weeks), $500 = <strong>$500</strong></p>

      <h3>Scenario 3</h3>
      <p><strong>Rent:</strong> $500/week | <strong>Actual damage:</strong> $1,500 | <strong>Landlord excess:</strong> $2,000</p>
      <p><strong>Your liability:</strong> Lowest of $1,500, $2,000 (4 weeks), $2,000 = <strong>$1,500</strong></p>

      <h2>How Tenant Liability Insurance Helps</h2>
      <p>Tenant liability insurance covers these costs so you don't have to pay out of pocket. Your insurer will: (1) Assess the damage claim, (2) Determine if it's covered under the policy, (3) Pay the landlord up to your liability limit (usually $2M), (4) Pay you back if you've already paid.</p>

      <h2>Protecting Yourself</h2>
      <ul>
        <li><strong>Get insurance:</strong> This is the most important step. It protects you financially</li>
        <li><strong>Document the condition:</strong> Take photos when you move in to establish baseline condition</li>
        <li><strong>Do a bond inspection:</strong> Get a professional to document condition at move-in</li>
        <li><strong>Report maintenance issues:</strong> Tell the landlord about problems immediately in writing</li>
        <li><strong>Keep receipts:</strong> Document any repairs or improvements you make</li>
        <li><strong>Take photos of damage:</strong> If something breaks, document it immediately</li>
        <li><strong>Get written agreements:</strong> If you cause damage, get written confirmation with the landlord about repair process</li>
        <li><strong>Know your rights:</strong> Familiarize yourself with the Residential Tenancies Act</li>
      </ul>
    `,
    date: '2024-02-20',
    author: 'David Harrison',
    readTime: 9,
    category: 'Legal Guide',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
  },
  {
    slug: 'top-claims-nz-renters',
    title: 'Top 5 Insurance Claims NZ Renters Make',
    excerpt: 'Real examples of the most common insurance claims renters file and what we can learn from them.',
    content: `
      <h2>Introduction</h2>
      <p>Understanding the most common rental insurance claims helps you see what actually happens and how insurance protects renters. Based on claims data from NZ insurers, here are the top 5 claims renters make.</p>

      <h2>1. Theft and Burglary (25% of claims)</h2>
      <h3>The Scenario</h3>
      <p>A flatmate forgets to lock the back door. Thieves enter overnight and steal electronics, jewelry, and other valuables. Total value stolen: $4,200.</p>

      <h3>The Claim</h3>
      <p>The tenant files a claim with theft report from police. The insurer assesses the claim, verifies the items owned (using photos, receipts where available), and pays out $3,950 (less the $250 excess).</p>

      <h3>The Lesson</h3>
      <p>Always lock doors and windows. Burglars often target unsecured properties. Having documented proof of ownership (photos, receipts) makes claims faster. Consider security items like good locks or motion sensors.</p>

      <h2>2. Accidental Water Damage (20% of claims)</h2>
      <h3>The Scenario</h3>
      <p>A flatmate leaves a shower running while getting ready. Water floods the bathroom and seeps into the lounge, damaging the tenant's furniture, electronics, and belongings. Estimated damage: $6,500.</p>

      <h3>The Claim</h3>
      <p>The renter's contents insurance covers their belongings ($5,500 claim approved). The flatmate's tenant liability insurance should cover the damage, but there's often a gap. Both renters file claims and both payouts are made according to policy limits.</p>

      <h3>The Lesson</h3>
      <p>Water damage is one of the most common and costly claims. Check that water damage is covered in your policy. Take photos of damage immediately. Mitigate further damage (dry out items, remove furniture from water). Get multiple quotes if damage is significant.</p>

      <h2>3. Damage During Moving/Furniture Incident (18% of claims)</h2>
      <h3>The Scenario</h3>
      <p>While moving furniture, a large mirror hits a flatscreen TV, damaging both items. The TV costs $1,200 to replace, and there's also significant water damage when a pipe gets hit. Flatmates argue about who's liable.</p>

      <h3>The Claim</h3>
      <p>The person whose TV it was claims on their contents insurance (approved with excess). The tenant who caused the damage claims on their tenant liability insurance for the pipe damage, but the other tenant's contents claim is separate.</p>

      <h3>The Lesson</h3>
      <p>Accidents happen during moving and heavy lifting. Accidental damage cover is valuable if you have expensive items. Be careful when moving furniture, especially near electronics or walls. Document your valuable items before any incidents.</p>

      <h2>4. Fire and Smoke Damage (15% of claims)</h2>
      <h3>The Scenario</h3>
      <p>A small kitchen fire (from unattended cooking) damages the kitchen and spreads smoke throughout the flat. While the building damage is covered by the landlord's insurance, the tenant's belongings (clothing, furniture, electronics, etc.) are damaged by smoke and heat. Estimated loss: $8,000.</p>

      <h3>The Claim</h3>
      <p>The renter files a contents claim with the insurer. Despite not being directly burned, items damaged by smoke and heat are covered. The insurer pays approximately $7,200 (after excess) for damaged contents. Temporary accommodation is also covered while the flat is being repaired.</p>

      <h3>The Lesson</h3>
      <p>Fire and smoke damage to belongings is extensive. Even if you escape unharmed, your belongings can be damaged. Never leave cooking unattended. Smoke damage affects items throughout the flat, even those not directly exposed to fire. Temporary accommodation benefit is valuable - it covers your living costs while repairs happen.</p>

      <h2>5. Tenant Liability Claims (12% of claims)</h2>
      <h3>The Scenario</h3>
      <p>During a flat party, someone accidentally puts a foot through the rented property's ceiling (old plasterboard). The landlord's builder quotes $1,800 to repair. But the landlord's insurance excess is $1,500, actual cost is $1,800, and the renter's rent is only $450/week = $1,800/month.</p>

      <h3>The Claim</h3>
      <p>The renter's tenant liability insurance covers it under the $4-week rent cap rule. The liability is limited to the lowest of: $1,800 (actual), $1,800 (4 weeks rent), $1,500 (landlord excess) = $1,500. The insurance pays $1,500, the landlord absorbs the rest, and the renter is protected from further costs.</p>

      <h3>The Lesson</h3>
      <p>Tenant liability claims often happen at parties or during normal living. The $4-week rent cap is a huge protection. Always have tenant liability insurance - it protects you from significant costs. Be careful with parties, and make sure guests know not to be reckless.</p>

      <h2>Key Takeaways from These Claims</h2>
      <ul>
        <li>Most claims are for accidental damage or theft, not intentional damage</li>
        <li>Having good insurance means claims are handled quickly and fairly</li>
        <li>Documentation (photos, receipts) makes claims faster to process</li>
        <li>Accidental damage cover and tenant liability are essential</li>
        <li>The $4-week rent cap provides significant protection</li>
        <li>Temporary accommodation benefit is valuable during major incidents</li>
        <li>Don't avoid claiming - that's what insurance is for</li>
        <li>Prevention is better - secure your flat, be careful, and maintain items properly</li>
      </ul>

      <h2>How to Be Claim-Ready</h2>
      <ul>
        <li>Document your belongings with photos and keep receipts</li>
        <li>Maintain a list of your valuable items and their approximate values</li>
        <li>Keep policy documents and contact details accessible</li>
        <li>Report incidents immediately (theft, damage, etc.)</li>
        <li>Take photos of any damage before cleaning up</li>
        <li>Keep records of any communication with landlords or other parties</li>
      </ul>
    `,
    date: '2024-02-10',
    author: 'Michael Rivers',
    readTime: 10,
    category: 'Claims Guide',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
  },
];
