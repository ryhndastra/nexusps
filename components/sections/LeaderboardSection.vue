<script setup lang="ts">
import { Motion } from "motion-v";
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
  <section id="leaderboard" class="relative overflow-hidden py-40 text-white">
    <!-- transition -->
    <div
      class="absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#05010d]"
    />

    <!-- cosmic ambient -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_60%)]"
    />

    <div
      class="absolute left-1/2 top-[25%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]"
    />

    <!-- stars -->
    <div class="stars absolute inset-0 opacity-20" />

    <div class="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
      <!-- heading -->
      <Motion
        :initial="{ opacity: 0, y: 40 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7 }"
        :viewport="{ once: true }"
      >
        <div class="mb-28">
          <p class="mb-5 text-sm uppercase tracking-[0.4em] text-violet-300/60">
            Nexus Hall Of Fame
          </p>

          <h2
            class="max-w-5xl text-6xl font-black leading-[0.95] tracking-tight lg:text-8xl"
          >
            <span class="animated-gradient-text"> Richest </span>
            Players
          </h2>

          <p class="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            The elite players controlling the Nexus economy.
          </p>
        </div>
      </Motion>

      <!-- TOP PLAYER -->
      <Motion
        :initial="{ opacity: 0, y: 80 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        :viewport="{ once: true }"
      >
        <div
          class="gold-glow relative overflow-hidden rounded-[42px] border border-yellow-300/20 bg-white/[0.03] p-10 backdrop-blur-2xl"
        >
          <!-- glow -->
          <div
            class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px]"
          />

          <!-- subtle inner ring -->
          <div
            class="absolute inset-0 rounded-[42px] ring-1 ring-inset ring-white/10"
          />

          <!-- lines -->
          <div class="leaderboard-grid absolute inset-0 opacity-[0.04]" />

          <div
            class="relative z-10 grid items-center gap-16 lg:grid-cols-[1fr_0.6fr]"
          >
            <!-- LEFT -->
            <div>
              <div
                class="mb-8 inline-flex items-center gap-4 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-6 py-3 backdrop-blur-xl"
              >
                <Crown class="h-5 w-5 text-yellow-300" />

                <span
                  class="text-sm font-bold uppercase tracking-[0.25em] text-yellow-100"
                >
                  #1 Richest Player
                </span>
              </div>
              <h3
                class="luxury-gold-text text-7xl font-black tracking-tight lg:text-8xl"
              >
                {{ topPlayer.name }}
              </h3>
              <div
                class="mt-10 inline-flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 px-7 py-5 backdrop-blur-xl"
              >
                <img
                  :src="assets.wls"
                  alt="WLS"
                  class="h-14 w-14 object-contain"
                />

                <div>
                  <p class="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Total WLS
                  </p>

                  <p class="mt-1 text-5xl font-black text-yellow-100">
                    {{ topPlayer.wls }}
                  </p>
                </div>
              </div>
            </div>

            <!-- RIGHT -->
            <div class="space-y-6">
              <!-- #2 -->
              <div
                class="group rounded-[30px] border border-zinc-300/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:border-zinc-200/20"
              >
                <div
                  class="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-zinc-400"
                >
                  #2
                </div>

                <div class="flex items-center justify-between">
                  <h4 class="text-4xl font-black">
                    {{ secondPlace.name }}
                  </h4>

                  <div
                    class="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <img
                      :src="assets.wls"
                      alt="WLS"
                      class="h-6 w-6 object-contain"
                    />

                    <span class="text-xl font-bold text-zinc-200">
                      {{ secondPlace.wls }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- #3 -->
              <div
                class="group rounded-[30px] border border-orange-300/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:border-orange-300/20"
              >
                <div
                  class="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-orange-200/60"
                >
                  #3
                </div>

                <div class="flex items-center justify-between">
                  <h4 class="text-4xl font-black">
                    {{ thirdPlace.name }}
                  </h4>

                  <div
                    class="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <img
                      :src="assets.wls"
                      alt="WLS"
                      class="h-6 w-6 object-contain"
                    />

                    <span class="text-xl font-bold text-orange-100">
                      {{ thirdPlace.wls }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion>

      <!-- lower rankings -->
      <Motion
        :initial="{ opacity: 0, y: 40 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, delay: 0.1 }"
        :viewport="{ once: true }"
      >
        <div
          class="mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
        >
          <div
            v-for="player in rankings"
            :key="player.rank"
            class="group relative flex items-center justify-between border-b border-white/5 px-7 py-5 transition duration-300 last:border-b-0 hover:bg-violet-500/[0.08]"
          >
            <!-- hover line -->
            <div
              class="absolute left-0 top-0 h-full w-0.5 bg-violet-400 opacity-0 transition duration-300 group-hover:opacity-100"
            />

            <!-- left -->
            <div class="flex items-center gap-6">
              <span
                class="text-2xl font-black tracking-tight text-violet-300/40"
              >
                {{ player.rank }}
              </span>

              <span class="text-3xl font-black tracking-tight">
                {{ player.name }}
              </span>
            </div>

            <!-- right -->
            <div
              class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-5 py-3"
            >
              <img :src="assets.wls" alt="WLS" class="h-5 w-5 object-contain" />

              <span class="font-bold text-zinc-200">
                {{ player.wls }}
              </span>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>
