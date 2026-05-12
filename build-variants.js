const fs = require('fs');

const STRIPE_LINK = "https://buy.stripe.com/8x27sKeOI8O8baC9pz1oI0H";
const VSL = `/vsl-final.mp4`;

// ═══════════════════════════════════════════════════════
// VERSION 2 — AGGRESSIVE / DIRECT RESPONSE
// Orange/black, newspaper-style, no fluff, high urgency
// ═══════════════════════════════════════════════════════
const v2 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Flip And Close — Stop Losing Money On Domain Auctions</title>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Source Sans 3',sans-serif;background:#111;color:#f0f0f0;line-height:1.6;}
a{color:inherit;text-decoration:none;}

/* ALERT BAR */
.alert{background:#e85d04;padding:12px 24px;text-align:center;font-family:'Oswald',sans-serif;font-size:1rem;font-weight:600;letter-spacing:.05em;color:#fff;}
.alert em{color:#fff200;font-style:normal;}

/* NAV */
nav{background:#000;border-bottom:3px solid #e85d04;padding:0 32px;height:60px;display:flex;align-items:center;justify-content:space-between;}
.logo{font-family:'Oswald',sans-serif;font-size:1.4rem;font-weight:700;letter-spacing:.08em;color:#fff;}
.logo em{color:#e85d04;font-style:normal;}
.nav-btn{background:#e85d04;color:#fff;font-family:'Oswald',sans-serif;font-size:.9rem;font-weight:600;padding:9px 22px;border-radius:4px;letter-spacing:.05em;}

/* HERO */
.hero{background:#000;border-bottom:4px solid #e85d04;padding:60px 24px 50px;text-align:center;}
.kicker{display:inline-block;background:#e85d04;color:#fff;font-family:'Oswald',sans-serif;font-size:.8rem;font-weight:600;letter-spacing:.12em;padding:5px 14px;margin-bottom:20px;}
.hero h1{font-family:'Oswald',sans-serif;font-size:clamp(2.2rem,5.5vw,4.2rem);font-weight:700;line-height:1.05;max-width:860px;margin:0 auto 18px;text-transform:uppercase;letter-spacing:.02em;color:#fff;}
.hero h1 span{color:#e85d04;}
.hero-sub{font-size:1.15rem;color:#aaa;max-width:640px;margin:0 auto 36px;line-height:1.7;}
.hero-sub strong{color:#fff;}
.video-wrap{max-width:740px;margin:0 auto 40px;background:#000;border:2px solid #e85d04;border-radius:6px;overflow:hidden;}
.video-wrap video{width:100%;display:block;}
.hero-cta-wrap{display:flex;flex-direction:column;align-items:center;gap:10px;}
.btn-main{display:inline-block;background:#e85d04;color:#fff;font-family:'Oswald',sans-serif;font-size:1.3rem;font-weight:700;padding:18px 48px;border-radius:4px;letter-spacing:.08em;text-transform:uppercase;}
.btn-main:hover{background:#c2410c;}
.secure-note{color:#666;font-size:.82rem;display:flex;align-items:center;gap:6px;}

/* PROBLEM SECTION */
.problem{background:#0a0a0a;border-top:1px solid #222;border-bottom:1px solid #222;padding:60px 24px;}
.section-inner{max-width:860px;margin:0 auto;}
.section-label{font-family:'Oswald',sans-serif;font-size:.78rem;font-weight:600;letter-spacing:.15em;color:#e85d04;text-transform:uppercase;margin-bottom:8px;}
h2{font-family:'Oswald',sans-serif;font-size:clamp(1.7rem,3.5vw,2.8rem);font-weight:700;line-height:1.1;text-transform:uppercase;margin-bottom:20px;color:#fff;}
h2 span{color:#e85d04;}
p{color:#aaa;line-height:1.75;margin-bottom:14px;font-size:1rem;}
p strong{color:#f0f0f0;}
.mistake-list{display:grid;gap:2px;margin:24px 0;}
.mistake{background:#0f0f0f;border-left:4px solid #e85d04;padding:14px 20px;display:flex;gap:14px;align-items:flex-start;}
.mistake-icon{color:#e85d04;font-size:1.2rem;flex-shrink:0;margin-top:2px;}
.mistake-text{font-size:.95rem;color:#ccc;line-height:1.6;}
.mistake-text strong{color:#fff;}

/* PROOF */
.proof{background:#000;padding:60px 24px;border-bottom:3px solid #e85d04;}
.proof-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;background:#222;border:1px solid #222;border-radius:4px;overflow:hidden;margin:32px 0;}
.proof-item{background:#0a0a0a;padding:28px 24px;text-align:center;}
.proof-num{font-family:'Oswald',sans-serif;font-size:2.8rem;font-weight:700;color:#e85d04;line-height:1;}
.proof-label{font-size:.85rem;color:#666;margin-top:6px;text-transform:uppercase;letter-spacing:.06em;}

/* MODULES */
.modules{background:#0a0a0a;padding:60px 24px;}
.module{display:flex;gap:20px;align-items:flex-start;padding:24px;background:#111;border:1px solid #1a1a1a;border-left:4px solid #e85d04;border-radius:0 6px 6px 0;margin-bottom:12px;}
.mod-num{font-family:'Oswald',sans-serif;font-size:2rem;font-weight:700;color:#e85d04;flex-shrink:0;line-height:1;width:50px;}
.mod-content h3{font-family:'Oswald',sans-serif;font-size:1.25rem;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;}
.mod-content p{color:#888;font-size:.92rem;margin:0;}

/* OFFER BOX */
.offer{background:#000;border:3px solid #e85d04;border-radius:6px;padding:48px 36px;text-align:center;max-width:600px;margin:0 auto;}
.offer-label{font-family:'Oswald',sans-serif;font-size:.8rem;font-weight:600;letter-spacing:.15em;color:#e85d04;text-transform:uppercase;margin-bottom:10px;}
.offer-price{font-family:'Oswald',sans-serif;font-size:5rem;font-weight:700;color:#e85d04;line-height:1;}
.offer-was{font-size:.95rem;color:#555;text-decoration:line-through;margin-bottom:4px;}
.offer-desc{color:#888;font-size:.92rem;margin:16px 0 28px;}
.guarantee{background:#0a0a0a;border:1px solid #1a1a1a;padding:16px 20px;border-radius:4px;font-size:.85rem;color:#666;margin-top:20px;}
.guarantee strong{color:#e85d04;}

/* FINAL CTA */
.final-cta{background:#e85d04;padding:70px 24px;text-align:center;}
.final-cta h2{color:#fff;font-family:'Oswald',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);margin-bottom:14px;}
.final-cta p{color:rgba(255,255,255,.8);max-width:560px;margin:0 auto 32px;font-size:1.05rem;}
.btn-white{display:inline-block;background:#fff;color:#e85d04;font-family:'Oswald',sans-serif;font-size:1.3rem;font-weight:700;padding:18px 48px;border-radius:4px;letter-spacing:.08em;text-transform:uppercase;}
.btn-white:hover{background:#f9f9f9;}

footer{background:#000;border-top:1px solid #1a1a1a;padding:24px;text-align:center;font-size:.78rem;color:#444;}
footer a{color:#e85d04;}
</style>
</head>
<body>

<div class="alert">⚠️ FOUNDER PRICING ENDS SOON — <em>$47 TODAY / $97 AFTER LAUNCH</em> — DON'T MISS IT</div>

<nav>
<div class="logo">FLIP <em>AND</em> CLOSE</div>
<a href="${STRIPE_LINK}" class="nav-btn">GET ACCESS — $47</a>
</nav>

<section class="hero">
<div class="kicker">Domain Auction Blueprint</div>
<h1>Stop Listing Domains<br>And <span>Hoping For The Best.</span></h1>
<p class="hero-sub">The 5-step system that gets your domains <strong>in front of the right buyers, priced correctly, and sold at auction</strong> — without guessing.</p>
<div class="video-wrap">
  <video controls preload="metadata" style="width:100%;display:block;">
    <source src="${VSL}" type="video/mp4">
  </video>
</div>
<div class="hero-cta-wrap">
  <a href="${STRIPE_LINK}" class="btn-main">YES — I WANT INSTANT ACCESS FOR $47 →</a>
  <span class="secure-note">🔒 Secure checkout &nbsp;·&nbsp; Instant access &nbsp;·&nbsp; 30-day guarantee</span>
</div>
</section>

<section class="problem">
<div class="section-inner">
<div class="section-label">The Real Problem</div>
<h2>You're Not Losing Money<br>On The <span>Buy Side.</span></h2>
<p>You find solid domains. You register them at the right price. You've done your research. So why are your auctions underperforming?</p>
<p>Because <strong>the selling side of domain flipping is where 90% of the money is left on the table.</strong> And almost nobody teaches it.</p>
<div class="mistake-list">
${[
  ["Wrong platform","You listed on GoDaddy when your domain was a Sedo buyer. Different platforms have completely different buyer pools."],
  ["Wrong reserve price","You set it too high and killed bidder interest. Or too low and left $400 on the table."],
  ["Weak listing copy","Your description described the domain instead of selling the vision. Buyers skipped it."],
  ["No outbound demand","You waited for buyers to find you instead of finding them first."],
  ["Wrong timing","You launched mid-quarter. The right buyer pool was dormant."]
].map(([t,d])=>`<div class="mistake"><div class="mistake-icon">✕</div><div class="mistake-text"><strong>${t}:</strong> ${d}</div></div>`).join('')}
</div>
<p>Fix all five. Watch your results change.</p>
</div>
</section>

<section class="proof">
<div class="section-inner">
<div class="section-label">Why It Works</div>
<h2>The Numbers Don't Lie</h2>
<div class="proof-grid">
<div class="proof-item"><div class="proof-num">5</div><div class="proof-label">Modules</div></div>
<div class="proof-item"><div class="proof-num">30</div><div class="proof-label">Copy Templates</div></div>
<div class="proof-item"><div class="proof-num">12</div><div class="proof-label">Month Calendar</div></div>
<div class="proof-item"><div class="proof-num">10×</div><div class="proof-label">Avg Return Potential</div></div>
</div>
<p style="text-align:center;color:#555;font-size:.88rem;">One domain sold right vs wrong = the difference between $50 and $500. This blueprint closes that gap.</p>
</div>
</section>

<section class="modules">
<div class="section-inner">
<div class="section-label">What You Get</div>
<h2>5 Modules. Zero Fluff.<br><span>Pure System.</span></h2>
${[
  ["01","Platform Selection Mastery","Match every domain type to the platform with the right buyer pool. Stop sending traffic to the wrong room."],
  ["02","The Reserve Price Formula","Data-backed pricing based on domain type, keyword volume, and comparable sales. Set it right every time."],
  ["03","Auction Listing Copywriting","The 7-element framework for descriptions that sell the business vision — not just the domain name. Includes 30 templates."],
  ["04","The Outbound Buyer Finder","Identify 5-10 end-user prospects before your auction opens. Pre-seed demand. Create competition."],
  ["05","Timing & Launch Strategy","The 12-month calendar that maps buyer activity by domain type. Stop listing at the wrong time."]
].map(([n,t,d])=>`<div class="module"><div class="mod-num">${n}</div><div class="mod-content"><h3>${t}</h3><p>${d}</p></div></div>`).join('')}
</div>
</section>

<section style="padding:60px 24px;background:#000;">
<div class="section-inner" style="text-align:center;">
<div class="section-label" style="margin-bottom:24px;">Your Investment</div>
<div class="offer">
<div class="offer-label">Founder Pricing — Limited Time</div>
<div class="offer-was">Regular price: $97</div>
<div class="offer-price">$47</div>
<div class="offer-desc">One-time payment. Instant access. Yours forever.</div>
<a href="${STRIPE_LINK}" class="btn-main" style="display:block;">GET INSTANT ACCESS NOW →</a>
<div class="guarantee"><strong>30-Day Money-Back Guarantee.</strong> Go through the entire blueprint. If it's not worth every dollar, email us for a full refund — same day, no questions.</div>
</div>
</div>
</section>

<section class="final-cta">
<h2>YOU'VE DONE THE HARD PART.<br>NOW CLOSE THE DEAL.</h2>
<p>You've got the inventory. You know how to find domains. You just need the system to sell them right.</p>
<a href="${STRIPE_LINK}" class="btn-white">GET FLIP AND CLOSE FOR $47 →</a>
</section>

<footer>
<p>Flip And Close &copy; 2026 &nbsp;·&nbsp; <a href="mailto:support@nicelysupport.com">support@nicelysupport.com</a> &nbsp;·&nbsp; <a href="#">Privacy</a></p>
</footer>
</body>
</html>`;

// ═══════════════════════════════════════════════════════
// VERSION 3 — MINIMAL / EDITORIAL / HIGH-END
// Clean white, big typography, luxury feel, no clutter
// ═══════════════════════════════════════════════════════
const v3 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Flip And Close — The Domain Auction Blueprint</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'DM Sans',sans-serif;background:#fafaf8;color:#1a1a1a;line-height:1.6;}
a{color:inherit;text-decoration:none;}

/* NAV */
nav{background:#fafaf8;border-bottom:1px solid #e8e8e4;padding:0 48px;height:68px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;}
.logo{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;color:#1a1a1a;letter-spacing:.02em;}
.logo em{color:#b45309;font-style:normal;}
.nav-pill{background:#1a1a1a;color:#fafaf8;font-size:.82rem;font-weight:700;padding:10px 24px;border-radius:999px;letter-spacing:.03em;}
.nav-pill:hover{background:#333;}

/* INTRO BAND */
.intro-band{background:#1a1a1a;padding:12px 48px;display:flex;align-items:center;justify-content:center;gap:8px;}
.intro-band p{color:#888;font-size:.82rem;letter-spacing:.05em;text-transform:uppercase;}
.intro-band span{color:#f59e0b;font-weight:700;}

/* HERO */
.hero{padding:100px 48px 80px;max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
@media(max-width:820px){.hero{grid-template-columns:1fr;gap:40px;}.hero-right{order:-1;}}
.hero-left{}
.edition{display:inline-block;border:1px solid #d4b896;color:#92400e;font-size:.72rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border-radius:2px;margin-bottom:28px;}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,4.5vw,3.8rem);font-weight:900;line-height:1.06;margin-bottom:24px;color:#1a1a1a;}
.hero h1 em{color:#b45309;font-style:italic;}
.hero-desc{color:#666;font-size:1.05rem;line-height:1.8;margin-bottom:36px;max-width:480px;}
.hero-desc strong{color:#1a1a1a;}
.cta-stack{display:flex;flex-direction:column;gap:12px;}
.btn-primary{display:inline-block;background:#1a1a1a;color:#fafaf8;font-size:1rem;font-weight:700;padding:16px 36px;border-radius:4px;letter-spacing:.04em;width:fit-content;}
.btn-primary:hover{background:#333;}
.price-note{font-size:.85rem;color:#999;}
.price-note strong{color:#b45309;}
.hero-right{position:relative;}
.video-frame{border:1px solid #e0ddd8;border-radius:8px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.08);}
.video-frame video{width:100%;display:block;}
.video-caption{text-align:center;font-size:.78rem;color:#aaa;margin-top:10px;letter-spacing:.04em;text-transform:uppercase;}

/* DIVIDER */
.divider{max-width:1100px;margin:0 auto;height:1px;background:linear-gradient(90deg,transparent,#e0ddd8,transparent);}

/* TRUTH SECTION */
.truth{padding:80px 48px;max-width:1100px;margin:0 auto;}
.overline{font-size:.72rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#b45309;margin-bottom:16px;}
.truth h2{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:700;max-width:680px;line-height:1.2;margin-bottom:28px;color:#1a1a1a;}
.truth p{color:#666;max-width:640px;line-height:1.85;margin-bottom:16px;font-size:1rem;}
.truth p strong{color:#1a1a1a;}
.callout{border-left:3px solid #b45309;padding:20px 28px;background:#fff;margin:32px 0;max-width:620px;}
.callout p{color:#1a1a1a;font-size:1.05rem;font-style:italic;line-height:1.7;margin:0;}

/* MODULES */
.modules-section{background:#fff;border-top:1px solid #e8e8e4;border-bottom:1px solid #e8e8e4;padding:80px 48px;}
.modules-inner{max-width:1100px;margin:0 auto;}
.modules-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:#e8e8e4;border:1px solid #e8e8e4;margin-top:40px;}
@media(max-width:700px){.modules-grid{grid-template-columns:1fr;}}
.module-cell{background:#fafaf8;padding:36px 32px;}
.module-cell:hover{background:#fff;}
.mod-tag{font-size:.68rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#b45309;margin-bottom:10px;}
.module-cell h3{font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:700;color:#1a1a1a;margin-bottom:10px;line-height:1.3;}
.module-cell p{color:#888;font-size:.92rem;line-height:1.7;}

/* TOOLS */
.tools{padding:80px 48px;max-width:1100px;margin:0 auto;}
.tools-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:32px;}
.tool-item{border:1px solid #e0ddd8;border-radius:4px;padding:24px;background:#fff;}
.tool-icon{font-size:1.4rem;margin-bottom:10px;}
.tool-item h4{font-size:.95rem;font-weight:700;color:#1a1a1a;margin-bottom:4px;}
.tool-item p{font-size:.85rem;color:#999;margin:0;}

/* OFFER */
.offer-section{background:#1a1a1a;padding:80px 48px;}
.offer-inner{max-width:800px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
@media(max-width:720px){.offer-inner{grid-template-columns:1fr;gap:40px;}}
.offer-left .overline{color:#f59e0b;}
.offer-left h2{font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);font-weight:900;color:#fafaf8;line-height:1.1;margin-bottom:16px;}
.offer-left p{color:#888;line-height:1.75;font-size:.95rem;}
.offer-right{text-align:center;}
.price-display{font-family:'Playfair Display',serif;font-size:5.5rem;font-weight:900;color:#f59e0b;line-height:1;}
.price-sub{color:#666;font-size:.85rem;margin:8px 0 28px;text-transform:uppercase;letter-spacing:.06em;}
.btn-gold{display:block;background:#f59e0b;color:#1a1a1a;font-size:1rem;font-weight:700;padding:16px;border-radius:4px;letter-spacing:.04em;text-align:center;margin-bottom:12px;}
.btn-gold:hover{background:#d97706;}
.guarantee{color:#555;font-size:.8rem;line-height:1.6;text-align:center;}
.guarantee strong{color:#888;}

/* CLOSING */
.closing{padding:100px 48px;max-width:860px;margin:0 auto;text-align:center;}
.closing h2{font-family:'Playfair Display',serif;font-size:clamp(2.2rem,4.5vw,3.4rem);font-weight:900;line-height:1.1;margin-bottom:20px;color:#1a1a1a;}
.closing h2 em{color:#b45309;font-style:italic;}
.closing p{color:#888;font-size:1.05rem;line-height:1.8;max-width:580px;margin:0 auto 36px;}
.btn-closing{display:inline-block;background:#1a1a1a;color:#fafaf8;font-size:1rem;font-weight:700;padding:18px 48px;border-radius:4px;letter-spacing:.04em;}
.btn-closing:hover{background:#333;}

footer{background:#fafaf8;border-top:1px solid #e8e8e4;padding:24px 48px;display:flex;justify-content:space-between;align-items:center;font-size:.78rem;color:#bbb;}
footer a{color:#999;}
</style>
</head>
<body>

<nav>
<div class="logo">Flip <em>&</em> Close</div>
<a href="${STRIPE_LINK}" class="nav-pill">Get Access — $47</a>
</nav>

<div class="intro-band">
<p>Founder Pricing &nbsp;·&nbsp; <span>$47 today / $97 after launch</span> &nbsp;·&nbsp; Instant Access</p>
</div>

<div class="hero">
<div class="hero-left">
  <div class="edition">Domain Auction Blueprint</div>
  <h1>Your Domains Are Worth More.<br><em>You're Selling Them Wrong.</em></h1>
  <p class="hero-desc">A complete system for listing, pricing, and selling domains at auction for <strong>what they're actually worth</strong> — not what hope gives you.</p>
  <div class="cta-stack">
    <a href="${STRIPE_LINK}" class="btn-primary">Get Instant Access →</a>
    <span class="price-note">One-time <strong>$47</strong> &nbsp;·&nbsp; 30-day guarantee &nbsp;·&nbsp; Instant delivery</span>
  </div>
</div>
<div class="hero-right">
  <div class="video-frame">
    <video controls preload="metadata">
      <source src="${VSL}" type="video/mp4">
    </video>
  </div>
  <p class="video-caption">Watch the full overview</p>
</div>
</div>

<div class="divider"></div>

<section class="truth">
<div class="overline">The Real Problem</div>
<h2>Most domain flippers don't have a buying problem. They have a selling problem.</h2>
<p>You've found solid domains. You've registered them at the right price. The research was there. So why do so many auctions end in disappointment?</p>
<p>Because the five variables that control auction outcomes — platform, pricing, copy, outbound demand, and timing — are rarely taught together as a system. You're left to figure them out one painful loss at a time.</p>
<div class="callout">
  <p>"The same domain listed at the wrong price on the wrong platform with weak copy is worth $50. The same domain, handled correctly, is worth $500. The gap is the system."</p>
</div>
<p>Flip and Close closes that gap. <strong>Five modules. Each one targeting a different lever in the auction process.</strong></p>
</section>

<div class="divider"></div>

<section class="modules-section">
<div class="modules-inner">
<div class="overline">The Blueprint</div>
<h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;color:#1a1a1a;margin-bottom:4px;">Five modules. Each one a<br><em style="color:#b45309;font-style:italic;">different lever.</em></h2>
<div class="modules-grid">
${[
  ["Module 01","Platform Selection Mastery","Match every domain type to the platform with the right buyer pool. GoDaddy, NameJet, Sedo, Dan — they're not interchangeable."],
  ["Module 02","The Reserve Price Formula","Data-backed pricing methodology based on domain type, keyword volume, and comparable sales. Stop guessing."],
  ["Module 03","Auction Listing Copywriting","The 7-element framework that sells the business vision, not just the domain name. Includes 30 done-for-you templates."],
  ["Module 04","The Outbound Buyer Finder","Identify and contact 5-10 end-user prospects before your auction opens. Pre-seed demand. Create genuine competition."],
  ["Module 05","Timing & Launch Strategy","The 12-month auction calendar. Different buyer pools are active at different times. Stop launching into silence."]
].map(([t,h,d])=>`<div class="module-cell"><div class="mod-tag">${t}</div><h3>${h}</h3><p>${d}</p></div>`).join('')}
<div class="module-cell" style="background:#fff8ed;border-left:3px solid #f59e0b;">
  <div class="mod-tag" style="color:#92400e;">Bonus Tools</div>
  <h3>Four Bonus Resources</h3>
  <p>Domain Pricing Calculator · 30 Listing Templates · Platform