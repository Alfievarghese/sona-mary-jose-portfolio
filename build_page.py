import re

with open(r'D:\SONA_PORTFOLIO\stitch_generated.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the hero image with her real photo 'sona-photo.png'
hero_img_target = 'https://lh3.googleusercontent.com/aida/AEtjO1Uy4TtF5VSj6NRin2Qwr-WLC5cOKRUVp2AWC31YinbHqEc85qhG_mQEp-02zzB7AVMsPi1CCFD5isocTTtRI77J7hlG1Bo19I3OL_OP8qT45Dy_PQXJBf_oVsOEU2Rpm-KsFi6-qHfwZlgbhGZGeGKgbt-2BXq-NFfg2mmCd35c9AYKuX4g00QbEQ9E3Q_EsNi_pNQSqBny9LQFJvjz49CxU-vWEjCRSZNe2JIkIDpO8WDqDetBJK3xWf8'
html = html.replace(hero_img_target, 'sona-photo.png')

# Update resume download button to link to her real resume
html = html.replace('href="#"', 'href="Sona_Resume (2).pdf" download="Sona_Mary_Jose_Resume.pdf"', 1)

# Now add the floral curtain animation overlay and enhanced botanical animations
curtain_overlay = '''
<!-- Botanical Curtain Intro Animation -->
<div id="botanical-curtain" class="fixed inset-0 z-50 pointer-events-none flex overflow-hidden">
  <!-- Left Curtain Panel -->
  <div id="curtain-left" class="w-1/2 h-full bg-[#FFF0F5] relative transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between p-8 border-r border-[#F5C6D0]/50 shadow-2xl">
    <div class="space-y-4">
      <svg class="w-32 h-32 text-[#E8A0B5]/40 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 15 C45 30, 20 35, 30 50 C40 65, 45 45, 50 85 C55 45, 60 65, 70 50 C80 35, 55 30, 50 15 Z"/>
      </svg>
      <div class="font-['Cormorant_Garamond'] text-4xl italic text-[#874D5F] font-semibold opacity-80">Sona's Garden</div>
      <p class="font-['Caveat'] text-2xl text-[#8B9A82]">Welcome to where silicon meets grace...</p>
    </div>
    <!-- Bottom garden grass and flora illustration -->
    <div class="relative w-full h-48 opacity-90">
      <svg viewBox="0 0 500 200" class="w-full h-full" preserveAspectRatio="none">
        <path d="M0,200 Q25,80 50,200 Q75,100 100,200 Q125,50 150,200 Q175,90 200,200 Q225,60 250,200 Q275,110 300,200 Q325,40 350,200 Q375,95 400,200 Q425,70 450,200 Q475,120 500,200 Z" fill="#6B8F5E" opacity="0.35"/>
        <path d="M0,200 Q35,110 70,200 Q105,70 140,200 Q175,120 210,200 Q245,60 280,200 Q315,100 350,200 Q385,80 420,200 Q455,130 500,200 Z" fill="#8B9A82" opacity="0.45"/>
        <!-- Flower Petals -->
        <circle cx="50" cy="110" r="14" fill="#E8A0B5" opacity="0.8"/>
        <circle cx="50" cy="110" r="6" fill="#D4A853"/>
        <circle cx="150" cy="80" r="18" fill="#F5C6D0" opacity="0.85"/>
        <circle cx="150" cy="80" r="7" fill="#E8A0B5"/>
        <circle cx="280" cy="90" r="16" fill="#E8A0B5" opacity="0.8"/>
        <circle cx="350" cy="70" r="20" fill="#FCE7F3" opacity="0.9"/>
        <circle cx="350" cy="70" r="8" fill="#D4A853"/>
        <circle cx="450" cy="100" r="15" fill="#E8A0B5" opacity="0.8"/>
      </svg>
    </div>
  </div>

  <!-- Right Curtain Panel -->
  <div id="curtain-right" class="w-1/2 h-full bg-[#FFF0F5] relative transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between items-end p-8 border-l border-[#F5C6D0]/50 shadow-2xl">
    <div class="space-y-4 text-right">
      <svg class="w-32 h-32 text-[#E8A0B5]/40 ml-auto animate-pulse" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 15 C55 30, 80 35, 70 50 C60 65, 55 45, 50 85 C45 45, 40 65, 30 50 C20 35, 45 30, 50 15 Z"/>
      </svg>
      <div class="font-['Cormorant_Garamond'] text-3xl italic text-[#874D5F] opacity-75">ECE • IoT • AI • UI/UX</div>
      <p class="font-['Caveat'] text-2xl text-[#8B9A82]">Unfurling artifacts &amp; inventions...</p>
    </div>
    <!-- Bottom garden grass and flora illustration -->
    <div class="relative w-full h-48 opacity-90">
      <svg viewBox="0 0 500 200" class="w-full h-full" preserveAspectRatio="none">
        <path d="M0,200 Q30,90 60,200 Q90,60 120,200 Q150,110 180,200 Q210,70 240,200 Q270,100 300,200 Q330,50 360,200 Q390,90 420,200 Q450,60 500,200 Z" fill="#6B8F5E" opacity="0.35"/>
        <path d="M0,200 Q40,120 80,200 Q120,80 160,200 Q200,100 240,200 Q280,70 320,200 Q360,110 400,200 Q440,90 500,200 Z" fill="#8B9A82" opacity="0.45"/>
        <!-- Flower Petals -->
        <circle cx="80" cy="100" r="15" fill="#E8A0B5" opacity="0.8"/>
        <circle cx="80" cy="100" r="6" fill="#D4A853"/>
        <circle cx="200" cy="90" r="18" fill="#F5C6D0" opacity="0.85"/>
        <circle cx="320" cy="80" r="16" fill="#E8A0B5" opacity="0.8"/>
        <circle cx="320" cy="80" r="7" fill="#E8A0B5"/>
        <circle cx="420" cy="70" r="22" fill="#FCE7F3" opacity="0.9"/>
        <circle cx="420" cy="70" r="9" fill="#D4A853"/>
      </svg>
    </div>
  </div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', () => {
    // Start curtain opening after a brief pause
    setTimeout(() => {
      const left = document.getElementById('curtain-left');
      const right = document.getElementById('curtain-right');
      const curtain = document.getElementById('botanical-curtain');
      if (left && right) {
        left.style.transform = 'translateX(-100%)';
        right.style.transform = 'translateX(100%)';
      }
      setTimeout(() => {
        if (curtain) curtain.style.display = 'none';
      }, 2300);
    }, 450);
  });
</script>
'''

# Inject curtain right after <body> tag
html = html.replace('<body class="', '<body class="overflow-x-hidden ')
html = html.replace('>', '>\n' + curtain_overlay, 1)

# Write to index.html
with open(r'D:\SONA_PORTFOLIO\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Successfully generated index.html with real photo and floral curtain animation!')
