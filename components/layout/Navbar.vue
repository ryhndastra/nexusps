<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Motion } from "motion-v";
import { Menu, X } from "lucide-vue-next";
import { assets } from "~/utils/assets";

const navItems = ["Home", "Features", "Leaderboard", "Community"];

const mobileMenu = ref(false);

const showNavbar = ref(true);

let scrollTimeout: ReturnType<typeof setTimeout>;

const handleScroll = () => {
  showNavbar.value = false;

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    showNavbar.value = true;
  }, 140);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Motion
    :initial="{
      opacity: 0,
      y: -30,
    }"
    :animate="{
      opacity: showNavbar ? 1 : 0,
      y: showNavbar ? 0 : -120,
    }"
    :transition="{
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    }"
    class="fixed top-0 left-0 z-50 w-full"
  >
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

        <!-- DESKTOP LINKS -->
        <ul class="hidden items-center gap-8 md:flex">
          <li v-for="item in navItems" :key="item">
            <a
              href="#"
              class="relative text-sm font-medium text-zinc-400 transition duration-300 hover:text-white"
            >
              {{ item }}
            </a>
          </li>
        </ul>

        <!-- CTA -->
        <button
          class="hidden rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-violet-500 md:block"
        >
          Play
        </button>

        <!-- MOBILE BUTTON -->
        <button
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl md:hidden"
          @click="mobileMenu = !mobileMenu"
        >
          <Menu v-if="!mobileMenu" class="h-5 w-5" />

          <X v-else class="h-5 w-5" />
        </button>
      </nav>
    </div>

    <!-- MOBILE MENU -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="mobileMenu"
        class="mx-6 mt-4 rounded-[28px] border border-white/10 bg-black/40 p-6 backdrop-blur-2xl md:hidden"
      >
        <div class="flex flex-col gap-5">
          <a
            v-for="item in navItems"
            :key="item"
            href="#"
            class="text-lg font-medium text-zinc-300 transition hover:text-white"
            @click="mobileMenu = false"
          >
            {{ item }}
          </a>

          <button
            class="mt-2 rounded-2xl bg-violet-600 px-5 py-4 font-semibold text-white"
          >
            Play Now
          </button>
        </div>
      </div>
    </Transition>
  </Motion>
</template>
