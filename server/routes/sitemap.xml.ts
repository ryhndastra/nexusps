import { getSiteUrl } from "~/utils/seo";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = getSiteUrl(config.public.siteUrl);
  const lastmod = new Date().toISOString();

  setHeader(event, "content-type", "application/xml; charset=utf-8");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
});
