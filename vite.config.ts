import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Enable source maps for production builds to allow mapping minified
    // runtime stack traces back to TypeScript/JSX source during debugging.
    // This is temporary — we can revert to false after we fix the issue.
    sourcemap: true,
    emptyOutDir: true
  }
})
