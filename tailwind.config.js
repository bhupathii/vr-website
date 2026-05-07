/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E3A5F',
          dark: '#070D1A',
        },
        accent: {
          DEFAULT: '#0369A1',
          light: '#0284C7',
          dark: '#075985',
        },
        gold: {
          DEFAULT: '#e8a020',
          light: '#f4b740',
          dark: '#c47d10',
        },
        surface: '#F8FAFC',
        muted: '#E8ECF1',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        heading: ['Lexend', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'trust': '0 2px 12px 0 rgba(15,23,42,0.08)',
        'trust-lg': '0 8px 32px 0 rgba(15,23,42,0.12)',
      },
    },
  },
  plugins: [],
}
