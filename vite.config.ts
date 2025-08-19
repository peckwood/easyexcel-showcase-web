import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // String shorthand: '/api' -> 'http://localhost:8080/api'
      // We'll use a more flexible option
      '/api': { // Any request starting with /api will be proxied
        target: 'http://localhost:8080', // Your backend server
        changeOrigin: true,
        // Optional: remove the '/api' prefix when forwarding
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
