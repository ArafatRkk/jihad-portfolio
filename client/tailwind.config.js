/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040B15',
          900: '#07111F', // Deep Navy (Primary Background)
          850: '#0A1626',
          800: '#0E1B2E', // Dark Blue (Card/Secondary Background)
          700: '#14253F',
          600: '#1E3557',
        },
        electric: {
          DEFAULT: '#00AEEF', // Electric Blue Accent
          hover: '#0097D1',
          light: '#36DFFF',   // Cyan Highlights
          dim: 'rgba(0, 174, 239, 0.15)',
          glow: 'rgba(54, 223, 255, 0.35)',
        },
        slateText: {
          DEFAULT: '#C7D1DD', // Light Gray Text
          muted: '#8A99AD',
          dark: '#586A82',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'blueprint': '0 0 0 1px rgba(54, 223, 255, 0.15), 0 8px 32px -4px rgba(7, 17, 31, 0.8)',
        'electric-glow': '0 0 25px rgba(0, 174, 239, 0.3)',
        'cyan-glow': '0 0 35px rgba(54, 223, 255, 0.4)',
        'card-hover': '0 12px 30px -10px rgba(0, 174, 239, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-flow': 'traceFlow 3s ease-in-out infinite',
      },
      keyframes: {
        traceFlow: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.98)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
