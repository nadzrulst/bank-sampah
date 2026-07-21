import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxmTyMi5urErL7HZl1QAcuk1bzsSaloeLVcVmnA2h2BlrWSQh8rZxxvP5JVyTDOenkx'

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
