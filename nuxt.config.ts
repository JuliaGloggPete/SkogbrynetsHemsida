// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",

    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-icon",
  ],
  app: {
    head: {
      title: "Skogsbrynets Verkstad",
      meta: [
        { name: "description", content: "Fårull och handgjorda produkter" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
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
