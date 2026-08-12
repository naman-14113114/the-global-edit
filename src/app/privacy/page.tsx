import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "Privacy information for visitors to The Global Edit practical-living publication.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="A simple publication, with no advertising trackers."
      intro="This notice describes the current publication configuration. Last reviewed 12 August 2026."
    >
      <h2>Information we collect</h2>
      <p>
        The website does not provide accounts, forms, comments, newsletter
        sign-up or product checkout. We do not intentionally collect contact or
        profile information through the site.
      </p>

      <h2>Hosting records</h2>
      <p>
        The hosting provider may process technical request information needed to
        deliver and protect the website, such as IP address, request time,
        browser information and requested URL. These records are not used by The
        Global Edit for advertising profiles.
      </p>

      <h2>Analytics and advertising</h2>
      <p>
        Non-essential analytics, remarketing and advertising pixels are not
        enabled at launch. They will not be introduced without an appropriate
        consent mechanism and an updated notice.
      </p>

      <h2>External sources</h2>
      <p>
        Guides link to external public sources. Those websites operate under
        their own privacy notices.
      </p>

      <h2>Scope of this notice</h2>
      <p>
        This notice applies to the current read-only publication. It will be
        updated before accounts, forms, comments or other data-submission tools
        are introduced.
      </p>
    </LegalPage>
  );
}
