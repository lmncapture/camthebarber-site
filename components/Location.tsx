/**
 * Location Section — premium two-column layout with real shop info and hours.
 */

import { siteConfig } from '@/data/site-config';
import { locationContent } from '@/data/content';

export default function Location() {
  const { shopName, address, cityStateZip, nearbyLandmark, parkingInfo, hours } = locationContent;

  return (
    <section
      id="location"
      aria-label="Location and hours"
      className="px-6 py-16 sm:px-10 sm:py-22 md:py-30"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-2xl tracking-tight text-charcoal sm:text-3xl md:text-4xl mb-10 sm:mb-14">
          Find Cam in West Seattle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Location card */}
          <div className="rounded-xl bg-warm-sand p-6 sm:p-8 border border-charcoal/5">
            <h3 className="font-sans text-lg font-semibold text-charcoal mb-4">
              {shopName}
            </h3>

            <address className="not-italic space-y-1 mb-6">
              <p className="font-sans text-base text-charcoal">{address}</p>
              <p className="font-sans text-base text-charcoal">{cityStateZip}</p>
              <p className="font-sans text-sm text-warm-gray mt-2">{nearbyLandmark}</p>
            </address>

            <div className="space-y-2 mb-6">
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                className="block font-sans text-sm text-accent hover:text-accent-light transition-hover"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block font-sans text-sm text-accent hover:text-accent-light transition-hover"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-cream transition-hover hover:bg-accent min-h-[40px]"
              >
                Get Directions
              </a>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-5 py-2.5 text-sm font-medium text-charcoal transition-hover hover:border-accent min-h-[40px]"
              >
                Book Appointment
              </a>
            </div>

            <p className="mt-5 font-sans text-xs text-warm-gray">{parkingInfo}</p>
          </div>

          {/* Hours card */}
          <div className="rounded-xl bg-charcoal p-6 sm:p-8">
            <h3 className="font-sans text-lg font-semibold text-cream mb-6">
              Hours
            </h3>

            <dl className="space-y-3">
              {hours.map((entry) => (
                <div key={entry.day} className="flex justify-between items-center">
                  <dt className="font-sans text-sm text-cream/70">{entry.day}</dt>
                  <dd className={`font-sans text-sm font-medium ${
                    entry.time === 'Closed' ? 'text-cream/40' : 'text-cream'
                  }`}>
                    {entry.time}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 pt-5 border-t border-cream/10">
              <p className="font-sans text-xs text-cream/50">
                Appointment-based scheduling. Book online for guaranteed availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
