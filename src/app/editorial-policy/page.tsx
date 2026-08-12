import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Editorial Policy",
  description:
    "The authorship, independence, review and correction standards used by The Global Edit.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <LegalPage
      eyebrow="Editorial policy"
      title="How our guides are researched and reviewed."
      intro="This policy applies to every guide published by The Global Edit. Last reviewed 12 August 2026."
    >
      <h2>Purpose</h2>
      <p>
        Our purpose is to give readers a clear method for an ordinary task. A
        guide should be useful on its own, without a purchase, account, download
        or visit to another website.
      </p>

      <h2>Authorship and originality</h2>
      <p>
        Guides are written for The Global Edit and organised around an original
        sequence, checklist or example. We do not copy articles, rewrite product
        pages, manufacture first-hand experience or present automated summaries
        as reported work.
      </p>

      <h2>Scope and claims</h2>
      <p>
        We keep the publication to practical home, packing and clothing-care
        routines. We do not publish regulated or sensitive-topic advice, and we
        do not promise outcomes or imply
        qualifications we do not hold.
      </p>

      <h2>Experience and expertise</h2>
      <p>
        We do not invent experts, tests, credentials, reviews, testimonials or
        reader numbers. When a guide is an editorial method rather than reported
        research, the page says so plainly.
      </p>

      <h2>Commercial independence</h2>
      <p>
        The publication contains no affiliate links, commercial redirects,
        checkout links, sponsored rankings, lead capture, display advertising
        or newsletter gate.
      </p>

      <h2>Review cycle</h2>
      <p>
        Guides show their publication and last-reviewed dates. We revisit the
        sequence, wording and any time-sensitive instruction, and record
        material changes through the corrections process.
      </p>
    </LegalPage>
  );
}
