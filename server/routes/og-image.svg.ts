import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "~/utils/seo";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export default defineEventHandler((event) => {
  setHeader(event, "content-type", "image/svg+xml; charset=utf-8");
  setHeader(
    event,
    "cache-control",
    "public, max-age=86400, stale-while-revalidate=604800",
  );

  const title = escapeXml(SITE_NAME);
  const subtitle = escapeXml("Growtopia Private Server Launcher");
  const headline = escapeXml("Install, play, and setup with ease.");
  const description = escapeXml(SITE_DESCRIPTION);
  const tagLine = escapeXml("APK • Windows • macOS • HostsGo • PowerTunnel");
  const site = escapeXml("nexusps.site");
  const pageTitle = escapeXml(SITE_TITLE);

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">${pageTitle}</title>
  <desc id="desc">${description}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#05010d" />
      <stop offset="0.55" stop-color="#0b0518" />
      <stop offset="1" stop-color="#1b1030" />
    </linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1d1234" />
      <stop offset="1" stop-color="#090510" />
    </linearGradient>
    <linearGradient id="accent" x1="160" y1="120" x2="520" y2="470" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c084fc" />
      <stop offset="0.5" stop-color="#8b5cf6" />
      <stop offset="1" stop-color="#4f46e5" />
    </linearGradient>
    <radialGradient id="glow1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(920 110) rotate(130) scale(260 220)">
      <stop stop-color="#8b5cf6" stop-opacity="0.55" />
      <stop offset="1" stop-color="#8b5cf6" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 500) rotate(25) scale(250 180)">
      <stop stop-color="#38bdf8" stop-opacity="0.3" />
      <stop offset="1" stop-color="#38bdf8" stop-opacity="0" />
    </radialGradient>
    <filter id="shadow" x="0" y="0" width="1200" height="630" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <rect width="1200" height="630" fill="url(#glow1)" />
  <rect width="1200" height="630" fill="url(#glow2)" />

  <circle cx="1040" cy="90" r="120" fill="#8b5cf6" fill-opacity="0.12" />
  <circle cx="1085" cy="120" r="66" fill="#38bdf8" fill-opacity="0.14" />
  <circle cx="116" cy="490" r="110" fill="#8b5cf6" fill-opacity="0.1" />
  <circle cx="170" cy="530" r="52" fill="#38bdf8" fill-opacity="0.12" />

  <g filter="url(#shadow)">
    <rect x="74" y="72" width="1052" height="486" rx="36" fill="rgba(8,5,18,0.72)" stroke="rgba(139,92,246,0.16)" />

    <rect x="104" y="102" width="150" height="42" rx="21" fill="rgba(139,92,246,0.16)" stroke="rgba(196,181,253,0.18)" />
    <text x="179" y="130" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="0.18em" fill="#ddd6fe">${title}</text>

    <text x="106" y="198" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="0.12em" fill="#c4b5fd">${subtitle}</text>
    <text x="106" y="255" font-family="Inter, Arial, sans-serif" font-size="53" font-weight="800" fill="#ffffff">${headline}</text>
    <text x="106" y="303" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="500" fill="#cbd5e1">${description}</text>

    <g>
      <rect x="106" y="345" width="618" height="76" rx="22" fill="rgba(255,255,255,0.03)" stroke="rgba(139,92,246,0.2)" />
      <text x="138" y="394" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="25" font-weight="700" fill="#ddd6fe">${tagLine}</text>
    </g>

    <g>
      <rect x="106" y="446" width="336" height="72" rx="22" fill="url(#accent)" />
      <text x="274" y="492" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#ffffff">Download & Setup Guides</text>
    </g>

    <g>
      <rect x="478" y="446" width="246" height="72" rx="22" fill="rgba(15,23,42,0.72)" stroke="rgba(196,181,253,0.16)" />
      <text x="601" y="482" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#c4b5fd">${site}</text>
      <text x="601" y="503" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="500" fill="#94a3b8">nexusps.site</text>
    </g>

    <g>
      <rect x="780" y="128" width="276" height="340" rx="30" fill="url(#card)" stroke="rgba(139,92,246,0.24)" />
      <rect x="808" y="156" width="88" height="28" rx="14" fill="rgba(139,92,246,0.2)" />
      <text x="852" y="175" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" fill="#ddd6fe">Quick Start</text>

      <rect x="808" y="204" width="220" height="54" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <circle cx="836" cy="231" r="10" fill="#8b5cf6" />
      <text x="858" y="226" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#ffffff">APK Installer</text>
      <text x="858" y="245" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">Install the app and launch.</text>

      <rect x="808" y="270" width="220" height="54" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <circle cx="836" cy="297" r="10" fill="#38bdf8" />
      <text x="858" y="292" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Hosts Tools</text>
      <text x="858" y="311" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">Follow the configuration steps.</text>

      <rect x="808" y="336" width="220" height="54" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <circle cx="836" cy="363" r="10" fill="#c084fc" />
      <text x="858" y="358" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#ffffff">VPN Guides</text>
      <text x="858" y="377" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">Windows, macOS, and mobile.</text>

      <rect x="808" y="402" width="220" height="36" rx="18" fill="rgba(139,92,246,0.16)" />
      <text x="918" y="426" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700" fill="#ddd6fe">nexusps.site</text>
    </g>
  </g>
</svg>`;

  return svg;
});
