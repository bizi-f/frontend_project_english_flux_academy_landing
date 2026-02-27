import path from 'path'
import { defineConfig } from 'vite'

const repoName = 'frontend_project_english_flux_academy_landing'
const isGithubPagesBuild = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGithubPagesBuild ? `/${repoName}/` : '/',
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
