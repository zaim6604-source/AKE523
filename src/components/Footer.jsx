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
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany', 'Poland', 'Greece', 'Malaysia',
];

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <footer className="bg-[#0B3954] text-white" ref={ref}>
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
            fill="#F2F6F9"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] font-bold">
                MG
              </div>
              <div>
                <div className="font-bold text-lg text-white">M. G. Traders</div>
                <div className="text-[10px] text-white/50 font-medium tracking-wider">RECRUITMENT AGENCY</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Govt. Licensed OEP — License No. 2264/RWP. Connecting Pakistan's workforce to global opportunities since 2014.
            </p>
            <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
              <i className="fas fa-certificate mr-1.5 text-[#FF6B35]" />
              License 2264/RWP
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FF6B35] text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-[#FF6B35]/60" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FF6B35] text-sm mb-4 uppercase tracking-wider">Destinations</h4>
            <ul className="space-y-2.5">
              {DESTINATIONS.map((dest) => (
                <li key={dest} className="text-sm text-white/60 flex items-center gap-2">
                  <i className="fas fa-globe text-[10px] text-[#FF6B35]/60" />
                  {dest}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FF6B35] text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0514932104" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-phone text-[#FF6B35] text-xs w-4" />
                  051-4932104
                </a>
              </li>
              <li>
                <a href="https://wa.me/923330572222" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fab fa-whatsapp text-[#FF6B35] text-xs w-4" />
                  0333-0572222
                </a>
              </li>
              <li>
                <a href="https://wa.me/923335506297" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fab fa-whatsapp text-[#FF6B35] text-xs w-4" />
                  0333-5506297
                </a>
              </li>
              <li className="text-sm text-white/60 flex items-start gap-2">
                <i className="fas fa-location-dot text-[#FF6B35] text-xs w-4 mt-0.5" />
                <span>Office No. 16, 2nd Floor, Rose Arcade, Rehmanabad Chowk, Murree Road, Rawalpindi, Punjab</span>
              </li>
              <li>
                <a href="mailto:info@mgtraders.pk" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-envelope text-[#FF6B35] text-xs w-4" />
                  info@mgtraders.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} M. G. Traders. All rights reserved. | Govt. Licensed OEP — License No. 2264/RWP
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
