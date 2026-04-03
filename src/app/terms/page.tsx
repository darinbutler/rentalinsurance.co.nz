import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Rental Insurance NZ',
  description: 'Terms of service for RentalInsurance.co.nz',
  alternates: { canonical: 'https://rentalinsurance.co.nz/terms/' },
}

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the RentalInsurance.co.nz website ("Service"), you are agreeing to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Service Description</h2>
            <p>
              Rental Insurance is a free comparison service that helps you obtain rental insurance quotes from multiple NZ insurers. We are not an insurance provider ourselves, but a referral service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on our Service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Accuracy of Materials</h2>
            <p>
              The materials appearing on our Service could include technical, typographical, or photographic errors. Rental Insurance does not warrant that any of the materials on our Service are accurate, complete, or current. Rental Insurance may make changes to the materials contained on our Service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Disclaimer</h2>
            <p>
              The materials on Rental Insurance's Service are provided on an 'as is' basis. Rental Insurance makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Limitations</h2>
            <p>
              In no event shall Rental Insurance or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Service, even if Rental Insurance or a representative of ours has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Accuracy of Information</h2>
            <p>
              You agree to provide accurate and complete information when requesting quotes. You are responsible for the accuracy of information you provide. Providing false information may result in termination of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites. Rental Insurance is not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is governed by their own terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Modifications</h2>
            <p>
              Rental Insurance may revise these Terms of Service at any time without notice. By using our Service, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of New Zealand, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
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
