import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Editorial Policy",
  description:
    "The sourcing, claims, independence and review standards used by The Global Edit.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <LegalPage
      eyebrow="Editorial policy"
      title="How our guides are researched and reviewed."
      intro="This policy applies to every guide published by The Global Edit. Last reviewed 29 July 2026."
    >
      <h2>Purpose</h2>
      <p>
        Our purpose is to help readers understand what to check, not to tell them
        that a particular product will produce a result.
      </p>

      <h2>Source hierarchy</h2>
      <p>
        We prioritise legislation, regulators, government guidance and primary
        product instructions. Manufacturer and seller pages may establish what a
        business says about its own product, but do not independently prove a
        result.
      </p>

      <h2>Claims</h2>
      <p>
        We avoid unsupported efficacy, safety, medical, clinical,
        certification, endorsement and comparative claims. Numbers are used only
        with definitions and context from a named source. We do not infer that
        larger figures are better unless suitable evidence supports that
        conclusion.
      </p>

      <h2>Testing and expertise</h2>
      <p>
        The Global Edit does not perform laboratory or clinical testing and does
        not represent its writers as clinicians. We do not publish invented
        staff profiles, test protocols, review counts or customer testimonials.
      </p>

      <h2>Commercial independence</h2>
      <p>
        At launch, the publication contains no affiliate links, seller
        redirects, product checkout links, sponsored rankings, lead capture,
        display advertising or newsletter gate.
      </p>

      <h2>Review cycle</h2>
      <p>
        Guides show their publication and last-reviewed dates. We revisit
        regulatory links, consumer rights information and factual statements,
        and record material changes through the corrections process.
      </p>
    </LegalPage>
  );
}
