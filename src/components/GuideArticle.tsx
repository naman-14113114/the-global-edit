import Link from "next/link";
import { ArrowLeft, FileCheck2, Info } from "lucide-react";
import type { Guide } from "@/lib/guides";
import GuideVisual from "@/components/GuideVisual";

export default function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-18">
          <Link
            href="/guides"
            className="mb-9 inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-muted hover:text-rust focus-visible:text-rust"
          >
            <ArrowLeft size={15} strokeWidth={1.8} aria-hidden="true" />
            All practical guides
          </Link>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-rust">
            {guide.category} guide
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.06] text-ink sm:text-5xl md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg">
            {guide.description}
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5 text-xs text-muted">
            <div>
              <dt className="inline font-bold text-ink">Published: </dt>
              <dd className="inline">{guide.published}</dd>
            </div>
            <div>
              <dt className="inline font-bold text-ink">Last reviewed: </dt>
              <dd className="inline">{guide.reviewed}</dd>
            </div>
            <div>
              <dt className="sr-only">Reading time</dt>
              <dd>{guide.readingTime}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-14">
        <GuideVisual visual={guide.visual} />

        <aside className="mt-8 flex gap-3 border border-line bg-surface px-5 py-4 text-sm leading-6 text-muted">
          <Info className="mt-0.5 shrink-0 text-rust" size={19} aria-hidden="true" />
          <p>
            This is an original editorial checklist. It does not contain
            commercial placements, affiliate links or paid recommendations. Adapt the steps
            to your space, schedule and current travel-provider instructions.
          </p>
        </aside>

        <div className="mt-14 space-y-16">
          {guide.sections.map((section, index) => (
            <section
              key={section.heading}
              aria-labelledby={`section-${index + 1}`}
              className="grid gap-7 border-t border-line pt-8 md:grid-cols-[0.72fr_1.28fr] md:gap-12"
            >
              <div>
                <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-rust">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2
                  id={`section-${index + 1}`}
                  className="font-serif text-3xl leading-tight text-ink"
                >
                  {section.heading}
                </h2>
                {section.intro ? (
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {section.intro}
                  </p>
                ) : null}
              </div>
              <div className="divide-y divide-line border-y border-line">
                {section.points.map((point) => (
                  <div key={point.title} className="py-5">
                    <h3 className="mb-2 text-base font-bold text-ink">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted">{point.body}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          aria-labelledby="method"
          className="mt-16 border-t border-ink pt-8"
        >
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
            <FileCheck2
              className="text-rust"
              size={34}
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <div>
              <h2 id="method" className="font-serif text-3xl text-ink">
                How this guide was prepared
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
                The Global Edit wrote and reviewed this guide as a practical
                sequence for ordinary use. It is not sponsored, it does not rank
                commercial offers, and no outside party paid for inclusion. If you spot an unclear
                step, use our <Link href="/corrections">corrections process</Link>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
