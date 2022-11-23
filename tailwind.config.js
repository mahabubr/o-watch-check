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
        primary: "#6ECCAF",
        secondary: "#D23369",
        accent: "#E0144C",
        neutral: "#F49D1A",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
        "base-100": "#FFFFFF",
      }
    }],
  },
}
