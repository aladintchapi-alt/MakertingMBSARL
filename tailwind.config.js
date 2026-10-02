/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/js/**/*.js",
    "./assets/js/views/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {
      colors: {
        // Multi Business SARL Color System
        lime: {
          50: '#F7FFE5',
          100: '#ECFFC2',
          200: '#DBFF8A',
          300: '#C4FF47',
          400: '#B0FF14',
          500: '#9AFF01', // Exact Logo Color 1 (Electric Lime Accent)
          600: '#82DB00',
          700: '#64AA00',
          800: '#487A04',
          900: '#2E4E06',
          950: '#142501',
        },
        mint: {
          50: '#EFFFF9',
          100: '#D5FBEA',
          200: '#AEF6D6',
          300: '#75EEBB',
          400: '#40DE9E',
          500: '#26C992', // Exact Logo Color 2 (Vibrant Mint / Emerald)
          600: '#19A977',
          700: '#158660',
          800: '#146A4E',
          900: '#125741',
          950: '#063225',
        },
        forest: {
          50: '#F0FAF4',
          100: '#DCF4E5',
          200: '#BCE8CE',
          300: '#8FD5AF',
          400: '#5BBB8C',
          500: '#349E6E',
          600: '#248057',
          700: '#1E6647',
          800: '#1A513A',
          850: '#133B2B',
          900: '#0D261C', // Imperial Deep Forest
          950: '#06130E', // Ultra Dark Luxury Noir-Forêt
        },
        sand: {
          50: '#FCFCFA',
          100: '#F7F7F2',
          200: '#EFEFE5',
          300: '#E2E2D2',
          400: '#CDCCB8',
          500: '#B2B097',
        },
        surface: {
          dark: '#080E0B',
          'dark-card': '#0E1713',
          'dark-border': '#1A2922',
          'dark-hover': '#16231D',
          light: '#FBFBF9',
          'light-card': '#FFFFFF',
          'light-border': '#E6E9E6',
          'light-hover': '#F3F5F3',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.75rem, 6vw + 1rem, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.25rem, 4.5vw + 1rem, 4.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.85rem, 3.5vw + 1rem, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-xl': ['clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'heading-lg': ['clamp(1.25rem, 1.8vw + 0.5rem, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'glow-lime': '0 0 35px -5px rgba(154, 255, 1, 0.35)',
        'glow-lime-sm': '0 0 18px -3px rgba(154, 255, 1, 0.4)',
        'glow-mint': '0 0 35px -5px rgba(38, 201, 146, 0.35)',
        'glow-mint-sm': '0 0 18px -3px rgba(38, 201, 146, 0.35)',
        'luxury': '0 20px 45px -15px rgba(4, 19, 14, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'luxury-hover': '0 30px 60px -15px rgba(4, 19, 14, 0.65), 0 0 0 1px rgba(154, 255, 1, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'card-light': '0 10px 30px -10px rgba(6, 19, 14, 0.06), 0 1px 3px rgba(6, 19, 14, 0.04)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 15% 15%, rgba(38, 201, 146, 0.15) 0px, transparent 50%), radial-gradient(at 85% 85%, rgba(154, 255, 1, 0.08) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(13, 38, 28, 0.5) 0px, transparent 80%)',
        'mesh-light': 'radial-gradient(at 10% 20%, rgba(38, 201, 146, 0.08) 0px, transparent 40%), radial-gradient(at 90% 80%, rgba(154, 255, 1, 0.06) 0px, transparent 40%)',
      }
    },
  },
  plugins: [],
}
