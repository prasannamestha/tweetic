import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-windicss", "@nuxtjs/proxy"],
  css: ["~~/assets/main.css"],
  build: {
    transpile: ["twitter-api-v2"],
  },
  runtimeConfig: {
    API_SECRET_KEY: process.env.API_SECRET_KEY,
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
})
