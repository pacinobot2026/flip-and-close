const fs = require('fs');

const CSS = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Inter',sans-serif;background:#0a0f1e;color:#fff;line-height:1.6;}a{color:inherit;text-decoration:none;}nav{position:sticky;top:0;z-index:100;background:rgba(10,15,30,.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.07);padding:0 32px;height:64px;display:flex;align-items:center;justify-content:space-between;}.logo-mark{display:flex;align-items:center;gap:12px;}.logo-icon{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-size:.75rem;font-weight:900;width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.logo-text{display:flex;flex-direction:column;}.logo-top{font-size:.88rem;font-weight:900;color:#fff;}.logo-bottom{font-size:.58rem;font-weight:700;color:#f59e0b;letter-spacing:.08em;text-transform:uppercase;}.nav-links{display:flex;gap:4px;flex-wrap:wrap;}.nav-links a{color:#94a3b8;font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:8px;transition:color .2s;}.nav-links a:hover{color:#fff;}.container{max-width:900px;margin:0 auto;padding:0 24px;}.section{padding:60px 24px;}.section-alt{background:#0d1422;}.eyebrow{color:#3b82f6;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}h1{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;line-height:1.1;margin-bottom:12px;}h2{font-size:1.3rem;font-weight:900;margin-bottom:10px;}h3{font-size:1rem;font-weight:800;margin-bottom:6px;}p{color:#94a3b8;line-height:1.7;margin-bottom:12px;}p strong{color:#fff;}.card{background:#0f1623;border:1px solid rgba(59,130,246,.12);border-radius:14px;padding:24px;}.tag{display:inline-block;background:rgba(59,130,246,.12);color:#60a5fa;font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:4px 10px;border-radius:999px;margin-bottom:8px;}.tag-gold{background:rgba(245,158,11,.1);color:#f59e0b;}.btn{display:inline-block;padding:11px 24px;border-radius:10px;font-weight:800;font-size:.85rem;cursor:pointer;border:none;font-family:'Inter',sans-serif;transition:opacity .2s;}.btn:hover{opacity:.85;}.btn-blue{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;}.btn-gold{background:linear-gradient(135deg,#d97706,#f59e0b);color:#000;}.btn-red{background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.25);}.btn-sm{padding:7px 16px;font-size:.78rem;}input,select,textarea{background:#070c18;border:1px solid rgba(255,255,255,.1);color:#fff;padding:10px 14px;border-radius:9px;font-family:'Inter',sans-serif;font-size:.88rem;outline:none;width:100%;}input:focus,select:focus,textarea:focus{border-color:rgba(59,130,246,.5);}label{display:block;font-size:.75rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;}footer{background:#070c18;border-top:1px solid rgba(255,255,255,.05);padding:28px 24px;text-align:center;color:#475569;font-size:.76rem;}</style>`;

const NAV = `<nav><a href="/members.html" class="logo-mark"><div class="logo-icon">F\u2192C</div><div class="logo-text"><span class="logo-top">FLIP AND CLOSE</span><span class="logo-bottom">Domain Auction Blueprint</span></div></a><div class="nav-links"><a href="/members.html">Home</a><a href="/members.html#modules">Modules</a><a href="/members.html#bonuses">Bonuses</a><a href="/members.html#tools">Tools</a><a href="mailto:support@nicelysupport.com">Support</a></div></nav>`;
const FOOT = `<footer><p>Flip And Close &copy; 2026 &middot; <a href="mailto:support@nicelysupport.com" style="color:#3b82f6;">support@nicelysupport.com</a></p></footer>`;

