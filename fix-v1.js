const fs = require('fs');
const STRIPE = 'https://buy.stripe.com/8x27sKeOI8O8baC9pz1oI0H';

// Read as latin1 to preserve bytes, then fix encoding
let raw = fs.readFileSync('./public/index.html', 'latin1');

// Re-encode from latin1 to utf8 (this fixes the mojibake from Windows encoding issue)
let html = Buffer.from(raw, 'latin1').toString('utf8');

// Additional mojibake patterns to clean
const fixes = [
  ['\u00e2\u0080\u0094', '\u2014'], // em dash
  ['\u00e2\u0080\u0093', '\u2013'], // en dash
  ['\u00e2\u0080\u0099', '\u2019'], // right single quote
  ['\u00e2\u0080\u009c', '\u201c'], // left double quote
  ['\u00e2\u0080\u009d', '\u201d'], // right double quote
  ['\u00c2\u00b7', '\u00b7'],       // middle dot
  ['\u00c2\u00a9', '\u00a9'],       // copyright
  ['\u00e2\u0086\u0092', '\u2192'], // right arrow
  ['\u00e2\u0098\u0085', '\u2605'], // star
  ['\u00e2\u009c\u0085', '\u2705'], // checkmark box
  ['\u00e2\u009c\u0098', '\u2718'], // X
  ['\u00e2\u009a\u00a1', '\u26a1'], // lightning
  ['\u00c2\u00ae', '\u00ae'],       // registered
];

for (const [bad, good] of fixes) {
  while (html.includes(bad)) html = html.split(bad).join(good);
}

// Fix Stripe links — nav and hero to go direct to Stripe
html = html.replace(
  'href="#pricing" class="nav-cta"',
  `href="${STRIPE}" class="nav-cta"`
);
html = html.replace(
  'href="#pricing" class="btn-hero"',
  `href="${STRIPE}" class="btn-hero"`
);

// Add urgency bar direct link
html = html.replace(
  /(<div class="urgency-bar">)(.*?)(<\/div>)/,
  (m, open, content, close) => {
    if (content.includes('buy.stripe')) return m;
    return `${open}${content} &nbsp;<a href="${STRIPE}" style="color:#fbbf24;text-decoration:underline;font-weight:900;">Get Access \u2192</a>${close}`;
  }
);

// Add mid-page CTA after modules section, before tools/bonuses
const midCTA = `
<section style="padding:48px 24px;text-align:center;background:#070c18;border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);">
  <p style="color:#64748b;font-size:.85rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">Ready now?</p>
  <h3 style="font-size:1.4rem;font-weight:900;margin-bottom:20px;">Get The Full System \u2014 <span style="color:#f59e0b;">$47</span></h3>
  <a href="${STRIPE}" style="display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#d97706,#f59e0b);color:#000;font-weight:900;font-size:1rem;border-radius:12px;">Yes \u2014 Get Instant Access \u2192</a>
  <p style="color:#475569;font-size:.75rem;margin-top:10px;">\uD83D\uDD12 Secure checkout \u00b7 30-day guarantee</p>
</section>
`;
if (!html.includes('Ready now?')) {
  html = html.replace('<!-- TOOLS/BONUSES -->', midCTA + '\n<!-- TOOLS/BONUSES -->');
}

// Write back as utf8
fs.writeFileSync('./public/index.html', html, 'utf8');

const stripeCount = (html.match(/buy\.stripe\.com/g)||[]).length;
const badChars = (html.match(/\u00e2\u0080/g)||[]).length;
console.log('Stripe links:', stripeCount);
console.log('Remaining bad chars:', badChars);
console.log('Size:', html.length);
console.log('Title:', html.match(/<title>(.*?)<\/title>/)?.[1]);
