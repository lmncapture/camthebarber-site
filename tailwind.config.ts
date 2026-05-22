import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
    },
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        'muted-gold': '#B8956A',
        'soft-white': '#FEFDFB',
        'warm-gray': '#5C5C5C',
        // Richer accent palette — warm leather, brass, burgundy tones
        accent: '#8B5E3C',       // warm leather brown
        'accent-light': '#C4956A', // brass/warm gold
        'deep-burgundy': '#4A2028', // deep burgundy for contrast sections
        'warm-sand': '#E8DDD3',    // warmer than cream, for layered backgrounds
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        content: '1280px',
        narrow: '768px',
      },
    },
  },
  plugins: [],
};

export default config;
