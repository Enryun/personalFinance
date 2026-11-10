# Vola: search and AI discovery audit

Date: 2026-11-10. Scope: public product website, repository implementation, live HTTP responses, current US App Store listing, and a limited web-discovery sample. No production changes made.

## Assessment

Vola has usable technical foundations, but its product page gives search engines and prospective customers an incomplete, inconsistent explanation of the app. Fix product accuracy and positioning first, then strengthen supporting content and independent evidence. AI recommendation performance is not yet measured; no numeric SEO score or ranking forecast is justified.

## Confirmed strengths

- The live product page returns HTTP 200 after a redirect and contains rendered product content in the initial HTML. The earlier concern in `docs/ai-visibility-brand-plan.md` about an empty React root no longer describes the response checked today.
- A distinct title, description, canonical, and social metadata exist.
- Live robots.txt allows crawling and references a valid XML sitemap containing Vola.
- The repository has build-time prerendering, homepage product links, a Vola case-study route, and privacy/terms routes.

## Prioritized findings

| Priority | Finding and evidence | Impact and action |
|---|---|---|
| P1 | The title is `Vola | James Thang`; the H1 is `Work smarter, not harder.` The introduction only says voice to text across languages. | Weak product/category identification. Use a specific title such as `Vola: AI Voice Note Taker for iPhone & iPad` and a heading that names Vola and its purpose. Add a plain explanation of intended users and workflows. |
| P1 | One translation card says 20+ languages while its description says 100+. Other claims include industry-leading accuracy, zero delay, and offline availability without explaining conditions. | Conflicting or unsupported facts make the product difficult to evaluate accurately. Establish verified transcription/translation language support separately from interface languages. Confirm offline behavior feature by feature; remove absolute claims without evidence. |
| P1 | The landing page lacks dedicated explanations of AI summaries, questions about notes, file imports, export, plan limits, and cloud requirements. | Important evaluation questions have no clear answer on the official website. Align visible product copy with verified current behavior and the App Store description, then provide concise FAQs and a worked example. |
| P2 | `/vola` returns 301 to `/vola/`; the page canonical and sitemap instead specify `/vola`. | Conflicting preferred-URL signals and an unnecessary redirect for discovery. Choose the host-supported URL format and align canonical, sitemap, internal links, and redirects. This observation alone does not prove lost indexing. |
| P2 | `getMetadata('/vola')` returns no schema, and no JSON-LD is present in the initial live response. | Add a stable SoftwareApplication entity linked to the developer and store listing, using only facts visible on the page. Browser-rendered schema inspection was unavailable, so this is a source/initial-HTML finding, not an independently verified rendered-DOM result. Structured data does not guarantee rankings, rich results, or recommendations. |
| P2 | Download controls are JavaScript buttons using `window.open`; the initial HTML contains no App Store anchor. | Express the product/store relationship with ordinary accessible links. Preserve current styling and new-tab behavior if desired. |
| P2 | The page supplies feature cards but no substantial example, decision guidance, or product-specific help links. | Add a real recording-to-notes example, a demo, and clear limitations. Link relevant supporting pages to the product and case study. Plan lecture, meeting, and import guides only when they offer distinct useful content. |
| P3 | The icon and three screenshot source files total approximately 3.33 MB. Images lack intrinsic HTML dimensions and lazy-loading attributes. | Resize/compress images, use modern formats, reserve layout space, and lazy-load below-fold screenshots. CSS may already reserve some space; no measured Core Web Vitals failure is asserted. |
| P3 | Social previews use the developer portfolio image and its developer-focused alt text. Feature headings jump from H1 to H3; the benefits section references an absent heading ID. | Add a Vola-specific social image and correct the section heading structure and label. These support clarity/accessibility; they are not the leading discovery blockers. |

Implementation locations: `src/Pages/AppIntroduction/Vola/vola.jsx`, `src/siteMetadata.js`, `src/Components/SiteMetadata.jsx`, `src/Pages/HomePage/projects.js`, and `scripts/prerender-home.cjs`.

## Product facts to carry into a rewrite

The freshly fetched US App Store page describes recording and live transcription, supported audio/video imports, AI summaries and questions, search/organization, and PDF/text export. It distinguishes limited free usage from paid allowances. AI summaries/chat require sign-in, internet, credits, and cloud processing; supported languages depend on device/system support. Avoid implying every feature works offline. The app interface language count is not a transcription language count.

The search tool initially returned an older listing snapshot, while a direct fetch returned version 1.3.1 and updated copy. Use current verified product behavior before publishing language counts, pricing, or feature limits. Do not copy stale directory data as the source of truth.

## AI recommendation plan

Treat citations, mentions, and favorable product recommendations as separate outcomes. The small discovery sample found the store listing, mirrors, and at least one directory; it does not establish authoritative review coverage or performance inside AI products. Search results are not a substitute for testing actual AI answers.

Create a repeatable baseline with these ten candidate prompts. They are test hypotheses, not validated keyword-volume targets:

1. Recommend an iPhone app that records lectures and summarizes them.
2. What iPad app can turn meeting recordings into searchable notes?
3. Which iPhone note-taking apps let me ask questions about a recording?
4. What app can transcribe an existing audio file on iPhone?
5. What app can turn a video file into notes on iPad?
6. Recommend a voice note app with PDF or text export.
7. What is Vola AI Voice Note Taker, and who makes it?
8. Is Vola suitable for lecture notes?
9. Does Vola work offline, including its AI features?
10. What is free in Vola, and what requires payment?

Run the same prompts across ChatGPT search, Perplexity, and Google AI features where available. Record date, country/language, engine, exact prompt, citations, named competitors, recommendation framing, and factual errors. Repeat each prompt across separate sessions to observe variation. These runs have not been completed in this audit.

After the official facts are clear, seek genuine customer reviews and independent hands-on demonstrations in channels actually appearing in these results. Do not manufacture endorsements or prioritize self-ranked “best apps” pages as the first action.

Track Search Console impressions/clicks for product and use-case queries, landing visits, App Store outbound clicks, and app acquisition data where available. Track AI referral visits alongside recommendation frequency; neither metric alone captures the whole journey.

## Recommended execution order

1. Verify capabilities and limits; rewrite product identity, feature explanations, and FAQs.
2. Align preferred URLs; add real store links, appropriate schema, and product social metadata.
3. Optimize images and repair heading semantics. Validate generated HTML and deployed responses.
4. Publish a real demo and targeted supporting content; establish the AI prompt baseline and seek independent evidence.

No Search Console, analytics, hosting bot logs, live AI-answer cohort, backlink inventory, or measured mobile performance data was available. Index coverage, rankings, WAF behavior for actual bots, and conversion impact remain unverified. An empty site-search sample is not proof that Google has not indexed the page.

Google states that its AI features build on normal SEO foundations and require no special AI schema or machine-readable files. Treat `llms.txt` as optional experimentation, not a substitute for these fixes.

## Sources

- [Live Vola product page](https://www.jamesthang.com/vola/) — initial HTML and redirect chain fetched directly on the audit date.
- [Live robots.txt](https://www.jamesthang.com/robots.txt) and [XML sitemap](https://www.jamesthang.com/sitemap.xml).
- [US App Store listing](https://apps.apple.com/us/app/vola-ai-voice-note-taker/id6758566739) — fetched directly; cached search extraction differed.
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).
- Local `ai-seo` skill v2.12.3 and its citations-vs-recommendations reference; local `seo-audit` skill v2.2.1. Observational claims in skill references are not treated as product-specific guarantees.
