export const SITE_NAME = "The Global Edit";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theglobaledit.shop";

export const SITE_URL = configuredUrl.replace(/\/$/, "");
export const OPERATOR_NAME =
  process.env.NEXT_PUBLIC_OPERATOR_NAME?.trim() || "Naman Kharbanda";
export const EDITORIAL_EMAIL =
  process.env.NEXT_PUBLIC_EDITORIAL_EMAIL?.trim() || "namananya5@gmail.com";
export const IDENTITY_IS_CONFIGURED = Boolean(OPERATOR_NAME && EDITORIAL_EMAIL);

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}
