import os
from PIL import Image, ImageDraw, ImageFont

# 1. Write favicon.svg
svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <radialGradient id="grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF9F6"/>
      <stop offset="100%" stop-color="#FAECE4"/>
    </radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#grad)" stroke="#EAA2B7" stroke-width="2"/>
  <circle cx="32" cy="32" r="26" fill="none" stroke="#EAA2B7" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.7"/>
  <text x="32" y="42" font-family="'Cormorant Garamond', Georgia, serif" font-size="30" font-style="italic" font-weight="700" fill="#9E4A64" text-anchor="middle">S</text>
  <circle cx="43" cy="21" r="2.5" fill="#3D7C58"/>
</svg>"""

os.makedirs('public', exist_ok=True)
with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

# 2. Render PNG favicons
size = 256
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Outer circle
draw.ellipse([8, 8, size-8, size-8], fill=(255, 249, 246, 255), outline=(234, 162, 183, 255), width=8)
draw.ellipse([24, 24, size-24, size-24], outline=(234, 162, 183, 160), width=3)

# Load font if available or draw serif S
try:
    font = ImageFont.truetype("georgia.ttf", 140)
except Exception:
    font = ImageFont.load_default()

draw.text((size//2, size//2 + 8), "S", font=font, fill=(158, 74, 100, 255), anchor="mm")
# Mini botanical bud
draw.ellipse([size - 60, 48, size - 44, 64], fill=(61, 124, 88, 255))

img.save('public/favicon.png')
img.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon.ico')
print("Favicons written successfully!")

# 3. Create high-resolution OpenGraph preview image: 1200x630
og = Image.new('RGB', (1200, 630), (255, 249, 246))
og_draw = ImageDraw.Draw(og)

# Ambient soft glow circles
glow = Image.new('RGBA', (1200, 630), (0, 0, 0, 0))
g_draw = ImageDraw.Draw(glow)
g_draw.ellipse([-50, -50, 450, 450], fill=(253, 242, 245, 180))
g_draw.ellipse([800, 200, 1350, 750], fill=(250, 236, 228, 180))
og.paste(glow, (0, 0), glow)

# Outer double bezel border for the entire card
og_draw.rounded_rectangle([30, 30, 1170, 600], radius=36, outline=(234, 162, 183), width=2)
og_draw.rounded_rectangle([38, 38, 1162, 592], radius=28, outline=(250, 236, 228), width=1)

# Embed Sona's photo on the right if available
if os.path.exists('public/sona-photo.png'):
    photo = Image.open('public/sona-photo.png').convert('RGBA')
    # Resize photo maintaining aspect
    target_w, target_h = 360, 440
    photo = photo.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Mask to rounded rect
    mask = Image.new('L', (target_w, target_h), 0)
    m_draw = ImageDraw.Draw(mask)
    m_draw.rounded_rectangle([0, 0, target_w, target_h], radius=24, fill=255)
    
    # Frame photo in double bezel
    og_draw.rounded_rectangle([756, 91, 756 + target_w + 8, 91 + target_h + 8], radius=28, outline=(234, 162, 183), width=2)
    og.paste(photo, (760, 95), mask)

# Typography on the left
try:
    font_eyebrow = ImageFont.truetype("georgia.ttf", 20)
    font_title = ImageFont.truetype("georgia.ttf", 52)
    font_sub = ImageFont.truetype("georgia.ttf", 26)
    font_meta = ImageFont.truetype("cour.ttf", 18)
except Exception:
    font_eyebrow = ImageFont.load_default()
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_meta = ImageFont.load_default()

# Eyebrow tag
og_draw.text((90, 110), "PORTFOLIO & DIGITAL CONSERVATORY", font=font_eyebrow, fill=(158, 74, 100))
og_draw.line([90, 140, 180, 140], fill=(234, 162, 183), width=2)

# Title
og_draw.text((90, 170), "Sona Mary Jose", font=font_title, fill=(36, 27, 33))

# Subtitle
og_draw.text((90, 245), "Embedded AI • IoT Firmware • UI/UX Systems", font=font_sub, fill=(158, 74, 100))

# Narrative
text_lines = [
    "Electronics & Communication Engineer fusing low-level ESP32",
    "firmware, sensor physics, and offline AI models with refined,",
    "museum-tier digital interfaces."
]
y_offset = 310
for line in text_lines:
    og_draw.text((90, y_offset), line, font=font_sub, fill=(70, 60, 66))
    y_offset += 38

# Badges at bottom
og_draw.rounded_rectangle([90, 460, 390, 505], radius=22, fill=(250, 236, 228), outline=(234, 162, 183), width=1)
og_draw.text((115, 475), "IISER Bhopal NPTEL Elite", font=font_meta, fill=(36, 27, 33))

og_draw.rounded_rectangle([405, 460, 715, 505], radius=22, fill=(250, 236, 228), outline=(234, 162, 183), width=1)
og_draw.text((430, 475), "IICT GmbH Germany Fellow", font=font_meta, fill=(36, 27, 33))

og.save('public/og-image.png', 'PNG', quality=95)
print("OpenGraph image public/og-image.png created successfully!")
