import argparse
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
from concurrent.futures import ThreadPoolExecutor
import json
parser=argparse.ArgumentParser(description='Export localized Vola screenshot assets for the web')
parser.add_argument('--source',type=Path,required=True,help='VolaAppstore screenshot directory')
args=parser.parse_args()
project=Path(__file__).resolve().parents[1]
root=project/'public/vola'; source=args.source
locales=[(p.stem,'jap' if p.stem=='ja' else p.stem) for p in (project/'src/Pages/AppIntroduction/Vola/locales').glob('*.json')]
def export(item):
 code,folder=item; dest=root/code;dest.mkdir(exist_ok=True)
 for name,device,num in [('live','iphone','02'),('summary','iphone','01'),('ask','iphone','03'),('search','iphone','06'),('import','ipad','04')]:
  with Image.open(source/folder/device/(num+'.png')) as original:
   im=original.convert('RGB')
   for width in [480,960]:im.resize((width,round(im.height*width/im.width)),Image.Resampling.LANCZOS).save(dest/f'{name}-{width}.webp','WEBP',quality=85,method=6)
 # Universal brand/platform wording, with the actual localized UI as the demonstration.
 card=Image.new('RGB',(1200,630),'#f3f9f7');draw=ImageDraw.Draw(card)
 icon=Image.open(project/'src/Image/Vola.webp').convert('RGB').resize((88,88),Image.Resampling.LANCZOS);card.paste(icon,(64,62))
 bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';normal='/System/Library/Fonts/Supplemental/Arial.ttf'
 draw.text((64,222),'Vola',font=ImageFont.truetype(bold,108),fill='#163035')
 draw.text((68,370),'iPhone & iPad',font=ImageFont.truetype(normal,38),fill='#456166')
 draw.text((68,536),'jamesthang.com/'+code.lower()+'/vola',font=ImageFont.truetype(normal,22),fill='#00758a')
 shot=Image.open(dest/'live-960.webp');shot=shot.resize((400,round(shot.height*400/shot.width)),Image.Resampling.LANCZOS);card.paste(shot,(730,35));card.save(dest/'social-card.png',optimize=True)
 return code
with ThreadPoolExecutor(max_workers=4) as pool:
 for code in pool.map(export,locales):print('Exported',code,flush=True)
