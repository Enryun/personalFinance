# Vola public visibility baseline — 2026-11-10

## Live deployment

The updated deployment is now public (confirmed by direct HTTP fetches; this task did not deploy it). Sitemap contains 80 URLs, including 24 localized Vola routes. All 24 returned HTTP 200 with the expected self-canonical and no detected HTML noindex tag.

English, Vietnamese, German and Arabic additionally passed DOM checks for their language, writing direction, JSON-LD presence and 25 head language alternates. The JSON evidence is `vola-live-baseline-2026-11-10.json`. Its languageAttributeCount includes menu anchors, not just head links; it is not a head-alternate count.

## Search sample

These are snapshots from the available web-search tool, not a measured Google country/device ranking report. Query results can change and may be incomplete.

| Exact query | Observation |
|---|---|
| `Vola AI Voice Note Taker 6758566739` | Vola surfaced through regional App Store listings and directories including FoxData. This ID-assisted lookup demonstrates identifiable product records, not strong generic discovery. |
| `on-device speech to text app iPhone` | Vola did not appear in the returned sample. Other apps and vendor pages did. |
| `iPhone meeting recorder AI summary app` | Vola was absent from the combined returned sample; this was a batched query, not an independently isolated ranking measurement. |
| `ứng dụng chuyển giọng nói thành văn bản trên iPhone` | Vola did not appear in the isolated returned sample. Many results were general dictation how-to pages rather than recording-to-notes products. |
| Site-restricted Vola paths | The returned sample did not establish the localized pages' index status. Absence is not proof of non-indexing. |

Sources observed: [Vola App Store listing](https://apps.apple.com/al/app/vola-ai-voice-note-taker/id6758566739), [Vola on FoxData](https://foxdata.com/en/app-marketing-analytics/6758566739/as/SL/vola-ai-voice-note-taker/), [TypeWhisper](https://www.typewhisper.com/en/docs/ios/), [Stenio](https://stenio.app/), [Tingdong meeting notes](https://tingdong.app/record/meetings), and [Vietnamese transcription guide](https://notemeeting.com/blog/chuyen-giong-noi-thanh-van-ban). This does not independently verify competitors' claims or endorse their products.

## Meaning and next measurement

The technical deployment is accessible, and product records are discoverable. Generic discovery has not been demonstrated by this small sample. No before/after ranking gain can be calculated from it.

Search Console URL Inspection is needed to confirm whether Google indexed the updated English and Vietnamese pages and which canonical it selected. Record the actual last crawl and page/query impressions before diagnosing an indexing or content problem.

Independent ChatGPT, Perplexity and Google AI-answer recommendation tests were not run. The web-search sample must not be reported as their output. Testing in this same Vola-aware conversation would bias the result.

Use fresh conversations with neutral prompts such as “Recommend an iPhone app that transcribes live speech on-device” and “Ứng dụng nào giúp ghi âm bài giảng trên iPhone và tóm tắt nội dung?”. Save engine, date, locale, exact wording, sources, mentions, recommendation framing and factual errors. Repeat each separately; compare the same cohort over time.
