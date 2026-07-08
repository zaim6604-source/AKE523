import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleObserver = () => {
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleObserver);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F2F6F9]/95 backdrop-blur-md shadow-md'
          : 'bg-[#F2F6F9]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-[#1B4965] flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-sm">
              MG
            </div>
            <div className="flex flex-col">
              <span className="text-[#0B2436] font-bold text-base lg:text-lg leading-tight">
                M. G. Traders
              </span>
              <span className="text-[10px] lg:text-xs text-[#FF6B35] font-medium tracking-wider -mt-0.5">
                RECRUITMENT AGENCY
              </span>
            </div>
          </a>

          {/* License Badge */}
          <div className="hidden md:flex items-center ml-4">
            <span className="bg-[#1B4965] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
              License 2264/RWP
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 ml-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`underline-tab px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-[#FF6B35] active' : 'text-[#0B2436]/70 hover:text-[#FF6B35]'
                  } transition-colors`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/923330572222"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex ml-4 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
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
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-[#F2F6F9]/95 backdrop-blur-md border-t border-[#C9CCD5]/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-[#0B2436]/70 hover:text-[#FF6B35] hover:bg-[#1B4965]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3 px-4">
            <span className="bg-[#1B4965] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
              License 2264/RWP
            </span>
          </div>
          <a
            href="https://wa.me/923330572222"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 mx-4 block text-center bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all"
          >
            <i className="fab fa-whatsapp mr-2" />
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
