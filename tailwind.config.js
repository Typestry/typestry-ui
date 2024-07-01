/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      serif: ["NotoSerif-Variable"],
      body: ["Koulen"],
      sans: ["Finlandica-Variable"],
    },
    extend: {
      colors: {
        primary: {
          50: "#f2f9f9",
          100: "#ddeff0",
          200: "#bfe0e2",
          300: "#92cace",
          400: "#5faab1",
          500: "#438e96",
          600: "#3b757f",
          700: "#356169",
          800: "#325158",
          900: "#2d464c",
          950: "#1a2c32",
        },
        secondary: {
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
        },
      },
    },
  },
}
