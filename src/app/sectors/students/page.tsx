import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { GraduationCap, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Accommodation Insurance | NZ University Housing',
  description: 'Affordable rental insurance for students in halls of residence, flats, and student accommodation in New Zealand.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/sectors/students/' },
}

export default function StudentsPage() {
  return (
    <>
      <section className="h-[50vh] min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop"
            alt="University students studying together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <GraduationCap className="w-12 h-12 text-white mb-4" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Student Accommodation Insurance
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Affordable coverage for halls, flats, and shared student accommodation across New Zealand
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Student Quote
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
              <h2 className="text-3xl font-bold text-slate-900">Why Students Need Insurance</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Most university halls and student accommodation providers require or strongly recommend rental insurance. Student flats have higher risks of accidental damage, and protecting your valuable electronics and belongings is crucial.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">What's Covered:</h3>
                {[
                  'Laptop, phone, camera, and other electronics',
                  'Furniture and personal belongings',
                  'Accidental damage to halls property',
                  'Theft and burglary',
                  'Liability for damage caused at parties or by you',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">Student Discounts Available</h4>
                <p className="text-slate-700 text-sm">
                  Many insurers offer special discounts for students with valid student ID. You can often save 10-15% on premiums. Get quotes to see what discounts apply to you.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Student-Specific Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Laptop and phone coverage is essential - these are your most expensive items</li>
                  <li>Check if your parents' insurance covers you while at university</li>
                  <li>Higher excess = lower premiums if you're careful with your belongings</li>
                  <li>Get accidental damage cover for party-related accidents</li>
                  <li>Update your sum insured if you buy new electronics</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Student Quote Form</h3>
                  <QuoteForm compact={true} />
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Student Facts</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Student discounts available
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      From $15-20/month for students
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Covers electronics essential
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Party damage cover available
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Most halls require it
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
            name: 'Student Accommodation Insurance',
            description: 'Rental insurance for students in New Zealand',
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
