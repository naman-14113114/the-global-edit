import { notFound } from "next/navigation";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return [{ slug: "beauty" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== "beauty") {
    return {};
  }

  return pageMetadata({
    title: "Beauty Technology Guides",
    description:
      "UK consumer education about LED mask claims, specifications, fit, care, warranties and seller checks.",
    path: "/category/beauty",
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== "beauty") {
    notFound();
  }

  return (
    <div className="bg-[#f7f7f5]">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Beauty technology
          </p>
          <h1 className="mt-4 font-serif text-5xl text-stone-950 md:text-6xl">
            LED mask consumer guides.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-stone-600">
            Source-linked explanations for UK readers. No rankings, seller links
            or product promises.
          </p>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16 lg:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  );
}
