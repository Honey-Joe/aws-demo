import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    allowedHosts: ['ec2-15-207-250-121.ap-south-1.compute.amazonaws.com'], // or 'all'
    host: true,
    strictPort: true,
    port: 5173,
  },
});
