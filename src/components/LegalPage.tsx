import type { ReactNode } from "react";

export default function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="bg-white">
      <header className="border-b border-stone-200">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-stone-600">
            {intro}
          </p>
        </div>
      </header>
      <div className="legal-copy mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
        {children}
      </div>
    </article>
  );
}
