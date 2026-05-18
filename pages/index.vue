<script setup lang="ts">
import SectionsHowToPlaySection from "~/components/sections/HowToPlaySection.vue";
</script>

<template>
  <main class="relative overflow-hidden bg-[#05010d] text-white">
    <SectionsHeroSection />

    <SectionsFeaturesSection />

    <SectionsLeaderboardSection />

    <SectionsHowToPlaySection />

    <section id="community" class="relative overflow-hidden py-24 text-white sm:py-32 lg:py-40">
      <div class="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div class="mb-14 sm:mb-20 lg:mb-28">
          <p class="mb-4 text-xs uppercase tracking-[0.26em] text-violet-300/60 sm:mb-5 sm:text-sm sm:tracking-[0.4em]">
            Nexus Community
          </p>

          <h2
            class="max-w-5xl text-[clamp(2.8rem,12vw,6rem)] font-black leading-[0.98] tracking-tight lg:text-8xl"
          >
            Join Our
            <span class="animated-gradient-text"> Community </span>
          </h2>

          <p class="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
            Connect with fellow players, share your creations, and participate in events.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
