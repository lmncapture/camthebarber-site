/**
 * Site-wide configuration for external URLs and metadata.
 * Update values here — all links across the site update automatically.
 */
export const siteConfig = {
  /** Square booking URL — used in all "Book" buttons site-wide */
  bookingUrl: 'https://book.squareup.com/appointments/4b3d9b03-b093-4db6-a1c3-a2d50d610ebd/location/BGJ4Q5M36NVG2/services?buttonTextColor=ffffff&color=121242&locale=en&referrer=so',

  /** Instagram profile URL */
  instagramUrl: 'https://www.instagram.com/cam_thabarber/',

  /** Instagram handle for display */
  instagramHandle: '@cam_thabarber',

  /** Canonical URL for SEO */
  canonicalUrl: 'https://camthebarber.com',

  /** Open Graph image path relative to public/ */
  ogImage: '/images/og-image.jpg',

  /** Page title (keep under 60 chars) */
  title: 'CamTheBarber | Premium Barber in West Seattle',

  /** Meta description (120–160 chars) */
  description:
    'CamTheBarber offers premium haircuts, beard trims, and relationship-driven grooming in West Seattle at Just Another Barbershop.',

  /** Google Maps directions link */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1617+Harbor+Ave+SW+STE+C+Seattle+WA+98126',

  /** Shop phone */
  phone: '(206) 867-3438',

  /** Shop email */
  email: 'justanotherbarbershop.alki@gmail.com',
} as const;
