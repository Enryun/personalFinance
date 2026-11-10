# Folio landing page SEO — November 11, 2026

English-only product page: https://www.jamesthang.com/folio/
App Store: https://apps.apple.com/app/id6765871325

## Positioning and search intent

Primary intent: Markdown editor for iPhone and Mac, Markdown notes, and local Markdown library.
Supporting intents: organize Markdown files with folders and tags, Markdown split-view editor, connected Markdown notes / Link Map, on-device writing assistant, importing public GitHub Markdown documentation.
These are positioning targets, not measured keyword volume or ranking claims.

The page explains actual workflows, offline boundaries, local AI model requirements, one-time Pro pricing, and the difference between import and continuous Git sync. It pairs the Mac screenshots with five selected iPhone screenshots, exported as responsive 480px and 768px WebP assets. The hero shows both platforms. Feature sections show bottom-aligned Mac and iPhone views side by side across screen sizes; Git import retains its Mac screenshot. App-specific metadata, a 1200×630 social card, and SoftwareApplication JSON-LD identify Folio separately from the developer portfolio. No unsupported language routes, invented reviews, or ratings are included.

## Sources checked

- Current US App Store listing, retrieved November 11, 2026: name, description, iOS 17+ and macOS 14+ compatibility, English language, purchases, usage/diagnostic disclosures.
- MDReader source: local model catalog and assistant view model; Mixpanel analytics implementation.
- Existing product screenshots and supplied Folio_Local_Model.png plus Folio iOS Appstore/1.png, 4.png, 5.png, 6.png, and 7.png.

## QR card

Uses the Vola pattern: bottom-right desktop card, real app icon overlay, compact one-line product message, no dismiss button. Hidden below 1024px wide and on screens shorter than 601px. Encodes the Folio App Store URL with high error correction; validate the final branded raster with macOS Vision.

## After publishing

Inspect /folio/ in Google Search Console and request indexing once. Confirm the deployed social image, QR and canonical load correctly. The build includes the canonical page in the sitemap. Review impressions, queries, and App Store clicks over the following weeks. Search and AI recommendations depend on crawling, relevance, competition, and independent evidence; implementation does not guarantee visibility.

Platform wording distinguishes Editor/Preview on iPhone from Split View on Mac. No cross-device synchronization claim is made. The shared App Store link and branded QR remain unchanged.

Web presentation crops the supplied iPhone artwork to the device using a responsive CSS frame. App Store marketing headlines are outside the visible frame; original files are preserved.

Mac App Store artwork uses device-only CSS frames too. The assistant image is already a clean app screenshot and retains its full content. Mac/iPhone pairs share a bottom baseline and consistent proportions without repeated marketing text.

Device pairs sit inside a shared dark panel matched to the original Mac artwork background (#2c2b2c). The Mac polygon cutout is removed so the original chassis edges blend naturally into the panel.
