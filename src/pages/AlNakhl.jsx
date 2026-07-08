import { useState, useEffect, useRef } from 'react';

/* ─── Config ─── */
const AGENCY = {
  name: 'Al-Nakhl Enterprises',
  short: 'Al-Nakhl',
  initials: 'AN',
  license: '2213/LHR',
  tagline: 'Recruitment Agency',
  phone: '0303-6133350',
  phoneLink: '923036133350',
  landline: '052-3512084',
  email: 'info@alnakhl.pk',
  address: 'House No. 2, St Mary Colony, Gulberg-III, Lahore, Punjab',
  addressMap: 'St+Mary+Colony+Gulberg+III+Lahore',
  office: 'Gulberg-III, Lahore',
  founded: 2015,
  placed: 2800,
  countries: 9,
};

const NAV_LINKS = [
  { label: 'Home', href: '#al-home' },
  { label: 'About', href: '#al-about' },
  { label: 'Services', href: '#al-services' },
  { label: 'Countries', href: '#al-countries' },
  { label: 'Process', href: '#al-process' },
  { label: 'FAQs', href: '#al-faqs' },
  { label: 'Contact', href: '#al-contact' },
];

/* ─── Hooks ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); if (!options.repeat) obs.unobserve(el); } },
      { threshold: options.threshold || 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options.threshold, options.repeat]);
  return [ref, isInView];
}

function useScrollSpy(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const handle = () => {
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, [ids]);
  return active;
}

/* ─── Pill Badge ─── */
const BADGE_COLORS = [
  'bg-[#1B4965] text-white',
  'bg-[#5FA8D3] text-white',
  'bg-[#FF6B35] text-white',
  'bg-[#0B3954] text-white',
  'bg-[#C9CCD5] text-[#0B2436]',
];
function PillBadge({ text, index = 0 }) {
  return (
    <span className={`inline-block ${BADGE_COLORS[index % BADGE_COLORS.length]} text-[10px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-sm`}>
      {text}
    </span>
  );
}

