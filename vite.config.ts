import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigpaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    tsconfigpaths(),
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.stories.tsx"],
    }),
    svgr({ svgrOptions: { icon: true } }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
})
