/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#dde6f3",
          200: "#b8c9e3",
          300: "#8aa5ce",
          400: "#5e80b6",
          500: "#3d619c",
          600: "#2c4b80",
          700: "#243d68",
          800: "#1a2c4b",
          900: "#0d1b34",
          950: "#070f1f"
        },
        gold: {
          50: "#fdf9ec",
          100: "#faf0c8",
          200: "#f4dc8a",
          300: "#edc24c",
          400: "#e6a721",
          500: "#d68a13",
          600: "#b46a0e",
          700: "#904d0f",
          800: "#763d12",
          900: "#653313"
        },
        electric: {
          50: "#eef4ff",
          100: "#dde9ff",
          200: "#bcd2ff",
          300: "#8eb0ff",
          400: "#5b85fc",
          500: "#3a5ff8",
          600: "#2541ee",
          700: "#1f33d5",
          800: "#1f2cac",
          900: "#1f2c87"
        },
        violetx: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065"
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 12px 40px -16px rgba(15, 23, 42, 0.18)',
        'softer': '0 6px 24px -10px rgba(15, 23, 42, 0.10)',
        'glow': '0 0 40px rgba(58, 95, 248, 0.35)',
        'gold-glow': '0 0 40px rgba(214, 138, 19, 0.25)'
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'gold-shine': "linear-gradient(135deg, #ffd97a 0%, #d68a13 50%, #ffd97a 100%)",
        'cta-glow': "radial-gradient(60% 60% at 30% 40%, rgba(58,95,248,0.18) 0%, rgba(124,58,237,0.10) 40%, rgba(255,255,255,0) 70%)"
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.9 }
        }
      }
    }
  },
  plugins: []
};
