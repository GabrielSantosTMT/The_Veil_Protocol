/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veil: {
          black: '#0a0908',
          dark: '#121010',
          card: '#161413',
          cardBorder: '#2a241b',
          gold: '#c9a24b',
          goldBright: '#e0b95c',
          goldDark: '#8a6b25',
          goldGlow: 'rgba(201, 162, 75, 0.25)',
          red: '#3d1616',
          redAccent: '#5a1e1e',
          text: '#ede4d3',
          muted: '#a89f91',
          stone: '#1a1816',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e0b95c 0%, #c9a24b 50%, #8a6b25 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(201,162,75,0.15) 0%, rgba(10,9,8,0) 70%)',
        'crimson-glow': 'radial-gradient(circle, rgba(61,22,22,0.3) 0%, rgba(10,9,8,0) 70%)',
        'parchment-pattern': 'radial-gradient(rgba(201, 162, 75, 0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        'gold': '0 0 25px -5px rgba(201, 162, 75, 0.3)',
        'gold-lg': '0 0 40px -5px rgba(201, 162, 75, 0.5)',
        'crimson': '0 0 30px -5px rgba(61, 22, 22, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
