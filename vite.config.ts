import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import tsconfigpaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    tsconfigpaths(),
    react(),
    libInjectCss(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.stories.tsx"],
    }),
    svgr({ svgrOptions: { icon: true } }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@typestry-ui/react",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
      // output: {
      //   assetFileNames: "assets/[name][extname]",
      //   entryFileNames: "[name].js",
      // },
    },
  },
})
