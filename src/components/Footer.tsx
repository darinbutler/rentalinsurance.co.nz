import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 mt-12 sm:mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Simplifying rental insurance comparison for NZ tenants and renters.
            </p>
            <p className="text-xs text-slate-500">
              Powered by <span className="text-emerald-400 font-medium">Cover4You</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-bold text-white mb-4">Sectors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sectors/tenants"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Tenants
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/students"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/flatmates"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Flatmates
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/families"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Families
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@cover4you.co.nz" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  hello@cover4you.co.nz
                </a>
              </li>
              <li>
                <a href="tel:09-885-9549" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  09 885 9549
                </a>
              </li>
              <li className="text-slate-500 text-xs">
                Quote RI for best prices
              </li>
            </ul>
            <div className="mt-4 space-y-2 text-xs text-slate-500">
              <p>FSP Compliant</p>
              <p>Instant Quotes</p>
              <p>Expert Support</p>
              <p>100% Secure</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">How This Site Works</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              RentalInsurance.co.nz is committed to helping New Zealanders find the right rental insurance through honest, transparent comparison. We may receive compensation from insurers, brokers or underwriters when you enquire about or purchase a product through our site. However, this does not influence our reviews, ratings or recommendations. Our editorial team personally reviews all brokers, underwriters and insurers featured on this website to ensure we provide accurate, impartial information that saves you time and money.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              The information on this website is general in nature and does not constitute financial or insurance advice. We recommend you read the relevant Product Disclosure Statement (PDS) and consider your own circumstances before purchasing any insurance product. All efforts are made to keep information current and accurate, but we do not guarantee completeness or suitability for your individual needs.
            </p>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-slate-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-slate-400">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500">
            <p>
              Copyright {currentYear} Rental Insurance. All rights reserved. |{' '}
              <a
                href="https://www.icnz.org.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors underline"
              >
                Insurance Council of New Zealand
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
