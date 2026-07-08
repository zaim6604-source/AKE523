const destinations = ['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait', 'Germany', 'Malaysia', 'Romania', 'Turkey'];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-accent)' }}>
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#E10600" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-black font-bold shadow-md" style={{ backgroundColor: 'var(--color-cta)' }}>
                R
              </div>
              <span className="font-bold text-lg text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Rais Brothers</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#999' }}>
              Licensed Travel & Tours Operator + Overseas Employment Promoter — License No. 2234/KAR
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#999' }}>
              Connecting Pakistani workers with trusted employers abroad. Your trusted partner for travel and overseas careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--color-cta)' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Destinations', path: '/countries' },
                { label: 'Process', path: '/process' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: '#999' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--color-cta)' }}>Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((d) => (
                <li key={d}>
                  <span className="text-sm" style={{ color: '#999' }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--color-cta)' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:02135214272" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#999' }}>
                  <i className="fa-solid fa-phone text-xs" style={{ color: 'var(--color-cta)' }} />
                  021-35214272
                </a>
              </li>
              <li>
                <a href="tel:02135214346" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#999' }}>
                  <i className="fa-solid fa-phone text-xs" style={{ color: 'var(--color-cta)' }} />
                  021-35214346
                </a>
              </li>
              <li>
                <a href="https://wa.me/923009219780" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#999' }}>
                  <i className="fab fa-whatsapp text-xs" style={{ color: 'var(--color-cta)' }} />
                  0300-9219780
                </a>
              </li>
              <li>
                <a href="mailto:raisbrothers2009@yahoo.com" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#999' }}>
                  <i className="fa-regular fa-envelope text-xs" style={{ color: 'var(--color-cta)' }} />
                  raisbrothers2009@yahoo.com
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/p/Rais-brothers-tarvels-and-tours-100053261996924/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#999' }}>
                  <i className="fab fa-facebook text-xs" style={{ color: 'var(--color-cta)' }} />
                  Facebook
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm" style={{ color: '#999' }}>
                  <i className="fa-solid fa-location-dot text-xs mt-1" style={{ color: 'var(--color-cta)' }} />
                  M-1, Mehran Estate, Mezzanine Floor, Dr. Dawood Pota Road, Cantt, Karachi South, Sindh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t text-center" style={{ borderColor: 'rgba(255, 213, 0, 0.2)' }}>
          <p className="text-xs sm:text-sm" style={{ color: '#666' }}>
            &copy; {new Date().getFullYear()} Rais Brothers — License No. 2234/KAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}