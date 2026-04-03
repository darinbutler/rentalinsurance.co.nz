import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Rental Insurance NZ | Compare & Save | RentalInsurance.co.nz',
  description:
    'Compare rental insurance quotes from leading NZ providers. Get tailored coverage for tenants, students, and renters. Fast, simple, and transparent comparison.',
  metadataBase: new URL('https://rentalinsurance.co.nz'),
  alternates: { canonical: 'https://rentalinsurance.co.nz/' },
  keywords: [
    'rental insurance nz',
    'tenants insurance',
    'contents insurance nz',
    'renters insurance',
    'tenant liability',
    'renter protection',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Rental Insurance NZ | Compare & Save | RentalInsurance.co.nz',
    description:
      'Find the best rental insurance for renters and tenants in New Zealand. Compare quotes instantly.',
    type: 'website',
    locale: 'en_NZ',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rental Insurance NZ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Insurance NZ | Compare & Save',
    description:
      'Compare rental insurance quotes from leading NZ providers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rental Insurance NZ',
              url: 'https://rentalinsurance.co.nz',
              logo: 'https://rentalinsurance.co.nz/logo.svg',
              description:
                'Compare rental insurance quotes from leading NZ providers',
              sameAs: [
                'https://www.facebook.com/rentalinsurancenz',
                'https://www.instagram.com/rentalinsurancenz',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://rentalinsurance.co.nz',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://rentalinsurance.co.nz?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
