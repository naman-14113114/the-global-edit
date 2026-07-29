import LegalPage from "@/components/LegalPage";
import { EDITORIAL_EMAIL, IDENTITY_IS_CONFIGURED } from "@/lib/site";
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
      {IDENTITY_IS_CONFIGURED ? (
        <p>
          Email{" "}
          <a href={`mailto:${EDITORIAL_EMAIL}`}>{EDITORIAL_EMAIL}</a>. Include
          the page URL and enough detail for us to understand the issue.
        </p>
      ) : (
        <p>
          A working domain-based editorial email has not yet been configured.
          This is a launch blocker: the site must not be submitted for paid
          advertising until a real, monitored address is published here.
        </p>
      )}

      <h2>Corrections</h2>
      <p>
        For factual issues, identify the wording you believe is wrong and provide
        the supporting source where possible. We record material corrections in
        accordance with our <a href="/corrections">corrections policy</a>.
      </p>

      <h2>Medical questions</h2>
      <p>
        We cannot advise whether a device is suitable for a health condition or
        an individual. Seek advice from an appropriately qualified healthcare
        professional.
      </p>
    </LegalPage>
  );
}
