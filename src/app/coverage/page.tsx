import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { CheckCircle, XCircle, Shield, DollarSign, Home, Building2, AlertTriangle, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rental Insurance Coverage Guide NZ | What\'s Covered & Excluded',
  description: 'Complete guide to rental insurance coverage in New Zealand. Learn what\'s covered, what\'s excluded, how much cover you need, tenant liability law, and how to choose the right policy.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/coverage/' },
  keywords: 'rental insurance coverage NZ, what is covered, what is excluded, tenant liability insurance NZ, contents insurance guide, rental protection',
  openGraph: {
    title: 'Rental Insurance Coverage Guide NZ | What\'s Covered & Excluded',
    description: 'Complete guide to rental insurance coverage in New Zealand. Learn what\'s covered, what\'s excluded, and how to choose the right policy.',
    type: 'website',
  },
}

export default function CoveragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[300px] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&h=900&fit=crop"
            alt="Modern home interior with personal belongings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Rental Insurance Coverage Guide
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Everything NZ renters need to know about what rental insurance covers, what it excludes, and how to choose the right level of protection
          </p>
        </div>
      </section>

      {/* Coverage Tiers - Prominent placement below hero */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Standard Coverage Tiers
          </h2>
          <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto mb-12">
            Choose a level of cover that matches the replacement value of your belongings. You can adjust your sum insured, excess, and optional add-ons when you get a quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Basic',
                value: '$20,000',
                price: 'From $20/month',
                best: 'Students & single flatmates',
                features: [
                  'Contents cover up to $20,000',
                  'Tenant liability up to $2M',
                  'Standard $500 excess',
                  'Fire, theft, storm, flood cover',
                  'Basic claims support',
                ],
              },
              {
                title: 'Standard',
                value: '$50,000',
                price: 'From $25/month',
                featured: true,
                best: 'Most popular for couples & professionals',
                features: [
                  'Contents cover up to $50,000',
                  'Tenant liability up to $2M',
                  'Flexible excess from $250',
                  'Accidental damage add-on available',
                  'Temporary accommodation (60 days)',
                  'Priority claims support',
                ],
              },
              {
                title: 'Premium',
                value: '$100,000+',
                price: 'From $35/month',
                best: 'Families & high-value contents',
                features: [
                  'Comprehensive cover $100K+',
                  'Tenant liability up to $5M',
                  'Low excess from $100',
                  'Specified valuables included',
                  'Full temporary accommodation',
                  'Dedicated claims manager',
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
                <p className={`text-3xl font-extrabold mb-1 ${tier.featured ? 'text-emerald-100' : 'text-emerald-600'}`}>
                  {tier.value}
                </p>
                <p className={`text-sm mb-1 ${tier.featured ? 'text-emerald-200' : 'text-slate-500'}`}>
                  {tier.best}
                </p>
                <p className={`font-semibold mb-6 ${tier.featured ? 'text-emerald-100' : 'text-slate-600'}`}>
                  {tier.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className={`flex gap-2 text-sm ${tier.featured ? 'text-emerald-100' : 'text-slate-700'}`}>
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

      {/* Coverage Overview Icons */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, title: 'Contents Protection', desc: 'Personal belongings covered against theft, fire, and damage' },
              { icon: DollarSign, title: 'Tenant Liability', desc: 'Accidental damage to the rental property up to $2M–$5M' },
              { icon: Home, title: 'Temporary Accommodation', desc: 'Emergency housing costs if your rental is uninhabitable' },
              { icon: Building2, title: 'Legal Expenses', desc: 'Legal costs related to tenancy disputes and claims' },
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

          {/* Understanding Rental Insurance Coverage */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Rental Insurance Coverage in New Zealand</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
              <p>
                Rental insurance in New Zealand — also commonly referred to as tenants insurance, renters insurance, or contents insurance for renters — is designed to protect your personal belongings and cover your financial liability while renting a property. It is important to understand that your landlord's insurance policy covers the building itself (the structure, roof, plumbing, and fixtures), but it does <strong>not</strong> extend to any of your personal possessions inside the home.
              </p>
              <p>
                A comprehensive rental insurance policy in NZ typically provides four key areas of protection: contents cover for your personal belongings, tenant liability cover for accidental damage to the property, temporary accommodation costs if your home becomes uninhabitable, and in some cases, legal expense cover. The specific coverage details, limits, and exclusions vary between insurers, which is why comparing policies is essential before purchasing.
              </p>
              <p>
                In New Zealand, rental insurance and contents insurance are effectively the same product. Many insurers advertise "renters insurance" as a product category, but when you purchase the policy, it will be a contents insurance policy with optional tenant liability cover. When comparing, always check that the policy includes both contents protection <strong>and</strong> tenant liability to ensure you have full coverage.
              </p>
            </div>
          </div>

          {/* Detailed Coverage Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* What's Covered */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-7 h-7 text-emerald-600" />
                What Rental Insurance Covers
              </h2>
              <div className="space-y-4">
                {[
                  { item: 'Personal belongings', detail: 'Furniture, electronics, clothing, appliances, kitchenware, and personal items — covered for theft, fire, storm, flood, and other specified events' },
                  { item: 'Tenant liability', detail: 'Accidental damage you cause to the rental property, such as fire from unattended cooking, water damage from an overflowing bath, or broken fixtures — typically up to $2M' },
                  { item: 'Theft and burglary', detail: 'Stolen items from your rental home, including forced entry and theft by deception in some policies' },
                  { item: 'Fire and smoke damage', detail: 'Full replacement of contents destroyed or damaged by fire, including smoke and soot damage to clothing and soft furnishings' },
                  { item: 'Storm and flood damage', detail: 'Belongings damaged by severe weather events, flooding, or storm-related water ingress' },
                  { item: 'Temporary accommodation', detail: 'Alternative housing costs for 30–90 days if your rental becomes uninhabitable due to an insured event' },
                  { item: 'Accidental damage (optional)', detail: 'An add-on that covers accidental damage to your own belongings, such as dropping a laptop or spilling wine on a couch' },
                  { item: 'Specified valuables (optional)', detail: 'Individual cover for high-value items like engagement rings, cameras, or musical instruments — covered both inside and outside the home' },
                  { item: 'Glass and mirrors', detail: 'Accidental breakage of glass items including mirrors, glass-top tables, and ceramic cooktops in some policies' },
                  { item: 'Keys and locks', detail: 'Replacement of locks and keys if your keys are lost or stolen, including the cost of a locksmith' },
                ].map((entry, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">{entry.item}:</span>{' '}
                      <span className="text-slate-700">{entry.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Not Covered */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="w-7 h-7 text-red-600" />
                Common Exclusions
              </h2>
              <div className="space-y-4">
                {[
                  { item: 'Intentional damage', detail: 'Any damage you deliberately cause to the property or your own belongings is never covered by any insurance policy' },
                  { item: 'Wear and tear', detail: 'Normal deterioration, ageing, and gradual damage to your belongings over time is excluded' },
                  { item: 'The building itself', detail: 'The structure, roof, walls, and permanent fixtures are your landlord\'s responsibility to insure — not yours' },
                  { item: 'Earthquake damage (standard)', detail: 'Most standard policies exclude earthquake cover. In earthquake-prone regions like Wellington and Christchurch, you may need to add this as an optional extra' },
                  { item: 'Items left outside', detail: 'Belongings stored outside the home, in unlocked garages, or in open carports are typically not covered unless specifically included' },
                  { item: 'Pest and vermin damage', detail: 'Damage caused by rats, mice, insects, mould, or mildew is excluded from most policies' },
                  { item: 'Unspecified high-value items', detail: 'Individual items worth more than your policy\'s single-item limit (often $2,000–$5,000) may not be fully covered unless individually specified' },
                  { item: 'Motor vehicles', detail: 'Cars, motorcycles, and other registered vehicles are not covered under contents insurance — you need separate vehicle insurance' },
                  { item: 'Business equipment', detail: 'Items used primarily for business purposes may be excluded or only partially covered. You may need a separate business contents policy' },
                  { item: 'Gradual water damage', detail: 'Slow leaks, seepage, or rising damp that occurs over time rather than from a sudden event is typically excluded' },
                ].map((entry, idx) => (
                  <div key={idx} className="flex gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">{entry.item}:</span>{' '}
                      <span className="text-slate-700">{entry.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Much Cover Do You Need */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How Much Rental Insurance Cover Do You Need?</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              One of the most common mistakes NZ renters make is either underinsuring or overinsuring their belongings. Underinsuring means you won't receive enough to replace everything if the worst happens, while overinsuring means you're paying more in premiums than necessary. Getting the sum insured right is crucial.
            </p>
            <p>
              To calculate the right level of cover, walk through every room in your rental and make a list of everything you own, estimating the <strong>replacement cost</strong> (not the second-hand value) of each item. Most insurers pay out based on what it would cost to buy a new equivalent item, so your calculation should reflect current retail prices.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Typical Contents Values by Renter Type</h3>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden border border-slate-200">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="text-left py-3 px-4 font-semibold">Renter Type</th>
                    <th className="text-left py-3 px-4 font-semibold">Typical Contents Value</th>
                    <th className="text-left py-3 px-4 font-semibold">Recommended Cover</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { type: 'Student in halls', value: '$5,000 – $15,000', cover: '$15,000 – $20,000' },
                    { type: 'Single flatmate', value: '$10,000 – $25,000', cover: '$20,000 – $30,000' },
                    { type: 'Young professional', value: '$20,000 – $40,000', cover: '$30,000 – $50,000' },
                    { type: 'Couple renting', value: '$30,000 – $60,000', cover: '$50,000 – $70,000' },
                    { type: 'Family with children', value: '$50,000 – $100,000', cover: '$70,000 – $120,000' },
                    { type: 'Executive/professional', value: '$80,000 – $150,000+', cover: '$100,000 – $200,000' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-3 px-4 font-medium text-slate-900">{row.type}</td>
                      <td className="py-3 px-4 text-slate-700">{row.value}</td>
                      <td className="py-3 px-4 text-slate-700">{row.cover}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Don't Forget High-Value Items</h4>
                <p className="text-slate-700 text-base">
                  Most standard policies have a single-item limit — typically between $2,000 and $5,000. If you own items worth more than this (e.g. an engagement ring, high-end laptop, professional camera, or musical instrument), you'll need to specify them individually on your policy to ensure they're fully covered. This is sometimes called "specified items" or "listed valuables" cover.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contents Inventory Checklist</h3>
            <p>
              Use this room-by-room checklist to estimate the replacement value of your belongings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                { room: 'Living Room', items: 'Couch, TV, entertainment system, shelving, books, lamps, rugs, artwork, gaming consoles' },
                { room: 'Bedroom', items: 'Bed frame, mattress, bedding, wardrobe contents, clothing, shoes, jewellery, personal electronics' },
                { room: 'Kitchen', items: 'Appliances (microwave, toaster, coffee machine, blender), cookware, utensils, small electrical items' },
                { room: 'Bathroom', items: 'Hair tools, electric toothbrush, personal care appliances, towels, cabinets' },
                { room: 'Home Office', items: 'Laptop/desktop computer, monitor, printer, desk chair, stationery, files' },
                { room: 'Garage/Storage', items: 'Tools, sports equipment, bicycles, camping gear, seasonal items, garden equipment' },
              ].map((entry, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-5">
                  <h4 className="font-bold text-slate-900 mb-2">{entry.room}</h4>
                  <p className="text-sm text-slate-600">{entry.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Liability Explained */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Tenant Liability Cover Explained</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              Tenant liability cover is a critical component of any rental insurance policy in New Zealand. This section of your policy protects you financially if you accidentally damage the rental property. Common scenarios where tenant liability cover would apply include accidentally starting a kitchen fire, leaving a bath running and causing water damage to floors or ceilings, breaking a window or door, or causing damage to fixed carpets or curtains.
            </p>
            <p>
              Under New Zealand's Residential Tenancies Act (as amended in 2019), tenants who cause <strong>careless or accidental damage</strong> have their liability capped at the lowest of three amounts: the actual cost of the damage, four weeks' rent, or the landlord's insurance excess. This provides significant protection, but tenant liability insurance goes further by covering the cost up to your policy limit (typically $2M) and handling the claims process on your behalf.
            </p>
            <p>
              It is important to note that the legal liability cap only applies to careless damage. If damage is deemed intentional, the cap does not apply and you could be held responsible for the full cost of repairs. Having tenant liability cover provides peace of mind in situations where the distinction between careless and intentional damage could be disputed.
            </p>

            <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 flex gap-4 mt-6">
              <HelpCircle className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Do I Still Need Liability Cover With the 2019 Law Changes?</h4>
                <p className="text-slate-700 text-base">
                  Yes. While the 2019 amendments significantly reduced tenant liability for accidental damage, having your own liability cover provides several additional benefits: it covers legal defence costs if there's a dispute about whether damage was accidental or intentional, it covers damage to common areas in apartment buildings, and it provides cover for situations that may fall outside the statutory caps. Most NZ insurance advisors still recommend including tenant liability as part of your rental insurance policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flatmates and Shared Living */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Coverage for Flatmates and Shared Living</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              If you share a flat or house with other people, it is important to understand that your rental insurance policy only covers <strong>your own belongings</strong>. Your flatmates' possessions are not covered under your policy — each person in the flat needs to take out their own individual contents insurance to be protected.
            </p>
            <p>
              There are also important limitations in shared living situations. Most policies will <strong>not</strong> cover theft by a flatmate or damage caused by someone you live with. If a flatmate accidentally damages your belongings, your policy may not pay out unless there was forced entry or an event outside normal domestic situations. Similarly, if a flatmate's guest damages your property, coverage may be limited.
            </p>
            <p>
              For students living in halls of residence or other university-provided accommodation, check whether you are covered under your parents' contents insurance policy first. Many family policies provide limited cover for students living away from home, typically up to a specified sub-limit (e.g. $10,000–$20,000). If your parents' policy doesn't cover you, or the limit is insufficient, you should consider taking out your own policy.
            </p>
          </div>
        </div>
      </section>

      {/* Earthquake Cover Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Earthquake Cover for Renters in New Zealand</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              New Zealand sits on the Pacific Ring of Fire, and earthquake risk is a significant factor for insurance in many parts of the country — particularly Wellington, Christchurch, Hawke's Bay, and the wider Canterbury region. For renters, it is important to understand how earthquake cover works for your personal belongings.
            </p>
            <p>
              Most standard contents insurance policies in NZ include some level of natural disaster cover through the Toka Tū Ake EQC (Earthquake Commission) scheme. As of 2024, EQC provides up to <strong>$20,000 of contents cover</strong> for residential properties that have a current contents insurance policy. This means if you have any level of contents insurance, you are automatically entitled to up to $20,000 of EQC cover for earthquake damage to your belongings.
            </p>
            <p>
              If your contents are worth more than $20,000, your private insurer covers the remaining amount above the EQC cap, provided your policy includes earthquake or natural disaster cover. Check your policy wording carefully, as some budget policies may exclude or limit earthquake cover. In high-risk areas, it's worth paying a slightly higher premium for a policy with comprehensive natural disaster protection.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Get Your Personalised Coverage Quote
            </h2>
            <p className="text-slate-600 text-lg">
              Complete the form below and we'll match you with the right coverage from NZ's leading insurers. It takes less than 2 minutes.
            </p>
          </div>
          <QuoteForm compact={true} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Rental Insurance Coverage NZ',
            description: 'Comprehensive rental insurance coverage guide for New Zealand tenants',
            provider: {
              '@type': 'Organization',
              name: 'RentalInsurance.co.nz',
            },
            areaServed: 'New Zealand',
          }),
        }}
      />
    </>
  )
}
