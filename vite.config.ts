// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/prm.github.io/'
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()]
  }

  if (command === 'serve') {
    // Desenvolvimento local
    config.base = '/'
  } else {
    // Build para produção (GitHub Pages)
    config.base = '/prm.github.io/'
  }

  return config
})
