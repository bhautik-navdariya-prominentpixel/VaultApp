import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
// import { themeVariants, prefersLight, prefersDark } from "tailwindcss-theme-variants";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "https://bhautik-navdariya-prominentpixel.github.io/VaultApp/dist/"
});
