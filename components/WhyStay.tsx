/**
 * Why Clients Stay — dark section for visual rhythm and contrast.
 * Differentiators with accent-colored labels.
 */

interface WhyStayProps {
  heading: string;
  differentiators: { label: string; description: string }[];
}

export default function WhyStay({ heading, differentiators }: WhyStayProps) {
  return (
    <section
      id="why"
      aria-label="Why Clients Stay"
      className="bg-charcoal px-6 py-16 sm:px-10 sm:py-22 md:py-30"
    >
      <div className="mx-auto max-w-narrow">
        <h2 className="font-serif text-2xl leading-tight tracking-tight text-cream sm:text-3xl md:text-4xl mb-10 sm:mb-14">
          {heading}
        </h2>

        <div className="flex flex-col">
          {differentiators.map((item, index) => (
            <div
              key={item.label}
              className={`py-6 sm:py-8${
                index < differentiators.length - 1
                  ? ' border-b border-cream/10'
                  : ''
              }`}
            >
              <h3 className="font-sans text-base font-medium text-accent-light sm:text-lg">
                {item.label}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-cream/70 sm:text-base sm:leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
