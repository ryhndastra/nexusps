<script setup lang="ts">
import { assets } from "~/utils/assets";
</script>

<template>
  <footer
    class="relative overflow-hidden border-t border-violet-500/10 bg-[#05010d] text-white"
  >
    <!-- background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          class="animate-glow h-[500px] w-[500px] rounded-full bg-violet-500/[0.18] blur-[120px]"
        />
      </div>

      <!-- ── ORBIT SYSTEM ── -->
      <div
        class="absolute top-1/2 -translate-y-1/2"
        style="right: 60px; width: 280px; height: 280px"
      >
        <!-- glow backdrop supaya orbit keliatan menembus vignette -->
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style="
            width: 260px;
            height: 260px;
            background: radial-gradient(
              circle,
              rgba(100, 60, 220, 0.2) 0%,
              transparent 70%
            );
          "
        />

        <!-- orbit path rings -->
        <div
          class="absolute left-1/2 top-1/2 rounded-full"
          style="
            width: 164px;
            height: 164px;
            border: 1.5px solid rgba(139, 92, 246, 0.28);
            transform: translate(-50%, -50%) rotateX(65deg);
          "
        />
        <div
          class="absolute left-1/2 top-1/2 rounded-full"
          style="
            width: 224px;
            height: 224px;
            border: 1px solid rgba(139, 92, 246, 0.16);
            transform: translate(-50%, -50%) rotateX(65deg);
          "
        />
        <div
          class="absolute left-1/2 top-1/2 rounded-full"
          style="
            width: 268px;
            height: 268px;
            border: 1px solid rgba(139, 92, 246, 0.1);
            transform: translate(-50%, -50%) rotateX(65deg);
          "
        />

        <!-- planet decorative rings -->
        <div
          class="absolute left-1/2 top-1/2 rounded-full"
          style="
            width: 150px;
            height: 30px;
            border: 2px solid rgba(167, 139, 250, 0.45);
            box-shadow: 0 0 12px rgba(167, 139, 250, 0.3);
            transform: translate(-50%, -50%) rotateX(72deg) rotateZ(-12deg);
            z-index: 3;
          "
        />
        <div
          class="absolute left-1/2 top-1/2 rounded-full"
          style="
            width: 128px;
            height: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%) rotateX(72deg) rotateZ(-12deg);
            z-index: 3;
          "
        />

        <!-- central planet -->
        <div
          class="animate-float absolute left-1/2 top-1/2 rounded-full"
          style="
            width: 90px;
            height: 90px;
            transform: translate(-50%, -50%);
            background: radial-gradient(
              circle at 38% 35%,
              rgba(220, 190, 255, 0.8),
              rgba(139, 92, 246, 0.7) 35%,
              rgba(80, 30, 160, 0.85) 70%,
              rgba(20, 8, 60, 0.95)
            );
            box-shadow:
              inset -14px -10px 28px rgba(0, 0, 0, 0.6),
              inset 8px 6px 16px rgba(210, 180, 255, 0.3),
              0 0 50px rgba(139, 92, 246, 0.55),
              0 0 90px rgba(139, 92, 246, 0.25);
            z-index: 4;
          "
        />

        <!-- moon 1 – violet, inner orbit 82px, 5s -->
        <div
          class="animate-orbit-1 absolute left-1/2 top-1/2"
          style="width: 0; height: 0; transform-origin: 0 0"
        >
          <div
            class="absolute rounded-full"
            style="
              width: 14px;
              height: 14px;
              left: 82px;
              top: 0;
              transform: translate(-50%, -50%);
              background: radial-gradient(circle at 35% 30%, #e8d5ff, #7c3aed);
              box-shadow:
                0 0 12px rgba(167, 139, 250, 0.9),
                0 0 24px rgba(139, 92, 246, 0.5);
              z-index: 6;
            "
          />
        </div>

        <!-- moon 2 – cyan, mid orbit 112px, 9s -->
        <div
          class="animate-orbit-2 absolute left-1/2 top-1/2"
          style="width: 0; height: 0; transform-origin: 0 0"
        >
          <div
            class="absolute rounded-full"
            style="
              width: 10px;
              height: 10px;
              left: 112px;
              top: 0;
              transform: translate(-50%, -50%);
              background: radial-gradient(circle at 35% 30%, #cffafe, #0891b2);
              box-shadow:
                0 0 10px rgba(103, 232, 249, 0.9),
                0 0 20px rgba(6, 182, 212, 0.5);
              z-index: 6;
            "
          />
        </div>

        <!-- moon 3 – amber, outer orbit 133px, 13s reverse -->
        <div
          class="animate-orbit-3 absolute left-1/2 top-1/2"
          style="width: 0; height: 0; transform-origin: 0 0"
        >
          <div
            class="absolute rounded-full"
            style="
              width: 12px;
              height: 12px;
              left: 133px;
              top: 0;
              transform: translate(-50%, -50%);
              background: radial-gradient(circle at 35% 30%, #fef3c7, #d97706);
              box-shadow:
                0 0 10px rgba(251, 191, 36, 0.9),
                0 0 22px rgba(245, 158, 11, 0.5);
              z-index: 6;
            "
          />
        </div>
      </div>
      <!-- ── END ORBIT SYSTEM ── -->

      <!-- stars -->
      <div
        class="absolute left-[7%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-white/80 shadow-[0_0_10px_white]"
      />
      <div
        class="absolute left-[17%] top-[68%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300 shadow-[0_0_12px_rgba(167,139,250,0.9)]"
        style="animation-delay: 0.6s"
      />
      <div
        class="absolute left-[32%] top-[32%] h-1 w-1 animate-pulse rounded-full bg-white/50"
        style="animation-delay: 1.2s"
      />
      <div
        class="absolute left-[44%] top-[78%] h-1 w-1 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]"
        style="animation-delay: 1.8s"
      />
      <div
        class="absolute left-[60%] top-[12%] h-1 w-1 animate-pulse rounded-full bg-white/60"
        style="animation-delay: 0.4s"
      />

      <!-- vignette lebih ringan supaya orbit tidak tertutup -->
      <div
        class="absolute inset-0"
        style="
          background: radial-gradient(
            ellipse 120% 100% at center,
            transparent 30%,
            rgba(0, 0, 0, 0.55) 75%
          );
        "
      />
    </div>

    <!-- content -->
    <div
      class="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-10 text-center sm:px-6 md:py-14"
    >
      <!-- logo -->
      <div class="relative mt-2">
        <div class="absolute inset-0 scale-125 bg-violet-500/20 blur-[32px]" />
        <img
          :src="assets.header"
          alt="Nexus Logo"
          class="relative z-10 w-[240px] object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.45)] sm:w-[320px] md:w-[380px]"
        />
      </div>

      <!-- subtitle -->
      <p
        class="mt-4 max-w-lg px-2 text-xs leading-relaxed text-zinc-400 sm:text-sm md:mt-6"
      >
        Explore the cosmic side of Growtopia with immersive progression,
        interstellar adventures, and a thriving Nexus community.
      </p>

      <!-- socials -->
      <div class="mt-6 flex items-center gap-3 sm:gap-4 md:mt-8">
        <a
          href="#"
          class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/12 sm:h-14 sm:w-14"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          />
          <svg
            class="relative z-10 h-5 w-5 text-zinc-400 transition group-hover:text-violet-300 sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.04.106c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/12 sm:h-14 sm:w-14"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          />
          <svg
            class="relative z-10 h-5 w-5 text-zinc-400 transition group-hover:text-emerald-300 sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19.05 4.91A9.82 9.82 0 0012.03 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.5 1.34 5.03L2 22l5.12-1.34A9.94 9.94 0 0012.03 22C17.54 22 22.02 17.52 22.02 12c0-2.65-1.03-5.14-2.97-7.09z"
            />
          </svg>
        </a>
      </div>

      <!-- divider -->
      <div
        class="mt-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent sm:w-28 md:mt-8"
      />

      <!-- copyright -->
      <div class="mt-5 space-y-1.5 md:mt-6 md:space-y-2">
        <p class="text-xs text-zinc-500 sm:text-sm">
          © 2026 Nexus Private Server. All rights reserved.
        </p>
        <p
          class="text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:text-xs sm:tracking-[0.25em]"
        >
          Explore Beyond The Cosmos
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-glow {
  animation: pulse-glow 8s ease-in-out infinite;
}
.animate-orbit-1 {
  animation: orbit 5s linear infinite;
}
.animate-orbit-2 {
  animation: orbit 9s linear infinite;
}
.animate-orbit-3 {
  animation: orbit 13s linear infinite reverse;
}

@keyframes float {
  0%,
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-12px);
  }
}
@keyframes pulse-glow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}
@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
