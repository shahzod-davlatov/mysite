// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
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
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  googleFonts: {
    families: {
      'Fira Code': '300..700',
    },
    preload: true,
  },
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@nuxtjs/google-fonts',
  ],
});
