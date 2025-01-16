/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
      },
      animation: {
        'infinite-slider': 'infiniteSlider 20s linear infinite',
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 5))' },
        },
      },
    },
  },
  plugins: [],
}
