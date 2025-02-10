import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  base: './',
  build: {
    rollupOptions:{
      external:['electron']
    },
    outDir: 'dist-react',
  },
  
  server:{
    port: 3000,
    strictPort: true
  }
})