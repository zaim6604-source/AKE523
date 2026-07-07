import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-primary/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: brand + license */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-sm">AR</span>
              </div>
              <div className="leading-tight">
                <h1 className="font-heading text-sm font-bold text-ink">Afnan Recruiting</h1>
                <p className="text-[10px] font-semibold text-primary/70 -mt-0.5">Agency</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
              2202/MLK
            </span>
          </div>

          {/* Right: links + apply */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {label}
              </button>
            ))}
            <a
              href="https://wa.me/923445937116"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-cta text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-cta/90 transition-all shadow-md"
            >
              <i className="fab fa-whatsapp mr-1.5"></i>
              Apply
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-ink/60 hover:bg-primary/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${open ? "fa-xmark" : "fa-bars"} text-lg`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-primary/10 pt-3 space-y-1">
            {links.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-ink/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href="https://wa.me/923445937116"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 bg-cta text-white text-center px-5 py-2.5 rounded-lg text-sm font-bold"
            >
              <i className="fab fa-whatsapp mr-1.5"></i>
              Apply Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}