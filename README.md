# Rental Insurance NZ - Next.js Website

A complete Next.js 16 website for rental insurance comparison in New Zealand.

## Features

- Free rental insurance quote comparison
- 6 major NZ insurers integrated
- Sector-specific pages (tenants, students, flatmates, families)
- Comprehensive blog with expert guides
- Mobile-responsive design
- SEO optimized with JSON-LD schemas
- Static export for fast deployment
- Quote form with FormSubmit.co integration

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── contact/                 # Contact page
│   ├── coverage/                # Coverage guide
│   ├── compare/                 # Insurer comparison
│   ├── blog/                    # Blog listing & posts
│   ├── about/                   # About page
│   ├── sectors/                 # Sector-specific pages
│   ├── privacy/                 # Privacy policy
│   ├── terms/                   # Terms of service
│   └── thank-you/               # Quote form thank you
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer
│   ├── Logo.tsx                 # Logo component
│   ├── QuoteForm.tsx            # Quote request form
│   ├── AnimatedStats.tsx        # Statistics section
│   ├── HowItWorks.tsx           # Process explanation
│   └── CTABanner.tsx            # Call-to-action banner
├── data/                        # Static data
│   ├── insurers.ts              # Insurer data
│   ├── faqs.ts                  # FAQ content
│   └── blog-posts.ts            # Blog post content
└── lib/                         # Utilities
    ├── gemini.ts                # Google Gemini API
    └── apify.ts                 # Apify API

public/                          # Static files
├── robots.txt                   # SEO robots file
├── sitemap.xml                  # XML sitemap
├── llms.txt                     # LLM access guide
└── CNAME                        # Custom domain
```

## Configuration

### Environment Variables

Create `.env.local`:

```
GOOGLE_GEMINI_API_KEY=your_key_here
APIFY_API_TOKEN=your_token_here
```

### Next.js Configuration

- **Output**: Static export (`output: 'export'`)
- **Trailing Slash**: Enabled (`trailingSlash: true`)
- **Images**: Unoptimized (`images: { unoptimized: true }`)

## Styling

- **CSS Framework**: Tailwind CSS v4
- **Colors**: Emerald (#10B981), Sky Blue (#0EA5E9), Amber (#F59E0B)
- **Typography**: System sans-serif (Inter-like)

## Key Pages

- **Home** (`/`): Overview with animated stats and CTA
- **Contact** (`/contact`): Quote form and contact details
- **Coverage** (`/coverage`): What's covered and pricing tiers
- **Compare** (`/compare`): Side-by-side insurer comparison
- **Blog** (`/blog`): Articles and guides
- **Sectors**:
  - `/sectors/tenants` - For tenants renting homes
  - `/sectors/students` - For students in halls
  - `/sectors/flatmates` - For shared living
  - `/sectors/families` - For family rentals
- **About** (`/about`): Mission and values
- **Legal**: Privacy (`/privacy`), Terms (`/terms`)

## Quote Form Integration

The quote form submits to FormSubmit.co:
- **Endpoint**: `https://formsubmit.co/hello@cover4you.co.nz`
- **CC**: `butlerdarin@gmail.com`
- **Redirect**: `/thank-you/`
- **No CAPTCHA**: Disabled for better UX

## Insurers

1. **AA Insurance** - Highest customer satisfaction
2. **AMI** - Most competitive pricing
3. **State Insurance** - Easy online management
4. **Tower** - Insurer of the Year 2025/2026
5. **Vero** - High-value items specialist
6. **NZI** - Premium service

## Content

- 6 comprehensive blog posts (800+ words each)
- 12+ FAQs covering all aspects
- Detailed insurer profiles with ratings and features
- Sector-specific guides and coverage information

## Deployment

Static export ready for:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting

```bash
npm run build
# Output: ./out/ directory ready for deployment
```

## SEO

- Metadata for all pages
- JSON-LD schemas (Organization, WebSite, Service, BlogPosting, ItemList)
- XML sitemap
- robots.txt
- OpenGraph tags
- Canonical URLs

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Touch-friendly interfaces

## License

Private project - All rights reserved

## Support

Email: hello@cover4you.co.nz
Phone: 09 885 9549
