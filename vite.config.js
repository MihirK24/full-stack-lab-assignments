import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/full-stack-lab-assignments/',
  plugins: [react()],
})