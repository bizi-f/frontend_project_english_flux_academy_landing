import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        notFound: path.resolve(__dirname, '404.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@/': `${path.resolve('src')}/`,
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})