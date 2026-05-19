<script setup lang="ts">
import { assets } from "~/utils/assets";
import { useServerStatus } from "~/composables/useServerStatus";

const { status, playerCount } = useServerStatus();
</script>

<template>
  <section
    id="home"
    class="relative min-h-svh overflow-hidden bg-[#05010d] text-white"
  >
    <!-- BACKGROUND -->
    <div class="absolute inset-0">
      <!-- image -->
      <img
        :src="assets.background"
        alt="Nexus Background"
        class="absolute inset-0 h-full w-full object-cover object-center opacity-45 sm:opacity-55"
        fetchpriority="high"
        decoding="async"
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
        class="hero-heavy-effect absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]"
      />

      <!-- left ambient -->
      <div
        class="hero-heavy-effect absolute left-[-120px] top-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]"
      />

      <!-- right ambient -->
      <div
        class="hero-heavy-effect absolute bottom-[-150px] right-[-120px] h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[140px]"
      />

      <!-- bottom fade -->
      <div
        class="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent to-[#05010d]"
      />
    </div>

    <!-- HERO -->
    <div
      class="relative z-10 mx-auto flex min-h-svh items-center px-5 pb-16 pt-28 sm:px-8 lg:max-w-7xl lg:px-12 lg:py-24"
    >
      <div class="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <!-- LEFT -->
        <div>
          <!-- badge -->
          <div class="reveal-on-scroll">
            <div
              class="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-violet-500/20 bg-black/30 px-4 py-2 backdrop-blur-md sm:mb-6 sm:px-5"
            >
              <div :class="[status === 'online' ? 'status-online-dot' : 'status-offline-dot', 'h-2.5 w-2.5 rounded-full']" />

              <span class="text-xs text-zinc-300 sm:text-sm">
                Server {{ status === 'online' ? 'Online' : 'Offline' }} • {{ playerCount }} Players
              </span>
            </div>
          </div>

          <!-- small text -->
          <div class="reveal-on-scroll" style="--reveal-delay: 80ms">
            <p
              class="mb-4 text-xs uppercase tracking-[0.24em] text-violet-300/70 sm:mb-5 sm:text-sm sm:tracking-[0.35em]"
            >
              Nexus Private Server
            </p>
          </div>

          <!-- title -->
          <div class="reveal-on-scroll" style="--reveal-delay: 160ms">
            <h1
              class="max-w-xl text-[clamp(2.7rem,12vw,4rem)] font-black leading-[1.02] sm:text-6xl lg:text-7xl"
            >
              Explore The

              <span class="animated-gradient-text"> Cosmic </span>

              Side Of Growtopia
            </h1>
          </div>

          <!-- desc -->
          <div class="reveal-on-scroll" style="--reveal-delay: 240ms">
            <p
              class="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg"
            >
              Enter an interdimensional Growtopia experience filled with custom
              systems, balanced progression, cosmic worlds, and a thriving
              competitive community.
            </p>
          </div>

          <!-- buttons -->
          <div class="reveal-on-scroll" style="--reveal-delay: 320ms">
            <div class="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
              <button
                class="rounded-2xl bg-violet-600 px-6 py-3.5 font-semibold transition duration-300 hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] sm:px-8 sm:py-4"
              >
                Start Playing
              </button>

              <button
                class="rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-zinc-200 backdrop-blur-md transition duration-300 hover:bg-white/10 sm:px-8 sm:py-4"
              >
                Join Discord
              </button>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="reveal-on-scroll" style="--reveal-delay: 240ms">
          <div
            class="relative mx-auto flex w-full max-w-[420px] items-center justify-center lg:max-w-none"
          >
            <!-- glow -->
            <div
              class="hero-heavy-effect absolute h-[320px] w-[320px] rounded-full bg-violet-600/20 blur-[80px] sm:h-[550px] sm:w-[550px] sm:blur-[120px]"
            />

            <!-- orbit ring -->
            <div
              class="absolute h-[min(78vw,600px)] w-[min(78vw,600px)] rounded-full border border-violet-400/10"
            />

            <div
              class="absolute h-[min(92vw,720px)] w-[min(92vw,720px)] rounded-full border border-violet-400/5"
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
              class="hero-logo relative z-10 w-full max-w-[700px] drop-shadow-[0_0_28px_rgba(139,92,246,0.38)] sm:drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
