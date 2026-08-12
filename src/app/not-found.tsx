import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[62vh] items-center bg-paper">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
          Error 404
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-[-0.035em] text-ink">
          This page is not in our current guide library.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted">
          It may have moved, been retired, or never existed. The current guide
          index contains every live editorial article.
        </p>
        <Link
          href="/guides"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-surface hover:bg-rust"
        >
          Browse current guides
          <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
