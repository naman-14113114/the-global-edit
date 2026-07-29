import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Guide } from "@/lib/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group flex h-full flex-col border-t-2 border-stone-900 bg-white px-5 py-6 shadow-[0_10px_30px_rgba(28,25,23,0.06)]">
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700">
          {guide.eyebrow}
        </span>
        <BookOpen size={18} strokeWidth={1.5} className="text-stone-400" aria-hidden="true" />
      </div>
      <h2 className="mb-3 font-serif text-2xl leading-tight text-stone-950">
        {guide.shortTitle}
      </h2>
      <p className="mb-7 flex-1 text-sm leading-6 text-stone-600">
        {guide.description}
      </p>
      <Link
        href={`/guides/${guide.slug}`}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-teal-800"
      >
        Read guide
        <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
      </Link>
    </article>
  );
}
