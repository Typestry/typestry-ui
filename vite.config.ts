import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import copy from "rollup-plugin-copy"
import svgr from "vite-plugin-svgr"
import dts from "vite-plugin-dts"
import { resolve } from "path"
import tailwindcss from "tailwindcss"

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    libInjectCss(),
    dts({
      rollupTypes: true,
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.tsx"],
    }),
    svgr({ svgrOptions: { icon: true } }),
    copy({
      targets: [{ src: "src/assets/fonts/*", dest: "dist/assets/fonts" }],
      hook: "writeBundle",
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
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
    },
  },
})
