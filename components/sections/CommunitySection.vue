<script setup lang="ts">
import { computed, ref } from "vue";
import { assets } from "~/utils/assets";

const activeTab = ref<"discord" | "whatsapp">("discord");

const whatsappLink = "https://chat.whatsapp.com/YOUR_GROUP_LINK";

const isDiscord = computed(() => activeTab.value === "discord");
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
      <div class="max-w-4xl">
        <p class="mb-4 text-xs uppercase tracking-[0.35em] text-violet-300/70">
          Nexus Transmission
        </p>

        <h2
          class="text-[clamp(3rem,10vw,6.5rem)] font-black leading-[0.92] tracking-tight"
        >
          Connected Across
          <br />

          <span class="animated-gradient-text"> The Galaxy </span>
        </h2>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Explore the Nexus communication network and stay connected with
          explorers across the universe.
        </p>
      </div>

      <div
        class="mt-14 flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur-xl relative z-40"
      >
        <button
          @click="activeTab = 'discord'"
          class="rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-300"
          :class="
            activeTab === 'discord'
              ? 'bg-violet-500/80 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          "
        >
          Discord Hub
        </button>

        <button
          @click="activeTab = 'whatsapp'"
          class="rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-300"
          :class="
            activeTab === 'whatsapp'
              ? 'bg-emerald-500/80 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          "
        >
          WhatsApp Relay
        </button>
      </div>

      <div
        class="relative mt-24 flex min-h-[750px] w-full items-center justify-center"
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
            class="absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] w-full max-w-[1000px] flex justify-center"
            :class="
              isDiscord
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
                    <h3 class="mt-3 text-3xl font-black">Live Galaxy Chat</h3>
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
            class="absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] w-full max-w-[1000px] flex justify-center"
            :class="
              !isDiscord
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
                        WhatsApp Relay
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
