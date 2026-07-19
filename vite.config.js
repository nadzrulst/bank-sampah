import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmcawmQKByG4EirgBfrFeDbthMWI92FLZU4O86xbAKhOMbba7jSP0vJRP34AgVvNG1'

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
