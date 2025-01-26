// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8000',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       }
//     }
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://localhost:8000', // Use environment variable for API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
