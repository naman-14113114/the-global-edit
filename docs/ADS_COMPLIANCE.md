# The Global Edit Ads Compliance Baseline

Last reviewed: 29 July 2026

## Launch Position

The Global Edit is a standalone UK consumer publication. It does not sell products, collect sales leads, publish affiliate links, rank products for payment, or direct readers to a checkout.

The initial paid destination is:

`/guides/led-face-mask-buying-guide-uk`

The page carries a prominent `Advertisement` label because Microsoft treats paid advertorial landing pages as advertising content.

## Content Rules

- Consumer education only.
- No disease-treatment or medicinal claims.
- No unsupported clinical, medical, testing, certification or professional-endorsement claims.
- No invented experts, laboratories, reviews, testimonials, customer counts or ratings.
- No product prices, crossed-out prices, gifts, scarcity, countdowns or checkout calls to action.
- No undocumented photography, product packshots, competitor imagery, before-and-after images or PDFs.
- Each factual guide identifies its public sources and review date.
- The publication states that it does not perform laboratory or clinical testing.

## Tracking Rules

The launch contains no Google Ads tag, Microsoft UET, analytics, remarketing pixel or other non-essential tracking. Before adding any such technology:

1. Implement a UK-compliant consent interface.
2. Block non-essential storage and access until consent.
3. Record the choice and provide withdrawal.
4. Update the privacy and cookie notices.
5. Verify advertising and analytics tags do not fire before consent.

## Advertising Rules

- UK and English only for the initial campaign.
- Link directly to the final guide URL without a redirect.
- Use informational exact- and phrase-match keywords.
- Exclude treatment, cure, disease, medical-grade, clinically proven, guaranteed result, discount, free and brand-comparison searches.
- Do not use shopping ads, health-condition targeting, remarketing, countdowns, review extensions, prices or promotional assets.
- Advertiser name, payment details, billing country, verification documents and domain ownership must be genuine and consistent.
- A previously suspended account must not be bypassed with a new account.

## Launch Blockers

The following environment variables must contain truthful public information before advertising:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_OPERATOR_NAME`
- `NEXT_PUBLIC_EDITORIAL_EMAIL`

Run `npm run audit:launch` with the production environment before submitting ads.

## Policy Sources

- Google Ads policies: https://support.google.com/adspolicy/answer/6008942?hl=en
- Google misrepresentation policy: https://support.google.com/adspolicy/answer/6020955?hl=en-AU
- Microsoft advertorial and landing-page policy: https://help.ads.microsoft.com/apex/index/3/en/60215
- ASA cosmetic-device guidance: https://www.asa.org.uk/news/face-facts-are-your-cosmetic-device-ads-making-medicinal-claims.html
- MHRA medical-device guidance: https://www.gov.uk/guidance/medical-devices-how-to-comply-with-legal-requirements-in-great-britain
- CMA unfair-commercial-practices guidance: https://www.gov.uk/government/publications/unfair-commercial-practices-cma207/unfair-commercial-practices
- ICO storage and access guidance: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/
