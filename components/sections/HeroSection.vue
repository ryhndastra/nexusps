<script setup lang="ts">
import { assets } from "~/utils/assets";
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden bg-[#05010d] text-white"
  >
    <!-- BACKGROUND -->
    <div class="absolute inset-0">
      <!-- image -->
      <img
        :src="assets.background"
        alt="Nexus Background"
        class="absolute inset-0 h-full w-full object-cover object-center opacity-55"
      />

      <!-- overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#05010d]/80 via-[#05010d]/40 to-[#05010d]/80"
      />

      <!-- stars -->
      <div
        class="absolute inset-0 opacity-[0.12]"
        style="
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 80px 80px;
        "
      />

      <!-- center glow -->
      <div
        class="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]"
      />

      <!-- left ambient -->
      <div
        class="absolute left-[-120px] top-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]"
      />

      <!-- right ambient -->
      <div
        class="absolute bottom-[-150px] right-[-120px] h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[140px]"
      />

      <!-- bottom fade -->
      <div
        class="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent to-[#05010d]"
      />
    </div>

    <!-- HERO -->
    <div
      class="relative z-10 mx-auto flex min-h-screen items-center px-8 pt-24 lg:max-w-7xl lg:px-12"
    >
      <div class="grid w-full items-center gap-20 lg:grid-cols-2">
        <!-- LEFT -->
        <div>
          <!-- badge -->
          <div
            class="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-black/30 px-5 py-2 backdrop-blur-md"
          >
            <div class="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span class="text-sm text-zinc-300">
              Server Online • 124 Players
            </span>
          </div>

          <!-- small text -->
          <p
            class="mb-5 text-sm uppercase tracking-[0.35em] text-violet-300/70"
          >
            Nexus Private Server
          </p>

          <!-- title -->
          <h1 class="max-w-xl text-6xl font-black leading-[1.02] lg:text-7xl">
            Explore The

            <span class="animated-gradient-text"> Cosmic </span>

            Side Of Growtopia
          </h1>

          <!-- desc -->
          <p class="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Enter an interdimensional Growtopia experience filled with custom
            systems, balanced progression, cosmic worlds, and a thriving
            competitive community.
          </p>

          <!-- buttons -->
          <div class="mt-10 flex flex-wrap gap-4">
            <button
              class="rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition duration-300 hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]"
            >
              Start Playing
            </button>

            <button
              class="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-zinc-200 backdrop-blur-md transition duration-300 hover:bg-white/10"
            >
              Join Discord
            </button>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="relative flex items-center justify-center">
          <!-- glow -->
          <div
            class="absolute h-[550px] w-[550px] rounded-full bg-violet-600/20 blur-[120px]"
          />

          <!-- orbit ring -->
          <div
            class="absolute h-[600px] w-[600px] rounded-full border border-violet-400/10"
          />

          <div
            class="absolute h-[720px] w-[720px] rounded-full border border-violet-400/5"
          />

          <!-- floating particles -->
          <div
            class="absolute left-[20%] top-[15%] h-3 w-3 rounded-full bg-violet-300 blur-sm"
          />

          <div
            class="absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-fuchsia-300 blur-sm"
          />

          <div
            class="absolute bottom-[20%] left-[25%] h-2 w-2 rounded-full bg-violet-200 blur-sm"
          />

          <!-- logo -->
          <img
            :src="assets.title"
            alt="Nexus"
            class="hero-logo relative z-10 w-full max-w-[700px] drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
