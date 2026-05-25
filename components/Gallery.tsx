/**
 * Gallery Section — responsive image grid with fade-in on scroll.
 * Uses stock photography until real photos are captured.
 */
'use client';

import { useEffect, useRef } from 'react';

interface GalleryProps {
  images: { src: string; alt: string; category: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const items = gridRef.current.querySelectorAll('[data-gallery-item]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [images]);

  return (
    <section id="gallery" aria-label="Work gallery" className="px-6 py-20 sm:py-30 bg-cream">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mb-12 sm:mb-16 text-center">
          The Work
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {images.map((image, index) => (
            <div
              key={index}
              data-gallery-item
              className="opacity-0 translate-y-4 transition-reveal"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-warm-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-sans text-warm-gray capitalize tracking-wide">
                {image.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
