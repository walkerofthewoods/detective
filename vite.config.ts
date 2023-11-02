import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import { TailwindCSSVitePlugin } from "tailwindcss-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TailwindCSSVitePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
