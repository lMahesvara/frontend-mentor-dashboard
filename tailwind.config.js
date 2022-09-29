/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(290px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(290px, 1fr))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      gray: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#9fa6b2",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#252f3f",
        900: "#161e2e",
      },
      facebook: "#198ff5",
      twitter: "#1ca0f2",
      "instagram-yellow": "#fdc468",
      "instagram-pink": "#df4996",
      youtube: "#c4032a",
    },
  },
  plugins: [],
}
