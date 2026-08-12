import LegalPage from "@/components/LegalPage";
import { EDITORIAL_EMAIL } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact The Global Edit about editorial corrections, accessibility or privacy.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Contact"
      title="Tell us what needs attention."
      intro="Use the editorial contact for factual corrections, source questions, privacy requests and accessibility problems."
    >
      <h2>Editorial contact</h2>
      <p>
        Email <a href={`mailto:${EDITORIAL_EMAIL}`}>{EDITORIAL_EMAIL}</a>. Include
        the page URL and enough detail for us to understand the issue.
      </p>

      <h2>Corrections</h2>
      <p>
        For factual issues, identify the wording you believe is wrong and provide
        the supporting source where possible. We record material corrections in
        accordance with our <a href="/corrections">corrections policy</a>.
      </p>

      <h2>What we cannot help with</h2>
      <p>
        We do not provide purchase support, personal travel booking or
        professional advice.
      </p>
    </LegalPage>
  );
}
