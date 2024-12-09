import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 상대 경로로 변경
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
});
