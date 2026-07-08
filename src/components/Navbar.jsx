import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Countries', path: '/countries' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F5]/90 backdrop-blur-md border-b border-[#E10600]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#E10600] text-xl lg:text-2xl">
              <i className="fa-solid fa-flag-checkered"></i>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#141414] text-sm lg:text-base font-poppins">
                Gul Shahzad
              </span>
              <span className="font-bold text-[#141414] text-sm lg:text-base -mt-1 font-poppins">
                Corporation
              </span>
              <span className="bg-[#FFD500] text-[#141414] text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5 inline-block w-fit font-inter">
                License 2263/RWP
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg font-inter ${
                  isActive(link.path)
                    ? 'text-[#E10600] bg-[#E10600]/5'
                    : 'text-[#444] hover:text-[#E10600] hover:bg-[#E10600]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/92311509987"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-[#FFD500] text-[#141414] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${open ? 'hamburger-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-[#F5F5F5]/95 backdrop-blur-md border-t border-[#E10600]/10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors font-inter ${
                isActive(link.path)
                  ? 'text-[#E10600] bg-[#E10600]/5'
                  : 'text-[#444] hover:text-[#E10600] hover:bg-[#E10600]/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/92311509987"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-[#FFD500] text-[#141414] text-center text-sm font-bold px-5 py-3 rounded-full hover:bg-[#E10600] hover:text-white transition-all"
          >
            <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}