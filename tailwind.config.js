/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["NotoSerif-Variable"],
      body: ["Koulen"],
      sans: ["Finlandica-Variable"],
    },
    extend: {
      backgroundImage: {
        vhs: "url('/src/assets/vhs.gif')",
      },
      colors: {
        "french-pass": {
          50: "#eff8ff",
          100: "#dbedfe",
          200: "#b8defe",
          300: "#93cffd",
          400: "#60b4fa",
          500: "#3b94f6",
          600: "#2576eb",
          700: "#1d60d8",
          800: "#1e4eaf",
          900: "#1e458a",
          950: "#172b54",
        },
      },
    },
  },
}
