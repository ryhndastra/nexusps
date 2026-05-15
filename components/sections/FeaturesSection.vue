<script setup lang="ts">
import { Motion } from "motion-v";

const features = [
  {
    number: "01",
    title: "blablablabla",
    desc: "stupid fucking nigger, got hairy ass and some shit",
  },
  {
    number: "02",
    title: "Your Mom",
    desc: "stupid fucking nigger, got hairy ass and some shit.",
  },
  {
    number: "03",
    title: "Your Dad",
    desc: "stupid fucking nigger, got hairy ass and some shit.",
  },
  {
    number: "04",
    title: "Your Sister",
    desc: "stupid fucking nigger, got hairy ass and some shit.",
  },
];
</script>

<template>
  <section
    id="features"
    class="relative overflow-hidden pt-40 pb-40 text-white"
  >
    <!-- TOP BLEND -->
    <div
      class="absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-[#05010d] via-[#05010d]/70 to-transparent"
    />

    <!-- GRID -->
    <div class="grid-bg absolute inset-0 opacity-40" />

    <!-- AMBIENT -->
    <div
      class="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
      <!-- HEADING -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        :viewport="{ once: true }"
      >
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-6 text-sm uppercase tracking-[0.4em] text-violet-300/60">
            Nexus Features
          </p>

          <h2 class="text-5xl font-black leading-tight lg:text-7xl">
            Built For

            <span class="animated-gradient-text"> Nigger </span>
          </h2>

          <p class="mt-8 text-lg leading-relaxed text-zinc-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            sapiente ipsum totam eveniet voluptas quod maiores quos eaque
            distinctio temporibus?.
          </p>
        </div>
      </Motion>

      <!-- FEATURES -->
      <div class="mt-32 space-y-10">
        <Motion
          v-for="(feature, index) in features"
          :key="feature.title"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.55,
            delay: index * 0.08,
          }"
          :viewport="{ once: true }"
        >
          <div
            class="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl smooth-transition hover:border-violet-400/20 hover:bg-violet-500/[0.04]"
          >
            <!-- glow -->
            <div
              class="absolute right-[-100px] top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-violet-500/10 opacity-0 blur-[100px] transition duration-500 group-hover:opacity-100"
            />

            <!-- CONTENT -->
            <div
              class="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
            >
              <!-- LEFT -->
              <div class="flex items-start gap-6">
                <!-- NUMBER -->
                <span
                  class="text-5xl font-black text-violet-400/30 transition duration-300 group-hover:text-violet-300"
                >
                  {{ feature.number }}
                </span>

                <!-- TEXT -->
                <div>
                  <h3
                    class="text-3xl font-bold transition duration-300 group-hover:text-violet-300"
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
        </Motion>
      </div>
    </div>
  </section>
</template>
