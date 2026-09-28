import type { Metadata } from "next";
import ToothbrushGuideView from "@/components/ToothbrushGuideView";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

const SLUG = "best-quiet-electric-toothbrush-uk-2026";

export const metadata: Metadata = toothbrushGuideMetadata(SLUG);

export default function BestQuietToothbrushPage() {
  const guide = getToothbrushGuide(SLUG);
  return <ToothbrushGuideView guide={guide} />;
}
