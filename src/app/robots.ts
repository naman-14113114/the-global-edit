import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/omnilux-led-mask-review",
        "/Buudy-Skincare-Guide.pdf",
        "/blog/acne-blue-light-myth",
        "/blog/amazon-led-mask-risks",
        "/blog/clinic-vs-at-home-roi",
        "/blog/is-near-infrared-safe",
        "/blog/led-mask-frequency",
        "/blog/neck-neglect-skincare",
        "/blog/skincare-routine-2026",
        "/blog/why-silicone-masks-are-failing",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
