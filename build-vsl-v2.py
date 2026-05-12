"""
Flip And Close — VSL Video Builder v2
DARK, BOLD, CINEMATIC
16:9 slides, dark navy bg, cyan/gold accents, massive text
"""

import os, textwrap, subprocess
from PIL import Image, ImageDraw, ImageFont

W, H = 1920, 1080
BG_DARK   = (8, 12, 28)       # deep navy
BG_ALT    = (12, 18, 38)      # slightly lighter navy
BG_ACCENT = (10, 25, 60)      # blue-tinted section

WHITE     = (255, 255, 255)
GRAY      = (148, 163, 184)
CYAN      = (0, 217, 255)
GOLD      = (245, 158, 11)
RED       = (239, 68, 68)
BLUE      = (59, 130, 246)
GREEN     = (16, 185, 129)

FONT_BOLD  = "C:/Windows/Fonts/arialbd.ttf"
FONT_REG   = "C:/Windows/Fonts/arial.ttf"

OUT_DIR = "vsl-frames-v2"
os.makedirs(OUT_DIR, exist_ok=True)

def font(size, bold=True):
    try:
        return ImageFont.truetype(FONT_BOLD if bold else FONT_REG, size)
    except:
        return ImageFont.load_default()

def centered_text(draw, text, y, size, color, bold=True, max_width=1700):
    f = font(size, bold)
    # wrap
    avg_char = size * 0.55
    chars_per_line = max(10, int(max_width / avg_char))
    lines = textwrap.wrap(text, width=chars_per_line)
    for line in lines:
        bb = draw.textbbox((0,0), line, font=f)
        tw = bb[2] - bb[0]
        x = (W - tw) // 2
        draw.text((x, y), line, font=f, fill=color)
        y += size + int(size * 0.2)
    return y

def draw_gradient_bar(draw, y, h, color, alpha_start=180, alpha_end=0):
    for i in range(h):
        alpha = int(alpha_start - (alpha_start - alpha_end) * i / h)
        r = int(color[0] * alpha / 255)
        g = int(color[1] * alpha / 255)
        b = int(color[2] * alpha / 255)
        draw.rectangle([(0, y+i), (W, y+i+1)], fill=(r, g, b))

