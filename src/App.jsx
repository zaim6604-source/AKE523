import { useState, useRef, useEffect } from 'react';
import FadeIn from './components/FadeIn';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import QuickApply from './components/QuickApply';
import { countries, services, processSteps, faqs } from './data/countries';
import { jobs, categories, trades, testimonials } from './data/jobs';

/* ========== STATS COUNTER ========== */
function StatCounter({ end, suffix = '' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ========== MODAL ========== */
function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

/* ========== APP ========== */
export default function App() {
  const [countryModal, setCountryModal] = useState(null);
  const [serviceModal, setServiceModal] = useState(null);
  const [jobModal, setJobModal] = useState(null);
  const [testimonialModal, setTestimonialModal] = useState(null);
  const [jobSearch, setJobSearch] = useState('');
  const [jobCategory, setJobCategory] = useState('All');
  const [jobTrade, setJobTrade] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [toast, setToast] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);
  const [eligStep, setEligStep] = useState(1);
  const [elig, setElig] = useState({ trade: '', country: '', name: '', phone: '' });

  const filteredJobs = jobs.filter((j) => {
    if (jobCategory !== 'All' && j.category !== jobCategory) return false;
    if (jobTrade !== 'All' && j.trade !== jobTrade) return false;
    if (jobSearch) {
      const q = jobSearch.toLowerCase();
      return j.role.toLowerCase().includes(q) || j.country.toLowerCase().includes(q) || j.trade.toLowerCase().includes(q);
    }
    return true;
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Contact Form - Al Khaliq Enterprises%0A%0AName: ${contactForm.name}%0APhone: ${contactForm.phone}%0AEmail: ${contactForm.email || 'N/A'}%0ACategory: ${contactForm.category || 'N/A'}%0AMessage: ${contactForm.message || 'N/A'}`);
    window.open(`https://wa.me/923006158784?text=${text}`, '_blank');
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const handleEligSubmit = () => {
    const text = encodeURIComponent(`Eligibility Check - Al Khaliq Enterprises%0A%0ATrade: ${elig.trade}%0ACountry: ${elig.country}%0AName: ${elig.name}%0APhone: ${elig.phone}`);
    window.open(`https://wa.me/923006158784?text=${text}`, '_blank');
    setEligStep(1);
    setElig({ trade: '', country: '', name: '', phone: '' });
  };

  const galleryImages = [
    '/src/assets/images/team.jpg',
    '/src/assets/images/meeting.jpg',
    '/src/assets/images/office.jpg',
    '/src/assets/images/workspace.jpg',
  ];

  const sectionPill = (icon, label) => (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4"
      style={{ backgroundColor: '#FFF0F4', color: '#E0115F' }}>
      <i className={`fa-solid fa-${icon} text-[10px]`} />
      {label}
    </span>
  );

  const applyWhatsApp = (msg) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/923006158784?text=${text}`, '_blank');
  };

  return (
    <div className="font-sans" style={{ backgroundColor: '#FFF0F4', color: '#2E0A1C' }}>
      <Navbar />
      <BackToTop />
      <QuickApply />

      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-white rounded-xl shadow-lg border px-5 py-3 flex items-center gap-3" style={{ borderColor: '#FF5C8A' }}>
          <i className="fa-solid fa-circle-check" style={{ color: '#25D366' }} />
          <span className="text-sm font-medium" style={{ color: '#2E0A1C' }}>Opening WhatsApp...</span>
        </div>
      )}

      {/* ===== MARQUEE ===== */}
      <section className="pt-16">
        <div className="py-2.5 overflow-hidden" style={{ backgroundColor: '#E0115F' }}>
          <div className="flex whitespace-nowrap animate-marquee gap-0">
            <span className="mx-8 text-sm font-medium text-white flex items-center gap-4">
              <i className="fa-solid fa-location-dot" /> Allama Iqbal Road, Sialkot Cantt
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              License 2314/SKT
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Saudi Arabia
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              UAE
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Qatar
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Oman
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Kuwait
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Germany
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Poland
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Romania
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              Malaysia
            </span>
          </div>
        </div>
      </section>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: '#FFF0F4' }}>
        <div className="absolute inset-0">
          <img src="/src/assets/images/hero.jpg" alt="Global opportunities" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(224,17,95,0.92) 0%, rgba(123,45,142,0.88) 50%, rgba(184,0,79,0.85) 100%)' }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFD700' }}>
                  <i className="fa-solid fa-flag-checkered text-[10px]" />
                  Govt. Licensed OEP — License No. 2314/SKT
                </span>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Sialkot's Steady Hand on{' '}
                  <span style={{ color: '#FFD700' }}>Your Move Abroad</span>
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Al Khaliq Enterprises connects local workers to trusted Gulf and European employers — licensed, honest, and complete.
                </p>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a href="https://wa.me/923006158784" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#7B2D8E' }}>
                    <i className="fab fa-whatsapp" /> Apply Now
                  </a>
                  <a href="https://wa.me/923006158784" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 border-2"
                    style={{ borderColor: '#FFD700', color: '#FFD700' }}>
                    <i className="fab fa-whatsapp" /> WhatsApp Us
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={4}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#FFD700' }}>
                    <i className="fa-solid fa-certificate" /> License 2314/SKT
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <i className="fa-solid fa-building-columns" style={{ color: '#FFD700' }} /> Govt. Licensed
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#FFD700' }} /> Allama Iqbal Road, Sialkot Cantt
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right visual */}
            <div className="hidden lg:block relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,92,138,0.3), rgba(224,17,95,0.1))' }} />
                <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl border-4" style={{ borderColor: 'rgba(255,215,0,0.3)' }}>
                  <img src="/src/assets/images/workspace.jpg" alt="Global employment" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg px-3 py-2 z-10 border" style={{ borderColor: 'rgba(224,17,95,0.15)' }}>
                  <div className="text-[10px] font-bold" style={{ color: '#E0115F' }}>License</div>
                  <div className="text-xs font-bold" style={{ color: '#2E0A1C' }}>2314/SKT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section style={{ backgroundColor: '#E0115F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: 5000, label: 'Workers Placed', suffix: '+' },
              { value: 9, label: 'Global Countries', suffix: '' },
              { value: 15, label: 'Years Experience', suffix: '+' },
              { value: 2314, label: 'License', suffix: '/SKT' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <StatCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm sm:text-base font-medium tracking-wide" style={{ color: '#FFD700' }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn>{sectionPill('info-circle', 'WHO WE ARE')}</FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-2">
          <FadeIn delay={1}>
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <img src="/src/assets/images/office.jpg" alt="Al Khaliq Enterprises office" className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
          </FadeIn>
          <FadeIn delay={2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>About Al Khaliq Enterprises</h2>
              <div className="w-16 h-1 mt-4 mb-6" style={{ backgroundColor: '#E0115F' }} />
              <p className="leading-relaxed mb-4" style={{ color: '#2E0A1C' }}>
                Al Khaliq Enterprises is a government-licensed overseas employment promoter (License No. 2314/SKT) based at Allama Iqbal Road, Sialkot Cantt. We have been connecting Pakistani workers with trusted employers across the Gulf and Europe since 2010.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#2E0A1C' }}>
                Our team brings decades of combined experience in international recruitment, visa processing, and manpower placement. We operate in full compliance with Government of Pakistan regulations.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Govt. Licensed 2314/SKT', '100% Transparent', 'No Hidden Fees', 'Verified Employers', 'Safe & Legal', 'Community Trusted'].map((chip) => (
                  <span key={chip} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: '#FFF0F4', color: '#E0115F', border: '1px solid rgba(224,17,95,0.15)' }}>
                    <i className="fas fa-check-circle" style={{ color: '#E0115F' }} /> {chip}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">{sectionPill('concierge-bell', 'OUR SERVICES')}</FadeIn>
          <FadeIn delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>What We Offer</h2>
            <p className="mt-3 text-center max-w-xl mx-auto" style={{ color: '#2E0A1C' }}>Comprehensive employment solutions from initial consultation to departure.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={Math.min(i, 4)}>
                <div className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border cursor-pointer group h-full"
                  style={{ backgroundColor: '#FFF0F4', borderColor: 'rgba(224,17,95,0.1)' }}
                  onClick={() => setServiceModal(i)}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-110" style={{ backgroundColor: s.accent }}>
                    <i className={`fas ${['fa-briefcase','fa-passport','fa-file-contract','fa-stethoscope','fa-graduation-cap','fa-plane','fa-shield-halved','fa-users'][i]} text-lg`} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#2E0A1C' }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#2E0A1C' }}>{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COUNTRIES ===== */}
      <section id="countries" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn className="text-center">{sectionPill('globe', 'DESTINATIONS')}</FadeIn>
        <FadeIn delay={1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Destinations</h2>
          <p className="mt-3 text-center max-w-xl mx-auto" style={{ color: '#2E0A1C' }}>Explore employment opportunities across the Gulf, Europe, and Asia.</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
          {countries.map((c, i) => (
            <FadeIn key={c.slug} delay={Math.min(i, 4)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                style={{ borderColor: 'rgba(224,17,95,0.08)' }}
                onClick={() => setCountryModal(i)}>
                <div className="h-40 overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="text-lg font-bold" style={{ color: '#2E0A1C' }}>{c.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: '#2E0A1C' }}>{c.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.roles.slice(0, 3).map((r) => (
                      <span key={r} className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: '#FFF0F4', color: '#E0115F' }}>{r}</span>
                    ))}
                    <span className="text-xs px-2 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: '#7B2D8E' }}>Learn More</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {countries.map((c, i) => (
            <FadeIn key={c.slug} delay={Math.min(i, 4)}>
              <button onClick={() => setCountryModal(i)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border hover:shadow transition-all text-sm font-medium"
                style={{ borderColor: 'rgba(224,17,95,0.15)', color: '#2E0A1C' }}>
                <span>{c.flag}</span> {c.name}
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== JOBS ===== */}
      <section id="jobs" className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">{sectionPill('briefcase', 'OPEN ROLES')}</FadeIn>
          <FadeIn delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Current Job Openings</h2>
            <p className="mt-3 text-center max-w-xl mx-auto" style={{ color: '#2E0A1C' }}>Browse and filter available positions.</p>
          </FadeIn>

          <div className="max-w-3xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-5 sm:p-6 border" style={{ borderColor: 'rgba(224,17,95,0.08)' }}>
            <div className="relative mb-4">
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-sm" style={{ color: '#E0115F' }} />
              <input type="text" value={jobSearch} onChange={(e) => setJobSearch(e.target.value)}
                placeholder="Search by role, country, or trade..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm outline-none"
                style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }} />
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setJobCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-all"
                  style={{ backgroundColor: jobCategory === cat ? '#E0115F' : 'transparent', color: jobCategory === cat ? 'white' : '#E0115F', borderColor: '#E0115F' }}>{cat}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {trades.map((t) => (
                <button key={t} onClick={() => setJobTrade(t)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-all"
                  style={{ backgroundColor: jobTrade === t ? '#7B2D8E' : 'transparent', color: jobTrade === t ? 'white' : '#2E0A1C', borderColor: '#7B2D8E' }}>{t}</button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {filteredJobs.map((j, i) => (
              <FadeIn key={j.id} delay={Math.min(i, 4)}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all cursor-pointer group"
                  style={{ borderColor: 'rgba(224,17,95,0.08)' }}
                  onClick={() => setJobModal(jobs.indexOf(j))}>
                  <div className="h-40 overflow-hidden">
                    <img src={j.image} alt={j.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-lg">{j.flag}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FFF0F4', color: '#E0115F' }}>{j.country}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(123,45,142,0.1)', color: '#7B2D8E' }}>{j.trade}</span>
                    </div>
                    <h3 className="text-base font-bold mt-2 mb-1" style={{ color: '#2E0A1C' }}>{j.role}</h3>
                    <p className="text-xs" style={{ color: '#2E0A1C' }}>{j.openings} openings &bull; {j.salary}</p>
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all hover:gap-3 text-white" style={{ backgroundColor: '#7B2D8E' }}>
                      View Details <i className="fa-solid fa-arrow-right text-[10px]" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFF0F4' }}>
                <i className="fa-solid fa-search text-2xl" style={{ color: '#E0115F' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E0A1C' }}>No openings found</h3>
              <p className="text-sm" style={{ color: '#2E0A1C' }}>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== ELIGIBILITY WIZARD ===== */}
      <section id="eligibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn className="text-center">{sectionPill('clipboard-check', 'GET STARTED')}</FadeIn>
        <FadeIn delay={1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Check Your Eligibility</h2>
          <p className="mt-3 text-center max-w-xl mx-auto" style={{ color: '#2E0A1C' }}>Answer a few questions and we'll help you find the right opportunity.</p>
        </FadeIn>

        <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border" style={{ borderColor: 'rgba(224,17,95,0.08)' }}>
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex-1">
                <div className="h-2 rounded-full transition-all" style={{ backgroundColor: eligStep >= step ? '#E0115F' : '#FFF0F4' }} />
              </div>
            ))}
          </div>

          {eligStep === 1 && (
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#2E0A1C' }}>Select Your Trade</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Construction', 'Driver', 'Hospitality', 'Healthcare', 'Manufacturing', 'Security', 'Technical', 'General Labour'].map((t) => (
                  <button key={t} onClick={() => { setElig({ ...elig, trade: t }); setEligStep(2); }}
                    className="px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all text-left"
                    style={{ borderColor: elig.trade === t ? '#E0115F' : '#FF5C8A', backgroundColor: elig.trade === t ? '#FFF0F4' : 'white', color: '#2E0A1C' }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {eligStep === 2 && (
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#2E0A1C' }}>Select Your Destination</h3>
              <div className="grid grid-cols-2 gap-3">
                {countries.map((c) => (
                  <button key={c.slug} onClick={() => { setElig({ ...elig, country: c.name }); setEligStep(3); }}
                    className="px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all text-left flex items-center gap-2"
                    style={{ borderColor: elig.country === c.name ? '#E0115F' : '#FF5C8A', backgroundColor: elig.country === c.name ? '#FFF0F4' : 'white', color: '#2E0A1C' }}>
                    <span>{c.flag}</span> {c.name}
                  </button>
                ))}
              </div>
              <button onClick={() => setEligStep(1)} className="mt-4 text-sm font-medium" style={{ color: '#E0115F' }}><i className="fas fa-arrow-left mr-1" /> Back</button>
            </div>
          )}

          {eligStep === 3 && (
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#2E0A1C' }}>Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2E0A1C' }}>Your Name *</label>
                  <input type="text" value={elig.name} onChange={(e) => setElig({ ...elig, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none" style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }} placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2E0A1C' }}>Phone Number *</label>
                  <input type="tel" value={elig.phone} onChange={(e) => setElig({ ...elig, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none" style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }} placeholder="03XX-XXXXXXX" />
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setEligStep(2)} className="px-5 py-3 rounded-full text-sm font-bold border-2" style={{ borderColor: '#E0115F', color: '#E0115F' }}><i className="fas fa-arrow-left mr-1" /> Back</button>
                  <button onClick={() => setEligStep(4)} disabled={!elig.name || !elig.phone}
                    className="flex-1 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg disabled:opacity-50"
                    style={{ backgroundColor: '#7B2D8E' }}>Review <i className="fas fa-arrow-right ml-1" /></button>
                </div>
              </div>
            </div>
          )}

          {eligStep === 4 && (
            <div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#2E0A1C' }}>Review & Submit</h3>
              <div className="space-y-2 mb-6 text-sm" style={{ color: '#2E0A1C' }}>
                <p><strong>Trade:</strong> {elig.trade}</p>
                <p><strong>Destination:</strong> {elig.country}</p>
                <p><strong>Name:</strong> {elig.name}</p>
                <p><strong>Phone:</strong> {elig.phone}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setEligStep(3)} className="px-5 py-3 rounded-full text-sm font-bold border-2" style={{ borderColor: '#E0115F', color: '#E0115F' }}><i className="fas fa-arrow-left mr-1" /> Back</button>
                <button onClick={handleEligSubmit} className="flex-1 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg"
                  style={{ backgroundColor: '#7B2D8E' }}><i className="fab fa-whatsapp mr-1" /> Submit via WhatsApp</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#E0115F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFD700' }}>
              <i className="fa-solid fa-flag-checkered" /> HOW IT WORKS
            </span>
          </FadeIn>
          <FadeIn delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Process</h2>
            <p className="mt-3 text-center max-w-xl mx-auto text-white/70">A straightforward five-step journey from your first enquiry to departure.</p>
          </FadeIn>

          <div className="relative mt-12">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-1 hidden md:block" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <FadeIn key={step.number} delay={Math.min(i, 4)}>
                  <div className="relative md:flex items-center gap-8 justify-center">
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:order-2 md:pl-10'}`}>
                      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white" style={{ backgroundColor: 'rgba(255,215,0,0.3)' }}>{step.number}</div>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-0.5" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn className="text-center">{sectionPill('star', 'SUCCESS STORIES')}</FadeIn>
        <FadeIn delay={1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>What Our Workers Say</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={Math.min(i, 4)}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all cursor-pointer group"
                style={{ borderColor: 'rgba(224,17,95,0.08)' }}
                onClick={() => setTestimonialModal(i)}>
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: '#2E0A1C' }}>{t.name}</h4>
                    <p className="text-xs" style={{ color: '#E0115F' }}>{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => <i key={i} className="fa-solid fa-star text-xs" style={{ color: '#FFD700' }} />)}
                </div>
                <p className="text-sm leading-relaxed line-clamp-3" style={{ color: '#2E0A1C' }}>"{t.text}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">{sectionPill('images', 'OUR WORK')}</FadeIn>
          <FadeIn delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Office & Operations</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} delay={Math.min(i, 4)}>
                <div className="rounded-2xl overflow-hidden shadow-sm cursor-pointer h-40 group" onClick={() => setLightbox(i)}>
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GRADIENT CTA ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4" style={{ background: 'linear-gradient(135deg, #E0115F 0%, #7B2D8E 100%)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-7">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Ready to Work Abroad?
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#FFD700' }}>
              One message is all it takes. Let Al Khaliq Enterprises connect you with verified employers worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="https://wa.me/923006158784" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#FFD700', color: '#2E0A1C' }}>
                <i className="fab fa-whatsapp" /> Apply Now
              </a>
              <a href="https://wa.me/923006158784" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white border-2 border-white/40 transition-all hover:scale-105 hover:bg-white/10">
                <i className="fab fa-whatsapp" /> WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTACT + MAP ===== */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn className="text-center">{sectionPill('phone', 'GET IN TOUCH')}</FadeIn>
        <FadeIn delay={1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Contact Us</h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mt-10">
          <FadeIn>
            <div>
              <h3 className="text-lg font-bold mb-5" style={{ color: '#2E0A1C' }}>Send Us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2E0A1C' }}>Your Name *</label>
                    <input type="text" name="name" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none" style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }} placeholder="Full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2E0A1C' }}>Phone *</label>
                    <input type="tel" name="phone" required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none" style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }} placeholder="03XX-XXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2E0A1C' }}>Email</label>
                  <input type="email" name="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none" style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }} placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2E0A1C' }}>Job Category</label>
                  <select name="category" value={contactForm.category} onChange={(e) => setContactForm({ ...contactForm, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none" style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }}>
                    <option value="">Select category</option>
                    <option>Construction</option><option>Driver</option><option>Hospitality</option><option>Healthcare</option>
                    <option>Manufacturing</option><option>Security</option><option>Technical</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2E0A1C' }}>Message</label>
                  <textarea name="message" rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none resize-none" style={{ borderColor: '#FF5C8A', color: '#2E0A1C' }} placeholder="Tell us about your background..." />
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white"
                  style={{ backgroundColor: '#7B2D8E' }}>
                  <i className="fab fa-whatsapp" /> Send via WhatsApp
                </button>
              </form>
              <p className="text-center sm:text-left mt-4 text-sm" style={{ color: '#2E0A1C' }}>
                Or email: <a href="mailto:info@alkhaliq.pk" style={{ color: '#E0115F' }}>info@alkhaliq.pk</a>
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(224,17,95,0.15)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#2E0A1C' }}>
                  <i className="fa-solid fa-phone" style={{ color: '#E0115F' }} /> Phone
                </h4>
                <p className="text-sm"><a href="tel:0552295171" style={{ color: '#2E0A1C' }}>055-2295171</a></p>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(224,17,95,0.15)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#2E0A1C' }}>
                  <i className="fab fa-whatsapp" style={{ color: '#25D366' }} /> WhatsApp
                </h4>
                <p><a href="https://wa.me/923006158784" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: '#25D366' }}>0300-6158784</a></p>
              </div>
            </FadeIn>
            <FadeIn delay={3}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(224,17,95,0.15)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#2E0A1C' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#E0115F' }} /> Address
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#2E0A1C' }}>Opp. Idrees Hospital, Allama Iqbal Road, Cantt, Sialkot, Punjab</p>
              </div>
            </FadeIn>
            <FadeIn delay={4}>
              <div className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: 'rgba(224,17,95,0.15)' }}>
                <iframe title="Al Khaliq Enterprises Location"
                  src="https://www.google.com/maps?q=32.50904959171349,74.5539071269857&hl=en&z=16&output=embed"
                  width="100%" height="280" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section id="faqs" className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">{sectionPill('circle-question', 'FAQS')}</FadeIn>
          <FadeIn delay={1}>
            <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="text-center mb-10" style={{ color: '#2E0A1C' }}>Quick answers to common questions.</p>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={Math.min(i, 4)}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all" style={{ borderLeft: '4px solid #E0115F' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer bg-transparent border-0">
                    <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: '#2E0A1C' }}>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: '#E0115F' }} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: '#2E0A1C' }}>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ backgroundColor: '#B8004F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>AE</span>
                <span className="font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Al Khaliq Enterprises</span>
              </div>
              <p className="text-sm leading-relaxed text-white/70">Your trusted partner in global employment. Licensed, transparent, and committed to your success.</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(255,215,0,0.2)', color: '#FFD700' }}>License 2314/SKT</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Quick Links</h4>
              <div className="space-y-2.5 text-sm">
                {['Home', 'About', 'Services', 'Countries', 'Jobs', 'Process', 'FAQs', 'Contact'].map((l) => (
                  <a key={l} href={`#${l.toLowerCase() === 'home' ? '' : l.toLowerCase()}`} className="block text-white/70 hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Destinations</h4>
              <div className="space-y-2.5 text-sm">
                {countries.map((c) => (
                  <a key={c.slug} href="#countries" className="block text-white/70 hover:text-white transition-colors">{c.flag} {c.name}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Contact</h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/70"><i className="fa-solid fa-phone mr-2" style={{ color: '#FFD700' }} /> 055-2295171</p>
                <p className="text-white/70"><i className="fab fa-whatsapp mr-2" style={{ color: '#25D366' }} /> 0300-6158784</p>
                <p className="text-white/70"><i className="fa-solid fa-location-dot mr-2" style={{ color: '#FFD700' }} /> Opp. Idrees Hospital, Allama Iqbal Road, Cantt, Sialkot</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-center text-xs text-white/50">&copy; {new Date().getFullYear()} Al Khaliq Enterprises. All rights reserved. License No. 2314/SKT</p>
        </div>
      </footer>

      {/* ===== MODALS ===== */}

      {/* Country Modal */}
      <Modal open={countryModal !== null} onClose={() => setCountryModal(null)}>
        {countryModal !== null && (() => {
          const c = countries[countryModal];
          return (
            <div>
              <div className="relative h-48">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{c.flag}</span>
                    <h3 className="text-xl font-bold text-white">{c.name}</h3>
                  </div>
                </div>
                <button onClick={() => setCountryModal(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#2E0A1C' }}>{c.description}</p>
                <div className="space-y-3 mb-5">
                  <div><span className="text-xs font-bold" style={{ color: '#E0115F' }}>In-Demand Roles:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">{c.roles.map((r) => <span key={r} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#FFF0F4', color: '#E0115F' }}>{r}</span>)}</div>
                  </div>
                  <div><span className="text-xs font-bold" style={{ color: '#E0115F' }}>Salary Range:</span>
                    <p className="text-sm font-semibold" style={{ color: '#2E0A1C' }}>{c.salary}</p>
                  </div>
                  <div><span className="text-xs font-bold" style={{ color: '#E0115F' }}>Processing Time:</span>
                    <p className="text-sm font-semibold" style={{ color: '#2E0A1C' }}>{c.processing}</p>
                  </div>
                  <div><span className="text-xs font-bold" style={{ color: '#E0115F' }}>Requirements:</span>
                    <ul className="mt-1 space-y-0.5">{c.requirements.map((req) => <li key={req} className="text-xs flex items-start gap-1.5" style={{ color: '#2E0A1C' }}><i className="fa-solid fa-check-circle mt-0.5" style={{ color: '#E0115F' }} /> {req}</li>)}</ul>
                  </div>
                </div>
                <button onClick={() => applyWhatsApp(`Hello Al Khaliq Enterprises! I'm interested in applying for employment in ${c.name}. Please provide more information.`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: '#7B2D8E' }}>
                  <i className="fab fa-whatsapp" /> Apply via WhatsApp
                </button>
              </div>
            </div>
          );
        })()}
      </Modal>

      {/* Service Modal */}
      <Modal open={serviceModal !== null} onClose={() => setServiceModal(null)}>
        {serviceModal !== null && (() => {
          const s = services[serviceModal];
          const icons = ['fa-briefcase','fa-passport','fa-file-contract','fa-stethoscope','fa-graduation-cap','fa-plane','fa-shield-halved','fa-users'];
          return (
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: s.accent }}>
                    <i className={`fas ${icons[serviceModal]} text-lg`} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#2E0A1C' }}>{s.title}</h3>
                </div>
                <button onClick={() => setServiceModal(null)} className="text-gray-400 hover:text-[#E0115F] text-xl"><i className="fa-solid fa-xmark" /></button>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#2E0A1C' }}>{s.description}</p>
              <button onClick={() => applyWhatsApp(`Hello Al Khaliq Enterprises! I'm interested in your ${s.title} service. Please provide more details.`)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: '#7B2D8E' }}>
                <i className="fab fa-whatsapp" /> Apply via WhatsApp
              </button>
            </div>
          );
        })()}
      </Modal>

      {/* Job Modal */}
      <Modal open={jobModal !== null} onClose={() => setJobModal(null)}>
        {jobModal !== null && (() => {
          const j = jobs[jobModal];
          return (
            <div>
              <div className="relative h-44">
                <img src={j.image} alt={j.country} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-lg font-bold text-white">{j.role}</h3>
                  <p className="text-sm text-white/80">{j.country} &bull; {j.salary}</p>
                </div>
                <button onClick={() => setJobModal(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white"><i className="fa-solid fa-xmark" /></button>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#2E0A1C' }}>{j.description}</p>
                <div className="space-y-3 mb-5">
                  <div><span className="text-xs font-bold" style={{ color: '#E0115F' }}>Requirements:</span>
                    <ul className="mt-1 space-y-0.5">{j.requirements.map((r) => <li key={r} className="text-xs flex items-start gap-1.5" style={{ color: '#2E0A1C' }}><i className="fa-solid fa-check-circle mt-0.5" style={{ color: '#E0115F' }} /> {r}</li>)}</ul>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-xs font-bold" style={{ color: '#E0115F' }}>Contract</span><p className="font-semibold" style={{ color: '#2E0A1C' }}>{j.contract}</p></div>
                    <div><span className="text-xs font-bold" style={{ color: '#E0115F' }}>Openings</span><p className="font-semibold" style={{ color: '#2E0A1C' }}>{j.openings}</p></div>
                  </div>
                </div>
                <button onClick={() => applyWhatsApp(`Hello Al Khaliq Enterprises! I am interested in the "${j.role}" position in ${j.country}. Please provide more details.`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: '#7B2D8E' }}>
                  <i className="fab fa-whatsapp" /> Apply via WhatsApp
                </button>
              </div>
            </div>
          );
        })()}
      </Modal>

      {/* Testimonial Modal */}
      <Modal open={testimonialModal !== null} onClose={() => setTestimonialModal(null)}>
        {testimonialModal !== null && (() => {
          const t = testimonials[testimonialModal];
          return (
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                <div>
                  <h4 className="font-bold" style={{ color: '#2E0A1C' }}>{t.name}</h4>
                  <p className="text-sm" style={{ color: '#E0115F' }}>{t.role}</p>
                  <div className="flex gap-0.5 mt-1">{[...Array(t.rating)].map((_, i) => <i key={i} className="fa-solid fa-star text-xs" style={{ color: '#FFD700' }} />)}</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#2E0A1C' }}>"{t.text}"</p>
            </div>
          );
        })()}
      </Modal>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-white text-lg hover:text-[#FFD700] transition-colors"><i className="fa-solid fa-xmark" /></button>
            <img src={galleryImages[lightbox]} alt="Gallery" className="w-full max-h-[80vh] object-contain rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
        </div>
      )}
    </div>
  );
}
