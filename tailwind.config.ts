import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'cool-white': '#F0F4F8',
        primary: '#6B7557',
        'primary-light': '#B0B899',
        neutral: '#627D98',
      },
    },
  },
  plugins: [],
} satisfies Config;
