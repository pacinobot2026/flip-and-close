"""
Flip And Close — VSL Video Builder
16:9 slides, white background, black UPPERCASE text
Audio: public/vsl-audio.mp3
Output: public/vsl-final.mp4
"""

import os, textwrap, subprocess, glob
from PIL import Image, ImageDraw, ImageFont

W, H = 1920, 1080
BG = (255, 255, 255)
TEXT_COLOR = (15, 23, 42)       # near-black
ACCENT_COLOR = (30, 64, 175)    # blue accent
HIGHLIGHT = (245, 158, 11)      # gold accent
FONT_PATH = "C:/Windows/Fonts/arialbd.ttf"
FONT_LIGHT = "C:/Windows/Fonts/arial.ttf"

OUT_DIR = "vsl-frames"
os.makedirs(OUT_DIR, exist_ok=True)

def make_font(size):
    try:
        return ImageFont.truetype(FONT_PATH, size)
    except:
        return ImageFont.load_default()

def make_font_light(size):
    try:
        return ImageFont.truetype(FONT_LIGHT, size)
    except:
        return make_font(size)

def draw_slide(filename, lines, sub=None, bg=BG, accent_bar=True):
    img = Image.new("RGB", (W, H), bg)
    draw = ImageDraw.Draw(img)

    # Top accent bar
    if accent_bar:
        draw.rectangle([(0, 0), (W, 8)], fill=ACCENT_COLOR)

    # Bottom bar
    draw.rectangle([(0, H-8), (W, H)], fill=HIGHLIGHT)

    # Logo bottom-left
    logo_font = make_font(28)
    draw.text((60, H-60), "FLIP AND CLOSE", font=logo_font, fill=(180, 180, 180))

    # Main text
    y_start = 200
    for line in lines:
        size = line.get("size", 80)
        color = line.get("color", TEXT_COLOR)
        bold = line.get("bold", True)
        font = make_font(size) if bold else make_font_light(size)
        text = line["text"].upper() if line.get("upper", True) else line["text"]

        # Word wrap
        wrapped = textwrap.wrap(text, width=max(10, int(52 * (80/size))))
        for wline in wrapped:
            bbox = draw.textbbox((0, 0), wline, font=font)
            tw = bbox[2] - bbox[0]
            x = (W - tw) // 2
            draw.text((x, y_start), wline, font=font, fill=color)
            y_start += size + 20

        y_start += 10  # extra space between lines

    # Sub text (bottom)
    if sub:
        sfont = make_font_light(38)
        wrapped = textwrap.wrap(sub.upper(), width=70)
        y = H - 160
        for wline in wrapped:
            bbox = draw.textbbox((0, 0), wline, font=sfont)
            tw = bbox[2] - bbox[0]
            x = (W - tw) // 2
            draw.text((x, y), wline, font=sfont, fill=(120, 120, 120))
            y += 50

    img.save(filename)

