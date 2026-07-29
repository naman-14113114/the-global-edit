import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(path),
      siteName: SITE_NAME,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
