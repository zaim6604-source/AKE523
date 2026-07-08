import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Jobs Portal', to: '/jobs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const DESTINATIONS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany',
  'Poland', 'Romania', 'Malaysia', 'Greece',
];

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <footer className="bg-[#0B3954] text-white" ref={ref}>
      {/* Top divider */}
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
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold">
                GO
              </div>
              <div>
                <div className="font-bold text-lg text-white">Gulalai</div>
                <div className="text-[10px] text-white/60 font-medium tracking-wider">OVERSEAS EMPLOYMENT PROMOTER</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Based at <strong className="text-white">Deans Trade Center</strong>, Peshawar Cantt — your trusted partner for overseas employment. Licensed by the Government of Pakistan.
            </p>
            <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
              <i className="fas fa-certificate mr-1.5 text-[#FF6B35]" />
              License FF-227
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FF6B35] text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-[#FF6B35]/60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-[#FF6B35] text-sm mb-4 uppercase tracking-wider">Destinations</h4>
            <ul className="space-y-2.5">
              {DESTINATIONS.map((dest) => (
                <li key={dest} className="text-sm text-white/70 flex items-center gap-2">
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
                <a href="https://wa.me/923341999588" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fab fa-whatsapp text-[#FF6B35] text-xs w-4" />
                  +92-334-1999588
                </a>
              </li>
              <li>
                <a href="mailto:info@gulalaioverseas.pk" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-envelope text-[#FF6B35] text-xs w-4" />
                  info@gulalaioverseas.pk
                </a>
              </li>
              <li className="text-sm text-white/70 flex items-start gap-2">
                <i className="fas fa-location-dot text-[#FF6B35] text-xs w-4 mt-0.5" />
                <span>FF-227, Deans Trade Center, Peshawar Cantonment, KPK</span>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=34.001843052405775,71.5450493"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5FA8D3] hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-map-pin text-xs w-4" />
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Gulalai Overseas Employment Promoter. All rights reserved. | License # FF-227 | Deans Trade Center, Peshawar
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
