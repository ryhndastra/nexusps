<script setup lang="ts">
import {
  ArrowUpRight,
  CalendarDays,
  Gamepad2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-vue-next";

const highlights = [
  {
    value: "24/7",
    label: "server stability",
  },
  {
    value: "Weekly",
    label: "fresh events",
  },
  {
    value: "Easy",
    label: "multi-device setup",
  },
];

const features = [
  {
    number: "01",
    tag: "Gameplay",
    title: "Fast Login & Stable Sessions",
    desc: "Jump in quickly with a smoother login flow, fewer interruptions, and a server setup that feels reliable even during peak hours.",
    icon: ShieldCheck,
    span: "xl:col-span-6",
    glow: "from-violet-500/20 via-violet-500/10 to-transparent",
  },
  {
    number: "02",
    tag: "Content",
    title: "Custom Items & Worlds",
    desc: "Enjoy server-only items, themed worlds, and custom rewards that keep every run feeling fresh instead of repetitive.",
    icon: Sparkles,
    span: "xl:col-span-6",
    glow: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
  },
  {
    number: "03",
    tag: "Events",
    title: "Weekly Events & Seasonal Drops",
    desc: "From limited-time challenges to seasonal rewards, there is always something new to chase and something rare to collect.",
    icon: CalendarDays,
    span: "xl:col-span-4",
    glow: "from-cyan-500/20 via-violet-500/10 to-transparent",
  },
  {
    number: "04",
    tag: "Community",
    title: "Active Players & Helpful Staff",
    desc: "Trade, build, and grind with a friendly community while the team keeps updates, fixes, and moderation moving forward.",
    icon: Users,
    span: "xl:col-span-4",
    glow: "from-emerald-500/20 via-violet-500/10 to-transparent",
  },
  {
    number: "05",
    tag: "Setup",
    title: "Easy Play on Any Device",
    desc: "Follow clear setup guides for Android, Windows, macOS, and tunneling tools so you can start playing without hassle.",
    icon: Gamepad2,
    span: "xl:col-span-4",
    glow: "from-amber-500/20 via-violet-500/10 to-transparent",
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
        <div class="mx-auto max-w-4xl text-center">
          <p class="mb-6 text-sm uppercase tracking-[0.4em] text-violet-300/60">
            Nexus Features
          </p>

          <h2 class="text-[clamp(2.35rem,10vw,4.5rem)] font-black leading-tight">
            Built for

            <span class="animated-gradient-text"> Growtopia Players </span>
          </h2>

          <p class="mt-6 text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
            NexusPS is made for players who want fast access, fresh content,
            and a community that actually stays active after the first login.
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <div
              v-for="item in highlights"
              :key="item.label"
              class="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
            >
              <div class="flex items-center gap-3">
                <span class="text-sm font-bold uppercase tracking-[0.25em] text-white">
                  {{ item.value }}
                </span>
                <span class="text-sm text-zinc-400">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FEATURES -->
      <div
        class="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-6 xl:grid-cols-12 xl:auto-rows-[minmax(230px,auto)]"
      >
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="reveal-on-scroll feature-card group relative overflow-hidden"
          :class="[feature.span, index < 2 ? 'min-h-[300px]' : 'min-h-[260px]']"
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <!-- glow -->
          <div
            class="absolute inset-0 bg-gradient-to-br opacity-0 transition duration-500 group-hover:opacity-100"
            :class="feature.glow"
          />

          <!-- ambient orb -->
          <div
            class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-[110px] transition duration-500 group-hover:bg-violet-400/15"
          />

          <div
            class="relative z-10 flex h-full flex-col justify-between gap-8 p-6 sm:p-8 lg:p-9"
          >
            <!-- top row -->
            <div class="flex items-start justify-between gap-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.16)]"
              >
                <component :is="feature.icon" class="h-5 w-5" />
              </div>

              <span
                class="text-xs font-semibold uppercase tracking-[0.35em] text-white/30 transition duration-300 group-hover:text-white/45"
              >
                {{ feature.number }}
              </span>
            </div>

            <!-- copy -->
            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-violet-300/70">
                {{ feature.tag }}
              </p>

              <h3
                class="mt-3 text-[clamp(1.7rem,4vw,2.7rem)] font-black leading-tight text-white transition duration-300 group-hover:text-violet-100"
              >
                {{ feature.title }}
              </h3>

              <p class="mt-4 max-w-2xl leading-relaxed text-zinc-400">
                {{ feature.desc }}
              </p>
            </div>

            <!-- bottom -->
            <div
              class="flex items-center gap-2 text-sm font-medium text-violet-300/80 transition duration-300 group-hover:text-violet-200"
            >
              <span>Explore feature</span>
              <ArrowUpRight
                class="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
