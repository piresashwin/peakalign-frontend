/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,ts}',
  ],
  theme: {
    extend: {

      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, rgba(8, 69, 69, 1) 0%, rgba(24, 154, 147, 1) 100%)',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#E6ECEC',
          100: '#B2C5C5',
          200: '#8DA9A9',
          300: '#5A8282',
          400: '#396A6A',
          500: '#084545',
          600: '#073F3F',
          700: '#063131',
          800: '#042626',
          900: '#031D1D',
        },
        secondary: {
          50: "#E8F5F4",
          700: "#116D68"
        },
        'accent-2': {
          50: "#FCFCFF"
        },
        'neutral-1': {
          50: "#FDFEFE",
          200: "#F8F8F9",
          500: "#EFF0F1",
          600: "#D9DADB",
        },
        'neutral-2': {
          50: "#E6E6E6",
          '100': "#B0B0B0",
          '200': "#8A8A8A",
          300: "#545454",
          500: "#000000"
        },
        error: {
          50: "#FDECEC",
          500: "#EF4444",
        },
        success: {
          500: "#22C55E"
        }
      },
      borderWidth: {
        '0.5': "0.5px"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.filter-white': {
          filter: 'invert(100%) brightness(100%) contrast(100%)',
        },
        '.filter-gray': {
          filter: 'brightness(50%) contrast(125%)'
        }
      });
    },
  ],
}

