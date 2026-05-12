const fs = require('fs');
const path = require('path');

const STRIPE_LINK = 'https://buy.stripe.com/8x27sKeOI8O8baC9pz1oI0H';
const BASE_URL = 'https://flip-and-close.vercel.app';

const NAV = (active='') => `
<nav>
  <a href="/" class="logo-mark">
    <div class="logo-icon">F→C</div>
    <div class="logo-text">
      <span class="logo-top">FLIP AND CLOSE</span>
      <span class="logo-bottom">Domain Auction Blueprint</span>
    </div>
  </a>
  <div class="nav-links">
    <a href="/members.html" ${active==='members'?'style="color:#fff"':''}>Home</a>
    <a href="/members.html#modules" ${active==='modules'?'style="color:#fff"':''}>Modules</a>
    <a href="/members.html#bonuses" ${active==='bonuses'?'style="color:#fff"':''}>Bonuses</a>
    <a href="/members.html#tools" ${active==='tools'?'style="color:#fff"':''}>Tools</a>
    <a href="mailto:support@nicelysupport.com">Support</a>
  </div>
</nav>`;

const CSS = `
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Inter',sans-serif;background:#0a0f1e;color:#fff;line-height:1.6;}
a{color:inherit;text-decoration:none;}
nav{position:sticky;top:0;z-index:100;background:rgba(10,15,30,.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.07);padding:0 32px;height:64px;display:flex;align-items:center;justify-content:space-between;}
.logo-mark{display:flex;align-items:center;gap:12px;}
.logo-icon{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-size:.75rem;font-weight:900;width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.logo-text{display:flex;flex-direction:column;}
.logo-top{font-size:.88rem;font-weight:900;color:#fff;letter-spacing:.03em;line-height:1.1;}
.logo-bottom{font-size:.58rem;font-weight:700;color:#f59e0b;letter-spacing:.08em;text-transform:uppercase;}
.nav-links{display:flex;gap:4px;flex-wrap:wrap;}
.nav-links a{color:#94a3b8;font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:8px;transition:color .2s;}
.nav-links a:hover{color:#fff;}
.container{max-width:900px;margin:0 auto;padding:0 24px;}
.section{padding:60px 24px;}
.section-alt{background:#0d1422;}
.eyebrow{color:#3b82f6;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}
h1{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;line-height:1.1;margin-bottom:12px;}
h2{font-size:clamp(1.4rem,3vw,2rem);font-weight:900;line-height:1.15;margin-bottom:12px;}
h3{font-size:1rem;font-weight:800;margin-bottom:6px;}
p{color:#94a3b8;line-height:1.7;margin-bottom:12px;}
p strong{color:#fff;}
.card{background:#0f1623;border:1px solid rgba(59,130,246,.12);border-radius:14px;padding:24px;}
.card-grid{display:grid;gap:14px;}
.card-grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;}
.tag{display:inline-block;background:rgba(59,130,246,.12);color:#60a5fa;font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:4px 10px;border-radius:999px;margin-bottom:8px;}
.tag-gold{background:rgba(245,158,11,.1);color:#f59e0b;}
.tag-green{background:rgba(16,185,129,.1);color:#10b981;}
.btn{display:inline-block;padding:13px 28px;border-radius:10px;font-weight:800;font-size:.88rem;cursor:pointer;border:none;font-family:'Inter',sans-serif;transition:opacity .2s;}
.btn:hover{opacity:.85;}
.btn-blue{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;}
.btn-gold{background:linear-gradient(135deg,#d97706,#f59e0b);color:#000;}
.btn-sm{padding:8px 18px;font-size:.78rem;}
.num-badge{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;font-weight:900;font-size:.82rem;width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.flex-gap{display:flex;gap:18px;align-items:flex-start;}
footer{background:#070c18;border-top:1px solid rgba(255,255,255,.05);padding:28px 24px;text-align:center;color:#475569;font-size:.76rem;}
@media(max-width:600px){nav{padding:0 16px;}.nav-links{display:none;}}
</style>`;

