import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@types": path.resolve(__dirname, "./src/types"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@hook": path.resolve(__dirname, "./src/hook"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@styled": path.resolve(__dirname, "./src/styled-components"),
      "@adapters": path.resolve(__dirname, "./src/adapters"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
