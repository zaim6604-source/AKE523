import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Countries', to: '/countries' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
];

const destinations = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman',
  'Germany', 'Poland', 'Romania', 'Greece', 'Malaysia'
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#003844' }}>
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#006D77" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#E29578] flex items-center justify-center text-white font-bold shadow-md">
                F
              </div>
              <span className="font-bold text-lg text-white">Fowzan Traders</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#83C5BE' }}>
              Govt. Licensed Overseas Employment Promoter — License No. 2309/SKT
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#83C5BE' }}>
              Daska's trusted gateway to global employment. Connecting Pakistani workers with verified employers worldwide.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.facebook.com/Fowzan-Global-Employment-Services" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFDD00] hover:text-[#003844] transition-all duration-300">
                <i className="fab fa-facebook-f text-sm" />
              </a>
              <a href="https://wa.me/923006162506" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-all duration-300">
                <i className="fab fa-whatsapp text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#FFDD00' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm transition-colors duration-200" style={{ color: '#83C5BE' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#FFDD00' }}>Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((d) => (
                <li key={d}>
                  <span className="text-sm" style={{ color: '#83C5BE' }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#FFDD00' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0526615953" className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#83C5BE' }}>
                  <i className="fa-solid fa-phone text-xs" style={{ color: '#FFDD00' }} />
                  052-6615953
                </a>
              </li>
              <li>
                <a href="https://wa.me/923006162506" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#83C5BE' }}>
                  <i className="fab fa-whatsapp text-xs" style={{ color: '#25D366' }} />
                  0300-6162506
                </a>
              </li>
              <li>
                <a href="mailto:fowzan_traders2012@yahoo.com" className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#83C5BE' }}>
                  <i className="fa-regular fa-envelope text-xs" style={{ color: '#FFDD00' }} />
                  fowzan_traders@yahoo.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm" style={{ color: '#83C5BE' }}>
                  <i className="fa-solid fa-location-dot text-xs mt-1" style={{ color: '#FFDD00' }} />
                  Circular Road, Daska, Sialkot, Punjab
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t text-center" style={{ borderColor: '#006D7760' }}>
          <p className="text-xs sm:text-sm" style={{ color: '#83C5BE' }}>
            &copy; {new Date().getFullYear()} Fowzan Traders — License No. 2309/SKT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
