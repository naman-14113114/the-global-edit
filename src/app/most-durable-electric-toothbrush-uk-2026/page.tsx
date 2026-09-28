import type { Metadata } from "next";
import ToothbrushGuideView from "@/components/ToothbrushGuideView";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

const SLUG = "most-durable-electric-toothbrush-uk-2026";

export const metadata: Metadata = toothbrushGuideMetadata(SLUG);

export default function MostDurableToothbrushPage() {
  const guide = getToothbrushGuide(SLUG);
  return <ToothbrushGuideView guide={guide} />;
}
