import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Corrections",
  description:
    "How to report an error and how The Global Edit records material corrections.",
  path: "/corrections",
});

export default function CorrectionsPage() {
  return (
    <LegalPage
      eyebrow="Corrections"
      title="Accuracy is a continuing obligation."
      intro="Readers can report factual errors, broken sources, unclear wording and accessibility problems."
    >
      <h2>How to report an issue</h2>
      <p>
        Use the details on our <a href="/contact">contact page</a>. Include the
        page URL, the wording in question, why it may be inaccurate and the
        clearest supporting detail available.
      </p>

      <h2>What happens next</h2>
      <p>
        We review the original source and any new evidence. If a material
        statement is wrong or misleading, we correct the page, update its review
        date and add a note describing the change. Minor spelling and formatting
        fixes may be made without a correction note.
      </p>

      <h2>Current correction record</h2>
      <p>No material corrections have been recorded for the current guides.</p>
    </LegalPage>
  );
}
