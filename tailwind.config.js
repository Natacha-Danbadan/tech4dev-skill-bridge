/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "xxl": "1440px",
    },
    extend: {
      spacing: {
        noPage: "calc(100vh - 124px)"
      },
      colors: {
        blue: "#130FEA",
        deepBlue: "#16156D",
        lightBlue: "#E7E9F8",
        neutralBlue: "#D5D6DE",
        textWhite: "#FAFAFB",
        textWhite60: "#FAFAFB60",
        dark: "#131418",
        dark70: "#13141870",
        grey: "#4B4E61",
        lightGrey: "#02041360",
        gold: "#E7C30B"
      },
      fontFamily: {
        gabriela: ["'Gabriela'", "serif"],
        calisto: ["'Calisto MT'", "serif"],
        roboto: ["'Roboto'", "sans-serif"]
      },
      animation: {
        marquee: "marquee 40s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%" : { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    },
  },
  plugins: [],
}
