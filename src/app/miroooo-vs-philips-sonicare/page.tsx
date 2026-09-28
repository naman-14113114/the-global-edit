import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

export const metadata: Metadata = toothbrushGuideMetadata("miroooo-vs-philips-sonicare");

export default function Page() {
  const guide = getToothbrushGuide("miroooo-vs-philips-sonicare");
  return <ElectricToothbrushesAdvertorial guide={guide} />;
}
