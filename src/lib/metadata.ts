import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  type?: "article" | "website";
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
      type,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "en_GB",
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
