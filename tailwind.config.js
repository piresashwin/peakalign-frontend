/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,ts}',
  ],
  theme: {
    extend: {
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
        'neutral-1': {
          50: "#FDFEFE",
          200: "#F8F8F9",
          500: "#EFF0F1",
          600:"#D9DADB",
        },
        'neutral-2': {
          '100': "#B0B0B0",
          '200': "#8A8A8A",
        },
        error: {
          50: "#FDECEC",
          500: "#EF4444",
        }
      },
      borderWidth: {
        '0.5': "0.5px"
      }
    },
  },
  plugins: [],
}

