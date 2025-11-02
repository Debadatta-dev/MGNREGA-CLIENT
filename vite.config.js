// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
    host: "localhost",
    historyApiFallback: true,
    open: false,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild", // Changed from "terser" to "esbuild"
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "chart-vendor": ["chart.js", "react-chartjs-2"],
          "pdf-vendor": ["jspdf", "jspdf-autotable"],
        },
      },
    },
    chunkSizeWarningLimit: 1024,
    cssCodeSplit: true,
    reportCompressedSize: false,
  },
  preview: {
    port: 4173,
    strictPort: false,
    open: false,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "chart.js",
      "react-chartjs-2",
    ],
  },
});
