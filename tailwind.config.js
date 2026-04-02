/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#050A14',
        'dark-surface': '#0D1B2E',
        'electric-cyan': '#00F5FF',
        'violet-accent': '#7C3AED',
        'text-primary': '#F0F6FF',
        'text-muted': '#8899AA',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
