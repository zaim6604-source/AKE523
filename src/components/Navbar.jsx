import { useState } from 'react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EDF6F9]/80 backdrop-blur-md border-b border-[#83C5BE]/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }} className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#006D77] flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md">
              SZ
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[15px] sm:text-[17px] leading-tight text-[#003844]">
                Shah Zaman
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-[#006D77]">
                Manpower
              </span>
            </div>
          </a>

          {/* License Pill */}
          <div className="hidden md:flex items-center">
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#006D77]/10 text-[#006D77] border border-[#006D77]/30 tracking-wide">
              License 2208/RWP
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-[#006D77] hover:text-[#003844]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Social + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.facebook.com/shahzamanmanpower/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
              style={{ backgroundColor: '#006D77' }}
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-sm" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#E29578' }}
            >
              <i className="fa-regular fa-paper-plane text-xs" />
              Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-[#003844]"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: '#EDF6F9' }}
      >
        <div className="px-4 py-3 space-y-1 border-t border-[#83C5BE]/30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors text-[#006D77]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/shahzamanmanpower/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: '#006D77' }}
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-sm" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white shadow-md"
              style={{ backgroundColor: '#E29578' }}
            >
              <i className="fa-regular fa-paper-plane mr-2" />
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}