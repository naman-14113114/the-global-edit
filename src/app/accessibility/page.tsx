import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Accessibility",
  description:
    "The Global Edit accessibility approach and how to report a problem.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Guides should be usable by as many people as possible."
      intro="We aim for clear structure, keyboard access, visible focus, sufficient contrast and responsive reading layouts."
    >
      <h2>Current approach</h2>
      <ul>
        <li>Semantic headings and landmarks organise each page.</li>
        <li>Navigation and interactive controls are keyboard accessible.</li>
        <li>Text contrast and focus indicators are designed to remain visible.</li>
        <li>Layouts reflow for smaller screens without horizontal scrolling.</li>
        <li>Original code-rendered illustrations include text alternatives.</li>
      </ul>

      <h2>Ongoing review</h2>
      <p>
        Accessibility is checked during scheduled site reviews, including
        keyboard navigation, responsive layout, focus visibility and document
        structure.
      </p>
    </LegalPage>
  );
}
