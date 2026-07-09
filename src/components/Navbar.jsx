import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
              className="flex items-center gap-2 shrink-0"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#E0115F' }}>
                AE
              </span>
              <span className="font-bold text-sm sm:text-base lg:hidden" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Al Khaliq</span>
              <span className="font-bold text-base hidden lg:block" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Al Khaliq Enterprises</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white ml-1" style={{ backgroundColor: '#E0115F' }}>2314/SKT</span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-[#FFF0F4]"
                  style={{ color: '#2E0A1C' }}
                >{link.label}</a>
              ))}
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
                className="ml-3 px-5 py-2 rounded-full text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: '#7B2D8E' }}
              >Apply Now</a>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setDrawerOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-[#FFF0F4] transition-colors" style={{ color: '#2E0A1C' }}>
              <i className="fa-solid fa-bars text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-sm" style={{ color: '#2E0A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Al Khaliq</span>
              <button onClick={() => setDrawerOpen(false)} className="p-2 rounded-lg hover:bg-[#FFF0F4]" style={{ color: '#2E0A1C' }}>
                <i className="fa-solid fa-xmark text-xl" />
              </button>
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-[#FFF0F4]"
                  style={{ color: '#2E0A1C' }}
                >{link.label}</a>
              ))}
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
                className="block mt-4 px-5 py-3 rounded-full text-sm font-bold text-white text-center shadow-md"
                style={{ backgroundColor: '#7B2D8E' }}
              >Apply Now</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
