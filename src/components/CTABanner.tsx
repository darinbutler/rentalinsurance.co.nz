import Link from 'next/link';

export default function CTABanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Protect Your Belongings?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation quote from NZ's leading rental insurers. Takes less than 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-emerald-600 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get a Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg transition-colors border-2 border-white/20"
          >
            Compare Insurers
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
