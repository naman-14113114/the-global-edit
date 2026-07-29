import Link from "next/link";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import type { Guide } from "@/lib/guides";
import GuideVisual from "@/components/GuideVisual";

export default function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <article className="bg-[#f7f7f5]">
      {guide.advertisement ? (
        <div className="border-b border-stone-800 bg-stone-950 px-4 py-3 text-center text-base font-bold uppercase tracking-[0.16em] text-white">
          Advertisement
        </div>
      ) : null}

      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
          <Link
            href="/guides"
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-500 hover:text-stone-950"
          >
            <ArrowLeft size={15} strokeWidth={1.8} aria-hidden="true" />
            All guides
          </Link>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            {guide.eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] text-stone-950 sm:text-5xl md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-stone-600 md:text-lg">
            {guide.description}
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-stone-200 pt-5 text-xs text-stone-500">
            <div>
              <dt className="inline font-bold text-stone-700">Published: </dt>
              <dd className="inline">{guide.published}</dd>
            </div>
            <div>
              <dt className="inline font-bold text-stone-700">Last reviewed: </dt>
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

        <aside className="mt-8 flex gap-3 border-l-4 border-teal-700 bg-teal-50 px-5 py-4 text-sm leading-6 text-stone-700">
          <Info className="mt-0.5 shrink-0 text-teal-800" size={19} aria-hidden="true" />
          <p>
            This article provides general consumer information. It is not medical
            advice, a product recommendation or evidence that any device is
            suitable for a particular person or concern.
          </p>
        </aside>

        <div className="mt-14 space-y-16">
          {guide.sections.map((section, index) => (
            <section
              key={section.heading}
              aria-labelledby={`section-${index + 1}`}
              className="grid gap-7 border-t border-stone-300 pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12"
            >
              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2
                  id={`section-${index + 1}`}
                  className="font-serif text-3xl leading-tight text-stone-950"
                >
                  {section.heading}
                </h2>
                {section.intro ? (
                  <p className="mt-4 text-sm leading-6 text-stone-600">
                    {section.intro}
                  </p>
                ) : null}
              </div>
              <div className="divide-y divide-stone-200 border-y border-stone-200">
                {section.points.map((point) => (
                  <div key={point.title} className="py-5">
                    <h3 className="mb-2 text-base font-bold text-stone-900">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-6 text-stone-600">{point.body}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          aria-labelledby="sources"
          className="mt-16 border-t border-stone-900 pt-8"
        >
          <h2 id="sources" className="mb-5 font-serif text-3xl text-stone-950">
            Sources and review record
          </h2>
          <p className="mb-6 max-w-3xl text-sm leading-6 text-stone-600">
            Sources are selected for the specific statements they support. They
            do not endorse The Global Edit or any product.
          </p>
          <ol className="space-y-4">
            {guide.sources.map((source) => (
              <li key={source.url} className="text-sm leading-6 text-stone-700">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 font-bold text-stone-900 underline decoration-stone-300 underline-offset-4 hover:text-teal-800"
                >
                  <span>{source.title}</span>
                  <ExternalLink
                    size={14}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />
                </a>
                <span className="block text-stone-600">
                  {source.publisher}. Accessed {source.accessed}.
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
