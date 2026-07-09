import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Our Story', to: '/story' },
    { label: 'Services', to: '/services' },
    { label: 'Guides', to: '/guides' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (to) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#FF3CAC] to-[#784BA0] flex items-center justify-center text-white font-bold text-sm sm:text-base font-[Plus Jakarta Sans] shadow-md">
              <i className="fas fa-feather-alt text-xs sm:text-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] leading-tight">Parwaz</span>
              <span className="text-[10px] sm:text-xs font-medium text-[#FF3CAC] tracking-wide leading-tight">Recruiting Agency</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors no-underline ${
                  isActive(l.to)
                    ? 'text-[#FF3CAC] bg-pink-50'
                    : 'text-[#1A0A1E]/80 hover:text-[#FF3CAC] hover:bg-pink-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/923339319471"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 transition-colors no-underline"
            >
              <i className="fab fa-whatsapp" />
              <span className="hidden md:inline">0333-9319471</span>
            </a>
            <a
              href="https://wa.me/923339319471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-white bg-[#2B86C5] rounded-full hover:bg-[#2470a5] hover:shadow-lg hover:shadow-[#2B86C5]/30 transition-all no-underline"
            >
              <i className="fas fa-feather-alt text-xs" />
              Apply Now
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-1 p-2 rounded-lg text-[#1A0A1E] hover:bg-pink-50 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-pink-100 bg-white/98 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors no-underline ${
                  isActive(l.to)
                    ? 'text-[#FF3CAC] bg-pink-50'
                    : 'text-[#1A0A1E]/80 hover:text-[#FF3CAC] hover:bg-pink-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-pink-100">
              <a
                href="https://www.facebook.com/Parwaazoep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#1A0A1E]/80 hover:text-[#FF3CAC] no-underline"
              >
                <i className="fab fa-facebook text-blue-600" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}