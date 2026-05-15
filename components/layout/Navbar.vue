<script setup lang="ts">
import { assets } from "~/utils/assets";

const navItems = ["Home", "Features", "Leaderboard", "Community"];
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <div class="mx-auto flex justify-center pt-6">
      <nav
        class="flex h-16 items-center gap-10 rounded-full border border-white/10 bg-black/30 px-6 backdrop-blur-2xl"
      >
        <!-- LOGO -->
        <img
          :src="assets.logo"
          alt="Nexus"
          class="h-9 object-contain opacity-90"
        />

        <!-- LINKS -->
        <ul class="hidden items-center gap-8 md:flex">
          <li v-for="item in navItems" :key="item">
            <a
              href="#"
              class="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {{ item }}
            </a>
          </li>
        </ul>

        <!-- CTA -->
        <button
          class="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Play
        </button>
      </nav>
    </div>
  </header>
</template>
