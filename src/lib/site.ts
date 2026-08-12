export const SITE_NAME = "The Global Edit";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theglobaledit.shop";

export const SITE_URL = configuredUrl.replace(/\/$/, "");

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}
