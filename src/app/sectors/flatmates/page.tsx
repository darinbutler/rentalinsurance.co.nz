import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flatmate & Shared Accommodation Insurance | NZ',
  description: 'Individual rental insurance for flatmates and shared living situations in New Zealand. Separate coverage for shared flats.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/sectors/flatmates/' },
}

export default function FlatmatesPage() {
  return (
    <>
      <section className="h-[50vh] min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop"
            alt="Friends enjoying time together in shared flat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Users className="w-12 h-12 text-white mb-4" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Flatmates Insurance
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Individual coverage for flatmates in shared accommodation - protect yourself and manage liability properly
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Your Quote
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
              <h2 className="text-3xl font-bold text-slate-900">Flatmate Insurance Essentials</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Living with flatmates requires individual insurance for each person. Each flatmate should have their own separate policy covering only their belongings and their liability. This protects everyone and prevents disputes when something goes wrong.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Each Flatmate Should Have:</h3>
                {[
                  'Separate individual contents insurance for their belongings',
                  'Personal liability coverage for accidental damage they cause',
                  'Documentation of what they own (photos, receipts)',
                  'Clear understanding of shared vs personal items',
                  'Communication with flatmates about insurance coverage',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">Understanding Shared Liability</h4>
                <p className="text-slate-700 text-sm mb-3">
                  When you live with flatmates, liability for damage to the rental property is shared. Under NZ law, the landlord can claim against any or all of you. Your tenant liability insurance protects you from these costs.
                </p>
                <p className="text-slate-700 text-sm">
                  If Flatmate A causes $5,000 of damage, your liability insurance covers your portion of that damage. Don't rely on flatmates to have insurance - always have your own.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Flatmate Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Keep valuable items in your own room, not shared areas</li>
                  <li>Document items with photos when you move in</li>
                  <li>Keep your policy documents accessible</li>
                  <li>Communicate about damage incidents immediately</li>
                  <li>Share contact details of your insurance in case of emergency</li>
                  <li>Be clear about who owns what when moving out</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Get Your Flatmate Quote</h3>
                  <QuoteForm compact={true} />
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Flatmate Facts</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Each person needs own policy
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      From $20-25/month each
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Covers individual belongings
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Separate liability protection
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      No shared policies recommended
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
            name: 'Flatmate Insurance',
            description: 'Rental insurance for flatmates in New Zealand',
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
