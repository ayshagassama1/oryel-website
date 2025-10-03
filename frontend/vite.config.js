import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    // Proxy les appels /api vers le backend FastAPI.
    // En dev, le frontend tourne sur :5173 et le backend sur :8000.
    // Ce proxy évite les problèmes de CORS en dev.
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
