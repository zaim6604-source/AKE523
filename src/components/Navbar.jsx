import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Destinations', path: '/countries' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm" style={{ borderColor: 'rgba(225, 6, 0, 0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-black font-bold text-sm sm:text-base shadow-sm"
              style={{ backgroundColor: 'var(--color-cta)' }}
            >
              R
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] sm:text-[17px] leading-tight" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--color-accent)' }}>
                Rais Brothers
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide" style={{ color: 'var(--color-primary)' }}>
                Travel & Tours + Overseas
              </span>
            </div>
          </Link>

          {/* License Pill */}
          <div className="hidden md:flex items-center">
            <span
              className="text-[11px] font-bold px-3 py-1 rounded-full tracking-wide flex items-center gap-1.5"
              style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)', color: 'var(--color-primary)', border: '1px solid rgba(225, 6, 0, 0.2)' }}
            >
              <i className="fa-solid fa-certificate text-[9px]" />
              License 2234/KAR
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.path === '/' ? pathname === '/' : pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-ink-light)',
                    backgroundColor: isActive ? 'rgba(225, 6, 0, 0.06)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/923009219780"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}
          >
            <i className="fab fa-whatsapp text-sm" />
            Apply Now
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--color-accent)' }}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: 'white' }}
      >
        <div className="px-4 py-3 space-y-1 border-t" style={{ borderColor: 'rgba(225, 6, 0, 0.1)' }}>
          {navLinks.map((link) => {
            const isActive = link.path === '/' ? pathname === '/' : pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors"
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-ink-light)',
                  backgroundColor: isActive ? 'rgba(225, 6, 0, 0.06)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/923009219780"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-bold shadow-md mt-2"
            style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}
          >
            <i className="fab fa-whatsapp" />
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}