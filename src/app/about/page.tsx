import LegalPage from "@/components/LegalPage";
import { IDENTITY_IS_CONFIGURED, OPERATOR_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "How The Global Edit produces UK consumer education about beauty technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="About the publication"
      title="Consumer education, with clear limits."
      intro="The Global Edit publishes general UK consumer information about beauty-technology claims, product instructions, specifications and seller terms."
    >
      <h2>What we do</h2>
      <p>
        We read publicly available material from regulators, government bodies,
        manufacturers and sellers, then explain the questions a consumer can ask
        before choosing a product. Our guides identify their sources and show
        publication and review dates.
      </p>

      <h2>What we do not do</h2>
      <p>
        We do not perform laboratory or clinical testing. We do not provide
        medical advice, diagnose conditions, promise results, sell products,
        collect sales leads or accept payment for rankings.
      </p>

      <h2>Publisher</h2>
      {IDENTITY_IS_CONFIGURED ? (
        <p>{OPERATOR_NAME} publishes The Global Edit.</p>
      ) : (
        <p>
          The legal publisher identity is still being configured. The site must
          not be used for paid advertising until the real operator name and a
          working domain-based contact email are published.
        </p>
      )}

      <h2>Our standard</h2>
      <p>
        We distinguish statements that can be checked from opinions and
        manufacturer marketing. When a source does not establish a conclusion,
        we do not imply that it does. See our{" "}
        <a href="/editorial-policy">editorial policy</a> and{" "}
        <a href="/corrections">corrections process</a>.
      </p>
    </LegalPage>
  );
}
