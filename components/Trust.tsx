/**
 * Trust Section — featured review layout with premium card styling.
 * One large featured review + supporting review cards.
 */

import { siteConfig } from '@/data/site-config';

interface ReviewHighlight {
  quote: string;
  attribution: string;
}

interface TrustProps {
  narrative: string;
  reviewHighlights: ReviewHighlight[];
}

export default function Trust({ narrative, reviewHighlights }: TrustProps) {
  const showReviews = reviewHighlights.length >= 3;
  const featured = reviewHighlights[0]; // DC L.
  const supporting = reviewHighlights.slice(1, 4); // Tate, Dalton B., Xander C.
  const showBooking = siteConfig.bookingUrl.length > 0 && !siteConfig.bookingUrl.startsWith('[');

  return (
    <section
      id="trust"
      aria-label="Client trust and reputation"
      className="bg-warm-sand px-6 py-16 sm:px-10 sm:py-22 md:py-30"
    >
      <div className="mx-auto max-w-content">
        {/* Narrative intro */}
        <div className="max-w-narrow">
          <h2 className="font-serif text-2xl tracking-tight text-charcoal sm:text-3xl md:text-4xl mb-4">
            Built on Trust
          </h2>
          <p className="font-sans text-base leading-relaxed text-warm-gray sm:text-lg sm:leading-relaxed">
            {narrative}
          </p>
        </div>

        {/* Featured review layout */}
        {showReviews && (
          <div className="mt-12 sm:mt-16">
            {/* Large featured review */}
            {featured && (
              <blockquote className="rounded-xl bg-charcoal p-8 sm:p-10 md:p-12 mb-6">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-accent-light text-sm">★</span>
                  ))}
                </div>
                <p className="font-serif text-xl italic leading-relaxed text-cream/90 sm:text-2xl sm:leading-relaxed md:text-2xl">
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-light/20 flex items-center justify-center">
                    <span className="text-accent-light text-xs font-semibold">{featured.attribution.charAt(0)}</span>
                  </div>
                  <cite className="font-sans text-sm font-medium not-italic text-accent-light">
                    {featured.attribution}
                  </cite>
                  <span className="font-sans text-xs text-cream/40">· Google Review</span>
                </footer>
              </blockquote>
            )}

            {/* Supporting review cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {supporting.map((review, index) => (
                <blockquote
                  key={index}
                  className="rounded-lg bg-cream border border-charcoal/8 p-6 sm:p-7"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-muted-gold text-xs">★</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-charcoal/85 sm:text-base sm:leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="mt-4">
                    <cite className="font-sans text-sm font-medium not-italic text-accent">
                      {review.attribution}
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}

        {/* CTA after trust section */}
        {showBooking && (
          <div className="mt-12 sm:mt-14 text-center">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-hover hover:bg-accent min-h-[48px] shadow-md"
            >
              Book with Cam
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
