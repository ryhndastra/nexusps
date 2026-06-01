<script setup lang="ts">
import { computed, ref } from "vue";
import { assets } from "~/utils/assets";

interface TextStep {
  text: string;
  link?: string;
}

interface DownloadStep {
  kind: "download";
  text: string;
  href: string;
  buttonLabel: string;
  imageSrc?: string;
}

interface CopyStep {
  kind: "copy";
  text: string;
  value: string;
  buttonLabel: string;
}

type StepItem = string | TextStep | DownloadStep | CopyStep;

const hostsConfig = `185.117.3.234 growtopia1.com
185.117.3.234 growtopia2.com
185.117.3.234 www.growtopia1.com
185.117.3.234 www.growtopia2.com
185.117.3.234 growtopiagame.com`;

const platforms: Array<{
  label: string;
  icon: string;
  steps: StepItem[];
}> = [
  {
    label: "APK",
    icon: assets.logo,
    steps: [
      { text: "Uninstall Real Growtopia if you have it." },
      { text: "Restart your device (optional but recommended)." },
      {
        kind: "download",
        text: "Install the NexusPS APK.",
        href: "https://www.mediafire.com/file/cvivm9eto5vsqye/NexusPS.apk/file",
        buttonLabel: "Download App",
        imageSrc: assets.logo,
      },
      { text: "Open the app, and have fun!!" },
    ],
  },
  {
    label: "Windows",
    icon: assets.win,
    steps: [
      {
        kind: "copy",
        text: "Press Win+R → paste ",
        value: `C:\\Windows\\System32\\drivers\\etc`,
        buttonLabel: "Copy Path",
      },
      { text: "Open hosts with Notepad (Admin)." },
      {
        kind: "copy",
        text: "Copy these hosts entries into your hosts file:",
        value: hostsConfig,
        buttonLabel: "Copy Config",
      },
      { text: "Save → launch Growtopia" },
    ],
  },

  {
    label: "macOS",
    icon: assets.mac,
    steps: [
      {
        kind: "copy",
        text: "Finder → Go → Go to Folder → Type:",
        value: "/private/etc/hosts",
        buttonLabel: "Copy Path",
      },
      {
        kind: "copy",
        text: "Copy 'hosts' to Desktop → Add lines:",
        value: hostsConfig,
        buttonLabel: "Copy Config",
      },
      { text: "Save → Drag back to folder → Authenticate." },
    ],
  },

  {
    label: "HostsGo",
    icon: assets.hostsgo,
    steps: [
      { text: "Download Hosts Go (No Root)." },
      {
        kind: "download",
        text: "Download Hosts Go (Root).",
        href: "https://www.mediafire.com/file/ctly08te3i8rlwq",
        buttonLabel: "Download HostsGo",
        imageSrc: assets.hostsgo,
      },
      {
        text: "Open App → Hosts Editor → Enable Switch → Download Hosts File.",
      },
      {
        kind: "copy",
        text: "Enter this URL in the box:",
        value: "https://play.nexusps.site/android",
        buttonLabel: "Copy URL",
      },
      { text: "Apply → Start Protection (VPN) → Open Growtopia." },
    ],
  },

  {
    label: "PowerTunnel",
    icon: assets.ptun,
    steps: [
      {
        kind: "download",
        text: "Download PowerTunnel APK.",
        href: "https://android.izzysoft.de/repo/apk/io.github.krlvm.powertunnel.android",
        buttonLabel: "Download PowerTunnel",
        imageSrc: assets.ptun,
      },
      { text: "Open App → Menu (Plugin) → Hosts → Settings (Gear Icon)." },
      {
        kind: "copy",
        text: "Enter this URL in the box:",
        value: "https://play.nexusps.site/android",
        buttonLabel: "Copy URL",
      },
      { text: "Go Back → Click 'CONNECT' button → Open Growtopia." },
    ],
  },

  {
    label: "Surge",
    icon: assets.surge,
    steps: [
      {
        kind: "download",
        text: "Download Surge5.",
        href: "https://apps.apple.com/us/app/surge-5/id1442620678",
        buttonLabel: "Download Surge5",
        imageSrc: assets.surge,
      },
      {
        kind: "copy",
        text: "Open App → Import Profile via URL.",
        value: "https://play.nexusps.site/ios",
        buttonLabel: "Copy URL",
      },
      { text: "Allow VPN Configuration → Tap 'Start' → Open Growtopia." },
    ],
  },

  // {
  //   label: "Virtual",
  //   icon: assets.virtual,
  //   steps: [
  //     "Install virtual tunneling app.",
  //     "Import Nexus configuration.",
  //     "Enable VPN mode.",
  //     "Launch Growtopia.",
  //   ],
  // },
];

