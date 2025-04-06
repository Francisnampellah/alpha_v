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
        sans: ['var(--font-poppins)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          DEFAULT: '#0a0f36',
          90: '#0a0f36e6',  // 90% opacity
          80: '#0a0f36cc',  // 80% opacity
          70: '#0a0f36b3',  // 70% opacity
        }
      },
    },
  },
  plugins: [],
} 