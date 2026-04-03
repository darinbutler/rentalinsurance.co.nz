import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, Home, AlertCircle, TrendingUp, BookOpen, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tenants Insurance NZ | Rental Insurance & Contents Protection',
  description: 'Get affordable tenants insurance in New Zealand. Protect your belongings, cover your liability, and understand your rights under the Residential Tenancies Act. Compare quotes from top providers.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/sectors/tenants/' },
  openGraph: {
    type: 'website',
    url: 'https://rentalinsurance.co.nz/sectors/tenants/',
  },
}

export default function TenantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&h=900&fit=crop"
            alt="Comfortable rental home living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Home className="w-12 h-12 text-white mb-4" />
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Tenants Insurance
            </h1>
            <p className="text-base sm:text-xl text-slate-200 mb-8">
              Protect your belongings and cover your liability while renting your home in New Zealand
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* What is Tenants Insurance */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Tenants Insurance in New Zealand?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Tenants insurance, also known as renters insurance or contents insurance, is a comprehensive protection plan designed specifically for people renting homes, apartments, or other residential properties in New Zealand. Unlike landlord building insurance which covers the structure of the property itself, tenants insurance protects your personal belongings and shields you from liability claims if you accidentally cause damage to the rental property.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  When you rent a home, you typically own your furniture, electronics, clothing, and other personal items, but your landlord owns the building and its fixtures. This distinction is crucial in New Zealand law and determines who is responsible for what. Tenants insurance bridges the gap by providing financial protection for everything you own while living in a rental property.
                </p>
              </div>

              {/* Why Renters Need Insurance */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Renters Need Insurance in New Zealand</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  As a tenant in New Zealand, you're responsible for protecting your personal belongings and managing your liability for accidental damage to the property. Your landlord's building insurance doesn't cover your items or your liability, leaving you exposed to potentially significant financial losses.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Consider a common scenario: you accidentally cause a water leak that damages the landlord's kitchen and flooring, or you have a guest who damages furniture and walls. Without tenant liability insurance, you could be personally responsible for thousands of dollars in repairs. Additionally, if your belongings are stolen, damaged by fire, or destroyed in another incident, you have no insurance recovery without a tenants policy.
                </p>

                <div className="bg-slate-50 border-l-4 border-slate-300 p-6 rounded mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Key Reasons Tenants Need Insurance:</h3>
                  <ul className="space-y-3">
                    {[
                      { title: 'Personal Belongings Protection', desc: 'Your landlord\'s insurance doesn\'t cover your furniture, electronics, clothing, and possessions' },
                      { title: 'Liability Coverage', desc: 'Protects you if you accidentally damage the property and are held responsible for repair costs' },
                      { title: 'Legal Compliance', desc: 'Aligns with the Residential Tenancies Act 2019 provisions about tenant responsibilities' },
                      { title: 'Financial Security', desc: 'Ensures you\'re not personally liable for unexpected damage claims that could cost thousands' },
                      { title: 'Peace of Mind', desc: 'Provides security knowing your belongings and financial security are protected' },
                    ].map((item, idx) => (
                      <li key={idx} className="text-slate-700">
                        <span className="font-semibold text-slate-900">{item.title}:</span> {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What's Covered */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What Does Tenants Insurance Cover?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Standard tenants insurance policies in New Zealand typically provide comprehensive coverage across multiple areas. Here's what you can expect to be covered:
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Standard Coverage Included:</h3>
                <div className="space-y-3 mb-6">
                  {[
                    'Your furniture, electronics, clothing, and personal belongings',
                    'Accidental damage you cause to the rental property (up to your liability limit)',
                    'Theft and burglary of your belongings, including break-ins and lock-picking',
                    'Fire and smoke damage to your contents',
                    'Water and weather damage to your personal items',
                    'Temporary accommodation if the property becomes uninhabitable',
                    'Legal liability up to $2 million',
                    'Removal and storage costs if the property becomes temporarily uninhabitable',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    Important: What's NOT Covered
                  </h4>
                  <p className="text-slate-700 text-sm mb-3">
                    Most standard tenants policies don't cover:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm ml-2">
                    <li>Damage you deliberately cause to the property</li>
                    <li>Damage from normal wear and tear</li>
                    <li>Items left unattended in public places</li>
                    <li>Cash and documents (usually limited coverage)</li>
                    <li>Pets (though some providers offer pet liability add-ons)</li>
                  </ul>
                </div>
              </div>

              {/* NZ Tenant Law */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Understanding NZ Tenant Liability Law</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  The Residential Tenancies Act 2019 fundamentally changed the legal framework for rental relationships in New Zealand. This legislation introduced significant protections for tenants and clarified liability arrangements that directly impact the need for tenants insurance.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Changes Under the 2019 Act:</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Under the Residential Tenancies Act 2019, a tenant's liability for damage is limited to the lowest of three amounts: the actual cost to repair or replace the damaged item, four weeks' rent, or the landlord's insurance excess. This is called the "careless damage liability cap" and represents a significant protection for tenants.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">The Three-Part Liability Test:</h4>
                  <ol className="space-y-3 text-slate-700 text-sm">
                    <li><span className="font-semibold">1. Actual repair cost:</span> What it actually costs to repair or replace the item</li>
                    <li><span className="font-semibold">2. Four weeks' rent:</span> Four weeks of the rent you pay (e.g., if rent is $600/week, the cap is $2,400)</li>
                    <li><span className="font-semibold">3. Landlord's insurance excess:</span> The amount the landlord would have to pay on their own insurance claim</li>
                  </ol>
                  <p className="text-slate-700 text-sm mt-3 font-semibold">You're liable for whichever of these three is the LOWEST amount.</p>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">
                  However, this liability cap only applies to careless damage. If you deliberately damage the property, the cap doesn't apply, and you could be held responsible for the full cost of repairs. This is why tenant liability insurance is essential—it protects you from unexpected claims and ensures you're not left paying for damage costs from your own pocket.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Additionally, the 2019 Act reinforced the obligation that landlords must have building insurance, but crucially, this building insurance never covers a tenant's personal belongings. Your furniture, electronics, and possessions are your responsibility to insure.
                </p>
              </div>

              {/* Costs and Pricing */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">How Much Does Tenants Insurance Cost?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Tenants insurance in New Zealand is remarkably affordable, with most people paying between $15 and $35 per month depending on various factors. For many renters, it's one of the best value insurance products available, given the comprehensive protection it provides.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Factors That Affect Your Premium:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { factor: 'Contents Value', desc: 'Higher value of belongings = higher premium' },
                    { factor: 'Excess Amount', desc: 'Higher excess (deductible) lowers your monthly cost' },
                    { factor: 'Location', desc: 'Urban areas may have different rates than rural areas' },
                    { factor: 'Add-ons', desc: 'Accidental damage, specified items, and other extras increase cost' },
                    { factor: 'Claims History', desc: 'Previous claims can affect your premium' },
                    { factor: 'Property Type', desc: 'Apartment, townhouse, or house rental may have different rates' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded">
                      <h4 className="font-semibold text-slate-900 mb-1">{item.factor}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Typical Monthly Costs by Contents Value (NZ):</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b-2 border-slate-300">
                          <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">Contents Value</th>
                          <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">Typical Monthly Cost</th>
                          <th className="border border-slate-300 p-3 text-left font-semibold text-slate-900">Annual Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { value: '$15,000', month: '$18-22', annual: '$216-264' },
                          { value: '$25,000', month: '$22-28', annual: '$264-336' },
                          { value: '$40,000', month: '$28-35', annual: '$336-420' },
                          { value: '$60,000', month: '$35-45', annual: '$420-540' },
                          { value: '$100,000+', month: '$50+', annual: '$600+' },
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="border border-slate-300 p-3 text-slate-900 font-semibold">{row.value}</td>
                            <td className="border border-slate-300 p-3 text-slate-700">{row.month}</td>
                            <td className="border border-slate-300 p-3 text-slate-700">{row.annual}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-600 mt-3">
                    Note: These are estimates based on standard policies. Actual costs vary by insurer and specific circumstances.
                  </p>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                  <h4 className="font-semibold text-slate-900 mb-2">Ways to Lower Your Premium:</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Choose a higher excess (you pay more if you claim)</li>
                    <li>• Only insure items you actually own</li>
                    <li>• Bundle with other insurance products</li>
                    <li>• Ask about loyalty discounts or multi-policy discounts</li>
                    <li>• Improve home security (deadbolts, alarms, security doors)</li>
                    <li>• Compare quotes from multiple providers</li>
                  </ul>
                </div>
              </div>

              {/* How to Calculate Contents Value */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Calculate Your Contents Value</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Determining the correct contents value is one of the most important steps in getting tenants insurance. Underinsuring means you won't recover the full value if you have a claim, while overinsuring wastes money on unnecessary premium.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Step-by-Step Calculation Guide:</h3>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      step: '1. Start with major items',
                      details: 'Furniture (lounge, bed, dining table, chairs, wardrobes), television, computer, appliances (microwave, kettle, toaster)'
                    },
                    {
                      step: '2. Add electronics and tech',
                      details: 'Laptop, phone, tablet, gaming consoles, speakers, cameras, audio equipment'
                    },
                    {
                      step: '3. Include clothing and accessories',
                      details: 'Winter coats, shoes, jewelry, bags, sports equipment'
                    },
                    {
                      step: '4. Factor in kitchenware',
                      details: 'Pots, pans, plates, cutlery, cooking utensils, glassware'
                    },
                    {
                      step: '5. Add personal items',
                      details: 'Books, artwork, decorative items, hobby equipment, sports gear'
                    },
                    {
                      step: '6. Don\'t forget misc items',
                      details: 'Bedding, towels, curtains, lamps, rugs, tools, garden equipment'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-1">{item.step}</h4>
                      <p className="text-slate-600 text-sm">{item.details}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Pro Tip: Use Replacement Value, Not Original Cost</h4>
                  <p className="text-slate-700 text-sm">
                    When calculating contents value, use what it would cost to replace each item NEW today, not what you originally paid for it. For example, if you bought a lounge three years ago for $1,500, it would cost $1,800-2,000 to replace with a new one today. Use the higher replacement cost figure.
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  A practical approach is to walk through your rental property room by room with a notebook or your phone, listing major items and their estimated replacement cost. Many insurance providers offer an online tool to help with this calculation, and you can also use online price guides to estimate current replacement values for common items.
                </p>
              </div>

              {/* Common Claims Scenarios */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Tenants Insurance Claims Scenarios</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Understanding the types of situations that lead to claims helps illustrate why tenants insurance is valuable. Here are some common real-world scenarios that tenants insurance covers:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      scenario: 'Water Damage from User Error',
                      description: 'You accidentally leave the washing machine tap running and water floods your bedroom, damaging your mattress, clothing, and floor. Your tenant liability covers the floor damage (up to the cap), and your contents cover the mattress and clothes.'
                    },
                    {
                      scenario: 'Accidental Property Damage',
                      description: 'While moving furniture, you accidentally put a hole in a wall or damage a door. Your liability coverage protects you from the cost of repairs, which could be $200-500.'
                    },
                    {
                      scenario: 'Burglary and Theft',
                      description: 'Thieves break in and steal your laptop, television, and jewelry. Your contents insurance reimburses you for the stolen items (less your excess).'
                    },
                    {
                      scenario: 'Guest-Related Damage',
                      description: 'A guest accidentally breaks your television or spills red wine on your carpet and furniture. Your liability and contents coverage handles the costs.'
                    },
                    {
                      scenario: 'Fire Damage',
                      description: 'A small kitchen fire damages your appliances and cabinetry, plus your contents like pots, pans, and food. Insurance covers your items and your liability for the property damage.'
                    },
                    {
                      scenario: 'Temporary Accommodation',
                      description: 'A water leak makes the property uninhabitable. Your policy covers the cost of staying in a hotel for 2-4 weeks while repairs are made.'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-2 text-emerald-600">{item.scenario}</h4>
                      <p className="text-slate-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips for Choosing */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Tips for Choosing the Right Tenants Insurance Policy</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  With multiple insurance providers and policy options available, here's how to select the best tenants insurance for your situation:
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Selection Criteria:</h3>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      criterion: 'Contents Coverage Limit',
                      guidance: 'Choose a limit that matches your contents value. If you have $35,000 worth of items, get a policy that covers that amount.'
                    },
                    {
                      criterion: 'Liability Limit',
                      guidance: 'Minimum $2 million is standard and recommended. Higher limits provide more protection if you cause major damage.'
                    },
                    {
                      criterion: 'Excess Options',
                      guidance: 'Lower excess = higher premium, higher excess = lower premium. Choose based on what you can afford if you need to claim.'
                    },
                    {
                      criterion: 'Accidental Damage',
                      guidance: 'Standard policies may not cover accidental damage. If you\'re clumsy or have kids, this add-on is worth considering.'
                    },
                    {
                      criterion: 'Claims Process',
                      guidance: 'Look for 24/7 claims support, online claims lodgement, and quick settlement times (should be within 5-10 working days).'
                    },
                    {
                      criterion: 'Excess Waiver',
                      guidance: 'Some insurers waive the excess if you\'re not at fault (e.g., theft with police report, or insured peril not caused by you).'
                    },
                    {
                      criterion: 'Lock-in Period',
                      guidance: 'Avoid policies with long lock-in periods. You should be able to cancel with 30 days notice if your circumstances change.'
                    },
                    {
                      criterion: 'Customer Reviews',
                      guidance: 'Check independent reviews on Google, Trustpilot, and the Insurance Council. Look for good claims experience feedback.'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-1">{item.criterion}</h4>
                      <p className="text-slate-700 text-sm">{item.guidance}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    The Comparison Advantage
                  </h4>
                  <p className="text-slate-700 text-sm mb-3">
                    Comparing quotes from multiple insurers typically reveals significant price variations for equivalent coverage. You might find quotes ranging from $18 to $35 per month for the same contents value. Taking 15 minutes to compare quotes can save you $60-100+ per year.
                  </p>
                  <p className="text-slate-700 text-sm">
                    Use online comparison tools to get instant quotes from multiple insurers, or contact providers directly. Most will provide quotes in minutes based on your contents value and chosen excess.
                  </p>
                </div>
              </div>

              {/* Landlord Requirements */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Can Your Landlord Require You to Get Tenants Insurance?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Under the Residential Tenancies Act 2019, landlords are NOT allowed to make it a condition of the tenancy that you must obtain tenants insurance. This is an important tenant protection that prevents landlords from forcing you into unnecessary insurance.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  However, while landlords can't require it, they can certainly recommend it—and it's in your best interest to have it anyway. The protection it provides for your belongings and your financial security from liability claims is worth far more than the modest monthly cost.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-emerald-50 to-slate-50 p-8 rounded-lg border-2 border-emerald-200 mt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Protect Your Rental Home?</h2>
                <p className="text-slate-700 mb-6">
                  Get a free, no-obligation quote from our comparison service. It takes just 2 minutes and you'll see quotes from multiple providers to find the best price and coverage for your needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get Your Free Quote Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sidebar with form */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Get Your Free Quote</h3>
                  <QuoteForm compact={true} />
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Quick Facts</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      From $20/month
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Contents up to $100,000+
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Liability up to $2M
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Instant quotes
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      24/7 claims support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Tenants Insurance NZ | Rental Insurance & Contents Protection',
            description: 'Comprehensive guide to tenants insurance in New Zealand. Understand coverage, costs, legal requirements, and how to choose the right policy.',
            author: {
              '@type': 'Organization',
              name: 'Rental Insurance NZ',
            },
            datePublished: '2026-04-03',
            dateModified: '2026-04-03',
            publisher: {
              '@type': 'Organization',
              name: 'Rental Insurance NZ',
              logo: {
                '@type': 'ImageObject',
                url: 'https://rentalinsurance.co.nz/logo.png',
              },
            },
            mainEntity: {
              '@type': 'Service',
              name: 'Tenants Insurance',
              description: 'Comprehensive rental insurance for tenants in New Zealand protecting belongings and liability',
              provider: {
                '@type': 'Organization',
                name: 'Rental Insurance NZ',
                url: 'https://rentalinsurance.co.nz',
              },
              areaServed: 'NZ',
              url: 'https://rentalinsurance.co.nz/sectors/tenants/',
            },
          }),
        }}
      />
    </>
  )
}
