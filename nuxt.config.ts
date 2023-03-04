// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/prismic", '@funken-studio/sitemap-nuxt-3'],
  // endpoint: 'your_repository_id'
  prismic: { endpoint: "sitemapnuxt3", preview: "/preview" },
});
