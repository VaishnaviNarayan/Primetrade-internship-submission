import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    strictPort: true, // This ensures it ONLY runs on 5175 or fails (won't open 5176, etc.)
    host: true,
    open: false, // Prevents auto-opening new tabs
  }
})
