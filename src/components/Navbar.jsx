import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Journey', to: '/journey' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white font-extrabold text-sm">
              AI
            </span>
            <span className={`hidden sm:block text-sm font-semibold leading-tight ${scrolled || !isHome ? 'text-ink' : 'text-white'}`}>
              Al-Imran
              <br />
              International
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-1 py-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : scrolled || !isHome
                        ? 'text-ink hover:bg-primary/10 hover:text-primary'
                        : 'text-white/90 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/923467223031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-white px-4 sm:px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-cta/30"
          >
            <i className="fa-brands fa-whatsapp" />
            <span className="hidden sm:inline">Apply</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-2 p-2 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-xl ${scrolled || !isHome ? 'text-ink' : 'text-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-ink hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://wa.me/923467223031"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cta text-white px-4 py-3 rounded-xl font-semibold mt-2"
            >
              <i className="fa-brands fa-whatsapp" />
              Apply via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}