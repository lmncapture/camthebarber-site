/**
 * Services Section — real pricing with individual booking CTAs.
 * Premium, editorial, not transactional.
 */

import { siteConfig } from '@/data/site-config';

interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  bookingLabel: string;
}

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section
      id="services"
      aria-label="Services and pricing"
      className="bg-warm-sand px-6 py-16 sm:px-10 sm:py-22 md:py-24"
    >
      <div className="mx-auto max-w-content">
        <div className="max-w-narrow mb-10 sm:mb-14">
          <h2 className="font-serif text-2xl tracking-tight text-charcoal sm:text-3xl md:text-4xl">
            Services
          </h2>
          <p className="mt-3 font-sans text-sm text-warm-gray sm:text-base">
            Premium grooming by appointment. Every service includes Cam&apos;s full attention and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-xl bg-cream p-6 sm:p-8 border border-charcoal/5 hover:border-accent-light/30 transition-hover flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-sans text-base font-semibold text-charcoal sm:text-lg">
                  {service.name}
                </h3>
                <div className="text-right shrink-0">
                  <span className="font-sans text-lg font-semibold text-charcoal">
                    {service.price}
                  </span>
                  <span className="block font-sans text-xs text-warm-gray">
                    {service.duration}
                  </span>
                </div>
              </div>

              <p className="font-sans text-sm leading-relaxed text-warm-gray sm:text-base flex-1">
                {service.description}
              </p>

              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-medium text-charcoal transition-hover hover:bg-charcoal hover:text-cream min-h-[40px] self-start"
              >
                {service.bookingLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
