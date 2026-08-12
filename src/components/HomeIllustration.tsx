import { Archive, House, Luggage, Shirt } from "lucide-react";

const notes = [
  { number: "01", label: "Reset the room", icon: House },
  { number: "02", label: "Pack the trip", icon: Luggage },
  { number: "03", label: "Care for clothes", icon: Shirt },
];

export default function HomeIllustration() {
  return (
    <div
      className="relative overflow-hidden border border-ink bg-cream p-5 shadow-[10px_10px_0_var(--color-rust)] sm:p-7"
      role="img"
      aria-label="Illustrated field notes for home, travel and clothing care"
    >
      <div className="flex items-center justify-between border-b border-ink/25 pb-4">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-rust">
          Field notes, edition 01
        </p>
        <Archive size={20} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="mt-4 divide-y divide-ink/20">
        {notes.map(({ number, label, icon: Icon }) => (
          <div key={number} className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5">
            <span className="font-serif text-2xl text-rust">{number}</span>
            <span className="font-serif text-xl text-ink sm:text-2xl">{label}</span>
            <span className="flex size-11 items-center justify-center rounded-full bg-rust text-cream">
              <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-8 gap-2" aria-hidden="true">
        {[32, 56, 72, 44, 84, 64, 40, 92].map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="self-end bg-rust/20"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}
