/**
 * Reviews Section — real Google reviews with warm card styling.
 * All testimonials visible on 768px+ viewports.
 */

interface ReviewsProps {
  testimonials: { name: string; quote: string; rating?: number; featured?: boolean }[];
}

export default function Reviews({ testimonials }: ReviewsProps) {
  if (testimonials.length < 3) {
    return null;
  }

  return (
    <section
      id="reviews"
      aria-label="Client reviews"
      className="bg-warm-gradient px-6 py-16 sm:px-10 sm:py-22 md:py-30"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-2xl leading-tight tracking-tight text-charcoal sm:text-3xl md:text-4xl mb-3">
          What Clients Say
        </h2>
        <p className="font-sans text-sm text-warm-gray mb-10 sm:mb-14">
          Real reviews from real clients
        </p>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className={`rounded-lg p-6 sm:p-7 border transition-hover hover:shadow-md ${
                testimonial.featured
                  ? 'bg-charcoal text-cream border-charcoal'
                  : 'bg-soft-white text-charcoal border-charcoal/8'
              }`}
            >
              {/* Star rating */}
              {testimonial.rating && (
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className={`text-sm ${testimonial.featured ? 'text-accent-light' : 'text-muted-gold'}`}>
                      ★
                    </span>
                  ))}
                </div>
              )}

              <p className={`font-sans text-sm leading-relaxed sm:text-base sm:leading-relaxed ${
                testimonial.featured ? 'text-cream/90' : 'text-charcoal/85'
              }`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="mt-5 pt-4 border-t border-current/10">
                <cite className={`font-sans text-sm font-medium not-italic ${
                  testimonial.featured ? 'text-accent-light' : 'text-accent'
                }`}>
                  {testimonial.name}
                </cite>
                <span className={`block font-sans text-xs mt-0.5 ${
                  testimonial.featured ? 'text-cream/50' : 'text-warm-gray/70'
                }`}>
                  Google Review
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
