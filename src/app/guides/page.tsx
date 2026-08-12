import GuideCard from "@/components/GuideCard";
import { categories, getGuidesByCategory, guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Practical Living Guides",
  description:
    "Browse original guides for home organisation, travel packing and clothing care.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="bg-paper">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
            The complete library
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight tracking-[-0.04em] text-ink md:text-6xl">
            Seven guides for smoother everyday routines.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
            Every guide is original, free to read and complete on the page. The
            library contains no product rankings, affiliate links or sponsored
            placements.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        {categories.map((category) => {
          const categoryGuides = getGuidesByCategory(category.name);
          return (
            <section key={category.slug} className="mb-16 last:mb-0" aria-labelledby={category.slug}>
              <div className="grid gap-4 border-b border-ink pb-5 md:grid-cols-[0.55fr_1fr] md:items-end">
                <h2 id={category.slug} className="font-serif text-4xl tracking-[-0.035em] text-ink">
                  {category.name}
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-muted">{category.description}</p>
              </div>
              <div>
                {categoryGuides.map((guide, index) => (
                  <GuideCard key={guide.slug} guide={guide} index={index} />
                ))}
              </div>
            </section>
          );
        })}
        <p className="sr-only">{guides.length} guides published.</p>
      </div>
    </div>
  );
}
