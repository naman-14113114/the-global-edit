import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/guides",
  "/category/beauty",
  "/about",
  "/contact",
  "/editorial-policy",
  "/corrections",
  "/privacy",
  "/cookies",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const reviewed = new Date("2026-07-29T00:00:00.000Z");

  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path),
      lastModified: reviewed,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.6,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: reviewed,
      changeFrequency: "monthly" as const,
      priority: guide.advertisement ? 0.9 : 0.7,
    })),
  ];
}
