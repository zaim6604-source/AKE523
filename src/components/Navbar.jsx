import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/story' },
    { label: 'Services', href: '/services' },
    { label: 'Guides', href: '/guides' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
              <i className="fas fa-globe-asia" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-extrabold leading-tight text-ink">AL ASAD</div>
              <div className="text-[10px] font-semibold text-primary -mt-0.5">INTERNATIONAL</div>
            </div>
            <div className="sm:hidden text-xs font-bold leading-tight text-ink">
              <div>AL ASAD</div>
              <div className="text-[10px] text-primary">INTL</div>
            </div>
          </Link>

          {/* License badge */}
          <div className="hidden md:flex items-center gap-1 text-xs font-semibold text-primary bg-background px-3 py-1 rounded-full">
            <i className="fas fa-certificate" />
            License 2241/RWP
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === l.href ? 'text-primary' : 'text-ink hover:text-primary'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/923015445751"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cta text-white font-extrabold px-4 py-2 rounded-full text-sm hover:brightness-110 transition-all shadow-md"
          >
            <i className="fas fa-paper-plane" />
            <span className="hidden sm:inline">Apply Now</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-2 text-ink text-xl p-1"
            aria-label="Toggle menu"
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden pb-4 pt-2 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-semibold transition-colors ${
                    pathname === l.href ? 'text-primary' : 'text-ink hover:text-primary'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="text-xs font-semibold text-primary bg-background px-3 py-1 rounded-full self-start">
                <i className="fas fa-certificate" /> License 2241/RWP
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}