import { assets } from "~/utils/assets";

export default defineEventHandler(async (event) => {
  const response = await fetch(assets.logo);

  if (!response.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: "Unable to load favicon",
    });
  }

  const buffer = await response.arrayBuffer();

  setHeader(event, "content-type", "image/png");
  setHeader(event, "cache-control", "public, max-age=86400, immutable");

  return Buffer.from(buffer);
});
