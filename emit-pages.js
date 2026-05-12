// Emits all remaining pages: thank-you, members, 5 modules
// Standalone — no dependency on truncated build-pages.js
const fs = require('fs');

const BASE = 'https://flip-and-close.vercel.app';

const CSS = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Inter',sans-serif;background:#0a0f1e;color:#fff;line-height:1.6;}a{color:inherit;text-decoration:none;}nav{position:sticky;top:0;z-index:100;background:rgba(10,15,30,.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.07);padding:0 32px;height:64px;display:flex;align-items:center;justify-content:space-between;}.logo-mark{display:flex;align-items:center;gap:12px;}.logo-icon{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-size:.75rem;font-weight:900;width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.logo-text{display:flex;flex-direction:column;}.logo-top{font-size:.88rem;font-weight:900;color:#fff;}.logo-bottom{font-size:.58rem;font-weight:700;color:#f59e0b;letter-spacing:.08em;text-transform:uppercase;}.nav-links{display:flex;gap:4px;flex-wrap:wrap;}.nav-links a{color:#94a3b8;font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:8px;transition:color .2s;}.nav-links a:hover{color:#fff;}.container{max-width:900px;margin:0 auto;padding:0 24px;}.section{padding:60px 24px;}.section-alt{background:#0d1422;}.eyebrow{color:#3b82f6;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}h1{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:900;line-height:1.1;margin-bottom:12px;}h2{font-size:1.4rem;font-weight:900;margin-bottom:12px;}h3{font-size:1rem;font-weight:800;margin-bottom:6px;}p{color:#94a3b8;line-height:1.7;margin-bottom:12px;}p strong{color:#fff;}.card{background:#0f1623;border:1px solid rgba(59,130,246,.12);border-radius:14px;padding:24px;}.flex-gap{display:flex;gap:18px;align-items:flex-start;}.num-badge{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-weight:900;font-size:.82rem;width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.card-grid{display:grid;gap:14px;}.card-grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;}.tag{display:inline-block;background:rgba(59,130,246,.12);color:#60a5fa;font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:4px 10px;border-radius:999px;margin-bottom:8px;}.tag-gold{background:rgba(245,158,11,.1);color:#f59e0b;}.tag-green{background:rgba(16,185,129,.1);color:#10b981;}.btn{display:inline-block;padding:13px 28px;border-radius:10px;font-weight:800;font-size:.88rem;cursor:pointer;border:none;font-family:'Inter',sans-serif;transition:opacity .2s;}.btn:hover{opacity:.85;}.btn-blue{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;}.btn-gold{background:linear-gradient(135deg,#d97706,#f59e0b);color:#000;}.btn-sm{padding:8px 18px;font-size:.78rem;}footer{background:#070c18;border-top:1px solid rgba(255,255,255,.05);padding:28px 24px;text-align:center;color:#475569;font-size:.76rem;}</style>`;

const NAV = `<nav><a href="/members.html" class="logo-mark"><div class="logo-icon">F\u2192C</div><div class="logo-text"><span class="logo-top">FLIP AND CLOSE</span><span class="logo-bottom">Domain Auction Blueprint</span></div></a><div class="nav-links"><a href="/members.html">Home</a><a href="/members.html#modules">Modules</a><a href="/members.html#bonuses">Bonuses</a><a href="/members.html#tools">Tools</a><a href="mailto:support@nicelysupport.com">Support</a></div></nav>`;
const FOOT = `<footer><p>Flip And Close &copy; 2026 &middot; <a href="mailto:support@nicelysupport.com" style="color:#3b82f6;">support@nicelysupport.com</a></p></footer>`;