/* ─── LazyImage ─── */
const FALLBACK_BG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23F2F6F9%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23C9CCD5%22%2F%3E%3C%2Fsvg%3E';
function LazyImage({ src, alt, className = '', containerClass = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${containerClass}`}>
      {!loaded && !failed && <div className="absolute inset-0 bg-[#C9CCD5]/30 animate-pulse" />}
      <img
        src={failed ? FALLBACK_BG : src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => { setFailed(true); setLoaded(true); }}
        loading="lazy"
      />
    </div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ────────────────────────────────────────────────
   SECTION: Marquee Bar
   ──────────────────────────────────────────────── */
function MarqueeBar() {
  return (
    <div className="bg-[#1B4965] border-y border-[#5FA8D3]/20 overflow-hidden">
      <div className="flex marquee-animate whitespace-nowrap py-2.5 lg:py-3">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8 shrink-0">
            <span className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold text-white">
              <span>🔥</span> Licensed OEP 2213/LHR <span>🔥</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-[#5FA8D3]/60 shrink-0" />
            <span className="inline-flex items-center gap-1 text-sm lg:text-base font-medium text-[#C9CCD5]">
              <i className="fas fa-briefcase text-[#FF6B35] text-xs" /> Hiring for Saudi Arabia • UAE • Qatar • Oman • Germany • Poland • Italy • Greece • Malaysia
            </span>
            <span className="w-1 h-1 rounded-full bg-[#5FA8D3]/60 shrink-0" />
            <span className="inline-flex items-center gap-1 text-sm lg:text-base font-semibold text-[#FF6B35]">
              <i className="fas fa-certificate text-xs" /> Govt. Licensed OEP 2213/LHR
            </span>
            <span className="w-1 h-1 rounded-full bg-[#5FA8D3]/60 shrink-0" />
            <span className="inline-flex items-center gap-1 text-sm lg:text-base font-medium text-[#C9CCD5]">
              <i className="fas fa-location-dot text-[#FF6B35] text-xs" /> Gulberg-III, Lahore
            </span>
            <span className="w-1 h-1 rounded-full bg-[#5FA8D3]/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Navbar
   ──────────────────────────────────────────────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(['al-home', 'al-about', 'al-services', 'al-countries', 'al-process', 'al-faqs', 'al-contact']);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F2F6F9]/95 backdrop-blur-md shadow-md' : 'bg-[#F2F6F9]/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#al-home" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-[#1B4965] to-[#5FA8D3] flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-sm">
              {AGENCY.initials}
            </div>
            <div className="flex flex-col">
              <span className="text-[#0B2436] font-bold text-base lg:text-lg leading-tight">
                Al-Nakhl
              </span>
              <span className="text-[10px] lg:text-xs text-[#1B4965] font-medium tracking-wider -mt-0.5">
                {AGENCY.tagline.toUpperCase()}
              </span>
            </div>
          </a>

          {/* License Badge */}
          <div className="hidden md:flex items-center ml-4">
            <span className="bg-[#FF6B35] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
              License {AGENCY.license}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 ml-6">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-[#1B4965]'
                      : 'text-[#0B2436]/70 hover:text-[#1B4965] hover:bg-[#1B4965]/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#FF6B35] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href={`https://wa.me/${AGENCY.phoneLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex ml-4 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
          >
            <i className="fab fa-whatsapp mr-2" />
            Apply Now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden ml-auto p-2 rounded-lg hover:bg-[#1B4965]/5 text-[#0B2436]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4 pt-2 bg-[#F2F6F9]/95 backdrop-blur-md border-t border-[#C9CCD5]/40">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-[#0B2436]/80 hover:text-[#1B4965] hover:bg-[#1B4965]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3 px-4">
            <span className="bg-[#FF6B35] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
              License {AGENCY.license}
            </span>
          </div>
          <a
            href={`https://wa.me/${AGENCY.phoneLink}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 mx-4 block text-center bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all"
          >
            <i className="fab fa-whatsapp mr-2" />
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Quick Apply
   ──────────────────────────────────────────────── */
const JOB_CATEGORIES = [
  'Construction Worker', 'Driver', 'Electrician', 'Factory Worker',
  'Healthcare Worker', 'Hospitality Staff', 'IT Professional',
  'Plumber', 'Security Guard', 'Technician', 'Other',
];

function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !category) return;
    const text = `Hello Al-Nakhl Enterprises! I'd like to apply for a job.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AJob Category: ${encodeURIComponent(category)}%0A%0APlease guide me about the process.`;
    window.open(`https://wa.me/${AGENCY.phoneLink}?text=${text}`, '_blank');
    setName(''); setPhone(''); setCategory(''); setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      <div className={`overflow-hidden quick-apply-expand ${open ? 'max-h-[400px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`} style={{ transformOrigin: 'bottom right' }}>
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-[280px] sm:w-[320px] border border-[#FF6B35]/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-[#0B2436] text-sm flex items-center gap-2">
              <i className="fas fa-bolt text-[#FF6B35]" />
              Quick Apply
            </h4>
            <button onClick={() => setOpen(false)} className="text-[#0B2436]/40 hover:text-[#FF6B35] text-sm">
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none bg-[#F2F6F9] text-[#0B2436]" />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none bg-[#F2F6F9] text-[#0B2436]" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none bg-[#F2F6F9] text-[#0B2436]">
              <option value="">Select Job Category</option>
              {JOB_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="submit" className="w-full bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold py-2.5 rounded-xl text-sm transition-all shadow-md">
              <i className="fab fa-whatsapp mr-2" /> Apply via WhatsApp
            </button>
          </form>
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-105 ${
          open ? 'bg-[#1B4965] rotate-45' : 'bg-[#FF6B35]'
        }`}
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bolt'} transition-transform`} />
      </button>
    </div>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Hero
   ──────────────────────────────────────────────── */
function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="al-home" className="relative min-h-screen bg-[#F2F6F9] pt-16 lg:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
          {/* Left Column */}
          <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0" ref={ref}>
            <div className="w-full max-w-xl">
              <div className={`mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <PillBadge text={`Govt. Licensed OEP ${AGENCY.license}`} index={2} />
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0B2436] leading-[1.1] mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="block">Build.</span>
                <span className="block text-[#1B4965]">Grow.</span>
                <span className="block bg-gradient-to-r from-[#1B4965] to-[#5FA8D3] bg-clip-text text-transparent">
                  Succeed.
                </span>
              </h1>

              <p className={`text-base sm:text-lg lg:text-xl text-[#0B2436]/70 leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Connecting the workers of <strong className="text-[#1B4965]">Lahore</strong> and <strong className="text-[#1B4965]">Punjab</strong> to trusted employers worldwide — with government-licensed integrity from our office in <strong className="text-[#1B4965]">Gulberg-III</strong>.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-3 sm:gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a
                  href={`https://wa.me/${AGENCY.phoneLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <i className="fab fa-whatsapp" />
                  Apply Now
                </a>
                <a
                  href={`https://wa.me/${AGENCY.phoneLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#1B4965]/30 hover:border-[#1B4965] text-[#1B4965] hover:text-[#1B4965] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust indicators */}
              <div className={`flex items-center gap-6 mt-10 pt-8 border-t border-[#C9CCD5]/60 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-building text-[#5FA8D3] text-sm" />
                  <span className="text-xs text-[#0B2436]/60">{AGENCY.office}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-globe text-[#FF6B35] text-sm" />
                  <span className="text-xs text-[#0B2436]/60">{AGENCY.countries}+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-[#1B4965] text-sm" />
                  <span className="text-xs text-[#0B2436]/60">100% Govt. Licensed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block relative w-[45%] xl:w-[42%] shrink-0 overflow-hidden">
            <svg
              className="absolute left-0 top-0 h-full z-10"
              style={{ width: '120px' }}
              preserveAspectRatio="none"
              viewBox="0 0 120 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M120,0 C60,120 20,250 100,380 C180,510 0,640 100,770 C180,900 40,950 120,1000 L0,1000 L0,0 Z" fill="#F2F6F9" />
            </svg>
            <img
              src={imgError ? FALLBACK_BG : "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&q=80"}
              alt="Professional opportunities abroad"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={() => setImgError(true)}
              onLoad={() => setImgLoaded(true)}
              loading="eager"
            />
            {/* Floating Stat Chips */}
            <div className="absolute top-[15%] right-8 z-20 float-animate">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#FF6B35]">
                <div className="text-[#1B4965] font-black text-xl">{AGENCY.placed}+</div>
                <div className="text-[10px] text-[#0B2436]/60 font-medium">Workers Placed</div>
              </div>
            </div>
            <div className="absolute bottom-[25%] right-8 z-20 float-animate" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#5FA8D3]">
                <div className="text-[#5FA8D3] font-black text-xl">{AGENCY.countries}+</div>
                <div className="text-[10px] text-[#0B2436]/60 font-medium">Countries</div>
              </div>
            </div>
            <div className="absolute bottom-[10%] left-[15%] z-20 float-animate" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 border-l-4 border-[#1B4965]">
                <div className="text-[#1B4965] font-black text-xl">100%</div>
                <div className="text-[10px] text-[#0B2436]/60 font-medium">Govt. Licensed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F2F6F9] to-transparent pointer-events-none" />
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Stats Band
   ──────────────────────────────────────────────── */
const STATS = [
  { icon: 'fa-users', end: 2800, suffix: '+', label: 'Workers Placed' },
  { icon: 'fa-globe', end: 9, suffix: '+', label: 'Countries' },
  { icon: 'fa-certificate', end: 100, suffix: '%', label: 'Govt. Licensed' },
  { icon: 'fa-handshake', end: 98, suffix: '%', label: 'Success Rate' },
];

function StatsBand() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section className="bg-[#1B4965] py-8 sm:py-10 lg:py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm mb-3">
                <i className={`fas ${stat.icon} text-xl sm:text-2xl text-[#FF6B35]`} />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#C9CCD5] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: About
   ──────────────────────────────────────────────── */
const ABOUT_STATS = [
  { icon: 'fa-calendar-check', number: '10+', label: 'Years Experience', color: 'bg-[#1B4965] text-white' },
  { icon: 'fa-building', number: '150+', label: 'Partner Employers', color: 'bg-[#5FA8D3] text-white' },
  { icon: 'fa-passport', number: '40+', label: 'Visa Categories', color: 'bg-[#FF6B35] text-white' },
  { icon: 'fa-star', number: '98%', label: 'Success Rate', color: 'bg-[#0B3954] text-white' },
];

function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section id="al-about" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="ABOUT US" index={1} />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <LazyImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Al-Nakhl Enterprises team"
                className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                containerClass="w-full"
              />
            </div>
            <div className={`absolute -bottom-4 -right-4 bg-[#FF6B35] text-white font-bold px-5 py-3 rounded-2xl shadow-xl rotate-3 transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="text-xs opacity-80 font-medium">License No.</div>
              <div className="text-lg">{AGENCY.license}</div>
            </div>
          </div>
          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-[#1B4965]">Global Employment</span>
            </h2>
            <div className="space-y-4 text-[#0B2436]/70 leading-relaxed text-base sm:text-lg">
              <p>
                Based in the heart of <strong className="text-[#0B2436]">Gulberg-III, Lahore</strong>, Al-Nakhl Enterprises is a government-licensed Overseas Employment Promoter (OEP) bearing License No. <strong className="text-[#FF6B35]">{AGENCY.license}</strong>. We are dedicated to connecting the talented workforce of Lahore and Punjab with reputable employers across the globe.
              </p>
              <p>
                From construction and healthcare to IT and hospitality, we handle every step of the recruitment journey — from documentation and visa processing to pre-departure orientation and travel support. Our mission is simple: turn your ambition into action and help you build a brighter future abroad.
              </p>
            </div>
            {/* Stat Circles */}
            <div className="flex flex-wrap gap-4 pt-4">
              {ABOUT_STATS.map((stat, i) => (
                <div key={stat.label} className={`flex items-center gap-3 ${stat.color} px-4 py-3 rounded-full shadow-md transition-all duration-700`} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className={`fas ${stat.icon} text-sm`} />
                  </div>
                  <div className="leading-tight">
                    <div className="font-black text-sm">{stat.number}</div>
                    <div className="text-[10px] opacity-80 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Services
   ──────────────────────────────────────────────── */
const SERVICES = [
  { id: 'placement', icon: 'fa-briefcase', title: 'Overseas Job Placement', description: 'End-to-end recruitment services connecting skilled and unskilled workers with verified employers across Saudi Arabia, UAE, Qatar, Europe, and Asia. We match your qualifications with the right opportunities.' },
  { id: 'visa', icon: 'fa-passport', title: 'Visa Processing', description: 'Complete visa application assistance including document verification, embassy submissions, and follow-ups. We ensure a smooth, hassle-free visa process for all destination countries.' },
  { id: 'attestation', icon: 'fa-file-signature', title: 'Document Attestation', description: 'Professional attestation of educational certificates, experience letters, and personal documents from all relevant government and embassy authorities.' },
  { id: 'medical', icon: 'fa-stethoscope', title: 'Medical & Trade Tests', description: 'We coordinate medical examinations at approved centers and arrange trade tests to verify your skills, ensuring you meet international employer standards.' },
  { id: 'orientation', icon: 'fa-chalkboard-user', title: 'Pre-Departure Orientation', description: 'Comprehensive orientation sessions covering cultural awareness, labor laws, rights and responsibilities, and practical tips to help you succeed in your new country.' },
  { id: 'travel', icon: 'fa-plane', title: 'Air Ticketing & Travel', description: 'Affordable air ticketing services with travel assistance, including airport transfers, accommodation coordination, and 24/7 support during your journey.' },
  { id: 'verification', icon: 'fa-shield-halved', title: 'Employer Verification', description: 'Thorough verification of prospective employers including company registration, labor contract validity, and working conditions to ensure your safety and rights.' },
  { id: 'manpower', icon: 'fa-people-group', title: 'Manpower Supply', description: 'Bulk recruitment solutions for international employers — from construction workers and drivers to healthcare professionals and IT specialists.' },
];

const SERVICE_COLORS = [
  'bg-[#1B4965] text-white',
  'bg-[#5FA8D3] text-white',
  'bg-[#FF6B35] text-white',
  'bg-[#0B3954] text-white',
  'bg-[#1B4965] text-white',
  'bg-[#5FA8D3] text-white',
  'bg-[#FF6B35] text-white',
  'bg-[#0B3954] text-white',
];

function Services() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <section id="al-services" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="OUR SERVICES" index={2} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Comprehensive{' '}
            <span className="text-[#1B4965]">Recruitment Services</span>
          </h2>
          <p className="text-[#0B2436]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            From first consultation to final departure — we handle every step of your overseas employment journey.
          </p>
        </div>
        {/* Masonry solid-color cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={`${SERVICE_COLORS[i % SERVICE_COLORS.length]} rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <i className={`fas ${service.icon} text-lg`} />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{service.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Country Guide
   ──────────────────────────────────────────────── */
const COUNTRIES = [
  { name: 'Saudi Arabia', flag: '🇸🇦', roles: ['Construction', 'Healthcare', 'Drivers', 'Hospitality'], image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80' },
  { name: 'UAE', flag: '🇦🇪', roles: ['Construction', 'Hospitality', 'Drivers', 'Retail'], image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
  { name: 'Qatar', flag: '🇶🇦', roles: ['Construction', 'Hospitality', 'Security', 'Technicians'], image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { name: 'Oman', flag: '🇴🇲', roles: ['Construction', 'Drivers', 'Hospitality', 'Oil & Gas'], image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=80' },
  { name: 'Germany', flag: '🇩🇪', roles: ['Healthcare', 'IT', 'Engineers', 'Manufacturing'], image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80' },
  { name: 'Poland', flag: '🇵🇱', roles: ['Manufacturing', 'Logistics', 'Construction', 'Factory'], image: 'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=800&q=80' },
  { name: 'Italy', flag: '🇮🇹', roles: ['Manufacturing', 'Hospitality', 'Caregivers', 'Construction'], image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&q=80' },
  { name: 'Greece', flag: '🇬🇷', roles: ['Hospitality', 'Agriculture', 'Healthcare', 'Construction'], image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' },
  { name: 'Malaysia', flag: '🇲🇾', roles: ['Manufacturing', 'IT', 'Hospitality', 'Healthcare'], image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80' },
];

const CHIP_COLORS = [
  'bg-[#1B4965] text-white',
  'bg-[#5FA8D3] text-white',
  'bg-[#FF6B35] text-white',
  'bg-[#0B3954] text-white',
  'bg-[#1B4965] text-white',
];

function CountryGuide() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <section id="al-countries" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="DESTINATIONS" index={0} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Where We Take{' '}
            <span className="text-[#1B4965]">You</span>
          </h2>
          <p className="text-[#0B2436]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            From the Gulf to Europe and Asia — we open doors to the world's most in-demand job markets.
          </p>
        </div>
        {/* Country Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {COUNTRIES.map((country, i) => (
            <div
              key={country.name}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-40 sm:h-44 overflow-hidden relative">
                <LazyImage
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  containerClass="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl drop-shadow-lg">{country.flag}</span>
                  <span className="text-white font-bold text-sm drop-shadow-lg">{country.name}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5">
                  {country.roles.map((role) => (
                    <span key={role} className="text-[10px] font-medium bg-[#F2F6F9] text-[#0B2436]/70 px-2.5 py-1 rounded-full">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Country Chip Grid */}
        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-[#0B2436]/50 mb-4">ALL DESTINATIONS</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {COUNTRIES.map((country, i) => (
              <span key={country.name} className={`${CHIP_COLORS[i % CHIP_COLORS.length]} px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-1.5`}>
                <span>{country.flag}</span> {country.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Process
   ──────────────────────────────────────────────── */
const STEPS = [
  { step: 1, icon: 'fa-clipboard-list', title: 'Register & Consult', subtitle: 'Walk in or call us', color: 'bg-[#1B4965] text-white', border: 'border-[#1B4965]' },
  { step: 2, icon: 'fa-file-lines', title: 'Documents & Visa', subtitle: 'We handle the paperwork', color: 'bg-[#5FA8D3] text-white', border: 'border-[#5FA8D3]' },
  { step: 3, icon: 'fa-stethoscope', title: 'Medical & Trade Test', subtitle: 'Clearance & certification', color: 'bg-[#FF6B35] text-white', border: 'border-[#FF6B35]' },
  { step: 4, icon: 'fa-check-double', title: 'Employer Confirmation', subtitle: 'Contract & final approval', color: 'bg-[#0B3954] text-white', border: 'border-[#0B3954]' },
  { step: 5, icon: 'fa-plane-departure', title: 'Ticketing & Departure', subtitle: 'Fly to your new job', color: 'bg-[#1B4965] text-white', border: 'border-[#1B4965]' },
];

function Process() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section id="al-process" className="relative overflow-hidden" ref={ref}>
      <div className="bg-gradient-to-r from-[#1B4965] via-[#0B3954] to-[#1B4965] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <PillBadge text="HOW IT WORKS" index={3} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
              Your Journey in{' '}
              <span className="text-[#5FA8D3]">Five Steps</span>
            </h2>
            <p className="text-[#C9CCD5] mt-3 max-w-2xl mx-auto text-base sm:text-lg">
              From registration to departure — we're with you every step of the way.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:-space-x-4 justify-center items-stretch">
            {STEPS.map((step, i) => (
              <div key={step.step} className={`ticket-stub relative flex-1 min-w-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 ${step.border} h-full`}>
                  <div className={`${step.color} px-4 py-2 flex items-center justify-between text-xs font-bold`}>
                    <span className="flex items-center gap-1.5"><i className="fas fa-ticket"></i> BOARDING PASS</span>
                    <span className="opacity-80">STEP {step.step}/5</span>
                  </div>
                  <div className="h-2 relative overflow-hidden">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #C9CCD5 2px, transparent 2px)', backgroundSize: '10px 10px', backgroundRepeat: 'repeat-x' }} />
                  </div>
                  <div className="p-5 text-center">
                    <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl ${step.color} flex items-center justify-center shadow-md`}>
                      <i className={`fas ${step.icon} text-xl`} />
                    </div>
                    <h3 className="text-sm font-black text-[#0B2436]">{step.title}</h3>
                    <p className="text-[10px] sm:text-xs text-[#0B2436]/50 mt-1 font-medium">{step.subtitle}</p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#5FA8D3]/60 text-lg">
                    <i className="fas fa-chevron-right" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Testimonials
   ──────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Ahmed Raza',
    destination: 'Saudi Arabia',
    role: 'Construction Supervisor',
    quote: 'Al-Nakhl turned my life around. Within weeks of registering, I was placed with a top construction firm in Riyadh. The team guided me through every document, every test, and every step. I\'m now earning three times what I was in Pakistan. This agency is the real deal.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Fatima Noreen',
    destination: 'Germany',
    role: 'Healthcare Assistant',
    quote: 'I never thought I\'d make it to Europe. Al-Nakhl made it happen. From visa processing to pre-departure orientation, they were with me at every step. The team in Gulberg-III is incredibly professional and supportive. I\'ve already recommended them to three of my cousins!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Usman Khalid',
    destination: 'UAE',
    role: 'Heavy Driver',
    quote: 'I\'d been trying to go to the UAE for years with no luck. Al-Nakhl got me there in under two months. They handled everything — my visa, attestation, medical tests, even my flight. If you\'re in Lahore and looking to work abroad, just go to St Mary Colony, Gulberg-III. Trust me.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    name: 'Saima Bibi',
    destination: 'Qatar',
    role: 'Hospitality Staff',
    quote: 'As a woman looking to work abroad, I was nervous about the process. Al-Nakhl made me feel safe and confident. They connected me with a reputable hotel in Doha, and I\'ve been thriving there for over a year now. Forever grateful to the team at Al-Nakhl Enterprises!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => { setCurrent((prev) => (prev + 1) % TESTIMONIALS.length); setFading(false); }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[current];
  const goTo = (index) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => { setCurrent(index); setFading(false); }, 400);
  };

  return (
    <section id="al-testimonials" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="SUCCESS STORIES" index={4} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Real Stories from{' '}
            <span className="text-[#1B4965]">Real People</span>
          </h2>
        </div>
        <div className="relative text-center">
          <div className="text-6xl sm:text-8xl lg:text-9xl text-[#C9CCD5]/40 font-serif leading-none mb-4 select-none">&ldquo;</div>
          <div className={`transition-all duration-500 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#0B2436]/80 leading-relaxed font-medium max-w-2xl mx-auto mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#5FA8D3] shadow-md shrink-0">
                <LazyImage src={t.avatar} alt={t.name} className="w-full h-full object-cover" containerClass="w-full h-full" />
              </div>
              <div className="text-left">
                <div className="font-bold text-[#0B2436]">{t.name}</div>
                <div className="text-sm text-[#0B2436]/60">{t.role} — {t.destination}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 text-[#FF6B35]">
              {[...Array(5)].map((_, i) => <i key={i} className={`fas fa-star ${i < t.rating ? 'opacity-100' : 'opacity-20'}`} />)}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2.5 bg-[#1B4965]' : 'w-2.5 h-2.5 bg-[#C9CCD5] hover:bg-[#5FA8D3]'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Gallery
   ──────────────────────────────────────────────── */
const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=600&q=80', alt: 'Office team meeting', caption: 'Our Team at Work' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80', alt: 'Candidates departing', caption: 'Successful Departures' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', alt: 'Training session', caption: 'Pre-Departure Orientation' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80', alt: 'Office facade', caption: 'Our Office' },
];

function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section className="bg-[#F2F6F9] py-12 sm:py-16 lg:py-20 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <div key={photo.src} className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="aspect-[4/3]">
                <LazyImage src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" containerClass="w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="text-white text-xs sm:text-sm font-semibold">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: CTA Band
   ──────────────────────────────────────────────── */
function CtaBand() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="bg-gradient-to-r from-[#1B4965] via-[#0B3954] to-[#1B4965] py-14 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
              Your Future{' '}
              <span className="text-[#5FA8D3]">Starts Today.</span>
            </h2>
            <p className="text-[#C9CCD5] text-base sm:text-lg lg:text-xl max-w-xl mx-auto mb-8">
              Don't wait for opportunity — create it. Take the first step toward a brighter future abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${AGENCY.phoneLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
              <a
                href={`https://wa.me/${AGENCY.phoneLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all backdrop-blur-sm border border-white/20"
              >
                <i className="fab fa-whatsapp" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Contact
   ──────────────────────────────────────────────── */
const CONTACT_CATEGORIES = [
  'Construction Worker', 'Driver', 'Electrician', 'Factory Worker',
  'Healthcare Worker', 'Hospitality Staff', 'IT Professional',
  'Plumber', 'Security Guard', 'Technician', 'Other',
];

function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, category, message } = form;
    const text = `Hello Al-Nakhl Enterprises! I'd like to get in touch.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AJob Category: ${encodeURIComponent(category)}%0AMessage: ${encodeURIComponent(message)}`;
    const waUrl = `https://wa.me/${AGENCY.phoneLink}?text=${text}`;
    const mailUrl = `mailto:${AGENCY.email}?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCategory: ${category}\n\n${message}`)}`;
    const win = window.open(waUrl, '_blank');
    if (!win) window.location.href = mailUrl;
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', category: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="al-contact" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="GET IN TOUCH" index={1} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Let's Start Your{' '}
            <span className="text-[#5FA8D3]">Journey</span>
          </h2>
          <p className="text-[#0B2436]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to take the leap? Reach out to us and we'll guide you every step of the way.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Form */}
          <div className={`bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-[#C9CCD5]/30 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#1B4965] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-2xl text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0B2436] mb-2">Thank You!</h3>
                <p className="text-[#0B2436]/60">Your inquiry has been submitted. We'll reach out to you shortly on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]" />
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]" />
                </div>
                <input type="email" name="email" placeholder="Email Address (optional)" value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]" />
                <select name="category" value={form.category} onChange={handleChange} required
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]">
                  <option value="">Select Job Category</option>
                  {CONTACT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={4}
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436] resize-none" />
                <button type="submit"
                  className="w-full bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
                  <i className="fab fa-whatsapp" /> Send via WhatsApp
                </button>
                <p className="text-[10px] text-[#0B2436]/40 text-center">
                  By submitting, you agree to be contacted via WhatsApp. We'll respond within 24 hours.
                </p>
              </form>
            )}
            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <a href={`https://wa.me/${AGENCY.phoneLink}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#0B2436]/70 hover:text-[#1B4965] transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#1B4965]/10 flex items-center justify-center shrink-0">
                  <i className="fab fa-whatsapp text-[#1B4965] text-xs" />
                </div>
                <span>{AGENCY.phone}</span>
              </a>
              <a href={`tel:${AGENCY.landline}`} className="flex items-center gap-3 text-sm text-[#0B2436]/70 hover:text-[#1B4965] transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#5FA8D3]/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone text-[#5FA8D3] text-xs" />
                </div>
                <span>{AGENCY.landline}</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-[#0B2436]/70">
                <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-location-dot text-[#FF6B35] text-xs" />
                </div>
                <span className="text-xs sm:text-sm">{AGENCY.address}</span>
              </div>
            </div>
          </div>
          {/* Right - Map */}
          <div className={`rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] lg:h-full min-h-[400px] border border-[#C9CCD5]/30 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <iframe
              title="Al-Nakhl Enterprises Location"
              src={`https://www.google.com/maps?q=${AGENCY.addressMap}&hl=en&z=16&output=embed`}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: FAQ
   ──────────────────────────────────────────────── */
const FAQS = [
  { q: 'Is Al-Nakhl Enterprises government licensed?', a: 'Yes, absolutely. Al-Nakhl Enterprises is a fully government-licensed Overseas Employment Promoter (OEP) bearing License No. 2213/LHR, issued by the Government of Pakistan. We operate with full regulatory compliance and transparency.' },
  { q: 'Which countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Italy, Greece, Malaysia, and other destinations. We continuously expand our network to include new countries and opportunities.' },
  { q: 'Where is your office located?', a: 'Our office is located at House No. 2, St Mary Colony, Gulberg-III, Lahore, Punjab. We are easily accessible from all parts of Lahore.' },
  { q: 'What documents are required to register?', a: 'You typically need your CNIC (original & copy), passport (valid for at least 2 years), passport-sized photographs, educational certificates, and any relevant experience letters. Our team will guide you through the complete checklist.' },
  { q: 'How long does visa processing take?', a: 'Processing times vary by country and visa type. Typically, Gulf country visas take 2–6 weeks, while European visas may take 2–4 months. We keep you updated at every stage of the process.' },
  { q: 'Are there any registration fees?', a: 'We offer an initial free consultation to discuss your options. Service fees are fully transparent and communicated upfront — no hidden charges. We believe in honest, upfront dealings with every candidate.' },
];

const ACCENT_COLORS = [
  'border-[#1B4965]', 'border-[#5FA8D3]', 'border-[#FF6B35]', 'border-[#0B3954]', 'border-[#1B4965]', 'border-[#5FA8D3]',
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="al-faqs" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="FAQS" index={2} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Got Questions?{' '}
            <span className="text-[#1B4965]">We've Got Answers</span>
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${ACCENT_COLORS[i % ACCENT_COLORS.length]} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <button onClick={() => toggle(i)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left">
                <span className="text-sm sm:text-base font-bold text-[#0B2436] pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-[#F2F6F9] flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down text-xs text-[#1B4965]" />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-[#0B2436]/70 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Section Divider
   ──────────────────────────────────────────────── */
const DIVIDER_VARIANTS = {
  primary: { fill: '#1B4965' },
  secondary: { fill: '#5FA8D3' },
  accent: { fill: '#C9CCD5' },
  cta: { fill: '#FF6B35' },
  highlight: { fill: '#0B3954' },
};

function SectionDivider({ variant = 'accent', flip = false }) {
  const colors = DIVIDER_VARIANTS[variant] || DIVIDER_VARIANTS.primary;
  return (
    <div className="relative w-full h-12 sm:h-16 lg:h-20 overflow-hidden -mb-1">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={`absolute bottom-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,32 C360,96 1080,0 1440,64 L1440,120 L0,120 Z" fill={colors.fill} opacity="1" />
        <path d="M0,48 C240,96 1200,16 1440,80 L1440,120 L0,120 Z" fill={colors.fill} opacity="0.3" />
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────
   SECTION: Footer
   ──────────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'Home', href: '#al-home' },
  { label: 'About', href: '#al-about' },
  { label: 'Services', href: '#al-services' },
  { label: 'Countries', href: '#al-countries' },
  { label: 'Process', href: '#al-process' },
  { label: 'FAQs', href: '#al-faqs' },
  { label: 'Contact', href: '#al-contact' },
];

const DESTINATIONS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany', 'Poland', 'Italy', 'Greece', 'Malaysia',
];

function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <footer className="bg-[#0B3954] text-white" ref={ref}>
      {/* Wavy top divider */}
      <div className="relative w-full h-12 sm:h-16 overflow-hidden">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F2F6F9" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold">
                {AGENCY.initials}
              </div>
              <div>
                <div className="font-bold text-lg text-white">{AGENCY.name}</div>
                <div className="text-[10px] text-white/60 font-medium tracking-wider">{AGENCY.tagline.toUpperCase()}</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Govt. Licensed OEP — License No. {AGENCY.license}. Connecting Pakistan's workforce to global opportunities since {AGENCY.founded}.
            </p>
            <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
              <i className="fas fa-certificate mr-1.5 text-[#5FA8D3]" />
              License {AGENCY.license}
            </div>
          </div>
          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#5FA8D3] text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[10px] text-[#5FA8D3]/60" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Destinations */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#5FA8D3] text-sm mb-4 uppercase tracking-wider">Destinations</h4>
            <ul className="space-y-2.5">
              {DESTINATIONS.map((dest) => (
                <li key={dest} className="text-sm text-white/70 flex items-center gap-2">
                  <i className="fas fa-globe text-[10px] text-[#5FA8D3]/60" />
                  {dest}
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#5FA8D3] text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`https://wa.me/${AGENCY.phoneLink}`} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fab fa-whatsapp text-[#5FA8D3] text-xs w-4" />
                  {AGENCY.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${AGENCY.landline}`} className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-phone text-[#5FA8D3] text-xs w-4" />
                  {AGENCY.landline}
                </a>
              </li>
              <li className="text-sm text-white/70 flex items-start gap-2">
                <i className="fas fa-location-dot text-[#5FA8D3] text-xs w-4 mt-0.5" />
                <span>{AGENCY.address}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {AGENCY.name}. All rights reserved. | Govt. Licensed OEP — License No. {AGENCY.license}
          </p>
          <div className="flex items-center gap-3 text-white/30 text-xs">
            <span className="flex items-center gap-1"><i className="fas fa-shield-alt" /> Licensed</span>
            <span className="flex items-center gap-1"><i className="fas fa-handshake" /> Trusted</span>
            <span className="flex items-center gap-1"><i className="fas fa-bolt" /> Reliable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────────
   MAIN PAGE EXPORT
   ──────────────────────────────────────────────── */
export default function AlNakhl() {
  return (
    <div className="min-h-screen bg-[#F2F6F9] font-jakarta">
      <Navbar />
      <MarqueeBar />
      <QuickApply />

      <Hero />
      <StatsBand />

      <SectionDivider variant="primary" flip />
      <About />
      <SectionDivider variant="secondary" />

      <Services />
      <SectionDivider variant="highlight" flip />

      <CountryGuide />
      <SectionDivider variant="primary" />

      <Process />
      <SectionDivider variant="cta" flip />

      <Testimonials />
      <SectionDivider variant="accent" />

      <Gallery />
      <SectionDivider variant="highlight" flip />

      <CtaBand />
      <SectionDivider variant="secondary" />

      <Contact />
      <SectionDivider variant="primary" flip />

      <Faqs />
      <Footer />
    </div>
  );
}