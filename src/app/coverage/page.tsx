import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, XCircle, Shield, DollarSign, Home, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coverage Guide | Rental Insurance NZ',
  description: 'Understand what rental insurance covers and what is excluded. Complete coverage guide for NZ renters.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/coverage/' },
}

export default function CoveragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[300px] bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Coverage Guide
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Understand exactly what your rental insurance covers
          </p>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, title: 'Contents', desc: 'Your belongings' },
              { icon: DollarSign, title: 'Liability', desc: 'Accidental damage' },
              { icon: Home, title: 'Temp Accommodation', desc: 'Emergency housing' },
              { icon: Building2, title: 'Legal Costs', desc: 'Up to $2M cover' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <Icon className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Coverage Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What's Covered */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-7 h-7 text-emerald-600" />
                What's Covered
              </h2>

              <div className="space-y-4">
                {[
                  'Personal belongings (furniture, electronics, clothing, appliances)',
                  'Accidental damage to rental property up to policy limits',
                  'Theft and burglary of your belongings',
                  'Fire and smoke damage',
                  'Temporary accommodation (30-60 days)',
                  'Legal liability up to $2 million',
                  'Accidental damage to your belongings (with add-on)',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Not Covered */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="w-7 h-7 text-red-600" />
                What's Not Covered
              </h2>

              <div className="space-y-4">
                {[
                  'Intentional damage or theft you cause',
                  'Wear and tear or normal depreciation',
                  'Damage to the building itself',
                  'Earthquake damage (unless added)',
                  'Items kept outside the property',
                  'Damage from pests or animals',
                  'High-value items without specific coverage',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Tiers */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Standard Coverage Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Basic',
                value: '$20,000',
                price: 'From $20/month',
                features: [
                  'Basic contents coverage',
                  'Tenant liability $2M',
                  'Standard excess',
                  'Basic claims support',
                ],
              },
              {
                title: 'Standard',
                value: '$50,000',
                price: 'From $25/month',
                featured: true,
                features: [
                  'Full contents coverage',
                  'Tenant liability $2M',
                  'Flexible excess',
                  'Priority claims support',
                  'Accidental damage add-on',
                  'Temporary accommodation',
                ],
              },
              {
                title: 'Premium',
                value: '$100,000+',
                price: 'From $35/month',
                features: [
                  'Comprehensive coverage',
                  'Tenant liability $5M',
                  'Low excess options',
                  'Dedicated claims team',
                  'Add-on protections',
                  'Full temporary accommodation',
                ],
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 transition-all duration-300 ${
                  tier.featured
                    ? 'bg-emerald-600 text-white border-2 border-emerald-600 shadow-xl scale-105'
                    : 'bg-white border-2 border-slate-200 hover:border-emerald-300'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-1 ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                  {tier.title}
                </h3>
                <p className={`text-3xl font-extrabold mb-4 ${tier.featured ? 'text-emerald-100' : 'text-emerald-600'}`}>
                  {tier.value}
                </p>
                <p className={`font-semibold mb-6 ${tier.featured ? 'text-emerald-100' : 'text-slate-600'}`}>
                  {tier.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className={`flex gap-2 ${tier.featured ? 'text-emerald-100' : 'text-slate-700'}`}>
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${tier.featured ? 'text-white' : 'text-emerald-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.featured
                      ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Get Your Personalised Quote
            </h2>
            <p className="text-slate-600">
              We'll help you find the right coverage tier for your needs.
            </p>
          </div>
          <QuoteForm compact={true} />
        </div>
      </section>
    </>
  )
}
