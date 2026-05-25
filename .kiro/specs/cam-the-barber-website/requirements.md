# Requirements Document

## Introduction

CamTheBarber is a premium one-page personal brand website for Cam, a high-end barber now located at Just Another Barbershop in West Seattle. The site serves as a mobile-first landing page that helps new West Seattle clients discover Cam, understand his premium value, trust his reputation, and book an appointment. The site uses static/local content only with no CMS, database, or unnecessary dependencies.

## Glossary

- **Site**: The CamTheBarber one-page personal brand website
- **Hero_Section**: The top-of-page section containing the primary headline, subheadline, CTAs, and placeholder media
- **Trust_Section**: The section displaying client loyalty narrative, review highlights, and testimonials
- **About_Section**: The section presenting Cam's personality, craft, and client relationship philosophy
- **Services_Section**: The section listing available grooming services with pricing
- **Why_Section**: The section explaining reasons clients maintain long-term relationships with Cam
- **Gallery_Section**: The visual grid section showcasing work samples
- **Reviews_Section**: The testimonial section with client quotes
- **Location_Section**: The section displaying shop address, map placeholder, and access information
- **Booking_Section**: The final call-to-action section for appointment booking
- **CTA_Button**: A call-to-action button element that links to an external booking URL
- **Navigation**: The anchor-based navigation system for scrolling between sections
- **Visitor**: A person viewing the Site on any device
- **Core_Web_Vitals**: Google's metrics for page loading performance, interactivity, and visual stability

## Requirements

### Requirement 1: Hero Section Display

**User Story:** As a visitor, I want to see a compelling premium headline and clear calls to action when I land on the page, so that I immediately understand Cam's value and can take action.

#### Acceptance Criteria

1. WHEN the Site loads, THE Hero_Section SHALL display the headline "The barber clients followed across Seattle."
2. WHEN the Site loads, THE Hero_Section SHALL display the subheadline "Premium cuts, beard work, and genuine connection — now available in West Seattle at Just Another Barbershop."
3. THE Hero_Section SHALL display a primary CTA_Button labeled "Book with Cam" that links to a booking URL defined as a static value in the site source code.
4. THE Hero_Section SHALL display a secondary CTA_Button labeled "View Work" that scrolls the viewport to the Gallery_Section.
5. THE Hero_Section SHALL include a media area with a minimum height of 200px reserved for a hero image or video, displaying a solid background color when no media is loaded.
6. THE Hero_Section SHALL display the headline, subheadline, and both CTA_Buttons within the initial viewport on a 375px-wide mobile screen without requiring scrolling.
7. THE Hero_Section SHALL mention "West Seattle" in visible text content.

### Requirement 2: Trust and Reputation Display

**User Story:** As a visitor, I want to see evidence of Cam's loyal clientele and reputation, so that I trust his quality before booking.

#### Acceptance Criteria

1. WHEN a Visitor scrolls to the Trust_Section, THE Trust_Section SHALL display narrative content that explicitly references clients following Cam from Capitol Hill to West Seattle
2. THE Trust_Section SHALL display at least 3 and no more than 6 review highlights sourced from local static data, where each review highlight includes a quote text of at least 20 characters and a client name or attribution
3. THE Trust_Section SHALL present testimonial content with a visually distinct container that is differentiated from adjacent sections by at least one of: a different background color, a visible border, or a change in typography style
4. IF fewer than 3 review highlights are available in the static data source, THEN THE Trust_Section SHALL not render the reviews portion of the section

### Requirement 3: About Cam Section

**User Story:** As a visitor, I want to learn about Cam's personality and approach, so that I feel confident he provides a personal and premium experience.

#### Acceptance Criteria

1. THE About_Section SHALL display a heading that identifies the section as being about Cam, followed by body content between 50 and 200 words that references at least two of the following themes: genuine conversation, consistency of service, attention to craft, and making clients feel personally known
2. THE About_Section SHALL be written in first-person voice, use complete sentences, and contain no calls-to-action, discount offers, or price references
3. THE About_Section SHALL not contain any of the following language patterns: "fresh cuts," "fades and lineups," "look sharp," "man cave," "bro," "king," "the boys," urgency phrases such as "book now before spots fill up," or superlatives such as "best barber in [city]"
4. THE About_Section SHALL include at least one statement that explicitly references the client relationship or experience rather than only technical barbering skill

