/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sk: ["Jost"],
        sans: ["Jost"],
      },
      colors: {
        skBlue: "#034AA6",
        skBlueLight: "#1E71DC",
        skBlueMedDark: "#3A83E4",
        skBlueDark: "#073A7C",

        skWhite: "#F8F6FF",
        skGreen: "#45BF55",
        skRed: "#F24B6A",
      },
    },
  },
  plugins: [],
};
