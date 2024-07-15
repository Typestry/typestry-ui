import { typestry } from "./src/plugins"
import { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [typestry()],
} satisfies Config
