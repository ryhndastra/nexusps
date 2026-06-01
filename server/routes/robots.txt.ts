import { getSiteUrl } from "~/utils/seo";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = getSiteUrl(config.public.siteUrl);

  setHeader(event, "content-type", "text/plain; charset=utf-8");

  return [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
});
