<script setup lang="ts">
const features = [
  {
    number: "01",
    title: "Custom Economy",
    desc: "Balanced progression, useful rewards, and a trading flow built for long-term play.",
  },
  {
    number: "02",
    title: "Active Events",
    desc: "Fresh challenges and seasonal activities keep the server moving every week.",
  },
  {
    number: "03",
    title: "Stable Gameplay",
    desc: "Optimized systems, fair rules, and clean moderation for a smoother experience.",
  },
  {
    number: "04",
    title: "Community First",
    desc: "A friendly space for builders, traders, and competitive players to grow together.",
  },
];
</script>

<template>
  <section
    id="features"
    class="relative overflow-hidden px-0 py-24 text-white sm:py-32 lg:py-40"
  >
    <!-- TOP BLEND -->
    <div
      class="absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-[#05010d] via-[#05010d]/70 to-transparent"
    />

    <!-- GRID -->
    <div class="grid-bg absolute inset-0 opacity-40" />

    <!-- AMBIENT -->
    <div
      class="section-heavy-effect absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <!-- HEADING -->
      <div class="reveal-on-scroll">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-6 text-sm uppercase tracking-[0.4em] text-violet-300/60">
            Nexus Features
          </p>

          <h2 class="text-[clamp(2.35rem,10vw,4.5rem)] font-black leading-tight">
            Built For

            <span class="animated-gradient-text"> Players </span>
          </h2>

          <p class="mt-6 text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            sapiente ipsum totam eveniet voluptas quod maiores quos eaque
            distinctio temporibus?.
          </p>
        </div>
      </div>

      <!-- FEATURES -->
      <div class="mt-16 space-y-5 sm:mt-24 sm:space-y-7 lg:mt-32 lg:space-y-10">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="reveal-on-scroll"
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <div
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md smooth-transition hover:border-violet-400/20 hover:bg-violet-500/[0.04] sm:p-8 lg:rounded-[32px] lg:p-10 lg:backdrop-blur-xl"
          >
            <!-- glow -->
            <div
              class="absolute right-[-100px] top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-violet-500/10 opacity-0 blur-[100px] transition duration-500 group-hover:opacity-100"
            />

            <!-- CONTENT -->
            <div
              class="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
            >
              <!-- LEFT -->
              <div class="flex items-start gap-4 sm:gap-6">
                <!-- NUMBER -->
                <span
                  class="w-14 shrink-0 text-4xl font-black text-violet-400/30 transition duration-300 group-hover:text-violet-300 sm:w-auto sm:text-5xl"
                >
                  {{ feature.number }}
                </span>

                <!-- TEXT -->
                <div>
                  <h3
                    class="text-2xl font-bold transition duration-300 group-hover:text-violet-300 sm:text-3xl"
                  >
                    {{ feature.title }}
                  </h3>

                  <p class="mt-4 max-w-2xl leading-relaxed text-zinc-400">
                    {{ feature.desc }}
                  </p>
                </div>
              </div>

              <!-- RIGHT LINE -->
              <div
                class="h-[1px] w-0 bg-gradient-to-r from-violet-400 to-transparent transition-all duration-500 group-hover:w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