def make_slide(filename, bg=BG_DARK, elements=None, top_bar_color=CYAN, bottom_bar_color=GOLD):
    img = Image.new("RGB", (W, H), bg)
    draw = ImageDraw.Draw(img)

    # subtle grid lines for texture
    for x in range(0, W, 80):
        draw.line([(x, 0), (x, H)], fill=(255,255,255,8), width=1)
    for y in range(0, H, 80):
        draw.line([(0, y), (W, y)], fill=(255,255,255,8), width=1)

    # top glow bar
    for i in range(6):
        alpha = 255 - i * 35
        c = tuple(int(ch * alpha / 255) for ch in top_bar_color)
        draw.rectangle([(0, i), (W, i+1)], fill=c)

    # bottom glow bar
    for i in range(6):
        alpha = 255 - i * 35
        c = tuple(int(ch * alpha / 255) for ch in bottom_bar_color)
        draw.rectangle([(0, H-6+i), (W, H-5+i)], fill=c)

    # logo bottom-left
    lf = font(30)
    draw.text((60, H-70), "FLIP", font=lf, fill=CYAN)
    draw.text((60+draw.textbbox((0,0),"FLIP",font=lf)[2]+6, H-70), "AND CLOSE", font=lf, fill=GOLD)

    if elements:
        for el in elements:
            el_type = el.get("type", "text")
            if el_type == "text":
                centered_text(draw, el["text"], el["y"], el.get("size", 80),
                              el.get("color", WHITE), el.get("bold", True))
            elif el_type == "tag":
                # colored pill label
                tf = font(34)
                t = el["text"].upper()
                bb = draw.textbbox((0,0), t, font=tf)
                tw, th = bb[2]-bb[0], bb[3]-bb[1]
                pad = 20
                rx = (W - tw - pad*2) // 2
                ry = el["y"]
                c = el.get("color", CYAN)
                draw.rounded_rectangle([(rx, ry), (rx+tw+pad*2, ry+th+pad)], radius=8,
                                       fill=tuple(int(ch*0.15) for ch in c), outline=c, width=2)
                draw.text((rx+pad, ry+pad//2), t, font=tf, fill=c)
            elif el_type == "divider":
                y = el["y"]
                c = el.get("color", CYAN)
                cx = W // 2
                w2 = el.get("width", 200)
                draw.rectangle([(cx-w2, y), (cx+w2, y+3)], fill=c)
            elif el_type == "big_number":
                nf = font(200, bold=True)
                t = el["text"]
                bb = draw.textbbox((0,0), t, font=nf)
                tw = bb[2]-bb[0]
                x = (W-tw)//2
                # glow effect
                for offset in [6,4,2]:
                    gc = tuple(int(ch*0.3) for ch in el.get("color", GOLD))
                    draw.text((x+offset, el["y"]+offset), t, font=nf, fill=gc)
                draw.text((x, el["y"]), t, font=nf, fill=el.get("color", GOLD))

    img.save(filename)
    return filename

# ── SLIDES ──
# (elements, bg, top_bar, bottom_bar, duration)
SLIDES = [

    # 1 — HOOK (7s)
    ([{"type":"text","text":"YOUR DOMAINS","y":180,"size":110,"color":WHITE},
      {"type":"text","text":"ARE WORTH MORE.","y":320,"size":110,"color":CYAN},
      {"type":"divider","y":470,"color":GOLD,"width":300},
      {"type":"text","text":"YOU'RE JUST SELLING THEM WRONG.","y":510,"size":72,"color":GRAY}],
     BG_DARK, CYAN, GOLD, 7),

    # 2 — TRUTH SETUP (5s)
    ([{"type":"tag","text":"The Truth","y":280,"color":RED},
      {"type":"text","text":"MOST DOMAIN FLIPPERS","y":380,"size":96,"color":WHITE},
      {"type":"text","text":"WON'T SAY THIS OUT LOUD.","y":510,"size":96,"color":RED}],
     BG_DARK, RED, RED, 5),

    # 3 — TRUTH (6s)
    ([{"type":"text","text":"IT'S NOT YOUR DOMAINS.","y":260,"size":100,"color":WHITE},
      {"type":"divider","y":400,"color":CYAN,"width":250},
      {"type":"text","text":"IT'S HOW YOU'RE SELLING THEM.","y":440,"size":90,"color":CYAN}],
     BG_ALT, CYAN, CYAN, 6),

    # 4 — QUESTION 1 (6s)
    ([{"type":"text","text":"WHEN YOU LIST A DOMAIN —","y":220,"size":84,"color":GRAY},
      {"type":"text","text":"DO YOU KNOW EXACTLY","y":340,"size":96,"color":WHITE},
      {"type":"text","text":"WHAT RESERVE PRICE TO SET?","y":470,"size":96,"color":GOLD}],
     BG_DARK, GOLD, GOLD, 6),

    # 5 — QUESTION 2 (6s)
    ([{"type":"text","text":"DO YOU KNOW WHICH PLATFORM","y":240,"size":84,"color":GRAY},
      {"type":"text","text":"HAS THE RIGHT BUYERS","y":360,"size":96,"color":WHITE},
      {"type":"text","text":"FOR YOUR SPECIFIC DOMAIN?","y":490,"size":96,"color":CYAN}],
     BG_DARK, CYAN, CYAN, 6),

    # 6 — HOPING (5s)
    ([{"type":"text","text":"OR ARE YOU JUST","y":280,"size":96,"color":WHITE},
      {"type":"text","text":"LISTING IT AND HOPING?","y":410,"size":96,"color":RED}],
     BG_DARK, RED, RED, 5),

    # 7 — WHERE MONEY IS LOST (7s)
    ([{"type":"tag","text":"The Real Problem","y":200,"color":GOLD},
      {"type":"text","text":"MOST FLIPPERS DON'T LOSE MONEY","y":300,"size":78,"color":GRAY},
      {"type":"text","text":"IN THE BUYING PHASE.","y":410,"size":78,"color":GRAY},
      {"type":"divider","y":520,"color":RED,"width":200},
      {"type":"text","text":"THEY LOSE IT SELLING.","y":560,"size":92,"color":RED}],
     BG_ALT, RED, RED, 7),

    # 8 — THE STORY (8s)
    ([{"type":"text","text":"YOU FIND A SOLID DOMAIN.","y":200,"size":82,"color":WHITE},
      {"type":"text","text":"YOU REGISTER IT FOR $12.","y":320,"size":82,"color":WHITE},
      {"type":"text","text":"YOU LIST IT AND WAIT.","y":440,"size":82,"color":WHITE},
      {"type":"text","text":"...NOTHING.","y":570,"size":96,"color":RED}],
     BG_DARK, RED, GOLD, 8),

    # 9 — THE PAIN (7s)
    ([{"type":"text","text":"AUCTION ENDS.","y":240,"size":96,"color":WHITE},
      {"type":"text","text":"ZERO BIDS. OR IT SELLS FOR $50.","y":380,"size":82,"color":RED},
      {"type":"text","text":"WHEN IT WAS WORTH $500.","y":500,"size":82,"color":GOLD}],
     BG_ALT, RED, GOLD, 7),

    # 10 — REFRAME (5s)
    ([{"type":"text","text":"THE DOMAIN WAS FINE.","y":300,"size":96,"color":CYAN},
      {"type":"text","text":"THE SYSTEM FAILED IT.","y":430,"size":96,"color":WHITE}],
     BG_DARK, CYAN, CYAN, 5),

    # 11 — 5 VARIABLES (5s)
    ([{"type":"tag","text":"5 Variables Control Every Auction","y":200,"color":CYAN},
      {"type":"text","text":"PLATFORM SELECTION.","y":310,"size":76,"color":WHITE},
      {"type":"text","text":"RESERVE PRICING.","y":415,"size":76,"color":WHITE},
      {"type":"text","text":"LISTING COPY.  OUTBOUND DEMAND.  TIMING.","y":520,"size":64,"color":GOLD}],
     BG_ALT, CYAN, GOLD, 5),

    # 12 — MOST FLIPPERS (5s)
    ([{"type":"text","text":"MOST FLIPPERS GET","y":300,"size":96,"color":WHITE},
      {"type":"text","text":"ALL FIVE WRONG.","y":430,"size":110,"color":RED}],
     BG_DARK, RED, RED, 5),

    # 13 — INTRODUCE PRODUCT (6s)
    ([{"type":"text","text":"THAT'S WHY I BUILT","y":240,"size":80,"color":GRAY},
      {"type":"divider","y":360,"color":CYAN,"width":120},
      {"type":"text","text":"FLIP AND CLOSE","y":390,"size":130,"color":CYAN}],
     BG_ALT, CYAN, GOLD, 6),

    # 14 — WHAT IT IS (8s)
    ([{"type":"text","text":"A STEP-BY-STEP BLUEPRINT FOR","y":220,"size":76,"color":GRAY},
      {"type":"text","text":"LISTING, PRICING & SELLING","y":330,"size":90,"color":WHITE},
      {"type":"text","text":"DOMAINS AT AUCTION","y":450,"size":90,"color":WHITE},
      {"type":"text","text":"FOR WHAT THEY'RE ACTUALLY WORTH.","y":570,"size":72,"color":CYAN}],
     BG_DARK, CYAN, CYAN, 8),

    # 15 — MODULE 1 (6s)
    ([{"type":"tag","text":"Module 1","y":180,"color":BLUE},
      {"type":"text","text":"PLATFORM SELECTION MASTERY","y":290,"size":88,"color":WHITE},
      {"type":"divider","y":420,"color":BLUE,"width":180},
      {"type":"text","text":"THE RIGHT PLATFORM FOR EVERY DOMAIN TYPE.","y":460,"size":64,"color":GRAY}],
     BG_ALT, BLUE, BLUE, 6),

    # 16 — MODULE 1 DETAIL (6s)
    ([{"type":"text","text":"GODADDY. NAMEJET. SEDO. DAN.","y":260,"size":82,"color":WHITE},
      {"type":"text","text":"EACH HAS A COMPLETELY DIFFERENT","y":380,"size":76,"color":GRAY},
      {"type":"text","text":"BUYER POOL.","y":490,"size":100,"color":CYAN}],
     BG_DARK, CYAN, BLUE, 6),

    # 17 — MODULE 2 (6s)
    ([{"type":"tag","text":"Module 2","y":180,"color":GOLD},
      {"type":"text","text":"THE RESERVE PRICE FORMULA","y":290,"size":88,"color":WHITE},
      {"type":"divider","y":420,"color":GOLD,"width":180},
      {"type":"text","text":"DATA-BACKED PRICING. NO MORE GUESSING.","y":460,"size":64,"color":GRAY}],
     BG_ALT, GOLD, GOLD, 6),

    # 18 — MODULE 3 (6s)
    ([{"type":"tag","text":"Module 3","y":180,"color":GREEN},
      {"type":"text","text":"AUCTION LISTING COPYWRITING","y":290,"size":82,"color":WHITE},
      {"type":"divider","y":410,"color":GREEN,"width":180},
      {"type":"text","text":"7-ELEMENT FORMULA + 30 DONE-FOR-YOU TEMPLATES.","y":450,"size":58,"color":GRAY}],
     BG_DARK, GREEN, GREEN, 6),

    # 19 — COPY INSIGHT (7s)
    ([{"type":"text","text":"BUYERS DON'T BUY DOMAIN NAMES.","y":240,"size":82,"color":GRAY},
      {"type":"text","text":"THEY BUY WHAT THE DOMAIN","y":360,"size":88,"color":WHITE},
      {"type":"text","text":"REPRESENTS FOR THEIR BUSINESS.","y":480,"size":88,"color":CYAN}],
     BG_ALT, CYAN, CYAN, 7),

    # 20 — MODULE 4 (6s)
    ([{"type":"tag","text":"Module 4","y":180,"color":RED},
      {"type":"text","text":"THE OUTBOUND BUYER FINDER","y":290,"size":88,"color":WHITE},
      {"type":"divider","y":415,"color":RED,"width":180},
      {"type":"text","text":"PRE-SEED DEMAND BEFORE YOUR AUCTION OPENS.","y":455,"size":60,"color":GRAY}],
     BG_DARK, RED, RED, 6),

    # 21 — MODULE 4 DETAIL (7s)
    ([{"type":"text","text":"IDENTIFY 5-10 END-USERS","y":250,"size":84,"color":WHITE},
      {"type":"text","text":"BEFORE YOUR LISTING GOES LIVE.","y":370,"size":84,"color":WHITE},
      {"type":"text","text":"CREATE COMPETITION.","y":510,"size":96,"color":GOLD},
      {"type":"text","text":"THIS IS THE STEP NOBODY ELSE TEACHES.","y":640,"size":56,"color":GRAY}],
     BG_ALT, GOLD, RED, 7),

    # 22 — MODULE 5 (6s)
    ([{"type":"tag","text":"Module 5","y":180,"color":CYAN},
      {"type":"text","text":"TIMING & LAUNCH STRATEGY","y":290,"size":88,"color":WHITE},
      {"type":"divider","y":415,"color":CYAN,"width":180},
      {"type":"text","text":"THE 12-MONTH AUCTION CALENDAR.","y":455,"size":64,"color":GRAY}],
     BG_DARK, CYAN, CYAN, 6),

    # 23 — TIMING INSIGHT (7s)
    ([{"type":"text","text":"THE SAME DOMAIN. WRONG TIME.","y":240,"size":82,"color":RED},
      {"type":"divider","y":370,"color":GRAY,"width":80},
      {"type":"text","text":"THE SAME DOMAIN. RIGHT TIME.","y":410,"size":82,"color":GREEN},
      {"type":"text","text":"COMPLETELY DIFFERENT RESULTS.","y":540,"size":88,"color":WHITE}],
     BG_ALT, CYAN, GREEN, 7),

    # 24 — TOOLS (7s)
    ([{"type":"tag","text":"Plus — Bonus Tools","y":160,"color":GOLD},
      {"type":"text","text":"DOMAIN PRICING CALCULATOR","y":270,"size":72,"color":WHITE},
      {"type":"text","text":"30 LISTING COPY TEMPLATES","y":370,"size":72,"color":WHITE},
      {"type":"text","text":"PLATFORM CHEAT SHEET","y":470,"size":72,"color":WHITE},
      {"type":"text","text":"7-DAY PRE-AUCTION CHECKLIST","y":570,"size":72,"color":GOLD}],
     BG_DARK, GOLD, GOLD, 7),

    # 25 — ROI (8s)
    ([{"type":"text","text":"ONE DOMAIN.","y":200,"size":100,"color":WHITE},
      {"type":"text","text":"SOLD FOR $500 INSTEAD OF $50.","y":340,"size":84,"color":CYAN},
      {"type":"big_number","text":"10X","y":460,"color":GOLD},
      {"type":"text","text":"YOUR INVESTMENT. FROM A SINGLE LISTING.","y":720,"size":58,"color":GRAY}],
     BG_ALT, GOLD, CYAN, 8),

    # 26 — PRICE (8s)
    ([{"type":"tag","text":"Founder Pricing — Right Now","y":180,"color":GREEN},
      {"type":"text","text":"GET INSTANT ACCESS FOR","y":290,"size":76,"color":GRAY},
      {"type":"big_number","text":"$47","y":370,"color":GOLD},
      {"type":"text","text":"ONE TIME. PRICE GOES TO $97 SOON.","y":700,"size":64,"color":GRAY}],
     BG_DARK, GOLD, GOLD, 8),

    # 27 — GUARANTEE (7s)
    ([{"type":"tag","text":"30-Day Money-Back Guarantee","y":220,"color":GREEN},
      {"type":"text","text":"GO THROUGH THE ENTIRE BLUEPRINT.","y":330,"size":78,"color":WHITE},
      {"type":"text","text":"IF IT'S NOT WORTH EVERY DOLLAR —","y":440,"size":78,"color":WHITE},
      {"type":"text","text":"FULL REFUND. SAME DAY.","y":570,"size":88,"color":GREEN}],
     BG_ALT, GREEN, GREEN, 7),

    # 28 — CLOSE (7s)
    ([{"type":"text","text":"YOU'VE ALREADY GOT THE INVENTORY.","y":220,"size":80,"color":GRAY},
      {"type":"text","text":"YOU'VE DONE THE HARD PART.","y":340,"size":80,"color":GRAY},
      {"type":"divider","y":460,"color":CYAN,"width":300},
      {"type":"text","text":"NOW IT'S TIME TO CLOSE.","y":500,"size":100,"color":CYAN}],
     BG_DARK, CYAN, GOLD, 7),

    # 29 — CTA (8s)
    ([{"type":"text","text":"CLICK THE BUTTON BELOW.","y":250,"size":88,"color":WHITE},
      {"type":"divider","y":380,"color":GOLD,"width":200},
      {"type":"text","text":"GET INSTANT ACCESS TO","y":420,"size":80,"color":GRAY},
      {"type":"text","text":"FLIP AND CLOSE.","y":530,"size":120,"color":GOLD}],
     BG_ALT, GOLD, CYAN, 8),
]

print(f"Building {len(SLIDES)} slides...")
frame_files = []
durations = []

for i, (elements, bg, top_c, bot_c, dur) in enumerate(SLIDES):
    fname = f"{OUT_DIR}/slide_{i:03d}.png"
    make_slide(fname, bg=bg, elements=elements, top_bar_color=top_c, bottom_bar_color=bot_c)
    frame_files.append(fname)
    durations.append(dur)
    print(f"  {i+1}/{len(SLIDES)}")

print(f"Total duration: {sum(durations)}s")

# Build concat file
concat = f"{OUT_DIR}/concat.txt"
with open(concat, "w") as f:
    for fname, dur in zip(frame_files, durations):
        ap = os.path.abspath(fname).replace("\\", "/")
        f.write(f"file '{ap}'\nduration {dur}\n")
    # repeat last frame
    f.write(f"file '{os.path.abspath(frame_files[-1]).replace(chr(92),chr(47))}'\n")

# Step 1: silent video
silent = f"{OUT_DIR}/silent_v2.mp4"
r = subprocess.run([
    "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", concat,
    "-vf", "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1",
    "-r", "24", "-c:v", "libx264", "-preset", "fast", "-pix_fmt", "yuv420p", silent
], capture_output=True, text=True)
if r.returncode != 0: print("ERR:", r.stderr[-400:]); exit(1)
print("Slide video done.")

# Step 2: merge audio
out = "public/vsl-final.mp4"
r = subprocess.run([
    "ffmpeg", "-y", "-i", silent, "-i", "public/vsl-audio.mp3",
    "-c:v", "copy", "-c:a", "aac", "-b:a", "128k", "-shortest", "-movflags", "+faststart", out
], capture_output=True, text=True)
if r.returncode != 0: print("ERR:", r.stderr[-400:]); exit(1)

mb = os.path.getsize(out)/1024/1024
print(f"\nDone! {out} — {mb:.1f} MB")
