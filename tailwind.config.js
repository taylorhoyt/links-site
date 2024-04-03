/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'theme-navy': '#070F2B',
        'theme-dark-blue': '#1B1A55',
        'theme-stone-blue': '#535C91',
        'theme-lavender': '#9290C3',
      },
    },
  },
  plugins: [],
};
