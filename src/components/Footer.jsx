const quickLinks = ['Home', 'About', 'Services', 'Destinations', 'Process', 'FAQs', 'Contact'];
const destinations = ['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany', 'Poland', 'Romania', 'Greece', 'Malaysia'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold shadow-md" style={{ backgroundColor: '#E29578' }}>
                SZ
              </div>
              <span className="font-bold text-lg text-white">Shah Zaman Manpower</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#83C5BE' }}>
              Govt. Licensed OEP — License No. 2208/RWP
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#83C5BE' }}>
              Connecting Pakistani workers with trusted employers abroad since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#E29578' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(`#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`); }}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#83C5BE' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#E29578' }}>Destinations</h4>
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
            <h4 className="text-sm font-bold mb-4" style={{ color: '#E29578' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0514442289" className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#83C5BE' }}>
                  <i className="fa-solid fa-phone text-xs" style={{ color: '#E29578' }} />
                  051-4442289
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/shahzamanmanpower/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: '#83C5BE' }}
                >
                  <i className="fa-brands fa-facebook-f text-xs" style={{ color: '#E29578' }} />
                  Facebook
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm" style={{ color: '#83C5BE' }}>
                  <i className="fa-solid fa-location-dot text-xs mt-1" style={{ color: '#E29578' }} />
                  Flat No. 14, Rehmat Plaza, I-10 Markaz, Islamabad, ICT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t text-center" style={{ borderColor: '#006D7760' }}>
          <p className="text-xs sm:text-sm" style={{ color: '#83C5BE' }}>
            &copy; {new Date().getFullYear()} Shah Zaman Manpower — License No. 2208/RWP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}