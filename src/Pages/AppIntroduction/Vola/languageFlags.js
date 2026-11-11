// Reuses the local SVG flag pattern from the user’s Metro_System project.
// Flags are decorative language-picker cues; native language names are the labels.
const star = (x, y, radius) => Array.from({ length: 10 }, (_, i) => {
  const angle = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? radius * .382 : radius;
  return `${(x + Math.cos(angle) * r).toFixed(3)},${(y + Math.sin(angle) * r).toFixed(3)}`;
}).join(' ');
const svg = body => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20">${body}</svg>`);
const sun = Array.from({ length: 24 }, (_, i) => {
  const angle = -Math.PI / 2 + i * Math.PI / 12, r = i % 2 ? 2 : 3.5;
  return `${(7.5 + Math.cos(angle) * r).toFixed(3)},${(5 + Math.sin(angle) * r).toFixed(3)}`;
}).join(' ');
// Taegeukgi: heaven NW, water NE, fire SW, earth SE (MOIS national symbols).
const trigram = (x, y, angle, broken) => `<g fill="#000" transform="translate(${x} ${y}) rotate(${angle})">${[0, 1, 2].map(row => {
  const top = -5 / 3 + row * 1.25;
  return broken.includes(row)
    ? `<path d="M-2.5 ${top}h2.083v.833h-2.083zM.417 ${top}H2.5v.833H.417z"/>`
    : `<path d="M-2.5 ${top}h5v.833h-5z"/>`;
}).join('')}</g>`;
const flags = Object.freeze({
  us: svg(`<path fill="#fff" d="M0 0h30v20H0z"/>${Array.from({length:7},(_,i)=>`<path fill="#b22234" d="M0 ${i*40/13}h30v${20/13}H0z"/>`).join('')}<path fill="#3c3b6e" d="M0 0h12v10.77H0z"/>${Array.from({length:9},(_,row)=>Array.from({length:row%2?5:6},(_,col)=>`<polygon fill="#fff" points="${star(1+col*2+(row%2?1:0),.8+row*1.15,.5)}"/>`).join('')).join('')}`),
  de: svg('<path fill="#000" d="M0 0h30v20H0z"/><path fill="#d00" d="M0 6.667h30v6.666H0z"/><path fill="#ffce00" d="M0 13.333h30V20H0z"/>'),
  fr: svg('<path fill="#fff" d="M0 0h30v20H0z"/><path fill="#002395" d="M0 0h10v20H0z"/><path fill="#ed2939" d="M20 0h10v20H20z"/>'),
  it: svg('<path fill="#fff" d="M0 0h30v20H0z"/><path fill="#009246" d="M0 0h10v20H0z"/><path fill="#ce2b37" d="M20 0h10v20H20z"/>'),
  es: svg('<path fill="#aa151b" d="M0 0h30v20H0z"/><path fill="#f1bf00" d="M0 5h30v10H0z"/><path fill="#aa151b" d="M8 8h4v5a2 2 0 0 1-4 0z"/><path fill="#f1bf00" d="M8 7h4v1H8z"/><path fill="#fff" d="M9 9h2v3H9z"/>'),
  pt: svg('<path fill="#f00" d="M0 0h30v20H0z"/><path fill="#006600" d="M0 0h12v20H0z"/><circle cx="12" cy="10" r="4.3" fill="#ff0"/><path fill="#f00" d="M9.5 7h5v5a2.5 2.5 0 0 1-5 0z"/><path fill="#fff" d="M10.5 8h3v3.5a1.5 1.5 0 0 1-3 0z"/><path fill="#039" d="M11.5 8.7h1v1h-1zM11.5 11h1v1h-1zM10.8 9.8h1v1h-1zM12.2 9.8h1v1h-1z"/>'),
  br: svg(`<path fill="#009b3a" d="M0 0h30v20H0z"/><path fill="#ffdf00" d="m15 2 13 8-13 8L2 10z"/><circle cx="15" cy="10" r="5" fill="#002776"/><path d="M10.2 8.6c3-.3 6 1 9 3" fill="none" stroke="#fff" stroke-width="1"/>${[[13,12],[15,13],[17,12],[16,8]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r=".25" fill="#fff"/>`).join('')}`),
  in: svg(`<path fill="#fff" d="M0 0h30v20H0z"/><path fill="#ff9933" d="M0 0h30v6.667H0z"/><path fill="#138808" d="M0 13.333h30V20H0z"/><g fill="none" stroke="#000080"><circle cx="15" cy="10" r="2.6" stroke-width=".3"/>${Array.from({length:24},(_,i)=>`<path d="M15 10v-2.6" stroke-width=".15" transform="rotate(${i*15} 15 10)"/>`).join('')}</g>`),
  bd: svg('<path fill="#006a4e" d="M0 0h30v20H0z"/><circle cx="13.5" cy="10" r="6" fill="#f42a41"/>'),
  ae: svg('<path fill="#000" d="M0 0h30v20H0z"/><path fill="#fff" d="M0 0h30v13.333H0z"/><path fill="#00732f" d="M0 0h30v6.667H0z"/><path fill="#f00" d="M0 0h7.5v20H0z"/>'),
  pk: svg(`<path fill="#01411c" d="M0 0h30v20H0z"/><path fill="#fff" d="M0 0h7.5v20H0z"/><circle cx="19" cy="10" r="6" fill="#fff"/><circle cx="20.5" cy="8.7" r="5.4" fill="#01411c"/><polygon fill="#fff" points="${star(23,6,1.8)}"/>`),
  cn: svg(`<path fill="#de2910" d="M0 0h30v20H0z"/><g fill="#ffde00"><polygon points="${star(5,5,3)}"/>${[[10,2],[12,4],[12,7],[10,9]].map(([x,y]) => `<polygon points="${star(x,y,1)}" transform="rotate(${(Math.atan2(5-y,5-x)+Math.PI/2)*180/Math.PI} ${x} ${y})"/>`).join('')}</g>`),
  kr: svg(`<path fill="#fff" d="M0 0h30v20H0z"/><g transform="translate(15 10) rotate(33.69)"><circle r="5" fill="#003478"/><path fill="#c60c30" d="M-5 0a5 5 0 0 1 10 0 2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 1-5 0z"/></g>${trigram(7.5,5,-56.31,[])}${trigram(22.5,5,56.31,[0,2])}${trigram(7.5,15,56.31,[1])}${trigram(22.5,15,-56.31,[0,1,2])}`),
  jp: svg('<path fill="#fff" d="M0 0h30v20H0z"/><circle cx="15" cy="10" r="6" fill="#bc002d"/>'),
  id: svg('<path fill="#fff" d="M0 0h30v20H0z"/><path fill="#ce1126" d="M0 0h30v10H0z"/>'),
  th: svg('<path fill="#a51931" d="M0 0h30v20H0z"/><path fill="#fff" d="M0 3.333h30v13.334H0z"/><path fill="#2d2a4a" d="M0 6.667h30v6.666H0z"/>'),
  tw: svg(`<path fill="#fe0000" d="M0 0h30v20H0z"/><path fill="#000095" d="M0 0h15v10H0z"/><polygon fill="#fff" points="${sun}"/><circle cx="7.5" cy="5" r="2.2" fill="#000095"/><circle cx="7.5" cy="5" r="1.8" fill="#fff"/>`),
  vn: svg(`<path fill="#da251d" d="M0 0h30v20H0z"/><polygon fill="#ff0" points="${star(15, 10, 6)}"/>`),
  sg: svg(`<path fill="#fff" d="M0 0h30v20H0z"/><path fill="#ef3340" d="M0 0h30v10H0z"/><circle cx="6.1" cy="5" r="3.5" fill="#fff"/><circle cx="7.5" cy="4.2" r="3.1" fill="#ef3340"/>${[[10.8,2.3],[13,3.9],[12.2,6.5],[9.4,6.5],[8.6,3.9]].map(([x,y]) => `<polygon fill="#fff" points="${star(x,y,.95)}"/>`).join('')}`)
});

export const countryFlagUrl = countryCode => flags[countryCode] ?? null;
