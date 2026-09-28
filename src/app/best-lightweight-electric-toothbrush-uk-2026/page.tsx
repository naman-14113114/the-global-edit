import type { Metadata } from "next";
import ToothbrushGuideView from "@/components/ToothbrushGuideView";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

const SLUG = "best-lightweight-electric-toothbrush-uk-2026";

export const metadata: Metadata = toothbrushGuideMetadata(SLUG);

export default function BestLightweightToothbrushPage() {
  const guide = getToothbrushGuide(SLUG);
  return <ToothbrushGuideView guide={guide} />;
}