function page(title, body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${title} — Flip And Close</title>${CSS}</head><body>${body}<footer><p>Flip And Close &copy; 2026 &nbsp;&middot;&nbsp; <a href="mailto:support@nicelysupport.com" style="color:#3b82f6;">support@nicelysupport.com</a></p></footer></body></html>`;
}

// ── THANK YOU PAGE ──
const thankYou = page('Thank You', `
${NAV('members')}
<div class="section" style="text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(59,130,246,.1),transparent 60%);">
  <div class="container">
    <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.25);color:#10b981;padding:8px 20px;border-radius:999px;font-size:.8rem;font-weight:800;margin-bottom:24px;">✓ Purchase Confirmed</div>
    <h1>Welcome to Flip And Close!</h1>
    <p style="max-width:560px;margin:0 auto 32px;font-size:1rem;">Your Blueprint is ready. You now have everything you need to start closing domains at premium auction prices.</p>
    <div style="background:#0f1623;border:1px solid rgba(59,130,246,.2);border-radius:16px;padding:32px;max-width:600px;margin:0 auto 40px;">
      <h3 style="color:#60a5fa;margin-bottom:20px;">What To Do Right Now:</h3>
      <div style="display:grid;gap:14px;text-align:left;">
        <div class="flex-gap"><div class="num-badge">1</div><div><strong style="color:#fff;">Access Your Member Area</strong><br><span style="color:#64748b;font-size:.85rem;">All 5 modules, tools, and bonuses are inside.</span></div></div>
        <div class="flex-gap"><div class="num-badge">2</div><div><strong style="color:#fff;">Start With Module 1</strong><br><span style="color:#64748b;font-size:.85rem;">Platform Selection — takes 12 minutes. Will immediately tell you if you're listing on the right platform.</span></div></div>
        <div class="flex-gap"><div class="num-badge">3</div><div><strong style="color:#fff;">Use the Pricing Calculator</strong><br><span style="color:#64748b;font-size:.85rem;">Run your current domains through it and get a data-backed price range for each one.</span></div></div>
      </div>
      <div style="margin-top:28px;">
        <a href="/members.html" class="btn btn-gold" style="width:100%;display:block;text-align:center;padding:16px;">Go To Member Area →</a>
      </div>
    </div>
    <p style="color:#475569;font-size:.78rem;">Check your email — your access confirmation is on its way from chad@mail.nicelysupport.com</p>
  </div>
</div>
<div class="section section-alt">
  <div class="container">
    <div class="eyebrow">What's Included</div>
    <h2 style="margin-bottom:28px;">Everything You Have Access To</h2>
    <div class="card-grid-2">
      <div class="card"><div class="tag">Module 01</div><h3>Platform Selection Mastery</h3><p>Choose the right auction platform for every domain type.</p><a href="/modules/module-1.html" class="btn btn-blue btn-sm">Start →</a></div>
      <div class="card"><div class="tag">Module 02</div><h3>Reserve Price Formula</h3><p>Data-backed pricing framework for every domain type.</p><a href="/modules/module-2.html" class="btn btn-blue btn-sm">Start →</a></div>
      <div class="card"><div class="tag">Module 03</div><h3>Auction Listing Copywriting</h3><p>The 7-element formula + 30 done-for-you templates.</p><a href="/modules/module-3.html" class="btn btn-blue btn-sm">Start →</a></div>
      <div class="card"><div class="tag">Module 04</div><h3>Outbound Buyer Finder</h3><p>Pre-seed demand before your auction opens.</p><a href="/modules/module-4.html" class="btn btn-blue btn-sm">Start →</a></div>
      <div class="card"><div class="tag">Module 05</div><h3>Timing &amp; Launch Strategy</h3><p>The 12-month auction calendar + 7-day checklist.</p><a href="/modules/module-5.html" class="btn btn-blue btn-sm">Start →</a></div>
      <div class="card"><div class="tag tag-gold">Tool</div><h3>Domain Pricing Calculator</h3><p>Enter your metrics, get a data-backed price range.</p><a href="/tools/pricing-calculator.html" class="btn btn-gold btn-sm">Open →</a></div>
      <div class="card"><div class="tag tag-gold">Swipe File</div><h3>30 Listing Templates</h3><p>Done-for-you copy for 6 domain types.</p><a href="/bonuses/listing-templates.html" class="btn btn-gold btn-sm">Open →</a></div>
      <div class="card"><div class="tag tag-gold">Bonus</div><h3>Platform Cheat Sheet</h3><p>GoDaddy vs NameJet vs Sedo vs Dan.com breakdown.</p><a href="/bonuses/platform-cheatsheet.html" class="btn btn-gold btn-sm">Open →</a></div>
    </div>
  </div>
