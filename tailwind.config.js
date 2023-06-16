module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'avenir': ['AVENIR','regular'],
      },
      colors: {
        newred: {
          100: "#FFAEC0",
          200: "#F75961",
          300: "#D33852",
          400: "#AF273E",
        },
        
      }
    },
  },
  plugins: [],
}