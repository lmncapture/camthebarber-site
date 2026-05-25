# Implementation Plan: CamTheBarber Website

## Overview

A premium one-page static website built with Next.js 14+ (App Router), Tailwind CSS, and TypeScript. The site is statically exported — no CMS, no database, no auth. All content lives in typed data files. The aesthetic direction is "Aesop meets Seattle barber culture": restrained, editorial, warm, cinematic, and trustworthy.

**Implementation Guardrails:**
- Preserve "Aesop meets Seattle barber culture" aesthetic direction throughout
- Maintain strong whitespace and editorial pacing in every section
- Use subtle CSS transitions only (no animation libraries)
- Keep components simple — no over-abstraction
- Photography gets prominent visual space
- Navigation stays minimal (max 5 items, no sticky on mobile)
- All content from data files, never hardcoded in components
- Mobile-first responsive approach
- Warm neutral color palette: cream, charcoal, muted gold, soft white, warm gray
- Inter for body, Playfair Display for headings
- No CMS, no database, no auth, no unnecessary dependencies

## Tasks

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Initialize Next.js project with TypeScript and Tailwind CSS
    - Create a new Next.js 14+ project with App Router, TypeScript strict mode, and Tailwind CSS
    - Configure `next.config.js` with `output: 'export'` for static site generation
    - Set up `tsconfig.json` with strict mode and path aliases
    - Install only required dependencies: next, react, react-dom, tailwindcss, postcss, autoprefixer
    - Create `public/images/gallery/` directory with placeholder images
    - _Requirements: 11.1, 11.6, 11.7, 14.7_

  - [x] 1.2 Configure Tailwind theme with brand design tokens
    - Create `tailwind.config.ts` with custom color palette: cream (#FAF7F2), charcoal (#2C2C2C), muted gold (#B8956A), soft white (#FEFDFB), warm gray (#6B6B6B)
    - Configure font families: Inter (body/sans), Playfair Display (headings/serif)
    - Set up spacing scale, max-width containers, and responsive breakpoints (480px, 768px, 1024px, 1280px)
    - Limit palette to 5 core warm neutral colors — no neon, no saturated primaries
    - _Requirements: 15.1, 15.3, 10.1_

- [x] 2. Data layer — typed content files
  - [x] 2.1 Create `data/site-config.ts` with site metadata and external URLs
    - Define `siteConfig` object with bookingUrl, instagramUrl, canonicalUrl, ogImage, title, description
    - Use bracket notation placeholders for URLs that need replacement
    - Include inline comments describing each field's purpose and expected format
    - Export as `const` assertion for type safety
    - _Requirements: 14.4, 14.5, 14.6, 12.1, 12.2, 12.7_

  - [x] 2.2 Create `data/services.ts` with service listings and pricing
    - Define `Service` interface with name, description, and price fields
    - Export array of 3 services: Premium Haircut ($55), Haircut + Beard ($75), Beard Trim / Lineup ($35)
    - Use bracket notation for description placeholders
    - Include inline comments for field purpose and format
    - _Requirements: 4.1, 4.2, 14.2, 14.5, 14.6_

  - [x] 2.3 Create `data/testimonials.ts` with client testimonials
    - Define `Testimonial` interface with name, quote, and optional rating fields
    - Export array of 5 testimonials with bracket-notation placeholders
    - Ensure at least one testimonial references following Cam from Capitol Hill to West Seattle
    - Quotes must be 20–200 characters, names as first name + last initial
    - Include inline comments for field constraints
    - _Requirements: 2.2, 7.1, 7.2, 7.3, 14.1, 14.5, 14.6_

  - [x] 2.4 Create `data/gallery.ts` with gallery image references
    - Define `GalleryImage` interface with src, alt, and category fields
    - Export array of 6 placeholder images with categories: fades, beard work, classic cuts, texture, detail work
    - Alt text placeholders between 1–150 characters describing subject and purpose
    - Include inline comments for field constraints and image placement instructions
    - _Requirements: 6.1, 6.2, 14.3, 14.5, 14.6_

  - [x] 2.5 Create `data/content.ts` with section copy content
    - Export `heroContent` (headline, subheadline), `trustContent` (narrative), `aboutContent` (heading, body), `whyContent` (heading, 5 differentiators), `locationContent` (shopName, area, nearbyLandmark, parkingInfo), `bookingContent` (message)
    - About body must be first-person, 50–200 words, reference at least 2 themes (genuine conversation, consistency, attention to craft, making clients feel known)
    - Differentiator descriptions max 120 characters each
    - Include inline comments for content guidelines and constraints
    - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 3.3, 3.4, 5.1, 5.2, 8.1, 8.3, 8.4, 9.1, 14.5, 14.6, 14.8_

- [x] 3. Global layout and styling
  - [x] 3.1 Create `app/globals.css` with Tailwind directives and custom properties
    - Add Tailwind `@tailwind base`, `@tailwind components`, `@tailwind utilities` directives
    - Define CSS custom properties for brand colors and spacing
    - Set `scroll-behavior: smooth` on html element
    - Set base body text to 16px minimum with line-height 1.5+
    - Add subtle transition utilities for hover states (150ms–300ms)
    - Ensure no animation libraries or complex keyframes — CSS transitions only
    - _Requirements: 10.3, 10.5, 16.1, 16.4_

  - [x] 3.2 Create `app/layout.tsx` with fonts, metadata, and semantic structure
    - Load Inter and Playfair Display via `next/font/google`
    - Set metadata using Next.js Metadata API: title, description, Open Graph (og:title, og:description, og:type, og:image), canonical URL
    - All metadata values sourced from `data/site-config.ts`
    - Wrap children in semantic `<html>`, `<body>` with ARIA landmarks (banner, main, contentinfo)
    - Apply font CSS variables to body for Tailwind consumption
    - _Requirements: 12.1, 12.2, 12.3, 12.7, 13.4, 15.3_

- [x] 4. Checkpoint — Verify project builds
  - Ensure `next build` completes without errors, TypeScript strict checking passes, and static export generates valid output. Ask the user if questions arise.

- [x] 5. Section components — Navigation and Hero
  - [x] 5.1 Create `components/Navigation.tsx`
    - Render max 5 anchor links for section navigation
    - Desktop: show on scroll with subtle fade-in; Mobile: hamburger menu
    - No sticky behavior on mobile — keep navigation understated and minimal
    - Use CSS smooth-scroll for anchor navigation (scroll-behavior: smooth)
    - Keyboard accessible: Tab traversal, Enter/Space activation, visible focus indicators
    - All nav items sourced from a local array, not hardcoded labels
    - _Requirements: 10.5, 10.7, 10.8, 10.9, 10.10, 13.3, 15.7_

  - [x] 5.2 Create `components/Hero.tsx`
    - Display headline and subheadline from `data/content.ts`
    - Primary CTA "Book with Cam" linking to bookingUrl from site-config (opens new tab)
    - Secondary CTA "View Work" scrolling to Gallery section anchor
    - Media area with min-height 200px, solid background color placeholder
    - Must mention "West Seattle" in visible text
    - All content above fold on 375px mobile viewport
    - Photography gets prominent visual space — large media area with cinematic framing
    - CTA buttons: min 44×44px touch targets, no pulsing, no all-caps >14px, no saturated fills
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 10.4, 15.4, 17.2_

- [x] 6. Section components — Trust and About
  - [x] 6.1 Create `components/Trust.tsx`
    - Display narrative from `data/content.ts` referencing Capitol Hill to West Seattle loyalty
    - Display 3–6 review highlights from `data/testimonials.ts` with quote (20+ chars) and attribution
    - Visually distinct container: different background color, border, or typography change
    - Conditionally hide reviews portion if fewer than 3 testimonials available
    - Maintain strong whitespace — breathable editorial pacing
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 15.4, 15.9_

  - [x] 6.2 Create `components/About.tsx`
    - Display heading and body from `data/content.ts`
    - Body rendered as first-person prose, no CTAs, no prices, no discount language
    - Avoid forbidden language patterns: "fresh cuts," "fades and lineups," "look sharp," "man cave," "bro," "king," etc.
    - Ensure at least one statement references client relationship over technical skill
    - Warm editorial typography: Playfair Display heading, Inter body
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 15.6_

- [x] 7. Section components — Services and WhyStay
  - [x] 7.1 Create `components/Services.tsx`
    - Render service cards from `data/services.ts` with name, description, and "starting at" price
    - Max 3 services visible without scrolling
    - No strikethrough pricing, no sale badges, no percentage-off labels
    - Each service as distinct visual block with name/price separated by whitespace or dividers
    - Works at 320px+ viewport widths
    - Clean, restrained card design — no over-styling
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 15.4, 15.7_

  - [x] 7.2 Create `components/WhyStay.tsx`
    - Display heading and 5 differentiators from `data/content.ts`
    - Each differentiator: short label + supporting sentence (max 120 chars)
    - Single-column stacked layout at 320px–480px, no horizontal scrolling
    - Each differentiator visually separated (spacing, dividers, or card boundaries)
    - Readable independently without reading others
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 15.4_

- [x] 8. Section components — Gallery and Reviews
  - [x] 8.1 Create `components/Gallery.tsx`
    - Render responsive image grid from `data/gallery.ts` using `next/image`
    - Grid: 1 column (320–480px), 2 columns (481–1024px), 3 columns (1025px+)
    - Uniform aspect ratio across all images
    - Visible caption per image with work category
    - Lazy loading for all gallery images
    - Gentle fade-in on viewport entry (300–600ms CSS transition, no animation library)
    - Alt text from data file (1–150 chars)
    - Photography gets prominent visual space — generous sizing, cinematic feel
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 11.5, 13.2, 16.5, 17.2_

  - [x] 8.2 Create `components/Reviews.tsx`
    - Render testimonial cards from `data/testimonials.ts`
    - Minimum 3 testimonials displayed
    - Each with client name (first + last initial) and quote (20–200 chars)
    - All testimonials visible without interaction on 768px+ viewports
    - At least one testimonial references following Cam from Capitol Hill
    - Clean card design with warm neutral styling
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 15.4_

- [x] 9. Section components — Location and BookingCTA
  - [x] 9.1 Create `components/Location.tsx`
    - Display shop name "Just Another Barbershop" and area "West Seattle, Seattle, WA"
    - Map placeholder: min 200px height, visible border or background color
    - Display "near Alaska Junction" text
    - Parking info placeholder with bracket notation for future replacement
    - Content from `data/content.ts` locationContent
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 9.2 Create `components/BookingCTA.tsx`
    - Display message from `data/content.ts` bookingContent
    - Primary CTA "Book with Cam": filled style, links to bookingUrl, opens new tab
    - Secondary CTA "Follow on Instagram": outlined style, links to instagramUrl, opens new tab
    - Hide button if corresponding URL is empty (conditional rendering)
    - Both buttons: `target="_blank"` and `rel="noopener noreferrer"`
    - Primary visually more prominent than secondary (filled vs outlined)
    - Min 44×44px touch targets
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 10.4_

- [x] 10. Page composition
  - [x] 10.1 Create `app/page.tsx` assembling all sections
    - Import all 10 section components and all data files
    - Compose sections in order: Navigation → Hero → Trust → About → Services → WhyStay → Gallery → Reviews → Location → BookingCTA
    - Wrap in `<main>` with proper ARIA landmark
    - Each section wrapped in `<section>` with `id` attribute for anchor navigation
    - Pass data from data files as props to each component
    - Booking section appears last (after all other content sections)
    - Single-column stacked layout on mobile (320–480px)
    - _Requirements: 9.6, 10.6, 11.2, 13.4, 14.7, 14.8_

- [x] 11. Checkpoint — Full page renders correctly
  - Ensure `next build` succeeds, all sections render in correct order, anchor links work, and no TypeScript errors. Ask the user if questions arise.

- [x] 12. SEO and metadata
  - [x] 12.1 Finalize SEO metadata and heading hierarchy
    - Verify page title: "CamTheBarber | Premium Barber in West Seattle"
    - Verify meta description matches requirement
    - Verify Open Graph tags: og:title, og:description, og:type="website", og:image
    - Verify canonical URL meta tag
    - Ensure exactly one `<h1>` containing "CamTheBarber"
    - Verify heading hierarchy: h1 → h2 → h3, no skipped levels
    - Distribute local SEO keywords naturally (barber in West Seattle, premium barber, etc.) without keyword stuffing
    - Prioritize premium human-quality copywriting over SEO optimization
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 13.5_

- [ ] 13. Responsive design verification
  - [ ]* 13.1 Write unit tests verifying responsive layout behavior
    - Test gallery grid columns: 1 (mobile), 2 (tablet), 3 (desktop)
    - Test single-column stacking on mobile viewports
    - Test no horizontal overflow at 320px, 480px, 768px, 1024px, 1280px
    - Test body text minimum 16px on mobile
    - Test CTA touch targets minimum 44×44px
    - Test navigation max 5 items
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.6, 10.7_

- [ ] 14. Accessibility verification
  - [ ]* 14.1 Write accessibility tests with jest-axe
    - Test each section passes automated axe accessibility checks
    - Test heading hierarchy is sequential (no skipped levels)
    - Test all images have appropriate alt text (1–150 chars)
    - Test interactive elements have sufficient touch targets
    - Test color contrast meets WCAG 2.1 AA (4.5:1 normal text, 3:1 large text)
    - Test ARIA landmarks present: banner, main, contentinfo
    - Test keyboard navigation: Tab traversal, Enter/Space activation, visible focus indicators
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [x] 15. Performance optimization
  - [x] 15.1 Optimize images and loading strategy
    - Hero image: `priority` prop for immediate load (no layout shift)
    - Gallery images: `loading="lazy"` for below-fold deferral
    - All images via `next/image` pipeline for responsive delivery and compression
    - Solid background color containers to prevent CLS
    - Verify no render-blocking resources delay initial paint
    - Total page weight target: under 1MB on initial load
    - _Requirements: 11.3, 11.4, 11.5, 11.8, 11.9, 11.10, 17.1_

  - [ ]* 15.2 Write integration tests for full page rendering
    - Test all sections render in correct order
    - Test anchor navigation links point to correct section IDs
    - Test external links open in new tabs (target="_blank", rel="noopener noreferrer")
    - Test metadata renders correctly (title, description, OG tags, canonical)
    - Test conditional rendering: buttons hidden when URLs empty, reviews hidden when <3 testimonials
    - _Requirements: 9.5, 2.4, 12.1, 12.2, 12.3_

- [x] 16. Final checkpoint — Production readiness
  - Ensure all tests pass, `next build` produces clean static export, total bundle under 1MB, no TypeScript errors, and no accessibility violations. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- No property-based tests — this is a static UI site with no complex business logic
- Unit tests and integration tests validate rendering, accessibility, and responsive behavior
- All content must come from data files — never hardcode text in components
- Maintain the "Aesop meets Seattle barber culture" aesthetic in every visual decision
- CSS transitions only (150–600ms range) — no animation libraries whatsoever
- Photography is a primary brand asset — give it generous visual space

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["2.1", "2.2", "2.3", "2.4", "2.5"] },
    { "id": 3, "tasks": ["3.1", "3.2"] },
    { "id": 4, "tasks": ["5.1", "5.2"] },
    { "id": 5, "tasks": ["6.1", "6.2", "7.1", "7.2"] },
    { "id": 6, "tasks": ["8.1", "8.2", "9.1", "9.2"] },
    { "id": 7, "tasks": ["10.1"] },
    { "id": 8, "tasks": ["12.1", "15.1"] },
    { "id": 9, "tasks": ["13.1", "14.1", "15.2"] }
  ]
}
```
