import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rental Insurance NZ',
  description: 'Our privacy policy explains how we collect and use your personal information.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/privacy/' },
}

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Introduction</h2>
            <p>
              Rental Insurance (Cover4You) ("we", "us", "our") operates the RentalInsurance.co.nz website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our service:
            </p>
            <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">Personal Data:</h3>
            <p>While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property type and location</li>
              <li>Contents value estimate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Use of Data</h2>
            <p>Rental Insurance uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide you with insurance quotes from our partner insurers</li>
              <li>To contact you regarding your quote request</li>
              <li>To send you relevant information about rental insurance</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect against fraud and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the bottom of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>Email:</strong> hello@cover4you.co.nz<br/>
              <strong>Phone:</strong> 09 885 9549
            </p>
          </section>

          <p className="text-sm text-slate-600 mt-12">
            Last updated: March 2024
          </p>
        </div>
      </div>
    </div>
  )
}
