import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxeKlsWmC3Y9mQE962L-W7zN7ze2c1Og-gV68BTIiyNy-67uHWMMDHB25A-gOcCOIB9'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: SCRIPT_URL,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/exec')
      }
    }
  }
})
