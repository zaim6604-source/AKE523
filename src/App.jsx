import { useState, useEffect, useRef } from 'react'

/* ============================================================
   IMAGE FALLBACK
   ============================================================ */
const FALLBACK_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%23FFF0F3"%3E%3Crect width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="24" fill="%23D7263D"%3ERed Rose%3C/text%3E%3C/svg%3E'
const imgError = (e) => { e.target.src = FALLBACK_IMG }

/* ============================================================
   ANIMATION HOOK
   ============================================================ */
function useInView({ threshold = 0.15, triggerOnce = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); if (triggerOnce) ob.unobserve(el) }
      else if (!triggerOnce) setInView(false)
    }, { threshold })
    ob.observe(el)
    return () => ob.disconnect()
  }, [threshold, triggerOnce])
  return [ref, inView]
}

function FadeUp({ children, className = '', delay = 0, style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

function SlideLeft({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SlideRight({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ============================================================
   CONSTANTS
   ============================================================ */
const COMPANY = 'Red Rose Traders'
const LICENSE = '2240/PWR'
const PHONE1 = '0922-510171'
const PHONE2 = '0333-9611998'
const WHATSAPP = '923319778899'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}`
const EMAIL = 'Redrosetraders@yahoo.com'
const FALLBACK_EMAIL = 'info@redrosetraders.pk'
const ADDRESS = 'Old Bus Stand, Decent Hotel, Kohat, KPK'
const FB_PAGE = 'https://www.facebook.com/overseaseemploymentpromoter/'
const LAT = '33.588556643390504'
const LNG = '71.4412341'
const MAP_URL = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=17/${LAT}/${LNG}`

/* ============================================================
   SECTION DATA
   ============================================================ */
const stats = [
  { icon: 'fa-building', value: '8+', label: 'Countries Served' },
  { icon: 'fa-users', value: '500+', label: 'Workers Placed' },
  { icon: 'fa-star', value: '4.9', label: 'Client Rating' },
  { icon: 'fa-certificate', value: 'Since 2018', label: 'Years of Trust' },
]

const services = [
  { icon: 'fa-hard-hat', title: 'Construction Labour', desc: 'Skilled masons, carpenters, steel fixers, and general laborers for Gulf & European projects.' },
  { icon: 'fa-truck', title: 'Heavy Transport', desc: 'Experienced drivers for heavy trucks, forklifts, and logistics operations abroad.' },
  { icon: 'fa-kitchen-set', title: 'Hospitality Staff', desc: 'Chefs, waiters, housekeeping, and hotel management staff for international roles.' },
  { icon: 'fa-industry', title: 'Factory Workers', desc: 'Production line operators, packers, and quality control for manufacturing units.' },
  { icon: 'fa-shield-halved', title: 'Security Personnel', desc: 'Trained security guards and supervisors for commercial and residential posts.' },
  { icon: 'fa-wrench', title: 'Technicians', desc: 'AC, electrical, plumbing, and mechanical technicians for diverse industries.' },
  { icon: 'fa-user-md', title: 'Healthcare', desc: 'Doctors, nurses, paramedics, and caregivers for hospitals and clinics.' },
  { icon: 'fa-laptop-code', title: 'IT & Engineering', desc: 'Software engineers, network specialists, civil and mechanical engineers.' },
]

const countries = [
  { name: 'Saudi Arabia', icon: 'fa-flag', desc: 'Riyadh, Jeddah, Dammam — construction, healthcare, hospitality', color: 'from-emerald-600 to-emerald-800' },
  { name: 'UAE', icon: 'fa-flag', desc: 'Dubai, Abu Dhabi — drivers, hospitality, construction', color: 'from-red-600 to-red-800' },
  { name: 'Qatar', icon: 'fa-flag', desc: 'Doha — oil & gas, infrastructure, hospitality', color: 'from-purple-600 to-purple-800' },
  { name: 'Oman', icon: 'fa-flag', desc: 'Muscat — logistics, construction, retail', color: 'from-amber-600 to-amber-800' },
  { name: 'Kuwait', icon: 'fa-flag', desc: 'Kuwait City — oil sector, healthcare, domestic staff', color: 'from-blue-600 to-blue-800' },
  { name: 'Germany', icon: 'fa-flag', desc: 'Berlin, Munich — IT, healthcare, skilled trades', color: 'from-yellow-600 to-yellow-800' },
  { name: 'Poland', icon: 'fa-flag', desc: 'Warsaw, Krakow — manufacturing, logistics, IT', color: 'from-rose-600 to-rose-800' },
  { name: 'Romania', icon: 'fa-flag', desc: 'Bucharest — construction, automotive, IT', color: 'from-cyan-600 to-cyan-800' },
  { name: 'Malaysia', icon: 'fa-flag', desc: 'KL — manufacturing, IT, hospitality', color: 'from-indigo-600 to-indigo-800' },
]

const processSteps = [
  { num: '01', title: 'Registration & Inquiry', desc: 'Contact us by phone, WhatsApp, or visit our office. Share your details and preferences.' },
  { num: '02', title: 'Documentation', desc: 'We guide you through passport, CV, and certificate preparation with accuracy.' },
  { num: '03', title: 'Job Matching', desc: 'We match your profile with verified overseas employers from our trusted network.' },
  { num: '04', title: 'Visa & Medical', desc: 'Complete visa processing and medical clearance with our partner agencies.' },
  { num: '05', title: 'Departure & Support', desc: 'Ticketing, pre-departure briefing, and ongoing support throughout your contract.' },
]

const testimonials = [
  { name: 'Sajid Khan', role: 'Driver — Saudi Arabia', avatar: null, text: 'Red Rose Traders made my dream of working abroad come true. They handled everything from paperwork to visa. Highly recommended!' },
  { name: 'Faisal Ahmed', role: 'Construction Supervisor — UAE', avatar: null, text: 'Professional, honest, and fast. I got a great job in Dubai within weeks of registering. Thank you, Red Rose team!' },
  { name: 'Zubair Hussain', role: 'Technician — Qatar', avatar: null, text: 'I was skeptical at first, but their license (2240/PWR) checked out. Genuine placement with no hidden fees.' },
]

const gallery = [
  'https://images.unsplash.com/photo-1577415124269-fc114e4aa1c2?w=600&q=80',
  'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&q=80',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
]

const faqs = [
  { q: 'What is OEP license 2240/PWR?', a: 'It is our official government registration with the Bureau of Emigration & Overseas Employment, Government of Pakistan, authorizing us to recruit for overseas employment.' },
  { q: 'Which countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Romania, and Malaysia across multiple sectors.' },
  { q: 'What are your service charges?', a: 'Our charges are transparent and competitive. Contact us directly for a detailed breakdown based on your target country and position.' },
  { q: 'How long does the process take?', a: 'Typical processing takes 4–8 weeks from registration to departure, depending on the country and employer requirements.' },
  { q: 'Do you provide pre-departure training?', a: 'Yes, we offer pre-departure orientation covering cultural awareness, work expectations, and essential tips for your destination country.' },
  { q: "Can I apply if I don't have a passport yet?", a: 'Absolutely. We assist with the entire process, including new passport applications and renewals.' },
]

/* ============================================================
   NAVBAR
   ============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#countries', label: 'Countries' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-5 md:px-7 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-primary/10' : 'bg-white/90 backdrop-blur-md shadow-md'}`}>
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 py-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm shadow-md">
              <i className="fas fa-rose" />
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-sm text-primary tracking-tight">{COMPANY}</span>
              <span className="ml-2 text-[10px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{LICENSE}</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="px-3.5 py-2 text-sm font-medium text-ink/70 hover:text-primary transition-colors rounded-full hover:bg-primary/5">{l.label}</a>
            ))}
            <a href={FB_PAGE} target="_blank" rel="noopener noreferrer" className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xs" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-primary p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <i className={`fas ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-4 animate-fade-in border border-primary/10">
            <div className="space-y-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-ink/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors">{l.label}</a>
              ))}
              <a href={FB_PAGE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                <i className="fab fa-facebook-f text-xs" /> Facebook
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

/* ============================================================
   MARQUEE
   ============================================================ */
function Marquee() {
  const items = [
    '✅ Govt. Licensed OEP 2240/PWR',
    '📍 Kohat, KPK — Serving Since 2018',
    '🌍 Saudi Arabia • UAE • Qatar • Oman • Kuwait • Germany • Poland • Romania • Malaysia',
    '📞 0922-510171 | 0333-9611998',
  ]
  return (
    <div className="relative mt-20 top-0 bg-primary text-white text-xs md:text-sm font-semibold py-2.5 overflow-hidden">
      <div className="animate-marquee flex gap-12">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="whitespace-nowrap flex items-center gap-2">{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <section id="hero" ref={ref} className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left */}
          <div className={`space-y-6 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full tracking-wider border border-primary/20">
              <i className="fas fa-certificate mr-1.5" />License {LICENSE}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-tight">
              Kohat's Blooming Path to a{' '}
              <span className="gradient-text">Brighter Future</span> Abroad
            </h1>
            <p className="text-lg text-ink/60 leading-relaxed max-w-lg">
              Red Rose Traders connects local workers to trusted Gulf and European employers — licensed, honest, complete.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-all shadow-lg shadow-cta/30">
                <i className="fab fa-whatsapp text-lg" /> Apply Now
              </a>
              <a href="#services"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all">
                <i className="fas fa-briefcase" /> Our Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-ink/60 shadow-sm border border-primary/10">
                <i className="fas fa-check-circle text-cta" /> Govt. Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-ink/60 shadow-sm border border-primary/10">
                <i className="fas fa-check-circle text-cta" /> 500+ Placed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-ink/60 shadow-sm border border-primary/10">
                <i className="fas fa-check-circle text-cta" /> 9 Countries
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-ink/60 shadow-sm border border-primary/10">
                <i className="fas fa-check-circle text-cta" /> Since 2018
              </span>
            </div>
          </div>

          {/* Right - image with blob */}
          <div className={`relative flex justify-center transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 blob-morph bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
              <div className="absolute inset-4 blob-morph bg-gradient-to-br from-primary to-secondary opacity-90 flex items-center justify-center shadow-2xl shadow-primary/30">
                <div className="text-center text-white p-8">
                  <i className="fas fa-rose text-5xl md:text-6xl mb-4 opacity-80" />
                  <p className="font-bold text-lg md:text-xl">{COMPANY}</p>
                  <p className="text-sm opacity-80">Since 2018</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-cta text-white rounded-xl px-4 py-2.5 shadow-lg shadow-cta/30">
                <p className="text-xs font-bold">Trusted by</p>
                <p className="text-lg font-extrabold">500+ Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   STAT BAND
   ============================================================ */
function StatBand() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  return (
    <section ref={ref} className="bg-primary py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center text-white transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <i className={`fas ${s.icon} text-2xl md:text-3xl mb-2 opacity-80`} />
              <p className="text-2xl md:text-3xl font-extrabold">{s.value}</p>
              <p className="text-sm opacity-80 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   ABOUT
   ============================================================ */
function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <SlideLeft>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden border border-primary/10">
                <div className="text-center p-8">
                  <i className="fas fa-rose text-6xl text-primary/30 mb-4" />
                  <p className="text-primary font-bold text-lg">Est. 2018</p>
                  <p className="text-ink/50 text-sm">Old Bus Stand, Kohat</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-xl px-5 py-3 shadow-lg">
                <p className="text-xs font-medium">License</p>
                <p className="font-extrabold">{LICENSE}</p>
              </div>
            </div>
          </SlideLeft>

          <SlideRight delay={100}>
            <FadeUp delay={0}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full tracking-wider mb-4 border border-primary/20">
                <i className="fas fa-info-circle mr-1.5" /> About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
                Your Trusted Gateway to{' '}
                <span className="gradient-text">Global Employment</span>
              </h2>
              <p className="text-ink/60 leading-relaxed mb-4">
                Based in the heart of Kohat at Old Bus Stand, Red Rose Traders is a government-licensed
                Overseas Employment Promoter (OEP {LICENSE}) dedicated to connecting skilled Pakistani workers
                with reputable employers across the Gulf and Europe.
              </p>
              <p className="text-ink/60 leading-relaxed mb-6">
                With years of experience, thousands of successful placements, and a deep commitment to
                ethical recruitment, we ensure every candidate is matched with genuine opportunities —
                no hidden fees, no false promises.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-background rounded-xl text-sm font-semibold text-primary border border-primary/10">
                  <i className="fas fa-check-circle text-cta mr-1.5" /> Licensed & Regulated
                </span>
                <span className="px-4 py-2 bg-background rounded-xl text-sm font-semibold text-primary border border-primary/10">
                  <i className="fas fa-check-circle text-cta mr-1.5" /> No Hidden Fees
                </span>
                <span className="px-4 py-2 bg-background rounded-xl text-sm font-semibold text-primary border border-primary/10">
                  <i className="fas fa-check-circle text-cta mr-1.5" /> End-to-End Support
                </span>
              </div>
            </FadeUp>
          </SlideRight>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SERVICES
   ============================================================ */
function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full tracking-wider mb-4 border border-primary/20">
            <i className="fas fa-briefcase mr-1.5" /> Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
            Recruitment Services We Offer
          </h2>
          <p className="text-ink/60 mt-3 max-w-xl mx-auto">
            Comprehensive overseas employment solutions across multiple industries and skill levels.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 50}>
              <div className="bg-white rounded-2xl p-6 card-lift border border-primary/5 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-lg mb-4 shadow-md">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3 className="font-bold text-ink text-base mb-2">{s.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   COUNTRY GUIDE
   ============================================================ */
function Countries() {
  return (
    <section id="countries" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full tracking-wider mb-4 border border-accent/20">
            <i className="fas fa-globe-asia mr-1.5" /> Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
            Countries We Serve
          </h2>
          <p className="text-ink/60 mt-3 max-w-xl mx-auto">
            Trusted partnerships with employers across the Gulf, Europe, and Southeast Asia.
          </p>
        </FadeUp>

        {/* Landmark cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {countries.slice(0, 3).map((c, i) => (
            <FadeUp key={c.name} delay={i * 80}>
              <div className="relative h-44 rounded-2xl overflow-hidden card-lift group cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-90`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`fas ${c.icon} text-lg`} />
                    <h3 className="font-extrabold text-lg">{c.name}</h3>
                  </div>
                  <p className="text-sm text-white/80">{c.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Chip grid for remaining countries */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {countries.slice(3).map((c, i) => (
            <FadeUp key={c.name} delay={i * 50}>
              <div className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-primary/5 hover:border-primary/20 hover:bg-white transition-all cursor-pointer">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center text-white text-xs shrink-0`}>
                  <i className={`fas ${c.icon}`} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm text-ink truncate">{c.name}</p>
                  <p className="text-[10px] text-ink/50 truncate">{c.desc.split(' — ')[0]}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   PROCESS
   ============================================================ */
function Process() {
  return (
    <section id="process" className="relative py-16 md:py-24">
      {/* Diagonal band background */}
      <div className="absolute inset-0 diagonal-band" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full tracking-wider mb-4 border border-white/20">
            <i className="fas fa-route mr-1.5" /> How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Your Journey in 5 Simple Steps
          </h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto">
            From first contact to departure — we guide you every step of the way.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-5 gap-4 md:gap-6">
          {processSteps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 text-center border border-white/10 h-full hover:bg-white/15 transition-all">
                <div className="w-12 h-12 rounded-full bg-cta text-ink font-extrabold text-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-sm md:text-base mb-2">{step.title}</h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent']
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full tracking-wider mb-4 border border-secondary/20">
            <i className="fas fa-star mr-1.5" /> Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">What Our Clients Say</h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 card-lift border border-primary/5 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star text-amber-400 text-xs" />)}
                </div>
                <p className="text-ink/70 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/5">
                  <div className={`w-10 h-10 rounded-full ${colors[i]} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md`}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   GALLERY STRIP
   ============================================================ */
function GalleryStrip() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="animate-marquee flex gap-4">
        {[...gallery, ...gallery].map((src, i) => (
          <div key={i} className="w-56 h-40 shrink-0 rounded-xl overflow-hidden shadow-md">
            <img src={src} alt="Gallery" onError={imgError} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   CTA BAND
   ============================================================ */
function CTABand() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-highlight to-accent opacity-95" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-5 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-5 right-10 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center px-4">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Take the first step toward a brighter future abroad. Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-xl shadow-black/20 text-lg">
              <i className="fab fa-whatsapp text-xl" /> Apply via WhatsApp
            </a>
            <a href={`tel:${PHONE1.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-lg">
              <i className="fas fa-phone" /> Call Now
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ============================================================
   CONTACT + MAP
   ============================================================ */
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*Red Rose Traders Inquiry*%0A%0A_Name:_ ${encodeURIComponent(form.name)}%0A_Phone:_ ${encodeURIComponent(form.phone)}%0A_Message:_ ${encodeURIComponent(form.message || 'N/A')}`
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-cta/10 text-cta text-xs font-bold rounded-full tracking-wider mb-4 border border-cta/20">
            <i className="fas fa-address-card mr-1.5" /> Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Get in Touch</h2>
          <p className="text-ink/60 mt-3 max-w-xl mx-auto">
            Visit our office, call us, or send a message. We're here to help.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <FadeUp>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary/5">
              <h3 className="font-bold text-lg text-ink mb-5">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name *" required value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-primary/15 text-sm outline-none focus:border-primary bg-background text-ink transition-colors" />
                <input type="tel" placeholder="Phone Number *" required value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-primary/15 text-sm outline-none focus:border-primary bg-background text-ink transition-colors" />
                <textarea placeholder="Your Message (optional)" rows={4} value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-primary/15 text-sm outline-none focus:border-primary bg-background text-ink transition-colors resize-none" />
                <button type="submit"
                  className="w-full bg-cta text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-cta/30 flex items-center justify-center gap-2">
                  <i className="fab fa-whatsapp text-lg" /> Send via WhatsApp
                </button>
              </form>
            </div>
          </FadeUp>

          {/* Contact info + Map */}
          <FadeUp delay={100}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/5 space-y-4">
                <h3 className="font-bold text-lg text-ink">Contact Information</h3>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-xl text-green-700 font-semibold hover:bg-green-100 transition-colors">
                  <i className="fab fa-whatsapp text-xl" /> <span className="text-sm">0331-9778899</span>
                </a>

                <a href={`tel:${PHONE1.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-xl text-ink font-semibold hover:bg-primary/10 transition-colors">
                  <i className="fas fa-phone text-primary text-lg" /> <span className="text-sm">{PHONE1}</span>
                </a>

                <a href={`tel:${PHONE2.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-xl text-ink font-semibold hover:bg-primary/10 transition-colors">
                  <i className="fas fa-mobile-screen text-secondary text-lg" /> <span className="text-sm">{PHONE2}</span>
                </a>

                <a href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-xl text-ink font-semibold hover:bg-primary/10 transition-colors truncate">
                  <i className="fas fa-envelope text-accent text-lg" /> <span className="text-sm truncate">{EMAIL}</span>
                </a>

                <a href={FB_PAGE} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl text-blue-700 font-semibold hover:bg-blue-100 transition-colors">
                  <i className="fab fa-facebook text-xl" /> <span className="text-sm">Facebook Page</span>
                </a>

                <div className="flex items-start gap-3 px-4 py-3 text-ink/70 text-sm">
                  <i className="fas fa-location-dot text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">{ADDRESS}</p>
                    <p className="text-ink/50 text-xs mt-0.5">Old Bus Stand, Kohat, KPK</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/5 h-56">
                <iframe
                  title="Red Rose Traders Location"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(LNG)-0.01}%2C${parseFloat(LAT)-0.01}%2C${parseFloat(LNG)+0.01}%2C${parseFloat(LAT)+0.01}&layer=mapnik&marker=${LAT}%2C${LNG}`}
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline">
                <i className="fas fa-map-pin" /> View Larger Map
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full tracking-wider mb-4 border border-accent/20">
            <i className="fas fa-circle-question mr-1.5" /> FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Frequently Asked Questions</h2>
        </FadeUp>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 50}>
              <div className="border border-primary/10 rounded-xl overflow-hidden bg-background">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm md:text-base text-ink hover:bg-primary/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="px-5 pb-4 text-sm text-ink/60 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#B3001B] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm shadow-md">
                <i className="fas fa-rose" />
              </div>
              <div>
                <p className="font-extrabold text-sm">{COMPANY}</p>
                <p className="text-xs text-white/50">OEP {LICENSE}</p>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Kohat's trusted overseas employment promoter since 2018. Licensed, honest, complete.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-cta">Quick Links</h4>
            <ul className="space-y-2.5">
              {['#hero', '#about', '#services', '#countries', '#process', '#contact'].map(href => (
                <li key={href}>
                  <a href={href} className="text-xs text-white/60 hover:text-cta transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[8px]" /> {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-cta">Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map(s => (
                <li key={s.title}>
                  <a href="#services" className="text-xs text-white/60 hover:text-cta transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[8px]" /> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-cta">Contact</h4>
            <ul className="space-y-3">
              <li className="text-xs text-white/60 flex items-center gap-2">
                <i className="fas fa-location-dot text-cta w-4" /> {ADDRESS}
              </li>
              <li>
                <a href={`tel:${PHONE1.replace(/[^0-9]/g, '')}`} className="text-xs text-white/60 hover:text-cta transition-colors flex items-center gap-2">
                  <i className="fas fa-phone text-cta w-4" /> {PHONE1}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE2.replace(/[^0-9]/g, '')}`} className="text-xs text-white/60 hover:text-cta transition-colors flex items-center gap-2">
                  <i className="fas fa-mobile-screen text-cta w-4" /> {PHONE2}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-cta transition-colors flex items-center gap-2">
                  <i className="fab fa-whatsapp text-cta w-4" /> 0331-9778899
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-xs text-white/60 hover:text-cta transition-colors flex items-center gap-2 truncate">
                  <i className="fas fa-envelope text-cta w-4" /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={FB_PAGE} target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-cta transition-colors flex items-center gap-2">
                  <i className="fab fa-facebook text-cta w-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} {COMPANY}. Govt. Licensed OEP {LICENSE}. All rights reserved.</p>
          <p className="text-xs text-white/30">Old Bus Stand, Decent Hotel, Kohat, KPK</p>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   QUICK APPLY FAB
   ============================================================ */
function QuickApply() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const categories = ['Construction Worker', 'Driver', 'Technician', 'Hospitality Staff', 'Factory Worker', 'Security Guard', 'Healthcare Professional', 'Engineer', 'IT Professional', 'Other']

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*Quick Apply - ${COMPANY}*%0A%0A_Name:_ ${encodeURIComponent(name)}%0A_Phone:_ ${encodeURIComponent(phone)}%0A_Category:_ ${encodeURIComponent(category)}`
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank')
    setOpen(false)
  }

  return (
    <div className="fixed bottom-5 right-4 md:right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl p-5 w-72 md:w-80 border border-primary/20 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-primary text-sm">Quick Apply</h4>
            <button onClick={() => setOpen(false)} className="text-ink/40 hover:text-primary transition-colors">
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" placeholder="Your Name" required value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-ink" />
            <input type="tel" placeholder="Phone Number" required value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-ink" />
            <select required value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-ink">
              <option value="">Job Category</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="submit"
              className="w-full bg-cta text-white font-bold py-2.5 rounded-lg text-sm hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp" /> Apply Now
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-cta text-white shadow-lg hover:opacity-90 transition-all flex items-center justify-center text-2xl shadow-cta/40 animate-bounce-subtle"
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-file-pen'}`} />
      </button>
    </div>
  )
}

/* ============================================================
   APP — SINGLE PAGE
   ============================================================ */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      <Navbar />
      <Marquee />
      <Hero />
      <StatBand />
      <About />
      <Services />
      <Countries />
      <Process />
      <Testimonials />
      <GalleryStrip />
      <CTABand />
      <Contact />
      <FAQ />
      <Footer />
      <QuickApply />
    </div>
  )
}