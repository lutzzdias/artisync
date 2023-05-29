/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-source-sans-pro)',
        alt: 'var(--font-montserrat)',
      },
      colors: {
        red: {
          300: '#f08979',
          500: '#e94f37',
          600: '#d44832',
        },
        purple: {
          50: '#f5eef8',
          100: '#e0cce8',
          200: '#d1b3dd',
          300: '#bd90cd',
          400: '#b07ac4',
          500: '#9c59b5',
          600: '#8e51a5',
          700: '#6f3f81',
          800: '#563164',
          900: '#42254c',
        },
        gray: {
          50: '#e9e9e9',
          100: '#b9b9bb',
          200: '#98989a',
          300: '#68686c',
          400: '#4b4b50',
          500: '#1e1e24',
          600: '#1b1b21',
          700: '#15151a',
          800: '#111114',
          900: '#0d0d0f',
        },
        white: {
          50: '#fefeff',
          100: 'fdfdff',
          200: '#fcfbff',
          300: '#fafaff',
          400: '#f9f9ff',
          500: '#f8f7ff',
        }
      },
    },
  },
  plugins: [],
}