### Requirement 4: Services Display

**User Story:** As a visitor, I want to see available services and pricing, so that I understand what Cam offers and the investment required.

#### Acceptance Criteria

1. THE Services_Section SHALL display the following services from a local static data source: Premium Haircut, Haircut + Beard, and Beard Trim / Lineup
2. THE Services_Section SHALL display a "starting at" price with a dollar amount for each service
3. THE Services_Section SHALL present each service with no strikethrough pricing, no sale or discount badges, no percentage-off labels, and no more than 3 services visible at a time without scrolling
4. WHEN the viewport width is 320px or greater, THE Services_Section SHALL display each service entry as a distinct visual block with the service name and price separated by visible whitespace or dividers

### Requirement 5: Why Clients Stay Section

**User Story:** As a visitor, I want to understand what makes Cam different from other barbers, so that I see the value in paying a premium price.

#### Acceptance Criteria

1. THE Why_Section SHALL display a section heading that communicates why clients choose or stay with Cam
2. THE Why_Section SHALL display the following five differentiators, each presented as a distinct visual block with a short label and one supporting sentence (maximum 120 characters per sentence): consistent results, detail-oriented grooming, relaxed real conversation, premium experience, and long-term barber relationship
3. THE Why_Section SHALL present differentiators in a single-column stacked layout with no horizontal scrolling at viewport widths from 320px to 480px
4. THE Why_Section SHALL render each differentiator as a separately identifiable item (visually separated by spacing, dividers, or card boundaries) so that a visitor can read any single differentiator without reading the others

### Requirement 6: Gallery Display

**User Story:** As a visitor, I want to see examples of Cam's work, so that I can evaluate his skill and style before booking.

#### Acceptance Criteria

1. THE Gallery_Section SHALL display a grid of at least 6 placeholder images sourced from a local static data structure
2. THE Gallery_Section SHALL include a visible caption for each image categorizing the work type as one of the following: fades, beard work, classic cuts, texture, or detail work
3. THE Gallery_Section SHALL render images in a responsive grid displaying 1 column on phone viewports (320px–480px), 2 columns on tablet viewports (481px–1024px), and 3 columns on desktop viewports (1025px and above)
4. THE Gallery_Section SHALL display all grid images at a uniform aspect ratio to maintain visual consistency across the grid

### Requirement 7: Reviews Section

**User Story:** As a visitor, I want to read testimonials from real clients, so that I trust Cam's reputation through social proof.

#### Acceptance Criteria

1. THE Reviews_Section SHALL display a minimum of 3 placeholder testimonials from a local static data source
2. THE Reviews_Section SHALL include at least one testimonial whose quote text references a client following Cam from Capitol Hill to West Seattle
3. THE Reviews_Section SHALL display each testimonial with a client name placeholder (first name and last initial) and quote text between 20 and 200 characters in length
4. THE Reviews_Section SHALL display all testimonials visible within the section without requiring user interaction to reveal hidden content on viewports 768px and wider

### Requirement 8: Location Information

**User Story:** As a visitor, I want to know where Cam is located and how to get there, so that I can plan my visit.

#### Acceptance Criteria

1. THE Location_Section SHALL display the shop name "Just Another Barbershop" and the area "West Seattle, Seattle, WA"
2. THE Location_Section SHALL include a map placeholder element with a minimum height of 200px and a visible border or background color distinguishing it from surrounding content
3. THE Location_Section SHALL display the text "near Alaska Junction" within the section content
4. THE Location_Section SHALL include a placeholder paragraph for parking and access information, marked with bracket notation (e.g., [Parking and access details here]) for future replacement

### Requirement 9: Booking Call-to-Action

**User Story:** As a visitor, I want a clear final prompt to book an appointment, so that I can take action after reviewing the page.

#### Acceptance Criteria

1. THE Booking_Section SHALL display the message "Cam is now accepting appointments in West Seattle."
2. THE Booking_Section SHALL display a primary CTA_Button labeled "Book with Cam" that links to a configurable booking URL and opens the link in a new browser tab.
3. THE Booking_Section SHALL display a secondary CTA_Button labeled "Follow on Instagram" that links to a configurable Instagram URL and opens the link in a new browser tab.
4. THE Booking_Section SHALL visually distinguish the primary CTA_Button from the secondary CTA_Button by rendering the primary button with greater visual prominence (e.g., filled background) and the secondary button with reduced prominence (e.g., outlined or text-only style).
5. IF a configurable URL is empty or not provided, THEN THE Booking_Section SHALL hide the corresponding CTA_Button rather than display a non-functional link.
6. THE Booking_Section SHALL appear as the last content section on the page, positioned after all other sections.

