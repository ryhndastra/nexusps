// https://nuxt.com/docs/api/configuration/nuxt-config
import { assets } from "./utils/assets";
import {
  DEFAULT_SITE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "./utils/seo";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: false,
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
      siteName: SITE_NAME,
      siteTitle: SITE_TITLE,
      siteDescription: SITE_DESCRIPTION,
      onlineStatusApiUrl: process.env.NUXT_PUBLIC_ONLINE_STATUS_API_URL || "",
      leaderboardApiUrl: process.env.NUXT_PUBLIC_LEADERBOARD_API_URL || "",
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "theme-color",
          content: "#8b5cf6",
        },
        {
          name: "application-name",
          content: SITE_NAME,
        },
        {
          name: "apple-mobile-web-app-title",
          content: SITE_NAME,
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: `/favicon.ico?v=3`,
        },
        {
          rel: "shortcut icon",
          type: "image/png",
          href: `/favicon.ico?v=3`,
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: `/favicon.ico?v=3`,
        },
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
