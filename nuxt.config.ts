// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: false,
  },

  runtimeConfig: {
    public: {
      onlineStatusApiUrl: process.env.NUXT_PUBLIC_ONLINE_STATUS_API_URL || "",
      leaderboardApiUrl: process.env.NUXT_PUBLIC_LEADERBOARD_API_URL || "",
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://growtopia-login-nine.vercel.app",
        },
        {
          rel: "dns-prefetch",
          href: "https://growtopia-login-nine.vercel.app",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],
});
