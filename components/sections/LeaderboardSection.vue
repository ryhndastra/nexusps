<script setup lang="ts">
import { computed, watch, nextTick } from "vue";
import { Crown } from "lucide-vue-next";

import { assets } from "~/utils/assets";
import { useLeaderboard } from "~/composables/useLeaderboard";

const { leaderboard, error, loading } = useLeaderboard();

const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

const topPlayer = computed(
  () => leaderboard.value[0] ?? { username: "—", score: 0 },
);

const secondPlace = computed(
  () => leaderboard.value[1] ?? { username: "—", score: 0 },
);

const thirdPlace = computed(
  () => leaderboard.value[2] ?? { username: "—", score: 0 },
);

const rankings = computed(() => {
  return leaderboard.value.slice(3, 10).map((entry, index) => ({
    rank: `#${index + 4}`,
    username: entry.username,
    score: entry.score,
  }));
});

// stagger reveal animation
watch(
  () => loading.value,
  async (isLoading) => {
    if (!isLoading) {
      await nextTick();

      const section = document.getElementById("leaderboard");

      if (!section) return;

      const elements = section.querySelectorAll(".reveal-on-scroll");

      elements.forEach((el, index) => {
        setTimeout(
          () => {
            el.classList.add("is-visible");
          },
          120 + index * 90,
        );
      });
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <section
    id="leaderboard"
    class="relative z-10 min-h-screen overflow-hidden py-24 text-white sm:py-32"
  >
    <!-- background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div class="space-y-12">
        <!-- heading -->
        <div class="reveal-on-scroll mb-16">
          <p
            class="mb-4 text-xs uppercase tracking-[0.35em] text-violet-300/60"
          >
            Nexus Hall Of Fame
          </p>

          <h2
            class="text-[clamp(3rem,10vw,6rem)] font-black leading-none tracking-tight"
          >
            <span class="animated-gradient-text"> Richest </span>

            Players
          </h2>

          <p class="mt-6 max-w-2xl text-lg text-zinc-400">
            The elite players controlling the Nexus economy.
          </p>
        </div>

        <!-- loading -->
        <div v-if="loading" class="py-20 text-center text-zinc-400">
          Loading leaderboard...
        </div>

        <!-- error -->
        <div v-else-if="error" class="py-20 text-center text-red-400">
          {{ error }}
        </div>

        <!-- content -->
        <template v-else>
          <!-- top card -->
          <div
            class="reveal-on-scroll relative overflow-hidden rounded-[36px] border border-yellow-300/20 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_70%)]"
            />

            <div class="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.6fr]">
              <!-- left -->
              <div>
                <div
                  class="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-5 py-3"
                >
                  <Crown class="h-5 w-5 text-yellow-300" />

                  <span
                    class="text-sm font-bold uppercase tracking-[0.2em] text-yellow-100"
                  >
                    #1 Richest Player
                  </span>
                </div>

                <h3
                  class="luxury-gold-text break-words text-[clamp(3rem,10vw,6rem)] font-black leading-none"
                >
                  {{ topPlayer.username }}
                </h3>

                <div
                  class="mt-8 inline-flex items-center gap-4 rounded-3xl border border-white/10 bg-black/30 px-6 py-5"
                >
                  <img
                    :src="assets.wls"
                    alt="WLS"
                    class="h-12 w-12 object-contain"
                  />

                  <div>
                    <p
                      class="text-xs uppercase tracking-[0.25em] text-zinc-500"
                    >
                      Total WLS
                    </p>

                    <p class="mt-1 text-4xl font-black text-yellow-100">
                      {{ formatNumber(topPlayer.score) }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- right -->
              <div class="space-y-5">
                <!-- second -->
                <div
                  class="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div
                    class="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-zinc-500"
                  >
                    #2
                  </div>

                  <div class="flex items-center justify-between gap-4">
                    <h4 class="text-3xl font-black">
                      {{ secondPlace.username }}
                    </h4>

                    <span class="text-xl font-bold text-zinc-200">
                      {{ formatNumber(secondPlace.score) }}
                    </span>
                  </div>
                </div>

                <!-- third -->
                <div
                  class="rounded-3xl border border-orange-300/10 bg-white/[0.03] p-6"
                >
                  <div
                    class="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-200/60"
                  >
                    #3
                  </div>

                  <div class="flex items-center justify-between gap-4">
                    <h4 class="text-3xl font-black">
                      {{ thirdPlace.username }}
                    </h4>

                    <span class="text-xl font-bold text-orange-100">
                      {{ formatNumber(thirdPlace.score) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- rankings -->
          <div
            class="mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <div
              v-for="(player, index) in rankings"
              :key="player.rank"
              class="reveal-on-scroll flex items-center justify-between border-b border-white/5 px-6 py-5 last:border-b-0"
              :style="{
                transitionDelay: `${220 + index * 90}ms`,
              }"
            >
              <div class="flex items-center gap-5">
                <span class="w-12 text-2xl font-black text-violet-300/40">
                  {{ player.rank }}
                </span>

                <span class="text-2xl font-black">
                  {{ player.username }}
                </span>
              </div>

              <div class="flex items-center gap-3">
                <img
                  :src="assets.wls"
                  alt="WLS"
                  class="h-5 w-5 object-contain"
                />

                <span class="font-bold text-zinc-200">
                  {{ formatNumber(player.score) }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
