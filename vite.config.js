import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Set base path for relative assets (important for SPA routing in build)
  base: './',

  server: {
    port: 3000, // Dev server port
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Express + JSON server port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api from request path
      },
    },
  },

  build: {
    outDir: 'build', // Output React production build to /build folder
    emptyOutDir: true, // Clean old files before build
  },
});