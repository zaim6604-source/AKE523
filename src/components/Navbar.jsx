import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F2F6F9]/90 backdrop-blur-md border-b border-[#1B4965]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex items-center gap-2 shrink-0"
          >
            <span className="text-[#1B4965] text-xl lg:text-2xl">
              <i className="fa-regular fa-building"></i>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#0B2436] text-sm lg:text-base font-jakarta">
                Highland
              </span>
              <span className="font-bold text-[#0B2436] text-sm lg:text-base -mt-1 font-jakarta">
                International
              </span>
              <span className="bg-[#FF6B35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5 inline-block w-fit">
                License 2235/RWP
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#2A4A62] hover:text-[#1B4965] transition-colors rounded-lg hover:bg-[#1B4965]/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/923335243790"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-[#FF6B35] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e55a2b] transition-all shadow-md hover:shadow-lg"
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
            <span className="hamburger-line !bg-[#0B2436]"></span>
            <span className="hamburger-line !bg-[#0B2436]"></span>
            <span className="hamburger-line !bg-[#0B2436]"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-[#F2F6F9]/95 backdrop-blur-md border-t border-[#1B4965]/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block px-4 py-2.5 text-sm font-medium text-[#2A4A62] hover:text-[#1B4965] hover:bg-[#1B4965]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923335243790"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-[#FF6B35] text-white text-center text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#e55a2b] transition-all"
          >
            <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}