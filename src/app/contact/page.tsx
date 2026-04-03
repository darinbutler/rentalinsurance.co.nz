import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Rental Insurance NZ',
  description: 'Get in touch with our rental insurance team. Contact us via email, phone, or our online form.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/contact/' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop"
            alt="Friendly customer service discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-200">
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
                      ICNZ Registered
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
              <div className="rounded-2xl border-2 border-emerald-200 bg-white shadow-xl shadow-emerald-100/50 p-8 sm:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Get a Free Quote
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and we'll contact you with quotes from NZ's leading insurers.
                  </p>
                </div>
                <QuoteForm compact={true} />
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
