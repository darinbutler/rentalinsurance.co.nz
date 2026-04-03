import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 mt-20">
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

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          {/* Legal Links */}
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

          {/* Copyright */}
          <div className="text-center text-xs text-slate-500">
            <p>
              Copyright {currentYear} Rental Insurance. All rights reserved. | ICNZ Registered Referral Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
