/**
 * Booking CTA — strong closing section with dark gradient background.
 * Includes Instagram follow as secondary action.
 */

import { siteConfig } from '@/data/site-config';

interface BookingCTAProps {
  message: string;
  bookingUrl: string;
  instagramUrl: string;
}

function isValidUrl(url: string): boolean {
  return url.length > 0 && url.trim().length > 0 && !url.startsWith('[');
}

export default function BookingCTA({
  message,
  bookingUrl,
  instagramUrl,
}: BookingCTAProps) {
  const showBooking = isValidUrl(bookingUrl);
  const showInstagram = isValidUrl(instagramUrl);

  return (
    <section
      id="booking"
      aria-label="Book an appointment"
      className="relative overflow-hidden bg-dark-gradient px-6 py-20 sm:px-10 sm:py-28 md:py-30"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-light/40 to-transparent" />

      <div className="relative mx-auto max-w-narrow text-center">
        <p className="font-serif text-2xl leading-snug tracking-tight text-cream sm:text-3xl md:text-4xl md:leading-snug">
          {message}
        </p>

        {(showBooking || showInstagram) && (
          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
            {showBooking && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-light px-8 py-4 text-sm font-semibold text-charcoal transition-hover hover:bg-muted-gold min-h-[48px] shadow-lg shadow-accent-light/20"
              >
                Book with Cam
              </a>
            )}

            {showInstagram && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-8 py-4 text-sm font-medium text-cream transition-hover hover:border-cream/60 min-h-[48px]"
              >
                Follow {siteConfig.instagramHandle}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
