import { useEffect, useRef } from 'react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const practiceLinks = [
  'Constitutional & PIL',
  'Civil Litigation',
  'Corporate & Commercial',
  'Banking & Finance',
  'Regulatory Matters',
  'Media & Telecom Law',
  'Property Disputes',
  'Appellate Practice',
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
    <footer className="relative overflow-hidden" style={{ background: '#081A33' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-0 relative z-10">
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-accent)' }}>
                <i className="fas fa-gavel text-white text-sm" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[0.95rem] text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  Ashraf Gujjar Law
                </span>
                <span className="text-[0.5rem] text-white/40 font-semibold uppercase tracking-widest">
                  Associates
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              The chambers of Ch. Muhammad Ashraf Gujjar, Advocate Supreme Court of Pakistan — providing distinguished legal counsel from our chambers in F-8 Markaz, Islamabad.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href="https://www.linkedin.com/in/ch-muhammad-ashraf-gujjar-22791170/" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 text-sm hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,.05)' }}>
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://wa.me/923335107178" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
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
                    <i className="fas fa-chevron-right text-[0.5rem]" style={{ color: 'var(--color-accent)' }} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Practice Areas</h4>
            <ul className="flex flex-col gap-2.5">
              {practiceLinks.map(s => (
                <li key={s}>
                  <a href="#practice-areas" onClick={e => scrollTo(e, '#practice-areas')}
                    className="flex items-center gap-2 text-sm text-white/45 hover:text-white hover:pl-1 transition-all">
                    <i className="fas fa-chevron-right text-[0.5rem]" style={{ color: 'var(--color-accent)' }} /> {s}
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
                <i className="fas fa-map-marker-alt mt-0.5 flex-shrink-0 text-sm" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm text-white/50 leading-relaxed">
                  Chamber No. 7, Muslim Block,<br />
                  Johar Rd, near Bar Room,<br />
                  F-8 Markaz, Islamabad
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp flex-shrink-0 text-sm" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm text-white/50">0333-5107178</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,.06)' }}>
        <div className="max-w-[1180px] mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Ashraf Gujjar Law Associates. All rights reserved.</p>
            <p className="text-[0.6rem] text-white/20 max-w-xl text-center md:text-right leading-relaxed">
              This website is for informational purposes and does not constitute legal advice. Visiting this site or contacting us via WhatsApp does not create an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}