function wrap(title, body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${title} \u2014 Flip And Close</title>${CSS}</head><body>${NAV}${body}${FOOT}</body></html>`;
}

// THANK YOU
const ty = wrap('Thank You', `
<div class="section" style="text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(59,130,246,.1),transparent 60%);">
<div class="container">
<div style="display:inline-flex;align-items:center;gap:8px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.25);color:#10b981;padding:8px 20px;border-radius:999px;font-size:.8rem;font-weight:800;margin-bottom:24px;">&#10003; Purchase Confirmed</div>
<h1>Welcome to Flip And Close!</h1>
<p style="max-width:560px;margin:0 auto 32px;font-size:1rem;">Your Blueprint is ready. You now have everything you need to start closing domains at premium auction prices.</p>
<div style="background:#0f1623;border:1px solid rgba(59,130,246,.2);border-radius:16px;padding:32px;max-width:600px;margin:0 auto 40px;">
<h3 style="color:#60a5fa;margin-bottom:20px;">What To Do Right Now:</h3>
<div style="display:grid;gap:14px;text-align:left;">
<div class="flex-gap"><div class="num-badge">1</div><div><strong style="color:#fff;">Access Your Member Area</strong><br><span style="color:#64748b;font-size:.85rem;">All 5 modules, tools, and bonuses are waiting.</span></div></div>
<div class="flex-gap"><div class="num-badge">2</div><div><strong style="color:#fff;">Start With Module 1</strong><br><span style="color:#64748b;font-size:.85rem;">Platform Selection takes 12 minutes. It will immediately show you if your domains are on the right platform.</span></div></div>
<div class="flex-gap"><div class="num-badge">3</div><div><strong style="color:#fff;">Run Your Domains Through the Pricing Calculator</strong><br><span style="color:#64748b;font-size:.85rem;">Get a data-backed price range for every domain in your portfolio.</span></div></div>
</div>
<div style="margin-top:28px;"><a href="/members.html" class="btn btn-gold" style="width:100%;display:block;text-align:center;padding:16px;">Go To Member Area &#8594;</a></div>
</div>
<p style="color:#475569;font-size:.78rem;">Check your email &mdash; your access confirmation is on its way from chad@mail.nicelysupport.com</p>
</div></div>
<div class="section section-alt">
<div class="container">
<div class="eyebrow">All Access</div><h2 style="margin-bottom:24px;">Everything Included</h2>
<div class="card-grid-2">
<div class="card"><div class="tag">Module 01</div><h3>Platform Selection Mastery</h3><a href="/modules/module-1.html" class="btn btn-blue btn-sm" style="margin-top:12px;">Start &#8594;</a></div>
<div class="card"><div class="tag">Module 02</div><h3>Reserve Price Formula</h3><a href="/modules/module-2.html" class="btn btn-blue btn-sm" style="margin-top:12px;">Start &#8594;</a></div>
<div class="card"><div class="tag">Module 03</div><h3>Auction Listing Copywriting</h3><a href="/modules/module-3.html" class="btn btn-blue btn-sm" style="margin-top:12px;">Start &#8594;</a></div>
<div class="card"><div class="tag">Module 04</div><h3>Outbound Buyer Finder</h3><a href="/modules/module-4.html" class="btn btn-blue btn-sm" style="margin-top:12px;">Start &#8594;</a></div>
<div class="card"><div class="tag">Module 05</div><h3>Timing &amp; Launch Strategy</h3><a href="/modules/module-5.html" class="btn btn-blue btn-sm" style="margin-top:12px;">Start &#8594;</a></div>
<div class="card"><div class="tag tag-gold">Tool</div><h3>Domain Pricing Calculator</h3><a href="/tools/pricing-calculator.html" class="btn btn-gold btn-sm" style="margin-top:12px;">Open &#8594;</a></div>
<div class="card"><div class="tag tag-gold">Swipe File</div><h3>30 Listing Templates</h3><a href="/bonuses/listing-templates.html" class="btn btn-gold btn-sm" style="margin-top:12px;">Open &#8594;</a></div>
<div class="card"><div class="tag tag-gold">Bonus</div><h3>Platform Cheat Sheet</h3><a href="/bonuses/platform-cheatsheet.html" class="btn btn-gold btn-sm" style="margin-top:12px;">Open &#8594;</a></div>
</div></div></div>`);

// MEMBERS
const members = wrap('Member Area', `
<div class="section" style="background:radial-gradient(ellipse at 50% 0%,rgba(59,130,246,.08),transparent 60%);">
<div class="container"><div class="eyebrow">Member Area</div><h1>Flip And Close Blueprint</h1>
<p>Five modules. Four tools. Two bonuses. Your complete domain auction system.</p></div></div>
<div class="section" id="modules"><div class="container">
<div class="eyebrow">Core Training</div><h2 style="margin-bottom:24px;">The 5 Modules</h2>
<div class="card-grid">
<div class="card flex-gap"><div class="num-badge">01</div><div style="flex:1"><h3>Platform Selection Mastery</h3><p>Choose the right auction platform for every domain type. Covers GoDaddy, NameJet, Sedo, and Dan.com.</p><a href="/modules/module-1.html" class="btn btn-blue btn-sm">Open Module &#8594;</a></div></div>
<div class="card flex-gap"><div class="num-badge">02</div><div style="flex:1"><h3>The Reserve Price Formula</h3><p>Data-backed pricing framework for every domain type using NameBio and DNJournal comparables.</p><a href="/modules/module-2.html" class="btn btn-blue btn-sm">Open Module &#8594;</a></div></div>
<div class="card flex-gap"><div class="num-badge">03</div><div style="flex:1"><h3>Auction Listing Copywriting</h3><p>The 7-element formula + 30 done-for-you templates for 6 domain types.</p><a href="/modules/module-3.html" class="btn btn-blue btn-sm">Open Module &#8594;</a></div></div>
<div class="card flex-gap"><div class="num-badge">04</div><div style="flex:1"><h3>Outbound Buyer Finder</h3><p>Pre-seed demand before your auction opens. Identify and reach 5-10 end-users before listing.</p><a href="/modules/module-4.html" class="btn btn-blue btn-sm">Open Module &#8594;</a></div></div>
<div class="card flex-gap"><div class="num-badge">05</div><div style="flex:1"><h3>Timing &amp; Launch Strategy</h3><p>The 12-month auction calendar, best days and times per domain type, and 7-day pre-launch checklist.</p><a href="/modules/module-5.html" class="btn btn-blue btn-sm">Open Module &#8594;</a></div></div>
</div></div></div>
<div class="section section-alt" id="tools"><div class="container">
<div class="eyebrow">Interactive Tools</div><h2 style="margin-bottom:24px;">Your Toolkit</h2>
<div class="card-grid-2">
<div class="card"><div class="tag tag-gold">Calculator</div><h3>Domain Pricing Calculator</h3><p>Enter domain metrics and get a data-backed reserve price range instantly.</p><a href="/tools/pricing-calculator.html" class="btn btn-gold btn-sm" style="margin-top:8px;">Open Tool &#8594;</a></div>
<div class="card"><div class="tag tag-gold">Reference</div><h3>Platform Comparison Cheat Sheet</h3><p>All 4 platforms compared by fees, buyer pool, and best use cases.</p><a href="/bonuses/platform-cheatsheet.html" class="btn btn-gold btn-sm" style="margin-top:8px;">Open &#8594;</a></div>
</div></div></div>
<div class="section" id="bonuses"><div class="container">
<div class="eyebrow">Bonuses</div><h2 style="margin-bottom:24px;">Bonus Resources</h2>
<div class="card-grid-2">
<div class="card"><div class="tag tag-green">Swipe File</div><h3>30 Listing Copy Templates</h3><p>Done-for-you templates for geo, exact-match, brandable, numeric, acronym, and expired domains.</p><a href="/bonuses/listing-templates.html" class="btn btn-blue btn-sm" style="margin-top:8px;">Open &#8594;</a></div>
<div class="card"><div class="tag tag-green">Checklist</div><h3>7-Day Pre-Auction Launch Checklist</h3><p>Every step to take the week before your auction goes live.</p><a href="/bonuses/prelaunch-checklist.html" class="btn btn-blue btn-sm" style="margin-top:8px;">Open &#8594;</a></div>
</div></div></div>`);

// MODULE PAGES
const mods = [
  {num:1, title:'Platform Selection Mastery', intro:'Most flippers default to GoDaddy Auctions for everything. That\'s a mistake. Each platform has a completely different buyer pool &mdash; and listing on the wrong one means your domain is invisible to the buyers who would actually pay for it.',
   points:[
    {h:'GoDaddy Auctions',p:'Best for high-traffic generic keywords, .com domains with search volume, and domains priced under $1,000. Largest buyer pool but most competitive listing environment. Default choice for volume-moving.'},
    {h:'NameJet',p:'Best for exact-match keyword domains, expired domains with backlink profiles, and premium .com and .net domains over $500. Attracts serious domain investors with real acquisition budgets.'},
    {h:'Sedo',p:'Best for high-value brandables, international domains, and premium domains over $2,000. Strong European buyer base. Also the best platform for outbound negotiation via direct messaging.'},
    {h:'Dan.com',p:'Best for geo domains, local business names, and niche-specific names in the $500-$5,000 range. Lowest buyer friction &mdash; fast checkout reduces drop-off on willing buyers.'},
    {h:'The Decision Framework',p:'Step 1: Classify your domain type. Step 2: Determine price tier. Step 3: Match to platform. Step 4: List on ONE platform only &mdash; splitting inventory dilutes bidder attention and creates confusion.'}
   ],
   takeaways:['Never list the same domain on multiple platforms simultaneously','Dan.com is consistently underused for geo and local business domains','NameJet\'s buyer pool skews toward serious investors &mdash; better for higher reserves','Check Sedo for international interest before setting reserve on premium brandables'],
   prev:null,next:'/modules/module-2.html',prevL:null,nextL:'Module 2: Reserve Price Formula'},
  {num:2, title:'The Reserve Price Formula', intro:'Setting the wrong reserve price is the number one reason domain auctions fail. Too high and nobody bids. Too low and you leave money on the table. This module gives you a data-backed calculation framework for every major domain type.',
   points:[
    {h:'Step 1 &mdash; Find Comparables',p:'Go to NameBio.com and search for domains similar to yours that have sold. Filter by extension, character length, and keyword type. Pull 5-10 comparable sales from the last 24 months.'},
    {h:'Step 2 &mdash; Calculate the Median',p:'Remove the highest and lowest outlier from your comparables. Calculate the median of the remaining sales. This is your baseline market value.'},
    {h:'Step 3 &mdash; Apply Domain Multipliers',p:'.com = 1.0x baseline. .net = 0.3x. .org = 0.25x. Exact keyword match = +20%. Geo domain = +15%. Under 8 characters = +25%. Expired with backlinks = +30-50%.'},
    {h:'Step 4 &mdash; Set Reserve and Buy-It-Now',p:'Reserve = 60% of calculated value. Buy-It-Now = 140% of calculated value. This spread creates urgency while protecting your floor.'},
    {h:'Use the Pricing Calculator',p:'The interactive Domain Pricing Calculator in your member area runs this formula automatically. Enter your metrics and get an instant price range.'}
   ],
   takeaways:['NameBio is your most important research tool &mdash; use it before every listing','Always offer a Buy-It-Now price &mdash; serious buyers often skip auctions entirely','Under-pricing signals low quality to experienced buyers &mdash; both directions matter','Aged domains with clean backlink profiles routinely sell for 3-5x comparable fresh domains'],
   prev:'/modules/module-1.html',next:'/modules/module-3.html',prevL:'Module 1',nextL:'Module 3: Listing Copy'},
  {num:3, title:'Auction Listing Copywriting', intro:'Buyers do not buy domain names. They buy what the domain represents for their business. Your listing title and description are your only opportunity to communicate that vision before they click away. This module teaches the 7-element formula that wins auctions.',
   points:[
    {h:'Element 1 &mdash; The Business Vision Title',p:'Describe the business someone could build, not just the domain. "DenverPlumber.com &mdash; Perfect for Denver-Based Plumbing Services" beats "DenverPlumber.com" every time.'},
    {h:'Element 2 &mdash; Category and Use Case',p:'State explicitly what type of business this domain is built for. Buyers search by category. Being specific increases relevance ranking and buyer confidence.'},
    {h:'Element 3 &mdash; Keyword and SEO Value',p:'If the domain has keyword search volume, state the monthly search figure. This is concrete ROI a buyer can calculate.'},
    {h:'Element 4 &mdash; Comparable Sales Reference',p:'Include one comparable sale: "Similar domains like [X] sold for $[Y] in [year]." This anchors your price against real market data.'},
    {h:'Elements 5-7 &mdash; Urgency, Extension Justification, Outreach CTA',p:'Reinforce the auction deadline. Justify non-.com extensions with a business rationale. Include an outreach invitation: "Interested before auction closes? Contact via platform messaging."'}
   ],
   takeaways:['The title determines 80% of whether a buyer reads further or scrolls past','Never use placeholder descriptions &mdash; they signal you do not believe in your own domain','The comparable sales reference adds significant credibility when available','The 30 listing templates in your bonuses apply this formula to 6 domain types &mdash; use them'],
   prev:'/modules/module-2.html',next:'/modules/module-4.html',prevL:'Module 2',nextL:'Module 4: Outbound Buyer Finder'},
  {num:4, title:'The Outbound Buyer Finder', intro:'The highest-closing auctions almost always have one thing in common: pre-seeded demand. When potential buyers know your domain is going to auction before it opens, you get competition &mdash; and competition drives prices up.',
   points:[
    {h:'Step 1 &mdash; Classify the Domain',p:'Geo, exact-match keyword, brandable, or industry-specific. This determines where potential end-users live online and how to find them.'},
    {h:'Step 2 &mdash; Find Potential End Users',p:'Geo domains: Google the city+keyword phrase and pull the top 20 local business results. Keyword domains: search LinkedIn for companies in that industry. Brandables: find relevant startups on Crunchbase or Product Hunt.'},
    {h:'Step 3 &mdash; Qualify Prospects',p:'Look for businesses already using a weak or long domain, recently funded, active on social media, or in a growth phase. Skip businesses that are clearly offline-only.'},
    {h:'Step 4 &mdash; The 3-Sentence Outreach',p:'Subject: "The domain [YourDomain.com] is going to auction &mdash; wanted to reach you first." Body: "I noticed you\'re in [space] &mdash; this domain goes to public auction on [date]. Wanted to give you the chance to acquire it before bidding opens. Here\'s the auction link if you want to take a look." No pitch. No price. Just awareness.'},
    {h:'Step 5 &mdash; Timing Your Outreach',p:'Send 5-7 days before auction opens. Follow up once, 2 days before close. If they express interest, point them to the auction rather than negotiating privately unless the offer is well above reserve.'}
   ],
   takeaways:['5 qualified outreach messages per domain is enough &mdash; quality over volume','One serious end-user at an auction can push a $200 reserve to $2,000','The goal of outreach is awareness, not negotiation &mdash; let the auction do the closing','Track which domains had outreach and what the auction result was &mdash; the data compounds over time'],
   prev:'/modules/module-3.html',next:'/modules/module-5.html',prevL:'Module 3',nextL:'Module 5: Timing Strategy'},
  {num:5, title:'Timing &amp; Launch Strategy', intro:'Domain auction timing is one of the most overlooked variables in flipping. The same domain listed at the right time versus the wrong time can produce completely different results &mdash; not because of the domain, but because of where buyers\' attention is.',
   points:[
    {h:'The 12-Month Auction Calendar',p:'Jan-Feb: Health, fitness, finance, business &mdash; highest buyer activity of the year. Mar-Apr: Real estate, home, spring consumer. May-Jun: Travel, outdoor, lifestyle. Jul-Aug: Slow period &mdash; avoid listing premium domains. Sep-Oct: Business, tech, education. Nov-Dec: Avoid entirely &mdash; pre-holiday distraction kills auction performance.'},
    {h:'Day of Week',p:'Tuesday, Wednesday, and Thursday are the highest-activity auction days. Set your auction to CLOSE on one of these days. Auctions closing on weekends consistently underperform by 20-40%.'},
    {h:'Time of Day',p:'Set auction end times between 2:00-5:00pm EST. This captures West Coast US morning buyers and EU buyers still active. Avoid auctions ending before 10am or after 8pm EST.'},
    {h:'Auction Duration',p:'7-day auctions outperform 3-day and 14-day on most platforms. 3-day is too short for serious buyers to plan around. 14-day creates urgency fatigue. 7 days is the consistent sweet spot.'},
    {h:'The 7-Day Pre-Auction Checklist',p:'Day 7: Finalize listing and pricing. Day 6: Submit for platform review. Day 5: Send outreach to identified end-users. Day 4: Follow up on outreach. Day 3: Post organic awareness. Day 2: Final outreach follow-up. Day 1: Confirm listing is live, share in communities.'}
   ],
   takeaways:['Never let a premium domain auction close on a Saturday or Sunday','July and August are research and outreach months &mdash; not listing months','Your first auctions should all be 7-day durations until you have your own platform data','The interactive 7-Day Checklist is in your bonuses section &mdash; use it for every listing'],
   prev:'/modules/module-4.html',next:null,prevL:'Module 4',nextL:null}
];

function modPage(m) {
  const body = `
<div class="section">
<div class="container">
<div class="eyebrow">Module ${m.num} of 5</div>
<h1>${m.title}</h1>
<p style="font-size:1rem;">${m.intro}</p>
<div class="card-grid" style="margin-top:32px;">
${m.points.map((p,i)=>`<div class="card flex-gap"><div class="num-badge">${String(i+1).padStart(2,'0')}</div><div><h3>${p.h}</h3><p>${p.p}</p></div></div>`).join('')}
</div>
<div style="background:#0d1422;border:1px solid rgba(245,158,11,.15);border-radius:14px;padding:28px;margin-top:32px;">
<h3 style="color:#f59e0b;margin-bottom:16px;">Key Takeaways</h3>
${m.takeaways.map(t=>`<div style="display:flex;gap:10px;margin-bottom:10px;"><span style="color:#3b82f6;font-weight:900;flex-shrink:0;">&#8594;</span><span style="color:#cbd5e1;font-size:.9rem;">${t}</span></div>`).join('')}
</div>
<div style="display:flex;justify-content:space-between;margin-top:36px;flex-wrap:wrap;gap:12px;">
${m.prev ? `<a href="${m.prev}" class="btn" style="background:#0f1623;border:1px solid rgba(255,255,255,.1);color:#94a3b8;">&#8592; ${m.prevL}</a>` : '<div></div>'}
${m.next ? `<a href="${m.next}" class="btn btn-blue">${m.nextL} &#8594;</a>` : `<a href="/members.html" class="btn btn-gold">Back to Member Area</a>`}
</div>
</div></div>`;
  return wrap(`Module ${m.num}: ${m.title}`, body);
}

// Ensure dirs
['./public/modules','./public/tools','./public/bonuses'].forEach(d=>{
  if(!require('fs').existsSync(d)) require('fs').mkdirSync(d,{recursive:true});
});

fs.writeFileSync('./public/thank-you.html', ty);
fs.writeFileSync('./public/members.html', members);
mods.forEach(m => fs.writeFileSync(`./public/modules/module-${m.num}.html`, modPage(m)));

console.log('All pages written:');
console.log('- thank-you.html');
console.log('- members.html');
mods.forEach(m => console.log(`- modules/module-${m.num}.html`));