</div>`);

// ── MEMBER AREA ──
const members = page('Member Area', `
${NAV('members')}
<div class="section" style="background:radial-gradient(ellipse at 50% 0%,rgba(59,130,246,.08),transparent 60%);">
  <div class="container">
    <div class="eyebrow">Member Area</div>
    <h1>Flip And Close Blueprint</h1>
    <p>Your complete domain auction system. Five modules. Four tools. Two bonuses.</p>
  </div>
</div>
<div class="section" id="modules">
  <div class="container">
    <div class="eyebrow">Core Training</div>
    <h2 style="margin-bottom:24px;">The 5 Modules</h2>
    <div class="card-grid">
      <div class="card flex-gap"><div class="num-badge">01</div><div style="flex:1"><h3>Platform Selection Mastery</h3><p>Choose the right auction platform for every domain type based on buyer pool, fees, and domain category. Covers GoDaddy, NameJet, Sedo, and Dan.com.</p><a href="/modules/module-1.html" class="btn btn-blue btn-sm">Open Module →</a></div></div>
      <div class="card flex-gap"><div class="num-badge">02</div><div style="flex:1"><h3>The Reserve Price Formula</h3><p>A data-backed framework for setting reserve prices on geo domains, exact-match keywords, brandables, and expired domains using NameBio and DNJournal comparables.</p><a href="/modules/module-2.html" class="btn btn-blue btn-sm">Open Module →</a></div></div>
      <div class="card flex-gap"><div class="num-badge">03</div><div style="flex:1"><h3>Auction Listing Copywriting</h3><p>The 7-element listing formula that sells the vision, not just the domain. Includes 30 done-for-you templates for 6 domain types.</p><a href="/modules/module-3.html" class="btn btn-blue btn-sm">Open Module →</a></div></div>
      <div class="card flex-gap"><div class="num-badge">04</div><div style="flex:1"><h3>The Outbound Buyer Finder</h3><p>How to identify 5-10 potential end-users before your auction opens — and how to reach out in a way that creates demand without being spammy.</p><a href="/modules/module-4.html" class="btn btn-blue btn-sm">Open Module →</a></div></div>
      <div class="card flex-gap"><div class="num-badge">05</div><div style="flex:1"><h3>Timing &amp; Launch Strategy</h3><p>The 12-month auction calendar, best days/times per domain type, and the 7-day pre-auction launch checklist.</p><a href="/modules/module-5.html" class="btn btn-blue btn-sm">Open Module →</a></div></div>
    </div>
  </div>
</div>
<div class="section section-alt" id="tools">
  <div class="container">
    <div class="eyebrow">Interactive Tools</div>
    <h2 style="margin-bottom:24px;">Your Toolkit</h2>
    <div class="card-grid-2">
      <div class="card"><div class="tag tag-gold">Calculator</div><h3>Domain Pricing Calculator</h3><p>Enter domain metrics and get a data-backed reserve price range instantly.</p><a href="/tools/pricing-calculator.html" class="btn btn-gold btn-sm">Open Tool →</a></div>
      <div class="card"><div class="tag tag-gold">Reference</div><h3>Platform Comparison Cheat Sheet</h3><p>Fees, buyer demographics, and best use cases for all 4 platforms side by side.</p><a href="/bonuses/platform-cheatsheet.html" class="btn btn-gold btn-sm">Open →</a></div>
    </div>
  </div>
</div>
<div class="section" id="bonuses">
  <div class="container">
    <div class="eyebrow">Bonuses</div>
    <h2 style="margin-bottom:24px;">Bonus Resources</h2>
    <div class="card-grid-2">
      <div class="card"><div class="tag tag-green">Swipe File</div><h3>30 Listing Copy Templates</h3><p>Done-for-you auction listing templates for geo, exact-match, brandable, numeric, acronym, and expired domains.</p><a href="/bonuses/listing-templates.html" class="btn btn-blue btn-sm">Open →</a></div>
      <div class="card"><div class="tag tag-green">Checklist</div><h3>7-Day Pre-Auction Launch Checklist</h3><p>Every step to take the week before your auction goes live — nothing slips through.</p><a href="/bonuses/prelaunch-checklist.html" class="btn btn-blue btn-sm">Open →</a></div>
    </div>
  </div>
