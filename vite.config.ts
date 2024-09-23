import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssTarget: "chrome61",
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@modals": path.resolve(__dirname, "./src/modals"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: false,
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
      },
    }),
  ],
});
