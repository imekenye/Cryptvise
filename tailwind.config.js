module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'text-color1': '#397090',
        'text-color2': '#56CCF2',
      },
      fontFamily: {
        display: ['Lexend Giga'],
        body: ['"Montserrat"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
