import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1A0A1E] to-[#2D1B3A] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF3CAC] to-[#784BA0] flex items-center justify-center text-white font-bold text-sm font-[Plus Jakarta Sans]">
                <i className="fas fa-feather-alt text-xs" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold font-[Plus Jakarta Sans] text-white leading-tight">Parwaz</span>
                <span className="text-[10px] font-medium text-white/70 tracking-wide leading-tight">Recruiting Agency</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
              Licensed overseas employment agency serving Peshawar and KPK. License #2325/PWR. Connecting talent to global opportunities.
            </p>
            <div className="flex gap-2">
              <a
                href="https://wa.me/923339319471"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="https://www.facebook.com/Parwaazoep"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="tel:0915271919"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="Phone"
              >
                <i className="fas fa-phone" />
              </a>
              <a
                href="mailto:parwazoep@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-[Plus Jakarta Sans] mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Our Story', to: '/story' },
                { label: 'Services', to: '/services' },
                { label: 'Country Guides', to: '/guides' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold font-[Plus Jakarta Sans] mb-4 text-white">Destinations</h4>
            <ul className="space-y-2.5">
              {[
                'Saudi Arabia', 'UAE', 'Qatar', 'Oman',
                'Germany', 'Poland', 'Greece', 'Romania', 'Malaysia',
              ].map((d) => (
                <li key={d}>
                  <span className="text-xs sm:text-sm text-white/60">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Quick Apply */}
          <div>
            <h4 className="text-sm font-bold font-[Plus Jakarta Sans] mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/60">
              <div className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-0.5 text-[#00F5D4]" />
                <span>
                  Room No. C-16, First Floor<br />
                  Baby Shopping Center, Arbab Road<br />
                  Cantt, Peshawar, KPK
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-[#00F5D4]" />
                <a href="tel:0915271919" className="text-white/60 hover:text-white no-underline">091-5271919</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-[#00F5D4]" />
                <a
                  href="https://wa.me/923339319471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white no-underline"
                >
                  0333-9319471
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#00F5D4]" />
                <a href="mailto:parwazoep@gmail.com" className="text-white/60 hover:text-white no-underline">
                  parwazoep@gmail.com
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/923339319471"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#2B86C5] rounded-full hover:bg-[#2470a5] transition-all no-underline"
            >
              <i className="fas fa-feather-alt text-xs" />
              Quick Apply
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>&copy; {year} Parwaz Recruiting Agency. All rights reserved.</span>
          <span>License #2325/PWR | Govt. Registered Overseas Employment Agency</span>
        </div>
      </div>
    </footer>
  );
}