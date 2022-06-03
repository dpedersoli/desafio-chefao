module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#6B83D6',
          600: '#0038FF'
        },
        background: {
          100: '#F5F6FB'
        },
        green: {
          100: '#DFFFC6'
        }
      },
      backgroundImage: {
        'search-icon': "url('/src/images/icons/videos/lupa.png')"
      }
    },
  },
  plugins: [],
}