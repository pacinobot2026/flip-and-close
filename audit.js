const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('./public/index.html','utf8');
const stripe = (html.match(/buy\.stripe\.com\/[^\s"']+/g)||[]);
console.log('=== INDEX.HTML AUDIT ===');
console.log('Stripe links found:', stripe.length, '|', stripe[0] || 'NONE');
console.log('VSL video embedded:', html.includes('vsl-final.mp4'));
console.log('Thank you page ref:', html.includes('/thank-you.html'));
console.log('Members page ref:', html.includes('/members.html'));
console.log('Page size:', html.length, 'chars');

console.log('\n=== ALL PUBLIC FILES ===');
function listFiles(dir, base) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const full = path.join(dir, item);
    const rel = path.join(base, item);
    if (fs.statSync(full).isDirectory()) {
      listFiles(full, rel);
    } else {
      const size = (fs.statSync(full).size/1024).toFixed(1);
      console.log(`  ${rel} (${size}KB)`);
    }
  });
}
listFiles('./public', '');

console.log('\n=== LINK CHECKS ===');
const pages = ['index.html','thank-you.html','members.html','v2.html','v3.html'];
pages.forEach(p => {
  const fp = './public/'+p;
  if (fs.existsSync(fp)) {
    const c = fs.readFileSync(fp,'utf8');
    const s = (c.match(/buy\.stripe\.com\/[^\s"']+/g)||[]).length;
    console.log(`${p}: size=${c.length} stripe_links=${s}`);
  } else {
    console.log(`${p}: MISSING`);
  }
});
