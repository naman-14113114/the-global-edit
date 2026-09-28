import type { Metadata } from "next";
import ToothbrushGuideView from "@/components/ToothbrushGuideView";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

const SLUG = "why-switch-from-legacy-electric-toothbrushes-uk";

export const metadata: Metadata = toothbrushGuideMetadata(SLUG);

export default function Page() {
  const guide = getToothbrushGuide(SLUG);
  return <ToothbrushGuideView guide={guide} />;
}

