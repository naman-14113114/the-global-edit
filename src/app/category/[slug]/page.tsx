import { notFound } from "next/navigation";
import GuideCard from "@/components/GuideCard";
import { categories, getCategory, getGuidesByCategory } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) return {};

  return pageMetadata({
    title: `${category.name} Guides`,
    description: category.description,
    path: `/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const categoryGuides = getGuidesByCategory(category.name);

  return (
    <div className="bg-paper">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rust">
            Practical living
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] text-ink md:text-6xl">
            {category.name} guides.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            {category.description}
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
        {categoryGuides.map((guide, index) => (
          <GuideCard key={guide.slug} guide={guide} index={index} />
        ))}
      </div>
    </div>
  );
}
