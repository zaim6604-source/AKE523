import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COMPANY } from '../data/siteData'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Journey', path: '/journey' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="sticky top-0 z-50 bg-highlight/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cta to-accent flex items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-cta/30">
              AK
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm text-white">Azi Khel Recruiting</span>
              <span className="block text-[10px] text-cta font-semibold tracking-wider uppercase">License {COMPANY.license}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                  isActive(link.path) ? 'text-cta' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-cta transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-cta text-white px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30 animate-pulse-glow"
            >
              <i className="fab fa-whatsapp" />
              Apply Now
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-cta hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-xl`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path) ? 'text-cta bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden flex items-center gap-2 bg-cta text-white px-4 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all mt-2"
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}