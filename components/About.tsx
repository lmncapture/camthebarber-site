/**
 * About Section Component
 *
 * Displays Cam's personal narrative — heading and first-person body copy.
 * Content sourced from data/content.ts (aboutContent).
 * Body: first-person prose, no CTAs, no prices, no discount language.
 * Typography: Playfair Display (heading), Inter (body).
 * Aesthetic: warm editorial, breathable whitespace, restrained —
 * "Aesop meets Seattle barber culture."
 *
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 15.6
 */

interface AboutProps {
  /** Section heading identifying this as Cam's about section */
  heading: string;
  /** First-person body copy (50–200 words), no CTAs, no prices, no discounts */
  body: string;
}

export default function About({ heading, body }: AboutProps) {
  return (
    <section
      id="about"
      aria-label="About Cam"
      className="px-6 py-16 sm:px-10 sm:py-22 md:py-30"
    >
      <div className="mx-auto max-w-narrow">
        <h2 className="font-serif text-3xl leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl md:leading-tight">
          {heading}
        </h2>

        <p className="mt-6 font-sans text-base leading-relaxed text-warm-gray sm:mt-8 sm:text-lg sm:leading-relaxed md:text-lg md:leading-loose">
          {body}
        </p>
      </div>
    </section>
  );
}
