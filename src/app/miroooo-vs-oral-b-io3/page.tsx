import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

export const metadata: Metadata = toothbrushGuideMetadata("miroooo-vs-oral-b-io3");

export default function Page() {
  const guide = getToothbrushGuide("miroooo-vs-oral-b-io3");
  return <ElectricToothbrushesAdvertorial guide={guide} />;
}
