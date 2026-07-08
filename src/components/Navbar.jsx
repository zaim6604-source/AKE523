import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/story' },
  { label: 'Services', to: '/services' },
  { label: 'Country Guides', to: '/guides' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#0496FF] to-[#0077CC] flex items-center justify-center text-white font-bold text-sm sm:text-base font-[Plus Jakarta Sans] shadow-md">
              RO
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold font-[Plus Jakarta Sans] text-[#062A45] leading-tight">Reliance</span>
              <span className="text-[10px] sm:text-xs font-medium text-[#0496FF] tracking-wide leading-tight">Overseas Manpower</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === l.to
                    ? 'text-[#0496FF] bg-blue-50'
                    : 'text-[#062A45]/80 hover:text-[#0496FF] hover:bg-blue-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/923158547604"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 transition-colors no-underline"
            >
              <i className="fab fa-whatsapp" />
              <span className="hidden md:inline">0315-8547604</span>
            </a>
            <a
              href="https://wa.me/923158547604"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] hover:shadow-lg hover:shadow-[#FB5607]/30 transition-all no-underline"
            >
              <i className="fas fa-paper-plane text-xs" />
              Apply Now
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-1 p-2 rounded-lg text-[#062A45] hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-blue-100 bg-white/98 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === l.to
                    ? 'text-[#0496FF] bg-blue-50'
                    : 'text-[#062A45]/80 hover:text-[#0496FF] hover:bg-blue-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-blue-100 mt-2">
              <a
                href="https://wa.me/923158547604"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-green-700 hover:bg-green-50 rounded-lg no-underline"
              >
                <i className="fab fa-whatsapp text-base" />
                WhatsApp: 0315-8547604
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}