module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        38: '9.5rem',
        25: '6.25rem',
        68: '17rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
