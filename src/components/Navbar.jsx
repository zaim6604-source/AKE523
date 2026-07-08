import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Our Story' },
  { to: '/services', label: 'Services' },
  { to: '/guides', label: 'Country Guides' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-extrabold">
              M
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-extrabold text-ink leading-tight">MALGEEY OVERSEAS</div>
              <div className="text-[9px] font-semibold text-cta -mt-0.5 tracking-wider">EMPLOYMENT PROMOTERS</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-ink/70 hover:text-primary hover:bg-background'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/923005947249"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 bg-cta text-white font-extrabold px-5 py-2.5 rounded-full text-sm hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fab fa-whatsapp text-xs" />
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-ink/70 hover:bg-background"
            aria-label="Toggle menu"
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-ink/70 hover:bg-background'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/923005947249"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cta text-white font-extrabold px-4 py-3 rounded-xl text-sm mt-2"
              onClick={() => setOpen(false)}
            >
              <i className="fab fa-whatsapp" />
              Apply Now on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}