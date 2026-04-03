import { Metadata } from 'next'
import Link from 'next/link'
import { insurers } from '@/data/insurers'
import { Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compare Rental Insurance Quotes NZ | Best Renters Insurance Providers',
  description: 'Compare rental insurance from NZ\'s top providers. See detailed coverage features, prices, and expert ratings. Find the best renters insurance policy for your rental property.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/compare/' },
  keywords: 'compare rental insurance NZ, best renters insurance NZ, rental insurance quotes NZ, contents insurance comparison',
}

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop"
            alt="Person comparing rental insurance options on laptop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Compare NZ Rental Insurance Providers
          </h1>
          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto">
            Find the best renters insurance policy with detailed side-by-side comparison of New Zealand's top providers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Comparison Cards - Prominent placement right below hero */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 text-center">
              Best Rental Insurance Providers in New Zealand
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Our comprehensive comparison of New Zealand's leading rental insurance providers. Each insurer is rated on coverage, price, customer service, and claims handling.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {/* Cards View for Mobile */}
              <div className="lg:hidden space-y-6">
                {insurers.map((insurer) => (
                  <div key={insurer.id} className="bg-white rounded-lg border-2 border-slate-200 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{insurer.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(insurer.rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-slate-900">{insurer.rating}</span>
                      </div>
                      <p className="text-emerald-600 font-bold text-lg mb-2">
                        {insurer.premiumRange}
                      </p>
                      <p className="text-slate-600 text-sm mb-4">{insurer.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Coverage Features</h4>
                        <ul className="space-y-2">
                          {insurer.coverageFeatures.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Strengths</h4>
                        <ul className="space-y-1">
                          {insurer.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx} className="text-sm text-green-700">+ {pro}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Considerations</h4>
                        <ul className="space-y-1">
                          {insurer.cons.slice(0, 2).map((con, idx) => (
                            <li key={idx} className="text-sm text-amber-700">• {con}</li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table View for Desktop */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      <th className="px-6 py-4 text-left font-bold text-slate-900">Insurer</th>
                      <th className="px-6 py-4 text-center font-bold text-slate-900">Rating</th>
                      <th className="px-6 py-4 text-left font-bold text-slate-900">Premium Range</th>
                      <th className="px-6 py-4 text-left font-bold text-slate-900">Key Features</th>
                      <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {insurers.map((insurer) => (
                      <tr key={insurer.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <h3 className="font-bold text-slate-900">{insurer.name}</h3>
                            <p className="text-xs text-slate-600 mt-1">{insurer.description}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(insurer.rating)
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-slate-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-bold text-slate-900">{insurer.rating}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-emerald-600">{insurer.premiumRange}</span>
                        </td>
                        <td className="px-6 py-4">
                          <ul className="text-sm text-slate-600 space-y-1">
                            {insurer.coverageFeatures.slice(0, 2).map((feature, idx) => (
                              <li key={idx} className="flex gap-1">
                                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                          >
                            Quote
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Understanding Policy Differences */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Understanding Policy Differences in NZ Rental Insurance
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-emerald-600 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Named Perils vs. Accidental Damage Coverage</h3>
                <p className="text-slate-700 mb-4">
                  Most standard rental insurance policies in New Zealand are "named perils" policies. This means they cover only specific events listed in the policy—such as fire, theft, burglary, and vandalism. Accidental damage (like dropping your laptop or spilling wine on furniture) is typically <strong>not</strong> covered unless you pay extra.
                </p>
                <p className="text-slate-700">
                  Some premium policies offer broader "all-risks" or accidental damage coverage as standard or add-ons. If accidents happen frequently in your household, paying for this additional coverage may provide valuable peace of mind.
                </p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Replacement vs. Indemnity Value</h3>
                <p className="text-slate-700 mb-4">
                  This distinction significantly affects how much you receive if you claim. <strong>Replacement value</strong> pays what it costs to replace your items brand new today. <strong>Indemnity value</strong> (or "new for old") accounts for depreciation—older items are worth less.
                </p>
                <p className="text-slate-700">
                  Most NZ insurers default to replacement value for contents insurance, which is more favorable. Always confirm this before purchasing, as some policies use indemnity value, which could mean recovering considerably less than expected.
                </p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Specified Items Limits</h3>
                <p className="text-slate-700 mb-4">
                  Most rental insurance policies have limits on single items or categories. For example, an insurer might limit jewelry coverage to $2,000 total or $500 per item. If you own high-value items (expensive jewelry, art, electronics), check if these limits are sufficient.
                </p>
                <p className="text-slate-700">
                  Many insurers allow you to schedule (specify and insure separately) high-value items, often without the standard limits applying. This adds cost but ensures valuable possessions are properly protected.
                </p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Flexible Excess Options</h3>
                <p className="text-slate-700 mb-4">
                  Different insurers offer varying excess options, typically ranging from $250 to $1,500. A higher excess reduces your premium but means you pay more towards any claim. Consider your financial situation and likelihood of needing to claim.
                </p>
                <p className="text-slate-700">
                  Some advanced insurers offer options like a $0 excess for certain claim types (theft, burglary) or allow you to choose different excesses for different claim categories.
                </p>
              </div>
            </div>
          </div>

          {/* NZ Insurance Market Overview */}
          <div className="mb-16 bg-emerald-50 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              New Zealand Rental Insurance Market Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The rental insurance market in New Zealand has grown significantly over the past decade as more renters recognize the importance of protecting their personal possessions and liability. The Insurance Council of New Zealand (ICNZ) reports that contents insurance is one of the most commonly purchased insurance products among New Zealand households.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  The market is served by both large, established insurers with decades of history in New Zealand and newer, digitally-native providers offering competitive rates and streamlined processes. This competition benefits consumers through improved pricing, online services, and customer service options.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Major players in the market include national household name insurers, regional specialists, and growing online-first providers. Each brings different strengths—some excel at customer service, others at competitive pricing, and some at innovative coverage options.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-emerald-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Market Insights</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold text-lg">•</span>
                    <div>
                      <p className="font-semibold text-slate-900">ICNZ Regulated</p>
                      <p className="text-sm text-slate-600">All major insurers are members of the Insurance Council of New Zealand, ensuring compliance with industry standards and consumer protection.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold text-lg">•</span>
                    <div>
                      <p className="font-semibold text-slate-900">Competitive Pricing</p>
                      <p className="text-sm text-slate-600">With multiple providers competing for customers, premium prices have remained stable or declined in real terms over recent years.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold text-lg">•</span>
                    <div>
                      <p className="font-semibold text-slate-900">Digital Innovation</p>
                      <p className="text-sm text-slate-600">Online quotes, digital claims processing, and 24/7 support are increasingly standard features across the industry.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold text-lg">•</span>
                    <div>
                      <p className="font-semibold text-slate-900">Customization Options</p>
                      <p className="text-sm text-slate-600">Most insurers allow extensive customization of coverage, excesses, and add-ons to match individual needs and budgets.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Insurer Profiles */}
          <div className="mb-16 pt-16 border-t-2 border-slate-200">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 text-center">
              Detailed Insurer Profiles
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              In-depth analysis of each provider, including their strengths, considerations, established history, and claims processes to help you choose the right insurer for your needs.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {insurers.map((insurer) => (
                <div key={insurer.id} className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-emerald-400 transition-colors">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{insurer.name}</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-4">Established {insurer.established}</p>

                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">About</h4>
                      <p className="text-slate-700">{insurer.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Premium Range</h4>
                      <p className="text-emerald-600 font-bold text-lg">{insurer.premiumRange}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Coverage Features</h4>
                      <ul className="space-y-2">
                        {insurer.coverageFeatures.map((feature, idx) => (
                          <li key={idx} className="flex gap-2 text-slate-700">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Claims Process</h4>
                      <p className="text-slate-700 text-sm">{insurer.claimsProcess}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="text-green-600">Strengths</span>
                      </h4>
                      <ul className="space-y-2">
                        {insurer.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-slate-700 flex gap-2">
                            <span className="text-green-600 font-bold">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Considerations</h4>
                      <ul className="space-y-2">
                        {insurer.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-slate-700 flex gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-center transition-colors mt-6"
                    >
                      Get Quote from {insurer.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How We Compare Insurers */}
          <div className="mb-16 bg-slate-900 text-white rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              How We Compare Insurers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  Our comparison methodology is designed to give you the most comprehensive view of each insurer's offerings. We evaluate multiple factors that matter to New Zealand renters, taking into account both quantitative metrics and qualitative feedback from customer reviews and industry ratings.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed">
                  We update our comparison data regularly to ensure you're seeing current pricing, coverage options, and customer service ratings. Our goal is to help you make an informed decision based on complete and accurate information.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded p-4">
                  <h3 className="font-bold text-white mb-2">Coverage Analysis</h3>
                  <p className="text-slate-300 text-sm">We review each policy's coverage limits, exclusions, optional add-ons, and special features to understand what's actually protected.</p>
                </div>
                <div className="bg-slate-800 rounded p-4">
                  <h3 className="font-bold text-white mb-2">Pricing Transparency</h3>
                  <p className="text-slate-300 text-sm">We examine premium ranges based on typical coverage levels, excess options, and available discounts to show real-world costs.</p>
                </div>
                <div className="bg-slate-800 rounded p-4">
                  <h3 className="font-bold text-white mb-2">Customer Experience</h3>
                  <p className="text-slate-300 text-sm">We assess claims handling speed, customer service availability, digital tools, and overall customer satisfaction ratings.</p>
                </div>
                <div className="bg-slate-800 rounded p-4">
                  <h3 className="font-bold text-white mb-2">Market Reputation</h3>
                  <p className="text-slate-300 text-sm">We consider insurer longevity, industry certifications, regulatory compliance, and third-party customer reviews.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips for Switching */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Tips for Switching Rental Insurance Providers
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Gather Your Current Details</h3>
                <p className="text-slate-700 mb-4">
                  Before getting quotes from new insurers, compile a list of your current coverage details:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Total sum insured</li>
                  <li>• Current excess amount</li>
                  <li>• Liability limit coverage</li>
                  <li>• Any add-ons (accidental damage, etc.)</li>
                  <li>• Premium paid and renewal date</li>
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Don't Switch Mid-Policy</h3>
                <p className="text-slate-700 mb-4">
                  It's easiest to switch at renewal time. Switching mid-policy might result in cancellation fees or complications. Make a note when your policy renews and start comparing 4-6 weeks before.
                </p>
                <p className="text-slate-700">
                  This timing allows you to get multiple quotes and make a calm decision without rushing.
                </p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Compare Apples to Apples</h3>
                <p className="text-slate-700 mb-4">
                  When getting quotes, use identical coverage levels and excesses across all insurers. This ensures you're genuinely comparing premium differences, not different coverage packages.
                </p>
                <p className="text-slate-700">
                  Look for available discounts that might apply to you—many insurers offer savings for online quotes, annual payment, bundling, or home security features.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Review Customer Service</h3>
                <p className="text-slate-700 mb-4">
                  Don't choose based on price alone. Check how easy it is to contact the insurer and read customer reviews about their responsiveness and professionalism.
                </p>
                <p className="text-slate-700">
                  You might save $100 annually but lose significantly in claims satisfaction if the insurer is difficult to work with.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Keep Documentation</h3>
                <p className="text-slate-700 mb-4">
                  Once you've switched, keep your old policy documents for at least 7 years. You'll need them for:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Historical claims information</li>
                  <li>• Tax purposes</li>
                  <li>• Disputes with old or new insurer</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Ensure Continuous Coverage</h3>
                <p className="text-slate-700 mb-4">
                  Arrange your new policy to start on the exact day your old one ends. A coverage gap—even one day—could leave your contents uninsured during that period.
                </p>
                <p className="text-slate-700">
                  Once new coverage is active, promptly cancel your old policy to avoid paying both premiums.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16 bg-slate-50 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions About Rental Insurance
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">What's the difference between contents and rental insurance?</h3>
                <p className="text-slate-700">
                  In New Zealand, these terms are often used interchangeably. Rental insurance (or contents insurance) protects your personal possessions and covers liability if someone is injured in your home. It typically does not cover the building structure itself—that's the landlord's responsibility.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Is rental insurance mandatory in New Zealand?</h3>
                <p className="text-slate-700">
                  Rental insurance is not legally required. However, many landlords now require tenants to have it as a condition of the tenancy. It's highly recommended regardless, as your personal possessions have significant value.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">How much does rental insurance cost in New Zealand?</h3>
                <p className="text-slate-700">
                  Costs vary widely depending on sum insured, location, excess, and coverage options. Most renters pay between NZD 100-400 annually. Getting quotes from multiple providers as shown above is the best way to find current pricing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">What happens if I don't have rental insurance and my belongings are stolen?</h3>
                <p className="text-slate-700">
                  Without insurance, you lose the full value of stolen items. You might have some recourse if the theft occurred due to landlord negligence (poor locks, broken security), but this is difficult to prove. Insurance protects you from this financial loss.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Can I get rental insurance with a non-standard tenancy?</h3>
                <p className="text-slate-700">
                  Yes. Whether you're in a traditional rental, flatting situation, boarding house, or other arrangement, you can get contents insurance. Just ensure the policy covers the type of accommodation you're in.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">How quickly can I get coverage?</h3>
                <p className="text-slate-700">
                  Most insurers can provide coverage within 24-48 hours of online purchase. Some offer same-day activation. Check with your chosen insurer about their timeline.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Find Your Best Rental Insurance?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Compare quotes from New Zealand's leading providers and find the coverage that's right for you at a price that fits your budget.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-emerald-600 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Get Your Free Comparison Today
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ComparisonChart',
            name: 'Rental Insurance Comparison NZ',
            description: 'Compare top rental insurance providers in New Zealand',
            itemListElement: insurers.map((insurer, index) => ({
              '@type': 'LocalBusiness',
              position: index + 1,
              name: insurer.name,
              description: insurer.description,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: insurer.rating,
                bestRating: '5',
                worstRating: '1',
              },
            })),
          }),
        }}
      />
    </>
  )
}