### Requirement 10: Mobile-First Responsive Design

**User Story:** As a visitor on a mobile device, I want the site to look and function beautifully on my phone, so that I have a premium experience regardless of device.

#### Acceptance Criteria

1. THE Site SHALL render with a mobile-first layout as the default styling baseline, where base styles target viewports of 480px or narrower and wider layouts are applied via min-width media queries
2. THE Site SHALL adapt responsively to phone (320px–480px), tablet (481px–1024px), and desktop (1025px+) viewports such that no horizontal scrollbar appears, no text is clipped or overlaps other elements, and all content remains accessible without horizontal scrolling
3. THE Site SHALL display body text at a minimum size of 16px on mobile viewports with a line-height of at least 1.5 and a minimum paragraph spacing of 16px
4. THE Site SHALL display CTA_Button elements with a minimum touch-target size of 44×44px, visually distinct from surrounding content through contrast or border treatment, without using pulsing animations, bright saturated accent fills, or all-caps text exceeding 14px
5. WHEN a Visitor taps a Navigation anchor, THE Site SHALL scroll to the corresponding section using CSS smooth-scroll behavior (scroll-behavior: smooth) completing within 300ms to 800ms of perceived motion
6. WHILE the Site is displayed on a phone viewport (320px–480px), THE Site SHALL stack all major content sections in a single column layout with interactive elements spaced at least 8px apart vertically
7. THE Navigation SHALL remain understated and minimal, prioritizing simplicity and readability over feature density, with no more than 5 primary navigation items visible at any time
8. THE Site SHALL avoid oversized navigation systems, excessive menu structures, or visually dominant navigation treatments that compete with the emotional content experience
9. THE Site SHALL avoid sticky navigation behaviors that consume excessive vertical space or distract from the page content on mobile devices
10. THE Navigation SHALL support smooth anchor-based movement between sections while preserving a calm, editorial browsing experience

### Requirement 11: Performance and Core Web Vitals

**User Story:** As a visitor, I want the page to load quickly and feel responsive, so that I have a smooth browsing experience.

#### Acceptance Criteria

1. THE Site SHALL load without requiring external CMS API calls, database queries, or server-side rendering dependencies
2. THE Site SHALL use semantic HTML elements (header, nav, main, section, footer, article) for all content sections defined in the Glossary
3. THE Site SHALL achieve Core_Web_Vitals scores in the "Good" range: Largest Contentful Paint (LCP) under 2.5 seconds, Cumulative Layout Shift (CLS) below 0.1, and Interaction to Next Paint (INP) under 200 milliseconds, as measured by Lighthouse on a simulated mobile connection
4. THE Site SHALL maintain a total page weight (HTML, CSS, JavaScript, fonts, and placeholder images combined) of no more than 1 MB on initial load before user interaction
5. THE Site SHALL load below-the-fold images using lazy loading and defer non-critical JavaScript so that no render-blocking resources delay the initial paint
6. THE Site SHALL contain no CMS integrations, no database connections, no authentication systems, no server-side abstractions, and no more than 3 third-party library dependencies in production
7. THE Site SHALL remain intentionally lightweight, functioning as a premium trust-building landing page with no unnecessary architectural abstractions or overengineering beyond what a single-page static site requires
8. THE Site SHALL optimize all imagery for responsive delivery using appropriately sized image assets, modern image formats where supported, and compression strategies that preserve perceived visual quality while minimizing page weight
9. THE Site SHALL ensure that hero imagery and gallery imagery load progressively and do not negatively impact Largest Contentful Paint (LCP) performance targets
10. THE Site SHALL prioritize perceived image quality and emotional impact while maintaining an intentionally lightweight overall page experience

### Requirement 12: SEO and Metadata

**User Story:** As a site owner, I want the page to rank well for local barber searches in West Seattle, so that new clients can discover Cam through search engines.

#### Acceptance Criteria

