const fs = require('fs');
let m = fs.readFileSync('./public/members.html','utf8');

const newCards = [
  '<div class="card"><div class="tag tag-green">Tool</div><h3>Outbound Buyer Finder</h3><p>Generate 5 targeted prospect search strategies for any domain. Track outreach status for every prospect.</p><a href="/bonuses/buyer-finder.html" class="btn btn-blue btn-sm" style="margin-top:8px;">Open \u2192</a></div>',
  '<div class="card"><div class="tag tag-green">Formula</div><h3>Domain Description Formula</h3><p>The 7-element direct-response copywriting framework for auction listing descriptions.</p><a href="/bonuses/description-formula.html" class="btn btn-blue btn-sm" style="margin-top:8px;">Open \u2192</a></div>'
].join('');

// Insert before closing bonuses section
m = m.replace('</div></div></div></body>', newCards + '</div></div></div></body>');
fs.writeFileSync('./public/members.html', m);
console.log('Members updated. Size:', m.length);
