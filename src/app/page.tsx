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
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&h=900&fit=crop"
            alt="Modern apartment interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Protect Your Belongings with the Right Rental Insurance
            </h1>
            <p className="mb-8 text-xl text-slate-200 sm:text-2xl">
              Compare quotes from NZ's leading insurers in minutes. Get the coverage you need at a price you'll love, from just $20/month.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#quote-form" className="rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg">
                Get a Free Quote
              </Link>
              <Link href="/compare" className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:shadow-lg">
                Compare Insurers
              </Link>
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