1. THE Site SHALL set the page title to "CamTheBarber | Premium Barber in West Seattle"
2. THE Site SHALL set the meta description to "CamTheBarber offers premium haircuts, beard trims, and relationship-driven grooming in West Seattle at Just Another Barbershop."
3. THE Site SHALL include Open Graph metadata with og:title set to the page title, og:description set to the meta description, og:type set to "website", and og:image set to a defined image URL path
4. THE Site SHALL include exactly one h1 element containing "CamTheBarber" and distribute target local SEO keywords (barber in West Seattle, best barber West Seattle, premium barber West Seattle, men's haircut West Seattle, beard trim West Seattle, Seattle barber, barber near Alaska Junction) naturally across headings, metadata, image alt text, and supporting copy without keyword stuffing, robotic phrasing, or forcing exact-match keywords into headings unnaturally
5. THE Site SHALL prioritize premium human-quality copywriting over SEO optimization, ensuring that no heading, paragraph, or section reads like a generic SEO landing page or local business template
6. THE Site SHALL use structured heading elements (h1, h2, h3) in proper hierarchical order without skipping levels, where no h2 appears before the h1, and no h3 appears without a preceding h2 ancestor
7. THE Site SHALL include a canonical URL meta tag referencing the page's own URL

### Requirement 13: Accessibility

**User Story:** As a visitor with accessibility needs, I want the site to meet accessibility standards, so that I can navigate and read content regardless of ability.

#### Acceptance Criteria

1. THE Site SHALL maintain accessible color contrast ratios meeting WCAG 2.1 AA standards (minimum 4.5:1 for normal text, 3:1 for large text)
2. THE Site SHALL provide alt text of 1 to 150 characters that identifies the subject and purpose of the image for all informative image elements, and SHALL mark decorative images with an empty alt attribute
3. THE Site SHALL support keyboard navigation for all interactive elements including CTA_Button and Navigation anchors, with a visible focus indicator distinguishable from the unfocused state, Tab key traversal in logical reading order, and activation via Enter or Space keys
4. THE Site SHALL use ARIA landmarks to identify page sections including at minimum banner, main, and contentinfo regions
5. THE Site SHALL use a single h1 heading per page and maintain a sequential heading hierarchy (h1 through h4) with no skipped levels

### Requirement 14: Content Maintainability

**User Story:** As a site maintainer, I want all content to be easy to update without technical complexity, so that copy, images, and links can be changed quickly.

#### Acceptance Criteria

1. THE Site SHALL store testimonial content (author name, quote text, and optional rating) in a single dedicated data file separate from presentation components, editable by changing field values without running build commands or modifying component logic
2. THE Site SHALL store service listings (service name, description, and price) and pricing in a single dedicated data file separate from presentation components, editable by changing field values without running build commands or modifying component logic
3. THE Site SHALL store gallery image references (image source path and optional alt text) in a single dedicated data file separate from presentation components, editable by changing field values without running build commands or modifying component logic
4. THE Site SHALL store all external URL values (including booking URL and Instagram URL) in a single dedicated configuration data file, so that updating a URL value in that file updates all corresponding links across the site
5. THE Site SHALL use placeholder content marked with surrounding square bracket notation (e.g., [Your Testimonial Here]) so that a maintainer can identify all content requiring replacement by searching for bracket-enclosed text
6. THE Site SHALL include inline comments within each data file describing the purpose of each field and the expected value format
7. THE Site SHALL use lightweight reusable components and local static data structures only, where all content (copy, images, links, metadata) remains editable by updating data files, configuration constants, image references, or metadata values without requiring component rewrites
8. THE Site SHALL require no content update to involve modifying component logic, template structure, or build configuration — only data file values

### Requirement 15: Visual Brand Direction

**User Story:** As a site owner, I want the visual design to reflect a premium, warm, editorial aesthetic, so that the site communicates boutique hospitality rather than generic barbershop energy.

#### Acceptance Criteria

1. THE Site SHALL use a color palette limited to no more than 5 core colors, consisting of warm neutrals (such as cream, tan, charcoal, or muted gold) with no neon, highly saturated, or primary colors
2. THE Site SHALL avoid neon barber aesthetics, skull imagery, overly masculine branding cues (such as heavy black backgrounds with bold block lettering), generic fade/clipper imagery, hype culture references, aggressive masculinity, nightclub aesthetics, trend-chasing social media design, and animated gimmicks such as spinning logos or auto-playing background videos
3. THE Site SHALL use no more than 2 typeface families, selecting from serif or refined sans-serif classifications with font weights ranging from light to medium for body text, and no display or novelty typefaces
4. THE Site SHALL maintain a minimum of 30% whitespace per viewport section, with no more than 3 primary content elements visible per screen at any scroll position, ensuring every section feels breathable and intentional
5. THE Site SHALL use photography and imagery that prioritizes emotional storytelling over technical barber showcase, styled with warm natural lighting, cinematic portraits, real conversation moments, environmental shop photography, lifestyle or editorial framing, shallow depth of field, and relaxed confidence — avoiding generic clipper closeups, neon barber visuals, over-stylized "crispy fade" marketing imagery, stock-photo energy, and loud masculine aesthetics
6. THE Site SHALL communicate the following brand values through its visual design: trust, consistency, relationship, craftsmanship, calm confidence, personal connection, and premium attention to detail — evoking the energy of boutique hospitality, premium coffee culture, editorial lifestyle branding, and modern Seattle luxury (reference: "Aesop meets Seattle barber culture")
7. THE Site SHALL feel restrained, editorial, premium, modern, warm, cinematic, and trustworthy — avoiding overcrowded layouts, oversized navigation systems, too many simultaneous focal points, and overly dense typography blocks
8. THE Site SHALL treat the emotional experience of visiting the page as equal in importance to the information conveyed, positioning Cam as a luxury personal service brand rather than a generic barber shop
9. THE Site SHALL prioritize restraint, confidence, whitespace, and emotional storytelling over feature density or visual excess in all implementation decisions
10. THE Site SHALL evoke the following qualities: calm, premium, cinematic, warm, trustworthy, editorial, and intentional — and SHALL avoid qualities described as: trendy, loud, over-animated, startup-like, cluttered, or gimmicky
11. THE Site SHALL protect the creative direction of "Aesop meets Seattle barber culture" throughout all visual, typographic, layout, and interaction design decisions, treating this reference as the guiding aesthetic benchmark

### Requirement 16: Motion and Animation

**User Story:** As a visitor, I want the site to feel polished and refined through subtle motion, so that interactions feel premium without being distracting.

#### Acceptance Criteria

1. THE Site SHALL use motion only where it improves perceived polish or usability, limiting animations to subtle fades, restrained hover states, gentle image reveals, minimal transitions, and smooth anchor scrolling
2. THE Site SHALL avoid excessive animations, parallax effects, floating motion systems, motion-heavy transitions, scroll-jacking, animated backgrounds, pulsing buttons, flashy hover effects, and distracting interactions
3. THE Site SHALL feel calm, confident, refined, and premium in its motion behavior, with no animation drawing attention to itself over the content it supports
4. WHEN a Visitor hovers over or focuses on an interactive element, THE Site SHALL apply a restrained visual state change (such as a subtle opacity shift, gentle color transition, or understated scale adjustment) completing within 150ms to 300ms
5. WHEN images enter the viewport during scrolling, THE Site SHALL reveal them with a gentle fade-in or soft upward translate completing within 300ms to 600ms, without bouncing, overshooting, or aggressive motion
6. WHILE a Visitor navigates the Site, THE Site SHALL ensure that no animation blocks content visibility, delays interaction, or requires the visitor to wait for motion to complete before reading or tapping

### Requirement 17: Photography as Primary Brand Asset

**User Story:** As a site owner, I want photography to serve as a primary storytelling and trust-building asset throughout the site, so that visitors feel the warmth, craftsmanship, and authenticity of Cam's brand through imagery alone.

#### Acceptance Criteria

1. THE Site SHALL prioritize high-quality original photography over stock imagery whenever available, with photography treated as a primary brand asset rather than decorative support content
2. THE Site SHALL allocate prominent visual space to photography throughout the experience, allowing imagery to communicate atmosphere, trust, craftsmanship, and emotional tone alongside written content
3. Photography SHALL reinforce the following brand values: warmth, trust, conversation, craftsmanship, premium attention to detail, calm confidence, and boutique hospitality energy
4. THE Site SHALL use photography styled with natural light, cinematic environmental portraits, conversation moments, detail-oriented composition, editorial framing, shallow depth of field, authentic interaction, and warm neutral tones
5. THE Site SHALL avoid overly staged stock imagery, generic barber marketing visuals, neon aesthetics, aggressive masculine posing, and overly stylized "social media barber" imagery in all photographic content
