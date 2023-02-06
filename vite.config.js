import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    css: true,
    setupFiles: './src/components/__tests__/setup.js'
  },
})
