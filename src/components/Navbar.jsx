import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#countries' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-primary tracking-tight font-display">
            Zanib <span className="text-highlight">Recruiting</span>
          </span>
          <span className="hidden md:inline-flex text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full tracking-wider">
            Lic. 2315/RWP
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-ink/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923335020040"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 bg-cta text-ink px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30"
          >
            <i className="fab fa-whatsapp mr-1.5" />Apply Now
          </a>
        </div>

        <button
          className="lg:hidden text-ink text-2xl p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-primary/10 px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-ink/80 hover:text-primary transition-colors rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923335020040"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 block text-center bg-cta text-ink px-5 py-2.5 rounded-full text-sm font-bold"
          >
            <i className="fab fa-whatsapp mr-1.5" />Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
