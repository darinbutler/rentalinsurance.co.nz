import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { Home, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Rental Insurance NZ | Complete Coverage & Protection',
  description: 'Comprehensive family rental insurance in New Zealand. Protect furniture, appliances, children\'s items, and your liability. Compare quotes from top insurers today.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/sectors/families/' },
}

export default function FamiliesPage() {
  return (
    <>
      <section className="h-[50vh] min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1600&h=900&fit=crop"
            alt="Happy family relaxing at home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Home className="w-12 h-12 text-white mb-4" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Family Rental Insurance in New Zealand
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Comprehensive coverage tailored for families renting homes - protect your family, belongings, and peace of mind with affordable insurance solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Family Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Family Rental Insurance in New Zealand</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Families renting homes across New Zealand face unique insurance challenges that individual renters often don't encounter. Whether you're raising young children in an Auckland villa, managing a growing household in Wellington, or settling your family in Christchurch, comprehensive rental insurance is essential to protect your lifestyle and financial security. When you have children, spouses, extended family members, or caregivers living in your rented home, the risks multiply significantly.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Family rental insurance goes beyond basic contents coverage. It addresses the specific needs of multi-person households: higher replacement values for accumulated furniture and appliances, enhanced liability protection for accidents caused by children or visitors, extended temporary accommodation periods that can accommodate entire families, and coverage for the diverse belongings that family members accumulate. The right policy ensures that a single accident doesn't financially devastate your family or jeopardise your rental stability.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Why Families Need Comprehensive Rental Insurance</h3>
                <p className="text-slate-700 leading-relaxed">
                  Under New Zealand law, tenants are legally responsible for accidental damage to rental properties. This liability extends to damage caused by any household member, including children. A child who accidentally puts a ball through a window, knocks over a pot that damages the kitchen floor, or causes water damage through a blocked toilet can create a liability claim of thousands of dollars. Without proper insurance, these costs fall directly on you and can strain family finances significantly.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Additionally, families accumulate more household contents than other renters. With multiple bedrooms filled with furniture, shared living spaces, bedding for everyone, multiple TVs and computers, gaming consoles, children's toys, sports equipment, and kitchen appliances, a typical family's contents value ranges from $50,000 to $150,000 or more. A fire, break-in, or flood could destroy months or years of accumulated purchases. Family rental insurance ensures you can replace everything your family needs to live comfortably.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                  <p className="text-slate-700 font-semibold">
                    Did you know? Families with children file contents claims 40% more frequently than single renters, with an average claim value of $8,500-$12,000 in New Zealand.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Higher Contents Values for Family Homes</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  One critical mistake families make when insuring rental properties is underestimating their total contents value. A single person might need to replace furniture worth $30,000-$40,000, but families typically need significantly more.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Consider what a typical New Zealand family home contains:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-slate-300">
                    <thead>
                      <tr className="bg-emerald-50">
                        <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">Item Category</th>
                        <th className="border border-slate-300 px-4 py-2 text-right font-semibold text-slate-900">Estimated Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">Lounge furniture (sofa, chairs, coffee table)</td>
                        <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">$8,000-$15,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">Bedroom furniture (beds, wardrobes, bedding)</td>
                        <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">$12,000-$20,000</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">Kitchen appliances and cookware</td>
                        <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">$5,000-$8,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">Electronics (TVs, computers, gaming systems)</td>
                        <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">$8,000-$15,000</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">Children's furniture, toys, and equipment</td>
                        <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">$5,000-$10,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">Clothing and personal items (all family members)</td>
                        <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">$8,000-$12,000</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">Books, sports equipment, hobbies</td>
                        <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">$3,000-$6,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">TOTAL</td>
                        <td className="border border-slate-300 px-4 py-2 text-right font-semibold text-slate-900">$49,000-$86,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Many families need even higher coverage—$100,000 to $150,000—when accounting for multiple cars worth of electronics, high-end furniture, collectibles, and the cumulative value of everyday items. Getting an accurate contents inventory is crucial. Walk through your home and photograph items, keep receipt documentation, and be realistic about replacement costs in today's NZ market.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Children and Accidental Damage Coverage</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have children living in your rental home, accidental damage cover is not optional—it's essential. Children cause accidents. A curious toddler stacks wooden blocks against a wall, creating a hole. A child learning to ride a bike crashes through a bedroom window. A spilled drink damages the kitchen floor. These everyday scenarios can result in landlord claims of $2,000 to $10,000 or more.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Standard tenant liability covers damage you cause as the tenant, but accidental damage cover specifically protects you when accidents happen inside the rental property—damage caused by children, pets, or natural accidents like knocking something over. For families with young children (especially ages 2-12 when curiosity is highest), accidental damage cover typically costs just $5-15 extra per month and can save you tens of thousands.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Common children-related claims we see in New Zealand include broken windows from balls or toys, damage to walls and doors from enthusiastic play, stains on carpets that require replacement, and water damage from forgotten baths or showers. When evaluating policies, ensure accidental damage cover includes impact damage, water damage from internal sources, and damage caused by children or visitors living in your home.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Tenant Liability for Families: Why You Need More Coverage</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Tenant liability insurance protects you against legal claims for damage you cause to the rental property itself. Most standard policies offer $2-5 million in liability coverage, but families should carefully consider whether higher limits make sense for their situation.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Standard liability coverage ($2 million) handles most common family scenarios: a child puts their hand through a window, someone spills wine on the landlord's carpet, a dinner party guest damages a wall. However, if your family regularly hosts gatherings, has multiple children with active friends visiting, or lives in a premium property, higher liability limits ($5 million) provide greater peace of mind. Legal costs to defend a liability claim can escalate quickly, and medical costs if someone is injured in your rental can be substantial.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  When comparing policies, check whether liability premiums increase significantly for higher limits. Often the difference between $2M and $5M coverage is just $2-5 per month, making the upgrade worthwhile for families who value extra protection.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">What to Look For in a Family Rental Insurance Policy</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Not all rental insurance policies are created equal, especially for families. When comparing options, prioritise these features:
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { title: 'Accidental Damage Cover', desc: 'Essential for families with children. Covers damage from everyday accidents inside the rental.' },
                    { title: 'Extended Temporary Accommodation', desc: 'Ensures your family can stay in a comparable property for 60+ days if your home becomes uninhabitable. Critical with children.' },
                    { title: 'Higher Liability Limits', desc: 'Aim for at least $2-5M liability. With multiple people in your home, the risk of claims increases.' },
                    { title: 'Contents Coverage Up to $150K+', desc: 'Reflects the true value of family possessions including furniture, electronics, and children\'s items.' },
                    { title: 'Specified Items/Valuables', desc: 'Covers high-value items like engagement rings, computers, or collectibles that may exceed standard limits.' },
                    { title: 'School Equipment Cover', desc: 'Some policies cover loss or damage to school equipment (musical instruments, sports gear, technology).' },
                    { title: 'Legal Costs Coverage', desc: 'Covers legal fees if you need to defend yourself against a tenant liability claim.' },
                    { title: 'No Excess Limits', desc: 'Or minimal excess ($0-250). With multiple family members, claims frequency is higher.' },
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-4 border-emerald-600 pl-4">
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-700 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Common Insurance Claims for Families in New Zealand</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Understanding the most common claims families face helps you choose appropriate coverage. Based on New Zealand insurance data, these scenarios happen regularly:
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">Children Breaking Windows and Creating Impact Damage</h4>
                    <p className="text-slate-700 text-sm">A child playing cricket in the backyard hits a ball through the window. A bike crashes into the brick wall, creating a hole. A ball thrown indoors breaks a light fixture. These claims average $1,500-$4,500 per incident and are entirely foreseeable with children in the home. Accidental damage cover covers these costs.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">Kitchen Fires and Cooking Accidents</h4>
                    <p className="text-slate-700 text-sm">An unattended pot boils over, igniting stovetop grease. A child turns on the oven too high. Oil splatter causes burns to cabinetry and counters. While catastrophic fires are covered as burglary/fire claims, accidental damage covers the smaller fire incidents and smoke damage that affect appliances and contents. Average claims: $3,000-$8,000.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">Water Damage from Internal Sources</h4>
                    <p className="text-slate-700 text-sm">A child forgets to turn off the bath and water overflows, damaging flooring and ceilings. A washing machine hose breaks, flooding the laundry room. A knocked-over fish tank soaks the lounge. These water damage claims are incredibly common in families and frequently exceed $5,000. Accidental damage cover is essential.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">Stains and Damage to Flooring and Carpets</h4>
                    <p className="text-slate-700 text-sm">Children spill juice, wine, or food coloring on carpets. Muddy footprints cause permanent staining. These damage the landlord's property and require replacement. Many landlords invoice tenants directly. Liability coverage protects you from these costs, which often reach $3,000-$6,000 for carpet replacement.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">Theft and Break-ins (Contents Loss)</h4>
                    <p className="text-slate-700 text-sm">A family home is broken into while you're away. Thieves target electronics, jewelry, and valuable items. Families with multiple bedrooms and shared spaces accumulate more valuable items, making them targets. Contents insurance covers theft, with claims averaging $8,000-$20,000. High-value items like jewelry require specified items coverage.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">Pet-Related Damage</h4>
                    <p className="text-slate-700 text-sm">Family pets scratch doors, damage carpets, or cause stains. A dog chews through drywall. These claims are common when families with young children also have active pets. Liability coverage handles these claims (averaging $1,500-$3,500), though confirm your policy covers pet damage.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold text-slate-900 mb-2">Temporary Accommodation After Displacement</h4>
                    <p className="text-slate-700 text-sm">A fire, major water damage, or other event makes the rental uninhabitable. Your family of 5 needs temporary housing for 2-3 months while repairs happen. Standard temporary accommodation of 14-30 days is insufficient. An extended 60+ day period with a higher daily rate covers hotel, rental property, or other accommodation costs while your home is being repaired. Costs can exceed $15,000 for large families.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">How Much Should Your Family Insure For?</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Determining the right sum insured is one of the most important decisions for families. Under-insuring means you won't recover your losses in a claim. Over-insuring wastes money on premiums. The key is an honest, detailed inventory.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Here's how to calculate your actual contents value:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 ml-2 mb-6">
                  <li className="leading-relaxed"><strong>Go room by room</strong> with a notebook or phone. List every piece of furniture, appliance, and decorative item.</li>
                  <li className="leading-relaxed"><strong>Note replacement cost</strong>, not original purchase price. A 5-year-old sofa doesn't cost $800; it costs $3,500 to replace with a similar new sofa today.</li>
                  <li className="leading-relaxed"><strong>Include often-forgotten items</strong>: curtains/blinds, bedding, towels, kitchen items, garden equipment, garage contents, sports equipment, toys.</li>
                  <li className="leading-relaxed"><strong>Take photos and keep receipts</strong>. This documentation is essential for faster claims processing and proves values if disputed.</li>
                  <li className="leading-relaxed"><strong>Add 10-15%</strong> for items you may have forgotten or that cost more than expected to replace.</li>
                  <li className="leading-relaxed"><strong>Review annually</strong>. When you buy new furniture or appliances, adjust your coverage upward.</li>
                </ol>
                <p className="text-slate-700 leading-relaxed">
                  For most NZ families with children, a sum insured of $80,000-$120,000 is realistic. Larger families, those with premium furniture, or those living in expensive areas may need $130,000-$150,000+. Don't guess—families who accurately assess their contents can claim successfully and quickly when disaster strikes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Specified Valuables and High-Value Items</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Most standard contents policies have limits on certain high-value items. Engagement rings might be limited to $2,000 coverage when they're actually worth $8,000. A laptop computer might be limited to $1,500 when you paid $2,500. Without specified items coverage, you won't recover the full value.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For families, typical specified items include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-6">
                  <li>Jewelry and watches (engagement rings, heirloom pieces)</li>
                  <li>Computer equipment and electronics (gaming PCs, high-end laptops)</li>
                  <li>Musical instruments (pianos, guitars, student instruments)</li>
                  <li>Collections (books, vinyl records, model collections)</li>
                  <li>Sporting equipment (mountain bikes, golf clubs, water sports gear)</li>
                  <li>Photography and video equipment (cameras, drones)</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Adding specified items cover costs $10-20 extra per month but ensures you're fully protected. For families with multiple expensive items across different categories, this is highly worthwhile.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Temporary Accommodation for Families: Why It Matters</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When a rental becomes uninhabitable—due to fire, flood, storm damage, or other covered events—your family needs somewhere to stay while repairs happen. This is where temporary accommodation coverage becomes critical. Standard policies might offer 14-30 days of cover. For a family of four, this is often nowhere near enough.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Major repairs in New Zealand often take 4-12 weeks. During that time, your family needs:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-6">
                  <li>A rental property of similar size (accommodating all family members)</li>
                  <li>Hotels, serviced apartments, or holiday rentals if rental properties aren't available</li>
                  <li>Additional food costs (eating more meals out)</li>
                  <li>Extra transportation and utility costs</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For a family of 4-5, daily accommodation costs easily exceed $250-400 per night. Over 60 days, that's $15,000-$24,000. Most families cannot absorb these costs from savings. Policies offering 60+ days of temporary accommodation with daily limits of $200-300+ provide essential protection. When comparing policies, this is a feature worth paying extra for.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">School Equipment Cover for Family Protection</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Families with school-age children accumulate valuable school equipment:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-6">
                  <li>Musical instruments (violin, saxophone, keyboard)</li>
                  <li>Technology for school (iPad, laptop, calculators)</li>
                  <li>Sports equipment (rugby boots, netball gear, sports uniforms)</li>
                  <li>Art supplies and special equipment</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If this equipment is stolen or damaged, families face significant replacement costs at short notice (often needed within days to continue attending school). Some NZ insurers offer school equipment cover that reimburses these costs. Check whether your policy includes this coverage or whether it's available as an optional add-on. The cost is minimal (often $5-10/month) but the peace of mind for families is substantial.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">EQC and Additional Cover: Understanding Natural Disaster Protection</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  In New Zealand, the Earthquake Commission (EQC) provides automatic cover for damage from earthquakes, natural disasters, and other events. However, EQC cover has limits—it covers the building structure but not your contents inside. Additionally, EQC has maximum limits and significant excess levels.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your contents insurance and tenant liability insurance operate separately from EQC. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mb-6">
                  <li>Your contents policy protects your furniture, electronics, and personal items if they're damaged in an earthquake</li>
                  <li>Your liability insurance protects you from claims if the earthquake causes damage to the landlord's property that you're responsible for</li>
                  <li>EQC covers the building structure separately, though with limits and excess</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  For families in earthquake-prone areas like Wellington, Christchurch, or parts of the Waikato, understanding the interaction between your rental insurance and EQC is essential. Your insurance broker can walk you through these details and ensure you have appropriate cover.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Working for Families and Rental Insurance Affordability</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Many NZ families receive Working for Families tax credits, which provide financial support for families with dependent children. These credits improve household cash flow and make it more feasible to budget for comprehensive insurance coverage. A family receiving $150-300/week in tax credits can more easily afford a $35-50/month comprehensive rental insurance policy that includes accidental damage, higher liability limits, and extended temporary accommodation.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  When calculating your household budget, factor in comprehensive rental insurance as a priority expense. The cost is minimal compared to the financial disaster that could occur without it. A single water damage claim or lawsuit could cost $10,000-$50,000, devastating a family that doesn't have Working for Families support to recover quickly. Insurance is truly essential protection for NZ families.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Tips for Families Getting Rental Insurance</h3>
                <div className="space-y-3">
                  {[
                    'Document all items with photos and receipts for claims—maintain your inventory each year',
                    'Choose accidental damage cover—children cause accidents, and this is the most critical add-on for families',
                    'Consider higher liability limits ($5M)—with multiple people in your home, risk increases significantly',
                    'Get temporary accommodation cover for 60+ days—this is essential, not optional, for family protection',
                    'Update your sum insured annually—as you buy new furniture or appliances, adjust coverage upward',
                    'Maintain photos of the rental property condition at move-in and move-out — protect yourself from unfair damage claims',
                    'Review school equipment coverage — ensure your children have valuable items protected',
                    'Compare multiple policies—some insurers offer better family-specific coverage or pricing',
                    'Ask about no-excess or low-excess options—with multiple family members, claim frequency may be higher',
                    'Consider specified items coverage—ensure high-value jewelry and electronics are fully covered',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Finding the Right Family Rental Insurance for Your Needs</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The rental insurance market in New Zealand offers many options, from basic policies at $15-20/month to comprehensive family coverage at $40-60/month. The difference in price usually reflects the quality and breadth of coverage—whether accidental damage, extended temporary accommodation, higher liability limits, and specified items are included.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Use our comparison tool to get quotes from multiple NZ insurers. By providing details about your family size, the number of bedrooms, your estimated contents value, and which optional features you need, you'll receive personalized quotes that reflect your actual situation. Compare not just on price but on coverage features, excess amounts, and claims handling reputation. Your family's security is worth the small investment in comprehensive protection.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Get Your Family Quote</h3>
                  <QuoteForm compact={true} />
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Family Coverage Facts</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      From $25-50/month
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Coverage $80K-$150K+
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Liability $2M-$5M
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Accidental damage available
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      60+ day temp accommodation
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Specified items coverage
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Why Choose Our Service</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      Compare 10+ insurers instantly
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      Family-specific advice
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      No obligation quotes
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      NZ-focused expertise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Family Rental Insurance',
            description: 'Rental insurance for families in New Zealand',
            provider: {
              '@type': 'Organization',
              name: 'Rental Insurance NZ',
            },
            areaServed: 'NZ',
          }),
        }}
      />
    </>
  )
}
