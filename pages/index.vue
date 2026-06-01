<script setup lang="ts">
import SectionsHowToPlaySection from "~/components/sections/HowToPlaySection.vue";
import { assets } from "~/utils/assets";
import {
  DEFAULT_SITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  getPageUrl,
  getSiteUrl,
} from "~/utils/seo";

const config = useRuntimeConfig();
const siteUrl = getSiteUrl(config.public.siteUrl || DEFAULT_SITE_URL);
const canonicalUrl = getPageUrl(siteUrl, "/");
const ogImageUrl = getPageUrl(siteUrl, "/og-image.svg");
const jsonLd = JSON.stringify(
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        alternateName: "NexusPS",
        description: SITE_DESCRIPTION,
        inLanguage: "en-US",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_NAME,
        alternateName: "NexusPS",
        url: siteUrl,
        logo: assets.logo,
        image: assets.banner,
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: canonicalUrl,
        name: SITE_TITLE,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: assets.banner,
        },
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#softwareapplication`,
        name: SITE_NAME,
        alternateName: "NexusPS",
        applicationCategory: "GameApplication",
        operatingSystem: "Android, Windows, macOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        url: canonicalUrl,
        description: SITE_DESCRIPTION,
        image: assets.banner,
        screenshot: assets.banner,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        featureList: [
          "APK installation guide",
          "Windows installation guide",
          "macOS installation guide",
          "Hosts configuration guide",
          "VPN tool setup guide",
        ],
      },
    ],
  },
  null,
  0,
);

useSeoMeta({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS.join(", "),
  author: SITE_NAME,
  publisher: SITE_NAME,
  ogLocale: "en_US",
  ogTitle: SITE_TITLE,
  ogDescription: SITE_DESCRIPTION,
  ogType: "website",
  ogSiteName: SITE_NAME,
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageAlt: `${SITE_NAME} share preview`,
  twitterCard: "summary_large_image",
  twitterTitle: SITE_TITLE,
  twitterDescription: SITE_DESCRIPTION,
  twitterImage: ogImageUrl,
  twitterImageAlt: `${SITE_NAME} share preview`,
  robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
});

useHead({
  meta: [
    {
      name: "referrer",
      content: "origin-when-cross-origin",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    {
      property: "og:image:type",
      content: "image/svg+xml",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
    },
  ],
  script: [
    {
      key: "nexus-jsonld",
      type: "application/ld+json",
      innerHTML: jsonLd,
      tagPosition: "head",
    },
  ],
});
</script>

<template>
  <main class="relative overflow-hidden bg-[#05010d] text-white">
    <SectionsHeroSection />
    <SectionsFeaturesSection />
    <SectionsLeaderboardSection />
    <SectionsHowToPlaySection />
    <SectionsCommunitySection />
    <SectionsFooterSection />
  </main>
</template>
