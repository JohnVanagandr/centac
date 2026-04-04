import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/CENTAC/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["lucide-react"],
  },
});
