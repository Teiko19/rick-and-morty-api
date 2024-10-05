import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {  // Puedes ajustar la ruta según tus necesidades
        target: 'https://rickandmortyapi.com/graphql',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, ''),
        secure: false, // Puede ser necesario si estás teniendo problemas con certificados SSL durante el desarrollo
      }
    }
  }
})
