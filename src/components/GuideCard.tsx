import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import type { Guide } from "@/lib/guides";

export default function GuideCard({
  guide,
  index,
}: {
  guide: Guide;
  index?: number;
}) {
  return (
    <article className="group grid gap-5 border-t border-line py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-start">
      <div className="flex items-center gap-3 text-muted sm:block">
        <span className="font-serif text-2xl text-rust">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        <BookOpen size={17} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-rust">
          {guide.category}
        </p>
        <h2 className="mt-2 max-w-2xl font-serif text-2xl leading-tight text-ink sm:text-3xl">
          {guide.shortTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          {guide.description}
        </p>
      </div>
      <Link
        href={`/guides/${guide.slug}`}
        className="inline-flex min-h-11 items-center gap-2 self-center text-xs font-bold uppercase tracking-[0.14em] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-rust focus-visible:text-rust"
      >
        Read guide
        <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
      </Link>
    </article>
  );
}
