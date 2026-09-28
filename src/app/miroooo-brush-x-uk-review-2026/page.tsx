import type { Metadata } from "next";
import ToothbrushGuideView from "@/components/ToothbrushGuideView";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

const SLUG = "miroooo-brush-x-uk-review-2026";

export const metadata: Metadata = toothbrushGuideMetadata(SLUG);

export default function Page() {
  const guide = getToothbrushGuide(SLUG);
  return <ToothbrushGuideView guide={guide} />;
}

