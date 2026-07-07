import { useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D7263D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-heading font-bold text-[#340710]">
              Innovative <span className="text-[#D7263D]">World</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#D7263D] text-white">
              Nowshera
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#340710]/70 hover:text-[#D7263D] transition-colors rounded-lg hover:bg-[#FFF0F3]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/923335553256"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-[#02C39A] hover:bg-[#02b38d] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2 text-sm"
            >
              <FaWhatsapp className="text-sm" />
              Get Started
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#340710] hover:text-[#D7263D] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 bg-white/95 backdrop-blur-md border-t border-[#D7263D]/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-[#340710]/70 hover:text-[#D7263D] hover:bg-[#FFF0F3] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923335553256"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block w-full text-center mt-2 bg-[#02C39A] hover:bg-[#02b38d] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm"
          >
            <FaWhatsapp className="text-sm" />
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
