import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { Clock, User, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Rental Insurance NZ',
  description: 'Expert guides and articles about rental insurance, tenant rights, and student accommodation insurance in New Zealand.',
  alternates: { canonical: 'https://rentalinsurance.co.nz/blog/' },
  keywords: 'rental insurance blog, tenant guides NZ, rental insurance tips, student accommodation insurance, renters advice',
  openGraph: {
    title: 'Blog | Rental Insurance NZ',
    description: 'Expert guides and articles about rental insurance, tenant rights, and accommodation insurance in New Zealand.',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[40vh] min-h-[250px] sm:h-[50vh] sm:min-h-[300px] bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Rental Insurance Blog
          </h1>
          <p className="text-base sm:text-xl text-emerald-100">
            Expert guides and insights for NZ renters
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-sky-400 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-emerald-600 uppercase">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-emerald-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Want a Free Quote?
          </h2>
          <p className="text-slate-600 mb-8">
            After learning about rental insurance, get instant quotes from our top insurers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Rental Insurance Blog NZ',
            description: 'Expert guides and articles about rental insurance in New Zealand',
            url: 'https://rentalinsurance.co.nz/blog/',
          }),
        }}
      />
    </>
  )
}