</div>`);

// ── MODULE TEMPLATE ──
function module(num, title, intro, points, keyTakeaways, prevLink, nextLink, prevLabel, nextLabel) {
  return page(`Module ${num}: ${title}`, `
${NAV('modules')}
<div class="section">
  <div class="container">
    <div class="eyebrow">Module ${num} of 5</div>
    <h1>${title}</h1>
    <p style="font-size:1rem;">${intro}</p>
    <div style="margin-top:32px;" class="card-grid">
      ${points.map((p,i)=>`<div class="card flex-gap"><div class="num-badge">${String(i+1).padStart(2,'0')}</div><div><h3>${p.h}</h3><p>${p.p}</p></div></div>`).join('')}
    </div>
    <div style="background:#0d1422;border:1px solid rgba(245,158,11,.15);border-radius:14px;padding:28px;margin-top:32px;">
      <h3 style="color:#f59e0b;margin-bottom:16px;">Key Takeaways</h3>
      ${keyTakeaways.map(k=>`<div style="display:flex;gap:10px;margin-bottom:10px;"><span style="color:#3b82f6;font-weight:900;flex-shrink:0;">→</span><span style="color:#cbd5e1;font-size:.9rem;">${k}</span></div>`).join('')}
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:36px;flex-wrap:wrap;gap:12px;">
      ${prevLink ? `<a href="${prevLink}" class="btn" style="background:#0f1623;border:1px solid rgba(255,255,255,.1);color:#94a3b8;">← ${prevLabel}</a>` : '<div></div>'}
      ${nextLink ? `<a href="${nextLink}" class="btn btn-blue">${nextLabel} →</a>` : `<a href="/members.html" class="btn btn-gold">Back to Member Area</a>`}
    </div>
  </div>
