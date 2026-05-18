<script setup lang="ts">
import { Crown } from "lucide-vue-next";
import { assets } from "~/utils/assets";

const topPlayer = {
  name: "Aether",
  wls: "31,889,552",
};

const secondPlace = {
  name: "Nyxar",
  wls: "24,102,331",
};

const thirdPlace = {
  name: "Zenith",
  wls: "18,771,904",
};

const rankings = [
  { rank: "#04", name: "Lunaris", wls: "16,883,921" },
  { rank: "#05", name: "Cryon", wls: "12,119,021" },
  { rank: "#06", name: "Nebulon", wls: "10,773,842" },
  { rank: "#07", name: "Astrion", wls: "9,882,421" },
  { rank: "#08", name: "Veltrix", wls: "8,771,003" },
  { rank: "#09", name: "Kairo", wls: "7,119,554" },
  { rank: "#10", name: "Vortex", wls: "6,441,228" },
];
</script>

<template>
  <section id="leaderboard" class="relative overflow-hidden py-24 text-white sm:py-32 lg:py-40">
    <!-- transition -->
    <div
      class="absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#05010d]"
    />

    <!-- cosmic ambient -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_60%)]"
    />

    <div
      class="section-heavy-effect absolute left-1/2 top-[25%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]"
    />

    <!-- stars -->
    <div class="stars absolute inset-0 opacity-20" />

    <div class="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <!-- heading -->
      <div class="reveal-on-scroll">
        <div class="mb-14 sm:mb-20 lg:mb-28">
          <p class="mb-4 text-xs uppercase tracking-[0.26em] text-violet-300/60 sm:mb-5 sm:text-sm sm:tracking-[0.4em]">
            Nexus Hall Of Fame
          </p>

          <h2
            class="max-w-5xl text-[clamp(2.8rem,12vw,6rem)] font-black leading-[0.98] tracking-tight lg:text-8xl"
          >
            <span class="animated-gradient-text"> Richest </span>
            Players
          </h2>

          <p class="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
            The elite players controlling the Nexus economy.
          </p>
        </div>
      </div>

      <!-- TOP PLAYER -->
      <div class="reveal-on-scroll" style="--reveal-delay: 80ms">
        <div
          class="gold-glow relative overflow-hidden rounded-3xl border border-yellow-300/20 bg-white/[0.03] p-5 backdrop-blur-md sm:p-8 lg:rounded-[42px] lg:p-10 lg:backdrop-blur-2xl"
        >
          <!-- glow -->
          <div
            class="section-heavy-effect absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px]"
          />

          <!-- subtle inner ring -->
          <div
            class="absolute inset-0 rounded-[42px] ring-1 ring-inset ring-white/10"
          />

          <!-- lines -->
          <div class="leaderboard-grid absolute inset-0 opacity-[0.04]" />

          <div
            class="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_0.6fr] lg:gap-16"
          >
            <!-- LEFT -->
            <div>
              <div
                class="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2.5 backdrop-blur-xl sm:mb-8 sm:gap-4 sm:px-6 sm:py-3"
              >
                <Crown class="h-5 w-5 text-yellow-300" />

                <span
                  class="text-xs font-bold uppercase tracking-[0.16em] text-yellow-100 sm:text-sm sm:tracking-[0.25em]"
                >
                  #1 Richest Player
                </span>
              </div>
              <h3
                class="luxury-gold-text text-[clamp(3rem,16vw,6rem)] font-black tracking-tight lg:text-8xl"
              >
                {{ topPlayer.name }}
              </h3>
              <div
                class="mt-7 flex w-full max-w-full items-center gap-4 rounded-3xl border border-white/10 bg-black/30 px-4 py-4 backdrop-blur-xl sm:mt-10 sm:inline-flex sm:w-auto sm:gap-5 sm:px-7 sm:py-5"
              >
                <img
                  :src="assets.wls"
                  alt="WLS"
                  class="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
                  loading="lazy"
                  decoding="async"
                />

                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm sm:tracking-[0.25em]">
                    Total WLS
                  </p>

                  <p class="mt-1 break-all text-[clamp(1.7rem,8vw,3rem)] font-black text-yellow-100">
                    {{ topPlayer.wls }}
                  </p>
                </div>
              </div>
            </div>

            <!-- RIGHT -->
            <div class="space-y-6">
              <!-- #2 -->
              <div
                class="group rounded-3xl border border-zinc-300/10 bg-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:border-zinc-200/20 sm:p-7"
              >
                <div
                  class="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-zinc-400"
                >
                  #2
                </div>

                <div class="grid gap-4 sm:flex sm:items-center sm:justify-between">
                  <h4 class="text-3xl font-black sm:text-4xl">
                    {{ secondPlace.name }}
                  </h4>

                  <div
                    class="inline-flex w-fit max-w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <img
                      :src="assets.wls"
                      alt="WLS"
                      class="h-6 w-6 object-contain"
                      loading="lazy"
                      decoding="async"
                    />

                    <span class="break-all text-lg font-bold text-zinc-200 sm:text-xl">
                      {{ secondPlace.wls }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- #3 -->
              <div
                class="group rounded-3xl border border-orange-300/10 bg-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:border-orange-300/20 sm:p-7"
              >
                <div
                  class="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-orange-200/60"
                >
                  #3
                </div>

                <div class="grid gap-4 sm:flex sm:items-center sm:justify-between">
                  <h4 class="text-3xl font-black sm:text-4xl">
                    {{ thirdPlace.name }}
                  </h4>

                  <div
                    class="inline-flex w-fit max-w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <img
                      :src="assets.wls"
                      alt="WLS"
                      class="h-6 w-6 object-contain"
                      loading="lazy"
                      decoding="async"
                    />

                    <span class="break-all text-lg font-bold text-orange-100 sm:text-xl">
                      {{ thirdPlace.wls }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- lower rankings -->
      <div>
        <div
          class="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:mt-16 lg:mt-20 lg:rounded-[36px] lg:backdrop-blur-2xl"
        >
          <div
            v-for="(player, index) in rankings"
            :key="player.rank"
            class="group reveal-on-scroll relative grid gap-3 border-b border-white/5 px-5 py-5 transition duration-300 last:border-b-0 hover:bg-violet-500/[0.08] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-7"
            :style="{ '--reveal-delay': `${index * 55}ms` }"
          >
            <!-- hover line -->
            <div
              class="absolute left-0 top-0 h-full w-0.5 bg-violet-400 opacity-0 transition duration-300 group-hover:opacity-100"
            />

            <!-- left -->
            <div class="flex min-w-0 items-center gap-4 sm:gap-6">
              <span
                class="w-12 shrink-0 text-2xl font-black tracking-tight text-violet-300/40"
              >
                {{ player.rank }}
              </span>

              <span class="min-w-0 truncate text-2xl font-black tracking-tight sm:text-3xl">
                {{ player.name }}
              </span>
            </div>

            <!-- right -->
            <div
              class="inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 sm:px-5 sm:py-3"
            >
              <img
                :src="assets.wls"
                alt="WLS"
                class="h-5 w-5 shrink-0 object-contain"
                loading="lazy"
                decoding="async"
              />

              <span class="break-all font-bold text-zinc-200">
                {{ player.wls }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
