const fs = require('fs');

const CSS = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/><style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Inter',sans-serif;background:#0a0f1e;color:#fff;line-height:1.6;}a{color:inherit;text-decoration:none;}nav{position:sticky;top:0;z-index:100;background:rgba(10,15,30,.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.07);padding:0 32px;height:64px;display:flex;align-items:center;justify-content:space-between;}.logo-mark{display:flex;align-items:center;gap:12px;}.logo-icon{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-size:.75rem;font-weight:900;width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.logo-text{display:flex;flex-direction:column;}.logo-top{font-size:.88rem;font-weight:900;color:#fff;}.logo-bottom{font-size:.58rem;font-weight:700;color:#f59e0b;letter-spacing:.08em;text-transform:uppercase;}.nav-links{display:flex;gap:4px;}.nav-links a{color:#94a3b8;font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:8px;}.nav-links a:hover{color:#fff;}.container{max-width:900px;margin:0 auto;padding:0 24px;}.section{padding:60px 24px;}.eyebrow{color:#3b82f6;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}h1{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;line-height:1.1;margin-bottom:12px;}h2{font-size:1.3rem;font-weight:900;margin-bottom:10px;}h3{font-size:1rem;font-weight:800;margin-bottom:6px;}p{color:#94a3b8;line-height:1.7;margin-bottom:12px;}p strong{color:#fff;}.card{background:#0f1623;border:1px solid rgba(59,130,246,.12);border-radius:14px;padding:24px;}.tag{display:inline-block;background:rgba(59,130,246,.12);color:#60a5fa;font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:4px 10px;border-radius:999px;margin-bottom:8px;}.tag-gold{background:rgba(245,158,11,.1);color:#f59e0b;}.btn{display:inline-block;padding:11px 24px;border-radius:10px;font-weight:800;font-size:.85rem;cursor:pointer;border:none;font-family:'Inter',sans-serif;transition:opacity .2s;}.btn:hover{opacity:.85;}.btn-blue{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;}.btn-gold{background:linear-gradient(135deg,#d97706,#f59e0b);color:#000;}.btn-red{background:rgba(239,68,68,.12);color:#f87171;border:1px solid rgba(239,68,68,.2);}.btn-sm{padding:7px 16px;font-size:.78rem;}input,select{background:#070c18;border:1px solid rgba(255,255,255,.1);color:#fff;padding:10px 14px;border-radius:9px;font-family:'Inter',sans-serif;font-size:.88rem;outline:none;}input:focus,select:focus{border-color:rgba(59,130,246,.5);}label{display:block;font-size:.75rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;}footer{background:#070c18;border-top:1px solid rgba(255,255,255,.05);padding:28px 24px;text-align:center;color:#475569;font-size:.76rem;}@media print{nav,footer,.no-print{display:none!important;}body{background:#fff!important;color:#000!important;}}</style>`;
const NAV = `<nav><a href="/members.html" class="logo-mark"><div class="logo-icon">F\u2192C</div><div class="logo-text"><span class="logo-top">FLIP AND CLOSE</span><span class="logo-bottom">Domain Auction Blueprint</span></div></a><div class="nav-links"><a href="/members.html">Home</a><a href="/members.html#modules">Modules</a><a href="/members.html#bonuses">Bonuses</a><a href="/members.html#tools">Tools</a><a href="mailto:support@nicelysupport.com">Support</a></div></nav>`;
const FOOT = `<footer><p>Flip And Close &copy; 2026 &middot; <a href="mailto:support@nicelysupport.com" style="color:#3b82f6;">support@nicelysupport.com</a></p></footer>`;
function wrap(title, body) { return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${title} \u2014 Flip And Close</title>${CSS}</head><body>${NAV}${body}${FOOT}</body></html>`; }

// ── DESCRIPTION FORMULA (standalone, no truncation risk) ──
const elements = [
  {n:'01',c:'#3b82f6',title:'Business Vision Title',desc:'Open with the type of business this domain was built for. Instantly tells the right buyer this domain is for them. Wrong buyers self-filter out.',ex:'DenverPlumber.com is the ideal domain for any plumbing business serving the Denver metro area — exact-match, instantly recognizable, built for local SEO dominance.'},
  {n:'02',c:'#10b981',title:'Use Case Specificity',desc:'Name 2-3 obvious business types that would benefit from owning this domain. The more specific, the more the right buyer feels you are speaking directly to them.',ex:'This domain works for: established plumbing companies ready to upgrade, new local plumbing startups, or a franchise expanding into the Denver market.'},
  {n:'03',c:'#f59e0b',title:'Keyword and SEO Value',desc:'State the monthly search volume with a number. Buyers calculate ROI on traffic value — give them the inputs. Use Google Keyword Planner or estimate conservatively.',ex:'"Denver plumber" receives approximately 2,400 local searches per month. An exact-match domain signals strong topical relevance to search engines from day one.'},
  {n:'04',c:'#a78bfa',title:'Comparable Sales Reference',desc:'One NameBio comparable legitimizes your price point and removes the buyer\'s mental calculation. Brief and factual.',ex:'Similar geo-plumbing domains have sold in the $800-$2,500 range. Reserve is set below comparable sales to generate bidder competition.'},
  {n:'05',c:'#60a5fa',title:'Urgency Reinforcement',desc:'Auction urgency is built-in — reinforce it with a value statement. Combine the deadline with what happens after.',ex:'Auction closes [date]. Reserve is deliberately set below market value to create competition. After close, returns to private listing at a higher price.'},
  {n:'06',c:'#94a3b8',title:'Extension Justification',desc:'For non-.com domains only: justify the extension with a business rationale. Address it head-on — do not leave the buyer wondering.',ex:'.net is the standard extension for networking and technology service companies. The .com is actively in use, making .net a clean alternative with instant brand recognition.'},
  {n:'07',c:'#f472b6',title:'Outreach Invitation',desc:'End every listing with an invitation for pre-auction contact. Creates a private buyer channel that sometimes results in a quick sale before close.',ex:'Interested in acquiring this domain before auction closes? Use the platform messaging system to reach out directly. Pre-auction offers will be considered.'}
];

const descFormula = wrap('Domain Description Formula', `
<div class="section"><div class="container" style="max-width:780px;">
<div class="eyebrow">Bonus Resource</div>
<h1>The Domain Description Formula</h1>
<p>The direct-response copywriting framework adapted for auction platforms. Apply this to every listing and watch engagement increase.</p>
<div class="card" style="margin:24px 0;background:#070c18;border-color:rgba(245,158,11,.2);">
<div class="tag tag-gold">Core Principle</div>
<h3>Sell the Vision, Not the Domain</h3>
<p>Buyers purchase the business identity, the SEO advantage, and the brand credibility the domain represents. Every word should reinforce that vision.</p>
<div style="background:#0a0f1e;border-left:3px solid #f59e0b;padding:12px 16px;border-radius:0 8px 8px 0;margin-top:10px;"><p style="margin:0;font-size:.85rem;color:#fbbf24;"><strong>The Test:</strong> Read your description. Does it make someone <em>want</em> to own this domain, or just <em>describe</em> it? If only describes — rewrite it.</p></div>
</div>
<h2 style="margin-bottom:16px;">The 7 Elements</h2>
<div style="display:grid;gap:12px;">
${elements.map(e=>`<div style="background:#0f1623;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:20px;display:flex;gap:14px;">
<div style="background:${e.c}22;color:${e.c};font-weight:900;font-size:.75rem;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid ${e.c}44;">${e.n}</div>
<div><h3 style="color:#e2e8f0;margin-bottom:4px;">${e.title}</h3><p style="font-size:.85rem;margin-bottom:10px;">${e.desc}</p><div style="background:#070c18;border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:11px 14px;font-size:.82rem;color:#94a3b8;font-style:italic;line-height:1.6;">${e.ex}</div></div>
</div>`).join('')}
</div>
<div class="card" style="margin-top:24px;background:#080f18;border-color:rgba(59,130,246,.2);">
<h3 style="color:#60a5fa;margin-bottom:14px;">Before and After</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
<div><div style="font-size:.7rem;font-weight:800;color:#ef4444;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Without Formula</div>
<div style="background:#120d0d;border:1px solid rgba(239,68,68,.15);border-radius:10px;padding:14px;font-size:.82rem;color:#94a3b8;line-height:1.7;">DenverPlumber.com is a great domain for sale. It has the word Denver and Plumber in it which is good for plumbing businesses. Buy it now for a good price.</div></div>
<div><div style="font-size:.7rem;font-weight:800;color:#10b981;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With Formula</div>
<div style="background:#080f18;border:1px solid rgba(16,185,129,.15);border-radius:10px;padding:14px;font-size:.82rem;color:#cbd5e1;line-height:1.7;">DenverPlumber.com is an exact-match local domain for any plumbing company serving Denver, CO. The keyword receives 2,400 monthly searches. Exact-match domains carry strong local SEO relevance. Similar geo domains have sold $800-$2,500. Reserve is set below market to drive bidder competition. Auction closes [date]. Reach out via platform messaging for pre-auction inquiries.</div></div>
</div>
</div>
<div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">
<button onclick="window.print()" class="btn btn-blue no-print">Print Reference Card</button>
<a href="/members.html#bonuses" class="btn" style="background:#0f1623;border:1px solid rgba(255,255,255,.1);color:#94a3b8;">Back to Member Area</a>
</div>
</div></div>`);

// ── OUTBOUND BUYER FINDER ──
const buyerFinder = wrap('Outbound Buyer Finder', `
<div class="section"><div class="container">
<div class="eyebrow">Interactive Tool</div>
<h1>Outbound Buyer Finder</h1>
<p>Enter your domain details. Get 5 targeted prospect search strategies — then track your outreach for each domain. See Module 4 for the full framework.</p>

<div class="card" style="margin-top:24px;">
<h3 style="color:#60a5fa;margin-bottom:16px;">Step 1 — Your Domain</h3>
<div style="display:grid;gap:14px;grid-template-columns:1fr 1fr;">
<div style="grid-column:1/-1;"><label>Domain Name</label><input id="domain" type="text" placeholder="e.g. DenverPlumber.com"/></div>
<div><label>Domain Type</label><select id="dtype"><option value="geo">Geo Domain (City + Keyword)</option><option value="keyword">Exact-Match Keyword</option><option value="brandable">Brandable</option><option value="industry">Industry-Specific</option></select></div>
<div><label>Industry / Niche</label><input id="industry" type="text" placeholder="e.g. plumbing, fitness, finance"/></div>
<div><label>City / Region (if geo)</label><input id="city" type="text" placeholder="e.g. Denver, CO"/></div>
<div><label>Price Range</label><select id="price"><option>Under $500</option><option>$500 - $2,000</option><option>$2,000 - $10,000</option><option>Over $10,000</option></select></div>
</div>
<button onclick="gen()" class="btn btn-blue" style="margin-top:18px;width:100%;padding:14px;">Generate Prospect Strategies &#8594;</button>
</div>

<div id="strats" style="display:none;margin-top:28px;">
<h2 style="margin-bottom:4px;">5 Prospect Search Strategies</h2>
<p id="strat-sub" style="margin-bottom:16px;"></p>
<div id="strat-list" style="display:grid;gap:10px;"></div>
</div>

<div id="tracker" style="display:none;margin-top:36px;">
<h2 style="margin-bottom:4px;">Outreach Tracker</h2>
<p>Track every prospect for <span id="tdomainlabel" style="color:#60a5fa;font-weight:700;"></span></p>
<div class="card" style="margin:16px 0;">
<div style="display:grid;gap:10px;grid-template-columns:1fr 1fr auto auto;">
<div><label>Prospect / Business</label><input id="pname" placeholder="Denver Best Plumbing"/></div>
<div><label>Contact</label><input id="pcontact" placeholder="email or LinkedIn URL"/></div>
<div style="display:flex;align-items:flex-end;"><select id="pstatus"><option value="identified">Identified</option><option value="contacted">Contacted</option><option value="replied">Replied</option><option value="interested">Interested</option><option value="pass">Not Interested</option><option value="won">Won</option></select></div>
<div style="display:flex;align-items:flex-end;"><button onclick="addP()" class="btn btn-blue btn-sm">Add</button></div>
</div>
</div>
<div id="plist" style="display:grid;gap:8px;"></div>
<div id="pempty" style="text-align:center;padding:28px;color:#475569;font-size:.85rem;">No prospects yet. Use the strategies above to find your first 5.</div>
</div>
</div></div>

<script>
const SC={identified:{bg:'rgba(59,130,246,.12)',c:'#60a5fa',l:'Identified'},contacted:{bg:'rgba(245,158,11,.12)',c:'#f59e0b',l:'Contacted'},replied:{bg:'rgba(99,102,241,.12)',c:'#a78bfa',l:'Replied'},interested:{bg:'rgba(16,185,129,.12)',c:'#10b981',l:'Interested'},pass:{bg:'rgba(239,68,68,.08)',c:'#f87171',l:'Not Interested'},won:{bg:'rgba(16,185,129,.2)',c:'#34d399',l:'Won'}};
let prospects=[],curDomain='';
const GS={
  geo:(d,n,c)=>[
    {t:'Google Search — Direct Competitors',d:'Search "'+c+' '+n+'" on Google. Pull top 20 organic results. These businesses compete for this keyword and would benefit most from the exact-match domain.',u:'https://google.com/search?q='+encodeURIComponent(c+' '+n)},
    {t:'Google Maps — Local Directory',d:'Search Google Maps for "'+n+' near '+c+'". Surfaces businesses with physical locations relying on local discovery.',u:'https://google.com/maps/search/'+encodeURIComponent(n+' '+c)},
    {t:'Yelp — High-Review Businesses',d:'Find top-rated '+n+' businesses in '+c+' on Yelp. High-review businesses invest in online presence — ideal targets.',u:'https://yelp.com/search?find_desc='+encodeURIComponent(n)+'&find_loc='+encodeURIComponent(c)},
    {t:'LinkedIn — Business Owners',d:'Search LinkedIn for "'+n+'" + "'+c+'" to find business owners and operators who understand digital branding.',u:'https://linkedin.com/search/results/people/?keywords='+encodeURIComponent(n+' '+c)},
    {t:'Chamber of Commerce Directory',d:'Find the '+c+' Chamber member directory. Established local businesses actively investing in community presence.',u:'https://google.com/search?q='+encodeURIComponent(c+' chamber of commerce directory')}
  ],
  keyword:(d,n,c)=>[
    {t:'Google Organic — Top Competitors',d:'Search the exact keyword on Google. Top 10-20 organic results are already competing for this term.',u:'https://google.com/search?q='+encodeURIComponent(n)},
    {t:'LinkedIn Companies',d:'Search LinkedIn companies in the '+n+' industry. Filter 11-200 employees — growth-stage companies with acquisition budget.',u:'https://linkedin.com/search/results/companies/?keywords='+encodeURIComponent(n)},
    {t:'Crunchbase Funded Startups',d:'Search Crunchbase for startups in the '+n+' space. Recently funded companies are actively building their brand.',u:'https://crunchbase.com/discover/organization.companies?field_ids=short_description&short_description='+encodeURIComponent(n)},
    {t:'Product Hunt',d:'Search Product Hunt for products in the '+n+' category. Founders launching products understand domain value.',u:'https://producthunt.com/search?q='+encodeURIComponent(n)},
    {t:'Twitter/X — Topic Founders',d:'Search Twitter for people discussing '+n+'. Founders who talk about the topic publicly are active in the space.',u:'https://twitter.com/search?q='+encodeURIComponent(n)+'&f=user'}
  ],
  brandable:(d,n,c)=>[
    {t:'Crunchbase Funded Startups',d:'Startups that raised seed or Series A in the '+n+' space are actively brand-building with budget to acquire.',u:'https://crunchbase.com/discover/organization.companies?field_ids=short_description&short_description='+encodeURIComponent(n)},
    {t:'AngelList / Wellfound',d:'Early-stage startups in '+n+'. Pre-revenue founders are often looking for strong brand domains before launch.',u:'https://wellfound.com/jobs?q='+encodeURIComponent(n)},
    {t:'Product Hunt Recent Launches',d:'Founders who just launched with a weak domain name are natural acquisition targets.',u:'https://producthunt.com/topics/'+encodeURIComponent(n.toLowerCase().replace(/ /g,'-'))},
    {t:'LinkedIn Founders Search',d:'Search for "founder" + "'+n+'" to find people actively building companies in this space.',u:'https://linkedin.com/search/results/people/?keywords='+encodeURIComponent('founder '+n)},
    {t:'NamePros Buyer Threads',d:'Check NamePros for threads where buyers are actively looking for domains in the '+n+' category.',u:'https://namepros.com/search/?q='+encodeURIComponent('looking for '+n+' domain')+'&t=post'}
  ],
  industry:(d,n,c)=>[
    {t:'Industry Association Directories',d:'Find the primary trade association for '+n+'. Member directories list established companies investing in their brand.',u:'https://google.com/search?q='+encodeURIComponent(n+' industry association member directory')},
    {t:'LinkedIn Companies by Industry',d:'Search LinkedIn companies in the '+n+' space. Focus on 11-500 employees — established but still growing.',u:'https://linkedin.com/search/results/companies/?keywords='+encodeURIComponent(n)},
    {t:'Google News — Industry Coverage',d:'Companies being covered in press are actively brand-building and have budget.',u:'https://news.google.com/search?q='+encodeURIComponent(n)},
    {t:'Capterra / G2 Software',d:'If '+n+' is tech-adjacent, search these platforms. SaaS companies understand domain value.',u:'https://capterra.com/search/?query='+encodeURIComponent(n)},
    {t:'Inc 5000 Fast-Growing Companies',d:'Fast-growing companies in the '+n+' sector are actively investing in brand assets.',u:'https://inc.com/inc5000/2024'}
  ]
};
function gen(){
  const d=document.getElementById('domain').value.trim();
  const t=document.getElementById('dtype').value;
  const n=document.getElementById('industry').value.trim()||'this niche';
  const c=document.getElementById('city').value.trim()||'your area';
  if(!d){alert('Enter a domain name.');return;}
  curDomain=d;
  const fn=GS[t]||GS.geo;
  const ss=fn(d,n,c);
  document.getElementById('strat-sub').textContent='Domain: '+d+' — '+ss.length+' targeted search strategies generated.';
  document.getElementById('strat-list').innerHTML=ss.map((s,i)=>\`<div class="card" style="display:flex;gap:14px;align-items:flex-start;padding:18px;">
<div style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-weight:900;font-size:.8rem;width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">\${i+1}</div>
<div style="flex:1;"><h3 style="margin-bottom:4px;">\${s.t}</h3><p style="font-size:.85rem;margin-bottom:10px;">\${s.d}</p><a href="\${s.u}" target="_blank" class="btn btn-blue btn-sm">Search &#8594;</a></div></div>\`).join('');
  document.getElementById('strats').style.display='block';
  document.getElementById('tracker').style.display='block';
  document.getElementById('tdomainlabel').textContent=d;
  prospects=JSON.parse(localStorage.getItem('fac-ob-'+d)||'[]');
  renderP();
}
function addP(){
  const n=document.getElementById('pname').value.trim();
  if(!n){alert('Enter a prospect name.');return;}
  prospects.push({n,c:document.getElementById('pcontact').value.trim(),s:document.getElementById('pstatus').value,d:new Date().toLocaleDateString()});
  save();renderP();
  document.getElementById('pname').value='';document.getElementById('pcontact').value='';
}
function updS(i,v){prospects[i].s=v;save();renderP();}
function remP(i){prospects.splice(i,1);save();renderP();}
function save(){localStorage.setItem('fac-ob-'+curDomain,JSON.stringify(prospects));}
function renderP(){
  const list=document.getElementById('plist'),empty=document.getElementById('pempty');
  if(!prospects.length){list.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  list.innerHTML=prospects.map((p,i)=>\`<div style="background:#0f1623;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:14px 18px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
<div style="flex:1;min-width:120px;"><strong style="color:#e2e8f0;font-size:.88rem;">\${p.n}</strong><br><span style="color:#64748b;font-size:.75rem;">\${p.c||'No contact'}</span></div>
<select onchange="updS(\${i},this.value)" style="background:\${SC[p.s].bg};color:\${SC[p.s].c};border-color:\${SC[p.s].c}33;width:auto;padding:5px 10px;font-size:.75rem;font-weight:800;">\${Object.keys(SC).map(k=>\`<option value="\${k}" \${k===p.s?'selected':''}>\${SC[k].l}</option>\`).join('')}</select>
<span style="color:#475569;font-size:.72rem;">\${p.d}</span>
<button onclick="remP(\${i})" class="btn btn-red btn-sm">&#10005;</button>
</div>\`).join('');
}
</script>`);

fs.mkdirSync('./public/bonuses', {recursive:true});
fs.writeFileSync('./public/bonuses/description-formula.html', descFormula);
fs.writeFileSync('./public/bonuses/buyer-finder.html', buyerFinder);
console.log('Bonus pages written: description-formula.html, buyer-finder.html');
