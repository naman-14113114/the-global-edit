import {
  BadgeCheck,
  BookOpenCheck,
  CircleHelp,
  FileSearch,
  ScanEye,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import type { Guide } from "@/lib/guides";

const visualItems: Record<
  Guide["visual"],
  { label: string; icon: typeof BadgeCheck }[]
> = {
  checklist: [
    { label: "Check the claim", icon: FileSearch },
    { label: "Read the instructions", icon: BookOpenCheck },
    { label: "Review seller terms", icon: ShieldCheck },
  ],
  specifications: [
    { label: "Find the definition", icon: FileSearch },
    { label: "Add context", icon: SlidersHorizontal },
    { label: "Avoid assumptions", icon: CircleHelp },
  ],
  claims: [
    { label: "Read the wording", icon: ScanEye },
    { label: "Check the product", icon: BadgeCheck },
    { label: "Find the evidence", icon: FileSearch },
  ],
  comfort: [
    { label: "Assess the fit", icon: ScanEye },
    { label: "Understand controls", icon: SlidersHorizontal },
    { label: "Follow care guidance", icon: Sparkles },
  ],
  warranty: [
    { label: "Identify the seller", icon: BadgeCheck },
    { label: "Read the terms", icon: BookOpenCheck },
    { label: "Keep a record", icon: ShieldCheck },
  ],
};

export default function GuideVisual({ visual }: { visual: Guide["visual"] }) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 border-y border-stone-300 bg-white"
      role="img"
      aria-label="Three-step editorial checklist illustration"
    >
      {visualItems[visual].map(({ label, icon: Icon }, index) => (
        <div
          key={label}
          className="flex min-h-32 items-center gap-4 border-stone-200 px-5 py-6 sm:border-r sm:last:border-r-0"
        >
          <span className="flex size-12 shrink-0 items-center justify-center border border-stone-300 bg-stone-50 text-stone-800">
            <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700">
              Step {index + 1}
            </div>
            <div className="font-serif text-lg text-stone-950">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
