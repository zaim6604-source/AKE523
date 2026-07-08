/* ── Photo-realistic SVG data-URI placeholders ── */

function svgURI(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/* ── Hero: global recruitment visual ── */
export function heroImage() {
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <defs>
      <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF1654"/>
        <stop offset="100%" style="stop-color:#D60046"/>
      </linearGradient>
      <linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD400"/>
        <stop offset="100%" style="stop-color:#E6BF00"/>
      </linearGradient>
    </defs>
    <rect width="500" height="500" fill="#FFF0F0"/>
    <!-- World map simplified -->
    <circle cx="250" cy="240" r="140" fill="none" stroke="#FF1654" stroke-width="2" opacity="0.3"/>
    <circle cx="250" cy="240" r="100" fill="none" stroke="#FF1654" stroke-width="1.5" opacity="0.2"/>
    <circle cx="250" cy="240" r="60" fill="none" stroke="#FF1654" stroke-width="1" opacity="0.15"/>
    <!-- Continents simplified -->
    <ellipse cx="200" cy="220" rx="40" ry="25" fill="#FF1654" opacity="0.4"/>
    <ellipse cx="300" cy="230" rx="30" ry="20" fill="#FF1654" opacity="0.35"/>
    <ellipse cx="250" cy="280" rx="25" ry="15" fill="#FF1654" opacity="0.3"/>
    <ellipse cx="180" cy="260" rx="15" ry="20" fill="#FF1654" opacity="0.25"/>
    <ellipse cx="330" cy="210" rx="20" ry="12" fill="#FF1654" opacity="0.2"/>
    <!-- Connection lines -->
    <line x1="200" y1="220" x2="300" y2="230" stroke="#FFD400" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="250" y1="280" x2="200" y2="220" stroke="#FFD400" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="300" y1="230" x2="250" y2="280" stroke="#FFD400" stroke-width="1.5" stroke-dasharray="3,3"/>
    <!-- Location pins -->
    <circle cx="200" cy="218" r="6" fill="#FF1654"/>
    <circle cx="200" cy="218" r="3" fill="white"/>
    <circle cx="300" cy="228" r="6" fill="#FF1654"/>
    <circle cx="300" cy="228" r="3" fill="white"/>
    <circle cx="250" cy="278" r="5" fill="#D60046"/>
    <circle cx="250" cy="278" r="2.5" fill="white"/>
    <!-- Bottom decoration -->
    <rect x="0" y="400" width="500" height="100" fill="url(#hg)" rx="0"/>
    <text x="250" y="440" text-anchor="middle" fill="white" font-size="18" font-weight="800" font-family="sans-serif">HAIRO KHAN BUZDAR</text>
    <text x="250" y="465" text-anchor="middle" fill="#FFD400" font-size="12" font-weight="600" font-family="sans-serif">INTERNATIONAL · LICENSE 2169/DGK</text>
    <!-- Decorative dots -->
    <circle cx="80" cy="120" r="4" fill="#247BA0" opacity="0.5"/>
    <circle cx="420" cy="150" r="3" fill="#247BA0" opacity="0.4"/>
    <circle cx="100" cy="340" r="3" fill="#247BA0" opacity="0.3"/>
  </svg>`);
}

/* ── About: office / professional building ── */
export function aboutImage() {
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="abg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#1a3a5c"/>
        <stop offset="100%" style="stop-color:#0d1f33"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="#e8f0fe"/>
    <!-- Sky -->
    <rect width="600" height="200" fill="#c8ddf5"/>
    <!-- Clouds -->
    <ellipse cx="120" cy="60" rx="50" ry="20" fill="white" opacity="0.7"/>
    <ellipse cx="150" cy="55" rx="35" ry="15" fill="white" opacity="0.8"/>
    <ellipse cx="450" cy="80" rx="40" ry="16" fill="white" opacity="0.6"/>
    <ellipse cx="480" cy="75" rx="30" ry="12" fill="white" opacity="0.7"/>
    <!-- Building main -->
    <rect x="180" y="100" width="240" height="280" fill="#ddd" rx="2"/>
    <rect x="185" y="105" width="230" height="270" fill="#f0f0f0" rx="2"/>
    <!-- Building top accent -->
    <rect x="220" y="80" width="160" height="25" fill="#FF1654" rx="2"/>
    <text x="300" y="97" text-anchor="middle" fill="white" font-size="12" font-weight="800" font-family="sans-serif">AL ASAD INTERNATIONAL</text>
    <!-- Windows row 1 -->
    <rect x="200" y="130" width="40" height="50" fill="#88c4f5" rx="2"/>
    <rect x="255" y="130" width="40" height="50" fill="#d4e8fa" rx="2"/>
    <rect x="310" y="130" width="40" height="50" fill="#88c4f5" rx="2"/>
    <rect x="365" y="130" width="40" height="50" fill="#d4e8fa" rx="2"/>
    <!-- Windows row 2 -->
    <rect x="200" y="200" width="40" height="50" fill="#d4e8fa" rx="2"/>
    <rect x="255" y="200" width="40" height="50" fill="#88c4f5" rx="2"/>
    <rect x="310" y="200" width="40" height="50" fill="#d4e8fa" rx="2"/>
    <rect x="365" y="200" width="40" height="50" fill="#88c4f5" rx="2"/>
    <!-- Windows row 3 -->
    <rect x="200" y="270" width="40" height="50" fill="#88c4f5" rx="2"/>
    <rect x="255" y="270" width="40" height="50" fill="#d4e8fa" rx="2"/>
    <rect x="310" y="270" width="40" height="50" fill="#88c4f5" rx="2"/>
    <rect x="365" y="270" width="40" height="50" fill="#d4e8fa" rx="2"/>
    <!-- Entrance -->
    <rect x="260" y="320" width="80" height="60" fill="#FF1654" rx="3"/>
    <rect x="266" y="326" width="68" height="48" fill="#D60046" rx="2"/>
    <!-- Door handle -->
    <circle cx="320" cy="350" r="3" fill="#FFD400"/>
    <!-- Ground -->
    <rect x="0" y="380" width="600" height="20" fill="#7a9e6d"/>
    <!-- Sun -->
    <circle cx="500" cy="50" r="35" fill="#FFD400" opacity="0.8"/>
    <circle cx="500" cy="50" r="28" fill="#FFE44D"/>
    <!-- Flag -->
    <line x1="300" y1="80" x2="300" y2="50" stroke="#555" stroke-width="2"/>
    <rect x="300" y="50" width="30" height="18" fill="#FF1654" rx="1"/>
  </svg>`);
}

