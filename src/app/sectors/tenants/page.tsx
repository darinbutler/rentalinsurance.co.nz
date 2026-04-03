import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tenants Insurance | Rental Insurance for Home Renters | NZ',
  description: 'Comprehensive rental insurance for tenants renting homes in New Zealand. Protect your belongings and your liability.',
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
      <section className="h-[50vh] min-h-[300px] bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Home className="w-12 h-12 text-white mb-4" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Tenants Insurance
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
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
              <h2 className="text-3xl font-bold text-slate-900">Why Renters Need Insurance</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                As a tenant, you're responsible for protecting your personal belongings and managing your liability for accidental damage to the property. Your landlord's building insurance doesn't cover your items or your liability.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">What Your Tenants Insurance Covers:</h3>
                {[
                  'Your furniture, electronics, clothing, and personal belongings',
                  'Accidental damage you cause to the rental property (up to your liability limit)',
                  'Theft and burglary of your belongings',
                  'Temporary accommodation if the property becomes uninhabitable',
                  'Legal liability up to $2 million',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">NZ Tenant Law Protection</h4>
                <p className="text-slate-700 text-sm">
                  Under the Residential Tenancies Act 2019, your liability for careless damage is limited to the lowest of: actual cost to repair, four weeks rent, or the landlord's insurance excess. Tenant liability insurance protects you from these costs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">How Much Does It Cost?</h3>
                <p className="text-slate-700">
                  Tenants insurance starts from around $20-$25 per month depending on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>The value of your belongings (contents value)</li>
                  <li>Your chosen excess</li>
                  <li>Optional add-ons like accidental damage</li>
                  <li>Your location in NZ</li>
                </ul>
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
            '@type': 'Service',
            name: 'Tenants Insurance',
            description: 'Rental insurance for tenants in New Zealand',
            provider: {
              '@type': 'Organization',
              name: 'Rental Insurance NZ',
              url: 'https://rentalinsurance.co.nz',
            },
            areaServed: 'NZ',
            url: 'https://rentalinsurance.co.nz/sectors/tenants/',
          }),
        }}
      />
    </>
  )
}
