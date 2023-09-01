/**
 * @typedef {'tailwindcss'} NewType
 */

/** @type {import(NewType).Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
