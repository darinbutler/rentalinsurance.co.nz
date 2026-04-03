import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { GraduationCap, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Contents Insurance NZ | Halls & Flat Coverage',
  description: 'Comprehensive student accommodation insurance for NZ university halls, flats, and shared housing. Affordable coverage from $180-900/year. Compare quotes for electronics, accidental damage, and liability protection.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/sectors/students/' },
  keywords: 'student rental insurance NZ, university halls insurance, student contents insurance, accommodation insurance students, student tenant coverage',
  openGraph: {
    title: 'Student Contents Insurance NZ | Halls & Flat Coverage',
    description: 'Comprehensive student accommodation insurance for NZ university halls and flats. Affordable coverage and compare quotes.',
    type: 'website',
  },
}

export default function StudentsPage() {
  return (
    <>
      <section className="h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop"
            alt="University students studying together in accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <GraduationCap className="w-12 h-12 text-white mb-4" />
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Student Accommodation Insurance
            </h1>
            <p className="text-base sm:text-xl text-slate-200 mb-8">
              Affordable rental contents insurance designed for university halls, student flats, and shared accommodation across New Zealand
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

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">What is Student Contents Insurance?</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Student contents insurance is a specialist form of rental insurance designed specifically for university accommodation. Whether you're living in university halls of residence, a student flat in shared housing, or a private rental as a student, contents insurance protects your personal belongings against theft, accidental damage, water damage, fire, and other covered perils. In New Zealand, most university halls of residence and many student landlords require incoming students to have contents insurance in place before moving in.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Unlike building insurance (which covers the structure and fixtures of the property itself), contents insurance specifically covers your possessions - everything from your laptop and phone to furniture, clothing, textbooks, and personal electronics. For students, this is critically important as your belongings often represent the largest asset you own during your university years.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Why Do Students Need Insurance?</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Student accommodation presents unique risks that require specific protection. University halls and student flats typically house multiple young people in close proximity, with shared facilities like kitchens and bathrooms. This environment creates a higher likelihood of accidental damage - a flatmate's cooking accident causing water damage to your room, a spilled drink damaging your laptop, or property damage during a social gathering. Additionally, student accommodation can face higher rates of theft and burglary, particularly of high-value electronics that students rely on for their studies.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Most university halls of residence in New Zealand - including those at the University of Auckland, University of Otago, Victoria University of Wellington, University of Canterbury, and Massey University - require students to hold contents insurance as part of their accommodation agreement. Many private landlords renting to student tenants impose the same requirement. Beyond the practical requirement, contents insurance gives you peace of mind knowing that if disaster strikes, you won't face financial hardship or be unable to continue your studies due to lost or damaged belongings.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Is Your Parents' Insurance Coverage Enough?</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Many students assume they're covered under their parents' contents insurance policy. However, this is a critical misconception that can leave you unprotected. Most residential contents insurance policies only provide coverage for the policyholder's own home and may exclude or provide limited coverage for adult children living away at university. Some policies may offer cover for student children in halls of residence, but typically with significant restrictions and limited sum insured amounts.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Additionally, parent policies may not cover accidental damage, party liability, or other perils that are standard in student-specific insurance. The best approach is to check with your parents' insurer about what (if any) coverage extends to you at university, but also secure your own dedicated student contents insurance. Student policies are specifically designed with your needs in mind and typically cost between NZ$180-$900 per year depending on your sum insured and level of cover, providing genuine protection tailored to student life.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">University Halls vs. Flat Living - Different Risks</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Living arrangements significantly affect your insurance needs. University halls of residence typically provide more controlled environments with security measures like access cards, reception staff, and resident advisors. However, halls also mean shared walls with other students, communal bathrooms, and frequent visitors passing through. The main risks in halls are theft (in communal areas and from your room), water damage from leaking shared plumbing, fire, and accidental damage to shared facilities that you may be held liable for.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Student flats, conversely, offer more independence but typically carry greater security risks. A flat in an older Auckland villa or Dunedin student neighborhood may have poorer locks, exterior water pipes prone to leaking, or outdated electrical systems. Flat shares mean you're reliant on flatmates to take care of shared property, and you may be held jointly liable for damage to the property or accidents on the premises. Most student flat contents insurance policies include landlord liability cover, protecting you against claims if a visitor is injured in your flat and sues the landlord.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">What's Covered Under Student Contents Insurance?</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A comprehensive student contents insurance policy typically covers a wide range of belongings and perils. The main categories of cover include personal possessions (electronics, clothing, textbooks, sporting equipment), furniture you own, and accidental damage protection. Let's look at what you can expect to be protected:
                </p>
                <div className="space-y-3">
                  {[
                    'Laptops, computers, phones, and tablets - usually with limits per item',
                    'Television, speakers, gaming consoles, and entertainment electronics',
                    'Camera equipment and photography gear',
                    'Furniture including bed, desk, chair, and storage units',
                    'Clothing, textbooks, and educational materials',
                    'Musical instruments and sports equipment',
                    'Accidental damage caused by you or your flatmates',
                    'Theft and burglary protection (with valid locks required)',
                    'Water damage from burst pipes, leaks, or flooding',
                    'Fire damage and damage from smoke',
                    'Landlord liability (damage to the building structure)',
                    'Personal liability (if you cause injury to another person)',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Common Student Insurance Claims</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Understanding common student claims helps explain why insurance is so valuable. Rental Insurance NZ processes thousands of claims annually, and certain types of claims are particularly common among student policyholders:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Laptop and Electronics Theft</h3>
                    <p className="text-slate-600 leading-relaxed">
                      The single most common claim among students is theft or damage to laptops and phones. A laptop left unattended in a library, a phone stolen from a flat during a party, or a tablet dropped and damaged - these are regular occurrences in student life. With typical student laptops worth $1,500-$3,000, a single incident without insurance can derail your academic year. Some policies require you to take reasonable care (not leaving devices unattended in obvious places), but many cover theft even from unattended locations within your accommodation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Flat Fires and Water Damage</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Student flats face a higher incidence of water damage claims - typically from burst pipes during winter months, leaking roofs, or blocked drains in shared bathrooms. These incidents can cause thousands of dollars worth of damage to your belongings. Water damage claims in Wellington are particularly common due to the city's age and the prevalence of older properties in the student zone around Victoria University. Fire and smoke damage, while less common, can be catastrophic and completely destroy a year's worth of belongings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Accidental Damage at Flatmate Parties</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Accidental damage is a leading claim category for student policies. A guest spills a full jug of beer on your laptop, a flatmate's friend breaks your television while dancing, or a kitchen mishap damages your belongings through water or smoke - these incidents are almost a rite of passage in student flats. Without accidental damage cover, you'd be liable for all costs. With it, most incidents are covered (subject to your excess). Party liability cover is equally important, protecting you if a guest injures themselves and claims against the landlord, with the insurance covering your liability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Damage From Shared Facility Failures</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Many claims arise when shared facilities fail - a faulty shower causing water damage to your room in halls, a leaking toilet in the flat above causing damage to your bedroom below, or a communal kitchen fire affecting your stored food and equipment. In halls, the university may pursue you for repair costs if you're deemed liable, making landlord liability cover essential. In flats, you may be jointly liable with flatmates for damage to the building.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">How Much Does Student Contents Insurance Cost?</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Student contents insurance is remarkably affordable, with premiums structured to reflect the typically lower sum insured and younger age profile of student policyholders. Average costs range significantly based on several factors:
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  For a student with a sum insured of NZ$5,000-$8,000 (common for those in halls with minimal furniture), annual premiums typically range from NZ$180-$300, or roughly $15-$25 per month. Students in flats with more possessions and higher sum insured amounts ($10,000-$15,000) typically pay between NZ$350-$550 annually. Those with comprehensive sum insured values of $15,000-$20,000 (including furniture, extensive electronics, and personal items) can expect to pay NZ$600-$900 per year.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The most cost-effective approach for students is to accurately assess what you actually own and need to insure. Don't overestimate your sum insured just because you think you might buy items later - you can adjust your cover mid-year if needed. Conversely, don't under-insure and find yourself facing a claim you can't cover. Choose a reasonable excess (often $250-$500 for students) to lower your premium - if you're careful with your belongings, you're less likely to claim anyway.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Tips for Choosing the Right Student Cover</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Selecting appropriate student contents insurance requires understanding your specific situation and comparing options. Here are key considerations when evaluating student policies:
                </p>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Verify the Sum Insured is Realistic</h3>
                    <p className="text-slate-600">Walk through your accommodation and list everything you own - count your electronics (laptop, phone, tablet, monitor), furniture (bed, desk, chair, wardrobe), and personal items. Most students find they need between $6,000-$15,000 coverage. Sum insured that's too low means you won't be fully compensated for a claim; too high means you're overpaying for cover you don't need.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Confirm Accidental Damage is Included</h3>
                    <p className="text-slate-600">Student life involves accidents - this cover is not optional. Make sure your policy explicitly includes accidental damage cover (sometimes offered as an optional add-on with a small extra premium). This is what covers party mishaps, water damage from flatmate errors, and accidental breakages.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Check Electronics Coverage Limits</h3>
                    <p className="text-slate-600">Ensure there's adequate cover for individual electronics items. Some policies limit a single item to $1,500 or $2,000, which may be insufficient for a modern laptop. Look for policies with per-item limits of at least $2,500-$3,000 for electronics, or items can be covered at agreed value.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Understand What Landlord Liability Covers</h3>
                    <p className="text-slate-600">If you're in a flat (particularly one you rent from a private landlord), ensure landlord liability cover is included. This protects you against claims if you cause damage to the building or if someone is injured. Many student policies include this standard; others offer it as an add-on option.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Look for Student Discounts</h3>
                    <p className="text-slate-600">Many insurers offer 10-15% discounts for students with valid student ID or direct enrollment verification. Always ask about these discounts when getting quotes - they can save you $30-$100+ annually. Some policies also offer mid-year adjustments if you add expensive items.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Choose an Appropriate Excess</h3>
                    <p className="text-slate-600">The excess (amount you pay toward each claim) directly affects your premium. A higher excess ($500) means lower premiums but higher out-of-pocket costs if you claim. For careful students, a higher excess can save 20-30% on premiums. For those prone to accidents, a lower excess may be better value.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Compare Multi-Year Policies</h3>
                    <p className="text-slate-600">Some insurers offer discounts for committing to multi-year policies (e.g., for a 3-year degree). These can provide better value than annual renewals, plus you get guaranteed coverage for the duration of your studies. Check what happens if you need to make changes mid-term.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Flatmate Responsibilities and Shared Liability</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Living with flatmates in a student flat creates shared responsibility for property damage and accidents. Understanding these responsibilities is crucial for protecting yourself. In most rental agreements, all tenants are jointly and severally liable for damage to the building and property - meaning the landlord can pursue any one of you for the full cost of repairs, even if only one flatmate caused the damage.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  This is why landlord liability insurance is so important. If a flatmate causes water damage worth $5,000 to the property while you're at a lecture, the landlord can claim against your tenancy bond or pursue you for the cost. Your landlord liability cover protects you against such claims, even for damage caused by your flatmates (up to your policy limit). It also protects you if a guest or visitor is injured and sues - common scenarios in student flats include someone slipping on a wet kitchen floor or being injured at a flatmate's party.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Best practice in a student flat is to have a flat agreement documenting shared responsibilities, conduct regular safety checks, and ensure all flatmates understand their obligation not to deliberately or negligently damage property. However, even in the best-run flats, accidents happen - which is exactly what insurance is for.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">Special Note for International Students</h4>
                <p className="text-slate-700">
                  If you're an international student attending a New Zealand university on a student visa, contents insurance is especially important. Most universities and accommodation providers require proof of insurance before you can move in. Additionally, under the NZQA Code of Practice for International Students, your institution may have specific insurance requirements. Ensure your policy covers you as an international student and check any exclusions related to overseas visitors or temporary residence.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <h2 className="text-3xl font-bold text-slate-900">Student Insurance Across New Zealand Universities</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Requirements and common claims vary across New Zealand's major university cities. The University of Auckland explicitly requires contents insurance for all halls residents, with typical coverage needed around $8,000-$12,000 sum insured for those in residential colleges and halls in areas like Mount Eden and Epsom. Auckland's rental market and student accommodation face particular risks around break-ins in older villa-style flats in the student zone.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  At the University of Otago in Dunedin, halls residents and flat dwellers face different challenges - Dunedin's cold, damp climate means water damage and mold claims are common, while the city's student culture means higher rates of accidental damage claims. Victoria University of Wellington students in Willis Street flats or university housing in Kelburn typically need good water damage and accidental damage coverage due to the city's weather and older housing stock. University of Canterbury accommodation in Christchurch has specific earthquake-related considerations, and Massey University Palmerston North and Auckland campuses both have strong requirements for student insurance.
                </p>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Get a Student Quote</h3>
                  <QuoteForm compact={true} />
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Student Coverage Facts</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Typical cost:</strong> $180-$900/year</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Sum insured:</strong> $5K-$20K range</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Electronics limit:</strong> Usually $2.5K-$3K per item</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Student discounts:</strong> 10-15% available</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Accidental damage:</strong> Essential add-on</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Excess typical:</strong> $250-$500</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Halls requirement:</strong> Usually mandatory</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Multi-year discount:</strong> Often available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">What to Gather for Your Quote</h4>
                  <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
                    <li>List of electronics and their values</li>
                    <li>Furniture and household items details</li>
                    <li>Type of accommodation (halls vs flat)</li>
                    <li>Building security details</li>
                    <li>Valid student ID or enrolment proof</li>
                    <li>Estimated total sum insured needed</li>
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
            name: 'Student Contents Insurance',
            description: 'Comprehensive rental insurance for students in New Zealand university halls, flats, and shared accommodation',
            provider: {
              '@type': 'Organization',
              name: 'Rental Insurance NZ',
            },
            areaServed: 'NZ',
            serviceType: 'Contents Insurance',
            url: 'https://rentalinsurance.co.nz/sectors/students/',
          }),
        }}
      />
    </>
  )
}
