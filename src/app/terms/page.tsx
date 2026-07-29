import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms for using The Global Edit's UK beauty-technology consumer guides.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of use."
      intro="These terms apply when you read or use The Global Edit. Last reviewed 29 July 2026."
    >
      <h2>General information</h2>
      <p>
        The content is general consumer information. It is not medical, legal or
        financial advice and is not a substitute for product instructions or
        advice from an appropriately qualified professional.
      </p>

      <h2>No sales contract</h2>
      <p>
        The Global Edit does not sell the products discussed in its guides.
        Reading the site does not create a sales, clinical or advisory
        relationship.
      </p>

      <h2>Sources and changes</h2>
      <p>
        We aim to explain source material accurately, but external information
        can change. Check current manufacturer instructions, seller terms and
        official guidance before acting.
      </p>

      <h2>External websites</h2>
      <p>
        Links to regulators and other sources are provided for reference. We do
        not control those websites or their availability.
      </p>

      <h2>Reporting problems</h2>
      <p>
        Please use the <a href="/contact">contact page</a> to report an error,
        rights concern or accessibility problem.
      </p>
    </LegalPage>
  );
}
