import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flatmate & Shared Accommodation Insurance | NZ',
  description: 'Individual rental insurance for flatmates and shared living situations in New Zealand. Separate coverage for shared flats.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/sectors/flatmates/' },
}

export default function FlatmatesPage() {
  return (
    <>
      <section className="h-[50vh] min-h-[300px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop"
            alt="Friends enjoying time together in shared flat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Users className="w-12 h-12 text-white mb-4" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Flatmates Insurance
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Individual coverage for flatmates in shared accommodation - protect yourself and manage liability properly
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Your Quote
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
              <h2 className="text-3xl font-bold text-slate-900">Why Flatmates Need Individual Insurance</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sharing a flat in New Zealand is an affordable way to live, but it comes with unique insurance challenges. Many flatmates assume they're covered under a shared policy or that their landlord's insurance will protect them, but this is a dangerous misconception. Each person living in a shared flat needs their own separate rental insurance policy to protect both their personal belongings and their financial liability if something goes wrong.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                When you live with other people, you're not just protecting your own possessions—you're also managing your legal exposure to claims for damage you might cause to the rental property. Under New Zealand law and the Residential Tenancies Act, landlords can hold any or all tenants jointly and severally liable for damage to the property. Without individual liability insurance, you could be personally responsible for thousands of dollars in repairs you didn't directly cause.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12">Flatmate Insurance Essentials</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Living with flatmates requires individual insurance for each person. Each flatmate should have their own separate policy covering only their belongings and their liability. This protects everyone and prevents disputes when something goes wrong. When each person has their own policy, there's no confusion about who is covered, what is protected, and who pays when damage occurs.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Each Flatmate Should Have:</h3>
                {[
                  'Separate individual contents insurance for their belongings',
                  'Personal liability coverage for accidental damage they cause',
                  'Documentation of what they own (photos, receipts)',
                  'Clear understanding of shared vs personal items',
                  'Communication with flatmates about insurance coverage',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">What's Covered in Shared Living</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your rental insurance policy covers your personal belongings that you own and bring into the flat. This typically includes furniture you own, electronics, clothing, books, musical instruments, and other items that belong exclusively to you. Most policies cover items in your bedroom and items you use in shared spaces, such as your kitchenware or your portion of shared appliances if you've paid for them.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Your personal liability coverage protects you if you accidentally cause damage to the rental property that the landlord could legally claim from you. For example, if you accidentally damage the kitchen bench, flood the bathroom, or cause a fire through cooking accidents, your liability insurance would help cover those costs. This coverage is crucial in a flat share situation because landlords expect to recover damages from the tenants responsible, and New Zealand law supports this approach.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Most policies also cover temporary loss of your belongings if the flat becomes uninhabitable due to covered damage like fire or flood, and many include cover for items temporarily removed from the flat (such as a laptop at work or items at a friend's house).
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">What's NOT Covered - Critical Exclusions for Shared Flats</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Understanding what isn't covered is just as important as knowing what is. There are several important exclusions that affect flatmates specifically, and these can create serious problems if you're not aware of them.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mt-4">
                <h4 className="font-bold text-red-900 mb-3">Theft by Flatmates or Guests</h4>
                <p className="text-red-800 mb-3">
                  One of the most critical exclusions in rental insurance is theft or loss caused by a person you live with. If a flatmate steals your laptop, takes money, or deliberately damages your belongings, your insurance will not cover it. This is the biggest gap in coverage for people living in shared accommodation. You must rely on your relationship with your flatmates and, if necessary, pursuing the matter through the police or small claims court.
                </p>
                <p className="text-red-800">
                  This is why it's essential to keep valuables secure in your own locked room and to choose flatmates carefully. Items of high value should ideally be stored with additional security measures.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded mt-4">
                <h4 className="font-bold text-orange-900 mb-3">Damage Caused by Other People You Live With</h4>
                <p className="text-orange-800 mb-3">
                  If another flatmate accidentally damages your belongings, your insurance will not cover it. For instance, if a flatmate spills wine on your laptop, damages your belongings while moving furniture, or breaks your possessions through their carelessness, you cannot claim under your own policy for damage they cause.
                </p>
                <p className="text-orange-800">
                  In these situations, you would need to claim from the flatmate directly or their contents insurance (if they have it). This is another strong reason to discuss insurance with your flatmates when you move in and to document the condition of shared areas with photos.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded mt-4">
                <h4 className="font-bold text-amber-900 mb-3">Shared Items and Common Possessions</h4>
                <p className="text-amber-800 mb-3">
                  If you and your flatmates buy shared items together—a television for the lounge, kitchen appliances, furniture for common areas—these cannot typically be claimed by just one person's insurance. These items need to be clearly owned by one person, or the entire cost would need to be apportioned across the co-owners' insurance policies, which becomes complicated.
                </p>
                <p className="text-amber-800">
                  The best approach is to avoid shared purchases when possible. If you do buy something together, have a written agreement about who owns what percentage and clarify this before making the purchase. One flatmate can purchase items for common areas, and the others can reimburse them without becoming co-owners.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded mt-4">
                <h4 className="font-bold text-yellow-900 mb-3">Damage Caused by Tenants (Joint Liability Issues)</h4>
                <p className="text-yellow-800">
                  While your liability insurance covers damage you personally cause, it does not cover damage caused by other flatmates if they don't have insurance or if their insurance doesn't cover the incident. However, under NZ law, landlords can pursue any or all tenants for damage. Your policy protects you from claims, but only if the damage is found to be your responsibility. If the landlord claims against all of you for damage no one will admit to causing, you may need to navigate disputes with both the landlord and your flatmates.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Understanding Tenant Liability in Shared Flats</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Residential Tenancies Act 1986 establishes that where multiple people are listed as tenants on a tenancy agreement, they are jointly and severally liable for all obligations. This means the landlord can pursue any single tenant for the full amount of damage, regardless of who actually caused it. Each tenant then has a legal right to recover their share from the other tenants, but this must be pursued separately through courts.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                For example, imagine the flat has $10,000 in water damage because of a burst pipe caused by poor maintenance, or $5,000 in damage to the kitchen bench from unknown causes. If the landlord can't determine who caused it, they can claim from any or all of you. Without liability insurance, you could be personally responsible for paying the full amount while pursuing your flatmates for reimbursement—an expensive and time-consuming process. With proper liability insurance, your insurer covers your portion of the claim and negotiates with the landlord.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                This is why having your own separate liability insurance is absolutely essential. It's your protection against being left with a large debt if damage occurs and other flatmates don't have insurance or can't afford to pay their share.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Shared Contents and How to Handle Them</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                In most flat shares, there are items that truly belong to no one specific person or items that are shared for convenience. A sofa in the lounge, kitchen appliances, or a dining table purchased jointly create insurance complications. The key principle is that only individually owned items can be claimed under an individual's policy.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                The best practice is for one flatmate to purchase items for shared spaces and retain ownership. The other flatmates can reimburse them, but that person's insurance covers that item as their personal property. Alternatively, flatmates can purchase their own items for shared spaces. For instance, one flatmate buys the kitchen table and retains ownership; another buys a coffee table; another buys the sofa. This way, each item is clearly owned and can be insured.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                If damage occurs to a shared item, the owner of that item can claim through their insurance. If the damage was caused by someone else, they would claim against that person's liability insurance. This clear ownership structure prevents disputes and ensures claims can be processed smoothly.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Calculating Your Individual Contents Value</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                One of the most important steps in getting properly insured is accurately calculating the replacement cost of your belongings. Underinsuring means you won't receive full compensation if disaster strikes. Overinsuring means you're paying unnecessary premiums. The right approach is to do a thorough audit of everything you own.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Start by going through each room systematically. In your bedroom, list all furniture (bed, wardrobe, desk, chair), clothing, footwear, books, electronics (laptop, phone, gaming equipment), and other personal items. Estimate replacement costs at new prices—this is what you'd spend to replace everything if it were all destroyed. Don't try to estimate used value unless your policy specifically asks for it; insurance typically covers new replacement cost.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                In shared spaces, only count items you personally own. If you've purchased the kitchen table for the flat, include it at its full replacement cost. If you own a high-end coffee maker you use but didn't purchase, don't include it. If you're unsure whether you own something in a shared space, clarify it with your flatmates in writing.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Online calculators and insurance company worksheets can help, but the most accurate method is to take photos of your belongings and research replacement costs. Many people are surprised at how much they own—a decent wardrobe, laptop, furniture, and household items can easily total $20,000-$50,000+. Rent a storage unit for a few hours and take photos of everything you'd move with you; this gives you a visual inventory to price. Your total contents value is a key factor in determining your annual premium, so accuracy here saves money and ensures you're properly protected.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Real-World Scenarios: How Insurance Works in Shared Flats</h3>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded mt-4">
                <h4 className="font-bold text-emerald-900 mb-3">Scenario 1: Flatmate Leaves Stove On</h4>
                <p className="text-emerald-800 mb-3">
                  Jake forgets to turn off the stove after cooking pasta. A dishtowel catches fire, and the resulting blaze damages the kitchen and spreads to the lounge, destroying furniture, electronics, and artwork. Damage to the flat is $25,000. Jake's flatmates, Sarah and Marcus, suffer personal belongings damage: Sarah loses $8,000 in electronics and clothing; Marcus loses $6,000 in furniture and items.
                </p>
                <p className="text-emerald-800 mb-3">
                  Jake's liability insurance covers his legal liability for causing the fire—up to his policy limit, typically $1-5 million for tenant liability. He makes a claim, and his insurer covers the $25,000 damage to the flat. Sarah and Marcus each claim under their own contents policies for their personal belongings (assuming the fire is a covered peril). Jake is also liable for any damage to Sarah and Marcus's belongings directly caused by him, but this is typically covered under his liability insurance or falls within the "act of another person" exclusion on their contents policies.
                </p>
                <p className="text-emerald-800">
                  Without insurance: Jake could be personally liable for $25,000 to the landlord plus claims from his flatmates for $14,000 in belongings—a total of $39,000. With insurance, his insurer handles the claim.
                </p>
              </div>

              <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded mt-4">
                <h4 className="font-bold text-slate-900 mb-3">Scenario 2: Flatmate Steals Your Items</h4>
                <p className="text-slate-800 mb-3">
                  Sophie moves into a flat with three others. After a few weeks, she notices her laptop ($1,500), headphones ($400), and cash ($300) have gone missing from her room while she was at work. She suspects one of her flatmates took them. She doesn't have evidence, and the flatmate denies it. She tries to claim under her contents insurance.
                </p>
                <p className="text-slate-800 mb-3">
                  Her claim is denied. The policy explicitly excludes theft by people she lives with. Sophie would need to pursue the matter through police (if she can gather evidence) or through small claims court, which is time-consuming and uncertain.
                </p>
                <p className="text-slate-800">
                  The lesson: In a flat share, you cannot rely on insurance to cover theft by flatmates. You must invest in a good lock for your door, use a safe for valuables, or avoid keeping high-value items in communal areas. Trust and security are your first line of defense.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mt-4">
                <h4 className="font-bold text-blue-900 mb-3">Scenario 3: Water Damage - Who's Responsible?</h4>
                <p className="text-blue-800 mb-3">
                  A burst water pipe in the flat's wall causes $8,000 in water damage to the lounge, bedroom walls, and carpet. The cause is a maintenance failure by the landlord—the pipe was corroded from years of use. Two flatmates, Alex and Jordan, live there. Their personal belongings suffer $3,000 and $2,500 damage respectively.
                </p>
                <p className="text-blue-800 mb-3">
                  Since the cause is the landlord's maintenance failure, the landlord's property insurance (or the landlord directly) covers the building damage. Alex and Jordan each claim under their contents insurance for their personal belongings damage. Their claims are approved because the damage is from a covered peril (water damage from burst pipes).
                </p>
                <p className="text-blue-800">
                  But now imagine the pipe burst due to Tenant A accidentally damaging it (freezing the pipes by opening windows in winter, for example). The landlord claims against the tenants for the $8,000 damage. Without knowing exactly who caused it, the landlord could claim from both flatmates. Their liability insurance would cover this exposure, protecting them from the claim.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mt-4">
                <h4 className="font-bold text-purple-900 mb-3">Scenario 4: Shared Item Damage</h4>
                <p className="text-purple-800 mb-3">
                  Three flatmates, Emma, Lily, and Ava, jointly purchase a $3,000 sofa for the lounge. Emma pays for it and puts it on her contents insurance as her property. Six months later, Lily spills red wine all over it while having friends over, causing $1,500 damage.
                </p>
                <p className="text-purple-800 mb-3">
                  Emma claims under her contents insurance. However, damage caused by another person she lives with is excluded from her policy. Emma must claim against Lily's liability insurance. Lily's liability insurance covers damage she causes to other people's belongings, so Emma's claim is approved by Lily's insurer, and Lily's insurer pays for the damage.
                </p>
                <p className="text-purple-800">
                  If Lily didn't have insurance, Emma would have to pursue Lily personally through small claims court or negotiate a payment plan. This scenario shows why clear ownership of items and everyone having their own liability coverage is critical in shared living.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Bond vs Insurance: How They Work Together</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Many flatmates misunderstand the relationship between their bond and insurance. Your bond is money held by the landlord as security against damage to the property and unpaid rent. It's typically equivalent to four weeks' rent and must be held by the Rental Bonds Centre (a government body in New Zealand).
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                If you damage the property through normal wear and tear, the bond can cover the cost of repairs, but only if deducted by the landlord from your bond at the end of the tenancy. The bond is limited to the amount you've paid (typically $500-$3,000 depending on rent). If damage exceeds your bond, the landlord can pursue you personally for the remainder, and this is where your liability insurance becomes crucial.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                For example, if you cause $8,000 in damage and your bond is $2,000, you're personally liable for the remaining $6,000. Your liability insurance covers this exposure. Additionally, if you break the lease early by moving out without proper notice, your bond can be forfeited. Insurance doesn't replace the bond—it works alongside it to provide a safety net when damage claims exceed the bond amount.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Always ensure you get a Bond Lodgement document from the Rental Bonds Centre and keep your own copy. This proves your bond was properly lodged and protects your right to recover it when your tenancy ends.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded mt-4">
                <h4 className="font-semibold text-slate-900 mb-2">Understanding Shared Liability</h4>
                <p className="text-slate-700 text-sm mb-3">
                  When you live with flatmates, liability for damage to the rental property is shared. Under NZ law, the landlord can claim against any or all of you. Your tenant liability insurance protects you from these costs. Your insurance covers your portion of shared liability claims and protects you even if other flatmates don't have insurance or can't afford to pay.
                </p>
                <p className="text-slate-700 text-sm">
                  If Flatmate A causes $5,000 of damage, their liability insurance covers their portion of that damage. But if damage occurs and no one admits fault, all flatmates could be pursued. This is why everyone needs individual coverage—you can't rely on others to be insured.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Practical Tips for Flatmates Living in Shared Accommodation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Successful flat shares require more than just insurance. Here are essential practices to minimize risk and protect yourself:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 text-lg mt-4">
                <li>Keep valuable items in your own room, not shared areas, and use a good lock</li>
                <li>Document items with photos and receipts when you move in</li>
                <li>Keep your policy documents accessible and share policy contact details with flatmates</li>
                <li>Communicate about damage incidents immediately and report to landlord and insurer</li>
                <li>Have a written agreement with flatmates about who owns what, especially shared items</li>
                <li>Be clear about who owns what when moving out to avoid disputes</li>
                <li>Take photos of the flat's condition when you move in and keep copies</li>
                <li>Use a bond lodgement document and keep proof of your bond amount</li>
                <li>Avoid joint purchases unless ownership percentages are crystal clear</li>
                <li>Establish house rules about safety (stove use, smoking, guests) to prevent claims</li>
                <li>Meet before move-in to discuss insurance, liability, and expectations</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Common Claims in Shared Living Situations</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Insurance claims data reveals patterns in what goes wrong in shared flats. Understanding these common incidents helps you prepare and prevent them:
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                <strong>Water Damage Claims</strong> are the most common major claims in rental properties. Burst pipes, blocked drains, overflowing baths, and washing machine failures cause thousands of dollars in damage. In a flat share, you need to know where main water shut-offs are located, inspect pipes for corrosion or issues, and never ignore signs of leaks. If a flatmate is responsible for the damage, their liability insurance covers it.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Fire and Cooking Accidents</strong> are another major category. Unattended cooking is a leading cause of flat fires. Establish clear rules about cooking, make sure smoke alarms are functional, and ensure everyone knows how to use fire extinguishers. In a shared kitchen, it's easy for someone to cause a fire that damages the entire property and everyone's belongings.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Accidental Damage by Flatmates</strong> to your belongings is common—someone breaks your items while moving, spills something on your possessions, or damages electronics. Since this isn't covered by your own policy (as it's caused by others), you need the responsible flatmate to have liability insurance. This is yet another reason to discuss insurance when selecting flatmates.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Malicious Damage</strong> or theft is less common but devastating. Arguments between flatmates, resentment about shared expenses, or simply dishonesty can lead to one flatmate damaging another's belongings intentionally. Insurance doesn't cover this either, so prevention—choosing reliable flatmates and maintaining positive relationships—is essential.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Residential Tenancies Act and Your Rights</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Residential Tenancies Act 1986 is the legal framework governing all rental properties in New Zealand. Understanding your rights and obligations under this Act is important for protecting yourself in a flat share. The Act establishes that tenants must keep the property in good condition (reasonable wear and tear excepted), and landlords must maintain the property in a safe, healthy condition.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                If there are disputes about damage—whether it's caused by normal wear and tear, maintenance failures, or tenant negligence—the Tenancy Tribunal can resolve these. Maintenance failures (like a burst pipe due to pipe corrosion) are the landlord's responsibility and covered by their property insurance, not tenants. Damage caused by tenants' actions or negligence is the tenants' responsibility.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                In a flat share where damage occurs and responsibility is unclear, the Tenancy Tribunal may need to determine fault. Keeping good records—photos of the flat, communications about incidents, and documentation of what you own—helps protect your position if disputes arise. Insurance and the legal framework work together to protect your interests.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Who Pays When Things Go Wrong</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Determining responsibility for payment when damage occurs requires clear thinking about who caused it and what types of coverage apply:
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                <strong>Damage You Cause:</strong> Your personal liability insurance covers damage you cause to the rental property or other people's belongings (beyond those you live with). You pay your excess; your insurer covers the rest up to your policy limit.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Damage a Flatmate Causes:</strong> Their personal liability insurance covers it. You never pay directly—their insurer handles the claim. If they don't have insurance, you cannot claim from your own policy, and you must pursue them legally.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Damage from Maintenance Failures:</strong> The landlord's property insurance or the landlord directly pays. They are responsible for maintaining the property. You claim under your contents insurance only for your personal belongings; you don't claim for damage to the building.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Unknown Cause Damage:</strong> This is tricky. If no one can determine who caused damage, and the landlord suspects it was a tenant, the landlord may claim against all tenants. Your liability insurance would defend you and negotiate a settlement. If damage is ultimately determined to be the landlord's responsibility (maintenance), your insurer would recover any amounts paid.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Flatmate Best Practices and Communication</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The best protection in a shared flat is clear communication and mutual understanding. Before moving in with new flatmates, have a conversation about insurance, liability, and expectations. Share relevant details: Do you have insurance? What's your policy's excess? What's your liability limit? Who do you contact if there's damage?
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                Write down agreements about shared items, who owns what, and how costs for replacing common items will be handled. If someone damages a shared item, agree in advance whether it will be claimed through insurance or split among users. Create a house manual: where is the water shut-off? Where's the electrical panel? How do you work the heating system? What are the house rules about cooking, smoking, and guests?
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                If damage occurs, report it to the landlord and your insurer promptly. Don't try to hide it or repair it yourself—this can invalidate your claim. Cooperate with your flatmates to investigate the cause and determine responsibility, but protect yourself by documenting everything in writing. Flatmates who communicate well and treat each other with respect are far less likely to have insurance disputes.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10">Choosing the Right Policy for Your Situation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                When comparing flatmate insurance policies, focus on three key elements: contents cover (how much is your coverage limit, what's covered, what's excluded), personal liability (is it sufficient, what's the limit), and excess (how much will you pay out of pocket for a claim).
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                For contents cover, ensure your policy limit matches your calculated contents value. A policy with a $20,000 limit is not enough if you own $35,000 in belongings. Review exclusions carefully—does it cover accidental damage? What about theft by others (family, friends, not flatmates)? Are high-value items like jewelry covered, or do you need separate coverage?
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                For personal liability, aim for at least $2-5 million in coverage. This is standard in NZ rental insurance and protects you against large claims. Some policies offer higher limits for minimal extra cost, so check what's available.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Choose an excess you can comfortably pay. A lower excess ($250) means higher premiums; a higher excess ($1,000) means lower premiums but higher out-of-pocket costs if you claim. Many people choose $500, striking a balance. Some policies offer no-excess cover for specific perils like accidental damage, which is valuable.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Finally, check if the policy covers items outside the flat (at work, at friends' houses, temporarily stored elsewhere). For flatmates, this is valuable because you might leave items in shared spaces or take belongings out of the flat temporarily.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Get Your Flatmate Quote</h3>
                  <QuoteForm compact={true} />
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Flatmate Facts</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Each person needs own policy
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      From $20-25/month each
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Covers individual belongings
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Separate liability protection
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      No shared policies recommended
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Theft by flatmates not covered
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Liability limit typically $2-5M
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      Bond and insurance work together
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Key Exclusions to Know</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      Theft by flatmates
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      Damage by people you live with
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      Damage to shared items (unless you own them)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      Negligence-caused damage in some cases
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
            name: 'Flatmate Insurance',
            description: 'Rental insurance for flatmates in New Zealand',
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
