module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      purple:{
        DEFAULT: '#5E54F0',
        secondary: '#272727',
      },
      black: {
        DEFAULT: '#181818',
        secondary: '#272727',
      },
      gray:{
        800: '#535353',
        700: '#666666',
        500: '#ACACAC',
        300: '#E7E7E7',
        ultralight: '#EEEEEE',
      },
      white:{
        DEFAULT: '#FFFFFF',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
