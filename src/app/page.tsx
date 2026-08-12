import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  House,
  Luggage,
  SearchCheck,
  Shirt,
} from "lucide-react";
import GuideCard from "@/components/GuideCard";
import GuideVisual from "@/components/GuideVisual";
import HomeIllustration from "@/components/HomeIllustration";
import { categories, guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Practical Guides for Everyday Living",
  description:
    "Original, non-commercial guides for organising your home, packing for travel and caring for clothing.",
  path: "/",
});

const categoryIcons = {
  Home: House,
  Travel: Luggage,
  "Clothing care": Shirt,
};

const principles = [
  {
    title: "Useful on the page",
    body: "Every guide gives the complete method without a sign-up, download or redirect.",
    icon: BookOpenCheck,
  },
  {
    title: "Written for ordinary use",
    body: "The steps are specific enough to follow and flexible enough to adapt to your week.",
    icon: SearchCheck,
  },
  {
    title: "Nothing for sale",
    body: "There are no affiliate links, product rankings, paid placements or checkout links.",
    icon: ArrowRight,
  },
];

export default function Home() {
  const [featuredGuide, ...recentGuides] = guides;

  return (
    <div className="bg-paper">
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-rust">
              Practical living, edited well
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
              Useful systems for the things you do every week.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Clear, original guides for resetting a room, packing a bag and
              caring for the clothes you already own. No sales pitch waiting at
              the end.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/guides/${featuredGuide.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-surface hover:bg-rust"
              >
                Start with the home reset
                <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink bg-surface px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink hover:bg-cream"
              >
                Browse all guides
                <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <HomeIllustration />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="mb-8 flex flex-col gap-4 border-b border-ink pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
              Choose a starting point
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-ink">
              Three parts of everyday life.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            Each section contains complete guides, written to be used rather than
            skimmed for a recommendation.
          </p>
        </div>

        <div className="grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.name];
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group border-b border-line px-1 py-7 last:border-b-0 md:border-b-0 md:px-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-rust">0{index + 1}</span>
                  <Icon size={24} strokeWidth={1.5} className="text-muted" aria-hidden="true" />
                </div>
                <h3 className="mt-8 font-serif text-3xl text-ink group-hover:text-rust">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                  Open section
                  <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 md:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
              Featured field guide
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.035em] text-ink md:text-5xl">
              {featuredGuide.shortTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              {featuredGuide.description}
            </p>
            <Link
              href={`/guides/${featuredGuide.slug}`}
              className="mt-7 inline-flex min-h-12 items-center gap-2 bg-rust px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-surface hover:bg-ink"
            >
              Read the complete guide
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
          <GuideVisual visual={featuredGuide.visual} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
              From the library
            </p>
            <h2 className="mt-3 max-w-sm font-serif text-4xl tracking-[-0.035em] text-ink">
              Practical next reads.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Seven guides, no filler categories and no product pages hidden in
              the navigation.
            </p>
          </div>
          <div>
            {recentGuides.slice(0, 4).map((guide, index) => (
              <GuideCard key={guide.slug} guide={guide} index={index} />
            ))}
            <Link
              href="/guides"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-rust underline decoration-line underline-offset-4"
            >
              See all seven guides
              <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
              Our editorial promise
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em] text-ink">
              The useful part comes before everything else.
            </h2>
          </div>
          <div className="mt-10 grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {principles.map(({ title, body, icon: Icon }) => (
              <div key={title} className="px-1 py-7 md:px-7">
                <Icon size={25} strokeWidth={1.5} className="mb-5 text-rust" aria-hidden="true" />
                <h3 className="font-serif text-xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
