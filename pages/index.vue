<script setup lang="ts"></script>

<template>
  <main class="relative overflow-hidden bg-[#05010d] text-white">
    <!-- GLOBAL BACKGROUND -->
    <div class="fixed inset-0 -z-10">
      <!-- image -->
      <img
        src="https://growtopia-login-nine.vercel.app/header/nexus_banner.png"
        alt="Background"
        class="h-full w-full object-cover object-center opacity-40"
      />

      <!-- dark blend -->
      <div class="absolute inset-0 bg-[#05010d]/75" />

      <!-- ambient purple -->
      <div
        class="absolute left-1/2 top-[20%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[180px]"
      />

      <!-- bottom fade -->
      <div
        class="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-[#05010d]"
      />
    </div>

    <!-- CONTENT -->
    <SectionsHeroSection />

    <SectionsFeaturesSection />

    <SectionsLeaderboardSection />
  </main>
</template>
