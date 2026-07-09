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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F5]/90 backdrop-blur-md border-b border-[#E10600]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex items-center gap-2 shrink-0"
          >
            <span className="text-[#E10600] text-xl lg:text-2xl">
              <i className="fa-regular fa-building"></i>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-poppins font-bold text-[#1C1C1C] text-sm lg:text-base hidden sm:block">
                Barkha International
              </span>
              <span className="font-poppins font-bold text-[#1C1C1C] text-sm lg:text-base sm:hidden">
                Barkha
              </span>
              <span className="bg-[#FFD500] text-[#141414] text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5 inline-block w-fit">
                License 2312/RWP
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="https://facebook.com/barkha.international2312"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-[#E10600] hover:text-[#A30000] transition-colors"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </a>
            <div className="w-px h-5 bg-[#E10600]/20 mx-1"></div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#1C1C1C]/80 hover:text-[#E10600] transition-colors rounded-lg hover:bg-[#E10600]/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/923009050416"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-[#FFD500] text-[#141414] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://facebook.com/barkha.international2312"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#E10600]"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </a>
            <button
              className={`flex flex-col gap-1.5 p-2 ${open ? 'hamburger-open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
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
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block px-4 py-2.5 text-sm font-medium text-[#1C1C1C]/80 hover:text-[#E10600] hover:bg-[#E10600]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923009050416"
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