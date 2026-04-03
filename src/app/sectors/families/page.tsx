import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { Home, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Rental Insurance | Comprehensive Coverage for Families',
  description: 'Complete rental insurance coverage for families renting homes in New Zealand. Protect your family and belongings.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/sectors/families/' },
}

export default function FamiliesPage() {
  return (
    <>
      <section className="h-[50vh] min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1600&h=900&fit=crop"
            alt="Happy family relaxing at home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Home className="w-12 h-12 text-white mb-4" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Family Rental Insurance
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Comprehensive coverage for families renting homes - protect your family, belongings, and peace of mind
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
              <h2 className="text-3xl font-bold text-slate-900">Family Rental Insurance</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Families renting homes have unique insurance needs. You need comprehensive coverage for your furniture, appliances, electronics, children's belongings, and extended liability protection. Family rental insurance provides the peace of mind that your family and belongings are protected.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Complete Family Coverage Includes:</h3>
                {[
                  'All household furniture and appliances',
                  'Electronics (TVs, computers, gaming consoles)',
                  'Clothing and personal items for all family members',
                  'Children\'s toys and equipment',
                  'Extended tenant liability ($2M standard, up to $5M available)',
                  'Temporary accommodation for family of any size',
                  'Legal costs up to policy limits',
                  'Accidental damage protection (optional)',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">Family Home Considerations</h4>
                <p className="text-slate-700 text-sm">
                  Families typically have higher contents values than individual renters due to furniture, appliances, and children's items. Make sure your sum insured reflects the full replacement value of your household contents. We recommend getting a contents inventory and valuation done.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Tips for Family Renters</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Document all items with photos and receipts for claims</li>
                  <li>Choose accidental damage cover - children cause accidents</li>
                  <li>Consider higher liability limits ($5M option) for safety</li>
                  <li>Update your sum insured if you buy new furniture or appliances</li>
                  <li>Get temporary accommodation cover with sufficient days (60+ days ideal)</li>
                  <li>Maintain photos of the rental's condition at move-in and move-out</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Why Families Must Have Insurance</h3>
                <p className="text-slate-700">
                  Under NZ law, you're liable for accidental damage caused by anyone in your household - including children. Family rental insurance protects you from the costs of accidents like:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Children putting objects through walls or windows</li>
                  <li>Spills damaging flooring or walls</li>
                  <li>Accidental water damage from appliances</li>
                  <li>Damage from parties or gatherings</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Family Quote Form</h3>
                  <QuoteForm compact={true} />
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Family Coverage Facts</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      From $25-35/month
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Coverage up to $150,000+
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Liability up to $5M
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Accidental damage available
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Extended temp accommodation
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
