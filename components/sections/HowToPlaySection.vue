<script setup lang="ts">
import { computed, ref } from "vue";
import { assets } from "~/utils/assets";

const platforms = [
  {
    label: "Windows",
    icon: assets.win,
    steps: [
      "Download the Nexus installer for Windows.",
      "Run the setup and complete installation.",
      "Launch Growtopia through Nexus.",
      "Login and start playing.",
    ],
  },

  {
    label: "macOS",
    icon: assets.mac,
    steps: [
      "Download the Nexus .dmg file for macOS.",
      "Open the .dmg and drag Nexus to Applications.",
      "Allow permissions if prompted.",
      "Open Nexus and login.",
    ],
  },

  {
    label: "HostsGo",
    icon: assets.hostsgo,
    steps: [
      "Install HostsGo from App Store.",
      "Import Nexus hosts configuration.",
      "Enable the hosts profile.",
      "Launch Growtopia normally.",
    ],
  },

  {
    label: "PTUN",
    icon: assets.ptun,
    steps: [
      "Install PTUN on your device.",
      "Import Nexus PTUN profile.",
      "Enable the tunnel.",
      "Connect and play.",
    ],
  },

  {
    label: "Surge",
    icon: assets.surge,
    steps: [
      "Install Surge application.",
      "Add Nexus configuration.",
      "Enable routing profile.",
      "Launch the game.",
    ],
  },

  {
    label: "Virtual",
    icon: assets.virtual,
    steps: [
      "Install virtual tunneling app.",
      "Import Nexus configuration.",
      "Enable VPN mode.",
      "Launch Growtopia.",
    ],
  },
];

const activeTab = ref(platforms[0]!.label);

const activePlatform = computed(() =>
  platforms.find((p) => p.label === activeTab.value),
);

function setActiveTab(tab: string) {
  activeTab.value = tab;
}
</script>

<template>
  <section id="tutorial" class="tutorial-section">
    <!-- STARS -->
    <div class="stars-layer">
      <span
        v-for="n in 40"
        :key="n"
        class="star"
        :style="{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 4 + 3}s`,
          animationDelay: `${Math.random() * 3}s`,
        }"
      />
    </div>

    <!-- GLOWS -->
    <div class="nebula-glow glow-1" />
    <div class="nebula-glow glow-2" />
    <div class="nebula-glow glow-3" />

    <!-- ORBIT RINGS -->
    <div class="orbit-ring ring-1" />
    <div class="orbit-ring ring-2" />

    <div class="content-wrapper">
      <!-- HEADER -->
      <div class="header-row">
        <!-- LOGO -->
        <div class="logo-mark">
          <img :src="assets.logo" alt="Nexus" class="logo-inner" />
        </div>

        <!-- DIVIDER -->
        <div class="divider-line" />

        <!-- TITLE -->
        <div>
          <h2 class="animated-gradient-text brand-name">Nexus</h2>

          <p class="brand-sub">Installation Tutorial</p>
        </div>
      </div>

      <!-- TABS -->
      <div class="tabs-container">
        <div class="tabs-row">
          <button
            v-for="platform in platforms"
            :key="platform.label"
            class="tab-btn"
            :class="{
              active: activeTab === platform.label,
            }"
            @click="setActiveTab(platform.label)"
          >
            <div class="tab-icon">
              <img :src="platform.icon" alt="Platform" class="tab-icon" />
            </div>

            <span>
              {{ platform.label }}
            </span>
          </button>
        </div>
      </div>

      <!-- PANEL -->
      <Transition name="panel-fade" mode="out-in">
        <div :key="activeTab" class="content-panel mt-8">
          <!-- HEADER -->
          <div class="panel-header">
            <div class="panel-icon-wrap">
              <img
                :src="activePlatform?.icon"
                alt="Platform"
                class="panel-icon-img"
              />
            </div>

            <div>
              <p class="brand-sub">Platform Guide</p>

              <h3 class="panel-title">
                {{ activePlatform?.label }} Installation
              </h3>
            </div>
          </div>

          <!-- STEPS -->
          <ol class="steps-list">
            <li
              v-for="(step, index) in activePlatform?.steps"
              :key="index"
              class="step-item"
            >
              <div class="step-num">
                {{ index + 1 }}
              </div>

              <span>
                {{ step }}
              </span>
            </li>
          </ol>
        </div>
      </Transition>
    </div>
  </section>
</template>
