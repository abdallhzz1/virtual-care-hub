import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Use relative paths for assets so the project works on any hosting/subdirectory
  base: "./",
  plugins: [
    TanStackRouterVite(),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Splitting large libraries into separate chunks to avoid the 500kb warning
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-tanstack": ["@tanstack/react-router", "@tanstack/react-query"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB to keep the build log clean
  },
});
