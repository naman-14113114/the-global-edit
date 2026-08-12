import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Cookies",
  description:
    "Cookie and storage information for The Global Edit UK publication.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="No non-essential tracking at launch."
      intro="The current version of The Global Edit does not use analytics, remarketing or advertising cookies."
    >
      <h2>Essential technology</h2>
      <p>
        The website and its hosting infrastructure may use strictly necessary
        technology to deliver pages, balance traffic and protect the service.
      </p>

      <h2>Analytics and advertising</h2>
      <p>
        Google Ads tags, Microsoft UET, remarketing pixels and non-essential
        analytics are not active. If that changes, we will implement a consent
        interface that prevents those technologies from loading until a visitor
        makes a choice and allows that choice to be withdrawn.
      </p>

      <h2>Updates</h2>
      <p>
        This page will be updated before any non-essential tracking is enabled.
      </p>
    </LegalPage>
  );
}
