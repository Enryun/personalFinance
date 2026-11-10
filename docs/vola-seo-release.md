# Vola landing page: first SEO improvement

Implemented locally on 2026-11-10. English: `/vola/`. Vietnamese: `/vi/vola/`.

## What changed

- On-device live speech-to-text positioning, product explanation, workflows, FAQs, plan limitations, and developer/support links.
- Privacy wording follows the existing Vola policy: live voice recognition runs on-device; imported-media recognition may send audio to Apple; optional Gemini processing sends text after permission. No claim that the whole app is offline or that all processing stays on-device.
- New localized screenshots exported from `~/Downloads/VolaAppstore/{en,vi}` as responsive 480/960px WebP files. Live transcription leads; summary, Ask AI, search, and iPad import images explain the workflow. The unverified translation-count image is deliberately excluded.
- Localized 1200×630 social cards, title/description, SoftwareApplication schema, reciprocal language alternates, x-default, and self-canonicals.
- Vola canonical URLs and internal product links use trailing slashes to match Netlify’s observed static-directory behavior. Other routes retain their existing conventions.
- Both language routes are prerendered and included in the generated sitemap. Native App Store links retain the current listing ID.

## Measurement handoff

Each download link dispatches a browser `vola:app-store-click` CustomEvent with `{ product: 'vola', locale: 'en' | 'vi', placement: 'navigation' | 'hero' | 'final' }`. Data attributes expose the same placement for tag-manager configuration. No analytics destination or account is configured; these events are not persisted until connected to an approved analytics collector. Hidden mobile navigation links do not receive clicks.

Before deploying, capture existing product URL impressions/clicks and queries in Google Search Console, current traffic and store-outbound clicks if an existing collector supports them, and App Store acquisition data. These connected accounts were unavailable in this session, so no baseline is invented.

After deploying the complete build, inspect both URLs in Search Console, submit the updated sitemap, and verify redirects, canonical URLs, reciprocal alternates, HTML content, image responses, and social previews on the live host. Google’s software-app rich result additionally requires a qualifying visible review/rating; none was invented here. Schema describes the app but does not establish rich-result eligibility by itself.

Use the ten prompts in `vola-seo-ai-audit.md` as the initial AI-answer cohort. Record engine, date, locale, citations, mentions, recommendations, framing, and factual errors. Run in separate sessions and compare over time. Web search results alone do not count as this baseline.

## Verification and limits

React navigation and hydration tests cover both Vola language versions, stable app identity, canonical/language metadata, social image reset when leaving the page, and direct store links. The production prerender checks local links and image assets. A separate generated-output inspection verifies titles, image variants, JSON-LD, language alternates, and sitemap entries.

No browser session was available through the computer-use tool. Responsive CSS and image dimensions were checked in source, and social cards were visually inspected, but mobile/desktop browser screenshots and measured Core Web Vitals still need live verification. No deployment, search submission, or App Store listing edit has been performed.
