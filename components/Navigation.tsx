'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/**
 * Navigation — visible immediately on load.
 * Minimal, elegant, with a "Book" CTA when booking URL is available.
 */
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
];

interface NavigationProps {
  bookingUrl?: string;
}

export default function Navigation({ bookingUrl }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showBooking = bookingUrl && bookingUrl.length > 0 && !bookingUrl.startsWith('[');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-base
          ${isScrolled
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-content px-6 sm:px-10 py-4 flex items-center justify-between"
        >
          {/* Brand mark / Logo */}
          <a
            href="#hero"
            className="transition-hover"
          >
            <Image
              src="/images/logo.png"
              alt="CamTheBarber logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-sans text-sm tracking-wide transition-hover focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 rounded-sm ${
                  isScrolled
                    ? 'text-charcoal/70 hover:text-charcoal focus:ring-offset-cream'
                    : 'text-cream/70 hover:text-cream focus:ring-offset-charcoal'
                }`}
              >
                {item.label}
              </a>
            ))}
            {showBooking && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-light px-5 py-2 text-sm font-semibold text-charcoal transition-hover hover:bg-muted-gold min-h-[36px]"
              >
                Book
              </a>
            )}
          </div>

          {/* Mobile: Book button + hamburger */}
          <div className="flex items-center gap-3 sm:hidden">
            {showBooking && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-light px-4 py-2 text-xs font-semibold text-charcoal transition-hover hover:bg-muted-gold min-h-[36px]"
              >
                Book
              </a>
            )}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className={`w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-accent-light ${
                isScrolled ? 'text-charcoal' : 'text-cream'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-cream flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-accent-light"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <nav aria-label="Main navigation">
            <ul className="flex flex-col items-center gap-8" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="font-sans text-xl tracking-wide text-charcoal transition-hover hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent-light rounded-sm px-2 py-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {showBooking && (
                <li>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-3 text-base font-medium text-cream transition-hover hover:bg-accent min-h-[44px]"
                  >
                    Book with Cam
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
