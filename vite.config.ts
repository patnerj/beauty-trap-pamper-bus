import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/beauty-trap-pamper-bus/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
