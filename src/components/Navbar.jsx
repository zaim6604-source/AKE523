import { useState } from 'react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2F6F9]/80 backdrop-blur-md border-b border-[#C9CCD5]/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }} className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1B4965] flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md">
              M&L
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[15px] sm:text-[17px] leading-tight" style={{ color: '#0B2436' }}>
                M &amp; L
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide" style={{ color: '#1B4965' }}>
                Consultants
              </span>
            </div>
          </a>

          {/* Pill */}
          <div className="hidden md:flex items-center">
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#1B4965]/10 text-[#1B4965] border border-[#1B4965]/30 tracking-wide">
              HR Consulting &bull; Islamabad
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                style={{ color: '#1B4965' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1B4965'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/923353465095"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#FF6B35' }}
          >
            <i className="fa-brands fa-whatsapp text-xs" />
            Get Started
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#0B2436' }}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: '#F2F6F9' }}
      >
        <div className="px-4 py-3 space-y-1 border-t border-[#C9CCD5]/30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
              style={{ color: '#1B4965' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923353465095"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white shadow-md mt-2"
            style={{ backgroundColor: '#FF6B35' }}
          >
            <i className="fa-brands fa-whatsapp mr-2" />
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}