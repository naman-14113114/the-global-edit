# The Global Edit Working Context

Updated: 29 July 2026

## Current Direction

The repository is being rebuilt as a standalone UK beauty-technology consumer publication for informational paid-search traffic.

## Implemented

- Replaced the commercial homepage with neutral consumer education.
- Added five source-linked LED mask guides.
- Added About, Contact, Editorial Policy, Corrections, Privacy, Cookies, Terms and Accessibility pages.
- Added a prominent `Advertisement` label to the paid LED mask buying guide.
- Replaced the legacy advertorial with a direct redirect to the guide.
- Retired the unsupported review, medical-claim articles and PDF with HTTP 410 routes.
- Removed inherited photographs, product assets and the PDF.
- Restricted categories to the published Beauty guide library; unknown categories use a real 404.
- Added canonical metadata, robots, sitemap and security headers.
- Added claims, asset-rights and ads-compliance registers.
- Added automated ads-readiness and launch-identity audits.

## Mandatory Inputs Before Advertising

Set truthful production values for:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_OPERATOR_NAME`
- `NEXT_PUBLIC_EDITORIAL_EMAIL`

Do not invent these values.

## Latest Verification

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed.
- `npm run audit:ads`: passed.
- Paid guide desktop Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100.
- Paid guide mobile Lighthouse: Performance 95, Accessibility 100, Best Practices 100, SEO 100.
- Live routes return 200.
- Legacy advertorial returns one 308 redirect to the paid guide.
- Retired review, article and PDF routes return 410.
- Unknown routes and categories return 404.
- Desktop and mobile browser screenshots show no horizontal overflow.
- Browser console reports no errors or warnings.
- `npm run audit:launch` remains intentionally blocked until the three truthful production identity variables are supplied.

## Operating Rules

- No Buudy relationship, links, products, prices or seller claims.
- No affiliate or checkout links.
- No unsupported medical, clinical, efficacy, review or urgency claims.
- No non-essential tracking until a compliant consent system exists.
- Before every code task, check local changes and compare the current branch with its remote before editing.
- Keep work local unless the user explicitly requests a commit, push or deployment.
