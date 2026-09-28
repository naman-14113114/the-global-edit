"use client";

import ElectricToothbrushesAdvertorial, {
  type ElectricToothbrushesAdvertorialProps,
} from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";

export default function ToothbrushRankingClient(
  props: ElectricToothbrushesAdvertorialProps,
) {
  return <ElectricToothbrushesAdvertorial {...props} />;
}
