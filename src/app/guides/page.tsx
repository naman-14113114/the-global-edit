import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "LED Mask Consumer Guides",
  description:
    "UK guides to LED mask specifications, cosmetic and medical claims, fit, care, warranties, returns and seller checks.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="bg-[#f7f7f5]">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Consumer library
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-stone-950 md:text-6xl">
            LED mask guides for UK shoppers.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-stone-600">
            Practical explanations of claims, specifications, fit, care,
            warranties and seller information. No product rankings or sales
            links.
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
