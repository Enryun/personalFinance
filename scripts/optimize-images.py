"""Export referenced raster assets to WebP and update source imports.

Run with Python and Pillow from any directory. PNG exports are lossless;
JPEG exports use quality 90. Removing originals requires a separate reference-checked cleanup.
"""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import json
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
REFERENCE = re.compile(r'''(['"])([^'"\n]*Image/[^'"\n]+\.(?:png|jpe?g))\1''', re.I)
source_files = [p for p in (ROOT / 'src').rglob('*') if p.suffix in {'.js', '.jsx', '.css', '.scss'}]
assets = set()
for source in source_files:
    for match in REFERENCE.finditer(source.read_text()):
        asset = (source.parent / match[2]).resolve()
        if not asset.is_file():
            raise ValueError(f'Missing source: {asset}')
        assets.add(asset)
if any('/vola/icon.png' in source.read_text() for source in source_files):
    assets.add(ROOT / 'public/vola/icon.png')
if not assets:
    print('No PNG/JPEG imports remain to convert.')
    raise SystemExit(0)

def convert(source):
    destination = source.with_suffix('.webp')
    if destination.exists():
        raise ValueError(f'Refusing to overwrite existing asset: {destination}')
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGBA')
        lossless = source.suffix.lower() == '.png'
        image.save(destination, 'WEBP', lossless=lossless, quality=100 if lossless else 90, method=6, exact=True)
        with Image.open(destination) as exported:
            exported = exported.convert('RGBA')
            assert image.size == exported.size
            assert image.getchannel('A').tobytes() == exported.getchannel('A').tobytes()
            if lossless:
                for background in ['white', 'black']:
                    canvas = Image.new('RGBA', image.size, background)
                    assert Image.alpha_composite(canvas, image).tobytes() == Image.alpha_composite(canvas, exported).tobytes()
    return {'source': str(source.relative_to(ROOT)), 'webp': str(destination.relative_to(ROOT)), 'before': source.stat().st_size, 'after': destination.stat().st_size, 'lossless': lossless}

with ThreadPoolExecutor(max_workers=4) as pool:
    report = list(pool.map(convert, sorted(assets)))
for source in source_files:
    previous = source.read_text()
    updated = REFERENCE.sub(lambda m: m[1] + str(Path(m[2]).with_suffix('.webp')) + m[1], previous)
    updated = updated.replace('/vola/icon.png', '/vola/icon.webp')
    if previous != updated:
        source.write_text(updated)
summary = {'images': len(report), 'before': sum(x['before'] for x in report), 'after': sum(x['after'] for x in report), 'assets': report}
(ROOT / 'docs/image-optimization.json').write_text(json.dumps(summary, indent=2) + '\n')
print(json.dumps({k: v for k, v in summary.items() if k != 'assets'}))
