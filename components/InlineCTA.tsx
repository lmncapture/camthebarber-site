/**
 * Inline CTA — reusable booking prompt between sections.
 * Premium, confident, not aggressive.
 */

import { siteConfig } from '@/data/site-config';

interface InlineCTAProps {
  text?: string;
}

export default function InlineCTA({ text = 'Ready to book?' }: InlineCTAProps) {
  const showBooking = siteConfig.bookingUrl.length > 0 && !siteConfig.bookingUrl.startsWith('[');

  if (!showBooking) return null;

  return (
    <div className="px-6 py-10 sm:px-10 sm:py-12 text-center">
      <p className="font-sans text-sm text-warm-gray mb-4">{text}</p>
      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-accent-light px-7 py-3 text-sm font-semibold text-charcoal transition-hover hover:bg-muted-gold min-h-[44px] shadow-md shadow-accent-light/15"
      >
        Book with Cam
      </a>
    </div>
  );
}
