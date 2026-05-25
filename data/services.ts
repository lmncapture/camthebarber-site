/**
 * Cam's real service offerings from Square booking.
 * Pricing, descriptions, and durations are accurate as of launch.
 */

export interface Service {
  /** Service name */
  name: string;
  /** Full description of what's included */
  description: string;
  /** Price displayed */
  price: string;
  /** Duration */
  duration: string;
  /** Booking URL for this specific service (uses main booking URL) */
  bookingLabel: string;
}

export const services: Service[] = [
  {
    name: 'Haircut',
    description:
      'Consultation and full service haircut finishing with a hot lather neck shave. Product application and styling included.',
    price: '$90',
    duration: '1 hr',
    bookingLabel: 'Book Haircut',
  },
  {
    name: 'Haircut and Beard Trim',
    description:
      'All the works! Consultation and haircut with product application and styling included. Beard trim with neck shave and straight razor line up included.',
    price: '$110',
    duration: '1 hr',
    bookingLabel: 'Book Hair + Beard',
  },
  {
    name: 'Beard Trim',
    description:
      'Detail-oriented beard trim with straight razor line up and foil shaver neck clean up.',
    price: '$50',
    duration: '30 min',
    bookingLabel: 'Book Beard Trim',
  },
  {
    name: 'Buzzcut',
    description:
      'Buzzcut with taper included. Please note, a buzzcut service does NOT include skin fade. Please book a haircut if desiring a skin fade.',
    price: '$50',
    duration: '30 min',
    bookingLabel: 'Book Buzzcut',
  },
];