function wrap(title, body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${title} \u2014 Flip And Close</title>${CSS}</head><body>${NAV}${body}${FOOT}</body></html>`;
}

// ── OUTBOUND BUYER FINDER TOOL ──
// Interactive tool: enter domain → generates 5 prospect search strategies + tracks outreach
const buyerFinder = wrap('Outbound Buyer Finder', `
<div class="section">
<div class="container">
<div class="eyebrow">Interactive Tool</div>
<h1>Outbound Buyer Finder</h1>
<p>Enter your domain details. The tool generates targeted prospect search strategies and lets you track your outreach for each domain. See Module 4 for the full framework.</p>

<div class="card" style="margin-top:24px;">
  <h3 style="color:#60a5fa;margin-bottom:18px;">Step 1 &mdash; Identify Your Domain</h3>
  <div style="display:grid;gap:14px;grid-template-columns:1fr 1fr;">
    <div style="grid-column:1/-1;"><label>Domain Name</label><input id="domain" type="text" placeholder="e.g. DenverPlumber.com"/></div>
    <div><label>Domain Type</label>
    <select id="dtype">
      <option value="geo">Geo Domain (City + Keyword)</option>
      <option value="keyword">Exact-Match Keyword</option>
      <option value="brandable">Brandable</option>
      <option value="industry">Industry-Specific</option>
      <option value="local">Local Business Name</option>
    </select></div>
    <div><label>Primary Industry / Niche</label><input id="industry" type="text" placeholder="e.g. plumbing, fitness, finance"/></div>
    <div><label>City / Region (if geo)</label><input id="city" type="text" placeholder="e.g. Denver, CO"/></div>
    <div><label>Asking Price Range</label>
    <select id="price">
      <option value="under500">Under $500</option>
      <option value="500-2000">$500 &ndash; $2,000</option>
      <option value="2000-10000">$2,000 &ndash; $10,000</option>
      <option value="over10000">Over $10,000</option>
    </select></div>
  </div>
  <button onclick="generateStrategies()" class="btn btn-blue" style="margin-top:20px;width:100%;padding:14px;">Generate Prospect Strategies &rarr;</button>
</div>

<div id="strategies" style="display:none;margin-top:24px;">
  <h2 style="margin-bottom:4px;">Your 5 Prospect Search Strategies</h2>
  <p style="margin-bottom:20px;">Use these to find potential end-users before your auction opens.</p>
  <div id="strat-list" style="display:grid;gap:12px;"></div>
</div>

<div id="tracker-section" style="display:none;margin-top:40px;">
  <h2 style="margin-bottom:4px;">Outreach Tracker</h2>
  <p style="margin-bottom:20px;">Track every prospect for <span id="tracker-domain-name" style="color:#60a5fa;font-weight:700;"></span></p>
  <div class="card" style="margin-bottom:16px;">
    <div style="display:grid;gap:12px;grid-template-columns:1fr 1fr 1fr auto;">
      <div><label>Prospect Name / Business</label><input id="p-name" type="text" placeholder="Denver Best Plumbing"/></div>
      <div><label>Contact (email or LinkedIn)</label><input id="p-contact" type="text" placeholder="owner@denverpipe.com"/></div>
      <div><label>Status</label>
      <select id="p-status">
        <option value="identified">Identified</option>
        <option value="contacted">Contacted</option>
        <option value="replied">Replied</option>
        <option value="interested">Interested</option>
        <option value="not-interested">Not Interested</option>
        <option value="won">Won (Bought)</option>
      </select></div>
      <div style="display:flex;align-items:flex-end;"><button onclick="addProspect()" class="btn btn-blue" style="white-space:nowrap;">Add</button></div>
    </div>
  </div>
  <div id="prospect-list" style="display:grid;gap:10px;"></div>
  <div id="empty-state" style="text-align:center;padding:32px;color:#475569;font-size:.85rem;">No prospects added yet. Use the strategies above to find your first 5.</div>
</div>

</div></div>

<script>
const STATUS_COLORS = {
  identified:'rgba(59,130,246,.15)',contacted:'rgba(245,158,11,.15)',replied:'rgba(99,102,241,.15)',
  interested:'rgba(16,185,129,.15)',['not-interested']:'rgba(239,68,68,.1)',won:'rgba(16,185,129,.3)'
};
const STATUS_TEXT = {
  identified:'#60a5fa',contacted:'#f59e0b',replied:'#a5b4fc',
  interested:'#10b981',['not-interested']:'#f87171',won:'#34d399'
};
const STATUS_LABELS = {
  identified:'Identified',contacted:'Contacted',replied:'Replied',
  interested:'Interested',['not-interested']:'Not Interested',won:'Won'
};

const STRATEGIES = {
  geo: (d,i,c) => [
    {title:'Google Search — Direct Competitors', desc:'Search "'+c+' '+i+'" on Google. Pull the top 20 organic results. These businesses are actively competing in this space and would benefit most from owning the exact-match domain.', search:'https://google.com/search?q='+encodeURIComponent(c+' '+i)},
    {title:'Google Maps — Local Directory', desc:'Search Google Maps for "'+i+' near '+c+'". This surfaces businesses with physical locations who rely on local discovery.', search:'https://google.com/maps/search/'+encodeURIComponent(i+' '+c)},
    {title:'Yelp — High-Review Businesses', desc:'Find the top-rated '+i+' businesses in '+c+' on Yelp. High-review businesses are investing in their online presence — ideal acquisition targets.', search:'https://yelp.com/search?find_desc='+encodeURIComponent(i)+'&find_loc='+encodeURIComponent(c)},
    {title:'LinkedIn — Business Owners in '+c, desc:'Search LinkedIn for "'+i+'" + "'+c+'" to find business owners and operators. Decision-makers who understand digital branding.', search:'https://linkedin.com/search/results/people/?keywords='+encodeURIComponent(i+' '+c)},
    {title:'Chamber of Commerce Directory', desc:'Find the '+c+' Chamber of Commerce member directory. These are established local businesses actively investing in their community presence.', search:'https://google.com/search?q='+encodeURIComponent(c+' chamber of commerce member directory')}
  ],
  keyword: (d,i,c) => [
    {title:'Google Organic Search', desc:'Search the exact keyword from your domain on Google. The top 10-20 organic results are your best prospects — they are already competing for this term.', search:'https://google.com/search?q='+encodeURIComponent(i)},
    {title:'LinkedIn Companies', desc:'Search LinkedIn for companies in the '+i+' industry. Filter by company size (11-200 employees) — these are growth-stage companies with budget.', search:'https://linkedin.com/search/results/companies/?keywords='+encodeURIComponent(i)},
    {title:'Crunchbase Startups', desc:'Search Crunchbase for startups in the '+i+' space. Recently funded startups are actively building their brand and have acquisition budget.', search:'https://crunchbase.com/discover/organization.companies?field_ids=short_description,founded_on,num_funding_rounds&short_description='+encodeURIComponent(i)},
    {title:'Product Hunt', desc:'Search Product Hunt for products in the '+i+' category. Founders actively launching products understand domain value.', search:'https://producthunt.com/search?q='+encodeURIComponent(i)},
    {title:'Twitter/X Search', desc:'Search Twitter for people talking about '+i+'. Founders and operators who discuss the topic publicly are aware of the space.', search:'https://twitter.com/search?q='+encodeURIComponent(i)+'&f=user'}
  ],
  brandable: (d,i,c) => [
    {title:'Crunchbase — Funded Startups', desc:'Search Crunchbase for startups in the '+i+' space that have raised seed or Series A funding. These companies are actively building their brand.', search:'https://crunchbase.com/discover/organization.companies?field_ids=short_description&short_description='+encodeURIComponent(i)},
    {title:'AngelList / Wellfound', desc:'Search AngelList for early-stage startups in '+i+'. Pre-revenue founders are often looking for strong brand domains before launch.', search:'https://wellfound.com/jobs?q='+encodeURIComponent(i)},
    {title:'Product Hunt Recent Launches', desc:'Browse recent Product Hunt launches in the '+i+' category. Founders who just launched with a weak domain name are natural acquisition targets.', search:'https://producthunt.com/topics/'+encodeURIComponent(i.toLowerCase().replace(/ /g,'-'))},
    {title:'LinkedIn Founders Search', desc:'Search LinkedIn for "founder" + "'+i+'" to find people actively building companies in this space.', search:'https://linkedin.com/search/results/people/?keywords='+encodeURIComponent('founder '+i)},
    {title:'Domain Forum Buyers Lists', desc:'Check NamePros and DNForum for threads where buyers are actively looking for domains in the '+i+' category. These are motivated, ready-to-buy prospects.', search:'https://namepros.com/search/?q='+encodeURIComponent('looking for '+i+' domain')+'&t=post'}
  ],
  industry: (d,i,c) => [
    {title:'Industry Association Directories', desc:'Find the primary trade association for the '+i+' industry. Member directories list established companies actively investing in their brand.', search:'https://google.com/search?q='+encodeURIComponent(i+' industry association member directory')},
    {title:'LinkedIn Companies by Industry', desc:'Search LinkedIn companies filtered by '+i+' industry keyword. Focus on companies with 11-500 employees — established but still growing.', search:'https://linkedin.com/search/results/companies/?keywords='+encodeURIComponent(i)},
    {title:'Google News — Industry Players', desc:'Search Google News for the '+i+' industry. Companies being covered in press are actively building their brand and have budget.', search:'https://news.google.com/search?q='+encodeURIComponent(i)},
    {title:'Capterra / G2 — Software Companies', desc:'If '+i+' is tech-adjacent, search Capterra and G2 for companies in the space. SaaS companies understand domain value well.', search:'https://capterra.com/search/?query='+encodeURIComponent(i)},
    {title:'Inc 5000 — Fast-Growing Companies', desc:'Search the Inc 5000 list for fast-growing companies in the '+i+' sector. High-growth companies are actively investing in brand assets.', search:'https://inc.com/inc5000/2024?query='+encodeURIComponent(i)}
  ],
  local: (d,i,c) => [
    {title:'Google Local Search', desc:'Search Google for "'+i+'" to find businesses that would benefit from owning this local domain name.', search:'https://google.com/search?q='+encodeURIComponent(i)},
    {title:'Google Maps Local Listings', desc:'Find businesses on Google Maps that match the domain\'s local focus. Prioritize businesses without a strong website domain.', search:'https://google.com/maps/search/'+encodeURIComponent(i)},
    {title:'Facebook Local Business Pages', desc:'Search Facebook for local business pages matching the domain topic. Business owners on Facebook are often easier to reach than via email.', search:'https://facebook.com/search/pages/?q='+encodeURIComponent(i)},
    {title:'Nextdoor Business Directory', desc:'Check Nextdoor for local businesses in the relevant category. These are community-focused businesses who value local digital presence.', search:'https://nextdoor.com/find-businesses/'},
    {title:'Local Newspaper Business Sections', desc:'Search local news sites for businesses in the '+i+' space. Businesses being featured in local press are actively building their brand.', search:'https://google.com/search?q='+encodeURIComponent(i+' local business')+'+site:local+OR+site:news'}
  ]
};

let prospects = [];
let currentDomain = '';

function generateStrategies() {
  const domain = document.getElementById('domain').value.trim();
  const dtype = document.getElementById('dtype').value;
  const industry = document.getElementById('industry').value.trim() || 'this industry';
  const city = document.getElementById('city').value.trim() || 'your city';
  if (!domain) { alert('Please enter a domain name.'); return; }
  
  currentDomain = domain;
  const stratFn = STRATEGIES[dtype];
  const strats = stratFn(domain, industry, city);
  
  const list = document.getElementById('strat-list');
  list.innerHTML = strats.map((s,i) => \`
    <div class="card" style="display:flex;gap:16px;align-items:flex-start;">
      <div style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-weight:900;font-size:.8rem;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">\${i+1}</div>
      <div style="flex:1;">
        <h3 style="margin-bottom:4px;">\${s.title}</h3>
        <p style="font-size:.85rem;margin-bottom:10px;">\${s.desc}</p>
        <a href="\${s.search}" target="_blank" class="btn btn-blue btn-sm">Search Now &rarr;</a>
      </div>
    </div>
  \`).join('');
  
  document.getElementById('strategies').style.display = 'block';
  document.getElementById('tracker-section').style.display = 'block';
  document.getElementById('tracker-domain-name').textContent = domain;
  
  // Load saved prospects for this domain
  const saved = JSON.parse(localStorage.getItem('fac-prospects-'+domain) || '[]');
  prospects = saved;
  renderProspects();
}

function addProspect() {
  const name = document.getElementById('p-name').value.trim();
  const contact = document.getElementById('p-contact').value.trim();
  const status = document.getElementById('p-status').value;
  if (!name) { alert('Enter a prospect name.'); return; }
  prospects.push({ name, contact, status, notes: '', added: new Date().toLocaleDateString() });
  saveProspects();
  renderProspects();
  document.getElementById('p-name').value = '';
  document.getElementById('p-contact').value = '';
}

function updateStatus(idx, val) {
  prospects[idx].status = val;
  saveProspects();
  renderProspects();
}

function removeProspect(idx) {
  prospects.splice(idx, 1);
  saveProspects();
  renderProspects();
}

function saveProspects() {
  localStorage.setItem('fac-prospects-'+currentDomain, JSON.stringify(prospects));
}

function renderProspects() {
  const list = document.getElementById('prospect-list');
  const empty = document.getElementById('empty-state');
  if (!prospects.length) { list.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  list.innerHTML = prospects.map((p,i) => \`
    <div style="background:#0f1623;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:16px 20px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
      <div style="flex:1;min-width:140px;"><strong style="color:#e2e8f0;font-size:.9rem;">\${p.name}</strong><br><span style="color:#64748b;font-size:.78rem;">\${p.contact || 'No contact'}</span></div>
      <select onchange="updateStatus(\${i},this.value)" style="background:\${STATUS_COLORS[p.status]};color:\${STATUS_TEXT[p.status]};border-color:\${STATUS_TEXT[p.status]}33;width:auto;padding:6px 12px;font-size:.78rem;font-weight:800;">
        \${Object.keys(STATUS_LABELS).map(k=>\`<option value="\${k}" \${k===p.status?'selected':''}>\${STATUS_LABELS[k]}</option>\`).join('')}
      </select>
      <span style="color:#475569;font-size:.75rem;">\${p.added}</span>
      <button onclick="removeProspect(\${i})" class="btn btn-red btn-sm">Remove</button>
    </div>
  \`).join('');
}
</script>`);

// ── DOMAIN DESCRIPTION FORMULA ──
const descFormula = wrap('Domain Description Formula', `
<div class="section">
<div class="container" style="max-width:800px;">
<div class="eyebrow">Bonus Resource</div>
<h1>The Domain Description Formula</h1>
<p>The direct-response copywriting framework adapted specifically for auction platform listings. Apply this to every domain you list and watch engagement increase.</p>

<div style="margin-top:32px;display:grid;gap:16px;">

<div class="card">
<div class="tag tag-gold">The Core Principle</div>
<h3>Sell the Vision, Not the Domain</h3>
<p>Buyers do not purchase domain names. They purchase <strong>the business identity, the SEO advantage, and the brand credibility</strong> the domain represents. Every word in your listing description should reinforce that vision &mdash; not describe the domain as a string of characters.</p>
<div style="background:#070c18;border-left:3px solid #f59e0b;padding:14px 18px;border-radius:0 8px 8px 0;margin-top:12px;">
<p style="margin:0;font-size:.85rem;color:#fbbf24;font-weight:700;">The Test:</p>
<p style="margin:4px 0 0;font-size:.85rem;color:#cbd5e1;">Read your description. Does it make someone <em>want</em> to own this domain? Or does it just <em>describe</em> it? If it only describes it, rewrite it.</p>
</div>
</div>

<div class="card">
<div class="tag">The 7-Element Formula</div>
<div style="display:grid;gap:14px;margin-top:8px;">
${[
  {n:'01',c:'#3b82f6',title:'Business Vision Title',desc:'Open with the type of business this domain was built for. "Perfect for a Denver-area plumbing company" instantly tells the right buyer this domain is for them. Wrong buyers self-filter. Right buyers lean in.',ex:'"DenverPlumber.com is the ideal domain for any plumbing business serving the Denver metro area — exact-match, instantly recognizable, and built for local SEO dominance."'},
  {n:'02',c:'#10b981',title:'Use Case Specificity',desc:'Name the 2-3 most obvious business types that would benefit from owning this domain. The more specific, the more the right buyer feels you are speaking directly to them.',ex:'"This domain works for: established plumbing companies ready to upgrade from a generic domain, new local plumbing startups, or a plumbing franchise expanding into the Denver market."'},
  {n:'03',c:'#f59e0b',title:'Keyword and SEO Value',desc:'If the domain has search volume relevance, state it with a number. Buyers calculate ROI on traffic value. Give them the inputs. If you have Google Keyword Planner data, use it. If not, estimate conservatively.',ex:'"\'Denver plumber\' receives approximately 2,400 local searches per month. An exact-match domain signals strong topical relevance to search engines &mdash; a measurable SEO advantage from day one."'},
  {n:'04',c:'#a78bfa',title:'Comparable Sales Reference',desc:'One comparable sale from NameBio legitimizes your price point and removes the buyer\'s mental calculation of whether you are making something up. Keep it brief and factual.',ex:'"Similar geo-plumbing domains have sold in the $800-$2,500 range on secondary markets. Reserve is set below comparable sales to generate bidder competition."'},
  {n:'05',c:'#60a5fa',title:'Urgency Reinforcement',desc:'Auction urgency is built-in, but reinforcing it in the copy creates a psychological push. Combine the deadline with a value statement.',ex:'"Auction closes [date]. Reserve is deliberately set below market value to create a competitive bidding environment. Once this closes, it returns to a private listing at $[higher price]."'},
  {n:'06',c:'#94a3b8',title:'Extension Justification (if not .com)',desc:'If you are listing a .net, .org, .co, or other extension, justify it with a business rationale. Do not leave the buyer wondering why it is not .com &mdash; address it head-on.',ex:'".net is the standard extension for networking platforms and technology service companies. The .com variant is actively in use, making the .net a clean alternative with immediate brand recognition."'},
  {n:'07',c:'#f472b6',title:'Outreach Invitation',desc:'End every listing with an invitation for pre-auction contact. This creates a private buyer channel that sometimes results in a quick-sale before the auction even closes.',ex:'"Interested in acquiring this domain before the auction closes? Use the platform messaging system to reach out directly. Pre-auction offers will be considered."'}
].map(e=>`<div style="display:flex;gap:14px;align-items:flex-start;padding:16px;background:#070c18;border-radius:10px;">
<div style="background:${e.c}22;color:${e.c};font-weight:900;font-size:.75rem;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid ${e.c}44;">${e.n}</div>
<div>
<h3 style="margin-bottom:4px;">${e.title}</h3>
<p style="font-size:.85rem;margin-bottom:10px;">${e.desc}</p>
<div style="background:#0a0f1e;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:12px 14px;font-size:.82rem;color:#94a3b8;font-style:italic;line-height:1.6;">${e.ex}</div>
</div></div>`).join('')}
</div>
</div>

<div class="card">
<div class="tag tag-gold">Before and After</div>
<h3 style="margin-bottom:16px;">See the Difference</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
<div>
<div style="font-size:.72rem;font-weight:800;color:#ef4444;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">&#10060; Weak Description</div>
<div style="background:#120d0d;border:1px solid rgba(239,68,68,.15);border-radius:10px;padding:16px;font-size:.82rem;color:#94a3b8;line-height:1.7;">DenverPlumber.com is a great domain for sale. It has the word Denver and Plumber in it which is good for plumbing businesses. Buy it now for a good price.</div>
</div>
<div>
<div style="font-size:.72rem;font-weight:800;color:#10b981;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">&#10003; Formula-Driven Description</div>
<div style="background:#080f18;border:1px solid rgba(16,185,129,.15);border-radius:10px;padding:16px;font-size:.82rem;color:#cbd5e1;line-height:1.7;">DenverPlumber.com is an exact-match local domain for any plumbing company serving Denver, CO. The keyword receives 2,400 monthly searches &md