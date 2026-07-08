import { useState } from 'react';
import { COMPANY, NAV_LINKS } from './constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#CE93D8]/20 shadow-sm">
      <div className="container-main flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9C27B0] to-[#7B1FA2] flex items-center justify-center text-white font-heading font-bold text-sm">
            HA
          </div>
          <div>
            <a href="#home" onClick={() => handleNav('home')} className="block leading-tight">
              <span className="text-[#2A1033] font-heading font-bold text-sm md:text-base">{COMPANY.name}</span>
              <span className="block text-[10px] md:text-xs text-[#9C27B0] font-medium">{COMPANY.tagline}</span>
            </a>
            <span className="inline-block text-[9px] md:text-[10px] bg-[#9C27B0]/10 text-[#9C27B0] font-bold px-1.5 py-0.5 rounded-full mt-0.5">
              {COMPANY.license}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="px-3 py-2 text-sm font-medium text-[#2A1033]/70 hover:text-[#9C27B0] transition-colors rounded-lg hover:bg-[#9C27B0]/5"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={COMPANY.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD740] hover:bg-[#FFC400] text-[#2A1033] font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#FFD740]/30 flex items-center gap-2"
          >
            <i className="fas fa-paper-plane text-xs"></i> Apply Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2A1033]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-[#CE93D8]/20 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-[#2A1033]/70 hover:text-[#9C27B0] hover:bg-[#F8EEFF] rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-3 px-4 border-t border-[#CE93D8]/20 mt-2">
            <a
              href={COMPANY.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#FFD740] hover:bg-[#FFC400] text-[#2A1033] font-bold text-sm py-2.5 rounded-full text-center transition-all"
            >
              <i className="fas fa-paper-plane text-xs mr-1.5"></i> Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}