/* ── Country flag-style images ── */
export function countryImage(name) {
  const scenes = {
    'Saudi Arabia': `<rect width="400" height="260" fill="#f5f5f5"/><rect y="0" width="400" height="260" fill="url(#sg)"/><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e8d5b7"/><stop offset="100%" stop-color="#d4b896"/></linearGradient></defs><rect x="0" y="0" width="400" height="50" fill="#006C35"/><rect x="0" y="210" width="400" height="50" fill="#006C35"/><rect x="160" y="20" width="80" height="220" fill="#C2A06E"/><rect x="110" y="60" width="180" height="140" fill="#f5e6c8" rx="5"/><text x="200" y="145" text-anchor="middle" fill="#006C35" font-size="40" font-weight="bold" font-family="serif">&#x2704;</text><circle cx="330" cy="60" r="25" fill="#FFD400" opacity="0.6"/><circle cx="330" cy="60" r="18" fill="#FFE44D" opacity="0.8"/><circle cx="330" cy="60" r="8" fill="#FFD400"/>`,
    'Qatar': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="260" fill="#8A1538"/><polygon points="100,0 120,15 100,30 120,45 100,60 120,75 100,90 120,105 100,120 120,135 100,150 120,165 100,180 120,195 100,210 120,225 100,240 120,255 100,260 0,260 0,0" fill="white"/><rect x="150" y="30" width="220" height="80" fill="white" opacity="0.9" rx="5"/><text x="260" y="78" text-anchor="middle" fill="#8A1538" font-size="24" font-weight="800" font-family="sans-serif">QATAR</text><rect x="150" y="150" width="220" height="80" fill="white" opacity="0.85" rx="5"/><text x="260" y="198" text-anchor="middle" fill="#8A1538" font-size="14" font-weight="600" font-family="sans-serif">Doha · Hospitality</text>`,
    'Oman': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="260" fill="#e8f4f8"/><rect y="0" width="400" height="260" fill="url(#og)"/><defs><linearGradient id="og" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e8f4f8"/><stop offset="100%" stop-color="#d0e8f0"/></linearGradient></defs><rect x="0" y="0" width="400" height="45" fill="#FF1654"/><rect x="0" y="45" width="400" height="10" fill="white"/><rect x="0" y="55" width="400" height="45" fill="#FF1654"/><rect x="0" y="205" width="400" height="55" fill="#006847"/><rect x="0" y="55" width="55" height="205" fill="#FF1654"/><circle cx="28" cy="155" r="18" fill="white"/><circle cx="28" cy="155" r="13" fill="#FF1654"/><text x="240" y="165" text-anchor="middle" fill="#2E0507" font-size="22" font-weight="800" font-family="sans-serif">Muscat · Oman</text>`,
    'UAE': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="260" fill="url(#ug)"/><defs><linearGradient id="ug" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5e6c8"/><stop offset="100%" stop-color="#e8d5b7"/></linearGradient></defs><rect x="0" y="0" width="400" height="65" fill="#00732F"/><rect x="0" y="65" width="400" height="10" fill="white"/><rect x="0" y="75" width="400" height="10" fill="black"/><rect x="0" y="185" width="400" height="10" fill="black"/><rect x="0" y="195" width="400" height="10" fill="white"/><rect x="0" y="205" width="400" height="55" fill="#00732F"/><rect x="0" y="0" width="55" height="260" fill="#FF1654"/><circle cx="28" cy="130" r="15" fill="white"/><circle cx="28" cy="130" r="8" fill="#FF1654"/><rect x="200" y="30" width="170" height="50" fill="white" opacity="0.9" rx="8"/><text x="285" y="62" text-anchor="middle" fill="#2E0507" font-size="18" font-weight="800" font-family="sans-serif">Dubai · Abu Dhabi</text>`,
    'Poland': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="130" fill="white"/><rect x="0" y="130" width="400" height="130" fill="#DC143C"/><rect x="100" y="40" width="200" height="60" fill="#DC143C" opacity="0.08" rx="5"/><text x="200" y="78" text-anchor="middle" fill="#DC143C" font-size="22" font-weight="800" font-family="sans-serif">POLAND</text><rect x="100" y="160" width="200" height="60" fill="white" opacity="0.08" rx="5"/><text x="200" y="198" text-anchor="middle" fill="white" font-size="16" font-weight="700" font-family="sans-serif">Manufacturing · IT</text>`,
    'Romania': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="133" height="260" fill="#002B7F"/><rect x="133" y="0" width="134" height="260" fill="#FCD116"/><rect x="267" y="0" width="133" height="260" fill="#CE1126"/><text x="200" y="135" text-anchor="middle" fill="white" font-size="22" font-weight="800" font-family="sans-serif" paint-order="stroke" stroke="#333" stroke-width="2">ROMANIA</text><rect x="100" y="170" width="200" height="45" fill="white" opacity="0.85" rx="8"/><text x="200" y="198" text-anchor="middle" fill="#002B7F" font-size="14" font-weight="700" font-family="sans-serif">Construction · Hospitality</text>`,
    'Greece': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="260" fill="#e8f4f8"/><rect x="0" y="0" width="150" height="100" fill="#0D5EAF"/><rect x="0" y="0" width="400" height="18" fill="#0D5EAF"/><rect x="0" y="36" width="400" height="18" fill="#0D5EAF"/><rect x="0" y="72" width="400" height="18" fill="#0D5EAF"/><rect x="0" y="108" width="400" height="18" fill="#0D5EAF"/><rect x="0" y="144" width="400" height="18" fill="#0D5EAF"/><rect x="0" y="180" width="400" height="18" fill="#0D5EAF"/><rect x="0" y="216" width="400" height="18" fill="#0D5EAF"/><rect x="0" y="0" width="100" height="100" fill="#0D5EAF"/><rect x="40" y="0" width="18" height="100" fill="white"/><rect x="0" y="40" width="100" height="18" fill="white"/><text x="260" y="145" text-anchor="middle" fill="#0D5EAF" font-size="20" font-weight="800" font-family="sans-serif">GREECE</text><text x="260" y="175" text-anchor="middle" fill="#0D5EAF" font-size="13" font-weight="600" font-family="sans-serif">Tourism · Maritime</text>`,
    'South Korea': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="260" fill="white"/><rect x="0" y="40" width="400" height="180" fill="white"/><rect x="0" y="0" width="400" height="20" fill="#FF1654"/><rect x="0" y="220" width="400" height="20" fill="#FF1654"/><circle cx="200" cy="130" r="55" fill="#FF1654" opacity="0.08"/><circle cx="200" cy="130" r="55" fill="none" stroke="#FF1654" stroke-width="3"/><circle cx="200" cy="130" r="20" fill="#FF1654" opacity="0.3"/><line x1="175" y1="130" x2="225" y2="130" stroke="#FF1654" stroke-width="2"/><text x="200" y="100" text-anchor="middle" fill="#2E0507" font-size="18" font-weight="800" font-family="sans-serif">SOUTH KOREA</text><text x="200" y="170" text-anchor="middle" fill="#2E0507" font-size="13" font-weight="600" font-family="sans-serif">Seoul · Factory</text>`,
    'Croatia': `<rect width="400" height="260" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="90" fill="#FF1654"/><rect x="0" y="90" width="400" height="90" fill="white"/><rect x="0" y="180" width="400" height="80" fill="#0D5EAF"/><rect x="140" y="10" width="120" height="60" fill="white" rx="4"/><circle cx="200" cy="40" r="18" fill="#FF1654"/><circle cx="200" cy="40" r="12" fill="white"/><circle cx="200" cy="40" r="6" fill="#FF1654"/><text x="200" y="138" text-anchor="middle" fill="#2E0507" font-size="20" font-weight="800" font-family="sans-serif">CROATIA</text><text x="200" y="238" text-anchor="middle" fill="white" font-size="13" font-weight="700" font-family="sans-serif">Dubrovnik · Tourism</text>`,
  };
  return svgURI(scenes[name] || `<rect width="400" height="260" fill="#FF1654"/><circle cx="200" cy="130" r="60" fill="white" opacity="0.9"/><text x="200" y="140" text-anchor="middle" fill="#FF1654" font-size="40" font-weight="bold" font-family="sans-serif">${name.charAt(0)}</text><text x="200" y="210" text-anchor="middle" fill="white" font-size="16" font-weight="700" font-family="sans-serif">${name}</text>`);
}

