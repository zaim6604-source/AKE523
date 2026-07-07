import { useState, useEffect } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      const y = window.scrollY + 100;
      sections.forEach(sec => {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight)
          setActive(sec.id);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5`}>
      <div className="max-w-[1180px] mx-auto px-6 h-full flex items-center justify-between">
        <a href="#home" onClick={e => scrollTo(e, '#home')} className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{ background: 'var(--color-accent)' }}>
            <i className="fas fa-gavel text-white text-sm" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-[0.95rem] leading-tight text-[#0B2545]`}
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              Ashraf Gujjar Law
            </span>
            <span className={`text-[0.5rem] font-semibold uppercase tracking-widest text-[#C9A227]`}>
              Associates
            </span>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                active === l.href.replace('#','')
                  ? 'text-[#C9A227] bg-[#C9A227]/10'
                  : scrolled
                    ? 'text-gray-600 hover:text-[#C9A227] hover:bg-[#C9A227]/5'
                    : 'text-gray-600 hover:text-[#C9A227] hover:bg-[#C9A227]/5'
              }`}>
              {l.label}
            </a>
          ))}

          <span className={`hidden lg:inline-flex text-[0.55rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mx-2 ${
            scrolled ? 'bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/20' : 'bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/20'
          }`}>
            Adv. Supreme Court
          </span>

          <a href="https://wa.me/923335107178" target="_blank" rel="noopener noreferrer"
            className="ml-1 px-3 py-2 rounded-full text-white text-[12px] font-semibold transition-all shadow-lg inline-flex items-center gap-2 btn-gold">
            <i className="fab fa-whatsapp text-xs" /> Book Consultation
          </a>

          <a href="https://www.linkedin.com/in/ch-muhammad-ashraf-gujjar-22791170/" target="_blank" rel="noopener noreferrer"
            className={`ml-1.5 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              scrolled ? 'text-[#0B2545] hover:bg-[#0B2545]/5' : 'text-[#0B2545] hover:bg-[#0B2545]/5'
            }`}
            aria-label="LinkedIn">
            <i className="fab fa-linkedin-in text-sm" />
          </a>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg" aria-label="Menu">
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-[#0B2545] ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-[#0B2545] ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-[#0B2545] ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl px-6 py-5 transition-all duration-300 ${
        open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}>
        <ul className="flex flex-col gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => scrollTo(e, l.href)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === l.href.replace('#','') ? 'text-[#C9A227] bg-[#C9A227]/5' : 'text-gray-700 hover:bg-gray-50'
                }`}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 pt-3 border-t border-gray-100">
            <a href="https://wa.me/923335107178" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white btn-gold">
              <i className="fab fa-whatsapp" /> Book Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}