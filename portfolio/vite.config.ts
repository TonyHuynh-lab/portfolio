import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://tonyhuynh-lab.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react()],
})
