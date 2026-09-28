import type { Metadata } from "next";
import ToothbrushGuideView from "@/components/ToothbrushGuideView";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

const SLUG = "miroooo-vs-oral-b-io6";

export const metadata: Metadata = toothbrushGuideMetadata(SLUG);

export default function Page() {
  const guide = getToothbrushGuide(SLUG);
  return <ToothbrushGuideView guide={guide} />;
}

