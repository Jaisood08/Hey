import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build relocatable so it works on GitHub Pages
// no matter the repository name (e.g. https://user.github.io/Hey/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
