# The Global Edit

The Global Edit is a Next.js 16 practical-living publication deployed at `https://www.theglobaledit.shop`.

## Purpose

The site publishes original, non-commercial guides for home organisation, travel packing and clothing care. It contains no product sales, affiliate links, sponsored rankings, lead capture or non-essential tracking.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm run audit:ads
```

Run the identity-required audit with the production values:

```bash
npm run audit:launch
```

## Production configuration

- `NEXT_PUBLIC_SITE_URL=https://www.theglobaledit.shop`
- `NEXT_PUBLIC_OPERATOR_NAME=Naman Kharbanda`
- `NEXT_PUBLIC_EDITORIAL_EMAIL=namananya5@gmail.com`

The linked Vercel project is recorded in `.vercel/project.json`. Preserve that link and the existing custom domain.

Policy and content rules live in `docs/ADS_COMPLIANCE.md`, `docs/CLAIMS_REGISTER.md` and `docs/ASSET_RIGHTS_REGISTER.md`.
