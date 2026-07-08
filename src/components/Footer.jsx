import useInView from '../hooks/useInView';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const DESTINATIONS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Germany', 'Poland', 'Italy', 'Malaysia', 'South Korea', 'Oman',
];

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <footer className="bg-[#E63600] text-white" ref={ref}>
      {/* Wavy top divider */}
      <div className="relative w-full h-12 sm:h-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#FFF3E6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold">
                IR
              </div>
              <div>
                <div className="font-bold text-lg text-white">Ithmanzi</div>
                <div className="text-[10px] text-white/60 font-medium tracking-wider">RECRUITING AGENCY</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Govt. Licensed OEP — License No. 2174/RWP. Connecting Pakistan's workforce to global opportunities since 2010.
            </p>
            <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
              <i className="fas fa-certificate mr-1.5 text-[#FFD23F]" />
              License 2174/RWP
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FFD23F] text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-[#FFD23F]/60" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FFD23F] text-sm mb-4 uppercase tracking-wider">Destinations</h4>
            <ul className="space-y-2.5">
              {DESTINATIONS.map((dest) => (
                <li key={dest} className="text-sm text-white/70 flex items-center gap-2">
                  <i className="fas fa-globe text-[10px] text-[#FFD23F]/60" />
                  {dest}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FFD23F] text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0515110610" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-phone text-[#FFD23F] text-xs w-4" />
                  051-5110610
                </a>
              </li>
              <li>
                <a href="https://wa.me/923465320238" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fab fa-whatsapp text-[#FFD23F] text-xs w-4" />
                  +92-346-5320238
                </a>
              </li>
              <li className="text-sm text-white/70 flex items-start gap-2">
                <i className="fas fa-location-dot text-[#FFD23F] text-xs w-4 mt-0.5" />
                <span>Office # 10, Al-Riaz Plaza, Attalian Shoes, Street Bank Road, Saddar, Rawalpindi, Punjab</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Ithmanzi Recruiting Agency. All rights reserved. | Govt. Licensed OEP — License No. 2174/RWP
          </p>
          <div className="flex items-center gap-3 text-white/30 text-xs">
            <span className="flex items-center gap-1">
              <i className="fas fa-shield-alt" /> Licensed
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-handshake" /> Trusted
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-bolt" /> Reliable
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}