import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // 1. On importe le plugin Tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 2. On l'ajoute à la liste des plugins
  ],
})
