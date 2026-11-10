export const makeVolaUi = values => Object.fromEntries(['skip','nav','language','choose','how','data','qrAlt','qrCaption'].map((key, i) => [key, values[i]]));
function expand(p) {
  return {
    title: p.title, description: p.description, eyebrow: `${p.local} · iPhone & iPad`, heading: p.heading, intro: p.intro,
    download: p.get, price: p.price, compatibility: p.os, local: p.local, localText: p.localText, cloud: p.cloud, cloudText: p.cloudText,
    privacy: p.privacy, featuresLabel: p.featuresHeading,
    features: p.features.map(([title,text,alt], i) => ({image: ['summary','ask','search'][i], title, text, alt, detail: i === 2 ? p.share : p.aiLimit})),
    importHeading: p.importHeading, importText: `${p.importText} ${p.importNetwork}`, importAlt: p.importAlt,
    stepsHeading: p.stepsHeading, steps: p.steps, audienceHeading: p.audienceHeading, audiences: p.audiences, consent: p.consent,
    faqHeading: p.faqHeading,
    faqs: p.questions.map((question,i) => [question, [p.offline, `${p.localText} ${p.importNetwork} ${p.cloudText}`, p.cloudText, p.languages, `${p.price} ${p.aiLimit} ${p.share}`, `${p.importText} ${p.share}`][i]]),
    finalHeading: p.finalHeading, finalText: p.finalText, developer: p.developer, walkthrough: p.walkthrough, terms: p.terms, home: p.home, liveAlt: p.liveAlt, ui: makeVolaUi(p.ui)
  };
}

const packs = {
  'ar': require('./locales/ar.json'),
  'bn': require('./locales/bn.json'),
  'de': require('./locales/de.json'),
  'es': require('./locales/es.json'),
  'fr': require('./locales/fr.json'),
  'gu': require('./locales/gu.json'),
  'hi': require('./locales/hi.json'),
  'it': require('./locales/it.json'),
  'ja': require('./locales/ja.json'),
  'kn': require('./locales/kn.json'),
  'ko': require('./locales/ko.json'),
  'ml': require('./locales/ml.json'),
  'mr': require('./locales/mr.json'),
  'or': require('./locales/or.json'),
  'pa': require('./locales/pa.json'),
  'pt-BR': require('./locales/pt-BR.json'),
  'pt-PT': require('./locales/pt-PT.json'),
  'ta': require('./locales/ta.json'),
  'te': require('./locales/te.json'),
  'ur': require('./locales/ur.json'),
  'zh-Hans': require('./locales/zh-Hans.json'),
  'zh-Hant': require('./locales/zh-Hant.json'),
};
export const translatedContent = Object.fromEntries(Object.entries(packs).map(([code, pack]) => [code, expand(pack)]));
