import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (to) => location.pathname === to;

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
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-[#1B4965] to-[#5FA8D3] flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-sm">
              GO
            </div>
            <div className="flex flex-col">
              <span className="text-[#0B2436] font-bold text-base lg:text-lg leading-tight">
                Gulalai
              </span>
              <span className="text-[10px] lg:text-xs text-[#FF6B35] font-medium tracking-wider -mt-0.5">
                OVERSEAS EMPLOYMENT
              </span>
            </div>
          </Link>

          {/* License Badge */}
          <div className="hidden md:flex items-center ml-4">
            <span className="bg-[#1B4965] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
              License FF-227
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 ml-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-[#1B4965] bg-[#1B4965]/10'
                    : 'text-[#0B2436]/80 hover:text-[#1B4965] hover:bg-[#1B4965]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/jobs"
            className="hidden lg:inline-flex ml-4 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
          >
            <i className="fas fa-search mr-2" />
            Browse Jobs
          </Link>

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
        <div className="px-4 pb-4 pt-2 bg-[#F2F6F9]/95 backdrop-blur-md border-t border-[#C9CCD5]/40">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.to)
                  ? 'text-[#1B4965] bg-[#1B4965]/10'
                  : 'text-[#0B2436]/80 hover:text-[#1B4965] hover:bg-[#1B4965]/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3 px-4">
            <span className="bg-[#1B4965] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
              License FF-227
            </span>
          </div>
          <Link
            to="/jobs"
            className="mt-3 mx-4 block text-center bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all"
          >
            <i className="fas fa-search mr-2" />
            Browse Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
}