const activeTab = ref(platforms[0]!.label);

const activePlatform = computed(() =>
  platforms.find((p) => p.label === activeTab.value),
);

function setActiveTab(tab: string) {
  activeTab.value = tab;
}

function isDownloadStep(step: StepItem): step is DownloadStep {
  return (
    typeof step === "object" &&
    step !== null &&
    "kind" in step &&
    step.kind === "download"
  );
}

function isLinkStep(step: StepItem): step is TextStep {
  return typeof step === "object" && step !== null && "link" in step;
}

const copiedValue = ref<string | null>(null);
let copyResetTimer: number | undefined;

async function copyText(value: string) {
  if (!import.meta.client) {
    return;
  }

  await navigator.clipboard.writeText(value);

  copiedValue.value = value;

  if (copyResetTimer) {
    window.clearTimeout(copyResetTimer);
  }

  copyResetTimer = window.setTimeout(() => {
    copiedValue.value = null;
  }, 3000);
}

function isCopyStep(step: StepItem): step is CopyStep {
  return (
    typeof step === "object" &&
    step !== null &&
    "kind" in step &&
    step.kind === "copy"
  );
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
              :class="{
                'download-step-item': isDownloadStep(step),
                'copy-step-item': isCopyStep(step),
              }"
            >
              <div class="step-num">
                {{ index + 1 }}
              </div>

              <div class="step-content">
                <span class="step-text">
                  <template v-if="typeof step === 'object' && step !== null">
                    {{ step.text }}
                  </template>
                  <template v-else>
                    {{ step }}
                  </template>
                </span>

                <template v-if="isDownloadStep(step)">
                  <div class="download-box">
                    <div class="download-box__media">
                      <img
                        v-if="step.imageSrc"
                        :src="step.imageSrc"
                        alt="Download source"
                        class="download-box__image"
                      />

                      <div class="download-box__copy">
                        <p class="download-box__eyebrow">Download package</p>
                        <p class="download-box__title">{{ step.text }}</p>
                      </div>
                    </div>

                    <a
                      :href="step.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="download-box__button"
                    >
                      <svg
                        class="download-box__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 3v10" />
                        <path d="m8 11 4 4 4-4" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                      </svg>

                      <span>{{ step.buttonLabel }}</span>
                    </a>
                  </div>
                </template>

                <template v-else-if="isCopyStep(step)">
                  <div class="copy-box">
                    <div class="copy-box__content">
                      <p class="copy-box__eyebrow">Configuration URL</p>
                      <p class="copy-box__title">{{ step.text }}</p>

                      <div class="copy-box__field">
                        <code class="copy-box__value">{{ step.value }}</code>

                        <button
                          type="button"
                          class="copy-box__button"
                          @click="copyText(step.value)"
                        >
                          <svg
                            class="copy-box__icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path
                              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                            />
                          </svg>

                          <span>
                            {{
                              copiedValue === step.value
                                ? "Copied"
                                : step.buttonLabel
                            }}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </template>

                <template v-else-if="isLinkStep(step) && step.link">
                  <a
                    :href="step.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="step-link"
                  >
                    Open link
                  </a>
                </template>
              </div>
            </li>
          </ol>
        </div>
      </Transition>
    </div>
  </section>
</template>