/* ── Testimonial avatars ── */
export function avatarImage(seed) {
  const colors = [
    ['#FF1654', '#D60046'],
    ['#D60046', '#FF1654'],
    ['#247BA0', '#D60046'],
    ['#D60046', '#8B0000'],
  ];
  const c = colors[seed % colors.length];
  const names = ['A', 'F', 'M', 'S'];
  const initial = names[seed % names.length];
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs><linearGradient id="a${seed}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c[0]}"/><stop offset="100%" style="stop-color:${c[1]}"/></linearGradient></defs>
    <circle cx="50" cy="50" r="50" fill="url(#a${seed})"/>
    <circle cx="50" cy="38" r="16" fill="white" opacity="0.85"/>
    <ellipse cx="50" cy="80" rx="28" ry="24" fill="white" opacity="0.85"/>
    <text x="50" y="44" text-anchor="middle" fill="${c[0]}" font-size="22" font-weight="800" font-family="sans-serif">${initial}</text>
  </svg>`);
}

/* ── Gallery placeholders ── */
export function galleryImage(type) {
  const scenes = {
    Office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="gog" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#c8ddf5"/><stop offset="100%" style="stop-color:#a0c4ef"/></linearGradient></defs><rect width="400" height="400" fill="url(#gog)"/><rect x="100" y="120" width="200" height="240" fill="#ddd" rx="2"/><rect x="105" y="125" width="190" height="230" fill="#f0f0f0" rx="2"/><rect x="130" y="100" width="140" height="25" fill="#FF1654" rx="2"/><text x="200" y="117" text-anchor="middle" fill="white" font-size="11" font-weight="800" font-family="sans-serif">AL ASAD</text><rect x="120" y="145" width="30" height="40" fill="#88c4f5" rx="2"/><rect x="165" y="145" width="30" height="40" fill="#d4e8fa" rx="2"/><rect x="210" y="145" width="30" height="40" fill="#88c4f5" rx="2"/><rect x="255" y="145" width="30" height="40" fill="#d4e8fa" rx="2"/><rect x="120" y="200" width="30" height="40" fill="#d4e8fa" rx="2"/><rect x="165" y="200" width="30" height="40" fill="#88c4f5" rx="2"/><rect x="210" y="200" width="30" height="40" fill="#d4e8fa" rx="2"/><rect x="255" y="200" width="30" height="40" fill="#88c4f5" rx="2"/><rect x="170" y="290" width="60" height="50" fill="#FF1654" rx="3"/><rect x="174" y="294" width="52" height="42" fill="#D60046" rx="2"/><rect x="0" y="360" width="400" height="40" fill="#7a9e6d"/><rect x="90" y="340" width="220" height="60" fill="white" opacity="0.85" rx="8"/><text x="200" y="376" text-anchor="middle" fill="#FF1654" font-size="14" font-weight="800" font-family="sans-serif">Our Office · Shamsabad, Murree Road</text></svg>`,
    Briefing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#FFF0F0"/><rect x="60" y="60" width="280" height="220" fill="white" rx="10" shadow="2"/><rect x="80" y="80" width="240" height="4" fill="#FF1654" rx="2"/><rect x="80" y="95" width="180" height="6" fill="#ddd" rx="3"/><rect x="80" y="108" width="160" height="6" fill="#ddd" rx="3"/><rect x="80" y="130" width="70" height="50" fill="#FF1654" opacity="0.15" rx="4"/><text x="115" y="160" text-anchor="middle" fill="#FF1654" font-size="16" font-weight="800" font-family="sans-serif">&#x1F4CB;</text><rect x="170" y="130" width="150" height="50" fill="#ddd" rx="4"/><rect x="175" y="138" width="70" height="6" fill="#bbb" rx="3"/><rect x="175" y="150" width="90" height="6" fill="#bbb" rx="3"/><rect x="80" y="195" width="70" height="50" fill="#FF1654" opacity="0.12" rx="4"/><rect x="170" y="195" width="150" height="50" fill="#ddd" rx="4"/><rect x="80" y="260" width="240" height="80" fill="#FF1654" rx="0"/><text x="200" y="310" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="sans-serif">Pre-Departure Briefing</text></svg>`,
    Documentation: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f8f5f0"/><rect x="80" y="50" width="240" height="300" fill="white" rx="6" shadow="2"/><rect x="100" y="70" width="200" height="40" fill="#FF1654" rx="4"/><text x="200" y="95" text-anchor="middle" fill="white" font-size="13" font-weight="700" font-family="sans-serif">&#x1F4C4; PASSPORT</text><rect x="100" y="125" width="200" height="30" fill="#f0f0f0" rx="3"/><rect x="110" y="132" width="80" height="6" fill="#ccc" rx="3"/><rect x="200" y="132" width="60" height="6" fill="#ccc" rx="3"/><rect x="100" y="165" width="200" height="30" fill="#f0f0f0" rx="3"/><rect x="110" y="172" width="60" height="6" fill="#ccc" rx="3"/><rect x="180" y="172" width="80" height="6" fill="#ccc" rx="3"/><rect x="100" y="205" width="200" height="30" fill="#f0f0f0" rx="3"/><rect x="110" y="212" width="100" height="6" fill="#ccc" rx="3"/><rect x="100" y="245" width="200" height="30" fill="#f0f0f0" rx="3"/><rect x="110" y="252" width="70" height="6" fill="#ccc" rx="3"/><rect x="190" y="252" width="60" height="6" fill="#ccc" rx="3"/><rect x="100" y="285" width="200" height="40" fill="#D60046" rx="4"/><text x="200" y="310" text-anchor="middle" fill="white" font-size="12" font-weight="700" font-family="sans-serif">Visa Processing</text></svg>`,
    Departure: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#e8f4f8"/><rect x="0" y="250" width="400" height="150" fill="#888"/><rect x="0" y="230" width="400" height="20" fill="#666"/><rect x="80" y="150" width="240" height="30" fill="#ccc" rx="5"/><rect x="100" y="155" width="200" height="20" fill="#aaa" rx="3"/><rect x="130" y="120" width="140" height="35" fill="#ddd" rx="5"/><text x="200" y="143" text-anchor="middle" fill="#666" font-size="12" font-weight="700" font-family="sans-serif">TERMINAL</text><polygon points="200,50 230,110 170,110" fill="#FF1654"/><polygon points="200,55 225,108 175,108" fill="#D60046"/><rect x="185" y="100" width="30" height="20" fill="#FFD400" rx="2"/><rect x="80" y="270" width="240" height="80" fill="white" opacity="0.85" rx="5"/><text x="200" y="305" text-anchor="middle" fill="#FF1654" font-size="14" font-weight="800" font-family="sans-serif">&#x2708; Flight Departure</text><text x="200" y="330" text-anchor="middle" fill="#666" font-size="11" font-family="sans-serif">Gulf & European Routes</text></svg>`,
    Partners: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#FFF0F0"/><circle cx="140" cy="150" r="60" fill="#FF1654" opacity="0.12"/><circle cx="260" cy="150" r="60" fill="#FF1654" opacity="0.12"/><circle cx="140" cy="150" r="45" fill="#FF1654" opacity="0.2"/><circle cx="260" cy="150" r="45" fill="#FF1654" opacity="0.2"/><rect x="100" y="130" width="35" height="35" fill="#FF1654" rx="3"/><text x="117" y="154" text-anchor="middle" fill="white" font-size="16" font-weight="bold" font-family="sans-serif">&#x1F46B;</text><rect x="265" y="130" width="35" height="35" fill="#FF1654" rx="3"/><text x="282" y="154" text-anchor="middle" fill="white" font-size="16" font-weight="bold" font-family="sans-serif">&#x1F46B;</text><rect x="155" y="235" width="90" height="70" fill="#FF1654" rx="8"/><text x="200" y="270" text-anchor="middle" fill="white" font-size="28" font-weight="bold" font-family="sans-serif">&#x1F91D;</text><text x="200" y="330" text-anchor="middle" fill="#FF1654" font-size="14" font-weight="800" font-family="sans-serif">Trusted Partnerships</text></svg>`,
    Licensing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f8f5f0"/><rect x="80" y="60" width="240" height="280" fill="#fff8e1" rx="10" stroke="#FF1654" stroke-width="3"/><rect x="80" y="60" width="240" height="50" fill="#FF1654" rx="10"/><rect x="80" y="95" width="240" height="15" fill="#FF1654"/><text x="200" y="93" text-anchor="middle" fill="#FFD400" font-size="16" font-weight="800" font-family="sans-serif">&#x1F3C6; LICENSE</text><rect x="140" y="130" width="120" height="120" fill="#f0e8d0" rx="60"/><rect x="155" y="145" width="90" height="90" fill="#fff8e1" rx="45" stroke="#FFD400" stroke-width="2"/><text x="200" y="203" text-anchor="middle" fill="#FF1654" font-size="22" font-weight="900" font-family="sans-serif">2241</text><text x="200" y="225" text-anchor="middle" fill="#FF1654" font-size="12" font-weight="700" font-family="sans-serif">/RWP</text><text x="200" y="290" text-anchor="middle" fill="#2E0507" font-size="12" font-weight="600" font-family="sans-serif">Government Licensed</text></svg>`,
  };
  return svgURI(scenes[type] || `<rect width="400" height="400" fill="#FF1654"/><circle cx="200" cy="200" r="80" fill="white" opacity="0.2"/><text x="200" y="215" text-anchor="middle" fill="white" font-size="50" font-weight="bold" font-family="sans-serif">${type.charAt(0)}</text><text x="200" y="340" text-anchor="middle" fill="white" font-size="18" font-weight="700" font-family="sans-serif">${type}</text>`);
}

/* ── Service card images ── */
export function serviceImage(index) {
  const icons = ['&#x1F3D7;','&#x1F477;','&#x1F69C;','&#x1F3E2;','&#x2708;','&#x1F4CB;','&#x1F393;','&#x1F91D;'];
  const labels = ['Recruitment','Manpower Supply','Logistics','Placement','Travel','Paperwork','Training','Partnership'];
  const icon = icons[index] || '&#x1F4BC;';
  const label = labels[index] || 'Service';
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="url(#sg${index})"/><defs><linearGradient id="sg${index}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF1654"/><stop offset="100%" style="stop-color:#D60046"/></linearGradient></defs><circle cx="200" cy="120" r="60" fill="white" opacity="0.15"/><text x="200" y="140" text-anchor="middle" fill="white" font-size="56">${icon}</text><text x="200" y="240" text-anchor="middle" fill="white" font-size="20" font-weight="800" font-family="sans-serif">${label}</text></svg>`);
}

export default { heroImage, aboutImage, countryImage, avatarImage, galleryImage, serviceImage };