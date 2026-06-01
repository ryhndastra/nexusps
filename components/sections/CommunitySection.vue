<script setup lang="ts">
import { computed, ref } from "vue";
import { assets } from "~/utils/assets";

const activeTab = ref<"discord" | "whatsapp">("discord");

const whatsappLink = "https://chat.whatsapp.com/C3sRvriWkIkCmIoNFqtVBp";
</script>

<template>
  <section id="community" class="relative overflow-hidden py-32 text-white">
    <div class="absolute inset-0">
      <img
        :src="assets.banner"
        alt="Community Background"
        class="h-full w-full object-cover opacity-60"
      />

      <div
        class="absolute inset-0 bg-gradient-to-b from-[#04010b]/50 via-[#05010d]/80 to-[#05010d]"
      />

      <div
        class="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]"
      />

      <div
        class="absolute bottom-[5%] right-[5%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-[120px]"
      />

      <div class="stars absolute inset-0 opacity-40" />

      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-25"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
      <div class="relative max-w-4xl">
        <!-- Decorative background elements -->
        <div class="absolute inset-0 -z-10 pointer-events-none">
          <div
            class="absolute left-[-10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[80px]"
            x
          />
          <div
            class="absolute right-[-10%] bottom-[-20%] h-[250px] w-[250px] rounded-full bg-emerald-500/10 blur-[60px]"
          />
        </div>

        <!-- Glassmorphism card for header -->
        <div
          class="relative z-10 flex items-center justify-between gap-6 px-6 lg:px-0"
        >
          <div class="flex-1 space-y-3">
            <p
              class="mb-1 text-xs uppercase tracking-[0.35em] text-violet-300/70"
            >
              Nexus Transmission
            </p>

            <h2
              class="text-[clamp(2.5rem,8vw,4.5rem)] font-black leading-[0.9] tracking-tight"
            >
              Connected Across
              <br />

              <span class="animated-gradient-text"> The Galaxy </span>
            </h2>

            <p class="max-w-[360px] text-sm leading-relaxed text-zinc-300">
              Explore the Nexus communication network and stay connected with
              explorers across the universe.
            </p>
          </div>

          <div
            class="flex-shrink-0 h-[240px] w-[3px] bg-gradient-to-t from-violet-500/30 to-transparent rounded-full"
          />
        </div>
      </div>

      <!-- COSMIC TABS -->
      <div class="relative z-40 mt-12 flex items-center justify-center gap-5">
        <!-- Discord -->
        <button
          @click="activeTab = 'discord'"
          class="group relative w-full max-w-[320px] overflow-hidden rounded-[30px] border px-6 py-5 transition-all duration-500"
          :class="
            activeTab === 'discord'
              ? 'border-violet-400/25 bg-black/60 shadow-[0_0_40px_rgba(139,92,246,0.22)] backdrop-blur-2xl'
              : 'border-transparent opacity-70 bg-black/25 backdrop-blur-xl hover:border-violet-400/10 hover:bg-black/35'
          "
        >
          <!-- glow -->
          <div
            v-if="activeTab === 'discord'"
            class="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent"
          />

          <!-- orbit -->
          <div
            class="absolute right-[-20px] top-[-20px] h-[90px] w-[90px] rounded-full border border-violet-400/10"
          />

          <div class="relative z-10 flex items-center gap-4">
            <!-- icon -->
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/15"
            >
              <svg
                class="h-6 w-6 text-violet-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.04.106c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.418 0-1.333.955-2.418 2.157-2.418 1.21 0 2.166 1.094 2.157 2.418 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.418 0-1.333.955-2.418 2.157-2.418 1.21 0 2.166 1.094 2.157 2.418 0 1.333-.947 2.418-2.157 2.418z"
                />
              </svg>
            </div>

            <!-- text -->
            <div class="text-left">
              <p
                class="text-xs uppercase tracking-[0.28em]"
                :class="
                  activeTab === 'discord'
                    ? 'text-violet-300/70'
                    : 'text-zinc-500'
                "
              >
                Community Hub
              </p>

              <h3 class="mt-1 text-lg font-bold text-white">Discord</h3>
            </div>
          </div>
        </button>

        <!-- WhatsApp -->
        <button
          @click="activeTab = 'whatsapp'"
          class="group relative w-full max-w-[320px] overflow-hidden rounded-[30px] border px-6 py-5 transition-all duration-500"
          :class="
            activeTab === 'whatsapp'
              ? 'border-emerald-400/25 bg-black/60 shadow-[0_0_40px_rgba(16,185,129,0.22)] backdrop-blur-2xl'
              : 'border-transparent opacity-70 bg-black/25 backdrop-blur-xl hover:border-emerald-400/10 hover:bg-black/35'
          "
        >
          <!-- glow -->
          <div
            v-if="activeTab === 'whatsapp'"
            class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"
          />

          <!-- orbit -->
          <div
            class="absolute right-[-20px] top-[-20px] h-[90px] w-[90px] rounded-full border border-emerald-400/10"
          />

          <div class="relative z-10 flex items-center gap-4">
            <!-- icon -->
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-500/15"
            >
              <svg
                class="h-6 w-6 text-emerald-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.05 4.91A9.82 9.82 0 0012.03 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.5 1.34 5.03L2 22l5.12-1.34A9.94 9.94 0 0012.03 22C17.54 22 22.02 17.52 22.02 12c0-2.65-1.03-5.14-2.97-7.09zm-7.02 15.4c-1.52 0-3-.41-4.3-1.18l-.31-.18-3.04.8.81-2.96-.2-.3A8.16 8.16 0 013.87 12c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.22.85 5.76 2.39A8.1 8.1 0 0120.18 12c0 4.5-3.66 8.16-8.15 8.16zm4.47-6.1c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.2-1.41-1.34-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z"
                />
              </svg>
            </div>

            <!-- text -->
            <div class="text-left">
              <p
                class="text-xs uppercase tracking-[0.28em]"
                :class="
                  activeTab === 'whatsapp'
                    ? 'text-emerald-300/70'
                    : 'text-zinc-500'
                "
              >
                Whatsapp Group
              </p>

              <h3 class="mt-1 text-lg font-bold text-white">WhatsApp</h3>
            </div>
          </div>
        </button>
      </div>

      <div
        class="relative mt-2 flex min-h-[750px] w-full items-center justify-center"
        style="perspective: 2500px"
      >
        <div
          class="relative flex items-center justify-center w-full h-full"
          style="
            transform-style: preserve-3d;
            transform: translateZ(-400px) rotateX(-8deg);
          "
        >
          <div
            class="absolute flex items-center justify-center pointer-events-none opacity-40"
            style="transform: rotateX(90deg)"
          >
            <div
              class="absolute h-[800px] w-[800px] animate-[spin_60s_linear_infinite] rounded-full border-[2px] border-dashed border-violet-400/30 shadow-[0_0_40px_rgba(139,92,246,0.1)]"
            />
            <div
              class="absolute h-[1200px] w-[1200px] animate-[spin_40s_linear_infinite_reverse] rounded-full border border-fuchsia-400/20 shadow-[0_0_50px_rgba(217,70,239,0.05)]"
            />
          </div>

          <div
            class="absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] w-full max-w-[1200px] flex justify-center"
            :class="
              activeTab === 'discord'
                ? 'z-30 opacity-100 [transform:rotateY(0deg)_translateZ(400px)_rotateY(0deg)]'
                : 'z-10 opacity-20 pointer-events-none [transform:rotateY(-180deg)_translateZ(400px)_rotateY(180deg)]'
            "
            style="transform-style: preserve-3d"
          >
            <div class="animate-hover-float w-full">
              <div
                class="relative w-full h-[640px] overflow-hidden rounded-[40px] border border-violet-400/20 bg-black/60 backdrop-blur-3xl shadow-[0_0_80px_rgba(139,92,246,0.2)]"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-transparent to-transparent pointer-events-none"
                />
                <div
                  class="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10 pointer-events-none"
                />

                <div class="relative z-10 p-8 h-full flex flex-col">
                  <div class="mb-8">
                    <p
                      class="text-xs uppercase tracking-[0.3em] text-violet-300/70"
                    >
                      Discord Hub
                    </p>
                    <h3 class="mt-3 text-3xl font-black">Discord Server</h3>
                  </div>

                  <iframe
                    src="https://discord.com/widget?id=1502982894212349992&theme=dark"
                    width="100%"
                    height="100%"
                    allowtransparency="true"
                    frameborder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    class="rounded-[28px] border border-white/10 bg-black/50 flex-grow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] w-full max-w-[1200px] flex justify-center"
            :class="
              activeTab === 'whatsapp'
                ? 'z-30 opacity-100 [transform:rotateY(0deg)_translateZ(400px)_rotateY(0deg)]'
                : 'z-10 opacity-20 pointer-events-none [transform:rotateY(180deg)_translateZ(400px)_rotateY(-180deg)]'
            "
            style="transform-style: preserve-3d"
          >
            <div class="animate-hover-float-delayed w-full">
              <div
                class="relative flex w-full h-[640px] flex-col justify-between overflow-hidden rounded-[40px] border border-emerald-400/20 bg-black/60 p-10 backdrop-blur-3xl shadow-[0_0_80px_rgba(16,185,129,0.2)]"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-transparent pointer-events-none"
                />
                <div
                  class="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10 pointer-events-none"
                />

                <div
                  class="absolute right-[-50px] top-[-50px] h-[300px] w-[300px] rounded-full bg-emerald-500/15 blur-[100px] pointer-events-none"
                />

                <div class="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div>
                      <p
                        class="text-xs uppercase tracking-[0.3em] text-emerald-300/70"
                      >
                        WhatsApp Group
                      </p>
                      <h3 class="mt-3 text-4xl font-black leading-tight">
                        Instant Updates
                      </h3>
                    </div>

                    <p
                      class="mt-8 text-lg leading-relaxed text-zinc-300 max-w-2xl"
                    >
                      Stay synchronized with announcements, maintenance alerts,
                      community activity, and live Nexus updates directly on
                      your device.
                    </p>

                    <div class="mt-12 grid grid-cols-2 gap-4">
                      <div
                        class="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-md"
                      >
                        <p class="text-emerald-400 text-xs mb-1">01</p>
                        Server Announcements
                      </div>
                      <div
                        class="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-md"
                      >
                        <p class="text-emerald-400 text-xs mb-1">02</p>
                        Event Notifications
                      </div>
                      <div
                        class="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-md"
                      >
                        <p class="text-emerald-400 text-xs mb-1">03</p>
                        Maintenance Updates
                      </div>
                      <div
                        class="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-md"
                      >
                        <p class="text-emerald-400 text-xs mb-1">04</p>
                        Community Discussions
                      </div>
                    </div>
                  </div>

                  <a
                    :href="whatsappLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-10 w-full flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-5 text-base font-bold text-white transition duration-300 hover:scale-[1.02] hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                  >
                    Join WhatsApp Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes hover-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-hover-float {
  animation: hover-float 8s ease-in-out infinite;
}

.animate-hover-float-delayed {
  animation: hover-float 8s ease-in-out infinite;
  animation-delay: -4s;
}
</style>
