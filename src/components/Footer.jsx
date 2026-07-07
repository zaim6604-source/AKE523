import { useEffect, useRef } from 'react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Overseas Recruitment', 'Visa Assistance', 'Job Placement', 'Documentation Support',
  'Pre-Departure Training', 'Post-Placement Support',
];

export default function Footer() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--color-highlight)' }} ref={ref}>
      <div className="blob blob-crimson" style={{ width: 400, height: 400, top: '-30%', right: '-10%', opacity: .12 }} />
      <div className="blob blob-violet" style={{ width: 300, height: 300, bottom: '-20%', left: '-8%', opacity: .08 }} />

      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-0 relative z-10">
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                style={{ background: 'var(--color-cta)' }}>
                <i className="fas fa-handshake text-base" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[1rem] text-white">Habib Brothers</span>
                <span className="text-[0.55rem] text-white/40 font-medium uppercase tracking-wider">Recruiting Agency</span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-[1.75]">
              Your trusted partner for overseas employment. Connecting talent from Swat with opportunity across the Gulf and Europe.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href="#" aria-label="Facebook"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 text-sm hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,.05)' }}>
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 text-sm hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,.05)' }}>
                <i className="fab fa-instagram" />
              </a>
              <a href="#" aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 text-sm hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,.05)' }}>
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://wa.me/923459510123" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 text-sm hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,.05)' }}>
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => scrollTo(e, l.href)}
                    className="flex items-center gap-2 text-sm text-white/45 hover:text-white hover:pl-1 transition-all">
                    <i className="fas fa-chevron-right text-[0.55rem]" style={{ color: 'var(--color-cta)' }} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" onClick={e => scrollTo(e, '#services')}
                    className="flex items-center gap-2 text-sm text-white/45 hover:text-white hover:pl-1 transition-all">
                    <i className="fas fa-chevron-right text-[0.55rem]" style={{ color: 'var(--color-cta)' }} /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-0.5 flex-shrink-0 text-sm" style={{ color: 'var(--color-cta)' }} />
                <span className="text-sm text-white/50 leading-[1.65]">G.T Road, Malakand Market, Sohrab Khan Chowk, Mingora, Swat, KPK</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-phone-alt mt-0.5 flex-shrink-0 text-sm" style={{ color: 'var(--color-cta)' }} />
                <div>
                  <span className="block text-sm text-white/50">0946-700403</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp flex-shrink-0 text-sm" style={{ color: 'var(--color-cta)' }} />
                <span className="text-sm text-white/50">0345-9510123</span>
              </div>
              <a href="https://wa.me/923459510123" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full text-[#340710] text-sm font-bold transition-all shadow-lg hover:scale-105"
                style={{ background: 'var(--color-cta)' }}>
                <i className="fab fa-whatsapp" /> Quick Apply
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,.06)' }}>
        <div className="max-w-[1180px] mx-auto px-6 py-5 text-center">
          <p className="text-xs text-white/30">
            &copy; 2026 Habib Brothers Recruiting Agency Pvt (Ltd). All rights reserved. | License 2201/MLK | G.T Road, Mingora, Swat, KPK
          </p>
        </div>
      </div>
    </footer>
  );
}