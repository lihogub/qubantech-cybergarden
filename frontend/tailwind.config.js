module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      fontFamily: {
        'sans': [ 'system-ui', 'ui-sans-serif'],
        'serif': ['Georgia','ui-serif'],
      },
      blue: {
        DEFAULT: '#5F7EA7',
      },
      purple:{
        DEFAULT: '#C9E5F0',
        secondary: '#272727',
      },
      black: {
        DEFAULT: '#181818',
        secondary: '#272727',
      },
      gray:{
        800: '#535353',
        700: '#666666',
        500: 'rgba(55, 65, 81)',
        400: "rgba(156, 163, 175)",
        300: "rgba(209, 213, 219)",
        200: "rgba(229, 231, 235)",
        100: "rgba(243, 244, 246)",
      },
      white:{
        DEFAULT: '#FFFFFF',
      },
      red: {
        DEFAULT: '#940317'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
