export const SITE_NAME = "NexusPS";
export const SITE_TITLE = "NexusPS | Growtopia Private Server Launcher & Setup Guides";
export const SITE_DESCRIPTION =
  "Download, install, and play NexusPS, a Growtopia private server launcher, with APK, Windows, macOS, HostsGo, PowerTunnel, Surge, and VPN guides.";
export const SITE_KEYWORDS = [
  "NexusPS",
  "NexusPS download",
  "NexusPS install",
  "Growtopia private server",
  "Growtopia private server launcher",
  "Growtopia launcher",
  "APK installation guide",
  "Windows installation guide",
  "macOS installation guide",
  "HostsGo setup",
  "PowerTunnel setup",
  "VPN installation guide",
];
export const DEFAULT_SITE_URL = "https://nexusps.site";

export function getSiteUrl(input?: string) {
  return (input || DEFAULT_SITE_URL).replace(/\/$/, "");
}

export function getPageUrl(input?: string, path = "/") {
  const base = getSiteUrl(input);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
