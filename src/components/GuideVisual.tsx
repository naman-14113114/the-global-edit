import {
  Archive,
  Bed,
  CheckCircle2,
  CookingPot,
  DoorOpen,
  House,
  ListChecks,
  Luggage,
  Map,
  Package,
  RotateCcw,
  Shirt,
  Sparkles,
} from "lucide-react";
import type { GuideVisual as GuideVisualName } from "@/lib/guides";

const visualItems: Record<
  GuideVisualName,
  { label: string; icon: typeof House }[]
> = {
  "home-reset": [
    { label: "Set the finish line", icon: ListChecks },
    { label: "Move room by room", icon: House },
    { label: "Close the loop", icon: RotateCcw },
  ],
  "small-kitchen": [
    { label: "Map daily actions", icon: CookingPot },
    { label: "Group complete tasks", icon: Package },
    { label: "Reset one surface", icon: Sparkles },
  ],
  "guest-room": [
    { label: "Clear an arrival zone", icon: DoorOpen },
    { label: "Prepare sleep basics", icon: Bed },
    { label: "Share key details", icon: CheckCircle2 },
  ],
  "carry-on": [
    { label: "Read the itinerary", icon: Map },
    { label: "Pack in modules", icon: Luggage },
    { label: "Run the final check", icon: ListChecks },
  ],
  "weekend-bag": [
    { label: "Plan two full days", icon: Map },
    { label: "Pack the journey", icon: Luggage },
    { label: "Prepare the return", icon: RotateCcw },
  ],
  "clothing-care": [
    { label: "Read the garment", icon: Shirt },
    { label: "Separate special care", icon: Package },
    { label: "Finish before storage", icon: CheckCircle2 },
  ],
  "wardrobe-rotation": [
    { label: "Edit one category", icon: Shirt },
    { label: "Prepare for storage", icon: Archive },
    { label: "Record the rotation", icon: ListChecks },
  ],
};

export default function GuideVisual({ visual }: { visual: GuideVisualName }) {
  return (
    <div
      className="grid border-y border-line bg-surface sm:grid-cols-3"
      role="img"
      aria-label="Three-step guide overview"
    >
      {visualItems[visual].map(({ label, icon: Icon }, index) => (
        <div
          key={label}
          className="flex min-h-32 items-center gap-4 border-b border-line px-5 py-6 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
            <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div>
            <div className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-rust">
              Step {index + 1}
            </div>
            <div className="font-serif text-lg leading-snug text-ink">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
