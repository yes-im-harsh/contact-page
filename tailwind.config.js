module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          880: '#FA949D',
          790: '#3E1F92',
          878: '#03034A',
          888: '#646481',
          999: '#5F30E2'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
