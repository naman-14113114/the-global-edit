import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".jsx",
  ".json",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
]);
const prohibitedAssets = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".pdf",
  ".png",
  ".webp",
]);

const contentRules = [
  {
    label: "Buudy outbound link",
    pattern: /https?:\/\/(?:[^/\s]+\.)?buudy\.[^\s"'`)]+/i,
  },
  {
    label: "affiliate redirect",
    pattern: /(?:amzn\.to|affiliate[_-]?id|utm_(?:source|medium)=affiliate)/i,
  },
  {
    label: "legacy invented expert",
    pattern: /(?:dr\.?\s+elizabeth\s+vance|elizabeth\s+vance)/i,
  },
  {
    label: "unsupported certification claim",
    pattern: /health\s+canada\s+approv/i,
  },
  {
    label: "sensitive or regulated-topic claim",
    pattern: /(?:clinic(?:al)?[-\s]grade|clinically\s+proven|dermatologist[-\s](?:tested|approved|recommended)|treat(?:ment)?\s+(?:a\s+)?(?:condition|disease)|guaranteed\s+(?:income|result|return))/i,
  },
  {
    label: "legacy sales CTA",
    pattern: /(?:check\s+availability|official\s+website|buy\s+now|add\s+to\s+cart)/i,
  },
  {
    label: "legacy urgency or promotion",
    pattern: /(?:limited\s+stock|only\s+\d+\s+left|free\s+gifts?|countdown\s+offer)/i,
  },
  {
    label: "legacy ranking language",
    pattern: /(?:top\s+pick|ranked\s+(?:no\.?\s*)?#?1|best\s+led\s+face\s+mask)/i,
  },
  {
    label: "non-essential tracking code",
    pattern: /(?:clarity\(|gtag\(|fbq\(|tawk_api|uetq|klaviyo)/i,
  },
];

const ignoredDirectories = new Set([".git", ".next", "node_modules", "docs"]);

async function collectFiles(directory) {
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const sourceFiles = await collectFiles(path.join(root, "src"));
const publicFiles = await collectFiles(path.join(root, "public"));
const failures = [];

for (const file of sourceFiles) {
  if (!textExtensions.has(path.extname(file).toLowerCase())) continue;
  const content = await fs.readFile(file, "utf8");
  const relative = path.relative(root, file);

  for (const rule of contentRules) {
    if (rule.pattern.test(content)) {
      failures.push(`${rule.label}: ${relative}`);
    }
  }
}

for (const file of publicFiles) {
  if (prohibitedAssets.has(path.extname(file).toLowerCase())) {
    failures.push(
      `undocumented public image or PDF asset: ${path.relative(root, file)}`,
    );
  }
}

const guidesFile = await fs.readFile(
  path.join(root, "src", "lib", "guides.ts"),
  "utf8",
);
if (
  !/slug:\s*"room-by-room-home-reset"[\s\S]*?category:\s*"Home"/.test(
    guidesFile,
  )
) {
  failures.push("intended practical-living landing guide is missing");
}

if (process.argv.includes("--require-site-url")) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!siteUrl || !/^https:\/\//i.test(siteUrl)) {
    failures.push("NEXT_PUBLIC_SITE_URL must be a public HTTPS URL");
  }
}

if (failures.length > 0) {
  console.error("Ads-readiness audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Ads-readiness audit passed (${sourceFiles.length} source files, ${publicFiles.length} public files checked).`,
);
