import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ValueProp } from '@/components/value-prop'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'

export default function Page() {
  // Structured Data for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'WorldFriends',
    description: 'Find international friends, practice languages, and discover cultures on WorldFriends - the #1 global friendship and language exchange app.',
    url: 'https://worldfriends.app',
    applicationCategory: 'SocialNetworking',
    operatingSystem: 'iOS, Android, Web',
    image: 'https://worldfriends.app/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'WorldFriends',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '125000',
      reviewCount: '85000',
    },
    downloadUrl: [
      'https://apps.apple.com/app/worldfriends',
      'https://play.google.com/store/apps/details?id=com.worldfriends',
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WorldFriends',
    url: 'https://worldfriends.app',
    logo: 'https://worldfriends.app/logo.png',
    description: 'International friendship and language learning social app connecting people from 180+ countries.',
    sameAs: [
      'https://twitter.com/worldfriends',
      'https://www.instagram.com/worldfriends',
      'https://www.facebook.com/worldfriends',
      'https://www.linkedin.com/company/worldfriends',
    ],
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: 'https://worldfriends.app/support',
      email: 'hello@worldfriends.app',
    },
    areaServed: {
      '@type': 'World',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://worldfriends.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://worldfriends.app#features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Community',
        item: 'https://worldfriends.app#testimonials',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is WorldFriends free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, WorldFriends is completely free to download and use. You can find friends, practice languages, and exchange cultures without any subscription fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many countries does WorldFriends support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WorldFriends connects users from all countries worldwide, making it the largest international friendship network.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it safe to use WorldFriends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, WorldFriends prioritizes user safety with verification systems, secure messaging, and community guidelines to ensure a safe experience for all users.',
        },
      },
    ],
  }

  return (
    <>
      {/* Structured Data for SEO and AI understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-background font-sans selection:bg-[#818CF8] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <ValueProp />
          <Features />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  )
}
