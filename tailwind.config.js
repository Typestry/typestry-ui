/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["NotoSerif-Variable"],
      body: ["Koulen"],
      sans: ["Finlandica-Variable"],
    },
    extend: {
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#edeafd",
          200: "#ddd7fd",
          300: "#c3b7fb",
          400: "#a78ff6",
          500: "#8a61f1",
          600: "#7a40e7",
          700: "#753dd6",
          800: "#5926b1",
          900: "#4a2191",
          950: "#2d1362",
        }
      },
    },
  },
}
