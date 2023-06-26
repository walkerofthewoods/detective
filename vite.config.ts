import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { TailwindCSSVitePlugin } from "tailwindcss-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TailwindCSSVitePlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
