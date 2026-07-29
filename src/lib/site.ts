export const SITE_NAME = "The Global Edit";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_URL = configuredUrl.replace(/\/$/, "");
export const OPERATOR_NAME =
  process.env.NEXT_PUBLIC_OPERATOR_NAME?.trim() || SITE_NAME;
export const EDITORIAL_EMAIL =
  process.env.NEXT_PUBLIC_EDITORIAL_EMAIL?.trim() || "";
export const IDENTITY_IS_CONFIGURED = Boolean(
  process.env.NEXT_PUBLIC_OPERATOR_NAME?.trim() &&
    process.env.NEXT_PUBLIC_EDITORIAL_EMAIL?.trim(),
);

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}
