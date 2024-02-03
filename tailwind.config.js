/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(min(430px, 100%), 1fr))',
      },
    },
    colors: {
      'lightest-blue': '#CDD5E0',
      'light-grayish-blue': '#4A5567',
      'grayish-blue': '#364153',
      'dark-grayish-blue': '#20293A',
      'light-blue': '#3662E3',
      'dark-blue-gray': '#1D1B48',
      'darkest-blue': '#111729',
    },
  },
  plugins: [],
};
