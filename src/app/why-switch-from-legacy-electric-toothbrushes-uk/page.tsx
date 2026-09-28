import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

export const metadata: Metadata = toothbrushGuideMetadata(
  "why-switch-from-legacy-electric-toothbrushes-uk"
);

export default function Page() {
  const guide = getToothbrushGuide(
    "why-switch-from-legacy-electric-toothbrushes-uk"
  );
  return <ElectricToothbrushesAdvertorial guide={guide} />;
}
