import { notFound } from "next/navigation";
import GuideArticle from "@/components/GuideArticle";
import { getGuide, guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = true;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    type: "article",
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
