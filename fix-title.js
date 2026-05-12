const fs = require('fs');
let html = fs.readFileSync('./public/index.html', 'utf8');

// Fix title specifically — replace the corrupted dash
html = html.replace(/<title>Flip And Close.*?<\/title>/, '<title>Flip And Close \u2014 Domain Auction Blueprint</title>');

// Check for any remaining â sequences
const remaining = [];
const re = /â[^\s<>"]{1,3}/g;
let m;
while ((m = re.exec(html)) !== null) {
  remaining.push({match: m[0], pos: m.index, ctx: html.substring(m.index-10, m.index+20)});
}
if (remaining.length > 0) {
  console.log('Still found bad sequences:', remaining.slice(0,5));
} else {
  console.log('All clean!');
}

fs.writeFileSync('./public/index.html', html, 'utf8');
console.log('Title now:', html.match(/<title>(.*?)<\/title>/)?.[1]);
console.log('Stripe links:', (html.match(/buy\.stripe\.com/g)||[]).length);
