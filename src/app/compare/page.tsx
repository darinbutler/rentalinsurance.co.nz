import { Metadata } from 'next'
import Link from 'next/link'
import { insurers } from '@/data/insurers'
import { Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compare Insurers | Rental Insurance NZ',
  description: 'Compare rental insurance quotes from NZ top insurers. See ratings, prices, and features side-by-side.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/compare/' },
}

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[300px] bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Compare NZ Insurers
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Side-by-side comparison of NZ's top 6 rental insurance providers
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <h4 className="font-semibold text-slate-900 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {insurer.pros.slice(0, 2).map((pro, idx) => (
                          <li key={idx} className="text-sm text-green-700">+ {pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {insurer.cons.slice(0, 2).map((con, idx) => (
                          <li key={idx} className="text-sm text-red-700">- {con}</li>
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
                    <th className="px-6 py-4 text-left font-bold text-slate-900">Premium</th>
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

          {/* Detailed Comparison */}
          <div className="mt-16 pt-16 border-t-2 border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Detailed Insurer Profiles
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {insurers.map((insurer) => (
                <div key={insurer.id} className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{insurer.name}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
                      <p className="text-slate-600 text-sm">{insurer.description}</p>
                      <p className="text-xs text-slate-500 mt-2">Established {insurer.established}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Claims Process</h4>
                      <p className="text-slate-600 text-sm">{insurer.claimsProcess}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="text-green-600">Strengths</span>
                      </h4>
                      <ul className="space-y-1">
                        {insurer.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-slate-700 flex gap-2">
                            <span className="text-green-600">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Considerations</h4>
                      <ul className="space-y-1">
                        {insurer.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-slate-700 flex gap-2">
                            <span className="text-amber-600">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-center transition-colors mt-4"
                    >
                      Get Quote from {insurer.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
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
