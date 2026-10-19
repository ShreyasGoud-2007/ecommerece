import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Return index.html for all 404s so React Router handles them
    historyApiFallback: true,
  },
})
