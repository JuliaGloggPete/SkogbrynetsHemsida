// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: "europe-west1",
        maxInstances: 3,
      },
    },
  },
});
