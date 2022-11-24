/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#7FE9DE",
        secondary: "#009EFF",
        accent: "#E0144C",
        neutral: "#0E5E6F",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
        "base-100": "#FFFFFF",
      }
    }],
  },
}
