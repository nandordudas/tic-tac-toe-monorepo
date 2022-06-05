import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  ssr: false,
  typescript: {
    shim: false,
    strict: true,
    typeCheck: 'build',
  },
})
