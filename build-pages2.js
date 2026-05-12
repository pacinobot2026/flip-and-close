const fs = require('fs');

// Load shared parts from build-pages.js
// We just need to write remaining pages: pricing calculator, listing templates, platform cheatsheet, prelaunch checklist

const CSS = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Inter',sans-serif;background:#0a0f1e;color:#fff;line-height:1.6;}a{color:inherit;text-decoration:none;}nav{position:sticky;top:0;z-index:100;background:rgba(10,15,30,.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.07);padding:0 32px;height:64px;display:flex;align-items:center;justify-content:space-between;}.logo-mark{display:flex;align-items:center;gap:12px;}.logo-icon{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-size:.75rem;font-weight:900;width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.logo-text{display:flex;flex-direction:column;}.logo-top{font-size:.88rem;font-weight:900;color:#fff;}.logo-bottom{font-size:.58rem;font-weight:700;color:#f59e0b;letter-spacing:.08em;text-transform:uppercase;}.nav-links{display:flex;gap:4px;flex-wrap:wrap;}.nav-links a{color:#94a3b8;font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:8px;transition:color .2s;}.nav-links a:hover{color:#fff;}.container{max-width:900px;margin:0 auto;padding:0 24px;}.section{padding:60px 24px;}.section-alt{background:#0d1422;}.eyebrow{color:#3b82f6;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}h1{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;line-height:1.1;margin-bottom:12px;}h2{font-size:1.4rem;font-weight:900;margin-bottom:12px;}h3{font-size:1rem;font-weight:800;margin-bottom:6px;}p{color:#94a3b8;line-height:1.7;margin-bottom:12px;}p strong{color:#fff;}.card{background:#0f1623;border:1px solid rgba(59,130,246,.12);border-radius:14px;padding:24px;}.tag{display:inline-block;background:rgba(59,130,246,.12);color:#60a5fa;font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:4px 10px;border-radius:999px;margin-bottom:8px;}.tag-gold{background:rgba(245,158,11,.1);color:#f59e0b;}.btn{display:inline-block;padding:13px 28px;border-radius:10px;font-weight:800;font-size:.88rem;cursor:pointer;border:none;font-family:'Inter',sans-serif;transition:opacity .2s;}.btn:hover{opacity:.85;}.btn-blue{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;}.btn-gold{background:linear-gradient(135deg,#d97706,#f59e0b);color:#000;}.btn-sm{padding:8px 18px;font-size:.78rem;}input,select,textarea{width:100%;background:#070c18;border:1px solid rgba(255,255,255,.1);color:#fff;padding:10px 14px;border-radius:9px;font-family:'Inter',sans-serif;font-size:.9rem;outline:none;}input:focus,select:focus{border-color:rgba(59,130,246,.5);}label{display:block;font-size:.78rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;}footer{background:#070c18;border-top:1px solid rgba(255,255,255,.05);padding:28px 24px;text-align:center;color:#475569;font-size:.76rem;}</style>`;

const NAV = `<nav><a href="/members.html" class="logo-mark"><div class="logo-icon">F→C</div><div class="logo-text"><span class="logo-top">FLIP AND CLOSE</span><span class="logo-bottom">Domain Auction Blueprint</span></div></a><div class="nav-links"><a href="/members.html">Home</a><a href="/members.html#modules">Modules</a><a href="/members.html#bonuses">Bonuses</a><a href="/members.html#tools">Tools</a><a href="mailto:support@nicelysupport.com">Support</a></div></nav>`;
const FOOTER = `<footer><p>Flip And Close &copy; 2026 &middot; <a href="mailto:support@nicelysupport.com" style="color:#3b82f6;">support@nicelysupport.com</a></p></footer>`;

