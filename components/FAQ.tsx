/**
 * FAQ Section — concise, premium, AIO-optimized.
 * Provides clear answers for AI search tools and featured snippets.
 * Content is crawlable text, not hidden behind interactions.
 */

const faqs = [
  {
    question: 'Where is CamTheBarber located?',
    answer:
      'Cam is at Just Another Barbershop at 1617 Harbor Ave SW, STE C, Seattle, WA 98126 — in West Seattle near Alaska Junction, close to the Alki waterfront. Street parking is available along Harbor Ave.',
  },
  {
    question: 'What services does Cam offer?',
    answer:
      'Haircuts ($90, 1 hr — includes consultation, hot lather neck shave, product application and styling), haircut and beard trim ($110, 1 hr — full service with straight razor line up), beard trim ($50, 30 min — straight razor line up and foil shaver clean up), and buzzcuts ($50, 30 min — with taper included).',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Book directly through the booking buttons on this site — they link to Cam\'s Square scheduling page. Select your service, pick a time, and you\'re confirmed.',
  },
  {
    question: 'Is Cam accepting new clients?',
    answer:
      'Yes. Cam is actively welcoming new clients at Just Another Barbershop in West Seattle. Many of his existing clients followed him from Capitol Hill — and he\'s building new relationships in the neighborhood.',
  },
  {
    question: 'Does Cam cut all hair types?',
    answer:
      'Yes. Cam specializes in cutting across all hair textures and styles — straight, wavy, curly, and coily. Every consultation starts with understanding your specific hair and what works for you. Clients trust him because he listens first and adapts his technique to the individual.',
  },
  {
    question: 'What makes Cam different?',
    answer:
      'Clients have followed Cam across multiple shops for 3+ years. He works confidently across all hair textures — straight, wavy, curly, coily — adapting his technique to each individual. He combines precision grooming with genuine conversation and consistency. As one client put it: "I finally found a barber that actually understands my hair."',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="px-6 py-16 sm:px-10 sm:py-22 md:py-24 bg-warm-sand"
    >
      <div className="mx-auto max-w-narrow">
        <h2 className="font-serif text-2xl tracking-tight text-charcoal sm:text-3xl md:text-4xl mb-10 sm:mb-12">
          Common Questions
        </h2>

        <dl className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-charcoal/10 pb-8 last:border-b-0">
              <dt className="font-sans text-base font-semibold text-charcoal sm:text-lg">
                {faq.question}
              </dt>
              <dd className="mt-3 font-sans text-sm leading-relaxed text-warm-gray sm:text-base sm:leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
