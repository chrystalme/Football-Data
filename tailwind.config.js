module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Georama', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
