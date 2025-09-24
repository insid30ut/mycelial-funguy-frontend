import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mfg-dark': '#2a2a3a',      // Dark purple-gray background
        'mfg-light': '#f5f5dc',     // Creamy beige text
        'mfg-purple': '#9d4edd',    // Vibrant purple accent
        'mfg-teal': '#3c6e71',      // Muted teal secondary
        'mfg-gold': '#f9a826',      // Goldenrod yellow highlight
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        display: ['var(--font-londrina-solid)'],
      },
    },
  },
  plugins: [],
}
export default config