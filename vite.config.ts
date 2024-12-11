import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@configs": path.resolve(__dirname, "src/configs"),
      "@services": path.resolve(__dirname, "src/services"),
      "@con": path.resolve(__dirname, "src/con"),
    },
  },
});
