import type { Metadata } from "next";
import ToothbrushGuideView from "@/components/ToothbrushGuideView";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

const SLUG = "best-electric-toothbrush-for-braces-uk-2026";

export const metadata: Metadata = toothbrushGuideMetadata(SLUG);

export default function BestElectricToothbrushForBracesPage() {
  const guide = getToothbrushGuide(SLUG);
  return <ToothbrushGuideView guide={guide} />;
}
