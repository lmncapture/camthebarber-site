import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { siteConfig } from '@/data/site-config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const canonicalUrl = siteConfig.canonicalUrl.replace(/^\[|\]$/g, '');
const metaBase = (() => {
  try {
    return new URL(canonicalUrl);
  } catch {
    return new URL('https://camthebarber.com');
  }
})();

export const metadata: Metadata = {
  metadataBase: metaBase,
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'CamTheBarber',
    'barber West Seattle',
    'premium barber Seattle',
    'men\'s haircut West Seattle',
    'beard trim West Seattle',
    'barber near Alaska Junction',
    'Just Another Barbershop',
    'best barber Seattle',
    'textured hair barber Seattle',
    'barber for curly hair Seattle',
    'barber for all hair types Seattle',
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    siteName: 'CamTheBarber',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'CamTheBarber — Premium Barber in West Seattle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Local Business structured data for SEO and AI search
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: 'CamTheBarber',
    description: siteConfig.description,
    url: canonicalUrl,
    image: siteConfig.ogImage,
    telephone: '(206) 867-3438',
    email: 'justanotherbarbershop.alki@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1617 Harbor Ave SW, STE C',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      postalCode: '98126',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.5725,
      longitude: -122.3760,
    },
    areaServed: {
      '@type': 'City',
      name: 'Seattle',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '11:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '11:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '11:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '17:00' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '6',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'DC L.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Cam is an incredible barber and a genuinely great guy. You can tell he\'s a perfectionist in the best way possible.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Dalton B.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'I\'ve been coming to Cam for 3 years now and cannot say loud enough that he\'s the best barber I\'ve ever been to in Seattle.',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Grooming Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Haircut', description: 'Consultation and full service haircut with hot lather neck shave, product application and styling' }, price: '90', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Haircut and Beard Trim', description: 'Full haircut with beard trim, neck shave, straight razor line up, product application and styling' }, price: '110', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beard Trim', description: 'Detail-oriented beard trim with straight razor line up and foil shaver neck clean up' }, price: '50', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Buzzcut', description: 'Buzzcut with taper included' }, price: '50', priceCurrency: 'USD' },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is CamTheBarber located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CamTheBarber is located at Just Another Barbershop in West Seattle, Seattle, WA — near Alaska Junction, close to the waterfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does CamTheBarber offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cam offers haircuts ($90, 1 hr — includes consultation, hot lather neck shave, product application and styling), haircut and beard trim ($110, 1 hr — full haircut plus beard trim with straight razor line up), beard trim ($50, 30 min — straight razor line up and foil shaver neck clean up), and buzzcuts ($50, 30 min — with taper included).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book an appointment with Cam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book directly through the booking link on this website. Cam is currently accepting new clients in West Seattle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is CamTheBarber accepting new clients in West Seattle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Cam recently moved to West Seattle and is actively accepting new clients at Just Another Barbershop near Alaska Junction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does CamTheBarber cut all hair types?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Cam specializes in cutting across all hair textures and styles — straight, wavy, curly, and coily. Every consultation starts with understanding your specific hair. Clients trust him because he listens first and adapts his technique to the individual.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes CamTheBarber different from other barbers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cam is known for building long-term relationships with his clients and working confidently across all hair textures. Many have followed him across multiple shops over 3+ years. He combines precision grooming with genuine conversation and consistency — clients describe him as a perfectionist who genuinely cares about the experience.',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
