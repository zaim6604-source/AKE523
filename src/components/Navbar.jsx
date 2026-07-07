import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleNav(e, '#home')}>
            <span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-heading font-bold text-sm">ZB</span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-ink leading-tight">ZB HR Services</span>
              <span className="text-[10px] text-secondary font-medium leading-tight hidden sm:block">HR & Staffing, Lahore</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)} className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/923008582313?text=Hi!%20I%27d%20like%20to%20get%20started%20with%20ZB%20HR%20Services." target="_blank" rel="noopener noreferrer" className="bg-cta text-ink font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2 hidden sm:inline-flex">
              <i className="fa-brands fa-whatsapp text-lg" /> Get Started
            </a>
            <button className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'} text-xl text-ink`} />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-primary/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)} className="block px-4 py-3 text-ink/70 hover:text-primary hover:bg-primary/5 rounded-xl font-medium transition-all">{link.label}</a>
            ))}
            <a href="https://wa.me/923008582313?text=Hi!%20I%27d%20like%20to%20get%20started%20with%20ZB%20HR%20Services." target="_blank" rel="noopener noreferrer" className="bg-cta text-ink font-bold w-full justify-center text-sm mt-3 px-5 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-lg" /> Get Started on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
