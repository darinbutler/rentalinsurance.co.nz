import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You | Rental Insurance NZ',
  description: 'Thanks for your interest in getting a rental insurance quote. We will be in touch soon.',
  robots: 'noindex',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
            <CheckCircle className="w-20 h-20 text-emerald-600 relative" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
          Thank You!
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Your quote request has been received.
        </p>

        {/* Message */}
        <div className="bg-white rounded-lg border-2 border-emerald-200 p-6 mb-8 space-y-4">
          <div className="flex gap-3 items-start">
            <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="font-semibold text-slate-900">Check Your Email</p>
              <p className="text-sm text-slate-600">
                We'll send you quotes from NZ's top insurers within 24 hours.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="font-semibold text-slate-900">What's Next?</p>
              <p className="text-sm text-slate-600">
                One of our team will contact you to discuss the best options for your situation.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">In the meantime:</h3>
          <div className="space-y-3 mb-8">
            <Link
              href="/coverage"
              className="block p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors border border-slate-200 hover:border-emerald-300"
            >
              <p className="font-semibold text-slate-900 text-sm">Learn About Coverage</p>
              <p className="text-xs text-slate-600">Understand what rental insurance covers</p>
            </Link>

            <Link
              href="/compare"
              className="block p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors border border-slate-200 hover:border-emerald-300"
            >
              <p className="font-semibold text-slate-900 text-sm">Compare Insurers</p>
              <p className="text-xs text-slate-600">See detailed profiles of NZ's top insurers</p>
            </Link>

            <Link
              href="/blog"
              className="block p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors border border-slate-200 hover:border-emerald-300"
            >
              <p className="font-semibold text-slate-900 text-sm">Read Our Blog</p>
              <p className="text-xs text-slate-600">Expert guides on rental insurance in NZ</p>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t-2 border-slate-200 pt-8">
          <p className="text-sm text-slate-600 mb-4">
            Can't wait? Contact us directly:
          </p>
          <div className="space-y-2">
            <a
              href="mailto:hello@cover4you.co.nz"
              className="block text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              hello@cover4you.co.nz
            </a>
            <a
              href="tel:098859549"
              className="block text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              09 885 9549
            </a>
            <p className="text-xs text-slate-600">Quote RI for best prices</p>
          </div>
        </div>

        {/* Back Home */}
        <div className="mt-8 pt-8 border-t-2 border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
