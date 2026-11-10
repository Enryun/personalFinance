# Ô Ăn Quan: Vietnamese-first SEO update

Reviewed and updated November 11, 2026.

## Positioning

Primary page: https://www.jamesthang.com/o-an-quan/
Secondary English page: https://www.jamesthang.com/en/o-an-quan/
App Store: https://apps.apple.com/vn/app/id6817187778?l=vi

Vietnamese search intent takes priority: ô ăn quan iPhone / iPad, ô ăn quan offline, ô ăn quan hai người, cách chơi ô ăn quan. These are content targets, not measured search volumes or ranking predictions.

The page centers on “Một vòng quê nhà” with Sân nhà, Đầu ngõ, Sân đình, and Hội làng. Offline campaign and same-device play are separated from online Game Center requirements. Free download, advertising, optional purchases, and iOS/iPadOS 17+ requirements are visible. Rules describe the app’s chosen ruleset and acknowledge regional variations.

## Verified sources

- Vietnamese App Store listing fetched November 11, 2026: campaign, multiplayer, offline requirements, replay, 3D board, advertising, optional cosmetic/ad-removal purchases, device compatibility, and languages.
- App source in Developing/OAnQuan: Campaign/README.md, Documentation/01-Game-Rules-and-User-Features.md, and Domain/Game/Rules/GameRules.swift. The implementation takes precedence over older proposed roadmap documents.
- Existing screenshots and the four real campaign illustrations in the app’s asset catalog. Campaign artwork is presented as illustrations, not fabricated UI screenshots. WebP exports preserve transparency.

## Technical changes

- Vietnamese is the default; English has a separate prerendered route.
- Policies also have separate Vietnamese and English routes; their legal text is unchanged.
- Self-canonicals with trailing slashes; reciprocal vi/en annotations; x-default points to Vietnamese.
- Localized 1200×630 social cards and shared app identity using VideoGame / SoftwareApplication JSON-LD. No invented ratings, review counts, or rich-result promises.
- Existing ?lang=en page and policy links redirect to the English paths. Client navigation preserves additional query parameters and fragments. Netlify query-only legacy URLs receive generated forced 301 rules; those production edge rules require checking after deployment.
- Both language pages and policies are in the generated sitemap.
- Shared branded QR encodes https://apps.apple.com/app/id6817187778 with high error correction. The final icon-overlay proof was decoded successfully with macOS Vision.
- The QR card follows Vola’s desktop pattern: centered app icon, short localized product hook, no dismiss control, hidden on small/short screens.
- Removed the stale homepage “Preparing for App Store submission” label and replaced the product description with Vietnamese campaign positioning.

## Verification

Run `CI=true npm test -- --watchAll=false --runInBand` and `npm run build`.
The build now runs scripts/verify-oanquan.cjs to inspect generated language, canonical links, alternates, schema, app destination, campaign, FAQs, rules, sitemap, and redirect configuration. React tests cover language switching, legacy links, and server-rendered hydration.

The connected browser still returns a timeoutMs integration error, so visual viewport checks are not claimed.

## After deployment

Inspect /o-an-quan/ and /en/o-an-quan/ in Search Console, test the deployed old English URLs, check the QR on a physical iPhone, and confirm social previews. Request indexing of the primary page once. Track Vietnamese query impressions and download clicks over time. Search and AI recommendations are not guaranteed by these changes.
