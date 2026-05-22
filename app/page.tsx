import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import About from '@/components/About';
import Services from '@/components/Services';
import InlineCTA from '@/components/InlineCTA';
import WhyStay from '@/components/WhyStay';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import BookingCTA from '@/components/BookingCTA';
import FAQ from '@/components/FAQ';

import { siteConfig } from '@/data/site-config';
import {
  heroContent,
  trustContent,
  aboutContent,
  whyContent,
  bookingContent,
} from '@/data/content';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { galleryImages } from '@/data/gallery';

export default function Home() {
  return (
    <>
      <Navigation bookingUrl={siteConfig.bookingUrl} />

      <main role="main">
        <h1 className="sr-only">
          CamTheBarber — Premium Barber in West Seattle at Just Another Barbershop
        </h1>

        <Hero
          headline={heroContent.headline}
          subheadline={heroContent.subheadline}
          bookingUrl={siteConfig.bookingUrl}
          galleryAnchor="#gallery"
        />

        <Trust
          narrative={trustContent.narrative}
          reviewHighlights={testimonials.slice(0, 4).map((t) => ({
            quote: t.quote,
            attribution: t.name,
          }))}
        />

        <About heading={aboutContent.heading} body={aboutContent.body} />

        <Services services={services} />

        <InlineCTA text="Ready for a premium cut?" />

        <WhyStay
          heading={whyContent.heading}
          differentiators={[...whyContent.differentiators]}
        />

        <Gallery images={galleryImages} />

        <Reviews testimonials={testimonials} />

        <Location />

        <FAQ />

        <BookingCTA
          message={bookingContent.message}
          bookingUrl={siteConfig.bookingUrl}
          instagramUrl={siteConfig.instagramUrl}
        />
      </main>

      <footer role="contentinfo" className="px-6 py-8 text-center border-t border-charcoal/5">
        <p className="font-sans text-xs text-warm-gray">
          &copy; {new Date().getFullYear()} CamTheBarber at Just Another Barbershop · West Seattle, Seattle, WA
        </p>
      </footer>
    </>
  );
}
