/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        skyblue: {
          DEFAULT: '#37AAD7',
          100: '#E6F4FA',
          200: '#CDEAF5',
          300: '#9BD4EB',
          400: '#69BFE1',
          500: '#37AAD7',
          600: '#2283A9',
          700: '#175771',
          800: '#0B2C38',
          900: '#06161C',
        },
        'gray-soft': '#F0F1F3',
        'gray': '#9B9B9B',
        'skyblue-white': '#F9FDFF',
      },
      fontSize: {
        'label-medium': ['14px', '21px'],
      }
    },
  },
  plugins: [],
}
