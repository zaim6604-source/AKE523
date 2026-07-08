import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Countries', href: '#countries' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#hero" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#0496FF] to-[#0077CC] flex items-center justify-center text-white font-bold text-sm sm:text-base font-[Plus_Jakarta_Sans] shadow-md">
              SI
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold font-[Plus_Jakarta_Sans] text-[#062A45] leading-tight">Shafay</span>
              <span className="text-[10px] sm:text-xs font-medium text-[#0496FF] tracking-wide leading-tight">International</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 xl:px-4 py-2 text-sm font-medium text-[#062A45]/80 hover:text-[#0496FF] rounded-lg hover:bg-blue-50 transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://www.facebook.com/p/Shafay-International-100089781998994/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1877F2] bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors no-underline"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" />
              <span className="hidden md:inline">Facebook</span>
            </a>
            <a
              href="https://wa.me/923002141262"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] hover:shadow-lg hover:shadow-[#FB5607]/30 transition-all no-underline"
            >
              <i className="fab fa-whatsapp text-xs" />
              Apply Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-1 p-2 rounded-lg text-[#062A45] hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-blue-100 bg-white/98 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#062A45]/80 hover:text-[#0496FF] hover:bg-blue-50 rounded-lg transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
