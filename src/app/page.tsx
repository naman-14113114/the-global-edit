import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  FileSearch,
  Scale,
  ShieldCheck,
} from "lucide-react";
import GuideCard from "@/components/GuideCard";
import GuideVisual from "@/components/GuideVisual";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "UK Beauty Technology Consumer Guides",
  description:
    "Independent consumer education on LED mask claims, specifications, fit, care, seller identity, warranties and returns.",
  path: "/",
});

const standards = [
  {
    title: "Authoritative sources",
    body: "We favour regulators, government guidance and primary manufacturer documents, and show the sources used.",
    icon: FileSearch,
  },
  {
    title: "Claims kept in context",
    body: "We separate cosmetic wording from medical-device claims and do not turn manufacturer statistics into promises.",
    icon: Scale,
  },
  {
    title: "No product sales",
    body: "The publication does not sell products, collect leads or direct readers to a checkout at launch.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  const [primaryGuide, ...supportingGuides] = guides;

  return (
    <div className="bg-[#f7f7f5]">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              UK consumer education
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] text-stone-950 sm:text-6xl lg:text-7xl">
              Make sense of beauty-technology claims before you choose.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              The Global Edit explains the questions behind LED mask
              specifications, instructions, fit, warranties and seller
              information. It does not perform laboratory or clinical testing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/guides/${primaryGuide.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-stone-950 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-teal-900"
              >
                Read the UK buyer guide
                <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
              <Link
                href="/editorial-policy"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-stone-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-stone-900 hover:border-stone-900"
              >
                How we work
                <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="border border-stone-300 bg-[#f2f2ef] p-5 sm:p-8">
            <div className="flex items-center justify-between border-b border-stone-300 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  Reader checklist
                </p>
                <h2 className="mt-2 font-serif text-2xl text-stone-950">
                  Three checks before any claim
                </h2>
              </div>
              <BookOpenCheck
                size={34}
                strokeWidth={1.3}
                className="text-stone-500"
                aria-hidden="true"
              />
            </div>
            <ol className="mt-5 space-y-5">
              {[
                "What exactly is the product claiming to do?",
                "Who published the evidence or specification?",
                "Can you identify the manufacturer, seller and return terms?",
              ].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center border border-stone-400 bg-white font-serif text-sm text-stone-950">
                    {index + 1}
                  </span>
                  <span className="pt-1.5 text-sm leading-6 text-stone-700">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="mb-9 grid gap-5 border-b border-stone-900 pb-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Published guides
            </p>
            <h2 className="mt-3 font-serif text-4xl text-stone-950">
              Start with the facts you can check.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-stone-600 md:justify-self-end">
            These guides are educational, date-stamped and linked to their source
            material. They do not rank products or promise results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {supportingGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Editorial standard
            </p>
            <h2 className="mt-3 font-serif text-4xl text-stone-950">
              Clear about what we know and what we do not.
            </h2>
          </div>
          <div className="grid divide-y divide-stone-200 border-y border-stone-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {standards.map(({ title, body, icon: Icon }) => (
              <div key={title} className="px-1 py-7 md:px-7">
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="mb-5 text-teal-800"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl text-stone-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <GuideVisual visual="checklist" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 text-center md:px-8 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
          Questions or corrections
        </p>
        <h2 className="mt-3 font-serif text-4xl text-stone-950">
          Help us keep the record accurate.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-stone-600">
          Our corrections process explains how to report a factual issue, a
          broken source or an accessibility problem.
        </p>
        <Link
          href="/corrections"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 border border-stone-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-stone-900 hover:bg-stone-950 hover:text-white"
        >
          View corrections policy
          <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