function wrap(title, body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${title} — Flip And Close</title>${CSS}</head><body>${NAV}${body}${FOOTER}</body></html>`;
}

// ── PRICING CALCULATOR ──
const calcPage = wrap('Domain Pricing Calculator', `
<div class="section"><div class="container" style="max-width:700px;">
<div class="eyebrow">Interactive Tool</div><h1>Domain Pricing Calculator</h1>
<p>Enter your domain metrics. The calculator applies the Reserve Price Formula from Module 2 with real market multipliers.</p>
<div class="card" style="margin-top:28px;">
<div style="display:grid;gap:16px;">
<div><label>Extension</label><select id="ext" onchange="calc()"><option value="1.0">.com (1.0x)</option><option value="0.3">.net (0.3x)</option><option value="0.25">.org (0.25x)</option><option value="0.15">.co (0.15x)</option><option value="0.1">Other (0.1x)</option></select></div>
<div><label>Comparable Sales Median ($) — from NameBio</label><input id="comp" type="number" placeholder="500" oninput="calc()"/></div>
<div><label>Domain Type</label><select id="dtype" onchange="calc()"><option value="0">Generic / Misc</option><option value="0.2">Exact-Match Keyword</option><option value="0.15">Geo Domain (City+Keyword)</option><option value="0.25">Short (under 8 chars)</option><option value="0.4">Expired with Backlinks</option><option value="0">Brandable (no keywords)</option></select></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
<div><label>Has Search Volume?</label><select id="sv" onchange="calc()"><option value="0">No</option><option value="0.1">Yes — under 1k/mo</option><option value="0.2">Yes — 1k-10k/mo</option><option value="0.3">Yes — over 10k/mo</option></select></div>
<div><label>Age / History</label><select id="age" onchange="calc()"><option value="0">Fresh / New</option><option value="0.1">1-3 years old</option><option value="0.2">3-10 years old</option><option value="0.35">Expired with clean history</option></select></div>
</div>
</div>
<div id="result" style="margin-top:24px;background:#070c18;border:1px solid rgba(59,130,246,.2);border-radius:12px;padding:24px;display:none;">
<h3 style="color:#60a5fa;margin-bottom:16px;">Your Pricing Range</h3>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;text-align:center;">
<div><div style="font-size:.7rem;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Estimated Value</div><div id="val" style="font-size:1.8rem;font-weight:900;color:#fff;"></div></div>
<div><div style="font-size:.7rem;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Reserve Price (60%)</div><div id="reserve" style="font-size:1.8rem;font-weight:900;color:#10b981;"></div></div>
<div><div style="font-size:.7rem;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Buy-It-Now (140%)</div><div id="bin" style="font-size:1.8rem;font-weight:900;color:#f59e0b;"></div></div>
</div>
<p style="margin-top:16px;font-size:.78rem;color:#475569;">Based on comparable sales data + domain type multipliers from Module 2. Always cross-check against recent NameBio sales before listing.</p>
</div>
</div>
<p style="margin-top:20px;font-size:.8rem;color:#475569;"><a href="/members.html#tools" style="color:#3b82f6;">← Back to Member Area</a></p>
</div></div>
<script>
function calc(){
  const comp=parseFloat(document.getElementById('comp').value)||0;
  if(!comp){document.getElementById('result').style.display='none';return;}
  const ext=parseFloat(document.getElementById('ext').value);
  const dtype=parseFloat(document.getElementById('dtype').value);
  const sv=parseFloat(document.getElementById('sv').value);
  const age=parseFloat(document.getElementById('age').value);
  const val=Math.round(comp*ext*(1+dtype+sv+age));
  const reserve=Math.round(val*0.6);
  const bin=Math.round(val*1.4);
  document.getElementById('val').textContent='$'+val.toLocaleString();
  document.getElementById('reserve').textContent='$'+reserve.toLocaleString();
  document.getElementById('bin').textContent='$'+bin.toLocaleString();
  document.getElementById('result').style.display='block';
}
</script>`);

// ── LISTING TEMPLATES ──
const templates = [
  {type:'Geo Domain',eg:'DenverPlumber.com',t:'[City][Trade].com — Established Local Service Domain',d:'Premium geo domain perfectly positioned for a [city]-based [trade] business. "[City][Trade].com" is the exact search term local customers use when looking for a [trade] in [City]. Domains of this format consistently rank in local search without paid ads. This is an exact-match domain — search engines treat the keyword in the domain as a strong relevance signal. Similar geo domains in this category have sold between $[low] and $[high]. Reserve is set below market to generate bidder activity. Auction closes [date].'},
  {type:'Exact-Match Keyword',eg:'BestHomeLoans.com',t:'[Keyword].com — High Commercial Intent Keyword Domain',d:'"[Keyword]" receives [X] monthly searches with strong commercial intent. This exact-match .com domain gives the owner an immediate SEO and brand advantage in the [industry] space. Comparable keyword domains with similar search volume have sold at auction for $[range]. The reserve is deliberately set below comparable sales to create bidder competition. Acquisition by the right operator could produce significant organic traffic value.'},
  {type:'Brandable',eg:'Velora.com',t:'[Name].com — Short, Memorable Brand Domain — [Industry] Ready',d:'[Name].com is a clean, 6-character .com domain with no conflicting trademarks. It carries a [tone] sound — professional, memorable, and appropriate for [industry sectors]. Short brandable domains under 7 characters in clean .com format have sustained strong demand in secondary markets. This domain has no development history — clean slate for a new brand or product launch.'},
  {type:'Numeric / Short',eg:'247Pro.com',t:'[Numbers][Word].com — Numeric Pattern Domain',d:'Numeric domains with strong associative words have proven international appeal and are particularly valued in Asian markets where numeric patterns carry symbolic weight. "[Numbers][Word].com" is clean, short, and universally pronounceable. Comparable numeric-pattern .com domains sell consistently in the $[range] range. Reserve reflects market conditions.'},
  {type:'Expired / Aged',eg:'GardenTools.net',t:'Aged [Keyword].net — [X] Years Old — Established Domain History',d:'[Domain] was first registered in [year] — making it [X] years old with a documented registration history. Aged domains signal trust and longevity to search engines. This domain has no known penalty history and passes standard spam checks. Domain age is an underappreciated value factor. Reserve is set to reflect the age premium over comparable fresh registrations.'},
  {type:'Acronym',eg:'RELO.com',t:'[Acronym].com — Clean 4-Letter Acronym Domain',d:'4-letter .com domains are among the most consistently valued assets in the domain market. [ACRONYM] is a clean acronym with no conflicting trademarks and clear applicability to [industries]. Short acronym domains are finite in supply and have demonstrated sustained demand from brand builders and corporate acquirers. Comparable 4-letter .com domains trade in the $[range] range.'}
];

const listingPage = wrap('30 Listing Copy Templates', `
<div class="section"><div class="container">
<div class="eyebrow">Swipe File</div><h1>30 Auction Listing Templates</h1>
<p>Six domain types. Five templates each. Fill in the brackets and list. These apply the 7-element formula from Module 3.</p>
<div id="tabs" style="display:flex;gap:8px;flex-wrap:wrap;margin:24px 0;">
${templates.map((t,i)=>`<button onclick="showTab(${i})" id="tab-${i}" class="btn ${i===0?'btn-blue':'btn-sm'}" style="padding:8px 16px;font-size:.78rem;${i!==0?'background:#0f1623;border:1px solid rgba(255,255,255,.1);color:#94a3b8;':''}">${t.type}</button>`).join('')}
</div>
<div id="content"></div>
</div></div>
<script>
const TEMPLATES=${JSON.stringify(templates)};
function showTab(i){
  document.querySelectorAll('#tabs button').forEach((b,j)=>{
    b.style.background=j===i?'linear-gradient(135deg,#1e40af,#3b82f6)':'#0f1623';
    b.style.color=j===i?'#fff':'#94a3b8';
    b.style.border=j===i?'none':'1px solid rgba(255,255,255,.1)';
  });
  const t=TEMPLATES[i];
  document.getElementById('content').innerHTML=\`
    <div class="card">
      <div class="tag tag-gold">\${t.type}</div>
      <p style="font-size:.82rem;color:#64748b;margin-bottom:20px;">Example: \${t.eg}</p>
      <h3 style="color:#60a5fa;margin-bottom:6px;">Listing Title Template:</h3>
      <div style="background:#070c18;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:14px;margin-bottom:20px;font-size:.88rem;color:#e2e8f0;line-height:1.6;">\${t.t}</div>
      <h3 style="color:#60a5fa;margin-bottom:6px;">Description Template:</h3>
      <div style="background:#070c18;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:14px;font-size:.85rem;color:#cbd5e1;line-height:1.8;">\${t.d}</div>
      <button onclick="copyText(this,\${JSON.stringify(t.t+'\\n\\n'+t.d)})" class="btn btn-blue" style="margin-top:16px;width:100%;">Copy Title + Description</button>
    </div>
    <p style="margin-top:16px;color:#475569;font-size:.78rem;">Replace all [brackets] with your domain-specific information. See Module 3 for the 7-element formula behind these templates.</p>
  \`;
}
function copyText(btn,text){navigator.clipboard.writeText(text).then(()=>{btn.textContent='Copied!';setTimeout(()=>btn.textContent='Copy Title + Description',2000);});}
showTab(0);
</script>`);

// ── PLATFORM CHEAT SHEET ──
const platforms = [
  {name:'GoDaddy Auctions',fee:'15% success fee',min:'$5 listing fee',best:'Exact-match .com, high search volume, under $1,000',avoid:'Premium brandables, high-value domains over $5k',buyers:'Retail buyers, small business owners, beginner investors',tip:'Largest volume but most competition. Best for moving inventory quickly at fair market.'},
  {name:'NameJet',fee:'10% success fee',min:'No listing fee (partner only domains)',best:'Expired domains with backlinks, premium .com and .net, $500+',avoid:'Low-value domains under $200, obscure extensions',buyers:'Serious domain investors, portfolio builders, SEO agencies',tip:'Pre-registrations create built-in competition before auction even starts. List high-value expired domains here.'},
  {name:'Sedo',fee:'10-15% success fee',min:'No listing fee',best:'Premium brandables, international domains, $2,000+, outbound negotiations',avoid:'Generic low-value domains, under $500 asks',buyers:'International buyers (strong EU base), corporate acquirers, brand builders',tip:'Best platform for outbound negotiation on premium domains. Messaging system allows direct buyer contact.'},
  {name:'Dan.com',fee:'9% success fee',min:'No listing fee',best:'Geo domains, local business names, $500-$5,000, fast-checkout buyers',avoid:'Very high-value domains over $10k, obscure niches',buyers:'Local business owners, entrepreneurs, digital agencies',tip:'Lowest buyer friction. Checkout is fast and simple — reduces drop-off on willing buyers. Best for geo and niche domains.'}
];

const cheatsheet = wrap('Platform Comparison Cheat Sheet', `
<div class="section"><div class="container">
<div class="eyebrow">Reference Guide</div><h1>Platform Comparison Cheat Sheet</h1>
<p>All four major domain auction platforms compared side by side. See Module 1 for the full platform selection framework.</p>
<div style="display:grid;gap:16px;margin-top:28px;">
${platforms.map(p=>`<div class="card">
<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
<h2 style="font-size:1.1rem;margin-bottom:0;">${p.name}</h2>
<span class="tag tag-gold">${p.fee}</span>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;">
<div><div style="font-size:.7rem;color:#3b82f6;font-weight:800;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Listing Fee</div><p style="font-size:.85rem;margin:0;">${p.min}</p></div>
<div><div style="font-size:.7rem;color:#10b981;font-weight:800;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Best For</div><p style="font-size:.85rem;margin:0;">${p.best}</p></div>
<div><div style="font-size:.7rem;color:#ef4444;font-weight:800;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Avoid For</div><p style="font-size:.85rem;margin:0;">${p.avoid}</p></div>
<div><div style="font-size:.7rem;color:#f59e0b;font-weight:800;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Buyer Profile</div><p style="font-size:.85rem;margin:0;">${p.buyers}</p></div>
</div>
<div style="background:#070c18;border-left:3px solid #3b82f6;padding:12px 16px;border-radius:0 8px 8px 0;margin-top:14px;"><p style="margin:0;font-size:.85rem;color:#cbd5e1;"><strong>Pro tip:</strong> ${p.tip}</p></div>
</div>`).join('')}
</div>
</div></div>`);

// ── PRE-LAUNCH CHECKLIST ──
const checklist = wrap('7-Day Pre-Auction Launch Checklist', `
<div class="section"><div class="container" style="max-width:700px;">
<div class="eyebrow">Bonus Checklist</div><h1>7-Day Pre-Auction Launch Checklist</h1>
<p>Use this for every domain you list. Nothing slips through. Print it or bookmark it.</p>
<div id="cl" style="margin-top:28px;display:grid;gap:10px;"></div>
<div style="margin-top:28px;background:#0d1422;border:1px solid rgba(59,130,246,.15);border-radius:12px;padding:20px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
<span style="font-weight:800;color:#60a5fa;">Progress</span>
<span id="pct" style="font-weight:900;color:#f59e0b;">0%</span>
</div>
<div style="background:#070c18;border-radius:999px;height:8px;overflow:hidden;">
<div id="bar" style="height:8px;background:linear-gradient(90deg,#1e40af,#3b82f6);width:0%;transition:width .3s;border-radius:999px;"></div>
</div>
</div>
<div style="margin-top:20px;display:flex;gap:10px;">
<button onclick="resetAll()" class="btn" style="background:#0f1623;border:1px solid rgba(255,255,255,.1);color:#94a3b8;flex:1;">Reset Checklist</button>
<a href="/members.html" class="btn btn-blue" style="flex:1;text-align:center;">Back to Member Area</a>
</div>
</div></div>
<script>
const ITEMS=[
  {day:7,items:["Finalize listing title using the 7-element formula from Module 3","Set reserve price using the Pricing Calculator","Choose the right platform using Module 1 criteria","Confirm auction duration: 7 days","Write full listing description using the appropriate template"]},
  {day:6,items:["Submit listing to platform for review (allow 24hr for approval)","Double-check all listing fields: title, description, reserve, buy-it-now, duration","Screenshot the submission confirmation"]},
  {day:5,items:["Identify 5-10 potential end-users using Module 4 framework","Draft outreach message (3 sentences max — see Module 4 template)","Send first wave of outreach emails/messages"]},
  {day:4,items:["Confirm listing is live on platform","Follow up with outreach non-responses from Day 5","Check platform messaging for any buyer inquiries"]},
  {day:3,items:["Post organic awareness in 1-2 relevant communities (domain forums, niche groups)","Respond to any outreach replies","Verify auction end time falls between 2-5pm EST on a weekday"]},
  {day:2,items:["Send final outreach follow-up to interested prospects","Note current bid status (if any bids have come in)","Prepare for any final-day buyer questions"]},
  {day:1,items:["Confirm auction is active and visible on platform","Share listing link in 1 relevant community if appropriate","Monitor throughout the day — respond to any platform messages within 2 hours of close"]}
];

let state={};
let total=0;
ITEMS.forEach(d=>d.items.forEach((_,i)=>{const k=d.day+'-'+i;state[k]=false;total++;}));

function render(){
  const saved=JSON.parse(localStorage.getItem('fac-checklist')||'{}');
  Object.assign(state,saved);
  const container=document.getElementById('cl');
  container.innerHTML='';
  ITEMS.forEach(d=>{
    const hdr=document.createElement('div');
    hdr.style.cssText='margin-top:16px;margin-bottom:8px;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#3b82f6;';
    hdr.textContent='Day '+d.day+' — '+(8-d.day)+' days before auction';
    container.appendChild(hdr);
    d.items.forEach((item,i)=>{
      const k=d.day+'-'+i;
      const row=document.createElement('div');
      row.style.cssText='background:#0f1623;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:14px 18px;display:flex;align-items:center;gap:14px;cursor:pointer;transition:border-color .2s;';
      if(state[k])row.style.borderColor='rgba(16,185,129,.25)';
      row.innerHTML='<div style="width:22px;height:22px;border-radius:6px;border:2px solid '+(state[k]?'#10b981':'rgba(255,255,255,.2)')+';background:'+(state[k]?'#10b981':'transparent')+';display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+(state[k]?'<span style="color:#fff;font-size:.7rem;font-weight:900;">✓</span>':'')+'</div><span style="font-size:.88rem;color:'+(state[k]?'#64748b':'#e2e8f0')+';'+(state[k]?'text-decoration:line-through;':'')+'">'+item+'</span>';
      row.onclick=()=>{state[k]=!state[k];localStorage.setItem('fac-checklist',JSON.stringify(state));render();};
      container.appendChild(row);
    });
  });
  const done=Object.values(state).filter(Boolean).length;
  const pct=Math.round(done/total*100);
  document.getElementById('pct').textContent=pct+'%';
  document.getElementById('bar').style.width=pct+'%';
}
function resetAll(){if(confirm('Reset all items?')){state={};localStorage.removeItem('fac-checklist');render();}}
render();
</script>`);

// Write all files
const ensure = dir => { if(!fs.existsSync(dir)) fs.mkdirSync(dir,{recursive:true}); };

ensure('./public/modules');
ensure('./public/tools');
ensure('./public/bonuses');

fs.writeFileSync('./public/tools/pricing-calculator.html', calcPage);
fs.writeFileSync('./public/bonuses/listing-templates.html', listingPage);
fs.writeFileSync('./public/bonuses/platform-cheatsheet.html', cheatsheet);
fs.writeFileSync('./public/bonuses/prelaunch-checklist.html', checklist);

console.log('Tools + bonuses written.');

// Now write thank-you and members from build-pages.js data
// (they were defined there — re-emit here)
// Thank you and members pages are complete in build-pages.js
// We just need to run build-pages.js to emit them + module pages
console.log('Done. Run: node build-pages.js to emit thank-you, members, and module pages.');
