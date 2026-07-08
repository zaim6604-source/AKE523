import { COMPANY, NAV_LINKS, COUNTRIES } from './constants';

export default function Footer() {
  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#7B1FA2] text-white">
      {/* Top divider */}
      <div className="h-1 bg-gradient-to-r from-[#FFD740] via-[#FF4081] to-[#CE93D8]"></div>

      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center text-white font-heading font-bold text-sm">
                HA
              </div>
              <div>
                <p className="font-heading font-bold text-white">{COMPANY.name}</p>
                <p className="text-[#CE93D8] text-xs">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-[#CE93D8]/80 leading-relaxed">
              {COMPANY.licenseLine}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={COMPANY.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD740] hover:text-[#2A1033] transition-all"
              >
                <i className="fab fa-whatsapp text-xs"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FFD740] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-sm text-white/70 hover:text-[#FFD740] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FFD740] mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              {COUNTRIES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <span className="text-sm text-white/70">
                    {c.flag} {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Offices */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#FFD740] mb-4">
              Our Offices
            </h4>
            <ul className="space-y-4">
              {COMPANY.offices.map((office, i) => (
                <li key={i} className="flex items-start gap-2">
                  <i className="fas fa-location-dot text-xs text-[#FF4081] mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="text-xs font-semibold text-white/90">{office.name}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{office.address}</p>
                    {office.phone && (
                      <p className="text-xs text-white/70 mt-0.5">
                        <i className="fas fa-phone mr-1"></i>{office.phone}
                      </p>
                    )}
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <i className="fab fa-whatsapp text-xs text-[#FF4081] mt-1 flex-shrink-0"></i>
                <span className="text-sm text-white/70">{COMPANY.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-envelope text-xs text-[#FF4081] mt-1 flex-shrink-0"></i>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/70 hover:text-[#FFD740] transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#CE93D8]/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#CE93D8]/40">
            <i className="fas fa-certificate mr-1"></i> License No. {COMPANY.license}
          </p>
        </div>
      </div>
    </footer>
  );
}