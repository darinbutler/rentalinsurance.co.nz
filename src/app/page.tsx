import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedStats from '@/components/AnimatedStats'
import HowItWorks from '@/components/HowItWorks'
import QuoteForm from '@/components/QuoteForm'
import CTABanner from '@/components/CTABanner'
import { faqs } from '@/data/faqs'
import {
  User,
  Users,
  Home,
  GraduationCap,
  CheckCircle,
  Shield,
  DollarSign,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Rental Insurance NZ | Compare & Save | RentalInsurance.co.nz',
  description:
    'Compare rental insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your tenant and contents insurance cover.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/' },
  openGraph: {
    title:
      'Rental Insurance NZ | Compare & Save | RentalInsurance.co.nz',
    description:
      'Compare rental insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your tenant and contents insurance cover.',
    url: 'https://rentalinsurance.co.nz/',
  },
}

export default function HomePage() {
  const sectorTypes = [
    {
      id: 'tenants',
      title: 'Tenants',
      description: 'Protection for renting homes with comprehensive contents coverage',
      icon: User,
      href: '/sectors/tenants',
    },
    {
      id: 'students',
      title: 'Students',
      description: 'Affordable coverage for halls, flats, and student accommodation',
      icon: GraduationCap,
      href: '/sectors/students',
    },
    {
      id: 'flatmates',
      title: 'Flatmates',
      description: 'Individual policies for shared living with separate protection',
      icon: Users,
      href: '/sectors/flatmates',
    },
    {
      id: 'families',
      title: 'Families',
      description: 'Complete family rental coverage with extended liability options',
      icon: Home,
      href: '/sectors/families',
    },
  ]

  const whyInsure = [
    {
      icon: Shield,
      title: 'Contents Protection',
      description: 'Your belongings are protected from theft, fire, and accidental damage up to your chosen limit.',
    },
    {
      icon: DollarSign,
      title: 'Tenant Liability',
      description: 'Accidental damage to the rental property is covered up to $2M, capped at fair NZ law limits.',
    },
    {
      icon: Clock,
      title: 'Temporary Accommodation',
      description: 'If your rental becomes uninhabitable, we cover your temporary living costs while repairs happen.',
    },
  ]

  const featuredFaqs = faqs.slice(0, 5)

  return (
    <>
      {/* Hero Section */}
      <section className="h-[70vh] min-h-[500px] bg-gradient-to-br from-emerald-50 via-sky-50 to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Protect Your Belongings with the Right <span className="text-emerald-600">Rental Insurance</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Compare quotes from NZ's leading insurers in minutes. Get the coverage you need at a price you'll love, from just $20/month.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/compare"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-emerald-200 shadow-lg hover:shadow-xl"
              >
                Compare Insurers
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                ICNZ Registered
              </span>
              <span className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                No Broker Fees
              </span>
              <span className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Instant Quotes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* How It Works */}
      <HowItWorks />

      {/* Sector Types Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Coverage for Every Renter
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Whether you're a single tenant, student, flatmate, or family, we have the right coverage for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorTypes.map((sector) => {
              const Icon = sector.icon
              return (
                <Link
                  key={sector.id}
                  href={sector.href}
                  className="group bg-white rounded-lg border-2 border-slate-200 p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex flex-col h-full">
                    <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-slate-600 text-sm flex-grow">{sector.description}</p>
                    <div className="text-emerald-600 font-semibold text-sm mt-4 group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Rental Insurance Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Rental Insurance Matters
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Protect yourself from financial loss with comprehensive coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyInsure.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-lg p-8 border border-emerald-100"
                >
                  <div className="text-emerald-600 mb-4">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {featuredFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-white rounded-lg border border-slate-200 p-6 hover:border-emerald-300 transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {faq.question}
                  <svg
                    className="h-5 w-5 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              View All FAQs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Complete the form below and we'll show you quotes from NZ's top rental insurers. Takes less than 2 minutes.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
