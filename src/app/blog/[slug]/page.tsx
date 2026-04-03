import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { blogPosts } from '@/data/blog-posts'
import { Clock, User, ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${post.title} | Rental Insurance NZ`,
    description: post.excerpt,
    alternates: { canonical: `https://rentalinsurance.co.nz/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-emerald-600 hover:text-emerald-700">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-4xl font-extrabold text-white mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-emerald-100 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
            <span>{new Date(post.date).toLocaleDateString('en-NZ', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</span>
            <span className="px-3 py-1 bg-emerald-500/30 rounded-full">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-12 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-emerald-400 to-sky-400">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-slate max-w-none">
                <div
                  className="article-content space-y-6 text-slate-700"
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                />
              </div>

              {/* Post Navigation */}
              <div className="mt-16 pt-8 border-t border-slate-200 flex gap-4 justify-between">
                {blogPosts.indexOf(post) > 0 && (
                  <Link
                    href={`/blog/${blogPosts[blogPosts.indexOf(post) - 1].slug}`}
                    className="flex-1 p-4 border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-lg transition-all"
                  >
                    <p className="text-xs text-slate-600 mb-2">Previous Article</p>
                    <p className="font-semibold text-slate-900 line-clamp-2">
                      {blogPosts[blogPosts.indexOf(post) - 1].title}
                    </p>
                  </Link>
                )}
                {blogPosts.indexOf(post) < blogPosts.length - 1 && (
                  <Link
                    href={`/blog/${blogPosts[blogPosts.indexOf(post) + 1].slug}`}
                    className="flex-1 p-4 border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-lg transition-all"
                  >
                    <p className="text-xs text-slate-600 mb-2">Next Article</p>
                    <p className="font-semibold text-slate-900 line-clamp-2">
                      {blogPosts[blogPosts.indexOf(post) + 1].title}
                    </p>
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-8">
                {/* Quote Form */}
                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                  <h3 className="font-bold text-slate-900 mb-4">Ready to Get Protected?</h3>
                  <QuoteForm compact={true} />
                </div>

                {/* Related Articles */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {blogPosts
                      .filter((p) => p.category === post.category && p.slug !== post.slug)
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block p-3 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors group"
                        >
                          <p className="text-xs text-slate-600 font-semibold mb-1 group-hover:text-emerald-600">
                            {relatedPost.category}
                          </p>
                          <p className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-emerald-600">
                            {relatedPost.title}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Share */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Share This Article</h3>
                  <div className="flex gap-3">
                    <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <span className="sr-only">Share on Facebook</span>f
                    </button>
                    <button className="p-3 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-colors">
                      <span className="sr-only">Share on Twitter</span>𝕏
                    </button>
                    <button className="p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors">
                      <span className="sr-only">Copy link</span>🔗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema - BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
            },
          }),
        }}
      />

      {/* JSON-LD Schema - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rentalinsurance.co.nz/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rentalinsurance.co.nz/blog/' },
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://rentalinsurance.co.nz/blog/${post.slug}/` },
            ],
          }),
        }}
      />
    </>
  )
}

// CSS for article content
const articleStyles = `
  .article-content h2 {
    @apply text-2xl font-bold text-slate-900 mt-8 mb-4;
  }
  .article-content h3 {
    @apply text-xl font-bold text-slate-900 mt-6 mb-3;
  }
  .article-content p {
    @apply text-slate-700 leading-relaxed mb-4;
  }
  .article-content ul {
    @apply list-disc list-inside space-y-2 mb-4 text-slate-700;
  }
  .article-content li {
    @apply ml-4;
  }
  .article-content strong {
    @apply font-bold text-slate-900;
  }
  .article-content a {
    @apply text-emerald-600 hover:text-emerald-700 underline;
  }
`
