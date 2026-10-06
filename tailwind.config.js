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
        // 1. Couleurs de Marque extraites du Logo officiel (logo.jpeg)
        lime: {
          50: '#F7FFE5',
          100: '#ECFFC2',
          200: '#DBFF8A',
          300: '#C4FF47',
          400: '#B0FF14',
          500: '#9AFF01', // Exact Logo Color 1 (Vert Lime Électrique - Accents & CTA)
          600: '#82DB00',
          700: '#64AA00',
          800: '#487A04',
          900: '#2E4E06',
          950: '#142501',
        },
        mint: {
          50: '#F0FDF4',  // Fond pastel service Gestion Immobilière
          100: '#D5FBEA',
          200: '#AEF6D6',
          300: '#75EEBB',
          400: '#40DE9E',
          500: '#26C992', // Exact Logo Color 2 (Vert Menthe / Émeraude)
          600: '#19A977',
          700: '#158660',
          800: '#146A4E',
          900: '#125741',
          950: '#063225',
        },

        // 2. Contraste Sombre Institutionnel (Marine Encre - Max 10% de la surface du site)
        marine: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#1E3246',
          850: '#132435',
          900: '#0B1B2B', // Marine Encre Profond (Contraste luxueux)
          950: '#060F18',
        },

        // 3. Couleur Signature : Fiscalité et Conseil
        indigo: {
          50: '#EEF2FF',  // Fond pastel service Fiscalité
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1', // Indigo DGI & Conseil
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },

        // 4. Couleur Signature : Création d'Entreprise PME-PMI
        amber: {
          50: '#FFFBEB',  // Fond pastel service Création d'Entreprise
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Ambre / Or CFCE
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },

        // 5. Couleur Signature : Dédouanement des Marchandises
        ocean: {
          50: '#F0F9FF',  // Fond pastel service Dédouanement
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9', // Bleu Océan / Portuaire
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },

        // 6. Couleur Signature : Prestation de Services & Travaux
        coral: {
          50: '#FFF1F2',  // Fond pastel service Prestations & Artisans
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E', // Corail Dynamique Second Œuvre
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
          950: '#4C0519',
        },

        // 7. Fonds Dominants (50% de la surface du site) : Blancs & Ivoires
        ivory: {
          50: '#FFFFFF',  // Blanc Pur Maître
          100: '#FDFBF7', // Ivoire Très Clair
          200: '#FBFBF9', // Ivoire Chaud Doux
          300: '#F5F5F0',
          400: '#EBEBE0',
          500: '#D8D8CC',
          600: '#B0B0A0',
          700: '#888878',
          800: '#606050',
          900: '#383828',
          950: '#202018',
        }
      },

      fontFamily: {
        // Serif éditorial élégant pour les titres & prestige
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        // Sans-serif moderne & chirurgical pour interface, menus et corps
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        // Mono pour chiffres, FCFA, pourcentages et métriques
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      fontSize: {
        'display-2xl': ['clamp(2.75rem, 5.5vw + 1rem, 5.25rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-xl': ['clamp(2.25rem, 4vw + 1rem, 4rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.75rem, 3vw + 1rem, 3rem)', { lineHeight: '1.18', letterSpacing: '-0.015em' }],
        'heading-xl': ['clamp(1.35rem, 2vw + 0.75rem, 2.15rem)', { lineHeight: '1.22', letterSpacing: '-0.01em' }],
        'heading-lg': ['clamp(1.15rem, 1.5vw + 0.5rem, 1.6rem)', { lineHeight: '1.28', letterSpacing: '-0.005em' }],
      },

      boxShadow: {
        // Ombres multicouches subtiles (Subtle Light Elevation)
        'subtle': '0 2px 4px rgba(11, 27, 43, 0.04), 0 10px 20px -2px rgba(11, 27, 43, 0.06)',
        'card': '0 4px 6px -1px rgba(11, 27, 43, 0.05), 0 20px 25px -5px rgba(11, 27, 43, 0.05), 0 0 0 1px rgba(11, 27, 43, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(11, 27, 43, 0.10), 0 10px 15px -3px rgba(11, 27, 43, 0.05), 0 0 0 1px rgba(38, 201, 146, 0.3)',
        'floating': '0 25px 50px -12px rgba(11, 27, 43, 0.18)',
        
        // Halos lumineux d'accentuation
        'glow-lime': '0 0 35px -5px rgba(154, 255, 1, 0.45)',
        'glow-lime-sm': '0 0 16px -2px rgba(154, 255, 1, 0.45)',
        'glow-mint': '0 0 35px -5px rgba(38, 201, 146, 0.4)',
        'glow-mint-sm': '0 0 16px -2px rgba(38, 201, 146, 0.35)',
      },

      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },

      transitionTimingFunction: {
        'cinema-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinema-in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },

      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },

      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(0.98)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
