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
      borderRadius: {
        DEFAULT: '4px',
      },
      boxShadow: {
        'drop-3': '0px 2px 16px rgba(6, 22, 28, 0.04)',
        'drop-1': '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
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
        'h2': ['70px', '105px'],
        'h3': ['50px', '75px'],
        'h4': ['30px', '45px'],
        'subtitle': ['24px', '36px'],
        'body': ['18px', '27px'],
        'body-extra-small': ['10px', '15px'],
        'label': ['14px', '21px'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      spacing: {
        46: '11.5rem',
      },
      width: {
        'u217': '217px',
        'u280': '280px',
        'u296': '296px',
        'u462': '462px',
      }
    },
  },
  plugins: [],
}
