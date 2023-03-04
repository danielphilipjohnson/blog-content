// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/prismic"],
  // endpoint: 'your_repository_id'
  prismic: { endpoint: "sitemapnuxt3", preview: "/preview" },
});
