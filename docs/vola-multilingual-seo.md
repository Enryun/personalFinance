# Vola: multilingual SEO and AI discovery implementation

Implemented 2026-11-10; not deployed by this task.

## Locale coverage

24 locale pages: English, Vietnamese, German, Spanish, French, Italian, Japanese, Korean, Brazilian Portuguese, European Portuguese, Simplified Chinese, Traditional Chinese, Arabic, Urdu, Bengali, Hindi, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, and Telugu.

The app screenshot directories provide the asset coverage. This page count is a web-locale count, not a claim that every speech-recognition or translation feature supports all those languages on every device.

English remains `/vola/`. Other pages use lower-case locale-prefixed URLs, such as `/de/vola/`, `/pt-br/vola/`, `/pt-pt/vola/`, `/zh-hans/vola/`, and `/zh-hant/vola/`. Japanese uses `/ja/vola/`, mapped to the existing `jap` asset directory. Language annotations preserve standard forms such as `pt-BR` and `zh-Hant`.

## Delivered

- Translated product explanation, local/cloud data boundaries, feature and import workflows, three steps, four audiences, six FAQs, plan constraints, navigation, CTA labels, QR captions, and screenshot descriptions.
- Language-specific product titles and descriptions with natural speech-to-text or transcription terminology. These are authored targeting choices, not validated keyword-volume claims.
- Dedicated initial HTML for each route, matching language/direction, self-canonicals, 24 reciprocal locale alternates plus English x-default, and sitemap coverage.
- Shared SoftwareApplication identity linked to the developer and official App Store listing, with localized descriptions and plan disclosures. No invented ratings or reviews.
- Matching 480px/960px WebP screenshots for each locale, including an iPad import example. All retain a separate distinction between local live transcription and Apple network processing for imported media.
- Localized social previews using actual screenshot UI and universal Vola/platform branding; descriptive social alt text is localized.
- Native language names in a scrollable two-column picker; right-to-left layouts for Arabic and Urdu; document direction resets when navigating back to other site pages. Screenshots and QR pixels are not mirrored.

These provisions make the correct product facts available to search and AI retrieval. They do not establish recommendations in any AI engine or influence training on demand.

## Validation

The production build renders 80 public site routes, including all 24 Vola pages. Generated-output validation covers 600 language annotations (24 × 25), image variants, native language links, store URLs, schema, direction, canonical URLs, and sitemap entries. The full React test suite covers each localized page and metadata, language navigation, hydration for existing routes, and RTL-to-LTR transitions.

The browser controls have been failing in this session. Browser screenshots, longest-language overflow, font rendering, mobile keyboard interaction, and live performance are therefore not certified by these automated checks.

## Review and rollout still required

- Native speakers should review wording and screenshots, especially regional Portuguese and the Indic languages. These are authored translations, not externally certified native editorial copy. Localized page content is concise and adapted rather than a line-for-line reproduction of the longer English page.
- Legal documents and developer walkthroughs still lead to English destinations. The official App Store badge artwork remains the existing English badge, while its link accessible name and the surrounding UI are localized.
- The Portuguese regional pages use regional wording and assets; Google may still consolidate similar same-language pages. Separate self-canonicals do not guarantee independent indexing.
- Deploy the complete build, inspect representative locale URLs in Search Console, and check the already-submitted sitemap after Google reads the update.
- Measure each locale separately: impressions, queries, clicks, store outbound clicks and AI citations/mentions/recommendations. No connected account measurements were made here.
- Extend the audit’s prompt portfolio with natural local buyer questions. Review actual cited sources per engine and language before selecting local directories, publishers or review channels.

## References

[Google localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions) supports separate translated pages and reciprocal alternate annotations. `ai-seo` multilingual guidance informs the per-language measurement and local-source plan; no vendor visibility percentages are used as forecasts.
