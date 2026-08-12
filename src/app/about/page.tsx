import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "How The Global Edit creates original, non-commercial practical-living guides.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="About the publication"
      title="Practical information, with clear limits."
      intro="The Global Edit is an independent UK publication about everyday home, travel and clothing-care routines."
    >
      <h2>What we do</h2>
      <p>
        We turn ordinary household and travel tasks into clear sequences that a
        reader can follow and adapt. Every guide is written for this publication,
        carries a publication and review date, and gives the complete method on
        the page.
      </p>

      <h2>What we do not do</h2>
      <p>
        We do not sell anything, collect leads, publish affiliate links, accept
        payment for rankings or use the site to provide regulated advice.
      </p>

      <h2>Our standard</h2>
      <p>
        We favour direct instructions, clear scope and ordinary examples over
        hype or expertise theatre. See our{" "}
        <a href="/editorial-policy">editorial policy</a> and{" "}
        <a href="/corrections">corrections process</a>.
      </p>
    </LegalPage>
  );
}
