import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Rental Insurance NZ',
  description: 'Get in touch with our rental insurance team. Contact us via email, phone, or our online form for quotes and support.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/contact/' },
  keywords: 'contact rental insurance NZ, rental insurance quotes, tenant insurance support, insurance enquiries NZ',
  openGraph: {
    title: 'Contact Us | Rental Insurance NZ',
    description: 'Get in touch with our rental insurance team for quotes and support.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop"
            alt="Friendly customer service discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-xl text-slate-200">
            We're here to help with any questions about rental insurance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:hello@cover4you.co.nz"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      hello@cover4you.co.nz
                    </a>
                    <p className="text-sm text-slate-600 mt-1">24/7 Support</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a
                      href="tel:098859549"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      09 885 9549
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Quote RI for best prices</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">Monday – Friday: 9am – 5pm</p>
                    <p className="text-slate-600 text-sm">Saturday: 10am – 2pm</p>
                    <p className="text-slate-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm">We're Trusted By</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      Licensed Brokers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      FSP Compliant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      100% Secure
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border-4 border-emerald-500 bg-white shadow-2xl shadow-emerald-200/60 p-5 sm:p-8 lg:p-10 ring-1 ring-emerald-500/20">
                {/* Form Header with Badge */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Takes less than 2 minutes
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Get a Free Quote
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and we'll contact you with quotes from NZ's leading insurers.
                  </p>
                </div>
                <QuoteForm compact={true} />

                {/* Trust Badges Below Form */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-slate-700">Licensed Brokers</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-slate-700">No Broker Fees</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-slate-700">100% Secure</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-slate-700">Instant Quotes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg border border-slate-200 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                How long does it take to get a quote?
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">
                Most quotes are generated instantly. We'll contact you within 24 hours with options from our top insurers.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                Is there a fee for getting quotes?
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">
                No! Our quote service is completely free. We never charge broker fees or comparison fees.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                Can I compare quotes without buying?
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">
                Absolutely! Get quotes from all our top insurers and compare them at your own pace. No obligation to buy.
              </p>
            </details>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact RentalInsurance.co.nz',
            description: 'Get free rental insurance quotes from NZ\'s top providers',
            mainEntity: {
              '@type': 'Organization',
              name: 'RentalInsurance.co.nz',
              email: 'hello@cover4you.co.nz',
              telephone: '09-885-9549',
            },
          }),
        }}
      />
    </>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
