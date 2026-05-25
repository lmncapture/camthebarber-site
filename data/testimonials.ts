/**
 * Real client testimonials from Google Reviews.
 * These are actual review excerpts — keep them feeling human and unpolished.
 */

export interface Testimonial {
  /** Client display name */
  name: string;
  /** Quote text from their review */
  quote: string;
  /** Optional star rating (1-5) */
  rating?: number;
  /** Whether this is a featured/highlighted review */
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'DC L.',
    quote: 'Cam is an incredible barber and a genuinely great guy. You can tell he\'s a perfectionist in the best way possible. He takes the time to ask questions, really listens to what you want, and genuinely cares about making sure you leave happy.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Tate',
    quote: 'Camthebarber is one of the best barbers and even a better person to spend an hour with. Extremely personable, easy to talk to, and you leave looking great.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Dalton B.',
    quote: 'I\'ve been coming to Cam for 3 years now and cannot say loud enough that he\'s the best barber I\'ve ever been to in Seattle. This new spot in West Seattle is also pretty special — good energy, great view.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Xander C.',
    quote: 'Have been getting my haircut with Cam for 3 years and it\'s always been spot on. Great spot near the water. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Logan B.',
    quote: 'I found Cam two shops prior to this one and, since finding him, have finally been able to put to rest the long process of finding a barber that actually understands my hair.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Madison B.',
    quote: 'Amazing cut — very detailed. 100% recommend.',
    rating: 5,
  },
];
