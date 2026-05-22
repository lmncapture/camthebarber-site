/**
 * Hero Section — premium, warm, confident.
 * Uses layered backgrounds and accent treatments for visual energy.
 * No stock photos — visually complete with color and typography alone.
 */

interface HeroProps {
  headline: string;
  subheadline: string;
  bookingUrl: string;
  galleryAnchor: string;
}

export default function Hero({
  headline,
  subheadline,
  bookingUrl,
  galleryAnchor,
}: HeroProps) {
  const showBooking = bookingUrl.length > 0 && !bookingUrl.startsWith('[');

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative overflow-hidden bg-dark-gradient pt-24 pb-20 sm:pt-32 sm:pb-28 md:pt-36 md:pb-32"
    >
      {/* Subtle decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-light via-muted-gold to-accent-light opacity-60" />

      {/* Background texture layer */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #B8956A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-12 md:gap-20">
          {/* Text content */}
          <div className="flex flex-col gap-6 sm:flex-1 sm:gap-7">
            {/* Accent label */}
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent-light">
              Premium Grooming · West Seattle
            </span>

            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl md:leading-[1.08]">
              {headline}
            </h2>

            <p className="font-sans text-base leading-relaxed text-cream/70 sm:text-lg sm:leading-relaxed max-w-[540px]">
              {subheadline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {showBooking && (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent-light px-7 py-3.5 text-sm font-semibold text-charcoal transition-hover hover:bg-muted-gold min-h-[48px] min-w-[48px] shadow-lg shadow-accent-light/20"
                >
                  Book with Cam
                </a>
              )}

              <a
                href={galleryAnchor}
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition-hover hover:border-cream/60 hover:text-cream min-h-[48px] min-w-[48px]"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Media — premium stock photography until real photos */}
          <div className="mt-12 sm:mt-0 sm:flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              {/* Layered background shapes for visual depth */}
              <div className="absolute inset-0 rounded-2xl bg-accent/20 rotate-2 scale-[0.97]" />
              <div className="absolute inset-0 rounded-2xl bg-warm-sand/10 -rotate-1 scale-[0.99]" />
              <div className="relative h-full w-full rounded-2xl border border-cream/10 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=1000&fit=crop&q=80"
                  alt="Premium barber grooming session — warm editorial atmosphere"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
