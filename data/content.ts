/**
 * Section copy content for Hero, Trust narrative, About, Why differentiators,
 * Location, and Booking CTA sections.
 *
 * All text content is maintained here, separate from component logic.
 * Update values directly — no component changes needed.
 *
 * Content Guidelines:
 * - About body: first-person voice, 50–200 words, no CTAs, no prices, no discount language
 * - Avoid: "fresh cuts," "fades and lineups," "look sharp," "man cave," "bro," "king,"
 *   "the boys," urgency phrases, superlatives like "best barber in [city]"
 * - Include at least one statement referencing client relationship over technical skill
 * - Differentiator descriptions: max 120 characters each
 * - Use bracket notation [like this] for placeholder content that needs replacement
 */

/**
 * Hero section content.
 * Headline and subheadline displayed at the top of the page.
 * Must mention "West Seattle" in visible text.
 */
export const heroContent = {
  /** Primary headline displayed in the hero section */
  headline: 'The barber clients followed across Seattle.',
  /** Supporting subheadline below the headline */
  subheadline:
    'Premium cuts for every texture, beard work, and genuine connection — now in West Seattle at Just Another Barbershop.',
} as const;

/**
 * Trust section narrative content.
 * References client loyalty and the move from Capitol Hill to West Seattle.
 */
export const trustContent = {
  // TODO: Refine narrative with Cam's voice if needed
  /** Narrative paragraph referencing client loyalty and the move to West Seattle */
  narrative:
    'When Cam moved from Capitol Hill to West Seattle, his clients followed. That kind of loyalty isn\'t built on haircuts alone — it\'s built on trust, consistency, and the kind of genuine connection that makes every visit feel personal.',
} as const;

/**
 * About section content.
 * Written in first-person voice, 50–200 words.
 * Must reference at least 2 of: genuine conversation, consistency of service,
 * attention to craft, making clients feel personally known.
 * No CTAs, no prices, no discount language.
 * Must include at least one statement referencing client relationship over technical skill.
 */
export const aboutContent = {
  /** Section heading */
  heading: 'Meet Cam',
  /**
   * First-person body copy (50–200 words).
   * Themes referenced: genuine conversation, consistency, attention to craft, making clients feel known.
   * Includes statement prioritizing client relationship over technical skill.
   */
  // TODO: Refine with Cam's actual voice and story
  body: 'I believe the best haircuts happen when you actually know the person in the chair. Every head of hair is different — different textures, different growth patterns, different goals — and I take the time to understand yours specifically. Over the years, I\'ve built my practice around genuine conversation and consistency. Whether you\'re coming in for a skin fade, a textured crop, or a shape-up on natural curls, I show up the same way every time: focused, detail-oriented, and invested in getting it right. My craft isn\'t just about technique; it\'s about making you feel personally known the moment you sit down. I remember your preferences, what\'s going on in your life, and what works for your hair. Every client gets my full attention, every visit.',
} as const;

/**
 * Why Clients Stay section content.
 * Heading + 5 differentiators, each with a short label and description.
 * Description constraint: max 120 characters each.
 * Differentiator themes: consistent results, detail-oriented grooming,
 * relaxed real conversation, premium experience, long-term barber relationship.
 */
export const whyContent = {
  /** Section heading communicating why clients choose or stay with Cam */
  heading: 'Why Clients Stay',
  /** Five differentiators — each description must be 120 characters or fewer */
  differentiators: [
    {
      label: 'Consistent Results',
      description:
        'You get the same quality and attention every single visit — no guessing, no off days.',
    },
    {
      label: 'Every Texture, Every Style',
      description:
        'Fades, curls, straight hair, textured cuts — Cam adapts his craft to your hair specifically.',
    },
    {
      label: 'Detail-Oriented Grooming',
      description:
        'Every line, every blend, every edge gets the focus it deserves.',
    },
    {
      label: 'Relaxed Real Conversation',
      description:
        'No forced small talk — just genuine connection that makes the experience feel easy.',
    },
    {
      label: 'Long-Term Barber Relationship',
      description:
        'A barber who remembers your preferences, your life, and what works for you.',
    },
  ],
} as const;

/**
 * Location section content.
 * Displays shop info, area, nearby landmark, and parking details.
 * parkingInfo uses bracket notation as a placeholder for future replacement.
 */
export const locationContent = {
  shopName: 'Just Another Barbershop',
  address: '1617 Harbor Ave SW, STE C',
  cityStateZip: 'Seattle, WA 98126',
  area: 'West Seattle, Seattle, WA',
  nearbyLandmark: 'Near Alaska Junction · Alki waterfront area',
  parkingInfo: 'Street parking available along Harbor Ave SW.',
  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '11:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: '11:00 AM – 5:00 PM' },
    { day: 'Thursday', time: 'Closed' },
    { day: 'Friday', time: '11:00 AM – 5:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
} as const;

/**
 * Booking CTA section content.
 * Final call-to-action message displayed at the bottom of the page.
 */
export const bookingContent = {
  /** CTA message displayed above the booking buttons */
  message: 'Cam is now accepting appointments in West Seattle.',
} as const;
