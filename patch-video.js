const fs = require('fs');
let html = fs.readFileSync('./public/index.html', 'utf8');

// Replace the hero-video placeholder div with an actual HTML5 video player
html = html.replace(
  /<div class="hero-video">[\s\S]*?<\/div>\s*<\/div>/,
  '<div style="background:#000;border-radius:16px;overflow:hidden;max-width:720px;margin:0 auto 40px;"><video controls style="width:100%;display:block;" preload="metadata"><source src="/vsl-final.mp4" type="video/mp4">Your browser does not support video.</video></div>'
);

fs.writeFileSync('./public/index.html', html);
const idx = html.indexOf('vsl-final.mp4');
console.log('Video tag present:', idx > -1);
console.log('Context:', html.substring(Math.max(0, idx - 60), idx + 80));
