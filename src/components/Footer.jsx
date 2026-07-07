const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const destinations = [
  "Qatar", "UAE", "Saudi Arabia", "Oman",
  "Germany", "Poland", "Italy", "Greece", "Hungary",
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-sm">AR</span>
              </div>
              <div className="leading-tight">
                <h3 className="font-heading text-sm font-bold text-white">Afnan Recruiting</h3>
                <p className="text-cta text-[10px] font-bold tracking-widest uppercase">Agency</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cta/20 text-cta border border-cta/30 mb-4">
              2202/MLK
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              Licensed overseas recruitment agency based in Saddar, Rawalpindi, connecting Pakistani
              workers with trusted Gulf and European employers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-white/60 hover:text-cta transition-colors duration-200 flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[8px] text-cta"></i>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-5">
              Destinations
            </h4>
            <ul className="flex flex-col gap-2">
              {destinations.map((d) => (
                <li key={d} className="text-sm text-white/60 flex items-center gap-2">
                  <i className="fas fa-globe text-[10px] text-cta/60"></i>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <div className="flex items-start gap-3">
                  <i className="fas fa-phone text-cta mt-0.5 text-sm"></i>
                  <div className="text-sm text-white/60">
                    <p>0934-431312</p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/923445937116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-cta transition-colors"
                >
                  <i className="fab fa-whatsapp text-cta mt-0.5 text-sm"></i>
                  0344-5937116
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@afnanra.pk"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-cta transition-colors"
                >
                  <i className="fas fa-envelope text-cta mt-0.5 text-sm"></i>
                  info@afnanra.pk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <i className="fas fa-location-dot text-cta mt-0.5 text-sm"></i>
                  <div className="text-sm text-white/60">
                    <p>Office No. 80, 2nd Floor,</p>
                    <p>Mobi Plaza, Haider Road,</p>
                    <p>Saddar, Rawalpindi</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Afnan Recruiting Agency. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            License: 2202/MLK — Haider Road, Saddar, Rawalpindi
          </p>
        </div>
      </div>
    </footer>
  );
}