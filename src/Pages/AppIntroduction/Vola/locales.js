const languageCountries = { en: 'us', vi: 'vn', de: 'de', es: 'es', fr: 'fr', it: 'it', ja: 'jp', ko: 'kr', 'pt-BR': 'br', 'pt-PT': 'pt', 'zh-Hans': 'cn', 'zh-Hant': 'tw', ar: 'ae', ur: 'pk', bn: 'bd', hi: 'in', gu: 'in', kn: 'in', ml: 'in', mr: 'in', or: 'in', pa: 'in', ta: 'in', te: 'in' };
export const volaLocales = [
  ['en','English','en'], ['vi','Tiếng Việt','vi'], ['de','Deutsch','de'], ['es','Español','es'], ['fr','Français','fr'],
  ['it','Italiano','it'], ['ja','日本語','jap'], ['ko','한국어','ko'], ['pt-BR','Português (Brasil)','pt-BR'], ['pt-PT','Português (Portugal)','pt-PT'],
  ['zh-Hans','简体中文','zh-Hans'], ['zh-Hant','繁體中文','zh-Hant'], ['ar','العربية','ar'], ['ur','اردو','ur'],
  ['bn','বাংলা','bn'], ['hi','हिन्दी','hi'], ['gu','ગુજરાતી','gu'], ['kn','ಕನ್ನಡ','kn'], ['ml','മലയാളം','ml'],
  ['mr','मराठी','mr'], ['or','ଓଡ଼ିଆ','or'], ['pa','ਪੰਜਾਬੀ','pa'], ['ta','தமிழ்','ta'], ['te','తెలుగు','te']
].map(([code, name, source]) => ({code, name, source, country: languageCountries[code], path: code === 'en' ? '/vola/' : `/${code.toLowerCase()}/vola/`, direction: ['ar','ur'].includes(code) ? 'rtl' : 'ltr'}));
export const getVolaLocale = pathname => volaLocales.find(locale => locale.path.replace(/\/$/, '') === pathname.replace(/\/+$/, '').toLowerCase());