# ── SLIDE DEFINITIONS ──
# Each slide: (lines, sub, duration_seconds)
SLIDES = [
    # HOOK
    ([{"text": "If you've got domains sitting", "size": 82},
      {"text": "in your account right now —", "size": 82},
      {"text": "this is the most important thing", "size": 72, "color": ACCENT_COLOR},
      {"text": "you'll watch today.", "size": 72, "color": ACCENT_COLOR}],
     None, 7),

    # THE TRUTH
    ([{"text": "Here's the truth", "size": 88},
      {"text": "most domain flippers", "size": 88},
      {"text": "won't say out loud:", "size": 88}],
     None, 5),

    ([{"text": "It's not your domains.", "size": 96, "color": ACCENT_COLOR},
      {"text": "It's how you're selling them.", "size": 96, "color": ACCENT_COLOR}],
     None, 6),

    # QUESTION
    ([{"text": "When you list a domain —", "size": 80},
      {"text": "do you know exactly what", "size": 80},
      {"text": "reserve price to set?", "size": 80}],
     None, 6),

    ([{"text": "Do you know which platform", "size": 78},
      {"text": "has the right buyers for that", "size": 78},
      {"text": "specific type of domain?", "size": 78}],
     None, 6),

    ([{"text": "Or are you just listing it", "size": 88},
      {"text": "and hoping?", "size": 88, "color": (220, 50, 50)}],
     None, 5),

    # WHERE MONEY IS LOST
    ([{"text": "Most domain flippers", "size": 84},
      {"text": "lose money not in the", "size": 84},
      {"text": "buying phase.", "size": 84}],
     None, 5),

    ([{"text": "They lose it in the", "size": 88},
      {"text": "selling phase.", "size": 96, "color": (220, 50, 50)}],
     None, 5),

    # STORY
    ([{"text": "You find a solid domain.", "size": 84},
      {"text": "You register it for $12.", "size": 84},
      {"text": "You list it and wait.", "size": 84}],
     None, 6),

    ([{"text": "Days go by. Weeks.", "size": 84},
      {"text": "The auction ends with zero bids.", "size": 76},
      {"text": "Or it sells for $50.", "size": 84, "color": (220, 50, 50)},
      {"text": "When it was worth $500.", "size": 84, "color": (220, 50, 50)}],
     None, 8),

    ([{"text": "The domain was fine.", "size": 88, "color": ACCENT_COLOR},
      {"text": "The system failed it.", "size": 88, "color": ACCENT_COLOR}],
     None, 5),

    # THE 5 VARIABLES
    ([{"text": "5 variables determine", "size": 84},
      {"text": "auction results:", "size": 84}],
     None, 4),

    ([{"text": "Platform selection.", "size": 78},
      {"text": "Reserve pricing.", "size": 78},
      {"text": "Listing copy.", "size": 78},
      {"text": "Outbound demand.", "size": 78},
      {"text": "Timing.", "size": 78, "color": ACCENT_COLOR}],
     "Most flippers get all five wrong.", 8),

    # INTRODUCE PRODUCT
    ([{"text": "That's why I built", "size": 88},
      {"text": "Flip and Close.", "size": 104, "color": ACCENT_COLOR}],
     None, 5),

    ([{"text": "A step-by-step blueprint for", "size": 78},
      {"text": "listing, pricing, and selling", "size": 78},
      {"text": "domains at auction for the", "size": 78},
      {"text": "prices they're actually worth.", "size": 78, "color": ACCENT_COLOR}],
     None, 8),

    # MODULE 1
    ([{"text": "Module 1:", "size": 60, "color": HIGHLIGHT},
      {"text": "Platform Selection Mastery", "size": 84, "color": ACCENT_COLOR}],
     "The right platform for every domain type", 6),

    ([{"text": "GoDaddy. NameJet.", "size": 84},
      {"text": "Sedo. Dan.com.", "size": 84},
      {"text": "Each has a completely", "size": 80},
      {"text": "different buyer pool.", "size": 80, "color": ACCENT_COLOR}],
     None, 7),

    # MODULE 2
    ([{"text": "Module 2:", "size": 60, "color": HIGHLIGHT},
      {"text": "The Reserve Price Formula", "size": 84, "color": ACCENT_COLOR}],
     "Data-backed pricing for every domain type", 6),

    ([{"text": "No more guessing.", "size": 88},
      {"text": "No more underselling.", "size": 88},
      {"text": "No more dead auctions.", "size": 88, "color": ACCENT_COLOR}],
     None, 6),

    # MODULE 3
    ([{"text": "Module 3:", "size": 60, "color": HIGHLIGHT},
      {"text": "Auction Listing Copywriting", "size": 82, "color": ACCENT_COLOR}],
     "The 7-element formula + 30 done-for-you templates", 6),

    ([{"text": "Buyers don't buy domain names.", "size": 76},
      {"text": "They buy what the domain", "size": 76},
      {"text": "represents for their business.", "size": 76, "color": ACCENT_COLOR}],
     None, 7),

    # MODULE 4
    ([{"text": "Module 4:", "size": 60, "color": HIGHLIGHT},
      {"text": "The Outbound Buyer Finder", "size": 84, "color": ACCENT_COLOR}],
     "Pre-seed demand before your auction opens", 6),

    ([{"text": "Identify 5-10 end-users", "size": 82},
      {"text": "before your listing goes live.", "size": 82},
      {"text": "Create competition.", "size": 88, "color": ACCENT_COLOR}],
     "This is the step nobody else teaches.", 8),

    # MODULE 5
    ([{"text": "Module 5:", "size": 60, "color": HIGHLIGHT},
      {"text": "Timing & Launch Strategy", "size": 84, "color": ACCENT_COLOR}],
     "The 12-month auction calendar", 6),

    ([{"text": "The same domain listed", "size": 82},
      {"text": "at the wrong time vs the right time", "size": 76},
      {"text": "produces completely different results.", "size": 72, "color": ACCENT_COLOR}],
     None, 7),

    # TOOLS
    ([{"text": "Plus:", "size": 72, "color": HIGHLIGHT},
      {"text": "Domain Pricing Calculator", "size": 80},
      {"text": "30 Listing Templates", "size": 80},
      {"text": "Platform Cheat Sheet", "size": 80},
      {"text": "7-Day Pre-Auction Checklist", "size": 80}],
     None, 8),

    # ROI
    ([{"text": "One domain.", "size": 96},
      {"text": "Sold for $500 instead of $50.", "size": 84, "color": ACCENT_COLOR},
      {"text": "That's 10x your investment.", "size": 84, "color": ACCENT_COLOR}],
     "From a single listing.", 8),

    # OFFER
    ([{"text": "Right now — founder pricing:", "size": 80},
      {"text": "$47", "size": 140, "color": HIGHLIGHT},
      {"text": "One time. Instant access.", "size": 72}],
     "Price goes to $97 when this closes.", 8),

    # GUARANTEE
    ([{"text": "30-Day Money-Back Guarantee.", "size": 80, "color": ACCENT_COLOR},
      {"text": "Go through the entire blueprint.", "size": 76},
      {"text": "If it's not worth every dollar —", "size": 76},
      {"text": "full refund. Same day.", "size": 76, "color": ACCENT_COLOR}],
     None, 8),

    # CLOSE
    ([{"text": "You've already got the inventory.", "size": 80},
      {"text": "You've already done the hard part.", "size": 80},
      {"text": "Now it's time to close.", "size": 96, "color": ACCENT_COLOR}],
     None, 7),

    ([{"text": "Click the button below.", "size": 88, "color": ACCENT_COLOR},
      {"text": "Get instant access to", "size": 84},
      {"text": "Flip and Close.", "size": 100, "color": ACCENT_COLOR}],
     "FlipAndClose.vercel.app", 8),
]

