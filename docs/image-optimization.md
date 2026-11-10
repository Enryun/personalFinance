# Site-wide image optimization

Converted 88 referenced PNG/JPEG assets to WebP: 73,495,410 bytes → 37,331,732 bytes (49.2% smaller across the converted asset set, not a per-page download measurement).

- 74 PNG inputs use lossless WebP, preserving dimensions, visible pixels, and transparency. Exports were checked against the decoded originals on white and black backgrounds.
- 14 JPEG inputs use quality-90 WebP, with original displayed dimensions preserved. Pixel comparisons against decoded JPEGs measured 41.9–52.1 dB PSNR; this is a fidelity check, not a browser performance metric.
- Every conversion is smaller than its source. All page image references were updated, including portfolio, app pages, policies, books, and Vola’s navigation icon.
- Page images use asynchronous decoding. Clearly below-fold screenshots in the older galleries now lazy-load; existing hero loading policies remain in place.
- Existing WebP assets remain unchanged. Favicons/manifest icons and social-preview images retain PNG for compatibility. Unused PNG/JPEG originals have been removed from the working tree; previously tracked originals remain recoverable from Git history.

The conversion manifest is `docs/image-optimization.json`. The exporter is `scripts/optimize-images.py` (requires Python and Pillow). It discovers PNG/JPEG imports, creates WebP siblings without overwriting existing WebP files, checks exported images, and then updates references. Removing originals is a separate cleanup step after confirming references. Running it again with no new raster imports leaves the manifest unchanged.

Validation: production build prerendered 58 public routes and checked image/link destinations; all 12 React tests passed. Generated HTML was also inspected for missing assets, remaining PNG/JPEG page images, and asynchronous decoding. Browser visual verification and real loading/Core Web Vitals measurements were not available in this session. Not deployed.

Cleanup: removed 103 unused originals (83,268,896 bytes), including older unused raster assets that were not part of the conversion set. Required PNG social cards and favicon remain.
