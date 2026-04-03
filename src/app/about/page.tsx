import { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Target, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About RentalInsurance.co.nz | Independent Insurance Comparison for NZ Renters',
  description: 'Learn about RentalInsurance.co.nz, the independent rental insurance comparison platform for New Zealand renters. Compare quotes from top NZ insurers, understand coverage options, and find the best rental insurance for your needs.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/about/' },
  keywords: 'about rental insurance NZ, independent insurance comparison, tenant insurance comparison, rental protection service',
  openGraph: {
    title: 'About RentalInsurance.co.nz | Independent Insurance Comparison for NZ Renters',
    description: 'Independent rental insurance comparison platform for NZ renters. Compare quotes and find the best coverage for your needs.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600&h=900&fit=crop"
            alt="New Zealand cityscape representing rental insurance services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            About RentalInsurance.co.nz
          </h1>
          <p className="text-base sm:text-xl text-slate-200">
            Making rental insurance simple, transparent, and accessible for all New Zealand renters
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">

            {/* About RentalInsurance.co.nz Section */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What is RentalInsurance.co.nz?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                RentalInsurance.co.nz is an independent rental insurance comparison platform designed specifically for New Zealand renters. We are not an insurance company ourselves – instead, we act as a trusted intermediary connecting renters with quotes from New Zealand's top insurance providers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                As part of the Cover4You brand, we operate as part of a portfolio of NZ insurance comparison websites dedicated to helping Kiwis find the right coverage at the right price. Our focus is purely on serving renters and tenant insurance seekers with honest, transparent information and competitive quotes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're a first-time renter looking for basic coverage or an experienced tenant wanting to optimize your insurance costs, RentalInsurance.co.nz provides the tools and information you need to make informed decisions about your rental insurance.
              </p>
            </div>

            {/* Our Mission Section */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                We believe every renter in New Zealand deserves access to affordable, transparent rental insurance without confusion, pressure, or hidden fees.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission is to remove barriers to rental insurance by creating a simple, straightforward comparison platform that puts renters in control. We provide instant quotes from NZ's top insurers in one place, help you understand different coverage options, and empower you to make the best insurance decision for your individual situation.
              </p>
            </div>

            {/* How Our Comparison Service Works */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How Our Comparison Service Works</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Getting a rental insurance quote through RentalInsurance.co.nz is simple, fast, and completely free. Here's how the process works:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Answer Simple Questions</h3>
                    <p className="text-slate-600">
                      Tell us about your rental situation – where you live, what type of property you rent, and what coverage you need. Our form takes just a few minutes to complete.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Compare Instant Quotes</h3>
                    <p className="text-slate-600">
                      We match your information with quotes from multiple NZ insurers. You'll see side-by-side comparisons of prices, coverage options, and features from different providers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Understand Your Options</h3>
                    <p className="text-slate-600">
                      We explain the differences between quotes, what's covered, and how deductibles work. No jargon – just clear information to help you decide.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Choose & Purchase</h3>
                    <p className="text-slate-600">
                      Select the policy that works best for you and proceed to purchase with the insurer directly. No pressure, no obligation – you're always in control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Compare Through Us */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Compare Through RentalInsurance.co.nz?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">Fast & Easy</h3>
                  </div>
                  <p className="text-slate-600">
                    Get instant quotes in minutes, not days. Our streamlined process means you can compare options and make a decision quickly without lengthy phone calls or paperwork.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">Completely Free</h3>
                  </div>
                  <p className="text-slate-600">
                    There are no hidden fees, no broker commissions, and no charges for using our service. Getting quotes is completely free with no obligation to purchase.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">Independent & Unbiased</h3>
                  </div>
                  <p className="text-slate-600">
                    We have no preference for any particular insurer. Our quotes are based on real insurer data, and we present all options fairly so you can choose what's best for you.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">NZ-Focused Service</h3>
                  </div>
                  <p className="text-slate-600">
                    We specialize in New Zealand rental insurance. We understand the NZ market, local regulations, and the specific needs of Kiwi renters.
                  </p>
                </div>
              </div>
            </div>

            {/* The NZ Rental Insurance Market */}
            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The NZ Rental Insurance Market</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Rental insurance is increasingly important in New Zealand. Here's why our service matters:
              </p>
              <ul className="space-y-3 mb-6 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span className="text-lg"><strong>36% of NZ households rent</strong> – making rental insurance relevant to millions of Kiwis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span className="text-lg"><strong>Many renters remain uninsured</strong> – despite the financial risks of theft, damage, and liability</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span className="text-lg"><strong>Growing awareness of coverage</strong> – more renters recognize the importance of protecting their possessions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold text-xl">•</span>
                  <span className="text-lg"><strong>Price competition is increasing</strong> – making it more important than ever to compare options and find value</span>
                </li>
              </ul>
              <p className="text-lg text-slate-600 leading-relaxed">
                RentalInsurance.co.nz exists to make it easy for NZ renters to access this market and find coverage that fits their budget and needs.
              </p>
            </div>

            {/* Our Insurance Partners */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Insurance Partners</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We compare rental insurance quotes from New Zealand's leading insurers, ensuring you have access to competitive options from trusted providers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-emerald-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">AA Insurance</h3>
                  <p className="text-slate-600 text-sm">One of New Zealand's largest and most trusted insurance providers</p>
                </div>
                <div className="bg-white border-2 border-emerald-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">AMI Insurance</h3>
                  <p className="text-slate-600 text-sm">A leading mutual insurer in New Zealand with competitive rental coverage</p>
                </div>
                <div className="bg-white border-2 border-emerald-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">State Insurance</h3>
                  <p className="text-slate-600 text-sm">A major player in the NZ insurance market with broad coverage options</p>
                </div>
                <div className="bg-white border-2 border-emerald-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Tower Insurance</h3>
                  <p className="text-slate-600 text-sm">Known for customer-focused insurance products and competitive pricing</p>
                </div>
                <div className="bg-white border-2 border-emerald-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Vero Insurance</h3>
                  <p className="text-slate-600 text-sm">An established provider offering comprehensive rental coverage options</p>
                </div>
                <div className="bg-white border-2 border-emerald-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">NZI (New Zealand Insurance)</h3>
                  <p className="text-slate-600 text-sm">A well-known insurer with competitive rates for rental properties</p>
                </div>
              </div>
              <p className="text-slate-600 mt-6">
                By comparing quotes from these top providers, you're assured of getting competitive options from NZ's most reputable insurers. We regularly update our partner relationships to ensure you always have access to the best available quotes.
              </p>
            </div>

            {/* Our Commitment to NZ Renters */}
            <div className="bg-emerald-600 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to NZ Renters</h2>
              <p className="text-lg mb-6 text-emerald-50">
                We're committed to serving New Zealand renters with integrity, transparency, and genuine expertise. Our commitments include:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-200 text-xl">✓</span>
                  <span className="text-lg"><strong>ICNZ-Registered Providers:</strong> We work exclusively with Insurance Council of New Zealand registered providers to ensure you're protected by industry standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-200 text-xl">✓</span>
                  <span className="text-lg"><strong>No Broker Fees:</strong> We never charge fees for quotes or comparisons. You pay only what the insurer charges</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-200 text-xl">✓</span>
                  <span className="text-lg"><strong>Data Privacy Protected:</strong> Your personal information is handled securely and never sold to third parties. Read our privacy policy for full details</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-200 text-xl">✓</span>
                  <span className="text-lg"><strong>Accurate, Current Information:</strong> We update rates regularly to reflect current market conditions and insurer pricing</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-200 text-xl">✓</span>
                  <span className="text-lg"><strong>Educational Resources:</strong> We provide guides, FAQs, and articles to help you understand rental insurance and make informed decisions</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-200 text-xl">✓</span>
                  <span className="text-lg"><strong>Responsive Support:</strong> Have questions? Our team is here to help guide you through the comparison process</span>
                </li>
              </ul>
            </div>

            {/* Values Section */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Heart,
                    title: 'Transparency',
                    description: 'We believe in complete honesty. No hidden fees, no misleading claims, no pressure tactics. Just clear, straightforward information to help you decide.',
                  },
                  {
                    icon: Zap,
                    title: 'Speed',
                    description: 'Time is valuable. We deliver instant quotes and streamlined comparisons so you can make decisions quickly without waiting days for responses.',
                  },
                  {
                    icon: Target,
                    title: 'Accuracy',
                    description: 'Quotes based on real, current insurer data. We verify information regularly and ensure accuracy in everything we present to you.',
                  },
                  {
                    icon: Users,
                    title: 'Customer Focus',
                    description: 'We exist to serve renters. We listen to your needs, build tools that solve real problems, and continuously improve our service based on your feedback.',
                  },
                ].map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Section */}
            <div className="border-t-2 border-slate-200 pt-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Have questions about rental insurance or our comparison service? We'd love to hear from you. Contact us anytime – we're here to help.
              </p>
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-600 mb-1">
                      <strong>Email:</strong>
                    </p>
                    <p className="text-lg text-emerald-600 font-semibold">
                      <a href="mailto:hello@cover4you.co.nz" className="hover:text-emerald-700 transition-colors">
                        hello@cover4you.co.nz
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-600 mb-2">
                      <strong>Have a question?</strong>
                    </p>
                    <p className="text-slate-600">
                      Use our contact form to send us a message, and we'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Final CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-emerald-50 to-slate-50 rounded-lg p-12 border border-emerald-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Compare Rental Insurance?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Get instant quotes from New Zealand's top insurers. It takes less than 2 minutes and is completely free with no obligation to purchase.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg"
              >
                Get Your Free Quote Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About RentalInsurance.co.nz',
            description: 'New Zealand\'s rental insurance comparison service',
            mainEntity: {
              '@type': 'Organization',
              name: 'RentalInsurance.co.nz',
              url: 'https://rentalinsurance.co.nz',
            },
          }),
        }}
      />
    </>
  )
}