print(f"Building {len(SLIDES)} slides...")
frame_list = []
slide_durations = []

for i, (lines, sub, duration) in enumerate(SLIDES):
    fname = f"{OUT_DIR}/slide_{i:03d}.png"
    draw_slide(fname, lines, sub)
    frame_list.append(fname)
    slide_durations.append(duration)
    print(f"  Slide {i+1}/{len(SLIDES)}: {duration}s")

print(f"\nTotal visual duration: {sum(slide_durations)}s")
print("Generating video with audio...")

# Build concat file for ffmpeg
concat_file = f"{OUT_DIR}/concat.txt"
with open(concat_file, "w") as f:
    for fname, dur in zip(frame_list, slide_durations):
        abs_path = os.path.abspath(fname).replace("\\", "/")
        f.write(f"file '{abs_path}'\n")
        f.write(f"duration {dur}\n")
    # repeat last frame (ffmpeg concat needs it)
    abs_path = os.path.abspath(frame_list[-1]).replace("\\", "/")
    f.write(f"file '{abs_path}'\n")

# Step 1: Build silent video from slides
silent_video = f"{OUT_DIR}/silent.mp4"
cmd1 = [
    "ffmpeg", "-y",
    "-f", "concat", "-safe", "0",
    "-i", concat_file,
    "-vf", "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1",
    "-r", "24",
    "-c:v", "libx264",
    "-preset", "fast",
    "-pix_fmt", "yuv420p",
    silent_video
]
print("Step 1: Building slide video...")
result = subprocess.run(cmd1, capture_output=True, text=True)
if result.returncode != 0:
    print("ERROR:", result.stderr[-500:])
    exit(1)
print("  Slide video done.")

# Step 2: Combine with audio
audio_file = "public/vsl-audio.mp3"
output_file = "public/vsl-final.mp4"

cmd2 = [
    "ffmpeg", "-y",
    "-i", silent_video,
    "-i", audio_file,
    "-c:v", "copy",
    "-c:a", "aac",
    "-b:a", "128k",
    "-shortest",
    "-movflags", "+faststart",
    output_file
]
print("Step 2: Merging audio...")
result = subprocess.run(cmd2, capture_output=True, text=True)
if result.returncode != 0:
    print("ERROR:", result.stderr[-500:])
    exit(1)

size_mb = os.path.getsize(output_file) / 1024 / 1024
print(f"\nDone! Output: {output_file} ({size_mb:.1f} MB)")
