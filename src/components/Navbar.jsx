import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Countries', to: '/countries' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EDF6F9]/80 backdrop-blur-md border-b border-[#83C5BE]/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#006D77] flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[15px] sm:text-[17px] leading-tight text-[#003844]">
                Fowzan Traders
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-[#E29578]">
                Global Employment
              </span>
            </div>
          </Link>

          {/* License Pill */}
          <div className="hidden md:flex items-center">
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#006D77]/10 text-[#006D77] border border-[#006D77]/30 tracking-wide">
              License 2309/SKT
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? 'text-[#006D77] bg-[#006D77]/10' : 'text-[#003844] hover:text-[#006D77]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/923006162506"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#E29578' }}
          >
            <i className="fab fa-whatsapp text-xs" />
            Apply Now
          </a>

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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#EDF6F9' }}
      >
        <div className="px-4 py-3 space-y-1 border-t border-[#83C5BE]/30">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? 'text-[#006D77] bg-[#006D77]/10' : 'text-[#003844]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/923006162506"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white shadow-md mt-2"
            style={{ backgroundColor: '#E29578' }}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fab fa-whatsapp mr-2" />
            Apply via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