</div>`);
}

const mod1 = module(1, 'Platform Selection Mastery',
  'Most flippers default to GoDaddy Auctions for everything. That\'s a mistake. Each platform has a completely different buyer pool — and listing on the wrong one means your domain is invisible to the people who would actually pay for it.',
  [
    {h:'GoDaddy Auctions', p:'Best for: high-traffic generic keywords, .com domains with search volume, domains priced under $1,000. Largest buyer pool but most competitive listing environment.'},
    {h:'NameJet', p:'Best for: exact-match keyword domains, expired domains with backlink profiles, premium .com and .net domains over $500. Attracts serious domain investors.'},
    {h:'Sedo', p:'Best for: high-value brandables, international domains, premium asking price domains ($2,000+). Strong European buyer base. Best for outbound negotiations.'},
    {h:'Dan.com', p:'Best for: geo domains, local business domains, niche-specific names. Fast checkout process, lowest buyer friction. Best for domains priced $500-$5,000.'},
    {h:'The Decision Framework', p:'Step 1: Classify your domain type. Step 2: Determine price tier. Step 3: Match to platform using the criteria above. Step 4: List exclusively on one platform — splitting inventory dilutes bidder attention.'}
  ],
  ['Never list the same domain on multiple platforms simultaneously — it confuses buyers and dilutes your auction','Dan.com is consistently underused for geo domains and is often the best choice for local business names','NameJet\'s buyer pool skews toward serious investors — better for higher reserve prices','Check Sedo for international buyer interest before setting your reserve on premium brandables'],
  null, '/modules/module-2.html', null, 'Module 2: Reserve Price Formula');

const mod2 = module(2, 'The Reserve Price Formula',
  'Setting the wrong reserve price is the #1 reason auctions fail. Too high and nobody bids. Too low and you leave money on the table. This module gives you a data-backed calculation framework for every major domain type.',
  [
    {h:'Step 1 — Find Comparables', p:'Go to NameBio.com and search for similar domains that have sold. Filter by extension, length, and keyword type. Pull 5-10 comparable sales from the last 24 months.'},
    {h:'Step 2 — Calculate the Median', p:'Remove the highest and lowest outlier from your comparables. Calculate the median of the remaining sales. This is your baseline value.'},
    {h:'Step 3 — Apply Domain Multipliers', p:'.com = 1.0x baseline. .net = 0.3x. .org = 0.25x. Exact keyword match = +20%. Geo domain with city+keyword = +15%. Short (under 8 chars) = +25%. Aged/expired with backlinks = +30-50%.'},
    {h:'Step 4 — Set Reserve vs Buy-It-Now', p:'Reserve = 60-70% of calculated value. Buy-It-Now = 130-150% of calculated value. This spread creates urgency while protecting your floor.'},
    {h:'The Pricing Calculator', p:'Use the interactive Domain Pricing Calculator in your member area to run this calculation automatically. Enter your metrics and get an instant range.'}
  ],
  ['NameBio is your most important research tool — bookmark it and use it before every listing','The buy-it-now price should always be available — serious buyers often skip auctions entirely','Under-pricing is just as dangerous as over-pricing — it signals low quality to experienced buyers','Aged domains with clean backlink profiles routinely sell for 3-5x comparable fresh domains'],
  '/modules/module-1.html', '/modules/module-3.html', 'Module 1', 'Module 3: Listing Copy');

const mod3 = module(3, 'Auction Listing Copywriting',
  'Buyers don\'t buy domain names. They buy what the domain represents for their business. Your listing title and description are your only opportunity to communicate that vision before they click away. This module teaches you the 7-element formula that wins auctions.',
  [
    {h:'Element 1 — The Business Vision Title', p:'Your listing title should describe the business someone could build, not just the domain name. "PremiumFitnessCoach.com — Perfect for Online Personal Trainers" beats "PremiumFitnessCoach.com" every time.'},
    {h:'Element 2 — Category + Use Case', p:'State explicitly what type of business this domain is for. Buyers search by category. Being specific increases relevance ranking and buyer confidence.'},
    {h:'Element 3 — Keyword & SEO Value', p:'If the domain has search volume relevance, state the exact keyword and monthly search volume. This is concrete value a buyer can calculate ROI on.'},
    {h:'Element 4 — Comparable Sales Reference', p:'Include one comparable sale: "Similar domains like [X] sold for $[Y] in [year]." This anchors your reserve against real market data.'},
    {h:'Element 5 — Urgency Signal', p:'End-date urgency is built into auctions. Reinforce it: "Reserve is set below market value to generate bidder competition — auction ends [date]."'},
    {h:'Element 6 — Extension Justification', p:'If not .com, justify the extension: "The .net extension is the industry standard for networking platforms and technology businesses."'},
    {h:'Element 7 — Call to Outreach', p:'"Interested in acquiring this before auction closes? Contact via Sedo messaging for pre-auction offers." Creates a private buyer channel alongside the public auction.'}
  ],
  ['The title is the most important element — 80% of buyers decide to read or skip based on title alone','Never use placeholder descriptions — they signal you don\'t believe in your own domain','The comparable sales reference is optional but adds significant credibility when available','The 30 listing templates in your member area apply this formula to 6 domain types — use them'],
  '/modules/module-2.html', '/modules/module-4.html', 'Module 2', 'Module 4: Outbound Buyer Finder');

const mod4 = module(4, 'The Outbound Buyer Finder',
  'The highest-closing auctions almost always have one thing in common: pre-seeded demand. When potential buyers already know your domain is going to auction before it opens, you get competition — and competition drives prices up.',
  [
    {h:'Step 1 — Identify the Domain Type', p:'Classify your domain: geo (city+keyword), exact-match keyword, brandable, industry-specific. This determines where your end-users live online.'},
    {h:'Step 2 — Find Potential End Users', p:'For geo domains: Google "[city] [keyword]" and pull the top 20 local business results. For keyword domains: search LinkedIn for companies in that industry. For brandables: find startups on Crunchbase in the relevant sector.'},
    {h:'Step 3 — Qualify Prospects', p:'Look for businesses: already using a weak/long domain, recently funded (budget to upgrade), active on social media (digital-aware), or in a growth phase. Skip brick-and-mortar only businesses.'},
    {h:'Step 4 — The Outreach Message', p:'Keep it to 3 sentences. Subject: "The domain [YourDomain.com] is going to auction — wanted to reach you first." Body: "I noticed you\'re in [space] — this domain is going to public auction on [date]. Wanted to give you a chance to acquire it before bidding opens. Let me know if you\'d like the auction link." No pitch. No price. Just awareness.'},
    {h:'Step 5 — Timing Your Outreach', p:'Send outreach 5-7 days before the auction opens. Follow up once, 2 days before close. If they express interest, point them to the auction — don\'t negotiate privately unless the offer is significantly above reserve.'}
  ],
  ['5 qualified outreach messages per domain is enough — quality over volume','The goal of outreach is awareness, not negotiation — let the auction do the closing','One serious end-user showing up to an auction can push a $200 reserve to $2,000','Keep a simple spreadsheet tracking which domains had outreach and what the result was'],
  '/modules/module-3.html', '/modules/module-5.html', 'Module 3', 'Module 5: Timing Strategy');

const mod5 = module(5, 'Timing & Launch Strategy',
  'Domain auction timing is one of the most overlooked variables in domain flipping. The same domain listed at the right time versus the wrong time can produce completely different results — not because of the domain, but because of where buyers\' attention is.',
  [
    {h:'The 12-Month Auction Calendar', p:'Jan-Feb: Health, fitness, finance, business domains — highest buyer activity. Mar-Apr: Real estate, home, spring/summer consumer. May-Jun: Travel, outdoor, lifestyle. Jul-Aug: Slow period — avoid premium listings. Sep-Oct: Business, tech, education. Nov: Avoid (pre-holiday distraction). Dec: Avoid entirely.'},
    {h:'Day of Week', p:'Tuesday, Wednesday, and Thursday are the highest-activity auction days. List so your auction CLOSES on one of these days. Auctions that close on weekends consistently underperform.'},
    {h:'Time of Day', p:'Set auction end times between 2-5pm EST. This catches both US morning (West Coast) and EU buyers still online. Avoid auctions ending before 10am or after 8pm EST.'},
    {h:'Auction Duration', p:'7-day auctions outperform 3-day and 14-day on most platforms. 3-day is too short for serious buyers to plan. 14-day causes urgency fatigue. 7 days is the sweet spot.'},
    {h:'The 7-Day Pre-Auction Checklist', p:'Day 7: Finalize listing copy, set pricing, choose platform. Day 6: Submit listing for platform review. Day 5: Send outreach to identified end-users. Day 4: Follow up on outreach non-responses. Day 3: Post organic content about domain if applicable. Day 2: Final outreach follow-up. Day 1: Confirm listing is live, share in relevant communities.'}
  ],
  ['Never let a premium domain auction close on a Saturday or Sunday','The July-August slowdown is real — use that time for research and outreach, not listing','Your first few auctions should all be 7-day durations until you have platform-specific data','The 7-Day Checklist is in your bonuses section — print it and use it for every listing'],
  '/modules/module-4.html', null, 'Module 4', null);

// ── PRICING CALCULATOR ──
const calculator = page('Domain Pricing Calculator', `
${NAV('tools')}
<div class="section">
  <div class="container" style="max-width:680px;">
    <div class="eyebrow">Interactive Tool</div>
    <h1>Domain Pricing Calculator</h1>
    <p>Enter your domain metrics below. The calculator applies the Reserve Price Formula from Module 2 using real market multipliers.</p>
    <div class="card" style="margin-top:28px;">
      <div style="display:grid;gap:18px;">
        <div><label style="display:block;font-size:.8rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Extension</label>
        <select id="ext" onchange="calc()" style="width:100%;background:#070c18;border:1px solid rgba(255,255,255,.1);color:#fff;padding:10px 14px;border-radius:9px;font-family:'Inter',sans-serif;font-size:.9rem;">
          <option value="1.0">.com (1.0x)</option><option value="0.3">.net (0.3x)</option><option value="0.25">.org (0.25x)</option><option value="0.15">.co (0.15x)</option><option value="0.1">Other (0.1x)</option>
        </select></div>
        <div><label style="display:block;font-size:.8rem;font-