import { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Target, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Rental Insurance NZ',
  description: 'Learn about our mission to help NZ renters find the best insurance coverage.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/about/' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[300px] bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-emerald-100">
            Making rental insurance simple and transparent for all New Zealanders
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                We believe every renter in New Zealand deserves access to affordable, transparent rental insurance. Our mission is to remove the confusion around rental and tenants insurance by providing instant quotes from NZ's top insurers in one place.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're not an insurance company ourselves - we're your independent comparison service, helping you compare quotes, understand coverage, and make the best decision for your situation.
              </p>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Heart,
                    title: 'Transparency',
                    description: 'No hidden fees. No broker commissions. Just clear, honest information to help you decide.',
                  },
                  {
                    icon: Zap,
                    title: 'Speed',
                    description: 'Get quotes in minutes, not days. Compare options instantly and make decisions quickly.',
                  },
                  {
                    icon: Target,
                    title: 'Accuracy',
                    description: 'Quotes based on real insurer data. Information updated regularly to reflect current rates.',
                  },
                  {
                    icon: Users,
                    title: 'Customer Focus',
                    description: 'We listen to renters and build tools that solve real problems renters face.',
                  },
                ].map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Why We Exist */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why We Exist</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Renting is complicated enough without struggling to find the right insurance. Too many renters either:
              </p>
              <ul className="space-y-3 mb-4 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Don't have rental insurance at all because they don't know where to start</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Pay too much because they don't compare options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Have the wrong type of cover for their situation</span>
                </li>
              </ul>
              <p className="text-lg text-slate-600 leading-relaxed">
                We built RentalInsurance.co.nz to solve these problems. No jargon. No pressure. Just simple, honest comparison of NZ's top rental insurance providers.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h3>
              <p className="text-slate-700 mb-4">
                We're committed to helping every renter in New Zealand find affordable, reliable rental insurance. That means:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Always free quotes with no hidden fees</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Updated information from all major NZ insurers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Educational content to help you understand rental insurance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Expert support to answer your questions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Compare?
            </h2>
            <p className="text-slate-600 mb-8">
              Get instant quotes from NZ's top rental insurers. Takes less than 2 minutes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Your Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
