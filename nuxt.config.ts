// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  typescript: {
    typeCheck: 'build',
    strict: true,
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  googleFonts: {
    families: {
      'Fira Code': '300..700',
    },
    preload: true,
  },
  content: {
    markdown: {},
    highlight: {
      theme: 'github-dark',
      langs: ['ts', 'vue'],
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    '@nuxt/content',
  ],
});
