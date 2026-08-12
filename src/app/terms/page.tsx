import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms for using The Global Edit's practical-living guides.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of use."
      intro="These terms apply when you read or use The Global Edit. Last reviewed 12 August 2026."
    >
      <h2>General information</h2>
      <p>
        The content is general practical information. It is not professional
        advice. Follow the current instructions of
        airlines, transport operators, garment makers and other relevant
        providers when their requirements apply.
      </p>

      <h2>No sales or service contract</h2>
      <p>
        The Global Edit does not sell products or services. Reading the site does
        not create a sales, booking, support or advisory relationship.
      </p>

      <h2>Sources and changes</h2>
      <p>
        We aim to keep guides clear and current, but spaces, schedules and
        provider rules differ. Check current garment labels, travel-provider
        requirements and other instructions that apply to your situation.
      </p>

      <h2>External websites</h2>
      <p>
        Links to external references may be provided when they are useful. We do
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
