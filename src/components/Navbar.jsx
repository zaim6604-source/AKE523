import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Countries', to: '/countries' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
      isActive
        ? 'text-[#E10600] bg-[#E10600]/10'
        : 'text-[#141414]/70 hover:text-[#E10600] hover:bg-[#E10600]/5'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-[#E10600]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#E10600] text-xl lg:text-2xl">
              <i className="fa-regular fa-building"></i>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#141414] text-sm lg:text-base">
                Pak. Arsalan
              </span>
              <span className="font-bold text-[#141414] text-sm lg:text-base -mt-1">
                Corporation
              </span>
              <span className="bg-[#FFD500] text-[#141414] text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5 inline-block w-fit">
                License 2210/ABT
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/923005096511"
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
        <div className="px-4 py-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-[#E10600]/10">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? 'text-[#E10600] bg-[#E10600]/10' : 'text-[#141414]/70 hover:text-[#E10600] hover:bg-[#E10600]/5'
                }`
              }>
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/923005096511"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-[#FFD500] text-[#141414] text-center text-sm font-bold px-5 py-3 rounded-full hover:bg-[#E10600] hover:text-white transition-all"
          >
            <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}