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

      {/* What Is Rental Insurance - SEO Content Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            What Is Rental Insurance in New Zealand?
          </h2>
          <div className="prose prose-lg prose-slate max-w-none space-y-5 text-slate-600 leading-relaxed">
            <p>
              Rental insurance — also known as tenants insurance, renters insurance, or contents insurance for renters — is a policy that protects your personal belongings and covers your liability while you are renting a property in New Zealand. While your landlord's insurance covers the building itself, it does <strong>not</strong> cover your possessions inside the home. That means if a fire, burglary, flood, or accidental event damages or destroys your belongings, you would need to replace everything out of your own pocket unless you have rental insurance in place.
            </p>
            <p>
              In New Zealand, around 36% of households are renters according to Stats NZ, yet many renters remain uninsured. A standard rental insurance policy typically covers the repair or replacement of personal belongings such as furniture, electronics, clothing, appliances, and valuables. Most policies also include tenant liability cover, which protects you if you accidentally damage the rental property — for example, leaving a tap running that causes water damage, or accidentally starting a kitchen fire.
            </p>
            <p>
              It is important to understand that rental insurance and contents insurance are effectively the same product. Many NZ insurers market "renters insurance" but will direct you to their contents insurance policy. When comparing policies, look for a contents insurance policy that includes both contents cover and tenant liability cover to ensure you have full protection.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Tenant Liability Law */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Tenant Liability Law in New Zealand
          </h2>
          <div className="prose prose-lg prose-slate max-w-none space-y-5 text-slate-600 leading-relaxed">
            <p>
              In 2019, the New Zealand Government passed significant changes to the Residential Tenancies Act that directly impact how much tenants are liable for if they accidentally damage a rental property. Under the updated law, if a tenant (or their guest) causes <strong>careless or accidental damage</strong> to a rental property, the tenant's maximum liability is capped at whichever of the following is <strong>lowest</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-white rounded-lg border-2 border-emerald-100 p-5 text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">Option 1</div>
                <p className="text-sm text-slate-700">The actual cost of the damage</p>
              </div>
              <div className="bg-white rounded-lg border-2 border-emerald-100 p-5 text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">Option 2</div>
                <p className="text-sm text-slate-700">Four weeks' rent</p>
              </div>
              <div className="bg-white rounded-lg border-2 border-emerald-100 p-5 text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">Option 3</div>
                <p className="text-sm text-slate-700">The landlord's insurance excess</p>
              </div>
            </div>
            <p>
              This means that even if you accidentally cause $50,000 of fire damage to a rental property, your personal liability is capped — typically at around $2,000 to $2,500 (four weeks' rent). However, this protection <strong>only applies to accidental or careless damage</strong>. If the damage is intentional, you remain fully liable. Importantly, under the updated law, insurers can no longer pursue tenants on the landlord's behalf for accidental damage claims, providing further protection for renters.
            </p>
            <p>
              Despite these legal protections, rental insurance remains highly valuable. The liability cap protects you from building damage costs, but it does not cover the loss of your own possessions. If a fire destroys your rental home, you could lose tens of thousands of dollars worth of personal belongings — furniture, electronics, clothing, and irreplaceable items. Rental insurance ensures you can replace what you've lost without financial hardship.
            </p>
          </div>
        </div>
      </section>

      {/* Why Rental Insurance Section - Enhanced */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Rental Insurance Matters for NZ Renters
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Protect yourself from financial loss with comprehensive coverage tailored to New Zealand renters.
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

          <div className="mt-12 max-w-4xl mx-auto space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              Many New Zealand renters assume their landlord's insurance will protect them, but this is a common misconception. A landlord's property insurance covers the building structure — the walls, roof, plumbing, and fixtures — but it does <strong>not</strong> extend to any of your personal possessions inside the home. Without your own rental insurance policy, you are fully responsible for replacing everything you own if disaster strikes.
            </p>
            <p>
              Consider the true value of your belongings: your laptop, phone, furniture, kitchen appliances, clothing, sports equipment, musical instruments, jewellery, and any collectibles. Most New Zealanders significantly underestimate the replacement value of their home contents. Even a modest rental with basic furnishings can contain $30,000 to $50,000 worth of possessions. For families, this figure often exceeds $80,000 or more.
            </p>
            <p>
              Beyond contents protection, rental insurance provides tenant liability cover, temporary accommodation costs if your rental becomes uninhabitable, and legal expense cover in some policies. Some providers also offer optional add-ons for specified valuables (e.g. engagement rings, cameras, high-end electronics) that cover items both inside and outside the home.
            </p>
          </div>
        </div>
      </section>

      {/* How Much Does Rental Insurance Cost */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            How Much Does Rental Insurance Cost in New Zealand?
          </h2>
          <div className="prose prose-lg prose-slate max-w-none space-y-5 text-slate-600 leading-relaxed">
            <p>
              The cost of rental insurance in New Zealand varies depending on several factors, but most renters can expect to pay between <strong>$20 and $70 per month</strong> for a standard contents insurance policy. On average, NZ renters pay approximately $600 to $850 per year for comprehensive cover, though basic policies for lower sum insured amounts (e.g. $25,000 cover) can be found for as little as $400 per year.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Factors That Affect Your Premium</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                { factor: 'Location', detail: 'Wellington is the most expensive city for contents insurance due to seismic risk, averaging $880+ per year. Auckland averages around $770, while Dunedin is among the cheapest at approximately $490.' },
                { factor: 'Property Type', detail: 'Apartments and units can sometimes attract lower premiums than standalone houses, though this varies by insurer and location.' },
                { factor: 'Sum Insured', detail: 'The total value you insure your contents for directly impacts your premium. A $25,000 policy will cost significantly less than a $100,000 policy.' },
                { factor: 'Your Age', detail: 'Younger renters (18–24) typically pay higher premiums. The average annual cost for this age group is around $900, while older renters often pay less.' },
                { factor: 'Excess Amount', detail: 'Choosing a higher voluntary excess (e.g. $1,000 instead of $250) can reduce your annual premium by up to $300.' },
                { factor: 'Claims History', detail: 'If you have made claims in the past few years, your premium may be higher. A clean claims record helps keep costs down.' },
                { factor: 'Security Features', detail: 'Having an alarm system — especially a monitored one — can reduce your premium. Deadlocks and security cameras may also help.' },
                { factor: 'Payment Frequency', detail: 'Paying annually rather than monthly is often cheaper, as insurers may add a fee for monthly instalments.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-5">
                  <h4 className="font-bold text-slate-900 mb-1">{item.factor}</h4>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Regional Pricing Guide</h3>
            <p>
              Insurance premiums in New Zealand vary significantly by region, largely driven by natural hazard risk profiles. Here is a general guide to what renters can expect to pay in major NZ cities:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-slate-200">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="text-left py-3 px-4 font-semibold">City/Region</th>
                    <th className="text-left py-3 px-4 font-semibold">Average Annual Cost</th>
                    <th className="text-left py-3 px-4 font-semibold">Risk Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { city: 'Wellington', cost: '$880 – $1,100', risk: 'High (earthquake zone)' },
                    { city: 'Auckland', cost: '$710 – $850', risk: 'Moderate (volcanic/flood)' },
                    { city: 'Christchurch', cost: '$750 – $950', risk: 'High (earthquake zone)' },
                    { city: 'Hamilton', cost: '$550 – $700', risk: 'Low–Moderate' },
                    { city: 'Tauranga', cost: '$500 – $650', risk: 'Low–Moderate' },
                    { city: 'Dunedin', cost: '$490 – $600', risk: 'Low' },
                    { city: 'Queenstown', cost: '$600 – $750', risk: 'Low–Moderate' },
                    { city: 'Palmerston North', cost: '$520 – $680', risk: 'Low–Moderate' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-3 px-4 font-medium text-slate-900">{row.city}</td>
                      <td className="py-3 px-4 text-slate-700">{row.cost}</td>
                      <td className="py-3 px-4 text-slate-700">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              These figures are estimates based on industry data for a standard contents policy with approximately $50,000 of cover. Your actual premium will depend on your specific circumstances, insurer, and the coverage options you choose. We recommend comparing quotes from multiple providers to ensure you get the best deal.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Saving on Rental Insurance */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Tips for Saving on Rental Insurance in NZ
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              Getting the right rental insurance doesn't have to break the bank. Here are practical ways NZ renters can reduce their premiums while maintaining solid coverage:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
              {[
                { title: 'Compare Multiple Insurers', desc: 'Prices can vary by 30–50% between providers for the same level of cover. Always compare at least three quotes before committing to a policy.' },
                { title: 'Increase Your Excess', desc: 'Raising your excess from $250 to $500 or $1,000 can significantly lower your annual premium. Only choose an excess you can comfortably afford to pay.' },
                { title: 'Don\'t Over-Insure', desc: 'Calculate the realistic replacement value of your belongings. Insuring for $100,000 when your contents are worth $40,000 means you\'re paying for cover you don\'t need.' },
                { title: 'Bundle Your Policies', desc: 'Some insurers offer multi-policy discounts if you combine your contents insurance with car insurance or other products.' },
                { title: 'Install Security Features', desc: 'Deadlocks, alarm systems, and security cameras can all help reduce your premium. Let your insurer know about any security measures you have in place.' },
                { title: 'Pay Annually', desc: 'Most insurers charge less if you pay your premium as an annual lump sum rather than monthly instalments. The savings can be $50–$100 per year.' },
                { title: 'Review Your Policy Annually', desc: 'Don\'t auto-renew without checking. Your circumstances may have changed, or a competitor may now offer better value for your situation.' },
                { title: 'Ask About No-Claims Discounts', desc: 'Some insurers reward loyal customers with no-claims bonuses that reduce your premium over time. Ask about this when comparing policies.' },
              ].map((tip, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{tip.title}</h4>
                    <p className="text-sm text-slate-600">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
              href="/contact"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Still have questions? Get in touch
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

      {/* JSON-LD Schema - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
